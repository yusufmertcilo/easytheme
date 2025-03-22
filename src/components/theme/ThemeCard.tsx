'use client';

import Link from 'next/link';
import { useFavorites } from '@/context/FavoritesContext';
import ImageWrapper from '@/components/common/ImageWrapper';

interface ThemeCardProps {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  author: {
    name: string;
    avatar: string;
  };
  rating: number;
  totalSales: number;
}

export default function ThemeCard({
  id,
  name,
  description,
  price,
  image,
  category,
  author,
  rating,
  totalSales,
}: ThemeCardProps) {
  const { isFavorite, addFavorite, removeFavorite } = useFavorites();

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (isFavorite(id)) {
      removeFavorite(id);
    } else {
      addFavorite({
        id,
        name,
        price,
        image,
      });
    }
  };

  return (
    <Link href={`/themes/${id}`} className="group">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md">
        <div className="relative aspect-video">
          <ImageWrapper
            src={image}
            alt={name}
            width={400}
            height={225}
            className="w-full h-full object-cover"
          />
          <button
            onClick={handleFavoriteClick}
            className="absolute top-2 right-2 p-2 rounded-full bg-white dark:bg-gray-800 shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-200"
          >
            <svg
              className={`h-5 w-5 ${isFavorite(id) ? 'text-red-500' : 'text-gray-400'}`}
              fill={isFavorite(id) ? 'currentColor' : 'none'}
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </button>
        </div>
        <div className="p-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white truncate">
              {name}
            </h3>
            <span className="text-lg font-bold text-indigo-600 dark:text-indigo-400">
              ${price}
            </span>
          </div>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
            {description}
          </p>
          <div className="mt-4 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="flex-shrink-0">
                <ImageWrapper
                  src={author.avatar}
                  alt={author.name}
                  width={24}
                  height={24}
                  className="rounded-full"
                />
              </div>
              <span className="text-sm text-gray-600 dark:text-gray-400">
                {author.name}
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <svg
                  className="h-4 w-4 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.363 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.363-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="ml-1 text-sm text-gray-600 dark:text-gray-400">
                  {rating}
                </span>
              </div>
              <div className="flex items-center">
                <svg
                  className="h-4 w-4 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                </svg>
                <span className="ml-1 text-sm text-gray-600 dark:text-gray-400">
                  {totalSales}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
} 