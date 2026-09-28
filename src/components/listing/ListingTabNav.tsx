'use client';

import { useEffect, useRef, useState } from 'react';
import { Star } from 'lucide-react';
import { useActiveSection } from '@/hooks/useActiveSection';

const TABS = [
  { id: 'photos', label: 'Photos' },
  { id: 'amenities', label: 'Amenities' },
  { id: 'reviews', label: 'Reviews' },
  { id: 'location', label: 'Location' },
];

interface ListingTabNavProps {
  pricePerNight: number;
  rating: number;
  reviewCount: number;
  onReserveClick: () => void;
}

export default function ListingTabNav({
  pricePerNight,
  rating,
  reviewCount,
  onReserveClick,
}: ListingTabNavProps) {
  const [isSticky, setIsSticky] = useState(false);
  const sentinelRef = useRef<HTMLDivElement>(null);
  const activeId = useActiveSection(TABS.map((t) => t.id));

  // Show the sticky bar only once the page has scrolled past the hero photos.
  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsSticky(!entry.isIntersecting),
      { threshold: 0 }
    );
    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

  function scrollToSection(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  return (
    <>
      {/* Invisible marker placed right after the photo grid to detect scroll position */}
      <div ref={sentinelRef} aria-hidden="true" />

      <nav
        aria-label="Listing sections"
        className={`sticky top-0 z-40 border-b border-gray-200 bg-white transition-shadow ${
          isSticky ? 'shadow-sm' : ''
        }`}
      >
        <div className="mx-auto flex max-w-[1120px] items-center justify-between px-6 py-4 md:px-10">
          <ul className="flex gap-8">
            {TABS.map((tab) => (
              <li key={tab.id}>
                <button
                  type="button"
                  onClick={() => scrollToSection(tab.id)}
                  aria-current={activeId === tab.id ? 'true' : undefined}
                  className={`rounded pb-1 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-charcoal ${
                    activeId === tab.id
                      ? 'border-b-2 border-charcoal text-charcoal'
                      : 'text-gray-500 hover:text-charcoal'
                  }`}
                >
                  {tab.label}
                </button>
              </li>
            ))}
          </ul>

          {isSticky && (
            <div className="hidden items-center gap-4 md:flex">
              <p className="text-sm text-charcoal">
                <span className="font-semibold">${pricePerNight}</span> for 5 nights
                <span className="mx-2 text-gray-300" aria-hidden="true">
                  ·
                </span>
                <span className="inline-flex items-center gap-1">
                  <Star className="h-3 w-3 fill-charcoal text-charcoal" aria-hidden="true" />
                  {rating.toFixed(2)} · {reviewCount} reviews
                </span>
              </p>
              <button
                type="button"
                onClick={onReserveClick}
                className="rounded-lg bg-gradient-to-r from-[#E61E4D] via-[#E31C5F] to-[#D70466] px-6 py-2.5 text-sm font-semibold text-white transition-transform hover:scale-[1.02] hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-charcoal focus-visible:ring-offset-2"
              >
                Reserve
              </button>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}
