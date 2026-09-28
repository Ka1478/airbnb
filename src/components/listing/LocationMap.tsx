'use client';

import { useState } from 'react';
import { MapPin } from 'lucide-react';
import type { Listing } from '@/types/listing';

interface LocationMapProps {
  location: Listing['location'];
}

export default function LocationMap({ location }: LocationMapProps) {
  const [showMore, setShowMore] = useState(false);

  return (
    <section id="location" aria-labelledby="location-heading" className="border-b border-gray-200 py-8">
      <h2 id="location-heading" className="mb-1 text-xl font-semibold text-charcoal">
        Where you&apos;ll be
      </h2>
      <p className="mb-4 text-charcoal">
        {location.city}, {location.country}
      </p>

      {/* Map placeholder — swap for Mapbox/Google Maps embed */}
      <div
        role="img"
        aria-label={`Map showing approximate location in ${location.city}, ${location.country}`}
        className="relative mb-2 flex h-80 w-full items-center justify-center overflow-hidden rounded-xl bg-gray-100"
      >
        <div className="flex flex-col items-center gap-2 text-gray-400">
          <MapPin className="h-8 w-8" aria-hidden="true" />
          <span className="text-sm">Map view unavailable in preview</span>
        </div>
      </div>
      <p className="mb-6 text-sm text-gray-500">Exact location will be provided after booking.</p>

      <h3 className="mb-2 font-medium text-charcoal">Neighbourhood highlights</h3>
      <p className={`text-sm text-gray-600 ${!showMore ? 'line-clamp-2' : ''}`}>
        {location.neighborhoodBlurb}
      </p>
      <button
        type="button"
        onClick={() => setShowMore((prev) => !prev)}
        className="mt-1 text-sm font-medium text-charcoal underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-charcoal"
      >
        {showMore ? 'Show less' : 'Show more'}
      </button>
    </section>
  );
}
