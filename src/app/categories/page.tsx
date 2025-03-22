import Image from 'next/image';
import Link from 'next/link';

const categories = [
  {
    id: 'business',
    name: 'Business',
    description: 'Professional themes for corporate websites and business portfolios',
    count: 156,
    image: '/images/category-business.jpg',
    popularThemes: [
      {
        id: '1',
        title: 'Modern Business Pro',
        price: 49.99,
        imageUrl: '/images/theme1.jpg',
      },
      {
        id: '2',
        title: 'Corporate Plus',
        price: 59.99,
        imageUrl: '/images/theme2.jpg',
      },
    ],
  },
  {
    id: 'ecommerce',
    name: 'E-Commerce',
    description: 'Complete online store solutions with advanced features',
    count: 89,
    image: '/images/category-ecommerce.jpg',
    popularThemes: [
      {
        id: '3',
        title: 'E-Commerce Plus',
        price: 59.99,
        imageUrl: '/images/theme3.jpg',
      },
      {
        id: '4',
        title: 'Shop Master',
        price: 49.99,
        imageUrl: '/images/theme4.jpg',
      },
    ],
  },
  {
    id: 'portfolio',
    name: 'Portfolio',
    description: 'Showcase your creative work with stunning layouts',
    count: 234,
    image: '/images/category-portfolio.jpg',
    popularThemes: [
      {
        id: '5',
        title: 'Portfolio Master',
        price: 39.99,
        imageUrl: '/images/theme5.jpg',
      },
      {
        id: '6',
        title: 'Creative Showcase',
        price: 44.99,
        imageUrl: '/images/theme6.jpg',
      },
    ],
  },
  {
    id: 'blog',
    name: 'Blog',
    description: 'Perfect themes for content creators and bloggers',
    count: 167,
    image: '/images/category-blog.jpg',
    popularThemes: [
      {
        id: '7',
        title: 'Blog Master',
        price: 29.99,
        imageUrl: '/images/theme7.jpg',
      },
      {
        id: '8',
        title: 'Content Pro',
        price: 34.99,
        imageUrl: '/images/theme8.jpg',
      },
    ],
  },
  {
    id: 'landing',
    name: 'Landing Pages',
    description: 'High-converting landing page templates',
    count: 145,
    image: '/images/category-landing.jpg',
    popularThemes: [
      {
        id: '9',
        title: 'Landing Pro',
        price: 39.99,
        imageUrl: '/images/theme9.jpg',
      },
      {
        id: '10',
        title: 'Conversion Master',
        price: 44.99,
        imageUrl: '/images/theme10.jpg',
      },
    ],
  },
  {
    id: 'admin',
    name: 'Admin Dashboards',
    description: 'Professional admin panel and dashboard themes',
    count: 78,
    image: '/images/category-admin.jpg',
    popularThemes: [
      {
        id: '11',
        title: 'Admin Pro',
        price: 49.99,
        imageUrl: '/images/theme11.jpg',
      },
      {
        id: '12',
        title: 'Dashboard Master',
        price: 54.99,
        imageUrl: '/images/theme12.jpg',
      },
    ],
  },
];

export default function CategoriesPage() {
  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Theme Categories
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Browse our collection of premium themes by category
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <div key={category.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
              <Link href={`/categories/${category.id}`}>
                <div className="relative h-48">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40" />
                </div>
              </Link>
              <div className="p-6">
                <Link href={`/categories/${category.id}`}>
                  <h2 className="text-xl font-bold text-gray-900 mb-2 hover:text-indigo-600">
                    {category.name}
                  </h2>
                </Link>
                <p className="text-gray-600 mb-4">{category.description}</p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-gray-500">{category.count} themes</span>
                  <Link
                    href={`/categories/${category.id}`}
                    className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    View All →
                  </Link>
                </div>

                <div className="space-y-4">
                  <h3 className="text-sm font-medium text-gray-900">Popular Themes</h3>
                  {category.popularThemes.map((theme) => (
                    <Link
                      key={theme.id}
                      href={`/themes/${theme.id}`}
                      className="flex items-center space-x-4 group"
                    >
                      <div className="relative h-16 w-24 flex-shrink-0">
                        <Image
                          src={theme.imageUrl}
                          alt={theme.title}
                          fill
                          className="object-cover rounded"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 group-hover:text-indigo-600 truncate">
                          {theme.title}
                        </p>
                        <p className="text-sm text-gray-500">${theme.price}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 