import type { CategoryRatings as CategoryRatingsType } from '@/types/listing';

const CATEGORY_LABELS: Record<keyof CategoryRatingsType, string> = {
  cleanliness: 'Cleanliness',
  accuracy: 'Accuracy',
  checkIn: 'Check-in',
  communication: 'Communication',
  location: 'Location',
  value: 'Value',
};

interface CategoryRatingsProps {
  ratings: CategoryRatingsType;
}

export default function CategoryRatings({ ratings }: CategoryRatingsProps) {
  return (
    <dl className="mb-10 grid grid-cols-1 gap-x-12 gap-y-4 sm:grid-cols-2">
      {(Object.keys(CATEGORY_LABELS) as Array<keyof CategoryRatingsType>).map(
        (key) => {
          const value = ratings[key];
          const fillPercent = (value / 5) * 100;

          return (
            <div key={key} className="flex items-center justify-between gap-4">
              <dt className="text-sm text-charcoal">{CATEGORY_LABELS[key]}</dt>
              <dd className="flex items-center gap-3">
                <div
                  className="h-1 w-24 rounded-full bg-gray-200"
                  role="img"
                  aria-label={`${CATEGORY_LABELS[key]}: ${value.toFixed(1)} out of 5`}
                >
                  <div
                    className="h-1 rounded-full bg-charcoal"
                    style={{ width: `${fillPercent}%` }}
                  />
                </div>
                <span className="w-6 text-sm font-medium text-charcoal">
                  {value.toFixed(1)}
                </span>
              </dd>
            </div>
          );
        }
      )}
    </dl>
  );
}
