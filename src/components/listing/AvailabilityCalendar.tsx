'use client';

import { DayPicker, type DateRange } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { calculateNights } from '@/lib/pricing';

interface AvailabilityCalendarProps {
  city: string;
  range: DateRange | undefined;
  onChange: (range: DateRange | undefined) => void;
}

export default function AvailabilityCalendar({
  city,
  range,
  onChange,
}: AvailabilityCalendarProps) {
  const nights = calculateNights(range?.from, range?.to);

  return (
    <section aria-labelledby="availability-heading" className="border-b border-gray-200 py-8">
      <h2 id="availability-heading" className="mb-1 text-xl font-semibold text-charcoal">
        {nights > 0 ? `${nights} night${nights > 1 ? 's' : ''} in ${city}` : `Availability in ${city}`}
      </h2>
      {range?.from && range?.to && (
        <p className="mb-6 text-sm text-gray-500">
          {range.from.toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' })}
          {' – '}
          {range.to.toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' })}
        </p>
      )}

      <DayPicker
        mode="range"
        selected={range}
        onSelect={onChange}
        numberOfMonths={2}
        disabled={{ before: new Date() }}
        className="[--rdp-months-per-row:2]"
        classNames={{
          months: 'flex flex-col sm:flex-row gap-10',
          caption_label: 'text-base font-semibold text-charcoal',
          nav_button: 'text-charcoal hover:bg-gray-100 rounded-full',
          head_cell: 'text-xs font-medium text-gray-500',
          day: 'h-10 w-10 text-sm rounded-full hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-charcoal',
          day_selected: 'bg-charcoal text-white hover:bg-charcoal',
          day_range_middle: 'bg-gray-100 text-charcoal rounded-none',
          day_disabled: 'text-gray-300 line-through',
          day_today: 'font-semibold underline',
        }}
      />

      {range && (
        <div className="mt-4 flex items-center justify-between">
          <button
            type="button"
            onClick={() => onChange(undefined)}
            className="text-sm font-medium text-charcoal underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-charcoal"
          >
            Clear dates
          </button>
          <button
            type="button"
            className="flex items-center gap-1.5 text-sm text-gray-500 underline hover:text-charcoal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-charcoal"
          >
            Report this listing
          </button>
        </div>
      )}
    </section>
  );
}
