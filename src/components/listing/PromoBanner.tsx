import { Tag } from 'lucide-react';

interface PromoBannerProps {
  discountPercent: number;
}

export default function PromoBanner({ discountPercent }: PromoBannerProps) {
  return (
    <div className="mb-4 flex items-center gap-3 rounded-xl border border-gray-200 p-4">
      <Tag className="h-5 w-5 shrink-0 text-green-700" aria-hidden="true" />
      <p className="flex-1 text-sm text-charcoal">
        Get {discountPercent}% off your next stay.{' '}
        <button type="button" className="underline">
          Terms apply.
        </button>
      </p>
      <button
        type="button"
        className="shrink-0 rounded-lg border border-charcoal px-4 py-1.5 text-sm font-medium text-charcoal hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-charcoal"
      >
        Claim
      </button>
    </div>
  );
}
