// ─────────────────────────────────────────────────────────────
//  GET Media Productions: all site content lives in this file.
//  Edit text, add projects, or swap videos here. No component
//  code needs to change.
//
//  Video IDs: the part after "watch?v=" in a YouTube URL.
//  e.g. https://www.youtube.com/watch?v=rsrkAN43WSU → 'rsrkAN43WSU'
//  Vimeo also works: set vimeo: '123456789' instead of youtube.
// ─────────────────────────────────────────────────────────────

export const site = {
  name: 'GET Media Productions',
  email: 'getmediaproductions@gmail.com',
  location: 'Kent, Ohio',
  region: 'Northeast Ohio',

  // Paste a Formspree form endpoint here (free at formspree.io) so the
  // contact form submits straight to your inbox. While it's empty, the
  // form opens the visitor's email app with everything pre-filled.
  formEndpoint: '',

  // Optional: a Calendly (or similar) link. When set, a "Book a call"
  // button appears beside the contact form.
  bookingUrl: '',

  socials: {
    instagram: '', // e.g. 'https://instagram.com/getmediaproductions'
    facebook: '',
    linkedin: '',
    youtube: '',
  },
}

export const hero = {
  backgroundYoutube: 'AUWTdXhbiaw', // silent looping background
  reelYoutube: 'rsrkAN43WSU',       // opens in the "Watch the reel" player
  eyebrow: 'Video & Photo Production · Northeast Ohio',
  headlineTop: 'Your Story',
  headlineAccent: 'Told like',
  headlineBottom: 'it matters.',
  sub: 'Cinema-grade brand films, ad creative, and monthly content for businesses that are ready to be seen. One team from concept to final cut.',
}

export const clients = [
  { name: 'DuraSilk', logo: 'images/clients/durasilk.png', tone: 'dark' },
  { name: 'Equilibrium Pilates', logo: 'images/clients/eq-pilates.png', tone: 'dark' },
  { name: 'New Berlin Brewing Company', logo: 'images/clients/new-berlin.png', tone: 'dark' },
  { name: 'Raptor Hallow Sanctuary', logo: 'images/clients/raptor-hallow.png', tone: 'light' },
  // Text-only until you add logo files:
  { name: 'Greater Cleveland Sports Commission' },
  { name: 'Petit Auto Wash' },
]

// Categories drive the filter tabs on the Work section.
export const workCategories = ['All', 'Brands', 'Events & Sports', 'Weddings', 'Films']

export const work = [
  {
    title: 'DuraSilk: 2Faced Collection',
    client: 'DuraSilk',
    category: 'Brands',
    tags: ['Product Launch', 'Ad Creative'],
    youtube: '',
    image: '',
    caseStudy: true,
  },
  {
    title: 'Equilibrium Pilates',
    client: 'Equilibrium Pilates',
    category: 'Brands',
    tags: ['Brand Video'],
    youtube: '',
    image: '',
  },
  {
    title: 'New Berlin Brewing',
    client: 'New Berlin Brewing Company',
    category: 'Brands',
    tags: ['Brand Video'],
    youtube: '',
    image: '',
  },
  {
    title: 'Petit Auto Wash',
    client: 'Petit Auto Wash',
    category: 'Brands',
    tags: ['Commercial'],
    youtube: '',
    image: '',
  },
  {
    title: 'Greater Cleveland Sports Commission',
    client: 'GCSC',
    category: 'Events & Sports',
    tags: ['Event Coverage'],
    youtube: '',
    image: '',
  },
  {
    title: 'Jenna & James',
    client: 'Engagement',
    category: 'Weddings',
    tags: ['Engagement Photo'],
    youtube: '',
    image: 'images/work/jenna-james.jpg',
  },
  {
    title: 'Errol & Kennedy',
    client: 'Engagement',
    category: 'Weddings',
    tags: ['Engagement Photo'],
    youtube: '',
    image: 'images/work/errol-kennedy.jpg',
  },
  {
    title: 'Message Failed',
    client: 'Original Short Film',
    category: 'Films',
    tags: ['Short Film'],
    youtube: '',
    image: '',
  },
]

export const caseStudy = {
  client: 'DuraSilk',
  tagline: 'Luxury performance salon wear for professional stylists, Kent, Ohio.',
  brief:
    "DuraSilk Ltd is an Ohio brand making salon wear (capes, aprons, robes, and professional tools) for working stylists. Founded in 2007, they've built a reputation for durability, style, and innovation in professional haircare. They came to GET Media needing cinematic launch content and ad creative that matched the premium feel of the brand.",
  projects: [
    {
      number: '01',
      title: '2Faced Collection Launch',
      youtube: '',
      stats: [
        ['Deliverables', '1 hero launch video + 10 short-form ads'],
        ['Platforms', 'Instagram · Website · Facebook Ads'],
        ['Shoot', '2 days · Sony A7IV + Canon C70'],
      ],
      story:
        'We concepted and produced launch content for a new product line aimed at professional stylists. Two shoot days yielded a hero film and ten short-form ads, each built for where it would run: scroll-stopping for social, conversion-focused for paid.',
    },
    {
      number: '02',
      title: 'Moulin Rouge Collection',
      youtube: '',
      stats: [
        ['Deliverables', '1 hero website film + short-form ads'],
        ['Platforms', 'Website · Facebook Ads'],
        ['Shoot', '1 day · Canon C70'],
      ],
      story:
        "A hero film to anchor DuraSilk's website, plus Facebook ad creative, all shot in a single day. The content communicates the collection's aesthetic and drives traffic straight to the product pages.",
    },
  ],
}

export const services = [
  {
    name: 'Brand Story Reel',
    copy: 'A cinematic film that shows who you are and why it matters, built for your homepage, socials, and pitch decks. We handle concept, shoot, and edit.',
  },
  {
    name: 'Commercial & Ad Creative',
    copy: 'Product and campaign content cut for where it has to perform: hero spots, short-form ads, and vertical edits from the same shoot.',
  },
  {
    name: 'Event & Sports Coverage',
    copy: 'Full or half-day coverage with recap reels, highlights, and stills, all from one crew in one shoot.',
  },
  {
    name: 'Aerial & Drone',
    copy: 'Licensed drone work for properties, venues, events, and job sites. The establishing shot that makes everything else look bigger.',
  },
  {
    name: 'Testimonial Video',
    copy: 'Structured client stories that build trust and do the selling for you. Shot and edited to feel real, not corporate.',
  },
  {
    name: 'Weddings & Engagements',
    copy: 'Cinematic films and photography that capture what the day felt like, not just what it looked like.',
  },
]

export const retainer = {
  eyebrow: 'For businesses that post every week',
  title: 'Monthly Content Program',
  copy:
    "One planned shoot day turns into a month of polished video. We batch-produce your content, cut it for every platform, and deliver on a calendar, so you're never scrambling for something to post.",
  points: [
    'One batched shoot day per month',
    'Hero edit, short cutdowns, and vertical clips',
    'Content calendar planned with you',
    'Same crew and visual style every month',
  ],
}

export const process = [
  { step: '01', title: 'Discovery Call', copy: 'We talk goals, audience, and where the content will live. No pitch decks, just a conversation.' },
  { step: '02', title: 'Creative Plan', copy: 'Concept, script, shot list, and schedule. You know exactly what we are making before a camera rolls.' },
  { step: '03', title: 'Production', copy: 'Our crew shows up with cinema cameras, lighting, audio, and drone. We keep it efficient and painless for your team.' },
  { step: '04', title: 'Delivery', copy: 'Edited, color-graded, and cut for every platform. Most projects land in 2–4 weeks.' },
]

export const reasons = [
  {
    title: "You work with us, not a crew you've never met",
    copy: "We don't outsource shoots or hand your project off. From the first call to final delivery, we're your team.",
  },
  {
    title: 'Cinema-grade production. Regional pricing.',
    copy: 'Professional gear, cinematic technique, and polished editing, without big-city agency rates.',
  },
  {
    title: 'Video and photo. One team.',
    copy: 'Skip hiring a video crew and a separate photographer. One cohesive shoot means the same vision and a consistent style.',
  },
  {
    title: "We think about what it's for",
    copy: "Every project starts with your goals. We don't just make something that looks good; we make content that does its job.",
  },
]

export const faqs = [
  {
    q: 'What services does GET Media offer?',
    a: 'Brand videos, commercial and ad content, event and sports coverage, aerial drone footage, testimonial videos, wedding and engagement films, and documentary-style content.',
  },
  {
    q: 'Where are you based and where do you work?',
    a: "We're based in Kent, Ohio and work throughout Northeast Ohio, including Akron, Cleveland, and the surrounding areas. We travel for the right project.",
  },
  {
    q: 'How much does a project cost?',
    a: "Every project is scoped to what you actually need, so we don't publish one-size-fits-all pricing. Tell us about your project and we'll send a clear quote, usually within two business days.",
  },
  {
    q: "What's your turnaround time?",
    a: "Most commercial and brand projects are delivered in 2–4 weeks depending on scope. We'll set the timeline before we start.",
  },
  {
    q: 'Do you work with small businesses?',
    a: "Absolutely. Some of our best work has been with local businesses who just needed someone to finally show the world what they're doing.",
  },
  {
    q: 'Can you help with creative direction?',
    a: "Yes. If you come to us with a goal and no idea how to get there, we handle scripting, shot planning, and concept development as part of the process.",
  },
]

export const projectTypes = [
  'Brand Story Reel',
  'Commercial / Ad Creative',
  'Monthly Content Program',
  'Event or Sports Coverage',
  'Aerial / Drone',
  'Wedding or Engagement',
  'Something else',
]

export const budgets = ['Under $1,000', '$1,000 – $2,500', '$2,500 – $5,000', '$5,000+', 'Not sure yet']
