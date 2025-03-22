'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

interface Theme {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  author: string;
  rating: number;
  image: string;
}

export default function SearchBar() {
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState<Theme[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  // Mock data - later replace with API call
  const mockThemes: Theme[] = [
    {
      id: 1,
      name: "Business Pro",
      description: "Professional WordPress theme for businesses",
      price: 59,
      category: "Business",
      author: "John Doe",
      rating: 4.8,
      image: "https://via.placeholder.com/300x200"
    },
    {
      id: 2,
      name: "Portfolio Plus",
      description: "Creative portfolio theme for artists",
      price: 49,
      category: "Portfolio",
      author: "Jane Smith",
      rating: 4.6,
      image: "https://via.placeholder.com/300x200"
    },
    // Add more mock themes as needed
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query.length > 2) {
      const filtered = mockThemes.filter(theme =>
        theme.name.toLowerCase().includes(query.toLowerCase()) ||
        theme.description.toLowerCase().includes(query.toLowerCase()) ||
        theme.category.toLowerCase().includes(query.toLowerCase())
      );
      setResults(filtered);
      setIsOpen(true);
    } else {
      setResults([]);
      setIsOpen(false);
    }
  };

  return (
    <div className="relative" ref={searchRef}>
      <div className="relative">
        <input
          type="text"
          className="w-full bg-gray-100 dark:bg-gray-700 rounded-full py-2 pl-4 pr-10 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:text-white"
          placeholder="Search themes..."
          value={searchQuery}
          onChange={(e) => handleSearch(e.target.value)}
          onFocus={() => setIsOpen(true)}
        />
        <button className="absolute right-3 top-1/2 transform -translate-y-1/2">
          <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>
      </div>

      {isOpen && results.length > 0 && (
        <div className="absolute z-10 w-full mt-2 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
          <div className="py-2">
            {results.map((theme) => (
              <Link
                key={theme.id}
                href={`/themes/${theme.id}`}
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                onClick={() => setIsOpen(false)}
              >
                <div className="flex items-center">
                  <img
                    src={theme.image}
                    alt={theme.name}
                    className="w-12 h-8 object-cover rounded"
                  />
                  <div className="ml-3">
                    <div className="text-sm font-medium text-gray-900 dark:text-white">
                      {theme.name}
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      {theme.category} • ${theme.price}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
} 