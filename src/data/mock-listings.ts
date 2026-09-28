import { Listing, NearbyListing, Review } from '@/types/listing';

export const mockListing: Listing = {
  id: '1',
  title: 'Sunlit Modern Loft with Skyline Views',
  description:
    'A bright, thoughtfully designed loft in the heart of the city. Floor-to-ceiling windows, a fully equipped kitchen, and a private balcony make this the perfect base for your stay. Just minutes from downtown cafes, restaurants, and nightlife, it is an easy walk to everything you need. Self check-in makes arrival simple no matter what time your flight lands.',
  images: [
    'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200',
    'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800',
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800',
    'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800',
    'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800',
  ],
  pricePerNight: 189,
  location: {
    city: 'Austin',
    country: 'United States',
    lat: 30.2672,
    lng: -97.7431,
    neighborhoodBlurb:
      'Located in the heart of downtown, this loft offers a peaceful stay with easy access to live music, cafes, and popular attractions.',
  },
  rating: 4.92,
  reviewCount: 214,
  isGuestFavorite: true,
  categoryRatings: {
    cleanliness: 4.9,
    accuracy: 4.95,
    checkIn: 5.0,
    communication: 4.98,
    location: 4.8,
    value: 4.7,
  },
  reviewTags: [
    { label: 'Comfort', count: 6 },
    { label: 'Accuracy', count: 5 },
    { label: 'Balcony', count: 5 },
    { label: 'Condition', count: 4 },
    { label: 'Hospitality', count: 8 },
    { label: 'Cleanliness', count: 4 },
    { label: 'Amenities', count: 2 },
  ],
  host: {
    id: 'h1',
    name: 'Jordan',
    avatarUrl: 'https://i.pravatar.cc/150?img=12',
    isSuperhost: true,
    joinedYear: 2018,
    reviewCount: 1463,
    rating: 4.86,
    bornDecade: 'Born in the 90s',
    school: 'Where I went to school: UT Austin',
    responseRate: 100,
    respondsWithin: 'within an hour',
    coHosts: [
      { name: 'Priya', avatarUrl: 'https://i.pravatar.cc/150?img=32' },
      { name: 'Marcus', avatarUrl: 'https://i.pravatar.cc/150?img=45' },
      { name: 'Elena' },
    ],
  },
  amenities: [
    'Wifi',
    'Kitchen',
    'Free parking',
    'Air conditioning',
    'Washer',
    'Dedicated workspace',
    'Pool',
    'Hot tub',
    'TV',
    'Hair dryer',
  ],
  unavailableAmenities: ['Smoke alarm', 'Carbon monoxide alarm'],
  highlights: [
    {
      icon: 'outdoor',
      title: 'Outdoor entertainment',
      description: 'The balcony and rooftop lounge are great for summer evenings.',
    },
    {
      icon: 'cooling',
      title: 'Designed for staying cool',
      description: 'Beat the heat with central A/C and ceiling fans.',
    },
    {
      icon: 'selfCheckIn',
      title: 'Self check-in',
      description: 'Check in yourself with the building keypad.',
    },
  ],
  sleepingAreas: [
    {
      id: 's1',
      name: 'Bedroom',
      detail: '1 queen bed',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600',
    },
    {
      id: 's2',
      name: 'Living room',
      detail: '1 sofa bed',
      image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=600',
    },
  ],
  thingsToKnow: {
    cancellationPolicy:
      'Free cancellation before check-in. Cancel before arrival for a partial refund.',
    houseRules: ['Check-in after 3:00 PM', 'Checkout before 11:00 AM', '4 guests maximum'],
    safety: [
      'Carbon monoxide alarm installed',
      'Smoke alarm installed',
      'Exterior security cameras on property',
    ],
  },
  maxGuests: 4,
  bedrooms: 2,
  beds: 2,
  baths: 1,
};

export const mockReviews: Review[] = [
  {
    id: 'r1',
    author: 'Priya',
    avatarUrl: 'https://i.pravatar.cc/150?img=32',
    rating: 5,
    comment:
      'Beautiful space, exactly as pictured. The host was responsive and check-in was seamless. The neighborhood was quieter than I expected for being so central, and there were several good coffee shops within a five minute walk. We ended up extending our stay by a night because we liked it so much. Would absolutely stay again and have already recommended it to friends visiting the city.',
    date: '2026-06-12',
  },
  {
    id: 'r2',
    author: 'Marcus',
    avatarUrl: 'https://i.pravatar.cc/150?img=45',
    rating: 5,
    comment:
      'Loved the natural light and the location. Walking distance to everything we needed for the trip.',
    date: '2026-05-28',
  },
  {
    id: 'r3',
    author: 'Elena',
    avatarUrl: 'https://i.pravatar.cc/150?img=20',
    rating: 4,
    comment:
      'Great stay overall. Kitchen was well stocked. Only minor issue was street noise at night.',
    date: '2026-04-15',
  },
  {
    id: 'r4',
    author: 'Tom',
    avatarUrl: 'https://i.pravatar.cc/150?img=8',
    rating: 5,
    comment:
      'This place exceeded expectations. Super clean, comfortable beds, and a fantastic view from the balcony. We spent most evenings out there with a glass of wine watching the sunset over the skyline. The host left a really thoughtful welcome note with restaurant recommendations that turned out to be spot on. Parking was easy too, which is rare for this part of town.',
    date: '2026-03-02',
  },
  {
    id: 'r5',
    author: 'Sana',
    avatarUrl: 'https://i.pravatar.cc/150?img=25',
    rating: 5,
    comment: 'Host was really great help, super communicative throughout.',
    date: '2026-02-18',
  },
  {
    id: 'r6',
    author: 'David',
    avatarUrl: 'https://i.pravatar.cc/150?img=15',
    rating: 5,
    comment: 'Great experience staying here, would recommend to friends and family.',
    date: '2026-01-30',
  },
];

export const mockNearbyListings: NearbyListing[] = [
  {
    id: 'n1',
    title: 'Cozy Studio with City View',
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=500',
    price: 142,
    rating: 4.91,
  },
  {
    id: 'n2',
    title: 'Modern 1BHK Near Downtown',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=500',
    price: 165,
    rating: 4.95,
  },
  {
    id: 'n3',
    title: 'Bright Loft with Balcony',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=500',
    price: 178,
    rating: 4.94,
  },
  {
    id: 'n4',
    title: 'Stylish Studio Near Transit',
    image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=500',
    price: 129,
    rating: 4.96,
  },
  {
    id: 'n5',
    title: 'Sunny 1BHK with Workspace',
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=500',
    price: 156,
    rating: 4.95,
  },
];
