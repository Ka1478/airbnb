export interface Listing {
  id: string;
  title: string;
  description: string;
  images: string[];
  pricePerNight: number;
  location: {
    city: string;
    country: string;
    lat: number;
    lng: number;
    neighborhoodBlurb: string;
  };
  rating: number;
  reviewCount: number;
  isGuestFavorite: boolean;
  categoryRatings: CategoryRatings;
  reviewTags: Array<{ label: string; count: number }>;
  host: Host;
  amenities: string[];
  unavailableAmenities: string[];
  highlights: Highlight[];
  sleepingAreas: SleepingArea[];
  thingsToKnow: ThingsToKnow;
  maxGuests: number;
  bedrooms: number;
  beds: number;
  baths: number;
}

export interface Highlight {
  icon: 'outdoor' | 'cooling' | 'selfCheckIn';
  title: string;
  description: string;
}

export interface SleepingArea {
  id: string;
  name: string;
  detail: string;
  image: string;
}

export interface CategoryRatings {
  cleanliness: number;
  accuracy: number;
  checkIn: number;
  communication: number;
  location: number;
  value: number;
}

export interface Host {
  id: string;
  name: string;
  avatarUrl: string;
  isSuperhost: boolean;
  joinedYear: number;
  reviewCount: number;
  rating: number;
  bornDecade: string;
  school: string;
  responseRate: number;
  respondsWithin: string;
  coHosts: Array<{ name: string; avatarUrl?: string }>;
}

export interface ThingsToKnow {
  cancellationPolicy: string;
  houseRules: string[];
  safety: string[];
}

export interface NearbyListing {
  id: string;
  title: string;
  image: string;
  price: number;
  rating: number;
}

export interface Review {
  id: string;
  author: string;
  avatarUrl: string;
  rating: number;
  comment: string;
  date: string;
}
