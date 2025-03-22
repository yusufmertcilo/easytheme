'use client';

import { useState } from 'react';
import Image from 'next/image';
import ThemeCard from '@/components/theme/ThemeCard';

// Mock data for category details
const categoryData = {
  id: 'business',
  name: 'Business',
  description: 'Professional themes for corporate websites and business portfolios. Perfect for companies looking to establish a strong online presence.',
  count: 156,
  image: '/images/category-business.jpg',
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
      title: 'Corporate Plus',
      description: 'Complete corporate website solution with advanced features',
      price: 59.99,
      imageUrl: '/images/theme2.jpg',
      author: 'WebCraft',
      category: 'Business',
      rating: 4.7,
      sales: 856,
    },
    // Add more themes here
  ],
  subcategories: [
    { id: 'corporate', name: 'Corporate', count: 45 },
    { id: 'agency', name: 'Agency', count: 32 },
    { id: 'startup', name: 'Startup', count: 28 },
    { id: 'consulting', name: 'Consulting', count: 25 },
    { id: 'services', name: 'Services', count: 26 },
  ],
};

export default function CategoryPage() {
  const [selectedSubcategory, setSelectedSubcategory] = useState('all');
  const [sortBy, setSortBy] = useState('popular');

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Category Header */}
        <div className="relative h-64 rounded-lg overflow-hidden mb-8">
          <Image
            src={categoryData.image}
            alt={categoryData.name}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-4xl font-bold mb-4">{categoryData.name}</h1>
              <p className="text-lg">{categoryData.count} themes available</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="w-full md:w-64 space-y-6">
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-4">Subcategories</h3>
              <div className="space-y-2">
                <button
                  onClick={() => setSelectedSubcategory('all')}
                  className={`w-full text-left px-4 py-2 rounded-md ${
                    selectedSubcategory === 'all'
                      ? 'bg-indigo-100 text-indigo-700'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  All Themes
                </button>
                {categoryData.subcategories.map((subcategory) => (
                  <button
                    key={subcategory.id}
                    onClick={() => setSelectedSubcategory(subcategory.id)}
                    className={`w-full text-left px-4 py-2 rounded-md ${
                      selectedSubcategory === subcategory.id
                        ? 'bg-indigo-100 text-indigo-700'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {subcategory.name} ({subcategory.count})
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-4">Price Range</h3>
              <div className="space-y-2">
                <button className="w-full text-left px-4 py-2 rounded-md text-gray-700 hover:bg-gray-100">
                  All Prices
                </button>
                <button className="w-full text-left px-4 py-2 rounded-md text-gray-700 hover:bg-gray-100">
                  Under $20
                </button>
                <button className="w-full text-left px-4 py-2 rounded-md text-gray-700 hover:bg-gray-100">
                  $20 - $50
                </button>
                <button className="w-full text-left px-4 py-2 rounded-md text-gray-700 hover:bg-gray-100">
                  $50 - $100
                </button>
                <button className="w-full text-left px-4 py-2 rounded-md text-gray-700 hover:bg-gray-100">
                  Over $100
                </button>
              </div>
            </div>
          </div>

          {/* Theme Grid */}
          <div className="flex-1">
            <div className="flex justify-between items-center mb-8">
              <p className="text-gray-600">
                Showing {categoryData.themes.length} themes
              </p>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              >
                <option value="popular">Most Popular</option>
                <option value="newest">Newest</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {categoryData.themes.map((theme) => (
                <ThemeCard key={theme.id} {...theme} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 