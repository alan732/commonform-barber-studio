export interface ServiceItem {
  id: string;
  number: string;
  slug: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  priceAud: number;
  priceLabel: string;
  duration: string;
  image: string;
  imageAlt: string;
  details: string[];
}

export interface BarberItem {
  id: string;
  name: string;
  specialty: string;
  preferredStyle: string;
  bio: string;
  image: string;
  imageAlt: string;
}

export type LookbookCategory =
  | "ALL STYLES"
  | "SKIN FADES"
  | "TEXTURED CUTS"
  | "CLASSIC"
  | "LONG HAIR"
  | "BEARD STYLING";

export interface LookbookEntry {
  id: string;
  title: string;
  category: Exclude<LookbookCategory, "ALL STYLES">;
  description: string;
  image: string;
  imageAlt: string;
  orientation: "portrait" | "landscape";
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface FaqEntry {
  id: string;
  question: string;
  answer: string;
}

export const NAV_ITEMS = [
  { label: "HOME", href: "/" },
  { label: "SERVICES", href: "/services" },
  { label: "THE STUDIO", href: "/studio" },
  { label: "THE TEAM", href: "/team" },
  { label: "LOOKBOOK", href: "/lookbook" },
] as const;

export const CONCEPT_DISCLOSURE = {
  short:
    "COMMONFORM Barber Studio is a fictional brand created by Alan Dsouza as a digital portfolio concept.",
  full: "COMMONFORM Barber Studio is a fictional portfolio concept designed and developed by Alan Dsouza. It is not an operating Australian business, and all prices, appointment durations, barber profiles, availability, and booking confirmations are simulated for demonstration purposes.",
  credit: "Designed and developed by Alan Dsouza.",
} as const;

export const SERVICES: ServiceItem[] = [
  {
    id: "classic-cut",
    number: "01",
    slug: "the-classic-cut",
    name: "THE CLASSIC CUT",
    shortDescription:
      "A considered haircut tailored to your features, style and everyday routine.",
    fullDescription:
      "A balanced, timeless haircut shaped with scissor-over-comb work and clean clipper graduation. Built to sit naturally and grow out evenly between visits.",
    priceAud: 50,
    priceLabel: "A$50",
    duration: "40 minutes",
    image: "/images/service-classic.jpg",
    imageAlt: "Barber executing a tailored classic haircut with comb and shears",
    details: [
      "Personal style and growth-pattern consultation",
      "Precision scissor and taper work",
      "Relaxing rinse and scalp cleanse",
      "Natural matte finish styling",
    ],
  },
  {
    id: "skin-fade",
    number: "02",
    slug: "the-skin-fade",
    name: "THE SKIN FADE",
    shortDescription:
      "Clean transitions, precise blending and a sharp finish.",
    fullDescription:
      "Seamless zero-to-length graduation tailored to your head shape, paired with structured texture through the top and crisp perimeter detailing.",
    priceAud: 55,
    priceLabel: "A$55",
    duration: "45 minutes",
    image: "/images/editorial-session.jpg",
    imageAlt: "Barber refining a clean skin fade transition in the studio",
    details: [
      "Fade placement and temple contour consultation",
      "Graduated foil-zero blending",
      "Textured top scissor detailing",
      "Clean neckline finish and light clay styling",
    ],
  },
  {
    id: "scissor-cut",
    number: "03",
    slug: "the-scissor-cut",
    name: "THE SCISSOR CUT",
    shortDescription:
      "A more detailed approach to longer styles, shape and texture.",
    fullDescription:
      "Designed for medium to longer hair requiring thoughtful layering, weight removal, and natural movement without harsh clipper lines.",
    priceAud: 60,
    priceLabel: "A$60",
    duration: "50 minutes",
    image: "/images/service-scissor.jpg",
    imageAlt: "Japanese thinning shears resting on a clean studio surface",
    details: [
      "Extended structural length consultation",
      "Section-by-section scissor shaping",
      "Weight balancing and natural movement layering",
      "Sea-salt or cream finish for effortless hold",
    ],
  },
  {
    id: "beard-tidy",
    number: "04",
    slug: "the-beard-tidy",
    name: "THE BEARD TIDY",
    shortDescription:
      "Defined lines, balanced shape and a clean finish.",
    fullDescription:
      "Careful beard shaping and length calibration to frame the jawline, finished with warm-towel preparation and crisp cheek and neck lines.",
    priceAud: 30,
    priceLabel: "A$30",
    duration: "25 minutes",
    image: "/images/service-full.jpg",
    imageAlt: "Barber shaping and detailing a beard with a straight razor",
    details: [
      "Density and jawline proportion check",
      "Even length grading and cheek-line definition",
      "Warm towel prep and razor perimeter tidy",
      "Lightweight conditioning beard oil",
    ],
  },
  {
    id: "full-service",
    number: "05",
    slug: "the-full-service",
    name: "THE FULL SERVICE",
    shortDescription:
      "A tailored haircut paired with a carefully finished beard.",
    fullDescription:
      "Our complete grooming session combining a bespoke haircut or skin fade with full beard shaping, hot-towel comfort, and unhurried finishing.",
    priceAud: 75,
    priceLabel: "A$75",
    duration: "65 minutes",
    image: "/images/hero-barber.jpg",
    imageAlt: "Barber hands working carefully with comb and clippers",
    details: [
      "Full haircut or skin fade tailored to you",
      "Complete beard shaping and razor line work",
      "Warm towel compression and rinse",
      "Considered styling and maintenance advice",
    ],
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: "01",
    title: "ARRIVE",
    description:
      "Take a moment, settle in and tell us what you're looking for.",
  },
  {
    number: "02",
    title: "CONSULT",
    description:
      "Discuss your style, preferences and the details of your cut.",
  },
  {
    number: "03",
    title: "CRAFT",
    description:
      "Our fictional studio concept focuses on careful technique and considered finishing.",
  },
  {
    number: "04",
    title: "LEAVE WELL",
    description:
      "Walk away with a style that feels right for you.",
  },
];

export const TEAM_MEMBERS: BarberItem[] = [
  {
    id: "noah-bennett",
    name: "NOAH BENNETT",
    specialty: "Contemporary Cuts",
    preferredStyle: "Textured Crops & Natural Movement",
    bio: "Conceived as a stylist drawn to understated modern shapes, Noah's fictional profile focuses on lived-in texture, balanced proportions, and haircuts that stay effortless weeks after the appointment.",
    image: "/images/intro-portrait.jpg",
    imageAlt: "Fictional concept portrait representing barber Noah Bennett at work",
  },
  {
    id: "oliver-hayes",
    name: "OLIVER HAYES",
    specialty: "Fades and Precision",
    preferredStyle: "Skin Fades & Sharp Tapers",
    bio: "Oliver's fictional persona represents meticulous clipper control and clean graduation — pairing crisp temple work with tailored tops suited to busy workweeks and weekend ease.",
    image: "/images/editorial-session.jpg",
    imageAlt: "Fictional concept portrait representing barber Oliver Hayes fading hair",
  },
  {
    id: "jack-turner",
    name: "JACK TURNER",
    specialty: "Classic Barbering",
    preferredStyle: "Side Parts, Scissor Cuts & Beards",
    bio: "Jack's fictional profile celebrates traditional scissor-over-comb craft and straight-razor beard care, bringing calm, unhurried attention to classic men's silhouettes.",
    image: "/images/service-classic.jpg",
    imageAlt: "Fictional concept portrait representing barber Jack Turner scissor cutting",
  },
];

export const LOOKBOOK_CATEGORIES: LookbookCategory[] = [
  "ALL STYLES",
  "SKIN FADES",
  "TEXTURED CUTS",
  "CLASSIC",
  "LONG HAIR",
  "BEARD STYLING",
];

export const LOOKBOOK_ENTRIES: LookbookEntry[] = [
  {
    id: "lb-1",
    title: "LOW TAPER SKIN FADE",
    category: "SKIN FADES",
    description:
      "Clean zero-blend graduation with natural length retained through the crown. Reference concept imagery.",
    image: "/images/editorial-session.jpg",
    imageAlt: "Barber refining a low taper skin fade",
    orientation: "portrait",
  },
  {
    id: "lb-2",
    title: "TEXTURED CROP",
    category: "TEXTURED CUTS",
    description:
      "Point-cut texture paired with a neat, low-maintenance taper. Reference concept imagery.",
    image: "/images/hero-barber.jpg",
    imageAlt: "Close-up of clipper-over-comb textured crop work",
    orientation: "landscape",
  },
  {
    id: "lb-3",
    title: "TAILORED CLASSIC PART",
    category: "CLASSIC",
    description:
      "Traditional scissor-over-comb side part with soft, natural edges. Reference concept imagery.",
    image: "/images/service-classic.jpg",
    imageAlt: "Precision scissor work on a classic side-part haircut",
    orientation: "landscape",
  },
  {
    id: "lb-4",
    title: "SCISSOR-CUT LAYERS",
    category: "LONG HAIR",
    description:
      "Balanced internal layering built with thinning and texturising shears. Reference concept imagery.",
    image: "/images/service-scissor.jpg",
    imageAlt: "Japanese texturising shears used for longer layered cuts",
    orientation: "landscape",
  },
  {
    id: "lb-5",
    title: "RAZOR BEARD DETAILING",
    category: "BEARD STYLING",
    description:
      "Defined cheek and neckline geometry balanced with natural beard density. Reference concept imagery.",
    image: "/images/service-full.jpg",
    imageAlt: "Straight-razor beard detailing in warm studio light",
    orientation: "portrait",
  },
  {
    id: "lb-6",
    title: "NEIGHBOURHOOD CHAIR CRAFT",
    category: "CLASSIC",
    description:
      "Calm, considered studio finishing in a modern heritage setting. Reference concept imagery.",
    image: "/images/studio-chairs.jpg",
    imageAlt: "Classic barbershop interior with leather chairs and mirrors",
    orientation: "landscape",
  },
];

export const FAQS: FaqEntry[] = [
  {
    id: "faq-demo",
    question: "Is COMMONFORM Barber Studio a real barbershop?",
    answer:
      "No. COMMONFORM Barber Studio is a fictional Australian brand created by Alan Dsouza as an independent digital design and development portfolio concept.",
  },
  {
    id: "faq-booking",
    question: "Do bookings on this site reserve a real appointment?",
    answer:
      "No. The multi-step booking flow is an interactive frontend demonstration. No availability is real, no data is stored or transmitted, and no real appointment is booked.",
  },
  {
    id: "faq-prices",
    question: "Are the AUD prices and durations real?",
    answer:
      "All prices (from A$30 to A$75) and durations (25 to 65 minutes) are illustrative demonstration figures designed to reflect realistic Australian boutique barbering.",
  },
  {
    id: "faq-barbers",
    question: "Can I choose a barber in the booking demo?",
    answer:
      "Yes. Step 2 lets you select between the three fictional barber profiles — Noah Bennett, Oliver Hayes, and Jack Turner — or choose No Preference.",
  },
  {
    id: "faq-location",
    question: "Where is COMMONFORM located?",
    answer:
      "COMMONFORM is a conceptual Australian brand with no physical storefront, phone number, or street address.",
  },
];
