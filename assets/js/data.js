/* ==========================================================================
   AMANI MIAMI — CMS-ready placeholder data layer.
   Every array below is SAMPLE data standing in for a future CMS / inventory
   feed (fleet management system, yacht broker feed, property management
   system, Google Business reviews API). Nothing here should be treated as
   verified real-world inventory, pricing, or testimonial content — replace
   through the CMS before launch. See README.md "Content & Data" section.
   ========================================================================== */

const SITE = {
  name: "Amani Miami",
  domain: "amanimiami.com",
  phone: "(267) 205-9738",
  phoneHref: "tel:+12672059738",
  whatsappHref: "https://wa.me/12672059738",
  email: "info@amanimiami.com",
  instagramHandle: "@luxury2008",
  instagramUrl: "https://www.instagram.com/luxury2008/",
  rating: "5.0",
  reviewCount: "81+",
  copyrightLine: "© 2026 Amani Miami. All rights reserved. Made by Iconic Line."
};

const LOCATIONS = [
  { name: "Brickell", slug: "brickell" },
  { name: "Fort Lauderdale", slug: "fort-lauderdale" },
  { name: "Boca Raton", slug: "boca-raton" },
  { name: "Orlando", slug: "orlando" },
  { name: "Fontainebleau Hotel", slug: "fontainebleau-hotel" },
  { name: "South Beach", slug: "south-beach" },
  { name: "Miami Beach", slug: "miami-beach" },
  { name: "North Miami Beach", slug: "north-miami-beach" },
  { name: "West Palm Beach", slug: "west-palm-beach" },
  { name: "Miami Gardens", slug: "miami-gardens" },
  { name: "Tampa", slug: "tampa" }
];

/* ---------------------------- Vehicle brands / categories --------------------------- */
const VEHICLE_BRANDS = [
  "Lamborghini","Ferrari","Rolls-Royce","Bentley","McLaren","Porsche",
  "Mercedes-Benz","Mercedes-AMG","Mercedes-Maybach","BMW","BMW M","Audi","Audi RS",
  "Range Rover","Cadillac","Corvette","Tesla"
];

const VEHICLE_CATEGORIES = [
  "Supercars","Exotic Convertibles","Exotic Coupes","Luxury Sedans","Ultra-Luxury Sedans",
  "Luxury SUVs","Performance SUVs","Premium Convertibles","Sports Cars","Executive Vehicles",
  "Group and Family Luxury","Special Event Vehicles","Long-Term Rental Vehicles",
  "New Arrivals","Most Requested","Featured Fleet"
];

/* SAMPLE fleet — replace with verified inventory via CMS before launch. */
const VEHICLES = [
  { slug: "lamborghini-huracan-evo", brand: "Lamborghini", model: "Huracán EVO", year: 2024, category: "Supercars", seats: 2, doors: 2, transmission: "Automatic", drivetrain: "AWD", exteriorColor: "Verde Mantis", interiorColor: "Black Alcantara", price: null, badge: "Most Requested", featured: true },
  { slug: "ferrari-488-spider", brand: "Ferrari", model: "488 Spider", year: 2023, category: "Exotic Convertibles", seats: 2, doors: 2, transmission: "Automatic", drivetrain: "RWD", exteriorColor: "Rosso Corsa", interiorColor: "Cognac Leather", price: null, badge: "Featured Fleet", featured: true },
  { slug: "rolls-royce-cullinan", brand: "Rolls-Royce", model: "Cullinan", year: 2024, category: "Luxury SUVs", seats: 5, doors: 4, transmission: "Automatic", drivetrain: "AWD", exteriorColor: "Arctic White", interiorColor: "Seashell", price: null, badge: "New Arrival", featured: true },
  { slug: "bentley-continental-gt", brand: "Bentley", model: "Continental GT", year: 2023, category: "Ultra-Luxury Sedans", seats: 4, doors: 2, transmission: "Automatic", drivetrain: "AWD", exteriorColor: "Beluga Black", interiorColor: "Linen", price: null, badge: null, featured: true },
  { slug: "mclaren-720s", brand: "McLaren", model: "720S", year: 2023, category: "Supercars", seats: 2, doors: 2, transmission: "Automatic", drivetrain: "RWD", exteriorColor: "Papaya Orange", interiorColor: "Black Alcantara", price: null, badge: "Featured Fleet", featured: true },
  { slug: "porsche-911-turbo-s", brand: "Porsche", model: "911 Turbo S", year: 2024, category: "Sports Cars", seats: 4, doors: 2, transmission: "Automatic", drivetrain: "AWD", exteriorColor: "GT Silver", interiorColor: "Bordeaux Red", price: null, badge: "Most Requested", featured: true },
  { slug: "mercedes-maybach-s580", brand: "Mercedes-Maybach", model: "S580", year: 2024, category: "Ultra-Luxury Sedans", seats: 5, doors: 4, transmission: "Automatic", drivetrain: "AWD", exteriorColor: "Obsidian Black", interiorColor: "Macchiato Beige", price: null, badge: null, featured: true },
  { slug: "range-rover-autobiography", brand: "Range Rover", model: "Autobiography", year: 2024, category: "Performance SUVs", seats: 5, doors: 4, transmission: "Automatic", drivetrain: "AWD", exteriorColor: "Santorini Black", interiorColor: "Ivory", price: null, badge: null, featured: false },
  { slug: "bmw-m8-competition", brand: "BMW M", model: "M8 Competition", year: 2023, category: "Exotic Coupes", seats: 4, doors: 2, transmission: "Automatic", drivetrain: "AWD", exteriorColor: "Frozen Black", interiorColor: "Silverstone", price: null, badge: null, featured: false },
  { slug: "corvette-z06", brand: "Corvette", model: "Z06", year: 2024, category: "Sports Cars", seats: 2, doors: 2, transmission: "Automatic", drivetrain: "RWD", exteriorColor: "Torch Red", interiorColor: "Jet Black", price: null, badge: "New Arrival", featured: false }
];

/* ------------------------------------ Yachts ----------------------------------------- */
const YACHT_CATEGORIES = [
  "Luxury Day Yachts","Mega Yachts","Party and Event Yachts","Sunset Cruises",
  "Island-Hopping Charters","Fully Crewed Experiences"
];

/* SAMPLE yacht data — replace with verified broker / fleet listings via CMS. */
const YACHTS = [
  { slug: "azure-horizon-82", name: "Azure Horizon", length: "82 ft", category: "Mega Yachts", guests: 13, cabins: 4, bathrooms: 4, crew: "Captain + 2", price: null, badge: "Fully Crewed" },
  { slug: "biscayne-day-cruiser-48", name: "Biscayne Day Cruiser", length: "48 ft", category: "Luxury Day Yachts", guests: 12, cabins: 1, bathrooms: 1, crew: "Captain", price: null, badge: null },
  { slug: "golden-hour-58", name: "Golden Hour", length: "58 ft", category: "Sunset Cruises", guests: 14, cabins: 2, bathrooms: 2, crew: "Captain + 1", price: null, badge: "Most Requested" },
  { slug: "island-hopper-64", name: "Island Hopper", length: "64 ft", category: "Island-Hopping Charters", guests: 15, cabins: 3, bathrooms: 2, crew: "Captain + 1", price: null, badge: null },
  { slug: "midnight-affair-70", name: "Midnight Affair", length: "70 ft", category: "Party and Event Yachts", guests: 20, cabins: 3, bathrooms: 3, crew: "Captain + 2", price: null, badge: "Featured" }
];

/* ---------------------------------- Properties --------------------------------------- */
const PROPERTY_CATEGORIES = [
  "Luxury Villas","Waterfront Homes","Private Estates","Penthouses","Luxury Condominiums","Vacation Homes"
];

/* SAMPLE property data — replace with verified listings via CMS. */
const PROPERTIES = [
  { slug: "brickell-sky-residence", name: "Brickell Sky Residence", area: "Brickell", category: "Penthouses", bedrooms: 4, bathrooms: 5, guests: 8, waterfront: false, pool: true, price: null, badge: "Featured" },
  { slug: "star-island-estate", name: "Star Island Estate", area: "Miami Beach", category: "Private Estates", bedrooms: 7, bathrooms: 9, guests: 14, waterfront: true, pool: true, price: null, badge: "New Listing" },
  { slug: "gables-waterfront-villa", name: "Gables Waterfront Villa", area: "Coral Gables", category: "Waterfront Homes", bedrooms: 5, bathrooms: 6, guests: 10, waterfront: true, pool: true, price: null, badge: null },
  { slug: "fort-lauderdale-vacation-villa", name: "Las Olas Vacation Villa", area: "Fort Lauderdale", category: "Vacation Homes", bedrooms: 4, bathrooms: 4, guests: 8, waterfront: true, pool: true, price: null, badge: null }
];

/* ------------------------------------ Services ---------------------------------------- */
const SERVICES = [
  { slug: "luxury-car-rentals", name: "Luxury Car Rentals", short: "Refined sedans and SUVs for business, leisure and everyday elevated travel across South Florida." },
  { slug: "exotic-car-rentals", name: "Exotic Car Rentals", short: "Supercars and exotic coupes from Lamborghini, Ferrari, McLaren and more — showroom-ready and privately owned." },
  { slug: "long-term-rentals", name: "Long-Term Rentals", short: "Extended access to the fleet for seasonal residents, executives and clients who want flexibility without ownership." },
  { slug: "vip-rentals", name: "VIP Rentals", short: "A heightened level of service for clients who expect discretion, priority scheduling and dedicated support." },
  { slug: "vip-airport-pickup", name: "Airport Pickup", short: "A seamless transition from arrival to the fleet, coordinated door to curb with the Amani Miami team." },
  { slug: "private-chauffeur", name: "Private Chauffeur", short: "Professional coordination for events, business travel, nightlife and custom itineraries." },
  { slug: "vehicle-delivery", name: "Vehicle Delivery", short: "Personalized delivery to a hotel, residence or venue anywhere within the South Florida service area." },
  { slug: "wedding-rentals", name: "Wedding Rentals", short: "Arrival vehicles, couple transportation and coordinated fleets for the most photographed day of the year." },
  { slug: "corporate-rentals", name: "Corporate Rentals", short: "Executive arrivals, client hospitality and multi-vehicle coordination for conferences and brand activations." },
  { slug: "photoshoots-productions", name: "Photoshoots and Productions", short: "Vehicles for editorial projects, music videos, commercial productions and branded content." },
  { slug: "special-events", name: "Special Events", short: "Fleet coordination for celebrations, launches and high-profile private occasions." },
  { slug: "luxury-concierge", name: "Luxury Concierge", short: "Dedicated support connecting the fleet, yachts, properties and personalized lifestyle requests." },
  { slug: "personalized-requests", name: "Personalized Requests", short: "Custom combinations of vehicles, yachts, properties and experiences built around a single vision." }
];

/* -------------------------------------- FAQs ------------------------------------------- */
const FAQS = {
  "Car Rental": [
    { q: "What is required to rent an exotic car in Miami?", a: "Requirements vary by vehicle and are confirmed by our team, and generally include a valid driver's license, proof of insurance and a refundable security deposit. Contact the Amani Miami team for current availability, rental requirements, pricing and terms." },
    { q: "What are the age requirements to rent a vehicle?", a: "Age requirements vary by vehicle category. Contact the Amani Miami team for current eligibility requirements." },
    { q: "Do I need a valid driver's license?", a: "Yes. A valid driver's license is required, along with any supporting documentation requested by our team." },
    { q: "Is insurance required?", a: "Insurance requirements are confirmed for each rental. Contact our team for current availability, rental requirements, pricing and terms." },
    { q: "Are security deposits required?", a: "Security deposit details vary by vehicle. Our team will confirm the amount and terms during the reservation process." },
    { q: "Is there a mileage policy?", a: "Mileage policies vary by vehicle and rental term. Contact our team for full details before booking." },
    { q: "Can you deliver the vehicle to my hotel?", a: "Delivery is available across our South Florida service area, subject to vehicle and location. Contact our team to coordinate delivery." },
    { q: "Do you offer airport pickup?", a: "Airport pickup can be coordinated with our team. Contact us to arrange the details for your arrival." },
    { q: "Can I add an additional driver?", a: "Additional drivers may be accommodated subject to eligibility requirements. Contact our team for details." },
    { q: "Can international visitors rent a vehicle?", a: "International visitors are welcome, subject to eligibility requirements. Contact our team for complete rental requirements." },
    { q: "Can I extend my rental?", a: "Extensions are subject to availability. Contact our team as early as possible to request additional time." },
    { q: "What is your cancellation policy?", a: "Cancellation terms are confirmed at the time of reservation. Contact our team for current policy details." },
    { q: "What is the fuel policy?", a: "Fuel policy is confirmed for each rental. Our team will walk you through the details before delivery." },
    { q: "Who is responsible for traffic tickets or tolls?", a: "Responsibility for tickets and tolls incurred during the rental period is outlined in the rental agreement. Contact our team for details." },
    { q: "How do I confirm vehicle availability?", a: "Submit a request through our reservation form or contact our team directly, and a specialist will confirm availability." }
  ],
  "Yacht Charter": [
    { q: "What is the maximum guest capacity?", a: "Guest capacity varies by yacht. Our concierge team will help match your group size with the right vessel." },
    { q: "Do charters include a captain and crew?", a: "Most charters include a captain, with additional crew available depending on the vessel selected." },
    { q: "Is catering available?", a: "Catering can be coordinated for select charters. Let our team know your preferences when submitting an inquiry." },
    { q: "How long can a charter last?", a: "Charter duration is flexible and confirmed based on the vessel and occasion. Contact our team to discuss options." },
    { q: "What happens in the case of bad weather?", a: "Weather policies are confirmed at the time of booking. Our team will advise on rescheduling options if needed." },
    { q: "What is your yacht cancellation policy?", a: "Cancellation terms are confirmed at the time of reservation. Contact our team for current policy details." },
    { q: "What routes are available?", a: "Popular routes include Biscayne Bay, the Florida Keys and custom sunset itineraries. Contact our team to discuss options." },
    { q: "Can I book a yacht for a private event?", a: "Yes. Our team can help coordinate event-appropriate charters, subject to vessel availability." },
    { q: "What should I bring on board?", a: "Our team will send preparation guidance after your charter is confirmed." },
    { q: "Are security deposits required for yacht charters?", a: "Deposit requirements vary by vessel. Our team will confirm the amount and terms during booking." }
  ],
  "Properties": [
    { q: "How do I check property availability?", a: "Submit an inquiry through our property request form, and a specialist will confirm current availability." },
    { q: "Is there a minimum stay requirement?", a: "Minimum stay requirements vary by property. Contact our team for specific details." },
    { q: "What is the maximum guest count?", a: "Guest limits vary by property and are confirmed at the time of inquiry." },
    { q: "Are deposits required?", a: "Deposit requirements vary by property. Our team will confirm terms during the reservation process." },
    { q: "Can I host an event at the property?", a: "Event suitability varies by property and requires prior approval. Contact our team to discuss your plans." },
    { q: "Are there house rules I should know about?", a: "Yes, each property has specific house rules that will be shared prior to arrival." },
    { q: "Can your team help with concierge support during my stay?", a: "Yes. Concierge support can be coordinated alongside your property reservation." },
    { q: "Is the exact property address provided in advance?", a: "General location is shared publicly; exact addresses are provided to confirmed guests for privacy." }
  ],
  "General": [
    { q: "Which South Florida locations do you serve?", a: "We serve Brickell, Fort Lauderdale, Boca Raton, Orlando, the Fontainebleau Hotel, South Beach, Miami Beach, North Miami Beach, West Palm Beach, Miami Gardens, Tampa and surrounding areas." },
    { q: "Can I combine cars, yachts and properties into one request?", a: "Yes. Visit our Personalized Requests page to describe your vision, and our concierge team will help coordinate it." },
    { q: "Do you work with corporate clients?", a: "Yes. We support executive arrivals, client hospitality, conferences and brand activations. Contact our team to discuss your needs." },
    { q: "How can I become a partner?", a: "Visit our Partners page to submit your company for consideration." },
    { q: "What is the best way to reach the team quickly?", a: "Call (267) 205-9738 or send a WhatsApp message for the fastest response." }
  ]
};

/* --------------------------------- Reviews (pending CMS sync) -------------------------- */
/* Real testimonial content has not been supplied. Rating and review count are official;
   individual review cards are intentionally omitted until a verified Google Reviews
   integration or CMS feed is connected. Do not populate with invented names or quotes. */
const REVIEWS_PENDING_INTEGRATION = true;
