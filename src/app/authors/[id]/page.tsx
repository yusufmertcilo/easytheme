'use client';

import Image from 'next/image';
import Link from 'next/link';
import ThemeCard from '@/components/theme/ThemeCard';

// Mock data for author details
const authorData = {
  id: 'designstudio',
  name: 'DesignStudio',
  description: 'Professional theme developers with over 10 years of experience in creating high-quality WordPress and HTML themes.',
  avatar: '/images/author-avatar.jpg',
  totalThemes: 45,
  totalSales: 15678,
  rating: 4.9,
  memberSince: '2015',
  themes: [
    {
      id: '1',
      title: 'Modern Business Pro',
      description: 'A professional business theme with modern design and powerful features',
      price: 49.99,
      imageUrl: '/images/theme1.jpg',
      author: 'DesignStudio',
      category: 'Business',
      rating: 4.8,
      sales: 1234,
    },
    {
      id: '2',
      title: 'E-Commerce Plus',
      description: 'Complete e-commerce solution with advanced features and responsive design',
      price: 59.99,
      imageUrl: '/images/theme2.jpg',
      author: 'DesignStudio',
      category: 'E-Commerce',
      rating: 4.9,
      sales: 856,
    },
    // Add more themes here
  ],
  categories: [
    { id: 'business', name: 'Business', count: 15 },
    { id: 'ecommerce', name: 'E-Commerce', count: 12 },
    { id: 'portfolio', name: 'Portfolio', count: 8 },
    { id: 'blog', name: 'Blog', count: 10 },
  ],
};

export default function AuthorPage({ params }: { params: { id: string } }) {
  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Author Header */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            <div className="relative h-32 w-32 flex-shrink-0">
              <Image
                src={authorData.avatar}
                alt={authorData.name}
                fill
                className="rounded-full object-cover"
              />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">{authorData.name}</h1>
              <p className="text-gray-600 mb-6">{authorData.description}</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div>
                  <div className="text-2xl font-bold text-gray-900">{authorData.totalThemes}</div>
                  <div className="text-sm text-gray-500">Themes</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">{authorData.totalSales}</div>
                  <div className="text-sm text-gray-500">Sales</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">{authorData.rating}</div>
                  <div className="text-sm text-gray-500">Rating</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">{authorData.memberSince}</div>
                  <div className="text-sm text-gray-500">Member Since</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Author Categories */}
          <div className="w-full md:w-64">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-lg font-medium text-gray-900 mb-4">Categories</h2>
              <div className="space-y-2">
                {authorData.categories.map((category) => (
                  <Link
                    key={category.id}
                    href={`/categories/${category.id}`}
                    className="flex items-center justify-between px-4 py-2 rounded-md text-gray-700 hover:bg-gray-100"
                  >
                    <span>{category.name}</span>
                    <span className="text-sm text-gray-500">{category.count}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Author's Themes */}
          <div className="flex-1">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900">Themes by {authorData.name}</h2>
              <select className="rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
                <option value="popular">Most Popular</option>
                <option value="newest">Newest</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {authorData.themes.map((theme) => (
                <ThemeCard key={theme.id} {...theme} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 