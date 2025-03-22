'use client';

import { useState } from 'react';
import ThemeCard from '@/components/theme/ThemeCard';

// Mock data for themes
const themes = [
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
    author: 'WebCraft',
    category: 'E-Commerce',
    rating: 4.9,
    sales: 856,
  },
  {
    id: '3',
    title: 'Portfolio Master',
    description: 'Perfect for showcasing your creative work with stunning layouts',
    price: 39.99,
    imageUrl: '/images/theme3.jpg',
    author: 'CreativeHub',
    category: 'Portfolio',
    rating: 4.7,
    sales: 2341,
  },
  // Add more mock themes here
];

const categories = [
  'All',
  'Business',
  'E-Commerce',
  'Portfolio',
  'Blog',
  'Landing Pages',
  'Admin Dashboards',
];

const priceRanges = [
  { label: 'All Prices', value: 'all' },
  { label: 'Under $20', value: 'under20' },
  { label: '$20 - $50', value: '20to50' },
  { label: '$50 - $100', value: '50to100' },
  { label: 'Over $100', value: 'over100' },
];

export default function ThemesPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedPriceRange, setSelectedPriceRange] = useState('all');
  const [sortBy, setSortBy] = useState('popular');

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4 md:mb-0">
            All Themes
          </h1>
          <div className="flex items-center space-x-4">
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
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="w-full md:w-64 space-y-6">
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-4">Categories</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`w-full text-left px-4 py-2 rounded-md ${
                      selectedCategory === category
                        ? 'bg-indigo-100 text-indigo-700'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-4">Price Range</h3>
              <div className="space-y-2">
                {priceRanges.map((range) => (
                  <button
                    key={range.value}
                    onClick={() => setSelectedPriceRange(range.value)}
                    className={`w-full text-left px-4 py-2 rounded-md ${
                      selectedPriceRange === range.value
                        ? 'bg-indigo-100 text-indigo-700'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {range.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Theme Grid */}
          <div className="flex-1">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {themes.map((theme) => (
                <ThemeCard key={theme.id} {...theme} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 