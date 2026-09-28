'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Grip } from 'lucide-react';
import PhotoTourOverlay from './PhotoTourOverlay';
import Lightbox from './Lightbox';

interface PhotoGridProps {
  images: string[];
  title: string;
}

export default function PhotoGrid({ images, title }: PhotoGridProps) {
  const [isTourOpen, setIsTourOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const [main, ...rest] = images;
  const thumbnails = rest.slice(0, 4);

  return (
    <section id="photos" aria-label="Photo gallery" className="relative mb-8">
      <div className="grid grid-cols-1 gap-2 overflow-hidden rounded-xl md:h-[480px] md:grid-cols-4 md:grid-rows-2">
        {/* Main image */}
        <button
          type="button"
          onClick={() => setLightboxIndex(0)}
          className="relative h-72 md:col-span-2 md:row-span-2 md:h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-charcoal focus-visible:ring-inset"
          aria-label={`View photo 1 of ${images.length} for ${title}`}
        >
          <Image
            src={main}
            alt={`${title} - main photo`}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition-transform duration-300 hover:scale-105"
          />
        </button>

        {/* Thumbnails */}
        {thumbnails.map((src, i) => (
          <button
            type="button"
            key={src}
            onClick={() => setLightboxIndex(i + 1)}
            className="relative hidden h-full md:block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-charcoal focus-visible:ring-inset"
            aria-label={`View photo ${i + 2} of ${images.length} for ${title}`}
          >
            <Image
              src={src}
              alt={`${title} - photo ${i + 2}`}
              fill
              sizes="25vw"
              className="object-cover transition-transform duration-300 hover:scale-105"
            />
          </button>
        ))}
      </div>

      <button
        type="button"
        onClick={() => setIsTourOpen(true)}
        className="absolute bottom-4 right-4 flex items-center gap-2 rounded-lg border border-charcoal bg-white px-4 py-2 text-sm font-medium text-charcoal shadow-card hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-charcoal"
        aria-label={`Show all ${images.length} photos for ${title}`}
      >
        <Grip className="h-4 w-4" aria-hidden="true" />
        Show all photos
      </button>

      <PhotoTourOverlay
        images={images}
        title={title}
        isOpen={isTourOpen}
        onClose={() => setIsTourOpen(false)}
        onPhotoClick={(index) => setLightboxIndex(index)}
      />

      {lightboxIndex !== null && (
        <Lightbox
          images={images}
          title={title}
          initialIndex={lightboxIndex}
          isOpen={lightboxIndex !== null}
          onClose={() => setLightboxIndex(null)}
        />
      )}
    </section>
  );
}
