'use client';

import { createContext, useContext, useEffect, useState } from 'react';

interface Theme {
  id: number;
  name: string;
  price: number;
  image: string;
}

interface FavoritesContextType {
  favorites: Theme[];
  addFavorite: (theme: Theme) => void;
  removeFavorite: (themeId: number) => void;
  isFavorite: (themeId: number) => boolean;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

export function FavoritesProvider({ children }: { children: React.ReactNode }) {
  const [favorites, setFavorites] = useState<Theme[]>([]);

  useEffect(() => {
    const savedFavorites = localStorage.getItem('favorites');
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    }
  }, []);

  const addFavorite = (theme: Theme) => {
    const newFavorites = [...favorites, theme];
    setFavorites(newFavorites);
    localStorage.setItem('favorites', JSON.stringify(newFavorites));
  };

  const removeFavorite = (themeId: number) => {
    const newFavorites = favorites.filter(theme => theme.id !== themeId);
    setFavorites(newFavorites);
    localStorage.setItem('favorites', JSON.stringify(newFavorites));
  };

  const isFavorite = (themeId: number) => {
    return favorites.some(theme => theme.id === themeId);
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite, isFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  const context = useContext(FavoritesContext);
  if (context === undefined) {
    throw new Error('useFavorites must be used within a FavoritesProvider');
  }
  return context;
} 