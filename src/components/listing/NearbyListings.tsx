'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import type { NearbyListing } from '@/types/listing';

interface NearbyListingsProps {
  listings: NearbyListing[];
}

export default function NearbyListings({ listings }: NearbyListingsProps) {
  const scrollRef = useRef<HTMLUListElement>(null);

  function scrollBy(direction: 'left' | 'right') {
    scrollRef.current?.scrollBy({
      left: direction === 'left' ? -600 : 600,
      behavior: 'smooth',
    });
  }

  return (
    <section aria-labelledby="nearby-heading" className="py-8">
      <div className="mb-6 flex items-center justify-between">
        <h2 id="nearby-heading" className="text-xl font-semibold text-charcoal">
          More stays nearby
        </h2>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => scrollBy('left')}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 text-charcoal hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-charcoal"
            aria-label="Scroll nearby stays left"
          >
            <ChevronLeft className="h-4 w-4" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={() => scrollBy('right')}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 text-charcoal hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-charcoal"
            aria-label="Scroll nearby stays right"
          >
            <ChevronRight className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>
      </div>

      <ul
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto scroll-smooth pb-2"
        style={{ scrollSnapType: 'x mandatory' }}
      >
        {listings.map((listing) => (
          <li
            key={listing.id}
            className="w-[220px] shrink-0"
            style={{ scrollSnapAlign: 'start' }}
          >
            <a href="#" className="group block rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-charcoal">
              <div className="relative mb-2 aspect-square w-full overflow-hidden rounded-xl bg-gray-100">
                <Image
                  src={listing.image}
                  alt={listing.title}
                  fill
                  sizes="220px"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <p className="truncate text-sm font-medium text-charcoal">{listing.title}</p>
              <p className="text-sm text-charcoal">
                ${listing.price}
                <span className="flex items-center gap-1 text-gray-500">
                  <Star className="h-3 w-3 fill-charcoal text-charcoal" aria-hidden="true" />
                  {listing.rating.toFixed(2)}
                </span>
              </p>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
