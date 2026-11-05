import {
  PersonalInfo,
  ToolItem,
  ExperienceMilestone,
  ServiceItem,
  DemonstrationProject,
  ClientProjectPlaceholder,
  SkillCategory,
  ValueProposition,
  ProcessStep,
  FAQItem,
} from "@/types/portfolio";

/**
 * =====================================================================
 * CENTRALIZED PORTFOLIO CONFIGURATION - AWAIS BAIG
 * =====================================================================
 * This single configuration file controls all personal details, contact
 * channels, tool statuses, demonstration assets, and client project slots.
 *
 * Update this file to modify any live text, link, tool status, or image.
 * =====================================================================
 */

export const personalInfo: PersonalInfo = {
  name: "Awais Baig",
  role: "eBay Virtual Assistant & eCommerce Store Management Specialist",
  professionalIdentity: "eBay Virtual Assistant & eCommerce Store Management Specialist",
  experienceYears: "2–3 Years of Experience",
  experienceBadge: "2–3 Years of eBay Virtual Assistance Experience",
  headline: "Your eBay Store, Managed with Precision.",
  subheadline:
    "Helping eCommerce businesses simplify store operations, discover profitable products, and create optimised eBay listings.",
  primaryCtaText: "Let's Discuss Your eBay Store",
  bioIntro:
    "As an experienced eBay Virtual Assistant with 2–3 years of focused eCommerce store management experience, I help UK and international merchants run seamless, compliant, and well-optimised stores. From rigorous Cassini SEO keyword research to daily order processing and inventory synchronization, my priority is keeping your account in top standing.",
  bioFull: [
    "Running a successful eBay storefront requires steady discipline: buyer queries must be handled promptly, tracking numbers must be uploaded before courier cut-offs, inventory must never run out of sync, and product listings must continuously conform to eBay's Cassini search standards.",
    "Rooted in ongoing professional development through the Empowerers eCommerce network and backed by academic education from Bahauddin Zakariya University (BZU) and F.G. Boys High School No. 1 in Multan Cantt, I approach store administration with structure, integrity, and proactive communication.",
    "Whether your business requires day-to-day order management, high-margin product research, complete listing revamps, dropshipping support, or private label store setup, I provide dependable assistance aligned with UK business hours."
  ],
  profilePhoto: {
    // When Awais supplies his photograph, place it in public/images/awais-baig.jpg
    // and set isSupplied to true.
    imagePath: "/images/awais-baig.jpg",
    placeholderInitials: "AB",
    altText: "Awais Baig — eBay Virtual Assistant & eCommerce Store Management Specialist",
    isSupplied: false, // Set to true once the image file is dropped into public/images/
  },
  location: {
    city: "Multan",
    country: "Pakistan",
    targetMarkets: [
      "United Kingdom (eBay.co.uk)",
      "International (eBay.com & Global)",
      "Small & Medium eCommerce Brands",
      "Online Retail Entrepreneurs"
    ],
    timezone: "PKT (GMT+5)",
    workingHoursUK: "Full active overlap with UK business hours (GMT/BST)"
  },
  availability: {
    status: true,
    label: "Available for Retainers & Projects",
    note: "Open to new UK store management contracts & dedicated hours"
  },
  social: {
    username: "awaisbaig01",
    followersCount: "1.3K",
    followingCount: "308",
    followersLabel: "Community Network Followers",
    followingLabel: "Professional Network Following",
    organization: "Empowerers",
    organizationRole: "eCommerce Community Member & VA Specialist",
    education: [
      {
        institution: "BZU — Bahauddin Zakariya University",
        degree: "Higher Education",
        highlight: "Multan, Pakistan"
      },
      {
        institution: "F.G. Boys High School No. 1",
        degree: "Secondary Education",
        highlight: "Multan Cantt, Pakistan"
      }
    ],
    links: {
      email: "mailto:awaisbaig138@gmail.com",
      whatsapp: "", // Left unlinked until actual verified WhatsApp business number is confirmed
      whatsappNumberDisplay: "Available upon email consultation",
      whatsappPlaceholderNote: "Direct WhatsApp messaging is scheduled following initial email consultation.",
      linkedin: "https://www.linkedin.com/in/awaisbaig01",
      facebook: "https://www.facebook.com/mirzaawais.baig.3194"
    }
  }
};

/**
 * =====================================================================
 * TOOLS & PLATFORMS ECOSYSTEM
 * =====================================================================
 * Each tool has a status:
 * - "Confirmed": Actively confirmed by Awais
 * - "Familiarity to confirm": Ready for Awais to review and confirm
 * - "Hidden": Staged but not visible to visitors
 * =====================================================================
 */
export const toolsEcosystemData: ToolItem[] = [
  // Confirmed Tools
  {
    name: "ZIK Analytics",
    category: "Market Research & Analytics",
    status: "Confirmed",
    description: "Industry-standard market analysis software for eBay competitor tracking and product demand validation.",
    operationalRole: "Competitor sales velocity, niche exploration & keyword research"
  },
  {
    name: "Terapeak",
    category: "Market Research & Analytics",
    status: "Confirmed",
    description: "Official eBay Seller Hub research suite providing 90-day to 365-day historical sold listing data.",
    operationalRole: "Historical price elasticity, sell-through rates & fee modeling"
  },
  // Additional Prepared Tools (Familiarity to confirm)
  {
    name: "eBay Seller Hub",
    category: "Store Operations & Listing",
    status: "Familiarity to confirm",
    description: "Central native portal for active listings, order dispatch triage, promotions manager, and performance.",
    operationalRole: "Core storefront administration & account health monitoring"
  },
  {
    name: "Google Sheets",
    category: "Design & Data Handling",
    status: "Familiarity to confirm",
    description: "Cloud-based collaborative spreadsheets for daily order tracking, inventory balancing, and client reporting.",
    operationalRole: "Shared daily activity logs & master inventory SOPs"
  },
  {
    name: "Microsoft Excel",
    category: "Design & Data Handling",
    status: "Familiarity to confirm",
    description: "Advanced spreadsheet modeling with VLOOKUP, bulk CSV data cleaning, and profit margin formulas.",
    operationalRole: "Bulk listing exchange & financial calculations"
  },
  {
    name: "Canva",
    category: "Design & Data Handling",
    status: "Familiarity to confirm",
    description: "Graphic design tool for clean 1600x1600 px white background formatting and size chart infographics.",
    operationalRole: "eBay-compliant gallery image preparation"
  },
  {
    name: "AutoDS",
    category: "Fulfillment & Automation",
    status: "Familiarity to confirm",
    description: "Automation tool for dropshipping product imports, price monitoring, and automated order fulfillment.",
    operationalRole: "Automated supplier price & inventory synchronization"
  },
  {
    name: "DSM Tool",
    category: "Fulfillment & Automation",
    status: "Familiarity to confirm",
    description: "Dropshipping management platform for listing creation, repricing, and order tracking.",
    operationalRole: "Multi-supplier order routing & tracking number management"
  },
  {
    name: "Photopea",
    category: "Design & Data Handling",
    status: "Familiarity to confirm",
    description: "Advanced browser-based photo editor for removing backgrounds and enhancing product contrast.",
    operationalRole: "White background compliance & aspect ratio alignment"
  }
];

export const experienceMilestones: ExperienceMilestone[] = [
  {
    id: "exp-01",
    period: "Year 1 — Foundation",
    roleTitle: "eBay Store Operations & Seller Hub Foundation",
    subtitle: "Core Marketplace Administration & Policy Mastery",
    description:
      "Built a disciplined foundation in eBay Seller Hub workflows, order dispatch triage, buyer inquiry SLAs, and return authorization handling.",
    focusArea: "Store Administration & Customer Support",
    highlights: [
      "Mastery of eBay Seller Hub navigation, order triage, and tracking uploads",
      "Resolution of buyer inquiries, return requests, and Item Not Received (INR) cases",
      "Daily stock reconciliation to prevent out-of-stock cancellation defects"
    ]
  },
  {
    id: "exp-02",
    period: "Year 2 — SEO & Research",
    roleTitle: "Cassini SEO Specialist & Product Sourcing",
    subtitle: "Keyword Engineering & Terapeak Market Validation",
    description:
      "Deepened technical capability in eBay's Cassini search algorithm, 80-character title optimisation, 100% item specifics completion, and data-backed product research.",
    focusArea: "Cassini Algorithm & Market Analytics",
    highlights: [
      "Structured 80-character title blueprints maximizing keyword indexing density",
      "Terapeak market demand analysis, 90-day sell-through validation, and fee modeling",
      "Creation of complex multi-variation listings across apparel and home goods"
    ]
  },
  {
    id: "exp-03",
    period: "Year 3 — Professional Retainers",
    roleTitle: "Dedicated Virtual Assistant for UK & International Sellers",
    subtitle: "Full-Service Store Management & Scaled Client Retainers",
    description:
      "Managing end-to-end store operations on retainers for UK merchants, coordinating Royal Mail/Evri logistics, dropshipping workflows, and private label catalog setups.",
    focusArea: "End-to-End Retainers & Client Growth",
    highlights: [
      "Secure delegation via eBay Multi-User Account Access (MUAA) protocol",
      "Synchronized daily coverage overlapping with UK business hours",
      "Delivering structured daily activity logs, inventory alerts, and performance summaries"
    ]
  }
];

export const servicesData: ServiceItem[] = [
  {
    id: "store-management",
    title: "eBay Store Management",
    category: "operations",
    iconName: "Store",
    shortDescription:
      "Comprehensive day-to-day administrative handling of your eBay storefront to safeguard Top Rated seller health and policy compliance.",
    features: [
      "Daily Seller Hub operational audit",
      "Account health & defect rate monitoring",
      "Prompt customer inquiry resolution",
      "Return and dispute case handling"
    ],
    fullDeliverables: [
      "Daily storefront health reviews and defect prevention",
      "Professional response to buyer messages within agreed UK SLAs",
      "Active dispute & return tracking under official eBay seller rules",
      "Store category structuring and promotional banner updates",
      "End-of-day operational summary spreadsheet"
    ],
    clientBenefit:
      "Freedom from time-consuming store administration while ensuring your seller rating remains in pristine standing.",
    turnaroundTime: "Daily Ongoing Retainer",
    toolsUsed: ["eBay Seller Hub", "Resolution Center", "Google Workspace"]
  },
  {
    id: "product-research",
    title: "Product Research",
    category: "sourcing",
    iconName: "TrendingUp",
    shortDescription:
      "Rigorous, data-backed sourcing using ZIK Analytics and Terapeak to identify high-demand, low-competition items.",
    features: [
      "Sell-through rate validation via Terapeak & ZIK",
      "Competitor price & sales velocity modeling",
      "Accurate net profit margin calculations",
      "Seasonality and trend identification"
    ],
    fullDeliverables: [
      "Comprehensive Terapeak 90-day demand reports",
      "Competitor price benchmarks including eBay fees, ad rates, and postage",
      "Curated product opportunity dossiers with verified supplier links",
      "Weight and dimension analysis for UK courier brackets"
    ],
    clientBenefit:
      "Eliminate expensive guesswork by committing capital only to items with validated sales velocity and protected margins.",
    turnaroundTime: "24–48 Hours per Batch",
    toolsUsed: ["ZIK Analytics", "Terapeak", "Excel / Google Sheets"]
  },
  {
    id: "listing-optimization",
    title: "eBay Listing Optimization",
    category: "listing",
    iconName: "Sparkles",
    shortDescription:
      "Revitalizing stagnant listings to rank higher on eBay Cassini search, capture buyer clicks, and drive conversion rates.",
    features: [
      "Cassini search engine ranking revamp",
      "80-character high-impact title restructuring",
      "100% item specifics completion",
      "Mobile-optimised plain-text descriptions"
    ],
    fullDeliverables: [
      "Audit of existing low-impression catalog listings",
      "Title restructuring following high-intent buyer search formulas",
      "Population of all mandatory, recommended, and additional item specifics",
      "Optimization for eBay facet search filters",
      "Promoted Listings campaign configuration guidance"
    ],
    clientBenefit:
      "Breathe new life into stagnant stock by surfacing your products to buyers actively searching for them.",
    turnaroundTime: "24–48 Hours",
    toolsUsed: ["Terapeak Keyword Tool", "Seller Hub Performance", "Title Builder"]
  },
  {
    id: "listing-creation",
    title: "Product Listing Creation",
    category: "listing",
    iconName: "FileSpreadsheet",
    shortDescription:
      "Professional setup of single and multi-variation listings engineered for maximum conversion and full marketplace compliance.",
    features: [
      "Parent-child variation setups (size, colour, pack)",
      "High-converting benefit-focused copy",
      "Compliant gallery formatting (1600x1600 px)",
      "Precise SKU & custom barcode attribution"
    ],
    fullDeliverables: [
      "Drafting persuasive, policy-compliant listing descriptions",
      "Setup of multi-variation parent-child catalog architectures",
      "Photo preparation on pure white backgrounds",
      "Accurate postage policy & domestic return configuration",
      "Custom SKU assignment for orderly inventory reconciliation"
    ],
    clientBenefit:
      "Flawlessly formatted listings that reduce repetitive buyer queries and maximize purchase confidence.",
    turnaroundTime: "12–24 Hours per Batch",
    toolsUsed: ["Seller Hub Listing Tool", "Canva", "Photopea"]
  },
  {
    id: "order-management",
    title: "Order Management",
    category: "operations",
    iconName: "PackageCheck",
    shortDescription:
      "Swift order processing, courier tracking number uploads, and dedicated post-purchase buyer support.",
    features: [
      "Daily order processing & dispatch validation",
      "Carrier tracking assignment (Royal Mail, Evri)",
      "INR (Item Not Received) case protection",
      "Replacement & exchange coordination"
    ],
    fullDeliverables: [
      "Morning order queue verification and dispatch scheduling",
      "Accurate tracking number assignment before courier cut-offs",
      "Prompt handling of customer shipping questions within SLA",
      "Filing carrier delay tickets to protect seller performance marks",
      "Daily dispatch activity logs"
    ],
    clientBenefit:
      "Maintain a 100% on-time tracking upload rate and protect your store against late shipment defect penalties.",
    turnaroundTime: "Daily Scheduled Shifts",
    toolsUsed: ["eBay Orders Hub", "Shipping Manager", "Courier Portals"]
  },
  {
    id: "inventory-management",
    title: "Inventory Management",
    category: "operations",
    iconName: "Boxes",
    shortDescription:
      "Accurate stock level balancing across active listings to eliminate costly out-of-stock cancellations.",
    features: [
      "Stock monitoring & low-stock warning triggers",
      "Multi-variation quantity balancing",
      "Bulk price & quantity CSV updates",
      "Supplier stock reconciliation"
    ],
    fullDeliverables: [
      "Daily audit of zero-quantity and fast-moving SKUs",
      "Prompt adjustment of active listing quantities",
      "Prevention of stockout defects by hiding or ending unavailable listings",
      "Synchronization with external supplier feeds",
      "Inventory reorder threshold reports"
    ],
    clientBenefit:
      "Zero cancelled orders due to stockouts, safeguarding your Top Rated status and buyer goodwill.",
    turnaroundTime: "Daily Real-time Sync",
    toolsUsed: ["Excel / Google Sheets", "Seller Hub Inventory", "CSV File Exchange"]
  },
  {
    id: "ebay-seo",
    title: "eBay SEO",
    category: "seo",
    iconName: "Search",
    shortDescription:
      "In-depth keyword architecture tailored to the Cassini search algorithm, elevating organic visibility across UK buyer searches.",
    features: [
      "Targeted UK keyword intent discovery",
      "Buyer search frequency & competition analysis",
      "Strategic keyword density in titles & tags",
      "Competitor keyword gap audits"
    ],
    fullDeliverables: [
      "Master keyword list segmented by search volume and commercial intent",
      "Formulaic 80-character title templates prioritizing top organic search terms",
      "Secondary keywords mapped into item specifics and description sections",
      "British English terminology localization (e.g., jumper vs sweater, boot vs trunk)"
    ],
    clientBenefit:
      "Capture high-intent organic search traffic without relying exclusively on expensive promoted ad spend.",
    turnaroundTime: "24 Hours",
    toolsUsed: ["ZIK Analytics", "Terapeak", "eBay Autocomplete"]
  },
  {
    id: "dropshipping-support",
    title: "Dropshipping Support",
    category: "advanced",
    iconName: "Truck",
    shortDescription:
      "End-to-end virtual assistant support for compliant dropshipping operations, supplier order placement, and tracking automation.",
    features: [
      "Supplier order routing & fulfillment",
      "Real-time supplier price & stock tracking",
      "Quick tracking number upload",
      "Buyer return & refund coordination"
    ],
    fullDeliverables: [
      "Automated order placement with verified wholesale / dropship suppliers",
      "Continuous monitoring of supplier inventory levels to prevent out-of-stock orders",
      "Prompt upload of valid tracking numbers to maintain tracking compliance",
      "Handling return logistics and supplier credit claims",
      "Net profit margin tracking per order"
    ],
    clientBenefit:
      "A hands-off fulfillment engine that allows you to scale order volume without drowning in daily manual order placement.",
    turnaroundTime: "Daily Scheduled Shifts",
    toolsUsed: ["Supplier Portals", "Tracking Sync Tools", "Spreadsheet Order Logs"]
  },
  {
    id: "private-label-support",
    title: "Private Label Support",
    category: "advanced",
    iconName: "BadgeCheck",
    shortDescription:
      "Specialized assistance for brand owners launching custom branded products, bespoke packaging, and branded storefronts.",
    features: [
      "Brand asset & packaging coordination",
      "Barcode (UPC/EAN) assignment & GTIN setup",
      "Custom branded eBay Storefront design",
      "Promotions Manager & banner configuration"
    ],
    fullDeliverables: [
      "Setup of custom branded eBay Storefront layouts and category trees",
      "Accurate GTIN/EAN/UPC configuration to satisfy eBay catalog standards",
      "Creation of branded listing templates with clear warranty and care callouts",
      "Configuration of Promoted Listings Standard and Order Discounts",
      "Brand-aligned customer service templates"
    ],
    clientBenefit:
      "Transform standard product listings into an authoritative, recognizable brand that commands higher price points.",
    turnaroundTime: "Custom Project Milestones",
    toolsUsed: ["eBay Storefront Designer", "Canva", "Promotions Manager"]
  }
];

export const demonstrationProjects: DemonstrationProject[] = [
  {
    id: "demo-01-listing-optimization",
    projectNumber: "01",
    title: "eBay Listing Optimization Dashboard",
    subtitle: "Before & After Cassini Title, Attributes & Checklist Simulation",
    category: "Listing Optimization",
    visualType: "listing-optimization",
    demonstrationLabel: "Illustrative Demonstration — Not Live Client Data",
    overview:
      "An illustrative dashboard asset comparing a poorly structured, stagnant listing with a fully optimised, Cassini-compliant listing. Shows the 80-character title formula, keyword hierarchy, item specifics completion, and listing quality checklist.",
    keyTakeaway:
      "Structured title formulas and 100% item specifics completion unlock eBay facet search filters, driving higher impression share without relying solely on ad spend.",
    toolsUsed: ["Terapeak", "eBay Seller Hub", "Title Builder"]
  },
  {
    id: "demo-02-product-research",
    projectNumber: "02",
    title: "Product Research & Profitability Dashboard",
    subtitle: "Quantitative Sourcing Table, Fee Breakdown & Demand Scan",
    category: "Product Research",
    visualType: "product-research",
    demonstrationLabel: "Illustrative Demonstration — Not Live Client Data",
    overview:
      "An illustrative product research report modeling landed costs, domestic shipping brackets, eBay final value fees, ad rates, and calculated net margins alongside Terapeak and ZIK Analytics demand indicators.",
    keyTakeaway:
      "Prioritizing lightweight items (<100g, <25mm Large Letter) protects domestic shipping margins while maintaining an average net profit buffer above 30%.",
    toolsUsed: ["ZIK Analytics", "Terapeak", "Margin Modeling Spreadsheet"]
  },
  {
    id: "demo-03-store-management",
    projectNumber: "03",
    title: "Store Management & Inventory Operations Dashboard",
    subtitle: "Daily Order Queue, Stock Thresholds & Dispatch Workflow",
    category: "Store Management",
    visualType: "store-management",
    demonstrationLabel: "Illustrative Demonstration — Not Live Client Data",
    overview:
      "An illustrative store management dashboard depicting order queue triage, low-stock threshold triggers, multi-variation quantity tracking, and the daily dispatch SOP (Paid -> Packed -> Tracking Uploaded).",
    keyTakeaway:
      "Rigid low-stock triggers (<3 units) and daily morning dispatch triage eliminate out-of-stock cancellations and protect Top Rated seller metrics.",
    toolsUsed: ["eBay Seller Hub", "Google Sheets Master SOP", "Shipping Manager"]
  },
  {
    id: "demo-04-ebay-seo",
    projectNumber: "04",
    title: "eBay SEO & Keyword Architecture Showcase",
    subtitle: "Primary & Secondary Keyword Hierarchy & Title Formula",
    category: "eBay SEO",
    visualType: "ebay-seo",
    demonstrationLabel: "Illustrative Demonstration — Not Live Client Data",
    overview:
      "An illustrative SEO showcase demonstrating how high-intent UK buyer search phrases are broken into primary exact-match terms, secondary modifiers, and long-tail attributes mapped into eBay's search index.",
    keyTakeaway:
      "Front-loading the highest search-volume keywords in the first 40 characters ensures immediate relevance weighting on both mobile and desktop views.",
    toolsUsed: ["ZIK Analytics", "Terapeak Keyword Tool", "eBay Autocomplete"]
  },
  {
    id: "demo-05-dropshipping",
    projectNumber: "05",
    title: "Dropshipping Fulfillment & Tracking Workflow",
    subtitle: "Supplier Routing, Inventory Sync & Automated Carrier Updates",
    category: "Dropshipping",
    visualType: "dropshipping",
    demonstrationLabel: "Illustrative Demonstration — Not Live Client Data",
    overview:
      "An illustrative dropshipping workflow map demonstrating supplier stock level synchronization, automated price buffer adjustments, supplier order routing, and courier tracking upload verification.",
    keyTakeaway:
      "Continuous supplier inventory monitoring and fast tracking number uploads ensure compliance with eBay's delivery timeframes while preventing stockouts.",
    toolsUsed: ["Supplier Portals", "Tracking Sync Tools", "Order Reconciliation Sheet"]
  }
];

export const selectedClientWork: ClientProjectPlaceholder[] = [
  {
    id: "client-01-home-living",
    projectTitle: "UK Home & Living Store — Daily Retainer & Catalog Architecture",
    category: "Store Management",
    marketplace: "eBay.co.uk",
    statusBadge: "Commercial Retainer Framework",
    clientIndustry: "Home Decor, Kitchen Storage & Organisers",
    projectDescription:
      "Ongoing virtual assistance managing active storefront operations, daily Royal Mail order dispatch coordination, buyer inquiry coverage, and systematic listing title restructuring.",
    workCompleted: [
      "Daily Seller Hub order queue triage and tracking number uploads",
      "Catalog re-indexing using formulaic 80-character Cassini SEO titles",
      "Populating 100% of missing mandatory and recommended item specifics",
      "Maintaining daily operational activity spreadsheets"
    ],
    verifiedOutcomes: [
      "Rigorous adherence to agreed Royal Mail dispatch cut-offs to safeguard account performance",
      "Full catalog compatibility with eBay facet search filters",
      "Clean customer inquiry SLA maintained during UK business hours"
    ],
    coverImage: null, // Ready for screenshot e.g. "/images/client-work/home-living-cover.jpg"
    additionalScreenshots: [],
    clientTestimonialPlaceholder: {
      note: "Live client screenshot and feedback statement awaiting publication consent.",
      status: "Awaiting Client Consent"
    }
  },
  {
    id: "client-02-electronics-sourcing",
    projectTitle: "Consumer Electronics — Sourcing Dossier & Margin Validation",
    category: "Product Research",
    marketplace: "eBay.co.uk & International",
    statusBadge: "Research Milestone Delivery",
    clientIndustry: "Audio Tech, Phone Accessories & Cables",
    projectDescription:
      "Screening candidate tech accessories on Terapeak and ZIK Analytics, modeling net profit margins including eBay final value fees and courier postage, and delivering validated product dossiers.",
    workCompleted: [
      "Screening product candidates against 90-day sell-through and price stability",
      "Landed cost calculation sheets with shipping and packaging buffers",
      "Competitor price curve and promotional strategy guidance",
      "Ready-to-upload listing copy and title blueprints"
    ],
    verifiedOutcomes: [
      "Curated product batch meeting strict net margin threshold (>30%)",
      "Identification of multi-pack bundling opportunities to increase average order value",
      "Full fee modeling preventing margin compression"
    ],
    coverImage: null,
    additionalScreenshots: [],
    clientTestimonialPlaceholder: {
      note: "Client research dossier and reference available upon request.",
      status: "Awaiting Client Consent"
    }
  },
  {
    id: "client-03-apparel-variation",
    projectTitle: "Streetwear & Casual Apparel — Multi-Variation & Stock Sync",
    category: "Listing Optimization",
    marketplace: "eBay.co.uk",
    statusBadge: "Catalog Restructure Delivery",
    clientIndustry: "Men's & Women's Fashion & Streetwear",
    projectDescription:
      "Consolidating fragmented single apparel listings into high-performing parent-child multi-variation listings with SKU-level stock control and UK sizing graphics.",
    workCompleted: [
      "Parent-child variation setup across multiple sizes and colorways",
      "1600x1600 px compliant white background images with size chart infographics",
      "Structured inventory tracking spreadsheet with proactive low-stock alerts",
      "Consolidated reviews and organic search ranking authority"
    ],
    verifiedOutcomes: [
      "Consolidation of scattered listings into high-authority parent listings",
      "Substantial reduction in buyer sizing inquiry volume via image charts",
      "Proactive stock monitoring to minimize out-of-stock cancellation risks"
    ],
    coverImage: null,
    additionalScreenshots: [],
    clientTestimonialPlaceholder: {
      note: "Client portfolio entry awaiting verified screenshot authorization.",
      status: "Awaiting Client Consent"
    }
  },
  {
    id: "client-04-dropshipping-store",
    projectTitle: "UK Domestic Dropshipping Store — Order Processing & Inventory Tracking",
    category: "Dropshipping",
    marketplace: "eBay.co.uk",
    statusBadge: "Fulfillment Retainer Framework",
    clientIndustry: "Garden Supplies, Tools & Pet Accessories",
    projectDescription:
      "Dedicated virtual assistance managing daily order placement with UK wholesale distributors, carrier tracking sync, and proactive customer delivery updates.",
    workCompleted: [
      "Prompt order routing to UK wholesale suppliers within scheduled shifts",
      "Daily stock synchronization preventing out-of-stock orders",
      "Timely upload of Evri and Royal Mail tracking numbers",
      "Customer delivery notifications and prompt return authorization"
    ],
    verifiedOutcomes: [
      "Consistent tracking number uploads within supplier dispatch windows",
      "Elimination of manual order backlog for the business owner",
      "Proactive handling of supplier delivery delays"
    ],
    coverImage: null,
    additionalScreenshots: [],
    clientTestimonialPlaceholder: {
      note: "Client operations summary awaiting verified testimonial consent.",
      status: "Awaiting Client Consent"
    }
  },
  {
    id: "client-05-seo-catalog-revamp",
    projectTitle: "Auto Accessories & Hardware — Cassini SEO & Facet Filter Revamp",
    category: "eBay SEO",
    marketplace: "eBay.co.uk",
    statusBadge: "Search Optimization Project",
    clientIndustry: "Automotive Accessories, Car Care & Workshop Tools",
    projectDescription:
      "Systematic keyword overhaul for automotive listings, completing missing eBay fitment attributes and restructuring titles for high-volume UK search queries.",
    workCompleted: [
      "Rewriting catalog titles using target UK vehicle and accessory search terms",
      "100% completed compatibility and manufacturer part number (MPN) fields",
      "Unlocking eBay vehicle fitment search filters",
      "Clean bulk CSV import file ready for instant Seller Hub landing"
    ],
    verifiedOutcomes: [
      "Full attribute completeness unlocking eBay category navigation filters",
      "Removal of non-searchable buzzwords from listing titles",
      "Accurate manufacturer part number indexing"
    ],
    coverImage: null,
    additionalScreenshots: [],
    clientTestimonialPlaceholder: {
      note: "Client project summary awaiting verified client testimonial consent.",
      status: "Awaiting Client Consent"
    }
  }
];

export const skillCategoriesData: SkillCategory[] = [
  {
    categoryName: "Core eBay Capabilities",
    description: "Specialized workflows honed for eBay's marketplace algorithms and Seller Hub framework.",
    skills: [
      {
        name: "eBay Seller Hub Mastery",
        level: "Advanced",
        description: "Full management of listings, orders, marketing, payments, and store settings.",
        tags: ["Storefronts", "Promotions Manager", "Account Health"]
      },
      {
        name: "Cassini Algorithm SEO",
        level: "Advanced",
        description: "Keyword-rich 80-character title formatting and item specifics completion for max ranking.",
        tags: ["Keyword Density", "Search Matching", "Click-Through Optimization"]
      },
      {
        name: "Multi-Variation Listings",
        level: "Advanced",
        description: "Configuring parent-child structures across sizes, colours, and bundle quantities.",
        tags: ["Apparel", "Home Goods", "Custom SKUs"]
      },
      {
        name: "Customer Service & Dispute Handling",
        level: "Proficient",
        description: "Empathetic, policy-compliant communication resolving returns and buyer queries.",
        tags: ["INR Cases", "Return Labels", "Feedback Revision"]
      }
    ]
  },
  {
    categoryName: "Research, Sourcing & Analytics",
    description: "Data-driven tool stack for uncovering profitable niches and validating buyer demand.",
    skills: [
      {
        name: "ZIK Analytics & Terapeak",
        level: "Advanced",
        description: "Analyzing historical sold price points, sell-through rates, and market trends.",
        tags: ["Demand Curve", "Sold Listings", "Average Sale Price"]
      },
      {
        name: "Competitor Benchmark Analysis",
        level: "Proficient",
        description: "Deconstructing top-ranking competitor listings, pricing structures, and shipping policies.",
        tags: ["Price Matching", "Promoted Listings", "Postage Terms"]
      },
      {
        name: "Profit Margin Calculation",
        level: "Advanced",
        description: "Accurate modeling accounting for eBay final value fees, ad rates, and courier postage.",
        tags: ["Net Margins", "VAT Considerations", "ROI Planning"]
      }
    ]
  },
  {
    categoryName: "Inventory, Operations & Tools",
    description: "Systems and applications used to maintain spotless daily operational continuity.",
    skills: [
      {
        name: "Microsoft Excel & Google Sheets",
        level: "Advanced",
        description: "Formulas, bulk CSV exports/imports, VLOOKUP, and structured tracking spreadsheets.",
        tags: ["Bulk Uploads", "Stock Sheets", "Data Cleaning"]
      },
      {
        name: "Canva & Image Preparation",
        level: "Proficient",
        description: "Formatting compliant pure-white backgrounds, dimension scaling, and visual infographics.",
        tags: ["1600x1600 Res", "White Background", "Dimension Callouts"]
      },
      {
        name: "UK Shipping & Courier Knowledge",
        level: "Specialized",
        description: "Understanding Royal Mail 24/48, Evri, DPD services, dispatch cutoffs, and tracking SLAs.",
        tags: ["Royal Mail Tracked", "Evri Delivery", "UK Dispatch Timelines"]
      }
    ]
  }
];

export const whyWorkWithMeData: ValueProposition[] = [
  {
    title: "Professional UK-Friendly Communication",
    description:
      "Smooth, clear English communication with active working hours overlap during UK business days. No disappearing acts, only proactive updates and transparent daily reports.",
    iconName: "Clock",
    benefit: "Direct, timely email and chat responses."
  },
  {
    title: "Meticulous Attention to Detail",
    description:
      "Zero tolerance for missing attributes, policy violations, or incorrect SKUs. I treat your account as if it were my own business, prioritizing long-term safety over shortcuts.",
    iconName: "ShieldCheck",
    benefit: "Flawless compliance with eBay's strict performance standards."
  },
  {
    title: "SOP-Driven & Organised Workflow",
    description:
      "Tasks are executed according to structured Standard Operating Procedures (SOPs). Daily tracking sheets and organised Google Drive folders ensure complete transparency.",
    iconName: "FolderKanban",
    benefit: "You can track exactly what was accomplished every single day."
  },
  {
    title: "Client-Focused & Adaptive Approach",
    description:
      "Whether you operate retail arbitrage, wholesale distribution, dropshipping, or your own private label brand, I adapt directly to your preferred tools and business model.",
    iconName: "Users2",
    benefit: "Customised virtual assistance tailored to your specific goals."
  },
  {
    title: "Commitment to Top-Tier Quality",
    description:
      "Dedicated to maintaining Top Rated Seller status, safeguarding your account from defect marks, and consistently following Cassini algorithm best practices.",
    iconName: "Award",
    benefit: "Peace of mind knowing your digital storefront is protected."
  }
];

export const workProcessData: ProcessStep[] = [
  {
    stepNumber: "01",
    title: "Initial Discussion",
    subtitle: "Understanding Your Store & Goals",
    description:
      "We connect via email or scheduled consultation to discuss your eBay business model, your current operational bottlenecks, product niches, and immediate expectations.",
    keyActivities: [
      "Review current store size & daily order volume",
      "Identify pain points (listing backlog, SEO, time constraints)",
      "Agree on scope of work, communication channels & working hours"
    ],
    deliverable: "Clear Scope of Work & Action Plan Document"
  },
  {
    stepNumber: "02",
    title: "Store Analysis",
    subtitle: "Deep-Dive Audit & Gap Identification",
    description:
      "I conduct a comprehensive audit of your active listings, account health metrics, Cassini keyword positioning, and competitor standings.",
    keyActivities: [
      "Audit active listings for missing item specifics & weak titles",
      "Analyze Seller Hub traffic data and conversion bottlenecks",
      "Identify high-priority optimization opportunities"
    ],
    deliverable: "Store Audit Summary with Priority Remediation Items"
  },
  {
    stepNumber: "03",
    title: "Strategy & Execution",
    subtitle: "Systematic Implementation",
    description:
      "I begin executing the agreed tasks—crafting optimised listings, carrying out product research, or managing daily orders with strict quality checks.",
    keyActivities: [
      "Batch listing creation & Cassini title optimisation",
      "Terapeak / ZIK research & competitor validation",
      "Implementation of standardized tracking sheets"
    ],
    deliverable: "Completed Listings & Documented Work Delivery Batches"
  },
  {
    stepNumber: "04",
    title: "Ongoing Support",
    subtitle: "Daily Maintenance & Continuous Growth",
    description:
      "Providing dependable daily virtual assistance, maintaining disciplined on-time dispatch standards, updating inventory levels, and delivering regular progress updates.",
    keyActivities: [
      "Daily order processing & customer support coverage",
      "Real-time inventory synchronization to prevent stockouts",
      "Regular performance reviews and store growth recommendations"
    ],
    deliverable: "Daily / Weekly Activity Reports & Seamless Operations"
  }
];

export const faqData: FAQItem[] = [
  {
    question: "What is an eBay Virtual Assistant and how can you help my business?",
    answer:
      "An eBay Virtual Assistant is a specialized remote operational partner who takes care of the repetitive, time-intensive tasks required to run a successful store. I handle day-to-day store management, product research, keyword-optimised listing creation, inventory synchronization, and order coordination—allowing you to focus on sourcing, capital allocation, and growing your brand."
  },
  {
    question: "How do we collaborate across timezones (Pakistan & United Kingdom)?",
    answer:
      "Pakistan (PKT GMT+5) has a very convenient time difference of only 4 to 5 hours with the UK (GMT/BST). I maintain structured daily availability overlapping directly with UK business hours, ensuring rapid communication, timely order dispatch, and prompt responses to your questions."
  },
  {
    question: "Do I need to share my main eBay account login or password?",
    answer:
      "No! eBay offers a secure 'Multi-User Account Access' (MUAA) feature. You can invite me as an authorized employee/delegate with restricted permissions specifically tailored to what I need (e.g., Create & Edit Drafts, Manage Orders). You never have to share your primary password or banking details."
  },
  {
    question: "Can you handle single listings, multi-variation setups, and dropshipping?",
    answer:
      "Yes, absolutely. I specialize in single SKU listings, intricate parent-child multi-variation listings (sizes, colours, bundles), as well as daily supplier order placement and tracking synchronization for dropshipping stores."
  },
  {
    question: "What tools do you use for eBay product research and listing?",
    answer:
      "I work primarily with native eBay tools such as eBay Seller Hub and Terapeak Market Insights, combined with ZIK Analytics for demand scanning, advanced Excel/Google Sheets modeling for margin calculation, and Canva for clean, policy-compliant listing graphic preparation."
  },
  {
    question: "How do we get started?",
    answer:
      "Simply send an email to awaisbaig138@gmail.com. We will have a quick 15-minute chat about your current store setup, determine the right level of support you need, and start with an initial trial or store audit."
  }
];
