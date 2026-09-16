# ⚡ QuantumByte Technologies

> **Official E-Commerce Store & Enterprise IT Services Platform**  
> High-performance Gaming PCs · MacBooks · Smartphones · GaN Chargers · Custom IT Solutions

[![Next.js](https://img.shields.io/badge/Next.js-16.3-black?logo=next.js)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript)](https://www.typescriptlang.org)
[![Sanity](https://img.shields.io/badge/Sanity-v5-F03E2F?logo=sanity)](https://www.sanity.io)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-38BDF8?logo=tailwindcss)](https://tailwindcss.com)

---

## 📋 Table of Contents

- [About](#-about)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Pages & Routes](#-pages--routes)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Environment Variables](#-environment-variables)
- [Sanity CMS](#-sanity-cms)
- [Admin Dashboard](#-admin-dashboard)
- [IT & Software Services](#-it--software-services)
- [Deployment](#-deployment)

---

## 🚀 About

**QuantumByte Technologies** is a full-stack e-commerce and IT services platform built for a premium tech retailer. It combines a feature-rich online store with an enterprise IT services booking system — all under one roof.

The platform is powered by **Next.js 16 App Router**, **Sanity CMS** as the headless backend, and features stunning 3D animations via **Three.js** and smooth scrolling via **Lenis**.

---

## ✨ Features

### 🛒 E-Commerce
- Product catalog with category filtering, search, and sorting
- Product detail pages with specs, ratings & reviews
- Shopping cart with slide-out drawer
- Multi-step checkout with order confirmation
- Coupon / discount code system
- Order tracking
- Wishlist

### 🛠️ IT & Software Services
- Web Development
- Mobile App Development (iOS & Android)
- E-Commerce Solutions
- Payment Gateway Integration (JazzCash, Easypaisa, Stripe, PayPal)
- UI/UX Design & Branding
- Cloud Hosting & DevOps
- Digital Marketing & SEO
- IT Support & Consultation
- Service booking modal with form submission

### 👤 User System
- Register / Login / Logout
- User dashboard & order history
- Persistent cart & wishlist

### 🔧 Admin Dashboard
- Analytics overview
- Product CRUD management
- Order management & status updates
- Customer management
- Category management
- Coupon management
- Review moderation
- Vendor management
- Site settings (announcement bar, shipping threshold)

### 🎨 UI/UX
- Dark premium theme (`#05070D` background)
- Three.js Hyperspeed WebGL hero background
- GSAP scroll animations (`GSAPReveal`, `GSAPFadeIn`, `GSAPParallax`, `GSAPHoverTilt`)
- Lenis smooth scroll
- Animated announcement ticker in navbar
- Preloader animation
- Scroll progress indicator
- WhatsApp floating button
- Back to top button
- Fully responsive (mobile-first)

---

## 🧰 Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16.3 (App Router) |
| Language | TypeScript 5 |
| UI Library | React 19 |
| Styling | Tailwind CSS v4 |
| CMS / Database | Sanity v5 (GROQ) |
| Animations | GSAP 3 + ScrollTrigger |
| Smooth Scroll | Lenis |
| 3D / WebGL | Three.js + Postprocessing |
| Icons | Lucide React |
| Image CDN | Sanity Image URL |
| Confetti | canvas-confetti |

---

## 📄 Pages & Routes

### Customer Pages
| Route | Description |
|-------|-------------|
| `/` | Home — Hero, catalog, banners, stats, testimonials |
| `/shop` | Full product catalog |
| `/products/[id]` | Product detail page |
| `/categories` | Category browser |
| `/search` | Search results |
| `/deals` | Flash deals & discounted products |
| `/best-sellers` | Top selling products |
| `/new-arrivals` | Latest arrivals |
| `/services` | IT & Software services page |
| `/repair` | Hardware repair & IT services |
| `/cart` | Shopping cart |
| `/checkout` | Checkout flow |
| `/order-success` | Order confirmation |
| `/track-order` | Order tracking |
| `/wishlist` | Saved products |

### Account & Auth
| Route | Description |
|-------|-------------|
| `/auth` | Login / Register |
| `/account` | User dashboard & order history |

### Admin Dashboard (`/admin`)
| Route | Description |
|-------|-------------|
| `/admin` | Overview & analytics |
| `/admin/products` | Product management |
| `/admin/orders` | Order management |
| `/admin/customers` | Customer list |
| `/admin/categories` | Category management |
| `/admin/coupons` | Coupon management |
| `/admin/reviews` | Review moderation |
| `/admin/vendors` | Vendor management |
| `/admin/settings` | Site settings |
| `/admin/users` | User management |

### Content & Legal
`/about` · `/contact` · `/faq` · `/press` · `/privacy-policy` · `/refund-policy` · `/shipping-policy` · `/terms` · `/warranty`

### Sanity Studio
`/studio` — Embedded Sanity Studio for live CMS editing

---

## 📁 Project Structure

```
quantambyte/
├── app/
│   ├── components/          # 25 shared UI components
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx          # Three.js WebGL hero
│   │   ├── CatalogClient.tsx
│   │   ├── CartDrawer.tsx
│   │   ├── CheckoutModal.tsx
│   │   ├── Hyperspeed.tsx    # Three.js warp effect
│   │   ├── GSAPWrapper.tsx   # Animation utilities
│   │   └── ...
│   ├── context/             # React context providers
│   │   ├── AuthContext.tsx
│   │   ├── CartContext.tsx
│   │   └── WishlistContext.tsx
│   ├── admin/               # Admin dashboard
│   ├── services/            # IT & Software services page
│   ├── products/[id]/       # Product detail pages
│   ├── globals.css          # Global styles & design tokens
│   └── layout.tsx           # Root layout
├── sanity/
│   ├── schemaTypes/         # 10 content schemas
│   ├── lib/
│   │   ├── client.ts
│   │   ├── queries.ts       # GROQ queries
│   │   ├── fetch.ts
│   │   └── currency.ts
│   └── env.ts
├── public/
│   └── images/              # Static assets & service images
├── scripts/                 # Seed data scripts
├── sanity.config.ts
└── next.config.ts
```

---

## 🏁 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn
- A [Sanity](https://www.sanity.io) account

### Installation

```bash
# Clone the repository
git clone https://github.com/syed-mujtaba-stack/QuantumByteTechnologies.git
cd QuantumByteTechnologies

# Install dependencies
npm install
```

### Setup Environment Variables

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2026-08-11
SANITY_API_TOKEN=your_write_token
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Seed Sample Data (Optional)

```bash
node scripts/seed_sanity.mjs
```

---

## 🔐 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | Your Sanity project ID | ✅ |
| `NEXT_PUBLIC_SANITY_DATASET` | Dataset name (e.g. `production`) | ✅ |
| `NEXT_PUBLIC_SANITY_API_VERSION` | API version date | ✅ |
| `SANITY_API_TOKEN` | Write token for server-side mutations | ✅ |

Get your credentials from [sanity.io/manage](https://sanity.io/manage).

---

## 🎨 Sanity CMS

All content is managed through Sanity. The embedded Studio is available at `/studio`.

### Schemas

| Schema | Purpose |
|--------|---------|
| `product` | Products with price, specs, images |
| `category` | Product categories |
| `order` | Customer orders |
| `user` | Registered users |
| `itService` | IT service listings |
| `review` | Product reviews |
| `coupon` | Discount coupons |
| `vendor` | Suppliers & vendors |
| `siteSettings` | Global site config |

---

## 🖥️ Admin Dashboard

Access the admin panel at `/admin`. Features include:

- 📊 **Analytics** — Sales, orders, revenue overview
- 📦 **Products** — Add, edit, delete products
- 🛒 **Orders** — View and update order statuses
- 👥 **Customers** — Manage registered users
- 🏷️ **Coupons** — Create discount codes
- ⭐ **Reviews** — Approve or reject reviews
- 🤝 **Vendors** — Manage suppliers
- ⚙️ **Settings** — Announcement bar, shipping threshold

---

## 🛠️ IT & Software Services

Visit `/services` to see all available IT & software services:

- 🌐 **Web Development** — Next.js, React, Node.js
- 📱 **Mobile App Development** — React Native, Flutter
- 🛒 **E-Commerce Solutions** — Full store setup
- 💳 **Payment Gateway** — JazzCash, Easypaisa, Stripe, PayPal
- 🎨 **UI/UX Design** — Figma, design systems
- ☁️ **Cloud & DevOps** — AWS, Vercel, DigitalOcean
- 📈 **Digital Marketing** — SEO, Google Ads, Social Media
- 🎧 **IT Support** — Remote & on-site support

---

## 🚢 Deployment

### Vercel (Recommended)

```bash
npm run build
```

Deploy on [Vercel](https://vercel.com) — connect your GitHub repo and add the environment variables in the Vercel dashboard.

### Build Locally

```bash
npm run build
npm run start
```

---

## 📞 Contact

**QuantumByte Technologies**  
📧 support@quantumbytetech.com  
🌐 [quantumbytetech.com](https://quantumbytetech.com)  
📱 WhatsApp: Available on site

---

*Built with ❤️ by the QuantumByte Technologies team*
