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
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="ml-1 text-sm text-gray-600 dark:text-gray-400">{theme.rating}</span>
                </div>
                <span className="text-sm text-gray-600 dark:text-gray-400">{theme.totalSales} sales</span>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-6">{theme.description}</p>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <Image
                    src={theme.author.avatar}
                    alt={theme.author.name}
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <div className="ml-3">
                    <Link href={`/authors/${theme.author.name}`} className="text-sm font-medium text-gray-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400">
                      {theme.author.name}
                    </Link>
                    <div className="text-sm text-gray-500 dark:text-gray-400">{theme.author.totalThemes} themes</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">${theme.price}</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">One-time payment</div>
                </div>
              </div>
              <button className="w-full bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 transition-colors">
                Purchase Now
              </button>
            </div>

            {/* Features */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Features</h2>
              <ul className="space-y-2">
                {theme.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-600 dark:text-gray-400">
                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Theme Information */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Theme Information</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Last Updated</h3>
                  <p className="text-gray-900 dark:text-white">{theme.lastUpdated}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Version</h3>
                  <p className="text-gray-900 dark:text-white">{theme.version}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Compatible With</h3>
                  <p className="text-gray-900 dark:text-white">{theme.compatibleWith}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Tags</h3>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {theme.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Similar Themes */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Similar Themes</h2>
              <div className="space-y-4">
                {theme.similarThemes.map((similarTheme) => (
                  <Link
                    key={similarTheme.id}
                    href={`/themes/${similarTheme.id}`}
                    className="flex items-center space-x-4 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                  >
                    <Image
                      src={similarTheme.image}
                      alt={similarTheme.name}
                      width={80}
                      height={60}
                      className="rounded-md"
                    />
                    <div>
                      <h3 className="text-sm font-medium text-gray-900 dark:text-white">{similarTheme.name}</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">${similarTheme.price}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 