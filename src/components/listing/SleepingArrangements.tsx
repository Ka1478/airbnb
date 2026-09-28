import Image from 'next/image';
import type { SleepingArea } from '@/types/listing';

interface SleepingArrangementsProps {
  sleepingAreas: SleepingArea[];
}

export default function SleepingArrangements({ sleepingAreas }: SleepingArrangementsProps) {
  return (
    <section aria-labelledby="sleeping-heading" className="border-b border-gray-200 py-8">
      <h2 id="sleeping-heading" className="mb-6 text-xl font-semibold text-charcoal">
        Where you&apos;ll sleep
      </h2>

      <ul className="grid grid-cols-2 gap-4 sm:max-w-md">
        {sleepingAreas.map((area) => (
          <li key={area.id}>
            <div className="relative mb-3 aspect-[4/3] w-full overflow-hidden rounded-xl bg-gray-100">
              <Image
                src={area.image}
                alt={area.name}
                fill
                sizes="(max-width: 640px) 50vw, 220px"
                className="object-cover"
              />
            </div>
            <p className="font-medium text-charcoal">{area.name}</p>
            <p className="text-sm text-gray-500">{area.detail}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
