'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Star } from 'lucide-react';
import type { Review } from '@/types/listing';

const COMMENT_TRUNCATE_LENGTH = 180;

interface ReviewCardProps {
  review: Review;
}

export default function ReviewCard({ review }: ReviewCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const isLong = review.comment.length > COMMENT_TRUNCATE_LENGTH;

  return (
    <li>
      <div className="flex items-center gap-3">
        <Image
          src={review.avatarUrl}
          alt=""
          width={44}
          height={44}
          className="h-11 w-11 rounded-full object-cover"
        />
        <div>
          <p className="text-base font-medium leading-tight text-charcoal">
            {review.author}
          </p>
          <p className="text-sm leading-tight text-gray-500">
            <time dateTime={review.date}>
              {new Date(review.date).toLocaleDateString('en-US', {
                month: 'long',
                year: 'numeric',
              })}
            </time>
          </p>
        </div>
      </div>

      <div
        className="mt-3 flex items-center gap-0.5"
        role="img"
        aria-label={`Rated ${review.rating} out of 5 stars`}
      >
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={
              i < review.rating
                ? 'h-3 w-3 fill-charcoal text-charcoal'
                : 'h-3 w-3 fill-gray-200 text-gray-200'
            }
            aria-hidden="true"
          />
        ))}
      </div>

      <p
        className={`mt-2 text-base leading-relaxed text-charcoal ${
          !isExpanded && isLong ? 'line-clamp-3' : ''
        }`}
      >
        {review.comment}
      </p>

      {isLong && (
        <button
          type="button"
          onClick={() => setIsExpanded((prev) => !prev)}
          className="mt-1 rounded text-sm font-medium text-charcoal underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-charcoal"
          aria-expanded={isExpanded}
        >
          {isExpanded ? 'Show less' : 'Show more'}
        </button>
      )}
    </li>
  );
}
