'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, Search, User, Globe } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Navbar() {
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white">
      <div className="mx-auto flex h-20 max-w-[1760px] items-center justify-between px-6 md:px-10">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 rounded-lg text-airbnb focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-charcoal"
          aria-label="Airbnb homepage"
        >
          <svg
            viewBox="0 0 32 32"
            className="h-8 w-8 fill-airbnb"
            aria-hidden="true"
          >
            <path d="M16 1c1.7 0 3 .9 4.2 2.8l.3.5c2.6 4.3 8.4 14.7 9.9 18.8.3.8.5 1.6.5 2.4 0 3.6-2.9 6.5-6.5 6.5-2.4 0-4.7-1.3-6.3-3.3-1.6 2-3.9 3.3-6.3 3.3C8.2 32 5.3 29.1 5.3 25.5c0-.8.2-1.6.5-2.4 1.5-4.1 7.3-14.5 9.9-18.8l.3-.5C17.2 1.9 18.3 1 16 1z" />
          </svg>
          <span className="hidden text-xl font-bold tracking-tight md:block">
            airbnb
          </span>
        </Link>

        {/* Search bar */}
        <button
          onClick={() => setIsSearchExpanded(true)}
          aria-label="Search: Anywhere, any week, add guests"
          className={cn(
            'flex items-center rounded-full border border-gray-200 bg-white py-2 pl-6 pr-2 shadow-card transition-shadow hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-charcoal',
            'w-full max-w-[350px] md:max-w-[400px]'
          )}
        >
          <span className="flex-1 border-r border-gray-300 pr-4 text-left text-sm font-medium text-charcoal">
            Anywhere
          </span>
          <span className="flex-1 border-r border-gray-300 px-4 text-left text-sm font-medium text-charcoal">
            Any week
          </span>
          <span className="flex-1 pl-4 pr-2 text-left text-sm text-gray-500">
            Add guests
          </span>
          <span className="ml-2 flex h-8 w-8 items-center justify-center rounded-full bg-airbnb text-white">
            <Search className="h-4 w-4" strokeWidth={3} />
          </span>
        </button>

        {/* Right side */}
        <div className="flex items-center gap-2">
          <Link
            href="/host/homes"
            className="hidden whitespace-nowrap rounded-full px-3 py-3 text-sm font-medium text-charcoal hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-charcoal md:block"
          >
            Airbnb your home
          </Link>

          <button
            className="hidden h-10 w-10 items-center justify-center rounded-full text-charcoal hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-charcoal md:flex"
            aria-label="Choose a language and region"
          >
            <Globe className="h-4 w-4" aria-hidden="true" />
          </button>

          <button
            className="flex items-center gap-3 rounded-full border border-gray-200 py-2 pl-3 pr-3 shadow-card hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-charcoal"
            aria-label="Main menu"
          >
            <Menu className="h-4 w-4 text-charcoal" aria-hidden="true" />
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-500 text-white">
              <User className="h-5 w-5" aria-hidden="true" />
            </span>
          </button>
        </div>
      </div>

      {/* Category filter strip (Airbnb-style secondary nav) */}
      <div className="mx-auto flex max-w-[1760px] items-center gap-8 overflow-x-auto px-6 pb-4 pt-1 md:px-10">
        {[
          'Amazing views',
          'Beachfront',
          'Cabins',
          'Trending',
          'Tiny homes',
          'Countryside',
          'Design',
          'OMG!',
        ].map((category) => (
          <button
            key={category}
            aria-pressed="false"
            className="flex shrink-0 flex-col items-center gap-2 border-b-2 border-transparent pb-2 text-xs text-gray-500 opacity-80 hover:border-gray-300 hover:text-charcoal hover:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-charcoal focus-visible:rounded"
          >
            {category}
          </button>
        ))}
      </div>
    </header>
  );
}
