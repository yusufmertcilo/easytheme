import Image from "next/image";
import Link from 'next/link';
import ThemeCard from '@/components/theme/ThemeCard';

// Mock data for featured themes
const featuredThemes = [
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
];

const categories = [
  { id: 'business', name: 'Business', count: 156, image: '/images/category-business.jpg' },
  { id: 'ecommerce', name: 'E-Commerce', count: 89, image: '/images/category-ecommerce.jpg' },
  { id: 'portfolio', name: 'Portfolio', count: 234, image: '/images/category-portfolio.jpg' },
  { id: 'blog', name: 'Blog', count: 167, image: '/images/category-blog.jpg' },
  { id: 'landing', name: 'Landing Pages', count: 145, image: '/images/category-landing.jpg' },
  { id: 'admin', name: 'Admin Dashboards', count: 78, image: '/images/category-admin.jpg' },
];

export default function Home() {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl">
              Premium Themes & Templates
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Discover high-quality themes and templates for your next project. Built by professional designers and developers.
            </p>
            <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
              <div className="rounded-md shadow">
                <Link
                  href="/themes"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
                >
                  Browse Themes
                </Link>
              </div>
              <div className="mt-3 sm:mt-0 sm:ml-3">
                <Link
                  href="/categories"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-700 hover:bg-indigo-800 md:py-4 md:text-lg md:px-10"
                >
                  View Categories
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Themes Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Featured Themes
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Check out our most popular and highest-rated themes
            </p>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {featuredThemes.map((theme) => (
              <ThemeCard key={theme.id} {...theme} />
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Browse by Category
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Find the perfect theme for your specific needs
            </p>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((category) => (
              <Link
                key={category.id}
                href={`/categories/${category.id}`}
                className="group relative rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-48">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 transition-opacity duration-300" />
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-white">{category.name}</h3>
                    <p className="mt-2 text-white">{category.count} themes</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-indigo-700">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">Ready to get started?</span>
            <span className="block text-indigo-200">Start browsing themes today.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <Link
                href="/themes"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50"
              >
                Browse All Themes
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
