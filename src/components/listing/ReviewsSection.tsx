'use client';

import { useState } from 'react';
import { Star } from 'lucide-react';
import CategoryRatings from './CategoryRatings';
import ReviewTagsRow from './ReviewTagsRow';
import ReviewCard from './ReviewCard';
import type { CategoryRatings as CategoryRatingsType, Review } from '@/types/listing';

const INITIAL_VISIBLE_COUNT = 6;

interface ReviewsSectionProps {
  rating: number;
  reviewCount: number;
  categoryRatings: CategoryRatingsType;
  reviewTags: Array<{ label: string; count: number }>;
  reviews: Review[];
}

export default function ReviewsSection({
  rating,
  reviewCount,
  categoryRatings,
  reviewTags,
  reviews,
}: ReviewsSectionProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const visibleReviews = isExpanded ? reviews : reviews.slice(0, INITIAL_VISIBLE_COUNT);
  const hasMore = reviews.length > INITIAL_VISIBLE_COUNT;

  return (
    <section
      id="reviews"
      aria-labelledby="reviews-heading"
      className="border-b border-gray-200 py-8"
    >
      <h2
        id="reviews-heading"
        className="mb-6 flex items-center gap-2 text-xl font-semibold text-charcoal"
      >
        <Star className="h-5 w-5 fill-charcoal text-charcoal" aria-hidden="true" />
        {rating.toFixed(2)} · {reviewCount} reviews
      </h2>

      <CategoryRatings ratings={categoryRatings} />
      <ReviewTagsRow tags={reviewTags} />

      <ul className="grid grid-cols-1 gap-x-16 gap-y-8 md:grid-cols-2">
        {visibleReviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </ul>

      {hasMore && (
        <button
          type="button"
          onClick={() => setIsExpanded((prev) => !prev)}
          className="mt-8 rounded-lg border border-charcoal px-6 py-3 text-sm font-medium text-charcoal hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-charcoal"
          aria-expanded={isExpanded}
        >
          {isExpanded ? 'Show less' : `Show all ${reviewCount} reviews`}
        </button>
      )}
    </section>
  );
}
