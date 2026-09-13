import manifest from './project-images.json';

export type Language = 'en' | 'sq';
export type Localized = Record<Language, string>;
export type ProjectCategory = 'residential' | 'hospitality' | 'mixed';

export interface ProjectImage {
  src: string;
  width: number;
  height: number;
}

export interface Project {
  slug: string;
  name: Localized;
  location: Localized;
  category: ProjectCategory;
  year?: string;
  description: Localized;
  /** index into `images` used for the card / hero */
  coverIndex: number;
  images: ProjectImage[];
}

const images = manifest as Record<string, ProjectImage[]>;

/**
 * One entry per "folder" of work. To add a project: drop the photos in a
 * folder, register it in scripts/optimize-images.mjs, run the script, then
 * add an entry here.
 */
export const projects: Project[] = [
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
    images: images['luzern-penthouse'] ?? [],
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
    images: images['coffee-house-zenn'] ?? [],
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
    images: images['banesa'] ?? [],
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
    images: images['other-works'] ?? [],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function coverOf(project: Project): ProjectImage | undefined {
  return project.images[project.coverIndex] ?? project.images[0];
}
