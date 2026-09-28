'use client';

import { useState } from 'react';
import { Share, Heart } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { Listing } from '@/types/listing';

interface ListingHeaderProps {
  listing: Listing;
}

export default function ListingHeader({ listing }: ListingHeaderProps) {
  const [isSaved, setIsSaved] = useState(false);

  return (
    <header className="mb-4 flex flex-wrap items-start justify-between gap-3">
      <h1 className="text-2xl font-semibold text-charcoal md:text-3xl">{listing.title}</h1>

      <div className="flex items-center gap-2">
        <button
          type="button"
          className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-charcoal underline hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-charcoal"
          aria-label="Share this listing"
        >
          <Share className="h-4 w-4" aria-hidden="true" />
          Share
        </button>
        <button
          type="button"
          onClick={() => setIsSaved((prev) => !prev)}
          className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-charcoal underline hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-charcoal"
          aria-pressed={isSaved}
          aria-label={isSaved ? 'Remove from saved listings' : 'Save this listing'}
        >
          <Heart
            className={cn(
              'h-4 w-4 transition-colors',
              isSaved ? 'fill-airbnb text-airbnb' : 'fill-transparent'
            )}
            aria-hidden="true"
          />
          {isSaved ? 'Saved' : 'Save'}
        </button>
      </div>
    </header>
  );
}
