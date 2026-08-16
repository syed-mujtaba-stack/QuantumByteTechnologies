import React from 'react';
import Link from 'next/link';
import { Navbar } from '@/app/components/Navbar';
import { Footer } from '@/app/components/Footer';
import { CartDrawer } from '@/app/components/CartDrawer';
import type { Metadata } from 'next';
import {
  ShieldCheck,
  ChevronRight,
  CheckCircle2,
  XCircle,
  Clock,
  Phone,
  Mail,
  Package,
  Wrench,
  Truck,
  ArrowRight,
  AlertTriangle,
  FileText,
  HardDrive,
  Cpu,
  RefreshCw,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Warranty Policy | QuantumByte Technologies',
  description:
    '1-Year QuantumByte hardware warranty on all products. Covers manufacturer defects, DOA, build workmanship, and component failures. Free repair or replacement. Free return shipping on warranty claims.',
};

const coverageItems = [
  { covered: true, text: 'Manufacturer component failures (GPU, CPU, RAM, SSD, PSU, motherboard, display)' },
  { covered: true, text: 'Custom PC build workmanship — assembly, cable routing, BIOS tuning' },
  { covered: true, text: 'Liquid cooling loop integrity (pump, fittings, radiator, reservoir)' },
  { covered: true, text: 'Dead-on-Arrival (DOA) hardware reported within 7 days of delivery' },
  { covered: true, text: 'Display defects — dead pixels exceeding manufacturer specification' },
  { covered: true, text: 'Storage failures not caused by physical damage or power surges' },
  { covered: true, text: 'Peripherals and accessories with manufacturing defects' },
  { covered: false, text: 'Physical damage, drops, liquid spills, or user-inflicted damage' },
  { covered: false, text: 'Damage from power surges, lightning, or improper electrical supply' },
  { covered: false, text: 'Consumables: thermal paste, coolant, fan bearings after normal wear' },
  { covered: false, text: 'Cosmetic damage — scratches, dents, discolouration that don\'t affect function' },
  { covered: false, text: 'Products opened, modified, or repaired by unauthorized parties' },
  { covered: false, text: 'Software, OS, drivers, or data loss of any kind' },
  { covered: false, text: 'Damage from overclocking beyond manufacturer specification (unless QB-built OC profile)' },
];

const manufacturerWarranties = [
  { brand: 'Apple', coverage: '1 Year International Limited Warranty', extend: 'AppleCare+ available' },
  { brand: 'ASUS ROG / ProArt', coverage: '3 Years (ROG) / 3 Years (ProArt)', extend: 'ASUS Premium Care available' },
  { brand: 'NVIDIA (Founders Edition)', coverage: '3 Years', extend: 'Register at nvidia.com' },
  { brand: 'Samsung (Storage / Display)', coverage: '3–5 Years', extend: 'Samsung Care+ available' },
  { brand: 'Corsair', coverage: '5 Years (RAM) / 3 Years (PSU/Case)', extend: 'corsair.com/warranty' },
  { brand: 'G.Skill', coverage: 'Lifetime (RAM)', extend: 'gskill.com/support' },
  { brand: 'WD / SanDisk', coverage: '3–5 Years (drive class)', extend: 'wd.com/warranty' },
  { brand: 'Seasonic / be quiet!', coverage: '7–12 Years (PSU)', extend: 'seasonic.com/warranty' },
  { brand: 'Anker / Baseus', coverage: '18 Months', extend: 'anker.com/support' },
  { brand: 'Logitech / Razer', coverage: '2 Years', extend: 'logitech.com/warranty' },
];

const claimSteps = [
  {
    step: '01',
    icon: Phone,
    title: 'Contact Support',
    desc: 'WhatsApp (+92 325 4803957) or email warranty@quantumbyte.tech with your Order ID, issue description, and photos or video clearly showing the defect.',
  },
  {
    step: '02',
    icon: Wrench,
    title: 'Remote Troubleshooting',
    desc: 'Our technician attempts remote diagnosis first. Many issues (BIOS settings, driver conflicts, loose connections) can be resolved without shipping the device.',
  },
  {
    step: '03',
    icon: Package,
    title: 'RMA & Free Pickup',
    desc: 'If hardware fault is confirmed, we issue an RMA number and arrange free insured courier pickup from your doorstep nationwide.',
  },
  {
    step: '04',
    icon: Cpu,
    title: 'Lab Diagnosis',
    desc: 'Our IPC-certified engineers perform component-level diagnosis within 3–5 business days and confirm warranty coverage.',
  },
  {
    step: '05',
    icon: RefreshCw,
    title: 'Repair or Replacement',
    desc: 'Covered faults are repaired or replaced at zero cost. Non-covered damage receives a transparent written quote before any work begins.',
  },
  {
    step: '06',
    icon: Truck,
    title: 'Free Return Shipping',
    desc: 'Repaired or replaced unit ships back to you free of charge in anti-static packaging, with updated warranty documentation.',
  },
];

const faqItems = [
  {
    q: 'How do I know if my product is still under warranty?',
    a: 'Warranty begins from the delivery date on your order. Log in to your account and view order details, or check your confirmation email. Your QB warranty period runs for 12 months from the delivery date.',
  },
  {
    q: 'What is the difference between QB Warranty and Manufacturer Warranty?',
    a: 'QB Warranty covers the product you received from us for 1 year from delivery and is handled directly by our team — you contact us, we handle everything. Manufacturer warranty is separate, brand-operated, and may require you to contact the brand directly for certain claim types (e.g., international Apple warranty). We assist with manufacturer claims as well.',
  },
  {
    q: 'Can I extend my warranty?',
    a: 'Extended warranty plans are coming soon. Currently, manufacturer-provided extensions (AppleCare+, ASUS Premium Care, Corsair extended) can be purchased and we can assist with registration. Sign up for our newsletter for updates on QB Extended Care plans.',
  },
  {
    q: 'My product arrived damaged — what do I do?',
    a: 'Shipping damage must be reported within 24 hours of delivery with photos of the outer packaging and product. Email claims@quantumbyte.tech immediately. If the outer box was visibly damaged, note "Damaged — Subject to Inspection" on the courier receipt before signing. We file the insurance claim and dispatch a replacement.',
  },
  {
    q: 'Does warranty transfer if I sell the product?',
    a: 'QB Warranty is non-transferable and applies to the original purchaser on the original order email. Manufacturer warranties may be transferable — refer to the specific brand policy.',
  },
];

export default function WarrantyPage() {
  return (
    <div className="min-h-screen bg-[#05070D] text-white flex flex-col font-sans selection:bg-[#3B82F6] selection:text-white">
      <Navbar />

      <main className="flex-1 py-12 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-20">

          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs text-[#94A3B8]">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="h-3 w-3 text-[#3B82F6]" />
            <span className="text-white font-bold">Warranty</span>
          </div>

          {/* Hero */}
          <section className="rounded-2xl border border-white/[0.06] bg-gradient-to-br from-[#080B12] via-[#05070D] to-[#080B12] p-8 lg:p-14 relative overflow-hidden">
            <div
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage:
                  'linear-gradient(#3B82F6 1px, transparent 1px), linear-gradient(90deg, #3B82F6 1px, transparent 1px)',
                backgroundSize: '80px 80px',
              }}
            />
            <div className="relative z-10 max-w-3xl space-y-6">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-[#3B82F6]/30 bg-[#3B82F6]/10 px-4 py-1.5 text-xs font-extrabold uppercase tracking-widest text-[#3B82F6]">
                <ShieldCheck className="h-3.5 w-3.5" /> 1-YEAR WARRANTY COVERAGE
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.05] tracking-tight text-white">
                YOUR PURCHASE IS <br />
                <span className="text-[#3B82F6]">PROTECTED</span>
              </h1>
              <p className="text-base text-[#94A3B8] max-w-xl leading-relaxed">
                Every product sold by QuantumByte Technologies includes a 1-year hardware warranty covering manufacturer
                defects, DOA hardware, and custom build workmanship. Zero hassle — we handle everything from pickup to return.
              </p>
              <div className="flex flex-wrap gap-6 pt-2 text-sm">
                {[
                  { label: 'Warranty Period', value: '1 Year from Delivery' },
                  { label: 'Claim Response', value: 'Within 24 Hours' },
                  { label: 'Return Shipping', value: 'Free (Both Ways)' },
                ].map(({ label, value }) => (
                  <div key={label} className="rounded-xl border border-[#3B82F6]/20 bg-[#3B82F6]/5 px-4 py-3">
                    <p className="text-[10px] font-extrabold uppercase tracking-widest text-[#64748b]">{label}</p>
                    <p className="font-black text-white text-sm mt-0.5">{value}</p>
                  </div>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <a
                  href="https://wa.me/923254803957?text=Hi%2C%20I%20want%20to%20file%20a%20warranty%20claim"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary inline-flex items-center justify-center gap-2"
                >
                  <Phone className="h-4.5 w-4.5" />
                  File a Warranty Claim
                  <ArrowRight className="h-4.5 w-4.5" />
                </a>
                <a
                  href="mailto:warranty@quantumbyte.tech"
                  className="btn btn-secondary inline-flex items-center justify-center gap-2"
                >
                  <Mail className="h-4.5 w-4.5" />
                  warranty@quantumbyte.tech
                </a>
              </div>
            </div>
          </section>

          {/* What's Covered */}
          <section>
            <div className="text-center space-y-3 mb-10">
              <h2 className="text-2xl sm:text-3xl font-black text-white">
                WHAT IS <span className="text-[#3B82F6]">COVERED</span>
              </h2>
              <p className="text-sm text-[#94A3B8] max-w-xl mx-auto">
                Clear, honest — no fine print surprises.
              </p>
            </div>
            <div className="rounded-2xl border border-white/[0.06] bg-[#080B12] overflow-hidden">
              <div className="grid grid-cols-1 divide-y divide-white/[0.04]">
                {coverageItems.map(({ covered, text }) => (
                  <div key={text} className="flex items-start gap-4 px-6 py-4">
                    {covered ? (
                      <CheckCircle2 className="h-5 w-5 shrink-0 mt-0.5 text-[#10b981]" />
                    ) : (
                      <XCircle className="h-5 w-5 shrink-0 mt-0.5 text-[#ef4444]" />
                    )}
                    <p className={`text-sm leading-relaxed ${covered ? 'text-white' : 'text-[#64748b]'}`}>{text}</p>
                    <span
                      className={`ml-auto shrink-0 rounded-full px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-wider ${
                        covered
                          ? 'bg-[#10b981]/10 text-[#10b981] border border-[#10b981]/20'
                          : 'bg-[#ef4444]/10 text-[#ef4444] border border-[#ef4444]/20'
                      }`}
                    >
                      {covered ? 'Covered' : 'Not Covered'}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Claim Process */}
          <section>
            <div className="text-center space-y-3 mb-10">
              <h2 className="text-2xl sm:text-3xl font-black text-white">
                HOW TO <span className="text-[#3B82F6]">CLAIM</span>
              </h2>
              <p className="text-sm text-[#94A3B8] max-w-xl mx-auto">
                Six steps — all handled by us. You just need to contact us.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {claimSteps.map((step) => {
                const Icon = step.icon;
                return (
                  <div
                    key={step.step}
                    className="rounded-2xl border border-white/[0.06] bg-[#080B12] p-6 space-y-3"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-2xl font-black text-[#3B82F6]/30">{step.step}</span>
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#3B82F6]/10">
                        <Icon className="h-5 w-5 text-[#3B82F6]" />
                      </div>
                    </div>
                    <h3 className="font-bold text-white">{step.title}</h3>
                    <p className="text-xs text-[#64748b] leading-relaxed">{step.desc}</p>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Manufacturer Warranties */}
          <section>
            <div className="text-center space-y-3 mb-10">
              <h2 className="text-2xl sm:text-3xl font-black text-white">
                MANUFACTURER <span className="text-[#3B82F6]">WARRANTIES</span>
              </h2>
              <p className="text-sm text-[#94A3B8] max-w-xl mx-auto">
                On top of QB's 1-year warranty, every product also carries the manufacturer's own warranty.
              </p>
            </div>
            <div className="rounded-2xl border border-white/[0.06] bg-[#080B12] overflow-hidden">
              <div className="grid grid-cols-3 gap-0 px-6 py-3 border-b border-white/[0.06] text-[10px] font-extrabold uppercase tracking-widest text-[#64748b]">
                <span>Brand</span>
                <span>Coverage</span>
                <span>Extension</span>
              </div>
              {manufacturerWarranties.map(({ brand, coverage, extend }, idx) => (
                <div
                  key={brand}
                  className={`grid grid-cols-3 gap-0 px-6 py-4 text-sm ${
                    idx < manufacturerWarranties.length - 1 ? 'border-b border-white/[0.04]' : ''
                  }`}
                >
                  <span className="font-bold text-white">{brand}</span>
                  <span className="text-[#94a3b8]">{coverage}</span>
                  <span className="text-[#64748b] text-xs">{extend}</span>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section>
            <div className="text-center space-y-3 mb-10">
              <h2 className="text-2xl sm:text-3xl font-black text-white">
                WARRANTY <span className="text-[#3B82F6]">FAQ</span>
              </h2>
            </div>
            <div className="space-y-3 max-w-4xl mx-auto">
              {faqItems.map(({ q, a }) => (
                <div key={q} className="rounded-2xl border border-white/[0.06] bg-[#080B12] p-6 space-y-2">
                  <h3 className="font-bold text-white text-sm flex items-start gap-2">
                    <FileText className="h-4 w-4 shrink-0 mt-0.5 text-[#3B82F6]" />
                    {q}
                  </h3>
                  <p className="text-sm text-[#94a3b8] leading-relaxed pl-6">{a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Contact CTA */}
          <section className="rounded-2xl border border-[#3B82F6]/30 bg-[#3B82F6]/5 p-8 sm:p-12 text-center space-y-6">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#3B82F6]/10">
              <ShieldCheck className="h-8 w-8 text-[#3B82F6]" />
            </div>
            <div>
              <h2 className="text-2xl font-black text-white">Need to File a Claim?</h2>
              <p className="text-sm text-[#94A3B8] mt-2 max-w-md mx-auto">
                Contact our warranty team — we respond within 24 hours and handle the entire process for you.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="https://wa.me/923254803957?text=Hi%2C%20I%20want%20to%20file%20a%20warranty%20claim"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary inline-flex items-center gap-2"
              >
                <Phone className="h-4.5 w-4.5" />
                WhatsApp Support
              </a>
              <a
                href="mailto:warranty@quantumbyte.tech"
                className="btn btn-secondary inline-flex items-center gap-2"
              >
                <Mail className="h-4.5 w-4.5" />
                warranty@quantumbyte.tech
              </a>
              <Link href="/refund-policy" className="btn btn-outline inline-flex items-center gap-2">
                <AlertTriangle className="h-4.5 w-4.5" />
                View Return Policy
              </Link>
            </div>
          </section>

          {/* Footer note */}
          <p className="text-center text-xs text-[#475569]">
            Last updated: August 2026. For full legal terms see our{' '}
            <Link href="/terms" className="text-[#3B82F6] hover:underline">Terms & Conditions</Link> and{' '}
            <Link href="/refund-policy" className="text-[#3B82F6] hover:underline">Refund Policy</Link>.
            QuantumByte Technologies reserves the right to amend warranty terms — any changes will be published here.
          </p>

        </div>
      </main>

      <Footer />
      <CartDrawer />
    </div>
  );
}
