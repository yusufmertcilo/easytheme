'use client';

import { useState } from 'react';
import Image from 'next/image';

interface ThemeGalleryProps {
  images: string[];
  title: string;
}

export default function ThemeGallery({ images, title }: ThemeGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="space-y-4">
      <div className="relative aspect-video w-full overflow-hidden rounded-lg">
        <Image
          src={images[selectedImage]}
          alt={`${title} preview ${selectedImage + 1}`}
          fill
          className="object-cover"
        />
      </div>
      <div className="grid grid-cols-4 gap-2">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(index)}
            className={`relative aspect-video overflow-hidden rounded-lg ${
              selectedImage === index ? 'ring-2 ring-indigo-500' : ''
            }`}
          >
            <Image
              src={image}
              alt={`${title} thumbnail ${index + 1}`}
              fill
              className="object-cover hover:opacity-75 transition-opacity"
            />
          </button>
        ))}
      </div>
    </div>
  );
} 