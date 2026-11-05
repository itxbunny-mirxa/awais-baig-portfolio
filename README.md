# Awais Baig — Premium eBay Virtual Assistant & Store Management Portfolio

A personal brand website engineered for **Awais Baig**, an **eBay Virtual Assistant & eCommerce Store Management Specialist** with **2–3 Years of Dedicated Experience** targeting UK-based eBay sellers, small and medium eCommerce businesses, and international merchants.

Built with **Next.js 16 (App Router with Turbopack)**, **TypeScript**, **Tailwind CSS**, and **Lucide React** in polished **British English**.

---

## 🚀 Stage 4 — Final Production Readiness & Verification

### 1. Reality & Credibility Safeguards
- **Demonstration Visuals Labelled**: All 5 custom dashboard simulations (*Listing Optimization*, *Product Research*, *Store Management*, *eBay SEO*, *Dropshipping Fulfillment*) bear the mandatory banner: `"Illustrative Demonstration — Not Live Client Data"`.
- **Zero Fabricated Metrics**: No unverified 6-figure revenue claims, fake buyer screenshots, or manufactured reviews.
- **Client Confidentiality Safeguarded**: Real client project slots protect merchant privacy: account IDs, buyer delivery addresses, and private financials are completely redacted in compliance with UK GDPR and marketplace standards.
- **Transparent Tools Ecosystem**: Clear demarcation between active confirmed tools (*ZIK Analytics*, *Terapeak*) and tools pending client confirmation (*eBay Seller Hub*, *AutoDS*, *DSM Tool*, *Canva*, *Excel*, *Photopea*).

### 2. Verified Contact System
- **Official Inbox**: `awaisbaig138@gmail.com`
- **Primary CTA**: `"Let's Discuss Your eBay Store"`
- **Direct Mailto Form**: Formulates pre-filled store briefs directly to `mailto:awaisbaig138@gmail.com` with one-click clipboard copy fallback for users without a default desktop email client.
- **Timezone Synchronization**: Live dual-clock indicator tracking London (`Europe/London`) and Multan (`Asia/Karachi`).
- **Verified Profiles**: Direct links to Facebook (`facebook.com/mirzaawais.baig.3194`) and LinkedIn (`linkedin.com/in/awaisbaig01`). WhatsApp is kept as an honest placeholder.

### 3. SEO & OpenGraph Social Sharing
- **Title**: `Awais Baig | eBay Virtual Assistant & Store Management Specialist`
- **Meta Description**: `Professional eBay Virtual Assistant specialising in store management, product research, listing optimisation and eCommerce operations for UK and international sellers.`
- **Dynamic OpenGraph Card**: 1200×630 pixel-perfect social preview card (`src/app/opengraph-image.tsx`) automatically rendered when sharing links on LinkedIn, WhatsApp, Facebook, or Twitter.
- **Sitemap & Robots**: Automated `sitemap.xml` and `robots.txt` routes generated at build time.
- **Canonical URL**: Configurable via `NEXT_PUBLIC_SITE_URL` (defaults to `https://awaisbaig.com`).

### 4. Design System & UI Architecture
- **Light UI**: Crisp white (`#FFFFFF`) with off-white (`#F8FAFC`) surfaces, deep navy typography (`#0F172A`), and cobalt blue accents (`#2563EB`).
- **Floating Pill Navigation**: Centered frosted-glass navigation pill with high-contrast `Let's Talk ↗` button.
- **macOS Safari Window Mockups**: Custom browser window frames with traffic light controls (🔴 🟡 🟢) housing the hero console and demonstration dashboards.
- **Accessibility**: ARIA dialog attributes, Escape key modal handlers, full keyboard navigation, and `@media (prefers-reduced-motion: reduce)` support.

---

## 📁 Project Structure

```
├── public/
│   ├── favicon.ico
│   └── images/
│       ├── README.txt
│       ├── awais-baig.jpg        <- Drop Awais's real portrait here
│       └── client-work/          <- Drop client screenshots here
├── src/
│   ├── app/
│   │   ├── favicon.ico
│   │   ├── globals.css           <- Tailwind CSS, design tokens & reduced-motion
│   │   ├── layout.tsx            <- SEO metadata, OpenGraph, Twitter cards
│   │   ├── opengraph-image.tsx   <- Dynamic 1200x630 social sharing card
│   │   ├── page.tsx              <- Root page assembling all components
│   │   ├── robots.ts             <- Dynamic robots.txt
│   │   └── sitemap.ts            <- Dynamic sitemap.xml
│   ├── components/
│   │   ├── demonstrations/       <- 5 custom bespoke interactive dashboards
│   │   │   ├── DropshippingWorkflowVisual.tsx
│   │   │   ├── EbaySeoVisual.tsx
│   │   │   ├── ListingOptimizationVisual.tsx
│   │   │   ├── ProductResearchVisual.tsx
│   │   │   └── StoreManagementVisual.tsx
│   │   ├── ui/                   <- Reusable UI components
│   │   │   ├── Badge.tsx
│   │   │   ├── Modal.tsx
│   │   │   ├── ProfileAvatar.tsx <- Portrait with AB monogram fallback
│   │   │   ├── SectionHeading.tsx
│   │   │   └── SocialIcons.tsx
│   │   ├── About.tsx
│   │   ├── ClientWorkModal.tsx
│   │   ├── Contact.tsx
│   │   ├── DemoProjectModal.tsx
│   │   ├── Experience.tsx
│   │   ├── FAQ.tsx
│   │   ├── FloatingWhatsApp.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── HeroMarketplacesRibbon.tsx
│   │   ├── Navbar.tsx
│   │   ├── Portfolio.tsx
│   │   ├── ProfileStats.tsx
│   │   ├── ServiceModal.tsx
│   │   ├── Services.tsx
│   │   ├── Skills.tsx
│   │   ├── ToolsEcosystem.tsx
│   │   ├── WhyWorkWithMe.tsx
│   │   └── WorkProcess.tsx
│   ├── data/
│   │   └── portfolioData.ts      <- Centralized single-source-of-truth
│   └── types/
│       └── portfolio.ts          <- Strict TypeScript definitions
├── .env.example
├── vercel.json
└── package.json
```

---

## 🛠️ Local Development & Deployment

### Run Locally
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:3000 in your browser
```

### Production Build & Test
```bash
# Compile optimized static output
npm run build

# Run production server
npm run start
```

### Deploy to Vercel
1. Push repository to GitHub or GitLab.
2. Import project into [Vercel](https://vercel.com).
3. Set environment variable:
   - `NEXT_PUBLIC_SITE_URL` = `https://your-custom-domain.com` (or Vercel domain).
4. Click **Deploy**.
