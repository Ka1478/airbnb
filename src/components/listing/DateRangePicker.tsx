'use client';

import { useEffect, useRef, useState } from 'react';
import { DayPicker, type DateRange } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { formatShortDate } from '@/lib/pricing';

interface DateRangePickerProps {
  range: DateRange | undefined;
  onChange: (range: DateRange | undefined) => void;
}

export default function DateRangePicker({ range, onChange }: DateRangePickerProps) {
  const [openField, setOpenField] = useState<'checkIn' | 'checkOut' | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const checkInRef = useRef<HTMLButtonElement>(null);
  const checkOutRef = useRef<HTMLButtonElement>(null);

  const isOpen = openField !== null;

  // Close on outside click or Escape; return focus to whichever field opened it.
  useEffect(() => {
    if (!isOpen) return;

    function handlePointerDown(e: PointerEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpenField(null);
      }
    }

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        setOpenField(null);
        (openField === 'checkOut' ? checkOutRef : checkInRef).current?.focus();
      }
    }

    document.addEventListener('pointerdown', handlePointerDown);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('pointerdown', handlePointerDown);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, openField]);

  function handleSelect(selected: DateRange | undefined) {
    onChange(selected);
    // Once both ends of the range are picked, close the popover automatically.
    if (selected?.from && selected?.to) {
      setOpenField(null);
    }
  }

  return (
    <div ref={containerRef} className="relative">
      <div className="grid grid-cols-2 divide-x divide-gray-300 border-b border-gray-300">
        <button
          ref={checkInRef}
          type="button"
          onClick={() => setOpenField(openField === 'checkIn' ? null : 'checkIn')}
          className="rounded p-3 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-charcoal"
          aria-haspopup="dialog"
          aria-expanded={openField === 'checkIn'}
        >
          <span className="block text-xs font-semibold uppercase text-charcoal">
            Check-in
          </span>
          <span className="text-sm text-gray-600">
            {range?.from ? formatShortDate(range.from) : 'Add date'}
          </span>
        </button>

        <button
          ref={checkOutRef}
          type="button"
          onClick={() => setOpenField(openField === 'checkOut' ? null : 'checkOut')}
          className="rounded p-3 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-charcoal"
          aria-haspopup="dialog"
          aria-expanded={openField === 'checkOut'}
        >
          <span className="block text-xs font-semibold uppercase text-charcoal">
            Checkout
          </span>
          <span className="text-sm text-gray-600">
            {range?.to ? formatShortDate(range.to) : 'Add date'}
          </span>
        </button>
      </div>

      {isOpen && (
        <div
          role="dialog"
          aria-label="Select check-in and check-out dates"
          className="absolute left-1/2 top-full z-20 mt-2 w-[320px] -translate-x-1/2 rounded-xl border border-gray-200 bg-white p-3 shadow-lg sm:w-[640px]"
        >
          <DayPicker
            mode="range"
            selected={range}
            onSelect={handleSelect}
            numberOfMonths={1}
            disabled={{ before: new Date() }}
            initialFocus
            className="rdp-airbnb sm:[--rdp-months-per-row:2]"
            classNames={{
              months: 'flex flex-col sm:flex-row gap-6',
              caption_label: 'text-sm font-semibold text-charcoal',
              nav_button: 'text-charcoal hover:bg-gray-100 rounded-full',
              head_cell: 'text-xs font-medium text-gray-500',
              day: 'h-9 w-9 text-sm rounded-full hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-charcoal',
              day_selected: 'bg-charcoal text-white hover:bg-charcoal',
              day_range_middle: 'bg-gray-100 text-charcoal rounded-none',
              day_disabled: 'text-gray-300 line-through',
              day_today: 'font-semibold underline',
            }}
          />

          <div className="mt-2 flex justify-end border-t border-gray-100 pt-3">
            <button
              type="button"
              onClick={() => {
                onChange(undefined);
              }}
              className="text-sm font-medium text-charcoal underline"
            >
              Clear dates
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
