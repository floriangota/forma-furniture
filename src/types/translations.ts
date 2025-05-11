export interface AboutTranslations {
  title: string;
  description: string;
  mission: string;
  missionText: string;
  vision: string;
  visionText: string;
  values: string;
  valuesList: string[];
}

export interface ContactTranslations {
  title: string;
  description: string;
  contactInfo: string;
  address: string;
  phone: string;
  email: string;
  businessHours: string;
  weekdays: string;
  sunday: string;
  closed: string;
}

export interface GalleryTranslations {
  title: string;
  description: string;
}

export interface ServicesTranslations {
  title: string;
  description: string;
  customFurniture: string;
  customFurnitureDesc: string;
  interiorDesign: string;
  interiorDesignDesc: string;
  installation: string;
  installationDesc: string;
  maintenance: string;
  maintenanceDesc: string;
}

export interface HomeTranslations {
  title: string;
  description: string;
  viewCollection: string;
  contactUs: string;
}

export interface FooterTranslations {
  about: string;
  aboutText: string;
  contact: string;
  address: string;
  addressLine1: string;
  addressLine2: string;
  phone: string;
  email: string;
  hours: string;
  weekdays: string;
  saturday: string;
  sunday: string;
  rights: string;
}

export interface NavigationTranslations {
  home: string;
  gallery: string;
  services: string;
  about: string;
  contact: string;
}

export interface Translations {
  about: AboutTranslations;
  contact: ContactTranslations;
  gallery: GalleryTranslations;
  services: ServicesTranslations;
  home: HomeTranslations;
  footer: FooterTranslations;
  navigation: NavigationTranslations;
}

export type Language = 'en' | 'sq'; 