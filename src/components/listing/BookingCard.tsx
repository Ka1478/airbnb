'use client';

import { forwardRef, useState } from 'react';
import { Star, ShieldCheck } from 'lucide-react';
import type { DateRange } from 'react-day-picker';
import DateRangePicker from './DateRangePicker';
import GuestSelector, { type GuestCounts } from './GuestSelector';
import PromoBanner from './PromoBanner';
import { calculateNights, calculatePriceBreakdown } from '@/lib/pricing';

interface BookingCardProps {
  pricePerNight: number;
  rating: number;
  reviewCount: number;
  maxGuests: number;
  range: DateRange | undefined;
  onRangeChange: (range: DateRange | undefined) => void;
}

const DEFAULT_GUEST_COUNTS: GuestCounts = {
  adults: 1,
  children: 0,
  infants: 0,
  pets: 0,
};

const BookingCard = forwardRef<HTMLElement, BookingCardProps>(function BookingCard(
  { pricePerNight, rating, reviewCount, maxGuests, range, onRangeChange },
  ref
) {
  const [guests, setGuests] = useState<GuestCounts>(DEFAULT_GUEST_COUNTS);
  const [isReserving, setIsReserving] = useState(false);

  const nights = calculateNights(range?.from, range?.to);
  const breakdown = calculatePriceBreakdown(pricePerNight, nights);
  const canReserve = nights > 0;

  function handleReserve() {
    if (!canReserve) return;
    setIsReserving(true);
    setTimeout(() => setIsReserving(false), 1200);
  }

  return (
    <div>
      <PromoBanner discountPercent={10} />

      <aside
        ref={ref}
        aria-label="Booking"
        className="sticky top-28 h-fit rounded-xl border border-gray-200 p-6 shadow-card"
      >
        <div className="mb-4 flex items-baseline justify-between">
          <p className="text-lg text-charcoal">
            <span className="text-xl font-semibold">${pricePerNight}</span> night
          </p>
          <p className="flex items-center gap-1 text-sm text-charcoal">
            <Star className="h-3.5 w-3.5 fill-charcoal text-charcoal" aria-hidden="true" />
            {rating.toFixed(2)}
            <span aria-hidden="true">·</span>
            <a href="#reviews" className="underline">
              {reviewCount} reviews
            </a>
          </p>
        </div>

        <div className="overflow-hidden rounded-lg border border-gray-300">
          <DateRangePicker range={range} onChange={onRangeChange} />
          <div className="border-t border-gray-300">
            <GuestSelector maxGuests={maxGuests} counts={guests} onChange={setGuests} />
          </div>
        </div>

        <button
          type="button"
          onClick={handleReserve}
          disabled={!canReserve || isReserving}
          className="group relative mt-4 w-full overflow-hidden rounded-lg bg-gradient-to-r from-[#E61E4D] via-[#E31C5F] to-[#D70466] py-3 font-semibold text-white transition-all duration-200 ease-out hover:scale-[1.02] hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-charcoal focus-visible:ring-offset-2 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:scale-100 disabled:bg-gradient-to-r"
        >
          <span className={isReserving ? 'opacity-0' : 'opacity-100'}>
            {canReserve ? 'Reserve' : 'Check availability'}
          </span>
          {isReserving && (
            <span className="absolute inset-0 flex items-center justify-center">
              <span
                className="h-5 w-5 animate-spin rounded-full border-2 border-white/40 border-t-white"
                role="status"
                aria-label="Submitting reservation"
              />
            </span>
          )}
        </button>

        <p className="mt-3 text-center text-sm text-gray-500">
          {canReserve ? "You won't be charged yet" : 'Add your travel dates for exact pricing'}
        </p>

        {canReserve && (
          <>
            <div className="mt-6 space-y-3 text-sm text-charcoal">
              <div className="flex justify-between">
                <span className="underline">
                  ${pricePerNight} x {nights} night{nights > 1 ? 's' : ''}
                </span>
                <span>${breakdown.nightlyTotal}</span>
              </div>
              <div className="flex justify-between">
                <span className="underline">Cleaning fee</span>
                <span>${breakdown.cleaningFee}</span>
              </div>
              <div className="flex justify-between">
                <span className="underline">Service fee</span>
                <span>${breakdown.serviceFee}</span>
              </div>
            </div>

            <div className="mt-4 flex justify-between border-t border-gray-200 pt-4 font-semibold text-charcoal">
              <span>Total before taxes</span>
              <span>${breakdown.total}</span>
            </div>
          </>
        )}

        <div className="mt-6 flex items-start gap-3 border-t border-gray-200 pt-6">
          <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-charcoal" aria-hidden="true" />
          <div>
            <p className="text-sm font-medium text-charcoal">Free cancellation before check-in</p>
            <p className="text-sm text-gray-500">
              Cancel up to 48 hours before your trip for a full refund.
            </p>
          </div>
        </div>
      </aside>
    </div>
  );
});

export default BookingCard;
