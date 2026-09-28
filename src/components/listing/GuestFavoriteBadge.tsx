import LaurelIcon from './LaurelIcon';

interface GuestFavoriteBadgeProps {
  rating: number;
}

export default function GuestFavoriteBadge({ rating }: GuestFavoriteBadgeProps) {
  return (
    <div className="flex flex-col items-center border-b border-gray-200 py-10 text-center">
      <div className="flex items-center gap-3">
        <LaurelIcon className="h-10 w-10 text-charcoal" />
        <span className="text-5xl font-semibold text-charcoal">{rating.toFixed(2)}</span>
        <LaurelIcon className="h-10 w-10 text-charcoal" flip />
      </div>
      <p className="mt-3 text-lg font-semibold text-charcoal">Guest favourite</p>
      <p className="mt-1 max-w-sm text-sm text-gray-500">
        This home is a guest favourite based on ratings, reviews, and reliability.
      </p>
      <button type="button" className="mt-2 text-sm font-medium text-charcoal underline">
        How reviews work
      </button>
    </div>
  );
}
