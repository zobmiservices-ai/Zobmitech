export interface Company {
  name: string;
  tagline: string;
  founder: string;
  position: string[];
  mission: string;
  vision: string;
  description: string;
}

export interface Branding {
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
  backgroundColor: string;
  fontPrimary: string;
  fontSecondary: string;
  style: string;
}

export interface HeroData {
  headline: string;
  subHeadline: string;
  primaryCTA: string;
  secondaryCTA: string;
}

export interface Service {
  title: string;
  slug: string;
  description: string;
  features: string[];
}

export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  technologies: string[];
}

export interface Seminar {
  title: string;
  audience: string;
  topics: string[];
}

export interface Stat {
  label: string;
  value: string;
}

export interface Achievements {
  stats: Stat[];
}

export interface Testimonial {
  name: string;
  feedback: string;
}

export interface Office {
  city: string;
  state: string;
  country: string;
}

export interface Contact {
  office: Office;
  serviceAreas: string[];
  email: string;
  website: string;
  phone: string;
}

export interface SocialMedia {
  linkedin: string;
  x: string;
  facebook: string;
  instagram: string;
  youtube: string;
  tiktok: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface SEOData {
  title: string;
  description: string;
  keywords: string[];
}

export interface Technical {
  framework: string;
  styling: string;
  cms: string;
  database: string;
  authentication: string;
  analytics: string;
  features: string[];
}

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  publishedAt: string;
  author: string;
  readTime: string;
}

export interface ZobmiData {
  company: Company;
  branding: Branding;
  hero: HeroData;
  services: Service[];
  portfolio: {
    featuredProjects: Project[];
    categories: string[];
  };
  seminars: Seminar[];
  achievements: Achievements;
  blog: {
    categories: string[];
  };
  testimonials: Testimonial[];
  targetAudience: string[];
  contact: Contact;
  socialMedia: SocialMedia;
  faq: FAQItem[];
  seo: SEOData;
  technical: Technical;
}
