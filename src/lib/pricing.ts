import { differenceInCalendarDays, format } from 'date-fns';

export function formatShortDate(date: Date): string {
  return format(date, 'MMM d');
}

export function calculateNights(checkIn?: Date, checkOut?: Date): number {
  if (!checkIn || !checkOut) return 0;
  const nights = differenceInCalendarDays(checkOut, checkIn);
  return nights > 0 ? nights : 0;
}

export interface PriceBreakdown {
  nights: number;
  nightlyTotal: number;
  cleaningFee: number;
  serviceFee: number;
  total: number;
}

export function calculatePriceBreakdown(
  pricePerNight: number,
  nights: number
): PriceBreakdown {
  const nightlyTotal = pricePerNight * nights;
  const cleaningFee = nights > 0 ? 65 : 0;
  const serviceFee = Math.round(nightlyTotal * 0.14);
  const total = nightlyTotal + cleaningFee + serviceFee;

  return { nights, nightlyTotal, cleaningFee, serviceFee, total };
}
