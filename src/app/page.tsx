import { redirect } from 'next/navigation';

export default function HomePage() {
  // The clone only has the listing detail page built out so far;
  // send the root path straight to the demo listing.
  redirect('/listing/1');
}
