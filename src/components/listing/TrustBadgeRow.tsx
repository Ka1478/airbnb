import LaurelIcon from './LaurelIcon';

interface TrustBadgeRowProps {
  isGuestFavorite: boolean;
  rating: number;
  reviewCount: number;
}

export default function TrustBadgeRow({
  isGuestFavorite,
  rating,
  reviewCount,
}: TrustBadgeRowProps) {
  if (!isGuestFavorite) return null;

  return (
    <div className="mb-6 flex items-center gap-4 rounded-xl border border-gray-200 p-4">
      <LaurelIcon className="h-7 w-7 text-charcoal" />
      <div className="flex-1">
        <p className="text-sm font-semibold text-charcoal">Guest favourite</p>
        <p className="text-xs text-gray-500">
          One of the most loved homes on Airbnb, according to guests
        </p>
      </div>
      <div className="text-center">
        <p className="text-lg font-semibold text-charcoal">{rating.toFixed(2)}</p>
        <p className="text-xs text-gray-500" aria-hidden="true">
          ★★★★★
        </p>
      </div>
      <div className="border-l border-gray-200 pl-4 text-center">
        <p className="text-lg font-semibold text-charcoal">{reviewCount}</p>
        <p className="text-xs text-gray-500">Reviews</p>
      </div>
    </div>
  );
}
