import { Umbrella, Wind, DoorOpen } from 'lucide-react';
import type { Highlight } from '@/types/listing';

const HIGHLIGHT_ICONS = {
  outdoor: Umbrella,
  cooling: Wind,
  selfCheckIn: DoorOpen,
};

interface ListingHighlightsProps {
  highlights: Highlight[];
}

export default function ListingHighlights({ highlights }: ListingHighlightsProps) {
  return (
    <ul className="space-y-5 border-b border-gray-200 py-6">
      {highlights.map((highlight) => {
        const Icon = HIGHLIGHT_ICONS[highlight.icon];
        return (
          <li key={highlight.title} className="flex items-start gap-4">
            <Icon className="mt-0.5 h-6 w-6 shrink-0 text-charcoal" aria-hidden="true" />
            <div>
              <p className="font-medium text-charcoal">{highlight.title}</p>
              <p className="text-sm text-gray-500">{highlight.description}</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
