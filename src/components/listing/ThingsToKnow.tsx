import { CalendarX, Search, Shield } from 'lucide-react';
import type { ThingsToKnow as ThingsToKnowType } from '@/types/listing';

interface ThingsToKnowProps {
  data: ThingsToKnowType;
}

export default function ThingsToKnow({ data }: ThingsToKnowProps) {
  const columns = [
    {
      icon: CalendarX,
      heading: 'Cancellation policy',
      lines: [data.cancellationPolicy],
    },
    {
      icon: Search,
      heading: 'House rules',
      lines: data.houseRules,
    },
    {
      icon: Shield,
      heading: 'Safety & property',
      lines: data.safety,
    },
  ];

  return (
    <section aria-labelledby="things-to-know-heading" className="border-b border-gray-200 py-8">
      <h2 id="things-to-know-heading" className="mb-6 text-xl font-semibold text-charcoal">
        Things to know
      </h2>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
        {columns.map(({ icon: Icon, heading, lines }) => (
          <div key={heading}>
            <Icon className="mb-3 h-6 w-6 text-charcoal" aria-hidden="true" />
            <h3 className="mb-2 font-medium text-charcoal">{heading}</h3>
            {lines.map((line) => (
              <p key={line} className="mb-1 text-sm text-gray-600">
                {line}
              </p>
            ))}
            <button
              type="button"
              className="mt-2 text-sm font-medium text-charcoal underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-charcoal"
            >
              Learn more
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
