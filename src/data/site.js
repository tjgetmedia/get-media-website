// ─────────────────────────────────────────────────────────────
//  GET Media Productions: all site content lives in this file.
//  Edit text, add projects, or swap videos here. No component
//  code needs to change.
//
//  VIDEOS: use the ID from the share link.
//    YouTube  https://youtu.be/rsrkAN43WSU           → { youtube: 'rsrkAN43WSU' }
//    Vimeo    https://vimeo.com/123456789            → { vimeo: '123456789' }
//    Vimeo (unlisted) https://vimeo.com/123456789/ab12cd34ef → { vimeo: '123456789', hash: 'ab12cd34ef' }
// ─────────────────────────────────────────────────────────────

export const site = {
  name: 'GET Media Productions',
  email: 'hello@getmediaproductions.com',
  location: 'Kent, Ohio',
  region: 'Northeast Ohio',

  // Paste a Formspree endpoint (free at formspree.io) so the contact form
  // lands in your inbox. While empty, the form opens the visitor's email app.
  formEndpoint: '',
  bookingUrl: '', // optional Calendly link → adds a "Book a call" button

  socials: {
    instagram: '', // e.g. 'https://instagram.com/getmediaproductions'
    facebook: '',
    linkedin: '',
  },
}

export const home = {
  heroVideo: 'AUWTdXhbiaw', // silent looping background (YouTube)
  reel: { youtube: 'rsrkAN43WSU' },
  tagline: 'Video and Photo Production You Can Count On',
  introTitle: 'Full-Service Production',
  intro:
    "We're a full-service production company based in Kent, Ohio, working with businesses, brands, and individuals across the region. From commercial brand content to wedding films to event coverage, every project is approached with a cinematic eye and a focus on what the audience actually feels watching it.",
  introKicker: 'We bring the gear, the team, and the vision. You bring the story.',
}

// Portfolio categories → each gets its own page at #/portfolio/<slug>
export const categories = [
  {
    slug: 'businesses',
    name: 'Businesses',
    title: 'Businesses & Events',
    sub: 'Brand content and event coverage for businesses that mean it.',
    intro:
      "We partner with businesses and brands to produce content that actually performs, whether that's a brand video that lives on your homepage, event coverage that recaps a moment worth sharing, or testimonial content that does the selling for you.",
  },
  {
    slug: 'weddings',
    name: 'Weddings & Engagements',
    title: 'Weddings & Engagements',
    sub: 'Capturing the moments that matter most.',
    intro:
      'Every wedding is a film waiting to be made. We approach each one with the same cinematic eye we bring to every production, because the moments between the moments are the ones worth keeping.',
  },
  {
    slug: 'films',
    name: 'Films',
    title: 'Films',
    sub: 'Original narrative and documentary work.',
    intro: 'Our own stories, made with the same crew and care we bring to every client.',
  },
]

// ─── Projects ────────────────────────────────────────────────
// Order here = order on the portfolio pages and the "next project" chain.
// Each project gets its own page at #/work/<slug>.
//
//   cover:    thumbnail image for grids (optional; falls back to the first
//             video's thumbnail, then a branded title card)
//   parts:    one block per deliverable/campaign, rendered as
//             "PROJECT 01 / 02…" sections like the Squarespace pages
//   gallery:  photo projects (engagements, etc.)
//   featured: true → shows in "Selected Work" on the home page
export const projects = [
  {
    slug: 'durasilk',
    name: 'DuraSilk',
    category: 'businesses',
    featured: true,
    services: ['Brand Video', 'Product Launch', 'Ad Creative'],
    tagline: 'Luxury performance salon wear for professional stylists, Kent, Ohio.',
    client:
      "DuraSilk Ltd is an Ohio-based brand specializing in high-quality salon wear: capes, aprons, robes, and professional tools designed for salon stylists. Founded in 2007, they've built a reputation for durability, style, and innovation in the professional haircare industry. They came to GET Media needing cinematic product launch content and ad creative that matched the premium feel of their brand.",
    cover: '',
    parts: [
      {
        title: '2Faced Collection Launch',
        subtitle: 'Brand Video · Ad Creative · Product Launch',
        video: { youtube: '' }, // ← "2Faced Hype Video | GET Media Productions"
        details: [
          ['Deliverables', '1 hero launch video, 10 short-form ad videos'],
          ['Platforms', 'Instagram, Website, Facebook Ads'],
          ['Shoot Days', '2 days'],
          ['Cameras', 'Sony A7IV · Canon C70'],
        ],
        story:
          'We worked directly with the DuraSilk team to concept and produce launch content for their 2Faced Collection, a new product line targeting professional salon stylists. Over two shoot days we produced a hero launch video and 10 short-form ad videos built specifically for Instagram, the DuraSilk website, and a Facebook ad campaign. Every deliverable was built with its placement in mind: scroll-stopping for social, conversion-focused for ads.',
      },
      {
        title: 'Moulin Rouge Launch',
        subtitle: 'Hero Video · Ad Creative · Website',
        video: { vimeo: '' }, // ← "Moulin Rouge Hype Trailer | Durasilk"
        details: [
          ['Deliverables', '1 hero website video, short-form Facebook ad videos'],
          ['Platforms', 'Website, Facebook Ads'],
          ['Shoot Days', '1 day'],
          ['Cameras', 'Canon C70'],
        ],
        story:
          "For the Moulin Rouge collection, we produced a hero video built to anchor DuraSilk's website alongside short-form ad creative for Facebook. Shot in a single day on the Canon C70, the content was crafted to communicate the collection's aesthetic and drive traffic directly to the product pages.",
      },
    ],
  },
  {
    slug: 'new-berlin-brewing',
    name: 'New Berlin Brewing Company',
    category: 'businesses',
    featured: true,
    services: ['Brand Video'],
    tagline: '',
    client: '',
    parts: [{ title: 'Brand Film', subtitle: 'Brand Video', video: {}, details: [], story: '' }],
  },
  {
    slug: 'equilibrium-pilates',
    name: 'Equilibrium Pilates',
    category: 'businesses',
    featured: true,
    services: ['Brand Video'],
    tagline: '',
    client: '',
    parts: [{ title: 'Brand Film', subtitle: 'Brand Video', video: {}, details: [], story: '' }],
  },
  {
    slug: 'petit-auto-wash',
    name: 'Petit Auto Wash',
    category: 'businesses',
    services: ['Commercial'],
    tagline: '',
    client: '',
    parts: [{ title: 'Commercial', subtitle: 'Commercial', video: {}, details: [], story: '' }],
  },
  {
    slug: 'greater-cleveland-sports-commission',
    name: 'Greater Cleveland Sports Commission',
    category: 'businesses',
    services: ['Event Coverage'],
    tagline: '',
    client: '',
    parts: [{ title: 'Event Recap', subtitle: 'Event Coverage', video: {}, details: [], story: '' }],
  },
  {
    slug: 'brittney-keith',
    name: 'Brittney & Keith',
    category: 'weddings',
    services: ['Wedding Film'],
    tagline: '',
    parts: [{ title: 'Wedding Film', subtitle: 'Wedding Film', video: {}, details: [], story: '' }],
  },
  {
    slug: 'madison-jamie',
    name: 'Madison & Jamie',
    category: 'weddings',
    services: ['Wedding Film'],
    tagline: '',
    parts: [{ title: 'Wedding Film', subtitle: 'Wedding Film', video: {}, details: [], story: '' }],
  },
  {
    slug: 'jenna-james',
    name: 'Jenna & James',
    category: 'weddings',
    featured: true,
    services: ['Engagement Photography'],
    tagline: '',
    cover: 'images/work/jenna-james.jpg',
    gallery: ['images/work/jenna-james.jpg'],
  },
  {
    slug: 'errol-kennedy',
    name: 'Errol & Kennedy',
    category: 'weddings',
    services: ['Engagement Photography'],
    tagline: '',
    cover: 'images/work/errol-kennedy.jpg',
    gallery: ['images/work/errol-kennedy.jpg'],
  },
  {
    slug: 'message-failed',
    name: 'Message Failed',
    category: 'films',
    services: ['Short Film'],
    tagline: 'An original short film by GET Media Productions.',
    parts: [{ title: 'Message Failed', subtitle: 'Short Film', video: {}, details: [], story: '' }],
  },
]

export const clients = [
  { name: 'DuraSilk', logo: 'images/clients/durasilk.png' },
  { name: 'Equilibrium Pilates', logo: 'images/clients/eq-pilates.png' },
  { name: 'New Berlin Brewing Company', logo: 'images/clients/new-berlin.png' },
  { name: 'Raptor Hallow Sanctuary', logo: 'images/clients/raptor-hallow.png', light: true },
  { name: 'Greater Cleveland Sports Commission' },
  { name: 'Petit Auto Wash' },
]

export const services = [
  { name: 'Brand Video', copy: 'Story-driven commercial content built for your website, socials, and pitch. We handle concept, shoot, and edit.' },
  { name: 'Commercial & Ad Content', copy: 'Product and brand content for ads, campaigns, and social, built around where it needs to perform.' },
  { name: 'Event Coverage', copy: 'Full-day or half-day event videography and photography. Recap reels, highlights, and stills, all in one shoot.' },
  { name: 'Testimonial Video', copy: 'Structured client testimonials that build trust and convert. Shot and edited to feel real, not corporate.' },
  { name: 'Wedding Films', copy: 'Cinematic wedding and engagement films that capture what the day actually felt like, not just what it looked like.' },
  { name: 'Aerial & Drone', copy: 'Drone footage for properties, venues, events, and job sites. The establishing shot that makes everything else look bigger.' },
]

export const retainer = {
  title: 'Monthly Content Program',
  copy:
    "For businesses that need to post every week. One planned shoot day turns into a month of polished video: a hero edit, short cutdowns, and vertical clips, delivered on a calendar so you're never scrambling for content.",
}

export const process = [
  { title: 'Discovery Call', copy: 'We talk goals, audience, and where the content will live.' },
  { title: 'Creative Plan', copy: 'Concept, script, shot list, and schedule, locked before a camera rolls.' },
  { title: 'Production', copy: 'Cinema cameras, lighting, audio, and drone. Efficient and painless for your team.' },
  { title: 'Delivery', copy: 'Edited, color-graded, and cut for every platform. Most projects land in 2–4 weeks.' },
]

export const reasons = [
  { title: "You Work With Us, Not a Crew You've Never Met", copy: "When you hire GET Media, you get us. We don't outsource shoots or hand your project to someone you've never met. From call to final delivery, we're your team." },
  { title: 'Cinema-Grade Production. Regional Pricing.', copy: 'High-end video and photo production (professional gear, cinematic techniques, polished editing) without the inflated rates of big-city agencies.' },
  { title: 'Video and Photo. One Team.', copy: 'Instead of hiring a video crew and a separate photographer, you get both from us in one cohesive shoot. Same vision, same style, better consistency.' },
  { title: "We Think About What It's For.", copy: "Every project starts with a conversation about goals. We don't just make something that looks good; we make content that does what you need it to do." },
]

export const faqs = [
  { q: 'What services does GET Media offer?', a: 'We produce brand videos, commercial content, event coverage, testimonial videos, wedding and engagement films, and documentary-style content for businesses and individuals.' },
  { q: 'Where are you based and where do you work?', a: "We're based in Kent, Ohio and regularly work throughout Northeast Ohio: Akron, Cleveland, and surrounding areas. We also travel for the right project." },
  { q: 'Do you offer custom packages?', a: "Every project is scoped individually. We don't do one-size-fits-all pricing because not every project has the same needs." },
  { q: "What's your turnaround time?", a: "Most commercial and brand projects are delivered within 2–4 weeks depending on scope. We'll set clear timelines before we start." },
  { q: 'Do you work with small businesses?', a: "Absolutely. Some of our best work has been with local businesses who just needed someone to finally show the world what they're doing." },
  { q: 'Can you help with creative direction?', a: 'Yes. If you come to us with just a goal and no idea how to get there, we can help. We handle scripting, shot planning, and concept development as part of the process.' },
]

export const projectTypes = ['Brand Video', 'Commercial / Ads', 'Monthly Content', 'Event Coverage', 'Wedding / Engagement', 'Something else']
export const budgets = ['Under $1,000', '$1,000 – $2,500', '$2,500 – $5,000', '$5,000+', 'Not sure yet']
