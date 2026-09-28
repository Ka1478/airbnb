import { Globe, DollarSign } from 'lucide-react';

const footerLinks = {
  Support: [
    'Help Center',
    'AirCover',
    'Anti-discrimination',
    'Disability support',
    'Cancellation options',
    'Report neighborhood concern',
  ],
  Hosting: [
    'Airbnb your home',
    'AirCover for Hosts',
    'Hosting resources',
    'Community forum',
    'Hosting responsibly',
    'Airbnb-friendly apartments',
  ],
  Airbnb: [
    'Newsroom',
    'New features',
    'Careers',
    'Investors',
    'Gift cards',
    'Airbnb.org emergency stays',
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50">
      <div className="mx-auto max-w-[1760px] px-6 py-10 md:px-10">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h3 className="mb-4 text-sm font-semibold text-charcoal">
                {heading}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="rounded text-sm text-gray-600 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-charcoal"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-200">
        <div className="mx-auto flex max-w-[1760px] flex-col-reverse items-center justify-between gap-4 px-6 py-6 text-sm text-gray-600 md:flex-row md:px-10">
          <div className="flex flex-wrap items-center justify-center gap-2 md:justify-start">
            <span>© {new Date().getFullYear()} Airbnb Clone, Inc.</span>
            <span aria-hidden="true">·</span>
            <a href="#" className="hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-charcoal rounded">
              Privacy
            </a>
            <span aria-hidden="true">·</span>
            <a href="#" className="hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-charcoal rounded">
              Terms
            </a>
            <span aria-hidden="true">·</span>
            <a href="#" className="hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-charcoal rounded">
              Sitemap
            </a>
          </div>

          <div className="flex items-center gap-6">
            <button className="flex items-center gap-2 rounded font-medium hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-charcoal">
              <Globe className="h-4 w-4" aria-hidden="true" />
              English (US)
            </button>
            <button className="flex items-center gap-2 rounded font-medium hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-charcoal">
              <DollarSign className="h-4 w-4" aria-hidden="true" />
              USD
            </button>
            <div className="flex items-center gap-4">
              <a href="#" aria-label="Facebook" className="rounded hover:opacity-70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-charcoal">
                <svg viewBox="0 0 24 24" className="h-4 w-4 fill-charcoal">
                  <path d="M22 12a10 10 0 10-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.4v7A10 10 0 0022 12z" />
                </svg>
              </a>
              <a href="#" aria-label="Twitter" className="rounded hover:opacity-70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-charcoal">
                <svg viewBox="0 0 24 24" className="h-4 w-4 fill-charcoal">
                  <path d="M22 5.9c-.7.3-1.5.6-2.3.7.8-.5 1.5-1.3 1.8-2.3-.8.5-1.7.8-2.6 1a4.1 4.1 0 00-7 3.7A11.6 11.6 0 013 4.9a4.1 4.1 0 001.3 5.5c-.7 0-1.3-.2-1.9-.5v.1c0 2 1.4 3.6 3.3 4a4.1 4.1 0 01-1.9.1 4.1 4.1 0 003.8 2.8A8.2 8.2 0 012 18.4a11.6 11.6 0 006.3 1.8c7.5 0 11.7-6.3 11.7-11.7v-.5c.8-.6 1.5-1.3 2-2.1z" />
                </svg>
              </a>
              <a href="#" aria-label="Instagram" className="rounded hover:opacity-70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-charcoal">
                <svg viewBox="0 0 24 24" className="h-4 w-4 fill-charcoal">
                  <path d="M12 2c2.7 0 3 0 4.1.1 1.1 0 1.8.2 2.4.5.7.2 1.2.6 1.7 1.1.5.5.9 1 1.1 1.7.2.6.4 1.3.5 2.4.1 1.1.1 1.4.1 4.1s0 3-.1 4.1c0 1.1-.2 1.8-.5 2.4-.2.7-.6 1.2-1.1 1.7-.5.5-1 .9-1.7 1.1-.6.2-1.3.4-2.4.5-1.1.1-1.4.1-4.1.1s-3 0-4.1-.1c-1.1 0-1.8-.2-2.4-.5-.7-.2-1.2-.6-1.7-1.1-.5-.5-.9-1-1.1-1.7-.2-.6-.4-1.3-.5-2.4C2 15 2 14.7 2 12s0-3 .1-4.1c0-1.1.2-1.8.5-2.4.2-.7.6-1.2 1.1-1.7.5-.5 1-.9 1.7-1.1.6-.2 1.3-.4 2.4-.5C9 2 9.3 2 12 2zm0 1.8c-2.6 0-2.9 0-4 .1-.9 0-1.4.2-1.8.3-.4.2-.7.4-1.1.7-.3.4-.5.7-.7 1.1-.1.4-.3.9-.3 1.8-.1 1.1-.1 1.4-.1 4s0 2.9.1 4c0 .9.2 1.4.3 1.8.2.4.4.7.7 1.1.4.3.7.5 1.1.7.4.1.9.3 1.8.3 1.1.1 1.4.1 4 .1s2.9 0 4-.1c.9 0 1.4-.2 1.8-.3.4-.2.7-.4 1.1-.7.3-.4.5-.7.7-1.1.1-.4.3-.9.3-1.8.1-1.1.1-1.4.1-4s0-2.9-.1-4c0-.9-.2-1.4-.3-1.8-.2-.4-.4-.7-.7-1.1a2.9 2.9 0 00-1.1-.7c-.4-.1-.9-.3-1.8-.3-1.1-.1-1.4-.1-4-.1zm0 4.5a4.7 4.7 0 110 9.4 4.7 4.7 0 010-9.4zm0 1.8a2.9 2.9 0 100 5.8 2.9 2.9 0 000-5.8zm5.9-2a1.1 1.1 0 11-2.2 0 1.1 1.1 0 012.2 0z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
