import Image from 'next/image';
import { ShieldCheck } from 'lucide-react';
import type { Host } from '@/types/listing';

interface HostSectionProps {
  host: Host;
}

export default function HostSection({ host }: HostSectionProps) {
  return (
    <section aria-labelledby="host-heading" className="border-b border-gray-200 py-8">
      <h2 id="host-heading" className="mb-6 text-xl font-semibold text-charcoal">
        Meet your host
      </h2>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div className="flex items-center gap-6 rounded-xl border border-gray-200 p-6">
          <Image
            src={host.avatarUrl}
            alt={`${host.name}, host`}
            width={80}
            height={80}
            className="rounded-full"
          />
          <div>
            <p className="text-xl font-semibold text-charcoal">{host.name}</p>
            <p className="text-sm text-gray-500">Host</p>
            <div className="mt-3 flex gap-6 border-t border-gray-200 pt-3 text-sm">
              <div>
                <p className="font-semibold text-charcoal">{host.reviewCount.toLocaleString()}</p>
                <p className="text-gray-500">Reviews</p>
              </div>
              <div>
                <p className="font-semibold text-charcoal">{host.rating.toFixed(2)}★</p>
                <p className="text-gray-500">Rating</p>
              </div>
              <div>
                <p className="font-semibold text-charcoal">{host.joinedYear}</p>
                <p className="text-gray-500">Years hosting</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <ul className="mb-6 space-y-3 text-sm text-charcoal">
            <li>{host.bornDecade}</li>
            <li>{host.school}</li>
          </ul>

          {host.coHosts.length > 0 && (
            <>
              <h3 className="mb-3 font-medium text-charcoal">Co-hosts</h3>
              <ul className="mb-6 flex flex-wrap gap-4">
                {host.coHosts.map((coHost) => (
                  <li key={coHost.name} className="flex items-center gap-2">
                    {coHost.avatarUrl ? (
                      <Image
                        src={coHost.avatarUrl}
                        alt=""
                        width={32}
                        height={32}
                        className="rounded-full"
                      />
                    ) : (
                      <span
                        className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-200 text-xs font-medium text-charcoal"
                        aria-hidden="true"
                      >
                        {coHost.name[0]}
                      </span>
                    )}
                    <span className="text-sm text-charcoal">{coHost.name}</span>
                  </li>
                ))}
              </ul>
            </>
          )}

          <h3 className="mb-2 font-medium text-charcoal">Host details</h3>
          <p className="text-sm text-charcoal">Response rate: {host.responseRate}%</p>
          <p className="mb-4 text-sm text-charcoal">Responds {host.respondsWithin}</p>

          <button
            type="button"
            className="rounded-lg border border-charcoal px-6 py-3 text-sm font-medium text-charcoal hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-charcoal"
          >
            Message host
          </button>

          <div className="mt-6 flex items-start gap-2 text-sm text-gray-500">
            <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
            <p>To help protect your payment, always use the platform to send money and communicate with hosts.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
