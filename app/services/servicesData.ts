import {
  Globe,
  Smartphone,
  ShoppingBag,
  CreditCard,
  Palette,
  Cloud,
  TrendingUp,
  Headphones,
  Zap,
  Shield,
  Code2,
  Users,
  BarChart3,
  Server,
  Lock,
  Repeat,
  Send,
  Layers,
  LucideIcon,
} from "lucide-react";

export interface PackageTier {
  name: string;
  price: string;
  popular?: boolean;
  description: string;
  turnaround: string;
  features: string[];
}

export interface ServiceHighlight {
  icon: LucideIcon;
  label: string;
}

export interface ServiceFAQ {
  q: string;
  a: string;
}

export interface SpecialOffer {
  badge?: string;
  heading: string;
  price: string;
  priceSubtext?: string;
  subtitle: string;
  description: string;
  benefits: string[];
}

export interface ServiceItem {
  id: string;
  slug: string;
  category: string;
  badge?: string | null;
  icon: LucideIcon;
  color: string;
  colorSubtle: string;
  colorGlow: string;
  title: string;
  subtitle: string;
  fullDescription: string;
  image: string;
  priceLabel: string;
  price: string;
  turnaround: string;
  features: string[];
  highlights: ServiceHighlight[];
  deliverables: string[];
  techStack: { name: string; tag: string }[];
  packages: PackageTier[];
  faqs: ServiceFAQ[];
  specialOffer?: SpecialOffer;
}

export const services: ServiceItem[] = [
  {
    id: "payment-gateway",
    slug: "payment-gateway",
    category: "Payments",
    badge: "Verified Setup",
    icon: CreditCard,
    color: "#10B981",
    colorSubtle: "rgba(16,185,129,0.08)",
    colorGlow: "rgba(16,185,129,0.25)",
    title: "Payment Gateway Integration",
    subtitle:
      "We provide secure payment gateways including JazzCash and Easypaisa for E-Commerce stores and commercial merchants, complete with instant webhook verification, Debit/Credit card processing, and seamless checkout integration.",
    fullDescription:
      "We provide secure payment gateway integration for JazzCash and Easypaisa specifically tailored for E-Commerce stores, online retail brands, and commercial merchants. We eliminate technical friction by connecting your digital storefront directly with Pakistan's leading mobile wallets and banking rails (JazzCash, Easypaisa, Visa, MasterCard, and PayPak). Your store receives real-time automated IPN and webhook callbacks, instant order status confirmation, automated customer receipts, and bank-grade SSL/3DS anti-fraud encryption. Whether you run a Shopify, WooCommerce, Next.js, or custom web portal, our engineers deliver a turnkey, production-grade checkout pipeline that operates 24/7 with zero recurring software fees.",
    image: "/images/services/service_ecommerce_payment.jpg",
    priceLabel: "Starting from",
    price: "PKR 15,000",
    turnaround: "2 – 5 Days",
    features: [
      "JazzCash & Easypaisa Merchant Integration",
      "Stripe (Cards, Apple Pay, Google Pay) setup",
      "Pakistani Bank APIs (HBL, Bank Alfalah, Meezan)",
      "Secure webhook callbacks & instant order status update",
      "3D Secure 2.0 & anti-fraud verification",
      "Automated refunds & dispute handling integration",
    ],
    highlights: [
      { icon: Lock, label: "PCI Secure" },
      { icon: Repeat, label: "Auto Webhooks" },
      { icon: Send, label: "Instant Payouts" },
    ],
    deliverables: [
      "Full payment gateway API integration in your website or mobile app",
      "Webhook endpoint handling for success, failure, and pending states",
      "Admin transaction reconciliation log & receipt generator",
      "Test sandbox environment verification before going live",
      "Live production deployment and merchant account verification support",
      "30 days technical support for transaction monitoring",
    ],
    techStack: [
      { name: "JazzCash Merchant API", tag: "Local Wallet" },
      { name: "Easypaisa API", tag: "Local Wallet" },
      { name: "Stripe Connect", tag: "Global Cards" },
      { name: "Bank Alfalah APG", tag: "Bank Gateway" },
      { name: "PayPal REST API", tag: "International" },
      { name: "3DS 2.0 Security", tag: "Fraud Protection" },
    ],
    packages: [
      {
        name: "Single Gateway Setup",
        price: "PKR 15,000",
        description: "Integration of 1 payment gateway (e.g. JazzCash OR Easypaisa OR Stripe) into your existing website.",
        turnaround: "2 – 4 Days",
        features: [
          "Integration of 1 chosen gateway",
          "Sandbox testing & live credential setup",
          "Success/Failure redirect & customer receipt",
          "Webhook configuration for auto status changes",
          "15 days verification support",
        ],
      },
      {
        name: "One-Time Setup for E-Commerce & Merchants",
        price: "PKR 35,000",
        popular: true,
        description: "Complete turnkey payment integration for online stores and merchants with JazzCash, Easypaisa, and Debit/Credit card processing.",
        turnaround: "3 – 5 Days",
        features: [
          "Full One-Time Setup for E-Commerce Stores & Merchants",
          "JazzCash + Easypaisa Merchant Wallets integration",
          "Direct Debit & Credit Card (Visa/MasterCard) checkout",
          "Automated instant order confirmation via Webhooks",
          "Custom checkout UI matching your store design",
          "Zero recurring technical charges — one-time flat fee",
          "30 days dedicated post-launch support & merchant onboarding",
        ],
      },
      {
        name: "Dual Multi-Wallet Gateway",
        price: "PKR 28,000",
        description: "Complete checkout experience with both JazzCash and Easypaisa wallets + Debit/Credit cards.",
        turnaround: "4 – 6 Days",
        features: [
          "JazzCash + Easypaisa full integration",
          "Debit / Credit card processing",
          "Auto-retry logic for failed transactions",
          "Admin transaction view with refund action",
          "30 days priority support",
        ],
      },
      {
        name: "Enterprise Global Payments",
        price: "PKR 50,000",
        description: "Global & local setup with Stripe, PayPal, and Pakistan local gateways plus recurring subscriptions.",
        turnaround: "6 – 10 Days",
        features: [
          "Local wallets (JazzCash, Easypaisa) + Global (Stripe, PayPal)",
          "Recurring subscription & invoice billing support",
          "Multi-currency dynamic conversion",
          "Custom fraud detection rules & automated ledger sync",
          "60 days priority VIP support",
        ],
      },
    ],
    specialOffer: {
      badge: "Exclusive E-Commerce & Merchant Package",
      heading: "One-Time Payment Gateway Setup for E-Commerce & Merchants",
      price: "PKR 35,000",
      priceSubtext: "One-Time Flat Investment · Zero Recurring Tech Charges",
      subtitle:
        "Complete turnkey payment solution engineered specifically for Pakistani online retail brands, Shopify / WooCommerce / Custom e-commerce stores, and corporate merchants.",
      description:
        "For e-commerce store owners, digital retail brands, and commercial merchants, QuantumByte Technologies offers an all-inclusive One-Time Payment Gateway Setup for PKR 35,000. Managing digital transactions shouldn't involve recurring monthly technical fees or complex bank integrations. We handle the complete setup from scratch: connecting JazzCash Merchant, Easypaisa Merchant, and direct Credit/Debit cards (Visa, MasterCard & PayPak) straight into your online checkout. Your store gets real-time automated webhook callbacks, instant order confirmation receipts, automated inventory sync, and bank-grade SSL/3DS anti-fraud encryption. Best of all, this is a genuine 100% one-time investment with zero recurring developer charges — pay once, own your payment infrastructure forever, and receive 30 days of free dedicated technical support and merchant onboarding assistance.",
      benefits: [
        "100% One-Time Setup (Zero monthly developer retainers or hidden fees)",
        "Both JazzCash & Easypaisa Merchant Wallets fully connected",
        "Direct Credit / Debit Cards (Visa, MasterCard, PayPak) checkout",
        "Instant automated webhook callbacks & receipt generation",
        "Custom branded checkout UI matching your store theme",
        "Full sandbox testing & live transaction audit before launch",
        "Step-by-step assistance with official merchant account registration",
        "30 Days of dedicated post-launch monitoring and technical support",
      ],
    },
    faqs: [
      {
        q: "What is included in the PKR 35,000 One-Time Setup for E-Commerce & Merchants?",
        a: "Our PKR 35,000 package is an all-inclusive, one-time turnkey payment integration for online stores and digital merchants. It includes connecting both JazzCash and Easypaisa merchant digital wallet gateways along with direct Credit and Debit card processing (Visa & MasterCard). We configure automated IPN webhooks for instant order status confirmation, test everything thoroughly in sandbox, and ensure your store accepts payments without any recurring monthly software fees.",
      },
      {
        q: "What do I need to integrate JazzCash or Easypaisa?",
        a: "You need a registered JazzCash or Easypaisa Merchant / Corporate account. If you don't have one yet, our team will guide you through the merchant registration documentation step-by-step.",
      },
      {
        q: "Is payment information stored on my website?",
        a: "Never! We use tokenized, PCI-DSS compliant checkout flows where sensitive card and wallet details are handled directly by the bank/processor, ensuring your store is 100% safe from liabilities.",
      },
      {
        q: "Can customers receive automated payment confirmations?",
        a: "Yes, once the payment webhook succeeds, the system automatically emails an official invoice to the customer and can also send an instant SMS or WhatsApp confirmation.",
      },
    ],
  },
  {
    id: "web-development",
    slug: "web-development",
    category: "Development",
    badge: "Most Popular",
    icon: Globe,
    color: "#3B82F6",
    colorSubtle: "rgba(59,130,246,0.08)",
    colorGlow: "rgba(59,130,246,0.25)",
    title: "Web Development",
    subtitle:
      "Custom, high-performance websites and web applications built on modern stacks — React, Next.js, Node.js, and TypeScript. From landing pages to enterprise portals.",
    fullDescription:
      "At QuantumByte Technologies, we build ultra-fast, visually breathtaking, and scalable web applications designed to convert visitors into loyal clients. Whether you need a corporate portfolio, custom SaaS application, headless Next.js portal, or real-time dashboard, our engineers write clean, maintainable code optimized for search engines (SEO) and exceptional Core Web Vitals.",
    image: "/images/services/service_web_mobile.jpg",
    priceLabel: "Starting from",
    price: "PKR 25,000",
    turnaround: "5 – 12 Days",
    features: [
      "Custom responsive design (Mobile, Tablet, Desktop)",
      "Next.js App Router / React 19 / TypeScript",
      "SEO-optimized architecture & OpenGraph tags",
      "Sub-second page load times & Core Web Vitals",
      "Custom CMS or Sanity / Strapi integration",
      "Ongoing bug support & security patches",
    ],
    highlights: [
      { icon: Zap, label: "Sub-second Speed" },
      { icon: Shield, label: "Enterprise Security" },
      { icon: Code2, label: "Clean TypeScript" },
    ],
    deliverables: [
      "Production-ready Next.js / React source code repository",
      "Custom responsive UI with dark/light mode and glassmorphism",
      "Full API endpoints, databases (PostgreSQL/Supabase/MongoDB)",
      "Automated CI/CD deployment on Vercel or AWS",
      "Interactive admin dashboard for content and analytics",
      "30 days of post-launch technical support & warranty",
    ],
    techStack: [
      { name: "Next.js 15+", tag: "Framework" },
      { name: "React 19", tag: "Frontend" },
      { name: "TypeScript", tag: "Language" },
      { name: "Tailwind CSS", tag: "Styling" },
      { name: "Node.js", tag: "Backend" },
      { name: "PostgreSQL / Supabase", tag: "Database" },
      { name: "Vercel / AWS", tag: "Hosting" },
      { name: "Sanity CMS", tag: "Headless CMS" },
    ],
    packages: [
      {
        name: "Starter Landing Page",
        price: "PKR 25,000",
        description: "High-converting single-page website for startups, personal portfolios, or campaign launches.",
        turnaround: "4 – 6 Days",
        features: [
          "1 High-converting responsive landing page",
          "Hero section, features, testimonials, contact form",
          "WhatsApp chat integration & email alerts",
          "Basic SEO setup & Google Analytics",
          "Vercel deployment & custom domain setup",
          "14 days free post-launch support",
        ],
      },
      {
        name: "Business Web App",
        price: "PKR 55,000",
        popular: true,
        description: "Complete multi-page website with CMS and admin management for established businesses.",
        turnaround: "8 – 14 Days",
        features: [
          "Up to 8 custom designed pages",
          "Dynamic blog / CMS (Sanity or Strapi)",
          "Lead capture & contact inquiry dashboard",
          "Advanced SEO, Sitemap & structured schema markup",
          "Speed optimization (95+ Google Lighthouse)",
          "30 days free post-launch support",
        ],
      },
      {
        name: "Enterprise Custom Portal",
        price: "PKR 110,000+",
        description: "Full-stack scalable web portal with authentication, role-based dashboards, and custom APIs.",
        turnaround: "2 – 4 Weeks",
        features: [
          "Unlimited dynamic pages & custom features",
          "User authentication & Role-Based Access Control",
          "Database architecture (PostgreSQL/MySQL/MongoDB)",
          "REST & GraphQL API integrations",
          "Automated automated tests & CI/CD pipeline",
          "60 days priority VIP support & maintenance",
        ],
      },
    ],
    faqs: [
      {
        q: "How long does it take to deliver a custom web application?",
        a: "A standard business website typically takes 7 to 14 days, while single-page landing pages can be delivered within 4 to 6 days. Large enterprise portals depend on scope and features, usually between 3 to 6 weeks.",
      },
      {
        q: "Will I own the complete source code of my website?",
        a: "Yes, 100%! Upon project completion and final milestone approval, you receive full intellectual property (IP) ownership and git repository access to the entire codebase.",
      },
      {
        q: "Do you offer domain name and hosting setup?",
        a: "Yes, we handle complete domain DNS configuration, SSL certification, and cloud hosting setup on platforms like Vercel, AWS, or your preferred hosting server.",
      },
      {
        q: "Can I update the content myself after launch?",
        a: "Absolutely. We integrate headless CMS platforms like Sanity or build custom lightweight admin dashboards so you can easily edit text, images, blogs, and products without writing code.",
      },
    ],
  },
  {
    id: "mobile-apps",
    slug: "mobile-apps",
    category: "Mobile",
    badge: "Popular",
    icon: Smartphone,
    color: "#8B5CF6",
    colorSubtle: "rgba(139,92,246,0.08)",
    colorGlow: "rgba(139,92,246,0.25)",
    title: "Mobile App Development",
    subtitle:
      "iOS and Android apps built with React Native and Flutter. Pixel-perfect UI, 60fps animations, offline mode, and seamless cloud backend integrations.",
    fullDescription:
      "Reach your customers directly on their smartphones with cross-platform iOS and Android apps that feel genuinely native. QuantumByte builds reliable, smooth, and feature-packed mobile applications utilizing React Native and Flutter, cutting development costs in half while publishing to both Google Play Store and Apple App Store.",
    image: "/images/services/service_web_mobile.jpg",
    priceLabel: "Starting from",
    price: "PKR 40,000",
    turnaround: "10 – 25 Days",
    features: [
      "Cross-platform code for iOS & Android",
      "Butter-smooth 60fps native performance",
      "Real-time push notifications (Firebase FCM)",
      "Secure biometrics (Face ID & Fingerprint login)",
      "Offline database sync & caching",
      "App Store & Google Play Store publishing support",
    ],
    highlights: [
      { icon: Smartphone, label: "iOS & Android" },
      { icon: Zap, label: "60fps Smooth" },
      { icon: Shield, label: "Biometric Auth" },
    ],
    deliverables: [
      "React Native or Flutter mobile codebase for iOS and Android",
      "Node.js or Supabase backend with authentication and REST API",
      "Push notification server integration",
      "App Store and Play Store ready release builds (.apk, .aab, .ipa)",
      "Store listing graphics, icons, and metadata",
      "45 days of post-release bug fixes & maintenance",
    ],
    techStack: [
      { name: "React Native", tag: "Mobile Framework" },
      { name: "Flutter / Dart", tag: "Cross-Platform" },
      { name: "Firebase", tag: "Notifications & Auth" },
      { name: "Node.js / Express", tag: "API Backend" },
      { name: "SQLite / WatermelonDB", tag: "Offline Database" },
      { name: "Apple App Store", tag: "iOS Distribution" },
      { name: "Google Play Store", tag: "Android Distribution" },
    ],
    packages: [
      {
        name: "MVP Mobile App",
        price: "PKR 40,000",
        description: "Perfect for testing a mobile idea or launching a basic business utility application.",
        turnaround: "10 – 14 Days",
        features: [
          "iOS & Android cross-platform app",
          "Up to 5 functional app screens",
          "Firebase authentication & database",
          "Push notifications setup",
          "Release build preparation",
          "20 days post-launch support",
        ],
      },
      {
        name: "Full Commercial App",
        price: "PKR 85,000",
        popular: true,
        description: "Production-ready mobile application with backend APIs, user accounts, and payment handling.",
        turnaround: "18 – 28 Days",
        features: [
          "Up to 15 custom screens with smooth animations",
          "Custom backend API & admin panel",
          "In-app payments (JazzCash, Easypaisa, Stripe)",
          "Offline mode & biometric authentication",
          "Direct App Store & Play Store publishing assistance",
          "45 days free maintenance & updates",
        ],
      },
      {
        name: "Enterprise Mobile Solution",
        price: "PKR 160,000+",
        description: "Complex apps like ride-hailing, food delivery, marketplace, or high-scale social platforms.",
        turnaround: "4 – 8 Weeks",
        features: [
          "Unlimited screens with real-time features (WebSockets)",
          "GPS live tracking & Google Maps SDK",
          "Multi-role user flows (Customer, Vendor, Admin)",
          "Automated cloud backup & analytics instrumentation",
          "Dedicated staging and production environments",
          "90 days priority VIP support",
        ],
      },
    ],
    faqs: [
      {
        q: "Do I need separate apps for iPhone and Android?",
        a: "No! We build cross-platform applications using React Native or Flutter, allowing a single high-quality codebase to run natively on both iOS and Android, saving you time and money.",
      },
      {
        q: "Will you publish the app to Google Play Store and Apple App Store?",
        a: "Yes, we handle the entire release process, including keystore generation, compliance checklists, app screenshots, and submission to both store dashboards.",
      },
      {
        q: "Can the app send push notifications to users?",
        a: "Yes! We integrate Firebase Cloud Messaging (FCM) so you can send automated, triggered, or manual promotional push notifications to your users at any time.",
      },
    ],
  },
  {
    id: "ecommerce",
    slug: "ecommerce",
    category: "E-Commerce",
    badge: "High Demand",
    icon: ShoppingBag,
    color: "#06B6D4",
    colorSubtle: "rgba(6,182,212,0.08)",
    colorGlow: "rgba(6,182,212,0.25)",
    title: "E-Commerce Solutions",
    subtitle:
      "Complete online stores engineered to convert visitors into repeat customers. Product catalogs, cart, checkout, inventory tracking, coupon engines, and analytics.",
    fullDescription:
      "Whether launching a boutique brand or an enterprise retail catalog with thousands of SKUs, QuantumByte crafts end-to-end e-commerce solutions. We combine lightning-fast page transitions, mobile-optimized checkout flows, and automated inventory sync with local Pakistani and international payment options.",
    image: "/images/services/service_ecommerce_payment.jpg",
    priceLabel: "Starting from",
    price: "PKR 35,000",
    turnaround: "7 – 16 Days",
    features: [
      "Custom high-conversion storefront UI",
      "Dynamic product catalog with variants & filters",
      "Mobile-optimized 1-click checkout flow",
      "Cash on Delivery (COD) & Online Payments",
      "Inventory tracking & automated low-stock alerts",
      "Order status tracking & WhatsApp order confirmation",
    ],
    highlights: [
      { icon: ShoppingBag, label: "Full Storefront" },
      { icon: BarChart3, label: "Sales Analytics" },
      { icon: Users, label: "Multi-Vendor" },
    ],
    deliverables: [
      "Complete responsive e-commerce web application",
      "Full admin dashboard for orders, products, customers, and discounts",
      "Payment gateway integration (JazzCash, Easypaisa, Stripe, Bank)",
      "Coupons, promo codes, and automated tax/shipping calculator",
      "Customer accounts with order history and wishlist",
      "30 days post-launch technical support & training",
    ],
    techStack: [
      { name: "Next.js E-Commerce", tag: "Frontend" },
      { name: "Shopify Headless", tag: "Optional CMS" },
      { name: "WooCommerce", tag: "WordPress" },
      { name: "PostgreSQL / Prisma", tag: "Database" },
      { name: "JazzCash & Easypaisa", tag: "PK Payments" },
      { name: "Stripe", tag: "Intl Payments" },
      { name: "TCS / Leopards API", tag: "Courier API" },
    ],
    packages: [
      {
        name: "Standard Store",
        price: "PKR 35,000",
        description: "Great for boutique brands, retail shops, or single-category merchants launching online.",
        turnaround: "7 – 10 Days",
        features: [
          "Up to 50 initial product uploads",
          "Cart, checkout, and wishlist functionality",
          "Cash on Delivery (COD) + Bank Transfer payment",
          "WhatsApp order notification trigger",
          "Basic sales analytics dashboard",
          "20 days post-launch support",
        ],
      },
      {
        name: "Pro Growth Store",
        price: "PKR 65,000",
        popular: true,
        description: "Our most popular package for growing businesses wanting automated payments and inventory.",
        turnaround: "12 – 18 Days",
        features: [
          "Unlimited products & categories with variant options",
          "JazzCash, Easypaisa & Credit Card payment gateways",
          "Coupons, discounts & flash sales engine",
          "Automated courier tracking integration (TCS/Leopards/Trax)",
          "Customer dashboard & order history",
          "45 days free maintenance & training",
        ],
      },
      {
        name: "Enterprise Multi-Vendor",
        price: "PKR 140,000+",
        description: "Multi-vendor marketplace where independent sellers can register, list products, and get payouts.",
        turnaround: "3 – 6 Weeks",
        features: [
          "Multi-vendor seller portals & commission payouts",
          "Custom inventory sync with physical retail POS",
          "Advanced analytics & live profit margins",
          "High-volume server architecture & caching",
          "International multi-currency & tax calculations",
          "90 days VIP support & SLA guarantee",
        ],
      },
    ],
    faqs: [
      {
        q: "Can I receive payments through JazzCash and Easypaisa?",
        a: "Yes! We integrate official JazzCash and Easypaisa merchant payment gateways, allowing your customers to pay directly from their mobile wallets, debit cards, or vouchers.",
      },
      {
        q: "Can customers order via Cash on Delivery (COD)?",
        a: "Yes, COD is configured by default, along with phone number verification (OTP) and WhatsApp confirmation if desired.",
      },
      {
        q: "Can you connect our store with courier shipping companies?",
        a: "Yes! We can integrate APIs for Pakistani courier services like Leopards, TCS, Trax, and PostEx to automatically generate consignment notes (CNs) and track parcels.",
      },
    ],
  },
  {
    id: "uiux-design",
    slug: "uiux-design",
    category: "Design",
    badge: null,
    icon: Palette,
    color: "#F59E0B",
    colorSubtle: "rgba(245,158,11,0.08)",
    colorGlow: "rgba(245,158,11,0.25)",
    title: "UI / UX Design & Branding",
    subtitle:
      "World-class, high-conversion visual design crafted in Figma. Brand identities, interactive clickable prototypes, scalable design systems, and developer-ready specs.",
    fullDescription:
      "A great digital product starts with thoughtful user experience and breathtaking aesthetics. QuantumByte's UI/UX specialists design interfaces that are intuitive, engaging, and modern. We turn complex business workflows into simple, elegant visual screens that users love to navigate.",
    image: "/images/services/service_uiux_design.jpg",
    priceLabel: "Starting from",
    price: "PKR 12,000",
    turnaround: "3 – 10 Days",
    features: [
      "Brand identity, typography & color system",
      "Clickable interactive Figma prototypes",
      "Mobile-first responsive screen layouts",
      "Atomic design system & reusable component libraries",
      "User journey mapping & usability testing",
      "Pixel-perfect developer handoff specifications",
    ],
    highlights: [
      { icon: Palette, label: "Brand Identity" },
      { icon: Layers, label: "Design System" },
      { icon: Zap, label: "Fast Prototyping" },
    ],
    deliverables: [
      "Organized Figma source file with components and styles",
      "Interactive clickable prototype for investor / client demo",
      "Brand guidelines document (colors, fonts, logo usages)",
      "High-resolution asset exports (SVG, PNG, WebP)",
      "Developer handoff documentation with spacing tokens",
    ],
    techStack: [
      { name: "Figma", tag: "UI/UX Design" },
      { name: "Adobe Illustrator", tag: "Vector & Logos" },
      { name: "Adobe Photoshop", tag: "Graphics" },
      { name: "FigJam", tag: "Wireframing" },
      { name: "Principle / Framer", tag: "Micro-animations" },
    ],
    packages: [
      {
        name: "Brand Identity Kit",
        price: "PKR 12,000",
        description: "Clean logo design, color palette, and typography system to launch your new venture.",
        turnaround: "3 – 5 Days",
        features: [
          "3 Unique logo concepts + revisions",
          "Color palette with light & dark mode codes",
          "Typography pairing recommendations",
          "Social media kit (Profile avatars & banners)",
          "Vector files (SVG, AI, EPS, PNG)",
        ],
      },
      {
        name: "Complete UI/UX Prototype",
        price: "PKR 35,000",
        popular: true,
        description: "Full UI design for up to 8 core web or mobile screens with interactive clickable prototyping.",
        turnaround: "7 – 12 Days",
        features: [
          "Up to 8 custom desktop & mobile screens",
          "Interactive clickable prototype in Figma",
          "Reusable component library (Buttons, Inputs, Cards)",
          "Micro-interactions & animation guidance",
          "Developer handoff specs with CSS tokens",
        ],
      },
      {
        name: "Enterprise Design System",
        price: "PKR 75,000+",
        description: "Comprehensive multi-platform design system for large software suites and startups.",
        turnaround: "2 – 3 Weeks",
        features: [
          "Complete design system with 50+ atomic components",
          "Up to 25 detailed application screens",
          "User persona research & wireframe testing",
          "Design token synchronization for developers",
          "Unlimited design iterations during the sprint",
        ],
      },
    ],
    faqs: [
      {
        q: "What tool do you use for designing?",
        a: "We exclusively use Figma for interface design and prototyping, which allows real-time live collaboration, feedback comments, and seamless developer handoff.",
      },
      {
        q: "Will the designs be ready for our developers to build?",
        a: "Yes! All designs follow strict 8pt grid systems, autolayout, responsive constraints, and include exported CSS tokens and SVG assets.",
      },
    ],
  },
  {
    id: "cloud-hosting",
    slug: "cloud-hosting",
    category: "Cloud",
    badge: null,
    icon: Cloud,
    color: "#06B6D4",
    colorSubtle: "rgba(6,182,212,0.08)",
    colorGlow: "rgba(6,182,212,0.25)",
    title: "Cloud Hosting & DevOps",
    subtitle:
      "Scalable cloud architecture on AWS, Vercel, and DigitalOcean. Automated CI/CD pipelines, SSL certificates, zero-downtime deployments, and 99.9% uptime monitoring.",
    fullDescription:
      "Ensure your website or application stays blazing fast and immune to traffic spikes. QuantumByte manages cloud server configurations, database clusters, automated code deployment pipelines, and continuous backups so your digital business never experiences downtime.",
    image: "/images/services/service_cloud_marketing.jpg",
    priceLabel: "Starting from",
    price: "PKR 10,000 / mo",
    turnaround: "2 – 5 Days",
    features: [
      "AWS / Vercel / DigitalOcean infrastructure setup",
      "Automated GitHub CI/CD continuous deployment",
      "Cloudflare CDN, DDoS mitigation & SSL certificates",
      "PostgreSQL / MySQL automated daily backups",
      "24/7 uptime monitoring & instant incident alerts",
      "Containerization with Docker for reproducible builds",
    ],
    highlights: [
      { icon: Server, label: "99.9% Uptime" },
      { icon: Shield, label: "DDoS Protection" },
      { icon: Zap, label: "Auto-Scale" },
    ],
    deliverables: [
      "Configured cloud infrastructure with production & staging environments",
      "Automated GitHub Actions CI/CD pipeline",
      "Cloudflare DNS, SSL, and caching rules setup",
      "Server health monitoring dashboard with email/SMS alerts",
      "Disaster recovery and automated database backup configuration",
    ],
    techStack: [
      { name: "AWS (EC2, S3, RDS)", tag: "Cloud Provider" },
      { name: "DigitalOcean", tag: "VPS Hosting" },
      { name: "Vercel", tag: "Serverless Edge" },
      { name: "Docker", tag: "Containers" },
      { name: "GitHub Actions", tag: "CI/CD" },
      { name: "Cloudflare", tag: "CDN & Security" },
    ],
    packages: [
      {
        name: "Basic Server Setup",
        price: "PKR 10,000",
        description: "One-time setup for hosting a website or API on a VPS with SSL and GitHub auto-deploy.",
        turnaround: "2 – 3 Days",
        features: [
          "Linux VPS setup (Ubuntu/Nginx/Node.js)",
          "SSL certificate & custom domain DNS",
          "GitHub webhook auto-deployment",
          "Firewall & security hardening",
          "15 days verification monitoring",
        ],
      },
      {
        name: "Managed Cloud Pro",
        price: "PKR 25,000 / mo",
        popular: true,
        description: "Ongoing server management, security patching, daily backups, and 99.9% uptime guarantee.",
        turnaround: "Monthly Retainer",
        features: [
          "Complete multi-server management (AWS/DigitalOcean)",
          "Automated daily off-site database backups",
          "24/7 automated uptime monitoring & incident recovery",
          "Monthly security patches & performance tuning",
          "Priority 1-hour response time SLA",
        ],
      },
      {
        name: "Enterprise High-Availability",
        price: "PKR 60,000 / mo",
        description: "Load-balanced, auto-scaling architecture with multi-region failover and database clustering.",
        turnaround: "Monthly Retainer",
        features: [
          "Auto-scaling server clusters with load balancers",
          "Multi-region database replication & instant failover",
          "Enterprise DDoS mitigation with Cloudflare Magic Transit",
          "Dedicated DevOps engineer on call 24/7",
          "Comprehensive monthly infrastructure audit",
        ],
      },
    ],
    faqs: [
      {
        q: "Can you help migrate our existing website to a new server without downtime?",
        a: "Yes! We specialize in zero-downtime server migrations. We mirror your database and files, test the staging environment, and switch DNS smoothly with zero service interruption.",
      },
      {
        q: "What happens if our server goes down in the middle of the night?",
        a: "Our monitoring agents ping your service every 60 seconds. On our Managed Cloud plan, our engineers receive instant alert notifications and begin automated recovery protocols immediately.",
      },
    ],
  },
  {
    id: "digital-marketing",
    slug: "digital-marketing",
    category: "Marketing",
    badge: null,
    icon: TrendingUp,
    color: "#EF4444",
    colorSubtle: "rgba(239,68,68,0.08)",
    colorGlow: "rgba(239,68,68,0.25)",
    title: "Digital Marketing & SEO",
    subtitle:
      "Results-driven performance marketing. Technical SEO, Google Search & Shopping Ads, Facebook & Instagram campaigns, and data analytics that drive qualified revenue.",
    fullDescription:
      "Building a great product is only half the battle — your target customers need to find it. QuantumByte executes data-backed performance marketing campaigns. We optimize your website for top search engine rankings, run targeted social ad campaigns, and optimize conversion funnels to deliver maximum Return on Ad Spend (ROAS).",
    image: "/images/services/service_cloud_marketing.jpg",
    priceLabel: "Starting from",
    price: "PKR 15,000 / mo",
    turnaround: "Ongoing Monthly",
    features: [
      "Technical SEO & Google Search Console optimization",
      "High-intent keyword research & competitor gap analysis",
      "Meta Ads (Facebook & Instagram) campaign management",
      "Google Search & Shopping Ads management",
      "Conversion rate optimization (CRO) & A/B testing",
      "Transparent bi-weekly performance & ROI reports",
    ],
    highlights: [
      { icon: TrendingUp, label: "More Traffic" },
      { icon: BarChart3, label: "Clear ROAS" },
      { icon: Users, label: "Audience Growth" },
    ],
    deliverables: [
      "Complete SEO audit and technical fix implementation",
      "Ad creatives, copywriting, and target audience setup",
      "Meta Pixel and Google Tag Manager conversion tracking setup",
      "Bi-weekly live dashboard report with ad spend and ROAS metrics",
    ],
    techStack: [
      { name: "Google Ads", tag: "PPC" },
      { name: "Meta Business Suite", tag: "Social Ads" },
      { name: "Google Analytics 4", tag: "Analytics" },
      { name: "Ahrefs / SEMrush", tag: "SEO Tools" },
      { name: "Google Tag Manager", tag: "Tracking" },
    ],
    packages: [
      {
        name: "SEO Boost Package",
        price: "PKR 15,000 / mo",
        description: "Technical SEO and on-page optimization to rank on page 1 of Google for high-value keywords.",
        turnaround: "Monthly Retainer",
        features: [
          "Complete on-page SEO optimization for 10 pages",
          "Speed & Core Web Vitals optimization",
          "Google Business Profile optimization",
          "Monthly keyword ranking report",
        ],
      },
      {
        name: "Social Ads & Growth",
        price: "PKR 30,000 / mo",
        popular: true,
        description: "Full management of Facebook & Instagram ad campaigns for e-commerce and lead generation.",
        turnaround: "Monthly Retainer",
        features: [
          "Meta ad account setup & Pixel conversion tracking",
          "Ad creative design & persuasive sales copywriting",
          "Audience targeting & retargeting funnels",
          "Budget optimization for maximum ROAS",
          "Bi-weekly live performance check-ins",
        ],
      },
      {
        name: "Full 360° Growth Suite",
        price: "PKR 60,000 / mo",
        description: "Combined SEO, Google Ads, Meta Ads, and email marketing funnels for aggressive scaling.",
        turnaround: "Monthly Retainer",
        features: [
          "Combined SEO + Google Ads + Meta Ads management",
          "Dedicated campaign manager & creative designer",
          "Automated email marketing sequences",
          "Weekly strategy calls and revenue tracking",
        ],
      },
    ],
    faqs: [
      {
        q: "How soon can I see results from SEO vs paid ads?",
        a: "Paid ads on Google and Meta generate traffic and sales immediately once launched. SEO is a long-term compounding asset that typically shows prominent ranking leaps within 60 to 90 days.",
      },
      {
        q: "Does your package price include the ad spend budget?",
        a: "Our package prices cover our strategic management, creative design, and optimization fees. The ad budget is paid directly to Google or Meta through your payment card.",
      },
    ],
  },
  {
    id: "it-support",
    slug: "it-support",
    category: "Support",
    badge: null,
    icon: Headphones,
    color: "#8B5CF6",
    colorSubtle: "rgba(139,92,246,0.08)",
    colorGlow: "rgba(139,92,246,0.25)",
    title: "IT Support & Consultation",
    subtitle:
      "Enterprise IT management and consulting for businesses. Hardware troubleshooting, office networking, cybersecurity audits, and ongoing technical support.",
    fullDescription:
      "Keep your company's technology infrastructure running without interruptions. QuantumByte serves as your outsourced Chief Technology Officer (CTO) and IT department. From deploying secure office networks and setting up business workstations to cyber hygiene and disaster recovery, we keep your business operational.",
    image: "/images/services/service_uiux_design.jpg",
    priceLabel: "Starting from",
    price: "PKR 8,000 / mo",
    turnaround: "Immediate / On-Demand",
    features: [
      "Remote helpdesk & on-site technical support",
      "Hardware diagnostics, upgrades & micro-repair",
      "Office LAN/Wi-Fi networking & VPN security",
      "Email setup (Google Workspace / Microsoft 363)",
      "Cybersecurity audit & data backup protocols",
      "Strategic tech roadmap & purchasing advice",
    ],
    highlights: [
      { icon: Headphones, label: "24/7 Helpdesk" },
      { icon: Shield, label: "Cyber Hygiene" },
      { icon: Users, label: "Staff Training" },
    ],
    deliverables: [
      "Dedicated remote ticketing & WhatsApp emergency support line",
      "Network architecture diagram & security audit report",
      "Workstation maintenance & virus/malware eradication",
      "Data backup verification & cloud storage setup",
    ],
    techStack: [
      { name: "Google Workspace", tag: "Business Email" },
      { name: "Microsoft 365", tag: "Productivity" },
      { name: "MikroTik / Ubiquiti", tag: "Networking" },
      { name: "AnyDesk / TeamViewer", tag: "Remote Support" },
      { name: "Bitdefender / Sophos", tag: "Endpoint Security" },
    ],
    packages: [
      {
        name: "One-Time IT Fix",
        price: "PKR 8,000",
        description: "Emergency troubleshooting for a specific office hardware, software, or network issue.",
        turnaround: "Same Day",
        features: [
          "Diagnostics and resolution for up to 2 workstations",
          "Software installation & malware removal",
          "Wi-Fi / LAN network troubleshooting",
          "7 days warranty on the fix",
        ],
      },
      {
        name: "Small Office IT Retainer",
        price: "PKR 20,000 / mo",
        popular: true,
        description: "Full monthly IT support for up to 10 workstations and office network infrastructure.",
        turnaround: "Monthly Retainer",
        features: [
          "Support for up to 10 company computers",
          "Routine software updates & anti-virus management",
          "Automated monthly cloud backup checks",
          "Priority 2-hour response time for emergencies",
          "Monthly on-site maintenance visit (Faisalabad)",
        ],
      },
      {
        name: "Enterprise Managed IT",
        price: "PKR 50,000 / mo",
        description: "Complete outsourced IT department for growing firms with 15+ staff and dedicated servers.",
        turnaround: "Monthly Retainer",
        features: [
          "Unlimited workstation & server support",
          "Firewall & VPN configuration for remote employees",
          "Employee onboarding and tech equipment provisioning",
          "Quarterly cybersecurity risk assessment",
          "Dedicated IT account manager",
        ],
      },
    ],
    faqs: [
      {
        q: "Do you provide on-site support in Faisalabad?",
        a: "Yes! For businesses located in Faisalabad and surrounding regions, our certified engineers provide prompt on-site troubleshooting at your office premises.",
      },
      {
        q: "Can you help set up corporate emails for our team?",
        a: "Yes, we handle complete domain setup and configuration for professional emails like you@yourcompany.com on Google Workspace or Microsoft 365.",
      },
    ],
  },
];

export function getServiceBySlug(slug: string): ServiceItem | undefined {
  return services.find(
    (s) => s.slug === slug || s.id === slug
  );
}

export function getAllServiceSlugs(): string[] {
  return services.map((s) => s.slug);
}
