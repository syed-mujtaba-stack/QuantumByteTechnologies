"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { GSAPReveal, GSAPFadeIn, GSAPHoverTilt } from "@/app/components/GSAPWrapper";
import { useCart } from "@/app/context/CartContext";
import {
  Globe,
  Smartphone,
  ShoppingBag,
  CreditCard,
  Palette,
  Cloud,
  TrendingUp,
  Headphones,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Wrench,
  ArrowUpRight,
  Star,
  Zap,
  Shield,
  Users,
  Code2,
  Server,
  BarChart3,
  Layers,
  Lock,
  Repeat,
  Send,
} from "lucide-react";

/* ─────────────────────────────── DATA ─────────────────────────────── */
const services = [
  {
    id: "web-development",
    category: "Development",
    badge: null,
    icon: Globe,
    color: "#3B82F6",
    colorSubtle: "rgba(59,130,246,0.08)",
    colorGlow: "rgba(59,130,246,0.25)",
    title: "Web Development",
    subtitle:
      "Custom, high-performance websites and web applications built on modern stacks — React, Next.js, Node.js, and more. From landing pages to enterprise portals.",
    image: "/images/services/service_web_mobile.jpg",
    priceLabel: "Starting from",
    price: "PKR 25,000",
    features: [
      "Custom responsive design",
      "Next.js / React / Node.js",
      "SEO-optimized architecture",
      "Fast page load & Core Web Vitals",
      "Admin dashboard integration",
      "Ongoing support & maintenance",
    ],
    highlights: [
      { icon: Zap,    label: "Fast Delivery" },
      { icon: Shield, label: "Secure Code"   },
      { icon: Code2,  label: "Clean Stack"   },
    ],
  },
  {
    id: "mobile-apps",
    category: "Mobile",
    badge: "Popular",
    icon: Smartphone,
    color: "#8B5CF6",
    colorSubtle: "rgba(139,92,246,0.08)",
    colorGlow: "rgba(139,92,246,0.25)",
    title: "Mobile App Development",
    subtitle:
      "iOS and Android apps built with React Native and Flutter. Pixel-perfect UI, smooth UX, and seamless backend integrations for your business needs.",
    image: "/images/services/service_web_mobile.jpg",
    priceLabel: "Starting from",
    price: "PKR 40,000",
    features: [
      "Cross-platform (iOS & Android)",
      "React Native / Flutter",
      "Push notifications & offline mode",
      "App Store & Play Store submission",
      "Backend API integration",
      "Performance optimization",
    ],
    highlights: [
      { icon: Smartphone, label: "Cross-Platform" },
      { icon: Zap,        label: "60fps UI"        },
      { icon: Shield,     label: "Secure Auth"     },
    ],
  },
  {
    id: "ecommerce",
    category: "E-Commerce",
    badge: "In Demand",
    icon: ShoppingBag,
    color: "#06B6D4",
    colorSubtle: "rgba(6,182,212,0.08)",
    colorGlow: "rgba(6,182,212,0.25)",
    title: "E-Commerce Solutions",
    subtitle:
      "Complete online store setups — product catalog, cart, checkout, inventory management, and multi-vendor support. We build stores that convert visitors into buyers.",
    image: "/images/services/service_ecommerce_payment.jpg",
    priceLabel: "Starting from",
    price: "PKR 35,000",
    features: [
      "Custom storefront design",
      "Product & inventory management",
      "Multi-vendor marketplace support",
      "Order tracking & management",
      "Discount & coupon engine",
      "Analytics & sales dashboard",
    ],
    highlights: [
      { icon: ShoppingBag, label: "Full Store"    },
      { icon: BarChart3,   label: "Analytics"    },
      { icon: Users,       label: "Multi-Vendor" },
    ],
  },
  {
    id: "payment-gateway",
    category: "Payments",
    badge: null,
    icon: CreditCard,
    color: "#10B981",
    colorSubtle: "rgba(16,185,129,0.08)",
    colorGlow: "rgba(16,185,129,0.25)",
    title: "Payment Gateway Integration",
    subtitle:
      "Secure, PCI-compliant payment integration for your website or app. We support JazzCash, Easypaisa, Stripe, PayPal, HBL, and custom bank APIs.",
    image: "/images/services/service_ecommerce_payment.jpg",
    priceLabel: "Starting from",
    price: "PKR 15,000",
    features: [
      "JazzCash & Easypaisa integration",
      "Stripe & PayPal support",
      "Bank transfer & HBL API",
      "Secure SSL & 3DS verification",
      "Webhook & callback handling",
      "Refund & dispute management",
    ],
    highlights: [
      { icon: Lock,    label: "PCI Secure"  },
      { icon: Repeat,  label: "Auto Refund" },
      { icon: Send,    label: "Instant Pay" },
    ],
  },
  {
    id: "uiux-design",
    category: "Design",
    badge: null,
    icon: Palette,
    color: "#F59E0B",
    colorSubtle: "rgba(245,158,11,0.08)",
    colorGlow: "rgba(245,158,11,0.25)",
    title: "UI / UX Design & Branding",
    subtitle:
      "Beautiful, conversion-focused designs using Figma. From brand identity and logo design to complete design systems, wireframes, and interactive prototypes.",
    image: "/images/services/service_uiux_design.jpg",
    priceLabel: "Starting from",
    price: "PKR 12,000",
    features: [
      "Brand identity & logo design",
      "Figma wireframes & prototypes",
      "Design system creation",
      "Mobile & desktop UI screens",
      "User research & journey mapping",
      "Handoff-ready developer specs",
    ],
    highlights: [
      { icon: Palette, label: "Brand Identity" },
      { icon: Layers,  label: "Design System" },
      { icon: Zap,     label: "Fast Turnaround" },
    ],
  },
  {
    id: "cloud-hosting",
    category: "Cloud",
    badge: null,
    icon: Cloud,
    color: "#06B6D4",
    colorSubtle: "rgba(6,182,212,0.08)",
    colorGlow: "rgba(6,182,212,0.25)",
    title: "Cloud Hosting & DevOps",
    subtitle:
      "Scalable cloud infrastructure on AWS, Vercel, and DigitalOcean. We handle deployment, CI/CD pipelines, monitoring, and 99.9% uptime guarantees.",
    image: "/images/services/service_cloud_marketing.jpg",
    priceLabel: "Starting from",
    price: "PKR 10,000 / mo",
    features: [
      "AWS / Vercel / DigitalOcean setup",
      "CI/CD pipeline automation",
      "SSL, CDN & domain management",
      "Auto-scaling & load balancing",
      "24/7 uptime monitoring",
      "Backup & disaster recovery",
    ],
    highlights: [
      { icon: Server,  label: "99.9% Uptime" },
      { icon: Shield,  label: "DDoS Protect" },
      { icon: Zap,     label: "Auto-Scale"   },
    ],
  },
  {
    id: "digital-marketing",
    category: "Marketing",
    badge: null,
    icon: TrendingUp,
    color: "#EF4444",
    colorSubtle: "rgba(239,68,68,0.08)",
    colorGlow: "rgba(239,68,68,0.25)",
    title: "Digital Marketing & SEO",
    subtitle:
      "Data-driven digital marketing — SEO, Google Ads, Facebook & Instagram campaigns, content marketing, and social media management to grow your online presence.",
    image: "/images/services/service_cloud_marketing.jpg",
    priceLabel: "Starting from",
    price: "PKR 15,000 / mo",
    features: [
      "Technical & on-page SEO",
      "Google Ads & PPC campaigns",
      "Facebook & Instagram Ads",
      "Social media management",
      "Content strategy & copywriting",
      "Monthly analytics reports",
    ],
    highlights: [
      { icon: TrendingUp, label: "More Traffic"    },
      { icon: BarChart3,  label: "ROI Tracking"   },
      { icon: Users,      label: "Audience Growth" },
    ],
  },
  {
    id: "it-support",
    category: "Support",
    badge: null,
    icon: Headphones,
    color: "#8B5CF6",
    colorSubtle: "rgba(139,92,246,0.08)",
    colorGlow: "rgba(139,92,246,0.25)",
    title: "IT Support & Consultation",
    subtitle:
      "Dedicated IT support plans for businesses — hardware troubleshooting, software setup, network configuration, staff training, and strategic tech consulting.",
    image: "/images/services/service_uiux_design.jpg",
    priceLabel: "Starting from",
    price: "PKR 8,000 / mo",
    features: [
      "Remote & on-site IT support",
      "Hardware & software troubleshooting",
      "Network setup & configuration",
      "Cybersecurity audits",
      "Staff training & onboarding",
      "Strategic IT roadmap planning",
    ],
    highlights: [
      { icon: Headphones, label: "24/7 Support"  },
      { icon: Shield,     label: "Cyber-Secure"  },
      { icon: Users,      label: "Team Training" },
    ],
  },
];

const processSteps = [
  { step: "01", title: "Discovery Call",       desc: "We understand your goals, timeline, and budget in a free 30-minute consultation." },
  { step: "02", title: "Proposal & Scoping",   desc: "Detailed project scope, timeline, milestones, and a transparent fixed-price quote." },
  { step: "03", title: "Design & Build",       desc: "Iterative development with regular check-ins so you always know what is happening." },
  { step: "04", title: "Launch & Support",     desc: "Smooth deployment, handover documentation, and ongoing support packages." },
];

const techStack = [
  "Next.js", "React", "Node.js", "TypeScript", "React Native", "Flutter",
  "Figma", "AWS", "Vercel", "Stripe", "JazzCash", "Easypaisa",
  "MongoDB", "PostgreSQL", "Tailwind CSS", "GSAP",
];

/* ─────────────────────────────── COMPONENT ─────────────────────────── */
export function ServicesPageClient() {
  const { openBooking } = useCart();
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const categories = ["All", "Development", "Mobile", "E-Commerce", "Payments", "Design", "Cloud", "Marketing", "Support"];
  const filtered = activeFilter === "All" ? services : services.filter((s) => s.category === activeFilter);

  return (
    <>
      {/* ─── HERO ──────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#05070D] pt-28 pb-20 lg:pt-36 lg:pb-28">
        {/* background orbs */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 right-0 h-[600px] w-[600px] rounded-full bg-[#3B82F6]/[0.07] blur-[120px]" />
          <div className="absolute bottom-0 left-0 h-[500px] w-[500px] rounded-full bg-[#8B5CF6]/[0.06] blur-[100px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[400px] rounded-full bg-[#06B6D4]/[0.04] blur-[80px]" />
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#3B82F6]/20 to-transparent" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <GSAPFadeIn direction="down" delay={0.05}>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#3B82F6]/20 bg-[#3B82F6]/[0.06] px-4 py-1.5 backdrop-blur-xl mb-6">
              <Sparkles className="h-3.5 w-3.5 text-[#3B82F6]" />
              <span className="text-[11px] font-bold uppercase tracking-[0.1em] text-[#94A3B8]">
                QuantumByte Technologies
              </span>
              <span className="w-px h-3 bg-white/10" />
              <span className="text-[11px] text-[#64748B]">End-to-End IT & Software Services</span>
            </div>
          </GSAPFadeIn>

          <GSAPFadeIn direction="up" delay={0.15}>
            <h1 className="text-[2.8rem] sm:text-5xl lg:text-[3.5rem] xl:text-[4rem] font-black tracking-[-0.03em] leading-[1.08] text-white max-w-4xl mx-auto">
              We Build{" "}
              <span className="bg-gradient-to-r from-[#60A5FA] via-[#3B82F6] to-[#06B6D4] bg-clip-text text-transparent">
                Digital Products
              </span>{" "}
              <br className="hidden sm:block" />
              That Drive Real Growth
            </h1>
          </GSAPFadeIn>

          <GSAPFadeIn direction="up" delay={0.25}>
            <p className="mt-6 max-w-[52ch] mx-auto text-[15px] sm:text-[16px] text-[#94A3B8] leading-[1.75]">
              From a simple website to a full enterprise platform — we deliver web apps, mobile apps,
              e-commerce stores, payment gateways, and digital marketing under one roof.
            </p>
          </GSAPFadeIn>

          <GSAPFadeIn direction="up" delay={0.35}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-8">
              <button
                onClick={() => openBooking()}
                id="services-hero-cta"
                className="group relative flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#3B82F6] to-[#2563EB] text-[14px] font-bold text-white transition-all duration-300 hover:shadow-[0_0_32px_rgba(59,130,246,0.4)] hover:scale-[1.02] active:scale-[0.98] overflow-hidden"
              >
                <span className="absolute inset-0 bg-white/[0.08] opacity-0 group-hover:opacity-100 transition-opacity" />
                Get Free Consultation
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </button>
              <Link
                href="#services-grid"
                className="group flex items-center gap-2 px-7 py-3.5 rounded-xl border border-white/[0.1] bg-white/[0.03] backdrop-blur-sm text-[14px] font-medium text-white/70 hover:text-white hover:bg-white/[0.06] hover:border-white/[0.15] transition-all duration-300"
              >
                <Wrench className="h-4 w-4 text-[#3B82F6] shrink-0" />
                Browse All Services
                <ArrowUpRight className="h-3.5 w-3.5 text-[#475569] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </GSAPFadeIn>

          {/* Stats row */}
          <GSAPFadeIn direction="up" delay={0.45}>
            <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
              {[
                { value: "150+", label: "Projects Delivered"   },
                { value: "5,000+", label: "Happy Clients"     },
                { value: "8+",   label: "Years Experience"    },
                { value: "24/7", label: "Support Available"   },
              ].map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-white/[0.06] bg-white/[0.025] p-4 backdrop-blur-sm">
                  <p className="text-[1.75rem] font-black text-white leading-none">{stat.value}</p>
                  <p className="text-[11px] text-[#64748B] mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </GSAPFadeIn>
        </div>
      </section>

      {/* ─── FILTER BAR ────────────────────────────────────────────────── */}
      <section id="services-grid" className="sticky top-[56px] lg:top-[64px] z-30 bg-[#05070D]/90 backdrop-blur-xl border-b border-white/[0.06] py-3">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto scrollbar-none pb-0.5">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`shrink-0 px-4 py-1.5 rounded-full text-[12px] font-semibold transition-all duration-200 ${
                  activeFilter === cat
                    ? "bg-[#3B82F6] text-white shadow-[0_0_16px_rgba(59,130,246,0.4)]"
                    : "bg-white/[0.04] text-[#94A3B8] border border-white/[0.06] hover:bg-white/[0.07] hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SERVICES GRID ─────────────────────────────────────────────── */}
      <section className="relative bg-[#05070D] py-14 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-5">
            {filtered.map((service, index) => {
              const Icon = service.icon;
              const isReversed = index % 2 !== 0;
              return (
                <GSAPReveal key={service.id} direction="up" delay={0.05 + (index % 4) * 0.06} distance={24}>
                  <div className="group relative rounded-2xl border border-white/[0.06] bg-[#0B0F18] overflow-hidden transition-all duration-300 hover:border-white/[0.1] hover:shadow-[0_8px_40px_rgba(0,0,0,0.4)]">
                    {/* subtle top glow line on hover */}
                    <div
                      className="absolute top-0 inset-x-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{ background: `linear-gradient(90deg, transparent, ${service.color}40, transparent)` }}
                    />

                    <div className="lg:grid lg:grid-cols-12 lg:items-stretch">
                      {/* Image column */}
                      <div className={`relative overflow-hidden lg:col-span-5 ${isReversed ? "lg:order-2" : "lg:order-1"}`}>
                        <div className="relative h-52 sm:h-60 lg:h-full lg:min-h-[300px]">
                          <Image
                            src={service.image}
                            alt={service.title}
                            fill
                            sizes="(max-width: 1024px) 100vw, 42vw"
                            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F18]/60 to-transparent lg:hidden" />
                          <div
                            className={`hidden lg:block absolute inset-0 ${
                              isReversed
                                ? "bg-gradient-to-l from-[#0B0F18]/30 to-transparent"
                                : "bg-gradient-to-r from-transparent to-[#0B0F18]/30"
                            }`}
                          />

                          {/* Badge */}
                          {service.badge && (
                            <span className="absolute left-3 top-3 z-10 inline-flex items-center gap-1 rounded-lg bg-[#F59E0B]/90 px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-wider text-white shadow-lg">
                              <Star className="h-3 w-3 fill-current" />
                              {service.badge}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Content column */}
                      <div className={`lg:col-span-7 p-5 sm:p-7 lg:p-10 flex flex-col justify-center ${isReversed ? "lg:order-1" : "lg:order-2"}`}>
                        {/* category pill */}
                        <div className="flex items-center gap-2 mb-4">
                          <div
                            className="flex h-8 w-8 items-center justify-center rounded-lg"
                            style={{ background: service.colorSubtle }}
                          >
                            <Icon className="h-4 w-4" style={{ color: service.color }} aria-hidden />
                          </div>
                          <span
                            className="text-[11px] font-bold uppercase tracking-[0.1em]"
                            style={{ color: service.color + "CC" }}
                          >
                            {service.category}
                          </span>
                        </div>

                        {/* Title */}
                        <h2 className="text-xl sm:text-2xl lg:text-[1.65rem] font-black tracking-[-0.02em] text-white leading-tight mb-3">
                          {service.title}
                        </h2>

                        {/* Subtitle */}
                        <p className="text-[13.5px] text-[#64748B] leading-relaxed mb-5 max-w-xl">
                          {service.subtitle}
                        </p>

                        {/* Highlights chips */}
                        <div className="flex flex-wrap gap-2 mb-5">
                          {service.highlights.map(({ icon: HIcon, label }) => (
                            <div
                              key={label}
                              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-[11px] font-semibold text-[#94A3B8] transition-all duration-200"
                              style={{ borderColor: service.color + "25", background: service.colorSubtle }}
                            >
                              <HIcon className="h-3 w-3" style={{ color: service.color }} />
                              {label}
                            </div>
                          ))}
                        </div>

                        {/* Features */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1.5 mb-7">
                          {service.features.map((feat, i) => (
                            <div key={i} className="flex items-start gap-2 text-[12.5px] text-[#94A3B8]">
                              <CheckCircle2
                                className="h-3.5 w-3.5 shrink-0 mt-[1px]"
                                style={{ color: service.color + "88" }}
                              />
                              <span className="leading-snug">{feat}</span>
                            </div>
                          ))}
                        </div>

                        {/* Price & CTA */}
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-5 border-t border-white/[0.05]">
                          <div>
                            <span className="text-[10px] font-semibold text-[#475569] uppercase tracking-wider block mb-0.5">
                              {service.priceLabel}
                            </span>
                            <span className="text-[1.5rem] font-black text-white tracking-tight leading-none">
                              {service.price}
                            </span>
                          </div>
                          <button
                            id={`book-${service.id}`}
                            onClick={() => openBooking()}
                            className="group/btn inline-flex items-center justify-center gap-2 rounded-xl px-6 py-2.5 text-[13px] font-bold text-white transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                            style={{
                              background: `linear-gradient(135deg, ${service.color}, ${service.color}CC)`,
                              boxShadow: `0 0 0 rgba(0,0,0,0)`,
                            }}
                            onMouseEnter={(e) => {
                              (e.currentTarget as HTMLButtonElement).style.boxShadow = `0 0 24px ${service.colorGlow}`;
                            }}
                            onMouseLeave={(e) => {
                              (e.currentTarget as HTMLButtonElement).style.boxShadow = `0 0 0 rgba(0,0,0,0)`;
                            }}
                          >
                            Book This Service
                            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover/btn:translate-x-0.5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </GSAPReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── HOW WE WORK ───────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#080B12] border-y border-white/[0.06] py-16 lg:py-24">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-24 right-0 h-[500px] w-[500px] rounded-full bg-[#3B82F6]/[0.06] blur-[100px]" />
          <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-[#8B5CF6]/[0.05] blur-[90px]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <GSAPReveal direction="down" delay={0.05}>
              <div className="inline-flex items-center gap-1.5 rounded-full border border-[#3B82F6]/20 bg-[#3B82F6]/[0.06] px-4 py-1 text-[11px] font-bold uppercase tracking-[0.1em] text-[#3B82F6] mb-4">
                <Wrench className="h-3 w-3" />
                Our Process
              </div>
            </GSAPReveal>
            <GSAPReveal direction="up" delay={0.1}>
              <h2 className="text-[1.85rem] sm:text-4xl lg:text-[2.5rem] font-black tracking-[-0.03em] leading-[1.1] text-white">
                How We{" "}
                <span className="bg-gradient-to-r from-[#60A5FA] via-[#3B82F6] to-[#06B6D4] bg-clip-text text-transparent">
                  Deliver
                </span>
              </h2>
            </GSAPReveal>
            <GSAPReveal direction="up" delay={0.15}>
              <p className="mt-3 text-[14px] text-[#64748B] max-w-lg mx-auto leading-relaxed">
                A transparent, milestone-driven process so you always know what is happening with your project.
              </p>
            </GSAPReveal>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {processSteps.map((step, i) => (
              <GSAPReveal key={step.step} direction="up" delay={0.08 + i * 0.07} distance={20}>
                <GSAPHoverTilt>
                  <div className="relative rounded-2xl border border-white/[0.06] bg-[#0B0F18] p-6 h-full group hover:border-[#3B82F6]/20 transition-all duration-300">
                    <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-[#3B82F6]/20 to-transparent" />
                    <div className="text-[3rem] font-black text-white/[0.04] leading-none mb-4 select-none">
                      {step.step}
                    </div>
                    <h3 className="text-[15px] font-black text-white mb-2">{step.title}</h3>
                    <p className="text-[12.5px] text-[#64748B] leading-relaxed">{step.desc}</p>
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 rounded-b-2xl bg-gradient-to-r from-[#3B82F6]/0 via-[#3B82F6]/40 to-[#3B82F6]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </GSAPHoverTilt>
              </GSAPReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TECH STACK ────────────────────────────────────────────────── */}
      <section className="bg-[#05070D] py-14 lg:py-18">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <GSAPReveal direction="up" delay={0.05}>
            <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-[#475569] mb-6">
              Technologies We Use
            </p>
          </GSAPReveal>
          <GSAPReveal direction="up" delay={0.12}>
            <div className="flex flex-wrap justify-center gap-2.5">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 rounded-lg border border-white/[0.07] bg-white/[0.025] text-[12px] font-semibold text-[#94A3B8] hover:border-[#3B82F6]/25 hover:text-white hover:bg-[#3B82F6]/[0.05] transition-all duration-200 cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </GSAPReveal>
        </div>
      </section>

      {/* ─── CTA BANNER ────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#080B12] border-t border-white/[0.06] py-16 lg:py-24">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,rgba(59,130,246,0.07)_0%,transparent_100%)]" />
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#3B82F6]/25 to-transparent" />
        </div>

        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <GSAPReveal direction="up" delay={0.05}>
            <div className="inline-flex items-center gap-1.5 rounded-full border border-[#3B82F6]/20 bg-[#3B82F6]/[0.06] px-4 py-1 text-[11px] font-bold uppercase tracking-[0.1em] text-[#3B82F6] mb-6">
              <Sparkles className="h-3 w-3" />
              Ready to Start?
            </div>
          </GSAPReveal>

          <GSAPReveal direction="up" delay={0.12}>
            <h2 className="text-[2rem] sm:text-4xl lg:text-[2.8rem] font-black tracking-[-0.03em] leading-[1.1] text-white mb-5">
              Let&apos;s Build Something{" "}
              <span className="bg-gradient-to-r from-[#60A5FA] via-[#3B82F6] to-[#06B6D4] bg-clip-text text-transparent">
                Extraordinary
              </span>
            </h2>
          </GSAPReveal>

          <GSAPReveal direction="up" delay={0.18}>
            <p className="text-[14.5px] text-[#94A3B8] leading-[1.75] max-w-[50ch] mx-auto mb-8">
              Book a free 30-minute consultation. We will analyse your needs and recommend the
              best solution — no obligation, no pressure.
            </p>
          </GSAPReveal>

          <GSAPReveal direction="up" delay={0.24}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                id="services-bottom-cta"
                onClick={() => openBooking()}
                className="group relative flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-[#3B82F6] to-[#2563EB] text-[15px] font-bold text-white transition-all duration-300 hover:shadow-[0_0_40px_rgba(59,130,246,0.45)] hover:scale-[1.02] active:scale-[0.98] overflow-hidden"
              >
                <span className="absolute inset-0 bg-white/[0.08] opacity-0 group-hover:opacity-100 transition-opacity" />
                Book Free Consultation
                <ArrowRight className="h-4.5 w-4.5 transition-transform duration-300 group-hover:translate-x-0.5" />
              </button>
              <Link
                href="/contact"
                className="group flex items-center gap-2 px-8 py-4 rounded-xl border border-white/[0.1] bg-white/[0.03] text-[15px] font-medium text-white/70 hover:text-white hover:bg-white/[0.06] hover:border-white/[0.15] transition-all duration-300"
              >
                Contact Us
                <ArrowUpRight className="h-4 w-4 text-[#475569] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </GSAPReveal>
        </div>
      </section>
    </>
  );
}
