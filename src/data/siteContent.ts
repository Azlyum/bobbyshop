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
  gallery?: GalleryImage[];
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
    vehicle: 'Semi Truck',
    workType: 'Collision and refinish',
    before: 'The semi came in needing visible repair work and cleanup before it could be put back into service looking right again.',
    after: 'After the repair and refinishing work, the truck had a cleaner, more complete look ready to go back on the road.',
    highlight: 'Heavy-duty repair',
    imageSrc: '/Images/beforeAndAfter/organized_photos_aligned/after_work/project_02_semi_truck_after_work_02.jpg',
    imageAlt: 'Semi truck after collision repair and refinish work',
    gallery: [
      {
        label: 'After finished view',
        imageSrc: '/Images/beforeAndAfter/organized_photos_aligned/after_work/project_02_semi_truck_after_work_02.jpg',
        imageAlt: 'Semi truck after repair from the front side'
      },
      {
        label: 'Before damage view',
        imageSrc: '/Images/beforeAndAfter/organized_photos_aligned/before_work/project_02_semi_truck_before_work_01.jpg',
        imageAlt: 'Semi truck before collision repair'
      }
    ]
  },
  {
    vehicle: 'Black Dump Truck',
    workType: 'Repair and refinish',
    before: 'Before paint and reassembly, the truck needed prep and correction work to get the finish back into shape.',
    after: 'The completed truck came back with a much stronger finish and a cleaner work-ready look.',
    highlight: 'Commercial truck work',
    imageSrc: '/Images/beforeAndAfter/organized_photos_aligned/after_work/project_07_black_dump_truck_after_work_01.jpg',
    imageAlt: 'Black dump truck after repair and refinish work',
    gallery: [
      {
        label: 'After finished view',
        imageSrc: '/Images/beforeAndAfter/organized_photos_aligned/after_work/project_07_black_dump_truck_after_work_01.jpg',
        imageAlt: 'Black dump truck after repair'
      },
      {
        label: 'Before rear prep',
        imageSrc: '/Images/beforeAndAfter/organized_photos_aligned/before_work/project_07_black_dump_truck_before_work_01.jpg',
        imageAlt: 'Black dump truck before repair from the rear'
      },
      {
        label: 'Before side prep',
        imageSrc: '/Images/beforeAndAfter/organized_photos_aligned/before_work/project_07_black_dump_truck_before_work_02.jpg',
        imageAlt: 'Black dump truck before repair from the side'
      }
    ]
  },
  {
    vehicle: 'Silver Pickup',
    workType: 'Bodywork and refinish',
    before: 'The truck came in with body damage and rough panels that needed to be straightened before the finish work could even start.',
    after: 'Once the repair and paint work were finished, the body lines cleaned up and the truck left looking complete again.',
    highlight: 'Panel repair',
    imageSrc: '/Images/beforeAndAfter/organized_photos_aligned/after_work/project_16_silver_pickup_bodywork_after_work_01.jpg',
    imageAlt: 'Silver pickup truck after bodywork and paint repair',
    gallery: [
      {
        label: 'After front three-quarter',
        imageSrc: '/Images/beforeAndAfter/organized_photos_aligned/after_work/project_16_silver_pickup_bodywork_after_work_01.jpg',
        imageAlt: 'Silver pickup truck after bodywork seen from the front side'
      },
      {
        label: 'After side profile',
        imageSrc: '/Images/beforeAndAfter/organized_photos_aligned/after_work/project_16_silver_pickup_bodywork_after_work_02.jpg',
        imageAlt: 'Silver pickup truck after bodywork seen from the side'
      },
      {
        label: 'Before front angle',
        imageSrc: '/Images/beforeAndAfter/organized_photos_aligned/before_work/project_16_silver_pickup_bodywork_before_work_01.jpg',
        imageAlt: 'Silver pickup truck before bodywork from the front angle'
      },
      {
        label: 'Before side angle',
        imageSrc: '/Images/beforeAndAfter/organized_photos_aligned/before_work/project_16_silver_pickup_bodywork_before_work_02.jpg',
        imageAlt: 'Silver pickup truck before bodywork from the side angle'
      },
      {
        label: 'Before detail',
        imageSrc: '/Images/beforeAndAfter/organized_photos_aligned/before_work/project_16_silver_pickup_bodywork_before_work_03.jpg',
        imageAlt: 'Silver pickup truck before bodywork with visible repair area'
      },
      {
        label: 'Before door repair',
        imageSrc: '/Images/beforeAndAfter/organized_photos_aligned/before_work/project_16_silver_pickup_bodywork_before_work_04.jpg',
        imageAlt: 'Silver pickup truck door during bodywork before paint'
      }
    ]
  },
  {
    vehicle: 'Orange Motorcycle',
    workType: 'Restoration and paint',
    before: 'Before work started, the bike needed cleanup, correction, and a much stronger finish to bring the whole build back together.',
    after: 'The final result brought the paint and bodywork into line with the rest of the project and gave the bike a sharper custom look.',
    highlight: 'Motorcycle restoration',
    imageSrc: '/Images/beforeAndAfter/organized_photos_aligned/after_work/project_24_orange_motorcycle_restoration_after_work_01.jpg',
    imageAlt: 'Orange motorcycle after restoration and paint work',
    gallery: [
      {
        label: 'After full bike',
        imageSrc: '/Images/beforeAndAfter/organized_photos_aligned/after_work/project_24_orange_motorcycle_restoration_after_work_01.jpg',
        imageAlt: 'Orange motorcycle after restoration seen from the side'
      },
      {
        label: 'After front detail',
        imageSrc: '/Images/beforeAndAfter/organized_photos_aligned/after_work/project_24_orange_motorcycle_restoration_after_work_02.jpg',
        imageAlt: 'Orange motorcycle after restoration with front detail visible'
      },
      {
        label: 'Before initial state',
        imageSrc: '/Images/beforeAndAfter/organized_photos_aligned/before_work/project_24_orange_motorcycle_restoration_before_work_01.jpg',
        imageAlt: 'Orange motorcycle before restoration work from the side'
      },
      {
        label: 'Before front detail',
        imageSrc: '/Images/beforeAndAfter/organized_photos_aligned/before_work/project_24_orange_motorcycle_restoration_before_work_02.jpg',
        imageAlt: 'Orange motorcycle before restoration with front detail visible'
      },
      {
        label: 'Before rear detail',
        imageSrc: '/Images/beforeAndAfter/organized_photos_aligned/before_work/project_24_orange_motorcycle_restoration_before_work_03.jpg',
        imageAlt: 'Orange motorcycle before restoration with rear detail visible'
      }
    ]
  },
  {
    vehicle: 'Red Compact Truck',
    workType: 'Bodywork and paint',
    before: 'The truck came in mid-repair with heavy prep work across the cab, hood, and bed before it was ready for finish paint.',
    after: 'Once the job was finished, the truck came back together with a clean red finish and a much sharper overall presentation.',
    highlight: 'Classic truck rebuild',
    imageSrc: '/Images/beforeAndAfter/organized_photos_aligned/after_work/project_06_red_classic_pickup_after_work_02.jpg',
    imageAlt: 'Red compact classic truck after bodywork and paint',
    gallery: [
      {
        label: 'After shop view',
        imageSrc: '/Images/beforeAndAfter/organized_photos_aligned/after_work/project_06_red_classic_pickup_after_work_02.jpg',
        imageAlt: 'Red compact classic truck after paint from the front side'
      },
      {
        label: 'After finished side',
        imageSrc: '/Images/beforeAndAfter/organized_photos_aligned/after_work/project_06_red_classic_truck_after_work_04.jpg',
        imageAlt: 'Red compact classic truck after paint inside the shop'
      },
      {
        label: 'Before hood prep',
        imageSrc: '/Images/beforeAndAfter/organized_photos_aligned/before_work/project_06_red_classic_truck_before_work_01.jpg',
        imageAlt: 'Red compact classic truck hood during prep before paint'
      },
      {
        label: 'Before cab side',
        imageSrc: '/Images/beforeAndAfter/organized_photos_aligned/before_work/project_06_red_classic_truck_before_work_02.jpg',
        imageAlt: 'Red compact classic truck cab side during bodywork before paint'
      },
      {
        label: 'Before bed repair',
        imageSrc: '/Images/beforeAndAfter/organized_photos_aligned/before_work/project_06_red_classic_truck_before_work_03.jpg',
        imageAlt: 'Red compact classic truck bed during bodywork before paint'
      }
    ]
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
