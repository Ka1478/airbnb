import type { Listing } from '@/types/listing';

interface PropertyDetailsProps {
  listing: Listing;
}

export default function PropertyDetails({ listing }: PropertyDetailsProps) {
  const { host, maxGuests, bedrooms, beds, baths, description } = listing;

  return (
    <section aria-labelledby="property-details-heading" className="border-b border-gray-200 py-8">
      <h2 id="property-details-heading" className="text-xl font-semibold text-charcoal">
        Entire home hosted by {host.name}
      </h2>
      <p className="mt-1 text-charcoal">
        {maxGuests} guests · {bedrooms} bedrooms · {beds} beds · {baths} bath
      </p>

      {host.isSuperhost && (
        <p className="mt-3 text-sm text-gray-600">{host.name} is a Superhost — experienced, highly rated, committed to great stays.</p>
      )}

      <div className="mt-6">
        <div className="mb-4 flex items-center gap-2 rounded-lg bg-gray-100 px-4 py-3 text-sm text-charcoal">
          Some info has been automatically translated.
          <button type="button" className="font-medium underline">
            Show original
          </button>
        </div>
        <p className="leading-relaxed text-charcoal">{description}</p>
      </div>
    </section>
  );
}
