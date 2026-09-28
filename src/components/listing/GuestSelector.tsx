'use client';

import { useEffect, useRef, useState } from 'react';
import { Minus, Plus } from 'lucide-react';

export interface GuestCounts {
  adults: number;
  children: number;
  infants: number;
  pets: number;
}

const GUEST_ROWS: Array<{
  key: keyof GuestCounts;
  label: string;
  description: string;
  min: number;
}> = [
  { key: 'adults', label: 'Adults', description: 'Ages 13 or above', min: 1 },
  { key: 'children', label: 'Children', description: 'Ages 2–12', min: 0 },
  { key: 'infants', label: 'Infants', description: 'Under 2', min: 0 },
  { key: 'pets', label: 'Pets', description: 'Bringing a service animal?', min: 0 },
];

interface GuestSelectorProps {
  maxGuests: number;
  counts: GuestCounts;
  onChange: (counts: GuestCounts) => void;
}

export default function GuestSelector({ maxGuests, counts, onChange }: GuestSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  const totalGuests = counts.adults + counts.children;
  const summary =
    totalGuests > 0
      ? `${totalGuests} guest${totalGuests > 1 ? 's' : ''}${
          counts.infants > 0 ? `, ${counts.infants} infant${counts.infants > 1 ? 's' : ''}` : ''
        }${counts.pets > 0 ? `, ${counts.pets} pet${counts.pets > 1 ? 's' : ''}` : ''}`
      : 'Add guests';

  useEffect(() => {
    if (!isOpen) return;

    function handlePointerDown(e: PointerEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        setIsOpen(false);
        triggerRef.current?.focus();
      }
    }

    document.addEventListener('pointerdown', handlePointerDown);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('pointerdown', handlePointerDown);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  function updateCount(key: keyof GuestCounts, delta: number) {
    const row = GUEST_ROWS.find((r) => r.key === key)!;
    const nextValue = counts[key] + delta;
    if (nextValue < row.min) return;
    if (key !== 'infants' && key !== 'pets' && totalGuests + delta > maxGuests) return;

    onChange({ ...counts, [key]: nextValue });
  }

  return (
    <div ref={containerRef} className="relative">
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="block w-full rounded p-3 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-charcoal"
        aria-haspopup="dialog"
        aria-expanded={isOpen}
      >
        <span className="block text-xs font-semibold uppercase text-charcoal">Guests</span>
        <span className="text-sm text-gray-600">{summary}</span>
      </button>

      {isOpen && (
        <div
          role="dialog"
          aria-label="Select number of guests"
          className="absolute right-0 top-full z-20 mt-2 w-[320px] rounded-xl border border-gray-200 bg-white p-4 shadow-lg"
        >
          {GUEST_ROWS.map((row, i) => (
            <div
              key={row.key}
              className={`flex items-center justify-between py-4 ${
                i < GUEST_ROWS.length - 1 ? 'border-b border-gray-200' : ''
              }`}
            >
              <div>
                <p className="text-sm font-medium text-charcoal">{row.label}</p>
                <p className="text-xs text-gray-500">{row.description}</p>
              </div>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => updateCount(row.key, -1)}
                  disabled={counts[row.key] <= row.min}
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 text-charcoal transition-transform duration-150 hover:scale-105 hover:border-charcoal disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:scale-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-charcoal"
                  aria-label={`Decrease ${row.label.toLowerCase()}`}
                >
                  <Minus className="h-3.5 w-3.5" aria-hidden="true" />
                </button>

                <span
                  className="w-4 text-center text-sm text-charcoal"
                  aria-live="polite"
                  aria-label={`${counts[row.key]} ${row.label.toLowerCase()}`}
                >
                  {counts[row.key]}
                </span>

                <button
                  type="button"
                  onClick={() => updateCount(row.key, 1)}
                  disabled={row.key !== 'infants' && row.key !== 'pets' && totalGuests >= maxGuests}
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 text-charcoal transition-transform duration-150 hover:scale-105 hover:border-charcoal disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:scale-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-charcoal"
                  aria-label={`Increase ${row.label.toLowerCase()}`}
                >
                  <Plus className="h-3.5 w-3.5" aria-hidden="true" />
                </button>
              </div>
            </div>
          ))}

          <p className="pt-2 text-xs text-gray-500">
            This place has a maximum of {maxGuests} guests, not including infants.
          </p>
        </div>
      )}
    </div>
  );
}
