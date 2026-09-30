# JMB Hotels — Jay Maa Bayan Group of Hotels

A premium, static, data-driven website for the JMB Hotels group, covering five properties
across Indore and Dewas.

## Tech Stack

- React 18 + Vite
- Tailwind CSS
- React Router v6
- Framer Motion (animation)
- Lucide React (icons)

This is a **static frontend** — no database, admin panel, authentication or payment gateway.
Booking is handled as a validated enquiry form; a backend can be wired into
`src/pages/Booking.jsx` later without touching the rest of the site.

## Installation

```bash
npm install
npm run dev
```

Then open the URL Vite prints (usually `http://localhost:5173`).

### Build for production

```bash
npm run build
npm run preview   # to preview the production build locally
```

## Project Structure

```
src/
  components/   Reusable UI: Navbar, Footer, Hero, BookingSearch, HotelCard,
                CityCard, AreaCard, HotelGallery, RoomCard, ReviewSection,
                SocialSection, MapSection, CTASection, WhatsAppButton,
                MobileBottomBar, ScrollReveal, PageTransition, LegalPage
  pages/        One component per route (see Routes below)
  data/         hotels.js — the single source of truth for all hotel data
  utils/        hotelHelpers.js (data → cities/areas/hotels), useSEO.js
  App.jsx       Router + layout
  main.jsx      Entry point
public/
  media/demo/   Placeholder imagery (see "Replacing demo images" below)
```

## Where Hotel Data Lives

**All hotel information lives in `src/data/hotels.js`.** Nothing about cities, areas or hotel
counts is hard-coded anywhere else in the UI — it's all derived from this file through the
helper functions in `src/utils/hotelHelpers.js` (`getCities`, `getAreasByCity`,
`getHotelsByCity`, `getHotelsByArea`, `getHotelBySlug`, etc.).

## How to Add a Hotel

Add a new object to the `hotels` array in `src/data/hotels.js`:

```js
{
  id: 6,
  name: 'New Hotel Name',
  slug: 'new-hotel-name',        // used in /hotels/:hotelSlug — must be unique
  city: 'City Name',
  citySlug: 'city-name',
  area: 'Area Name',
  areaSlug: 'area-name',
  address: '...',
  phone: '...',
  whatsappNumber: '91XXXXXXXXXX', // country code + number, no + or spaces
  email: '',                      // leave blank if unknown — hidden automatically
  officialWebsite: '',            // leave blank to hide the "Official Website" button
  description: '...',
  tagline: '...',
  heroImage: '/media/demo/new-hotel-hero.jpg',
  images: [],
  heroVideo: '',                  // optional mp4 path; falls back to heroImage
  rooms: [],                      // leave empty for "Room details coming soon"
  amenities: [],
  nearbyPlaces: [],
  rating: null,
  reviewCount: null,
  reviews: [],
  socialLinks: { instagram: '', facebook: '', google: '' },
  mapUrl: '',
  checkIn: '12:00 PM',
  checkOut: '11:00 AM',
  featured: false,
}
```

That's it — the hotel will automatically appear in: the homepage (if `featured: true`), the
Hotels listing, its city and area pages, the booking selector, and get its own page at
`/hotels/new-hotel-name`.

## How to Add a City or Area

You don't add cities or areas anywhere directly — they're derived from whatever `city`/`citySlug`
and `area`/`areaSlug` values appear on hotel records. Give a hotel a new `citySlug` or `areaSlug`
and the new city/area appears automatically in navigation, footer, `/locations`, and the booking
form.

## How to Replace Demo Images/Videos

No real JMB photography or video was supplied for this build, so `public/media/demo/` contains
generated placeholder imagery (branded in the site's palette, not broken/fake URLs) — one hero +
three gallery images per hotel, plus city and experience images.

To replace them:
1. Drop real photos into `public/media/demo/` (or a new folder of your choice) using the same or
   updated filenames.
2. Update the corresponding `heroImage` / `images` paths in `src/data/hotels.js`.
3. For a hero video, add an `.mp4` file and set `heroVideo` on that hotel — the `Hero` component
   (`src/components/Hero.jsx`) will autoplay it muted/looped with the image as poster/fallback.

No component code needs to change — every image reference flows from the data file.

## How to Add Official Social Links

Set `socialLinks.instagram`, `socialLinks.facebook` and `socialLinks.google` (a Google
Reviews/Business link) on the relevant hotel object in `src/data/hotels.js`. Any link left as an
empty string automatically renders as a disabled "Coming Soon" state in the "Connect with JMB"
section instead of a broken or fake link.

## How to Add an Official Hotel Website

Set `officialWebsite` on the hotel object. The "Visit Official Website" button on that hotel's
page is hidden automatically when this field is empty.

## Data Integrity

Per the project brief, this site never fabricates business information. Prices, ratings,
reviews, amenities and offers only render when present in `src/data/hotels.js`; otherwise the UI
shows an honest state such as "Room details coming soon" or "Reviews coming soon."

## Routes

```
/
/locations
/locations/:citySlug
/locations/:citySlug/:areaSlug
/hotels
/hotels/:hotelSlug
/booking
/about
/contact
/offers
/experiences
/privacy
/terms
/cancellation
/refund
*  (404)
```
