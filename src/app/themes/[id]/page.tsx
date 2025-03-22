'use client';

import Image from 'next/image';
import Link from 'next/link';
import ThemeGallery from '@/components/theme/ThemeGallery';

export default function ThemePage() {
  // Mock data for theme details
  const theme = {
    id: 1,
    name: "Business Pro",
    description: "A professional WordPress theme for businesses and corporations",
    price: 59,
    rating: 4.8,
    totalSales: 1500,
    previewImage: "https://via.placeholder.com/1200x800",
    screenshots: [
      "https://via.placeholder.com/1200x800",
      "https://via.placeholder.com/1200x800",
      "https://via.placeholder.com/1200x800",
      "https://via.placeholder.com/1200x800"
    ],
    features: [
      "Responsive Design",
      "Customizable Header",
      "Multiple Layout Options",
      "SEO Optimized",
      "Fast Loading",
      "Translation Ready"
    ],
    author: {
      name: "John Doe",
      avatar: "https://via.placeholder.com/150",
      rating: 4.9,
      totalThemes: 25
    },
    category: "Business",
    tags: ["WordPress", "Business", "Corporate", "Professional"],
    lastUpdated: "2024-03-22",
    version: "1.2.0",
    compatibleWith: "WordPress 6.0+",
    similarThemes: [
      {
        id: 2,
        name: "Corporate Plus",
        price: 49,
        image: "https://via.placeholder.com/300x200"
      },
      {
        id: 3,
        name: "Enterprise Pro",
        price: 69,
        image: "https://via.placeholder.com/300x200"
      }
    ]
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Gallery */}
          <div className="lg:col-span-2">
            <ThemeGallery images={theme.screenshots} title={theme.name} />
          </div>

          {/* Right Column - Details */}
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{theme.name}</h1>
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center">
                  <svg className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
// Mock data for theme details
const themeData = {
  id: '1',
  title: 'Modern Business Pro',
  description: 'A professional business theme with modern design and powerful features',
  longDescription: `Modern Business Pro is a comprehensive business theme that combines elegant design with powerful functionality. Perfect for corporate websites, professional services, and business portfolios.

Key Features:
• Responsive design that works on all devices
• Modern and clean interface
• Customizable color schemes
• Built-in contact forms
• SEO optimized
• Fast loading times
• Regular updates and support`,
  price: 49.99,
  imageUrl: '/images/theme1.jpg',
  previewUrl: 'https://demo.thememarket.com/modern-business-pro',
  author: 'DesignStudio',
  category: 'Business',
  rating: 4.8,
  sales: 1234,
  lastUpdated: '2024-03-15',
  version: '2.1.0',
  tags: ['Business', 'Corporate', 'Professional', 'Responsive', 'Modern'],
  screenshots: [
    '/images/theme1.jpg',
    '/images/theme1-screenshot1.jpg',
    '/images/theme1-screenshot2.jpg',
    '/images/theme1-screenshot3.jpg',
  ],
};

export default function ThemePage() {
  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Theme Header */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="relative h-64 md:h-96 w-full md:w-1/2">
              <Image
                src={themeData.imageUrl}
                alt={themeData.title}
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-indigo-600 font-medium">{themeData.category}</span>
                <div className="flex items-center">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`h-5 w-5 ${
                          i < Math.floor(themeData.rating) ? 'text-yellow-400' : 'text-gray-300'
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-gray-600">({themeData.rating})</span>
                </div>
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">{themeData.title}</h1>
              <p className="text-gray-600 mb-6">{themeData.description}</p>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <Link href={`/authors/${themeData.author}`} className="text-gray-600 hover:text-indigo-600">
                    by {themeData.author}
                  </Link>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-gray-900">${themeData.price}</div>
                  <div className="text-sm text-gray-600">{themeData.sales} sales</div>
                </div>
              </div>
              <div className="flex gap-4">
                <button className="flex-1 bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 transition-colors">
                  Purchase Now
                </button>
                <a
                  href={themeData.previewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 border border-gray-300 text-gray-700 px-6 py-3 rounded-md hover:bg-gray-50 transition-colors text-center"
                >
                  Live Preview
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Theme Details */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Description</h2>
              <div className="prose max-w-none">
                {themeData.longDescription.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-gray-600 mb-4">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Screenshots</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {themeData.screenshots.map((screenshot, index) => (
                  <div key={index} className="relative h-48">
                    <Image
                      src={screenshot}
                      alt={`${themeData.title} screenshot ${index + 1}`}
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Theme Information</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Last Updated</h3>
                  <p className="text-gray-900">{themeData.lastUpdated}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Version</h3>
                  <p className="text-gray-900">{themeData.version}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Category</h3>
                  <p className="text-gray-900">{themeData.category}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Tags</h3>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {themeData.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Author</h2>
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center">
                    <span className="text-xl font-bold text-gray-600">
                      {themeData.author.charAt(0)}
                    </span>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">
                    <Link href={`/authors/${themeData.author}`} className="hover:text-indigo-600">
                      {themeData.author}
                    </Link>
                  </h3>
                  <p className="text-sm text-gray-500">Theme Author</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 