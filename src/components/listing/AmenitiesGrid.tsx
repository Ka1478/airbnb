import type { ComponentType } from 'react';
import {
  Wifi,
  UtensilsCrossed,
  Car,
  Wind,
  WashingMachine,
  Tv,
  Waves,
  Flame,
  Dumbbell,
  ParkingCircle,
  Flower2,
  Refrigerator,
  Microwave,
  Coffee,
  Baby,
  Shirt,
  Snowflake,
  Sun,
  Dog,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';

// Maps an amenity's display label to its icon. Any amenity not listed here
// falls back to a generic Sparkles icon rather than rendering nothing, so
// the grid never has a silently broken row.
const AMENITY_ICONS: Record<string, ComponentType<{ className?: string }>> = {
  Wifi: Wifi,
  Kitchen: UtensilsCrossed,
  'Free parking': Car,
  Parking: ParkingCircle,
  'Air conditioning': Wind,
  Washer: WashingMachine,
  Dryer: Shirt,
  TV: Tv,
  Pool: Waves,
  'Hot tub': Snowflake,
  Fireplace: Flame,
  Gym: Dumbbell,
  Garden: Flower2,
  Refrigerator: Refrigerator,
  Microwave: Microwave,
  'Coffee maker': Coffee,
  'Crib available': Baby,
  Heating: Sun,
  'Pets allowed': Dog,
  'Smoke alarm': ShieldCheck,
  'Dedicated workspace': UtensilsCrossed,
};

interface AmenitiesGridProps {
  amenities: string[];
  /** Amenities offered elsewhere in the listing but not present here, shown struck through. */
  unavailableAmenities?: string[];
}

export default function AmenitiesGrid({
  amenities,
  unavailableAmenities = [],
}: AmenitiesGridProps) {
  const allItems = [
    ...amenities.map((label) => ({ label, available: true })),
    ...unavailableAmenities.map((label) => ({ label, available: false })),
  ];

  return (
    <ul
      className="grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-2"
      aria-label="Amenities"
    >
      {allItems.map(({ label, available }) => {
        const Icon = AMENITY_ICONS[label] ?? Sparkles;

        return (
          <li
            key={label}
            className={`flex items-center gap-4 text-base ${
              available ? 'text-charcoal' : 'text-gray-400'
            }`}
          >
            <Icon
              className={`h-6 w-6 shrink-0 ${!available ? 'opacity-60' : ''}`}
              aria-hidden="true"
            />
            <span className={!available ? 'line-through' : undefined}>
              {label}
              {!available && (
                <span className="sr-only"> — not included with this listing</span>
              )}
            </span>
          </li>
        );
      })}
    </ul>
  );
}
