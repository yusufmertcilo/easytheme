import Image from 'next/image';
import Link from 'next/link';

interface ThemeCardProps {
  id: string;
  title: string;
  description: string;
  price: number;
  imageUrl: string;
  author: string;
  category: string;
  rating: number;
  sales: number;
}

export default function ThemeCard({
  id,
  title,
  description,
  price,
  imageUrl,
  author,
  category,
  rating,
  sales,
}: ThemeCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <Link href={`/themes/${id}`}>
        <div className="relative h-48">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover"
          />
        </div>
      </Link>
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-indigo-600 font-medium">{category}</span>
          <span className="text-lg font-bold text-gray-900">${price}</span>
        </div>
        <Link href={`/themes/${id}`}>
          <h3 className="text-lg font-semibold text-gray-900 mb-2 hover:text-indigo-600">
            {title}
          </h3>
        </Link>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{description}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`h-4 w-4 ${
                    i < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="ml-2 text-sm text-gray-600">({rating})</span>
          </div>
          <span className="text-sm text-gray-600">{sales} sales</span>
        </div>
        <div className="mt-4 pt-4 border-t">
          <Link href={`/authors/${author}`} className="text-sm text-gray-600 hover:text-indigo-600">
            by {author}
          </Link>
        </div>
      </div>
    </div>
  );
} 