// Island Lawncare content data
export const SITE_CONFIG = {
  title: 'Island Lawncare - Lawn Maintenance in Cornwall, PEI',
  description: 'Reliable mowing, trimming and full lawn maintenance for homes across Queens County, PEI. Free quotes.',
  phone: '902-978-2081',
  email: 'island-lawncare@outlook.com',
  location: 'Cornwall, PEI',
  county: 'Queens County',
  facebook: 'https://www.facebook.com/IslandLawncare902/',
};

export const SERVICES = [
  {
    n: '01',
    title: 'Mowing',
    text: 'Regular cuts on a schedule that suits your lawn, with clean stripes.',
  },
  {
    n: '02',
    title: 'Edging',
    text: 'Sharp, defined lines along walks, driveways and beds.',
  },
  {
    n: '03',
    title: 'Trimming',
    text: 'Hedges, borders and hard-to-reach spots tidied up.',
  },
  {
    n: '04',
    title: 'Weeding',
    text: 'Beds and lawns cleared so everything else can thrive.',
  },
  {
    n: '05',
    title: 'Tilling',
    text: 'Garden and new-lawn prep with soil ready for planting.',
  },
  {
    n: '06',
    title: 'Raking',
    text: 'Thatch and debris removed to let your lawn breathe.',
  },
  {
    n: '07',
    title: 'Leaf Collection',
    text: 'Fall cleanup, bagged and hauled away.',
  },
  {
    n: '08',
    title: 'Lawn Maintenance',
    text: 'Seasonal plans that keep your yard looking its best all year.',
  },
];

export const STEPS = [
  {
    n: '1',
    title: 'Reach out',
    text: 'Call, email or fill in the form with your address and what you need.',
  },
  {
    n: '2',
    title: 'Get a quote',
    text: "We'll review your property and give you a clear, fair price.",
  },
  {
    n: '3',
    title: 'Relax',
    text: 'We show up, do the work right, and keep your lawn looking sharp.',
  },
];

export const GALLERY = [
  'Striped front lawn',
  'Fresh edging',
  'Before / after',
  'Fall leaf cleanup',
  'Garden tilling',
  'Trimmed hedges',
];

export const TOWNS = ['Cornwall', 'Charlottetown', 'Stratford', 'Winsloe', 'North River'];

export const COLORS = {
  forest: '#14261a',
  deepFooter: '#0c1a10',
  green: '#2f6b2a',
  greenHover: '#1d4a1a',
  lime: '#a6d65a',
  cream: '#efe6b8',
  pageBg: '#f6f4ec',
  border: '#dcd8c4',
  inputBorder: '#cfcbb4',
  bodyInk: '#1c2a1a',
  muted: '#4a5a46',
  lightOnDark: '#dfe8d6',
  stripeLight: '#e6efd9',
  stripeDark: '#dbe8ca',
} as const;
