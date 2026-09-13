import manifest from './project-images.json';

export type Language = 'en' | 'sq';
export type Localized = Record<Language, string>;
export type ProjectCategory = 'residential' | 'hospitality' | 'commercial' | 'mixed';

export interface ProjectImage {
  src: string;
  width: number;
  height: number;
}

/** A labelled group of photos inside one project (e.g. two locations of the same shop). */
export interface ProjectSection {
  label: Localized;
  images: ProjectImage[];
}

export interface Project {
  slug: string;
  name: Localized;
  /** Empty strings mean "not known yet" and the location line is hidden. */
  location: Localized;
  category: ProjectCategory;
  description?: Localized;
  /** index into `images` used for the card / hero */
  coverIndex: number;
  images: ProjectImage[];
  sections?: ProjectSection[];
}

const images = manifest as Record<string, ProjectImage[]>;
const imgs = (slug: string): ProjectImage[] => images[slug] ?? [];

/**
 * One entry per "folder" of work. To add a project: drop the photos in a
 * folder under IMG_TO_ADD, run `node scripts/optimize-images.mjs`, then add
 * an entry here (the slug is the folder name in kebab-case).
 */
const allProjects: Project[] = [
  {
    slug: 'luzern-penthouse',
    name: { en: 'Penthouse', sq: 'Penthouse' },
    location: { en: 'Luzern, Switzerland', sq: 'Lucern, Zvicër' },
    category: 'residential',
    description: {
      en: 'Complete custom interior for a penthouse in Luzern: wardrobes, kitchen and built-in storage in matte lacquer with natural oak accents.',
      sq: 'Enterier i plotë me porosi për një penthouse në Lucern: garderoba, kuzhinë dhe hapësira të integruara në llak mat me detaje lisi natyral.',
    },
    coverIndex: 7,
    images: imgs('luzern-penthouse'),
  },
  {
    slug: 'coffee-house-zenn',
    name: { en: 'Coffee House Zenn', sq: 'Coffee House Zenn' },
    location: { en: 'Saint-Louis, France', sq: 'Saint-Louis, Francë' },
    category: 'hospitality',
    description: {
      en: 'Furniture and fit-out for a café in Saint-Louis: oak tables, upholstered seating, the service counter and wall panelling.',
      sq: 'Mobilje dhe rregullim i brendshëm për një kafene në Saint-Louis: tavolina lisi, ulëse të tapicuara, banaku i shërbimit dhe panelet e mureve.',
    },
    coverIndex: 6,
    images: imgs('coffee-house-zenn'),
  },
  {
    slug: 'banesa',
    name: { en: 'Apartment', sq: 'Banesa' },
    location: { en: 'Ferizaj, Kosovo', sq: 'Ferizaj, Kosovë' },
    category: 'residential',
    description: {
      en: 'Kitchen, living area and bedroom furniture for a private apartment in Ferizaj, combining white lacquer, travertine surfaces and walnut veneer.',
      sq: 'Kuzhinë, dhomë ndenjeje dhe mobilje dhome gjumi për një banesë private në Ferizaj, duke kombinuar llak të bardhë, sipërfaqe travertine dhe rimeso arre.',
    },
    coverIndex: 15,
    images: imgs('banesa'),
  },
  {
    slug: 'cafe-amour-studio-nest',
    name: { en: 'Cafe Amour / Studio Nest', sq: 'Cafe Amour / Studio Nest' },
    location: { en: 'Lausanne, Switzerland', sq: 'Lozanë, Zvicër' },
    category: 'hospitality',
    description: {
      en: 'Tables, wishbone chairs, the arched oak partitions and the curved counter for a bright café and studio in Lausanne.',
      sq: 'Tavolina, karrige, ndarëset e harkuara prej lisi dhe banaku i lakuar për një kafene dhe studio të ndritshme në Lozanë.',
    },
    coverIndex: 16,
    images: imgs('cafe-amour-studio-nest'),
  },
  {
    slug: 'cano-restaurant',
    name: { en: 'Cano Restaurant', sq: 'Cano Restaurant' },
    location: { en: 'Dietikon, Switzerland', sq: 'Dietikon, Zvicër' },
    category: 'hospitality',
    description: {
      en: 'Complete fit-out of a restaurant in Dietikon: wood-panelled walls, leather banquettes, marble tables and the service counter.',
      sq: 'Rregullim i plotë i një restoranti në Dietikon: mure me panele druri, ulëse lëkure, tavolina mermeri dhe banaku i shërbimit.',
    },
    coverIndex: 1,
    images: imgs('cano-restaurant'),
  },
  {
    slug: 'k-a-penthouse',
    name: { en: 'K.A. Penthouse', sq: 'K.A. Penthouse' },
    location: { en: 'Reinach, Switzerland', sq: 'Reinach, Zvicër' },
    category: 'residential',
    description: {
      en: 'Built-in wardrobes, a floating desk and a children\'s room with open shelving for a penthouse in Reinach.',
      sq: 'Garderoba të integruara, tavolinë pune e varur dhe dhomë fëmijësh me rafte të hapura për një penthouse në Reinach.',
    },
    coverIndex: 4,
    images: imgs('k-a-penthouse'),
  },
  {
    slug: 'b-s-penthouse',
    name: { en: 'B.S. Penthouse', sq: 'B.S. Penthouse' },
    location: { en: 'Oftringen, Switzerland', sq: 'Oftringen, Zvicër' },
    category: 'residential',
    description: {
      en: 'Kitchen with breakfast bar, hallway storage, a lit TV wall and a full wardrobe corridor for a penthouse in Oftringen.',
      sq: 'Kuzhinë me bar, dollapë korridori, mur televizori me ndriçim dhe një korridor garderobash për një penthouse në Oftringen.',
    },
    coverIndex: 0,
    images: imgs('b-s-penthouse'),
  },
  {
    slug: 'edi-residence',
    name: { en: 'Edi Residence', sq: 'Edi Residence' },
    location: { en: 'Aarau, Switzerland', sq: 'Aarau, Zvicër' },
    category: 'residential',
    description: {
      en: 'A family home in Aarau: arched children\'s beds with lit niches, entrance furniture, a TV wall and a laundry room.',
      sq: 'Një shtëpi familjare në Aarau: krevate fëmijësh me harqe dhe nike të ndriçuara, mobilje hyrjeje, mur televizori dhe lavanderi.',
    },
    coverIndex: 2,
    images: imgs('edi-residence'),
  },
  {
    slug: 'slb-group-office',
    name: { en: 'SLB Group Office', sq: 'SLB Group Office' },
    location: { en: 'Montreux, Switzerland', sq: 'Montreux, Zvicër' },
    category: 'commercial',
    description: {
      en: 'Meeting table, executive desk, sideboards and open steel shelving for the SLB Group office in Montreux.',
      sq: 'Tavolinë mbledhjesh, tavolinë drejtori, komoda dhe rafte të hapura çeliku për zyrën e SLB Group në Montreux.',
    },
    coverIndex: 3,
    images: imgs('slb-group-office'),
  },
  {
    slug: 'f-sh-residence',
    name: { en: 'F.SH. Residence', sq: 'F.SH. Residence' },
    location: { en: 'Saint-Louis, France', sq: 'Saint-Louis, Francë' },
    category: 'residential',
    description: {
      en: 'Whole-house joinery in Saint-Louis: window seats with storage, glass-front cabinets, a walnut desk, the TV wall and the kitchen.',
      sq: 'Zdrukthëtari për të gjithë shtëpinë në Saint-Louis: ulëse dritaresh me hapësirë, vitrina, tavolinë arre, muri i televizorit dhe kuzhina.',
    },
    coverIndex: 10,
    images: imgs('f-sh-residence'),
  },
  {
    slug: 'the-la-office',
    name: { en: 'The LA Office', sq: 'The LA Office' },
    location: { en: 'Saint-Louis, France', sq: 'Saint-Louis, Francë' },
    category: 'commercial',
    description: {
      en: 'Reception desk, wall shelving and workstations in dark oak and concrete finish for a small office in Saint-Louis.',
      sq: 'Banak pritjeje, rafte muri dhe vende pune në lis të errët dhe beton për një zyrë të vogël në Saint-Louis.',
    },
    coverIndex: 2,
    images: imgs('the-la-office'),
  },
  {
    slug: 'goldstore',
    name: { en: 'Goldstore', sq: 'Goldstore' },
    location: { en: 'Mulhouse, France', sq: 'Mulhouse, Francë' },
    category: 'commercial',
    description: {
      en: 'A curved black reception desk with an oak top, oak wall panelling and a classic executive desk for Goldstore in Mulhouse.',
      sq: 'Banak pritjeje i lakuar i zi me sipërfaqe lisi, panele muri prej lisi dhe tavolinë klasike drejtori për Goldstore në Mulhouse.',
    },
    coverIndex: 1,
    images: imgs('goldstore'),
  },
  {
    slug: 'm-m-residence',
    name: { en: 'M.M. Residence', sq: 'M.M. Residence' },
    location: { en: 'Prizren, Kosovo', sq: 'Prizren, Kosovë' },
    category: 'residential',
    description: {
      en: 'Kitchen, wardrobes, entrance mirror wall and a sofa-bed niche in soft pink and beige tones for an apartment in Prizren.',
      sq: 'Kuzhinë, garderoba, mur pasqyre në hyrje dhe nike divani në tone rozë të buta dhe bezhë për një banesë në Prizren.',
    },
    coverIndex: 7,
    images: imgs('m-m-residence'),
  },
  {
    slug: 'r-l-residence',
    name: { en: 'R.L. Residence', sq: 'R.L. Residence' },
    location: { en: 'Deçan, Kosovo', sq: 'Deçan, Kosovë' },
    category: 'residential',
    description: {
      en: 'Dark matte kitchen with a marble island, a back-lit display wall and glass wardrobe doors for a home in Deçan.',
      sq: 'Kuzhinë e errët mat me ishull mermeri, mur ekspozimi me ndriçim dhe dyer garderobash prej xhami për një shtëpi në Deçan.',
    },
    coverIndex: 1,
    images: imgs('r-l-residence'),
  },
  {
    slug: 'l-h-residence',
    name: { en: 'L.H. Residence', sq: 'L.H. Residence' },
    location: { en: 'Ferizaj, Kosovo', sq: 'Ferizaj, Kosovë' },
    category: 'residential',
    description: {
      en: 'Dining area, wardrobes, dressing table and a lit kitchen in warm beige for an apartment in Ferizaj.',
      sq: 'Hapësirë ngrënieje, garderoba, tualet dhe kuzhinë me ndriçim në bezhë të ngrohtë për një banesë në Ferizaj.',
    },
    coverIndex: 0,
    images: imgs('l-h-residence'),
  },
  {
    slug: 'a-q-residence',
    name: { en: 'A.Q. Residence', sq: 'A.Q. Residence' },
    location: { en: 'Ferizaj, Kosovo', sq: 'Ferizaj, Kosovë' },
    category: 'residential',
    description: {
      en: 'Kitchen and dining, fitted wardrobes, dressing table and floating oak stairs for a family residence.',
      sq: 'Kuzhinë dhe hapësirë ngrënieje, garderoba, tualet dhe shkallë lisi të varura për një rezidencë familjare.',
    },
    coverIndex: 12,
    images: imgs('a-q-residence'),
  },
  {
    slug: 'kitchen-place',
    name: { en: 'Kitchen Place', sq: 'Kitchen Place' },
    location: { en: 'Ferizaj, Kosovo', sq: 'Ferizaj, Kosovë' },
    category: 'residential',
    description: {
      en: 'A walnut and light-grey kitchen with a wine-storage island and a lit glass pantry wall.',
      sq: 'Kuzhinë në arrë dhe gri të çelët me ishull për verëra dhe mur qelqi me ndriçim.',
    },
    coverIndex: 3,
    images: imgs('kitchen-place'),
  },
  {
    slug: 'd-mobile-store',
    name: { en: 'D-Mobile Store', sq: 'D-Mobile Store' },
    location: { en: 'Ferizaj, Kosovo', sq: 'Ferizaj, Kosovë' },
    category: 'commercial',
    description: {
      en: 'Shop fit-out for D-Mobile: display walls for phone cases, lit oak shelving and the illuminated counters in both stores.',
      sq: 'Rregullim dyqani për D-Mobile: mure ekspozimi për këllëfë telefonash, rafte lisi me ndriçim dhe banakë të ndriçuar në të dy dyqanet.',
    },
    coverIndex: 0,
    images: [...imgs('d-mobile'), ...imgs('d-mobile-store')],
    sections: [
      { label: { en: 'The Village, Ferizaj', sq: 'The Village, Ferizaj' }, images: imgs('d-mobile') },
      { label: { en: 'Ferizaj', sq: 'Ferizaj' }, images: imgs('d-mobile-store') },
    ],
  },
  {
    slug: 'sense-cafe-and-more',
    name: { en: 'Sense Cafe & More', sq: 'Sense Cafe & More' },
    location: { en: 'Ferizaj, Kosovo', sq: 'Ferizaj, Kosovë' },
    category: 'hospitality',
    description: {
      en: 'Curved oak wall panels, planted booths and solid-wood tables for Sense Cafe & More in Ferizaj.',
      sq: 'Panele muri të lakuara prej lisi, ulëse me bimë dhe tavolina druri masiv për Sense Cafe & More në Ferizaj.',
    },
    coverIndex: 5,
    images: imgs('sense-cafe-and-more'),
  },
  {
    slug: 'cherry-lounge-bar',
    name: { en: 'Cherry Lounge Bar', sq: 'Cherry Lounge Bar' },
    location: { en: 'Ferizaj, Kosovo', sq: 'Ferizaj, Kosovë' },
    category: 'hospitality',
    description: {
      en: 'A long velvet-fronted bar with under-lighting for the Cherry Lounge Bar in Ferizaj.',
      sq: 'Një bar i gjatë me fasadë kadifeje dhe ndriçim nga poshtë për Cherry Lounge Bar në Ferizaj.',
    },
    coverIndex: 2,
    images: imgs('cherry-lounge-bar'),
  },
  {
    slug: 'venio-by-4-stinet',
    name: { en: 'Venio by 4 Stinët', sq: 'Venio by 4 Stinët' },
    location: { en: 'Ferizaj, Kosovo', sq: 'Ferizaj, Kosovë' },
    category: 'hospitality',
    description: {
      en: 'Tables, benches, upholstered chairs and planted partitions for the Venio restaurant in Ferizaj.',
      sq: 'Tavolina, stola, karrige të tapicuara dhe ndarëse me bimë për restorantin Venio në Ferizaj.',
    },
    coverIndex: 0,
    images: imgs('venio-by-4-stinet'),
  },
  {
    slug: 'linda-studio',
    name: { en: 'Linda Studio', sq: 'Linda Studio' },
    location: { en: 'Ferizaj, Kosovo', sq: 'Ferizaj, Kosovë' },
    category: 'commercial',
    description: {
      en: 'Travertine reception desk, oak slat walls, lit mirrors and a leather sofa for the Linda beauty studio.',
      sq: 'Banak pritjeje travertine, mure me shirita lisi, pasqyra me ndriçim dhe divan lëkure për studion e bukurisë Linda.',
    },
    coverIndex: 2,
    images: imgs('linda-studio'),
  },
  {
    slug: 'berisha-event',
    name: { en: 'Berisha Event', sq: 'Berisha Event' },
    location: { en: 'Ferizaj, Kosovo', sq: 'Ferizaj, Kosovë' },
    category: 'commercial',
    description: {
      en: 'A long walnut conference table with upholstered chairs and back-lit wall panels for an event space in Ferizaj.',
      sq: 'Tavolinë e gjatë konferencash prej arre me karrige të tapicuara dhe panele muri me ndriçim për një hapësirë eventesh në Ferizaj.',
    },
    coverIndex: 0,
    images: imgs('berisha-event'),
  },
  {
    slug: 'other-works',
    name: { en: 'Other Works', sq: 'Punë të Tjera' },
    location: { en: 'Kosovo & abroad', sq: 'Kosovë dhe jashtë' },
    category: 'mixed',
    description: {
      en: 'A selection of pieces and interiors we have produced over the years for homes, offices, hotels and restaurants.',
      sq: 'Një përzgjedhje pjesësh dhe enterierësh që kemi prodhuar ndër vite për shtëpi, zyra, hotele dhe restorante.',
    },
    coverIndex: 0,
    images: imgs('other-works'),
  },
];

/** Projects that actually have photos. */
export const projects: Project[] = allProjects.filter((p) => p.images.length > 0);

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function coverOf(project: Project): ProjectImage | undefined {
  return project.images[project.coverIndex] ?? project.images[0];
}
