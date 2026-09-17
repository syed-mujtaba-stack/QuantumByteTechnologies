"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/app/context/CartContext";
import confetti from "canvas-confetti";
import { ServiceItem, services, getServiceBySlug } from "../servicesData";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Sparkles,
  Shield,
  Zap,
  Clock,
  MessageCircle,
  Phone,
  Mail,
  Send,
  Star,
  Check,
  ChevronDown,
  Layers,
  Award,
  HelpCircle,
} from "lucide-react";

interface Props {
  slug: string;
}

export function ServiceDetailClient({ slug }: Props) {
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const relatedServices = services
    .filter((s) => s.id !== service.id)
    .slice(0, 3);

  const { openBooking } = useCart();
  const [selectedPackage, setSelectedPackage] = useState<string>(
    service.packages[1]?.name || service.packages[0]?.name || ""
  );

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    packageChoice: selectedPackage,
    notes: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const handlePackageSelect = (pkgName: string) => {
    setSelectedPackage(pkgName);
    setFormData((prev) => ({ ...prev, packageChoice: pkgName }));
    const formEl = document.getElementById("inquiry-form");
    if (formEl) {
      formEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);

    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: [service.color, "#ffffff", "#06B6D4"],
      });
    } catch {}

    // Also offer WhatsApp direct redirect
    const whatsappMsg = `Hi QuantumByte Technologies, I want to book: ${service.title} (${formData.packageChoice || selectedPackage}).%0A%0AName: ${formData.name}%0APhone: ${formData.phone}%0AEmail: ${formData.email}%0ADetails: ${formData.notes || "N/A"}`;
    const whatsappUrl = `https://wa.me/923254803957?text=${whatsappMsg}`;

    // Auto open WhatsApp in new tab after brief delay
    setTimeout(() => {
      window.open(whatsappUrl, "_blank");
    }, 1200);
  };

  const Icon = service.icon;

  return (
    <div className="relative overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute -top-40 left-1/2 -translate-x-1/2 h-[600px] w-[800px] rounded-full blur-[140px] opacity-25"
          style={{ background: service.color }}
        />
        <div className="absolute top-[800px] -right-40 h-[500px] w-[500px] rounded-full bg-[#1E3A5F]/20 blur-[120px]" />
      </div>

      {/* ─── BREADCRUMBS ───────────────────────────────────────────────── */}
      <div className="relative border-b border-white/[0.05] bg-[#080B12]/80 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3.5">
          <nav className="flex items-center gap-2 text-xs text-[#64748B]" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight className="h-3 w-3 text-[#475569]" />
            <Link href="/services" className="hover:text-white transition-colors">
              Services
            </Link>
            <ChevronRight className="h-3 w-3 text-[#475569]" />
            <span className="text-white font-semibold truncate">{service.title}</span>
          </nav>
        </div>
      </div>

      {/* ─── HERO SECTION ──────────────────────────────────────────────── */}
      <section className="relative pt-10 pb-16 lg:pt-14 lg:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              {/* Category & Badge */}
              <div className="flex flex-wrap items-center gap-2.5">
                <span
                  className="inline-flex items-center gap-1.5 rounded-xl border px-3 py-1 text-xs font-bold uppercase tracking-wider"
                  style={{
                    borderColor: `${service.color}40`,
                    background: service.colorSubtle,
                    color: service.color,
                  }}
                >
                  <Icon className="h-3.5 w-3.5" />
                  {service.category}
                </span>

                {service.badge && (
                  <span className="inline-flex items-center gap-1 rounded-xl bg-[#F59E0B]/15 border border-[#F59E0B]/30 px-3 py-1 text-xs font-bold text-[#FBBF24]">
                    <Star className="h-3 w-3 fill-current" />
                    {service.badge}
                  </span>
                )}

                <span className="inline-flex items-center gap-1 rounded-xl bg-white/[0.03] border border-white/[0.06] px-2.5 py-1 text-xs font-medium text-[#94A3B8]">
                  <Clock className="h-3 w-3 text-[#3B82F6]" />
                  {service.turnaround}
                </span>
              </div>

              {/* Main Heading */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-[1.12]">
                {service.title}
              </h1>

              {/* Subtitle */}
              <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed max-w-2xl">
                {service.subtitle}
              </p>

              {/* Key Highlights Chips */}
              <div className="flex flex-wrap gap-2.5 pt-1">
                {service.highlights.map(({ icon: HIcon, label }) => (
                  <div
                    key={label}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-xl border border-white/[0.07] bg-white/[0.02] text-xs font-semibold text-white/90"
                  >
                    <HIcon className="h-3.5 w-3.5" style={{ color: service.color }} />
                    {label}
                  </div>
                ))}
              </div>

              {/* Pricing & CTA Buttons */}
              <div className="pt-4 flex flex-col sm:flex-row sm:items-center gap-4">
                <div className="pr-4 sm:border-r sm:border-white/[0.1]">
                  <span className="text-[11px] font-medium text-[#64748B] uppercase tracking-wider block">
                    {service.priceLabel}
                  </span>
                  <span className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                    {service.price}
                  </span>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href="#packages"
                    className="flex items-center justify-center gap-2 rounded-xl px-6 h-12 text-sm font-bold text-white transition-all duration-200 hover:shadow-lg active:scale-[0.98]"
                    style={{
                      background: `linear-gradient(135deg, ${service.color}, #1D4ED8)`,
                      boxShadow: `0 0 25px ${service.colorGlow}`,
                    }}
                  >
                    View Packages
                    <ArrowRight className="h-4 w-4" />
                  </a>

                  <a
                    href="https://wa.me/923254803957?text=Hi%20QuantumByte,%20I'm%20interested%20in%20your%20IT%20Service:%20"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 rounded-xl px-5 h-12 text-sm font-semibold border border-white/[0.1] bg-white/[0.03] text-white hover:bg-white/[0.08] hover:border-white/[0.2] transition-all duration-200"
                  >
                    <MessageCircle className="h-4 w-4 text-[#25D366]" />
                    Chat on WhatsApp
                  </a>
                </div>
              </div>

              {/* Trust Indicators */}
              <div className="pt-2 flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-[#64748B]">
                <div className="flex items-center gap-1.5">
                  <Shield className="h-3.5 w-3.5 text-[#3B82F6]" />
                  <span>100% IP & Source Ownership</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Award className="h-3.5 w-3.5 text-[#10B981]" />
                  <span>Free Initial Consultation</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Zap className="h-3.5 w-3.5 text-[#F59E0B]" />
                  <span>Direct WhatsApp Updates</span>
                </div>
              </div>
            </div>

            {/* Right Showcase Card */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl border border-white/[0.1] bg-gradient-to-b from-white/[0.05] to-transparent p-3 shadow-2xl backdrop-blur-xl">
                <div className="relative h-72 sm:h-96 w-full rounded-2xl overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080B12] via-transparent to-transparent opacity-80" />

                  {/* Floating badge inside image */}
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl border border-white/[0.1] bg-[#0B0F18]/90 backdrop-blur-md">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs text-[#94A3B8]">Certified Enterprise Delivery</p>
                        <p className="text-sm font-bold text-white">QuantumByte Tech Lab</p>
                      </div>
                      <div className="flex items-center gap-1 text-xs font-bold text-[#F59E0B]">
                        <Star className="h-3.5 w-3.5 fill-current" />
                        <span>4.9 / 5.0</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── DETAILED OVERVIEW ─────────────────────────────────────────── */}
      <section className="relative py-16 bg-[#080B12] border-y border-white/[0.06]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span
              className="text-xs font-bold uppercase tracking-wider mb-2 block"
              style={{ color: service.color }}
            >
              Comprehensive Scope
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-5">
              About This Service
            </h2>
            <p className="text-[#94A3B8] leading-relaxed text-base sm:text-lg mb-8">
              {service.fullDescription}
            </p>
          </div>

          {/* Key Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-4">
            {service.features.map((feat, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 p-4 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:border-white/[0.12] transition-all duration-200"
              >
                <div
                  className="flex h-7 w-7 items-center justify-center rounded-lg shrink-0 mt-0.5"
                  style={{ background: service.colorSubtle }}
                >
                  <Check className="h-4 w-4" style={{ color: service.color }} />
                </div>
                <span className="text-sm font-medium text-white/90 leading-snug">{feat}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SPECIAL FEATURED OFFER (e.g. 35,000 PKR E-Commerce & Merchant Setup) ─── */}
      {service.specialOffer && (
        <section className="relative py-16 bg-gradient-to-b from-[#060D18] via-[#0A1828] to-[#060D18] border-b border-white/[0.08] overflow-hidden">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="relative rounded-3xl border border-[#10B981]/30 bg-gradient-to-br from-[#0D1F2D]/90 to-[#0A131F]/95 p-6 sm:p-10 lg:p-12 shadow-2xl shadow-[#10B981]/10 backdrop-blur-xl overflow-hidden">
              {/* Top ambient glow */}
              <div className="absolute top-0 right-0 -mr-24 -mt-24 h-96 w-96 rounded-full bg-[#10B981]/15 blur-3xl pointer-events-none" />

              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
                <div className="lg:col-span-8 space-y-5">
                  {service.specialOffer.badge && (
                    <span className="inline-flex items-center gap-1.5 rounded-xl bg-[#10B981]/15 border border-[#10B981]/30 px-3.5 py-1 text-xs font-bold text-[#34D399]">
                      <Sparkles className="h-3.5 w-3.5" />
                      {service.specialOffer.badge}
                    </span>
                  )}

                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-tight">
                    {service.specialOffer.heading}
                  </h3>

                  <p className="text-sm sm:text-base font-semibold text-[#6EE7B7] leading-relaxed">
                    {service.specialOffer.subtitle}
                  </p>

                  <div className="space-y-4 pt-1">
                    <p className="text-sm sm:text-[15px] text-[#94A3B8] leading-relaxed">
                      {service.specialOffer.description}
                    </p>
                  </div>

                  {/* Key Benefits Checklist */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-3">
                    {service.specialOffer.benefits.map((benefit, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-white/90">
                        <CheckCircle2 className="h-4 w-4 text-[#10B981] shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right Callout Box */}
                <div className="lg:col-span-4 flex flex-col justify-center items-center text-center p-6 sm:p-8 rounded-2xl border border-white/[0.08] bg-black/40 backdrop-blur-md">
                  <span className="text-xs font-bold text-[#94A3B8] uppercase tracking-wider mb-1">
                    Flat Investment
                  </span>
                  <span className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-1">
                    {service.specialOffer.price}
                  </span>
                  {service.specialOffer.priceSubtext && (
                    <span className="text-[11px] font-medium text-[#6EE7B7] mb-6 leading-tight block">
                      {service.specialOffer.priceSubtext}
                    </span>
                  )}

                  <button
                    onClick={() => handlePackageSelect(service.specialOffer?.heading || "One-Time Setup for E-Commerce & Merchants")}
                    className="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#10B981] to-[#059669] h-12 text-sm font-bold text-white shadow-lg shadow-[#10B981]/25 hover:shadow-[#10B981]/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 mb-3"
                  >
                    <Send className="h-4 w-4" />
                    Book 35,000 PKR Setup
                  </button>

                  <a
                    href={`https://wa.me/923254803957?text=${encodeURIComponent(
                      "Hi QuantumByte Technologies, I want to book the One-Time Payment Gateway Setup for E-Commerce & Merchants (PKR 35,000). Please provide more details."
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 rounded-xl border border-white/[0.1] bg-white/[0.04] h-11 text-xs font-semibold text-white hover:bg-white/[0.08] transition-colors"
                  >
                    <MessageCircle className="h-4 w-4 text-[#25D366]" />
                    Inquire via WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ─── DELIVERABLES & TECH STACK ─────────────────────────────────── */}
      <section className="relative py-16 lg:py-24 bg-[#05070D]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* What you get */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span
                  className="text-xs font-bold uppercase tracking-wider block mb-1.5"
                  style={{ color: service.color }}
                >
                  What&apos;s Included
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  Project Deliverables
                </h3>
              </div>

              <div className="space-y-3 pt-2">
                {service.deliverables.map((deliv, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3.5 p-4 rounded-2xl border border-white/[0.06] bg-[#0B0F18]"
                  >
                    <CheckCircle2
                      className="h-5 w-5 shrink-0 mt-0.5"
                      style={{ color: service.color }}
                    />
                    <p className="text-sm text-[#94A3B8] leading-relaxed">{deliv}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-xs font-bold text-[#3B82F6] uppercase tracking-wider block mb-1.5">
                  Modern Architecture
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  Tech Stack &amp; Tools
                </h3>
              </div>

              <div className="p-6 rounded-3xl border border-white/[0.08] bg-[#0B0F18] space-y-4">
                <p className="text-xs text-[#64748B] leading-relaxed">
                  We only deploy robust, battle-tested technologies with high security and active long-term support.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {service.techStack.map((tech) => (
                    <div
                      key={tech.name}
                      className="flex flex-col p-3 rounded-xl border border-white/[0.05] bg-white/[0.02]"
                    >
                      <span className="text-[10px] font-bold text-[#64748B] uppercase tracking-wider">
                        {tech.tag}
                      </span>
                      <span className="text-sm font-semibold text-white">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── PACKAGES & PRICING ────────────────────────────────────────── */}
      <section id="packages" className="relative py-16 lg:py-24 bg-[#080B12] border-y border-white/[0.06]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span
              className="text-xs font-bold uppercase tracking-wider block mb-2"
              style={{ color: service.color }}
            >
              Transparent Pricing
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-4">
              Select Your Package Tier
            </h2>
            <p className="text-sm text-[#94A3B8]">
              No hidden fees. Every tier includes source code rights, deployment, and dedicated warranty support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            {service.packages.map((pkg) => {
              const isSelected = selectedPackage === pkg.name;
              return (
                <div
                  key={pkg.name}
                  className={`relative flex flex-col rounded-3xl p-6 sm:p-8 transition-all duration-300 ${
                    pkg.popular
                      ? "border-2 border-[#3B82F6] bg-gradient-to-b from-[#1E3A5F]/20 to-[#0B0F18] shadow-2xl shadow-[#3B82F6]/10 scale-[1.02]"
                      : "border border-white/[0.08] bg-[#0B0F18] hover:border-white/[0.15]"
                  }`}
                >
                  {pkg.popular && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-[#3B82F6] to-[#2563EB] px-3.5 py-1 text-[11px] font-extrabold text-white uppercase tracking-wider shadow-lg">
                      <Sparkles className="h-3 w-3" />
                      Most Popular
                    </span>
                  )}

                  <div className="mb-6">
                    <h4 className="text-lg font-bold text-white mb-2">{pkg.name}</h4>
                    <p className="text-xs text-[#94A3B8] leading-relaxed min-h-[36px]">
                      {pkg.description}
                    </p>
                  </div>

                  <div className="mb-6 pb-6 border-b border-white/[0.08]">
                    <span className="text-3xl sm:text-4xl font-black text-white tracking-tight block">
                      {pkg.price}
                    </span>
                    <span className="text-xs text-[#64748B] flex items-center gap-1 mt-1">
                      <Clock className="h-3 w-3 text-[#3B82F6]" />
                      Turnaround: {pkg.turnaround}
                    </span>
                  </div>

                  <div className="space-y-3 flex-1 mb-8">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-[#475569]">
                      Features Included
                    </p>
                    {pkg.features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-[#94A3B8]">
                        <CheckCircle2
                          className="h-4 w-4 shrink-0 mt-0.5"
                          style={{ color: service.color }}
                        />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={() => handlePackageSelect(pkg.name)}
                    className={`w-full h-11 rounded-xl text-sm font-bold transition-all duration-200 ${
                      pkg.popular
                        ? "bg-gradient-to-r from-[#3B82F6] to-[#2563EB] text-white hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] active:scale-[0.98]"
                        : "border border-white/[0.12] bg-white/[0.04] text-white hover:bg-white/[0.08] hover:border-white/[0.2] active:scale-[0.98]"
                    }`}
                  >
                    {isSelected ? "Selected ✓" : "Choose This Plan"}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── INQUIRY & BOOKING FORM ─────────────────────────────────────── */}
      <section id="inquiry-form" className="relative py-16 lg:py-24 bg-[#05070D]">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-white/[0.1] bg-[#0B0F18] p-6 sm:p-10 lg:p-12 shadow-2xl relative overflow-hidden">
            {/* Accent top gradient line */}
            <div
              className="absolute top-0 inset-x-0 h-1"
              style={{ background: `linear-gradient(90deg, #3B82F6, ${service.color}, #06B6D4)` }}
            />

            <div className="text-center max-w-xl mx-auto mb-8">
              <span
                className="text-xs font-bold uppercase tracking-wider block mb-1"
                style={{ color: service.color }}
              >
                Direct Project Booking
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                Request a Custom Quote
              </h3>
              <p className="text-xs sm:text-sm text-[#94A3B8] mt-2">
                Fill this quick form and our lead engineer will contact you on WhatsApp within 30 minutes.
              </p>
            </div>

            {formSubmitted ? (
              <div className="text-center py-10 space-y-4 animate-scale-in">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#10B981]/20 border border-[#10B981]/30 text-[#10B981] mx-auto">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <h4 className="text-xl font-black text-white">Inquiry Received Successfully!</h4>
                <p className="text-sm text-[#94A3B8] max-w-md mx-auto">
                  Thank you, <span className="text-white font-semibold">{formData.name}</span>. We are opening WhatsApp now to connect you directly with our engineering lead.
                </p>
                <div className="pt-4">
                  <a
                    href="https://wa.me/923254803957"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-[#25D366] px-6 py-3 text-sm font-bold text-white shadow-lg hover:bg-[#20bd5a] transition-all"
                  >
                    <MessageCircle className="h-4 w-4" />
                    Open WhatsApp Chat Direct
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-[#94A3B8] block mb-1.5">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Ali Khan"
                      className="w-full h-11 rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 text-sm text-white placeholder-[#475569] outline-none focus:border-[#3B82F6]/50 focus:bg-white/[0.05] transition-all"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-[#94A3B8] block mb-1.5">
                      WhatsApp / Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. +92 325 4803957"
                      className="w-full h-11 rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 text-sm text-white placeholder-[#475569] outline-none focus:border-[#3B82F6]/50 focus:bg-white/[0.05] transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-[#94A3B8] block mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@company.com"
                      className="w-full h-11 rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 text-sm text-white placeholder-[#475569] outline-none focus:border-[#3B82F6]/50 focus:bg-white/[0.05] transition-all"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-[#94A3B8] block mb-1.5">
                      Chosen Package Tier
                    </label>
                    <select
                      value={formData.packageChoice}
                      onChange={(e) => {
                        setFormData({ ...formData, packageChoice: e.target.value });
                        setSelectedPackage(e.target.value);
                      }}
                      className="w-full h-11 rounded-xl border border-white/[0.08] bg-[#0E131F] px-4 text-sm text-white outline-none focus:border-[#3B82F6]/50 transition-all cursor-pointer"
                    >
                      {service.packages.map((pkg) => (
                        <option key={pkg.name} value={pkg.name}>
                          {pkg.name} — {pkg.price}
                        </option>
                      ))}
                      <option value="Custom Scope">Custom Scope / Consultation</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-[#94A3B8] block mb-1.5">
                    Project Requirements / Timeline
                  </label>
                  <textarea
                    rows={4}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="Briefly describe your project, preferred features, deadlines, or existing website..."
                    className="w-full rounded-xl border border-white/[0.08] bg-white/[0.03] p-4 text-sm text-white placeholder-[#475569] outline-none focus:border-[#3B82F6]/50 focus:bg-white/[0.05] transition-all resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#3B82F6] to-[#2563EB] h-12 text-sm font-bold text-white transition-all duration-200 hover:shadow-[0_0_25px_rgba(59,130,246,0.35)] active:scale-[0.99]"
                  >
                    <Send className="h-4 w-4" />
                    Submit &amp; Connect on WhatsApp
                  </button>
                </div>

                <p className="text-[11px] text-center text-[#475569] pt-1">
                  🔒 We respect your privacy. No spam. You will be connected directly with an engineer.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ─── FREQUENTLY ASKED QUESTIONS ────────────────────────────────── */}
      {service.faqs && service.faqs.length > 0 && (
        <section className="relative py-16 bg-[#080B12] border-t border-white/[0.06]">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-xl mx-auto mb-10">
              <span
                className="text-xs font-bold uppercase tracking-wider block mb-1.5"
                style={{ color: service.color }}
              >
                Questions Answered
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Frequently Asked Questions
              </h3>
            </div>

            <div className="space-y-3">
              {service.faqs.map((faq, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div
                    key={idx}
                    className="rounded-2xl border border-white/[0.06] bg-[#0B0F18] overflow-hidden transition-all duration-200"
                  >
                    <button
                      onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                      className="w-full flex items-center justify-between p-5 text-left text-sm sm:text-base font-semibold text-white hover:text-[#3B82F6] transition-colors"
                      aria-expanded={isOpen}
                    >
                      <span>{faq.q}</span>
                      <ChevronDown
                        className={`h-4 w-4 shrink-0 text-[#64748B] transition-transform duration-200 ${
                          isOpen ? "rotate-180 text-[#3B82F6]" : ""
                        }`}
                      />
                    </button>

                    {isOpen && (
                      <div className="px-5 pb-5 text-xs sm:text-sm text-[#94A3B8] leading-relaxed border-t border-white/[0.04] pt-3 animate-fade-in">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* ─── OTHER SERVICES ────────────────────────────────────────────── */}
      <section className="relative py-16 lg:py-20 bg-[#05070D] border-t border-white/[0.06]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-xs font-bold text-[#3B82F6] uppercase tracking-wider block mb-1">
                Explore More
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Other IT Services
              </h3>
            </div>
            <Link
              href="/services"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#3B82F6] hover:text-[#60A5FA] transition-colors"
            >
              View All 8 Services
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedServices.map((rel) => {
              const RelIcon = rel.icon;
              return (
                <Link
                  key={rel.id}
                  href={`/services/${rel.slug}`}
                  className="group rounded-2xl border border-white/[0.07] bg-[#0B0F18] p-6 hover:border-white/[0.15] hover:bg-[#0E1322] transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div
                        className="flex h-10 w-10 items-center justify-center rounded-xl"
                        style={{ background: rel.colorSubtle }}
                      >
                        <RelIcon className="h-5 w-5" style={{ color: rel.color }} />
                      </div>
                      <span className="text-[11px] font-bold text-[#64748B] uppercase tracking-wider">
                        {rel.category}
                      </span>
                    </div>
                    <h4 className="text-base font-bold text-white mb-2 group-hover:text-[#3B82F6] transition-colors">
                      {rel.title}
                    </h4>
                    <p className="text-xs text-[#64748B] line-clamp-2 leading-relaxed mb-4">
                      {rel.subtitle}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/[0.05] flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-[#475569] block">Starting from</span>
                      <span className="text-sm font-bold text-white">{rel.price}</span>
                    </div>
                    <span className="text-xs font-bold text-[#3B82F6] group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                      Details &rarr;
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
