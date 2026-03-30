export type ServiceHighlight = {
  kicker: string;
  title: string;
  description: string;
  points: string[];
  imageSrc: string;
  imageAlt: string;
};

export type ShowcaseBuild = {
  category: string;
  name: string;
  description: string;
  timeline: string;
  finish: string;
  glowClass: string;
  imageSrc: string;
  imageAlt: string;
};

export type BeforeAfterCase = {
  vehicle: string;
  workType: string;
  before: string;
  after: string;
  highlight: string;
  imageSrc: string;
  imageAlt: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type GalleryImage = {
  label: string;
  imageSrc: string;
  imageAlt: string;
};

export const shopTheme = {
  imageSrc: '/Images/mcclouds-brand_after-logo.png',
  imageAlt: "McCloud's Collision and Customs illustrated shop logo"
} as const;

export const stats = [
  { label: 'Estimate replies', value: '24 hrs' },
  { label: 'Completed jobs', value: '140+' },
  { label: 'Repeat customers', value: '92%' }
] as const;

export const processSteps = [
  {
    title: 'We look it over first',
    description: 'Every job starts with a real walkaround so we can see the damage, talk through the finish, and give you a straight answer on what it needs.'
  },
  {
    title: 'Bodywork, parts, and paint get lined up',
    description: 'Once it is in the schedule, we handle the repair order, parts, prep, and paint plan so the job keeps moving without guesswork.'
  },
  {
    title: 'Final check before pickup',
    description: 'Before it leaves, we go back over the fit, finish, and details so it is ready to hand back the right way.'
  }
] as const;

export const serviceHighlights: ServiceHighlight[] = [
  {
    kicker: 'Collision repair',
    title: 'Collision repair that puts it back together right',
    description: 'From bent front clips to side-hit damage, we handle the repair work, panel fit, and paint match without making the job feel like a production line.',
    points: ['Insurance claims and estimate support', 'Panel repair, replacement, and fitment', 'Paint match, blend work, and cleanup'],
    imageSrc: '/Images/pickup-red-white_after-rear-side.png',
    imageAlt: 'Custom painted McClouds pickup truck viewed from the rear side'
  },
  {
    kicker: 'Paint and finish',
    title: 'Paint work from spot repair to full resprays',
    description: 'Need a repair blended in, a bike repainted, or a full custom color laid down? That is the kind of work this shop is known for.',
    points: ['Color match and blend repair', 'Full repaints and custom color', 'Graphics, polishing, and final detail'],
    imageSrc: '/Images/harley-white-graphics_after-side.png',
    imageAlt: 'Blue touring motorcycle with custom white graphics in a paint booth'
  },
  {
    kicker: 'Special fabrication',
    title: 'Custom pieces, restoration, and oddball work',
    description: 'Old trucks, bike parts, fiberglass pieces, rust repair, and one-off custom ideas all get the same attention as the collision side of the shop.',
    points: ['Rust repair and restoration work', 'Fiberglass and body mods', 'Sandblasting and specialty add-ons'],
    imageSrc: '/Images/harley-tank-blue-flames_after.png',
    imageAlt: 'Harley-Davidson fuel tank with blue flame-style custom paint'
  }
];

export const showcaseBuilds: ShowcaseBuild[] = [
  {
    category: 'Collision repair',
    name: 'Jeep brought back clean and straight',
    description: 'The goal here was simple: make the body lines read right again, get the stance back, and leave it looking finished instead of freshly repaired.',
    timeline: 'Estimate to handoff',
    finish: 'Clean factory-style fit',
    glowClass: 'bg-cyan-400/20',
    imageSrc: '/Images/jeep-orange_after-front-side.png',
    imageAlt: 'Orange custom Jeep Wrangler parked outdoors'
  },
  {
    category: 'Custom paint',
    name: 'Bagger paint with a stronger shop-built look',
    description: 'This one is all about color and presence. The bodywork was cleaned up, the paint was laid slick, and the bike left with a lot more attitude.',
    timeline: 'Prep, paint, and cut',
    finish: 'Deep gloss finish',
    glowClass: 'bg-orange-400/20',
    imageSrc: '/Images/harley-green-flames_after-side.png',
    imageAlt: 'Green and black Harley-Davidson motorcycle with custom flames'
  },
  {
    category: 'Custom bodywork',
    name: 'Truck bodywork with show-style touches',
    description: 'Not every job is about damage. Some are about making custom parts fit better, look cleaner, and feel like they belonged there from the start.',
    timeline: 'Measured mockup and finish',
    finish: 'Custom show finish',
    glowClass: 'bg-fuchsia-400/20',
    imageSrc: '/Images/pickup-white-doors_after-front.png',
    imageAlt: 'White custom Chevrolet truck with vertical doors open'
  }
];

export const heroGallery = [
  {
    label: 'Brand Jeep wrap and finish',
    imageSrc: '/Images/jeep-rubicon-wrap_after-front-side.png',
    imageAlt: 'Branded Jeep Rubicon parked outside near a building and American flag'
  },
  {
    label: 'Signature bagger build',
    imageSrc: '/Images/bagger-green_after-side.png',
    imageAlt: 'White bagger motorcycle with green graphics parked in front of the shop'
  },
  {
    label: 'Candy green paint work',
    imageSrc: '/Images/harley-green_after-front-side.png',
    imageAlt: 'Bright green Harley-Davidson motorcycle inside the shop'
  },
  {
    label: 'Airbrushed tank detail',
    imageSrc: '/Images/harley-tank-flames_after.png',
    imageAlt: 'Harley-Davidson fuel tank with orange flame custom paint'
  }
] as const satisfies readonly GalleryImage[];

export const bookingServices = [
  'Collision estimate',
  'Insurance repair consultation',
  'Paint and refinish consultation',
  'Custom bodywork consultation',
  'Restoration or fabrication consultation'
] as const;

export const preferredSlots = [
  '09:00 AM',
  '11:30 AM',
  '02:00 PM',
  '04:30 PM'
] as const;

export const beforeAfterCases: BeforeAfterCase[] = [
  {
    vehicle: 'Jeep Wrangler',
    workType: 'Respray',
    before: 'When it came into the shop, it had a white factory finish and the owner wanted to paint it Barbie Pink.',
    after: 'When the Jeep left the shop, it had a fully refinished Barbie Pink paint job with a smooth, high-gloss finish that completely transformed its look.',
    highlight: 'Repair and paint match',
    imageSrc: '/Images/jeep-pink_after-side.png',
    imageAlt: 'Pink Jeep Wrangler in the shop after custom paint work'
  },
  {
    vehicle: 'Harley-Davidson Touring Bike',
    workType: 'Custom paint and graphics',
    before: 'The paint had gone flat and the whole bike felt dated, even though the shape was still there.',
    after: 'Fresh color and new graphics gave it the kind of road presence the bike should have had in the first place.',
    highlight: 'Bike paint package',
    imageSrc: '/Images/harley-checker_after-front-side.png',
    imageAlt: 'Blue Harley-Davidson touring bike with checker graphics parked outside the shop'
  },
  {
    vehicle: 'Harley Gas Tank',
    workType: 'Custom Paint Job',
    before: 'The tank came in with a plain, worn finish and no custom detailing.',
    after: 'When the tank left the shop, it featured a deep black base with hand-painted old-school flames, finished with a high-gloss clear coat for a classic custom look.',
    highlight: 'Restoration work',
    imageSrc: '/Images/harley-saddlebags-flames_after.png',
    imageAlt: 'Pair of custom motorcycle saddlebags with orange and black flame graphics'
  }
];

export const faqItems: FaqItem[] = [
  {
    question: 'What kind of vehicles do you work on?',
    answer: 'Mostly trucks, cars, and bikes, plus the occasional custom project that does not fit neatly in a box.'
  },
  {
    question: 'Do you handle insurance work?',
    answer: 'Yes. If the job is going through insurance, the shop can work through that side of it with you.'
  },
  {
    question: 'Can I book paint or fabrication work even if it is not collision related?',
    answer: 'Yes. Paint, graphics, fabrication, restoration, fiberglass work, and similar custom jobs can all be booked without collision damage being involved.'
  },
  {
    question: 'How should I contact the shop first?',
    answer: 'Call if you want the fastest answer. If email is easier, send photos and a short note about what you need done.'
  }
];
