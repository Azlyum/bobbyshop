export type ServiceHighlight = {
  kicker: string;
  title: string;
  description: string;
  points: string[];
};

export type ShowcaseBuild = {
  category: string;
  name: string;
  description: string;
  timeline: string;
  finish: string;
  glowClass: string;
};

export type BeforeAfterCase = {
  vehicle: string;
  workType: string;
  before: string;
  after: string;
  highlight: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export const stats = [
  { label: 'Average estimate response', value: '24 hrs' },
  { label: 'Collision and custom jobs', value: '140+' },
  { label: 'Local customer return rate', value: '92%' }
] as const;

export const processSteps = [
  {
    title: 'Damage review and repair planning',
    description: 'The shop reviews damage, body condition, and project goals before work is scheduled.'
  },
  {
    title: 'Body, paint, and parts coordination',
    description: 'Repair steps, replacement parts, refinishing, and custom changes are organized before the job moves ahead.'
  },
  {
    title: 'Final inspection and delivery',
    description: 'The vehicle is checked for finish quality, panel consistency, and handoff readiness before pickup.'
  }
] as const;

export const serviceHighlights: ServiceHighlight[] = [
  {
    kicker: 'Collision repair',
    title: 'Panel repair and structural restoration',
    description: 'Front-end damage, side impact work, replacement panels, and alignment-focused repair handled with a finish-first mindset.',
    points: ['Insurance work and repair coordination', 'Panel replacement and structural correction', 'Refinish blending and final cleanup']
  },
  {
    kicker: 'Paint and finish',
    title: 'Paint repair, custom paint, and full body spraying',
    description: 'Color matching, correction, repainting, graphics, and full body spraying are completed to restore confidence in the finish.',
    points: ['Paint repair and factory-match blending', 'Full body spraying and custom paint', 'Graphics, correction, and delivery prep']
  },
  {
    kicker: 'Special fabrication',
    title: 'Custom fabrication and restoration work',
    description: 'Special fabrication, restoration, rust repair, fiberglass fabrication, and detail-first upgrades are handled in-house for trucks, bikes, and cars.',
    points: ['Rust repair and restoration work', 'Fiberglass fabrication and body modifications', 'Stereo applications and sandblasting']
  }
];

export const showcaseBuilds: ShowcaseBuild[] = [
  {
    category: 'Collision repair',
    name: 'Front-end rebuild and paint match',
    description: 'Repair-focused rebuild with corrected panel gaps, bumper replacement, and color-matched refinishing that brought the vehicle back clean.',
    timeline: 'Insurance-friendly scheduling',
    finish: 'OEM-style finish',
    glowClass: 'bg-cyan-400/20'
  },
  {
    category: 'Custom paint',
    name: 'Complete repaint and body refresh',
    description: 'Surface correction, straightened body lines, and a full repaint package designed to make the vehicle look complete again.',
    timeline: 'Shop-managed paint cycle',
    finish: 'High-gloss refinish',
    glowClass: 'bg-orange-400/20'
  },
  {
    category: 'Custom bodywork',
    name: 'Body kit fitment and finish cleanup',
    description: 'Custom exterior components were corrected, aligned, and refinished so the overall look landed tighter and more intentional.',
    timeline: 'Measured install process',
    finish: 'Custom painted finish',
    glowClass: 'bg-fuchsia-400/20'
  }
];

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
    vehicle: 'Chevrolet Silverado',
    workType: 'Collision and paint repair',
    before: 'Front-end damage, uneven panel fit, and broken finish across the bumper and fender.',
    after: 'Straightened structure, corrected gaps, fresh paint match, and a cleaner finished front clip.',
    highlight: 'Insurance repair and paint match'
  },
  {
    vehicle: 'Harley-Davidson Touring Bike',
    workType: 'Custom paint and graphics',
    before: 'Worn panels, faded finish, and dated trim presentation that lacked visual impact.',
    after: 'Fresh body color, custom graphics, and a sharper final finish built for road presence.',
    highlight: 'Bike paint and graphic package'
  },
  {
    vehicle: 'Classic C10 Pickup',
    workType: 'Rust repair and restoration',
    before: 'Surface corrosion, weak lower body sections, and tired paint across key panels.',
    after: 'Rust repair, restored body lines, and a full spray-out that returned the truck to a stronger finish.',
    highlight: 'Restoration and full body spraying'
  }
];

export const faqItems: FaqItem[] = [
  {
    question: 'What kind of vehicles do you work on?',
    answer: 'The shop works on trucks, bikes, cars, and a range of custom projects that need collision repair, refinishing, or fabrication.'
  },
  {
    question: 'Do you handle insurance work?',
    answer: 'Yes. Insurance-related collision work and repair planning are part of the shop’s regular service offering.'
  },
  {
    question: 'Can I book paint or fabrication work even if it is not collision related?',
    answer: 'Yes. Custom paint, graphics, fiberglass fabrication, rust repair, restoration, stereo applications, and fabrication work can all be discussed through the appointment form or by phone.'
  },
  {
    question: 'How should I contact the shop first?',
    answer: 'For the fastest next step, give the shop a call at (931) 319-3933 or send an email with photos and a short description of the work needed.'
  }
];
