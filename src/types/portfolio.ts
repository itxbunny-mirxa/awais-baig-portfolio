export interface PersonalInfo {
  name: string;
  role: string;
  professionalIdentity: string;
  experienceYears: string;
  experienceBadge: string;
  headline: string;
  subheadline: string;
  primaryCtaText: string;
  bioIntro: string;
  bioFull: string[];
  profilePhoto: {
    imagePath: string | null; // e.g., "/images/awais-baig.jpg"
    placeholderInitials: string;
    altText: string;
    isSupplied: boolean;
  };
  location: {
    city: string;
    country: string;
    targetMarkets: string[];
    timezone: string;
    workingHoursUK: string;
  };
  availability: {
    status: boolean;
    label: string;
    note: string;
  };
  social: {
    username: string;
    followersCount: string;
    followingCount: string;
    followersLabel: string;
    followingLabel: string;
    organization: string;
    organizationRole: string;
    education: {
      institution: string;
      degree: string;
      highlight: string;
    }[];
    links: {
      whatsapp: string;
      whatsappNumberDisplay: string;
      whatsappPlaceholderNote: string;
      email: string;
      linkedin: string;
      facebook: string;
      instagram: string; // Configurable: User to supply handle
      snapchat: string;  // Configurable: User to supply handle
    };
  };
}

export type ToolStatus = "Confirmed" | "Familiarity to confirm" | "Hidden";

export interface ToolItem {
  name: string;
  category: "Market Research & Analytics" | "Store Operations & Listing" | "Fulfillment & Automation" | "Design & Data Handling";
  status: ToolStatus;
  description: string;
  operationalRole: string;
}

export interface ExperienceMilestone {
  id: string;
  period: string;
  roleTitle: string;
  subtitle: string;
  description: string;
  focusArea: string;
  highlights: string[];
}

export interface ServiceItem {
  id: string;
  title: string;
  shortDescription: string;
  category: "operations" | "listing" | "seo" | "sourcing" | "advanced";
  iconName: string;
  features: string[];
  fullDeliverables: string[];
  clientBenefit: string;
  turnaroundTime: string;
  toolsUsed: string[];
}

export interface DemonstrationProject {
  id: string;
  projectNumber: string;
  title: string;
  subtitle: string;
  category: "Listing Optimization" | "Product Research" | "Store Management" | "eBay SEO" | "Dropshipping";
  visualType: "listing-optimization" | "product-research" | "store-management" | "ebay-seo" | "dropshipping";
  demonstrationLabel: string;
  overview: string;
  keyTakeaway: string;
  toolsUsed: string[];
}

export interface ClientProjectPlaceholder {
  id: string;
  projectTitle: string;
  category: "Store Management" | "Product Research" | "Listing Optimization" | "eBay SEO" | "Dropshipping";
  marketplace: string;
  statusBadge: string;
  clientIndustry: string;
  projectDescription: string;
  workCompleted: string[];
  verifiedOutcomes: string[];
  coverImage: string | null;
  additionalScreenshots: string[];
  clientTestimonialPlaceholder: {
    note: string;
    status: "Awaiting Client Consent" | "Verified";
  };
}

export interface SkillCategory {
  categoryName: string;
  description: string;
  skills: {
    name: string;
    level: "Advanced" | "Proficient" | "Specialized";
    description: string;
    tags: string[];
  }[];
}

export interface ValueProposition {
  title: string;
  description: string;
  iconName: string;
  benefit: string;
}

export interface ProcessStep {
  stepNumber: string;
  title: string;
  subtitle: string;
  description: string;
  keyActivities: string[];
  deliverable: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface NavRoute {
  path: string;
  label: string;
  description: string;
  badge?: string;
}

