'use client';

import { useRef, useState } from 'react';
import type { DateRange } from 'react-day-picker';
import ListingHeader from '@/components/listing/ListingHeader';
import PhotoGrid from '@/components/listing/PhotoGrid';
import ListingTabNav from '@/components/listing/ListingTabNav';
import TrustBadgeRow from '@/components/listing/TrustBadgeRow';
import PropertyDetails from '@/components/listing/PropertyDetails';
import ListingHighlights from '@/components/listing/ListingHighlights';
import SleepingArrangements from '@/components/listing/SleepingArrangements';
import AmenitiesSection from '@/components/listing/AmenitiesSection';
import AvailabilityCalendar from '@/components/listing/AvailabilityCalendar';
import GuestFavoriteBadge from '@/components/listing/GuestFavoriteBadge';
import ReviewsSection from '@/components/listing/ReviewsSection';
import LocationMap from '@/components/listing/LocationMap';
import HostSection from '@/components/listing/HostSection';
import ThingsToKnow from '@/components/listing/ThingsToKnow';
import NearbyListings from '@/components/listing/NearbyListings';
import BookingCard from '@/components/listing/BookingCard';
import { mockListing, mockReviews, mockNearbyListings } from '@/data/mock-listings';

export default function ListingPage() {
  const listing = mockListing;
  const [range, setRange] = useState<DateRange | undefined>();
  const bookingCardRef = useRef<HTMLElement>(null);

  function scrollToBookingCard() {
    bookingCardRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  return (
    <div>
      <div className="mx-auto max-w-[1120px] px-6 pt-6 md:px-10">
        <ListingHeader listing={listing} />
        <PhotoGrid images={listing.images} title={listing.title} />
      </div>

      <ListingTabNav
        pricePerNight={listing.pricePerNight}
        rating={listing.rating}
        reviewCount={listing.reviewCount}
        onReserveClick={scrollToBookingCard}
      />

      <div className="mx-auto max-w-[1120px] px-6 pb-16 pt-8 md:px-10">
        <div className="grid grid-cols-1 gap-x-16 md:grid-cols-3">
          <div className="md:col-span-2">
            <PropertyDetails listing={listing} />
            <TrustBadgeRow
              isGuestFavorite={listing.isGuestFavorite}
              rating={listing.rating}
              reviewCount={listing.reviewCount}
            />
            <ListingHighlights highlights={listing.highlights} />
            <SleepingArrangements sleepingAreas={listing.sleepingAreas} />
            <AmenitiesSection
              amenities={listing.amenities}
              unavailableAmenities={listing.unavailableAmenities}
            />
            <AvailabilityCalendar
              city={listing.location.city}
              range={range}
              onChange={setRange}
            />
            <GuestFavoriteBadge rating={listing.rating} />
            <ReviewsSection
              rating={listing.rating}
              reviewCount={listing.reviewCount}
              categoryRatings={listing.categoryRatings}
              reviewTags={listing.reviewTags}
              reviews={mockReviews}
            />
            <LocationMap location={listing.location} />
            <HostSection host={listing.host} />
            <ThingsToKnow data={listing.thingsToKnow} />
          </div>

          <div className="md:col-span-1">
            <BookingCard
              ref={bookingCardRef}
              pricePerNight={listing.pricePerNight}
              rating={listing.rating}
              reviewCount={listing.reviewCount}
              maxGuests={listing.maxGuests}
              range={range}
              onRangeChange={setRange}
            />
          </div>
        </div>

        <NearbyListings listings={mockNearbyListings} />
      </div>
    </div>
  );
}
