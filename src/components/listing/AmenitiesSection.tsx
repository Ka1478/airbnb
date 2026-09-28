'use client';

import { useState } from 'react';
import AmenitiesGrid from './AmenitiesGrid';

const INITIAL_VISIBLE_COUNT = 6;

interface AmenitiesSectionProps {
  amenities: string[];
  unavailableAmenities?: string[];
}

export default function AmenitiesSection({
  amenities,
  unavailableAmenities = [],
}: AmenitiesSectionProps) {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? amenities : amenities.slice(0, INITIAL_VISIBLE_COUNT);
  const hasMore = amenities.length > INITIAL_VISIBLE_COUNT;
  const totalCount = amenities.length + unavailableAmenities.length;

  return (
    <section
      id="amenities"
      aria-labelledby="amenities-heading"
      className="border-b border-gray-200 py-8"
    >
      <h2 id="amenities-heading" className="mb-6 text-xl font-semibold text-charcoal">
        What this place offers
      </h2>

      <AmenitiesGrid
        amenities={visible}
        unavailableAmenities={showAll ? unavailableAmenities : []}
      />

      {(hasMore || unavailableAmenities.length > 0) && (
        <button
          type="button"
          onClick={() => setShowAll((prev) => !prev)}
          className="mt-6 rounded-lg border border-charcoal px-6 py-3 text-sm font-medium text-charcoal hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-charcoal"
          aria-expanded={showAll}
        >
          {showAll ? 'Show less' : `Show all ${totalCount} amenities`}
        </button>
      )}
    </section>
  );
}
