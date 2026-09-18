import React from 'react';
import Link from 'next/link';
import { Navbar } from '@/app/components/Navbar';
import { Footer } from '@/app/components/Footer';
import { CartDrawer } from '@/app/components/CartDrawer';
import type { Metadata } from 'next';
import {
  Newspaper,
  ChevronRight,
  Mail,
  Phone,
  Download,
  ExternalLink,
  CheckCircle2,
  Cpu,
  Award,
  Users,
  Truck,
  Building2,
  ShieldCheck,
  Zap,
  ArrowRight,
  MapPin,
  Globe,
  FileText,
  Image as ImageIcon,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Press & Media | QuantumByte Technologies',
  description:
    'Press kit, brand guidelines, media resources, and press contact for QuantumByte Technologies — Pakistan\'s premier high-performance hardware retailer and certified IT solutions provider.',
};

const companyFacts = [
  { icon: Award, label: 'Founded', value: '2018' },
  { icon: MapPin, label: 'Headquarters', value: 'Faisalabad, Pakistan' },
  { icon: Users, label: 'Team Size', value: '25+ Professionals' },
  { icon: Truck, label: 'Orders Delivered', value: '10,000+' },
  { icon: Building2, label: 'Brand Partnerships', value: '45+ Authorized' },
  { icon: Globe, label: 'Shipping Coverage', value: 'Nationwide Pakistan' },
  { icon: Cpu, label: 'Custom PCs Built', value: '2,500+' },
  { icon: ShieldCheck, label: 'Client Satisfaction', value: '99.9% CSAT' },
];

const pressHighlights = [
  {
    category: 'Company',
    title: 'QuantumByte Technologies Overview',
    desc: 'Founded in 2018 in Faisalabad, QuantumByte Technologies has grown from a local hardware retailer into Pakistan\'s most trusted high-performance computing brand — offering genuine products, custom PC assembly, enterprise IT infrastructure, software development, and IPC-certified hardware repair.',
  },
  {
    category: 'Products',
    title: 'Hardware Retail & Custom PC Assembly',
    desc: 'We carry 400+ SKUs across 8 categories: Gaming Desktops, Laptops, Smartphones, Chargers & GaN adapters, PC Components, Monitors, Gaming Accessories, and Networking. Our custom PC builds feature liquid cooling, cable management, 24-hour stress testing, and ISPM-15 wooden crate shipping.',
  },
  {
    category: 'Services',
    title: 'Enterprise IT & Software Development',
    desc: 'QuantumByte provides end-to-end enterprise IT: Cisco/Ubiquiti network deployment, Synology NAS, Active Directory, 24/7 managed support SLAs, and full-stack software development (Next.js, React, TypeScript, Sanity CMS, iOS/Android). Corporate clients in Faisalabad, Lahore, and Islamabad.',
  },
  {
    category: 'Technology',
    title: 'AI & High-Performance Computing',
    desc: 'From 2025, QuantumByte specializes in NVIDIA DGX workstations, dual-GPU render nodes, LLM training rigs, and inferencing servers — serving researchers, studios, and fintech firms requiring HPC-grade hardware and infrastructure.',
  },
];

const brandAssets = [
  {
    icon: ImageIcon,
    title: 'Primary Logo',
    desc: 'QUANTUMBYTE wordmark with circuit board icon. Available in light/dark/monochrome variants.',
    formats: ['SVG', 'PNG', 'PDF'],
  },
  {
    icon: Zap,
    title: 'Brand Color Palette',
    desc: 'Primary: #3B82F6 (electric blue). Background: #05070D. Accent: #10B981. Admin: #ff003c.',
    formats: ['ASE', 'SCSS', 'PDF'],
  },
  {
    icon: FileText,
    title: 'Brand Guidelines',
    desc: 'Typography, spacing, logo usage rules, approved color combinations, and don\'t-do examples.',
    formats: ['PDF'],
  },
  {
    icon: ImageIcon,
    title: 'Product Photography',
    desc: 'High-resolution studio shots and lifestyle imagery of flagship products and custom builds.',
    formats: ['JPG', 'TIFF'],
  },
  {
    icon: Download,
    title: 'Company Fact Sheet',
    desc: '2-page overview of QuantumByte history, milestones, services, team, and key statistics.',
    formats: ['PDF'],
  },
  {
    icon: Users,
    title: 'Executive Headshots',
    desc: 'Official portraits of CEO, CTO, and Head of Engineering for editorial use.',
    formats: ['JPG', 'PNG'],
  },
];

const coverageTopics = [
  'Pakistan tech retail market growth and authentic hardware supply chains',
  'Custom PC building culture in South Asia — gaming, creative, and AI workloads',
  'Hardware repair ecosystem and IPC certification in emerging markets',
  'Enterprise IT infrastructure modernization for SMBs in Pakistan',
  'AI / HPC workstation demand from fintech, media, and research sectors',
  'E-commerce logistics and COD ecosystem for tech hardware',
  'NVIDIA DGX and GPU compute adoption in South Asian enterprises',
  'Sustainable hardware lifecycle management and refurbishment ethics',
];

const socialLinks = [
  { label: 'X (Twitter)', handle: '@QuantumByteTech', href: '#', icon: Globe },
  { label: 'LinkedIn', handle: 'QuantumByte Technologies', href: '#', icon: Globe },
  { label: 'Instagram', handle: '@quantumbytetech', href: '#', icon: Globe },
  { label: 'YouTube', handle: 'QuantumByte Technologies', href: '#', icon: Globe },
];

export default function PressPage() {
  return (
    <div className="min-h-screen bg-[#05070D] text-white flex flex-col font-sans selection:bg-[#3B82F6] selection:text-white">
      <Navbar />

      <main className="flex-1 py-12 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-20">

          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs text-[#94A3B8]">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="h-3 w-3 text-[#3B82F6]" />
            <span className="text-white font-bold">Press & Media</span>
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
                <Newspaper className="h-3.5 w-3.5" /> PRESS & MEDIA KIT
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.05] tracking-tight text-white">
                MEDIA <span className="text-[#3B82F6]">RESOURCES</span>
                <br />& PRESS KIT
              </h1>
              <p className="text-base text-[#94A3B8] max-w-xl leading-relaxed">
                Welcome to the QuantumByte Technologies media center. Find company information, brand assets, press
                contacts, and everything you need for accurate editorial coverage.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <a
                  href="mailto:supportquantumbytetechnologies@gmail.com"
                  className="btn btn-primary inline-flex items-center justify-center gap-2"
                >
                  <Mail className="h-4.5 w-4.5" />
                  Contact Press Team
                  <ArrowRight className="h-4.5 w-4.5" />
                </a>
                <a
                  href="mailto:supportquantumbytetechnologies@gmail.com?subject=Press%20Kit%20Request"
                  className="btn btn-secondary inline-flex items-center justify-center gap-2"
                >
                  <Download className="h-4.5 w-4.5" />
                  Request Full Press Kit
                </a>
              </div>
            </div>
          </section>

          {/* Company Facts */}
          <section>
            <div className="text-center space-y-3 mb-10">
              <h2 className="text-2xl sm:text-3xl font-black text-white">
                COMPANY <span className="text-[#3B82F6]">AT A GLANCE</span>
              </h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {companyFacts.map(({ icon: Icon, label, value }) => (
                <div
                  key={label}
                  className="rounded-2xl border border-white/[0.06] bg-[#080B12] p-5 text-center space-y-2"
                >
                  <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-xl bg-[#3B82F6]/10">
                    <Icon className="h-5 w-5 text-[#3B82F6]" />
                  </div>
                  <p className="text-lg font-black text-white">{value}</p>
                  <p className="text-[11px] font-bold uppercase tracking-widest text-[#64748b]">{label}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Press Highlights */}
          <section>
            <div className="text-center space-y-3 mb-10">
              <h2 className="text-2xl sm:text-3xl font-black text-white">
                ABOUT <span className="text-[#3B82F6]">QUANTUMBYTE</span>
              </h2>
              <p className="text-sm text-[#94A3B8] max-w-xl mx-auto">
                Accurate, approved descriptions for editorial and press use.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {pressHighlights.map(({ category, title, desc }) => (
                <div
                  key={title}
                  className="rounded-2xl border border-white/[0.06] bg-[#080B12] p-6 space-y-3"
                >
                  <span className="inline-block rounded-full border border-[#3B82F6]/30 bg-[#3B82F6]/10 px-3 py-0.5 text-[10px] font-extrabold uppercase tracking-widest text-[#3B82F6]">
                    {category}
                  </span>
                  <h3 className="font-black text-white text-base">{title}</h3>
                  <p className="text-sm text-[#94a3b8] leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Brand Assets */}
          <section>
            <div className="text-center space-y-3 mb-10">
              <h2 className="text-2xl sm:text-3xl font-black text-white">
                BRAND <span className="text-[#3B82F6]">ASSETS</span>
              </h2>
              <p className="text-sm text-[#94A3B8] max-w-xl mx-auto">
                All assets available on request. Email supportquantumbytetechnologies@gmail.com with your publication name and intended use.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {brandAssets.map(({ icon: Icon, title, desc, formats }) => (
                <div
                  key={title}
                  className="rounded-2xl border border-white/[0.06] bg-[#080B12] p-5 space-y-4 flex flex-col"
                >
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#3B82F6]/10">
                      <Icon className="h-5 w-5 text-[#3B82F6]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-white text-sm">{title}</h3>
                      <p className="text-xs text-[#64748b] mt-1 leading-relaxed">{desc}</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1.5 mt-auto pt-3 border-t border-white/[0.04]">
                    {formats.map((fmt) => (
                      <span
                        key={fmt}
                        className="rounded-lg border border-white/[0.08] bg-white/[0.03] px-2.5 py-1 text-[10px] font-bold text-[#94a3b8] uppercase tracking-wider"
                      >
                        {fmt}
                      </span>
                    ))}
                    <a
                      href="mailto:supportquantumbytetechnologies@gmail.com?subject=Asset%20Request%3A%20Press%20Kit"
                      className="ml-auto flex items-center gap-1 text-[10px] font-bold text-[#3B82F6] hover:underline uppercase tracking-wider"
                    >
                      Request <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Coverage Topics */}
          <section>
            <div className="text-center space-y-3 mb-10">
              <h2 className="text-2xl sm:text-3xl font-black text-white">
                STORY <span className="text-[#3B82F6]">IDEAS</span>
              </h2>
              <p className="text-sm text-[#94A3B8] max-w-xl mx-auto">
                Topics where QuantumByte can contribute expert commentary, data, and interviews.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {coverageTopics.map((topic) => (
                <div
                  key={topic}
                  className="flex items-start gap-3 rounded-xl border border-white/[0.06] bg-[#080B12] px-5 py-4"
                >
                  <CheckCircle2 className="h-4.5 w-4.5 shrink-0 mt-0.5 text-[#3B82F6]" />
                  <p className="text-sm text-[#94a3b8] leading-relaxed">{topic}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Social Channels */}
          <section>
            <div className="text-center space-y-3 mb-8">
              <h2 className="text-2xl sm:text-3xl font-black text-white">
                OFFICIAL <span className="text-[#3B82F6]">CHANNELS</span>
              </h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {socialLinks.map(({ label, handle, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-2.5 rounded-2xl border border-white/[0.06] bg-[#080B12] p-5 text-center hover:border-[#3B82F6]/30 hover:bg-[#3B82F6]/5 transition-all duration-300 group"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#3B82F6]/10 group-hover:bg-[#3B82F6]/20 transition-colors">
                    <Icon className="h-5 w-5 text-[#3B82F6]" />
                  </div>
                  <div>
                    <p className="text-xs font-extrabold uppercase tracking-widest text-[#64748b]">{label}</p>
                    <p className="text-sm font-bold text-white mt-0.5">{handle}</p>
                  </div>
                </a>
              ))}
            </div>
          </section>

          {/* Press Contact */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-[#3B82F6]/30 bg-[#3B82F6]/5 p-8 space-y-5">
              <h3 className="text-xl font-black text-white flex items-center gap-2">
                <Mail className="h-5 w-5 text-[#3B82F6]" />
                Press Contact
              </h3>
              <p className="text-sm text-[#94A3B8] leading-relaxed">
                For interview requests, editorial queries, expert commentary, fact-checking, and press kit requests —
                contact our communications team directly.
              </p>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-3">
                  <Mail className="h-4.5 w-4.5 text-[#3B82F6]" />
                  <a href="mailto:supportquantumbytetechnologies@gmail.com" className="text-white font-semibold hover:text-[#3B82F6] transition-colors">
                    supportquantumbytetechnologies@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-4.5 w-4.5 text-[#3B82F6]" />
                  <a href="tel:+923254803957" className="text-white font-semibold hover:text-[#3B82F6] transition-colors">
                    +92 325 4803957
                  </a>
                </div>
                <div className="flex items-start gap-3 text-[#94a3b8]">
                  <MapPin className="h-4.5 w-4.5 shrink-0 mt-0.5 text-[#3B82F6]" />
                  <address className="not-italic leading-relaxed">
                    Office No 7, Second Floor, AZ Mall Platform,<br />
                    Back Side Alfathy Kohinoor, Faisalabad
                  </address>
                </div>
              </div>
              <p className="text-xs text-[#475569]">
                Response time: within 1 business day for press enquiries. We are available Mon–Sat, 10AM–6PM PKT.
              </p>
            </div>

            <div className="rounded-2xl border border-white/[0.06] bg-[#080B12] p-8 space-y-5">
              <h3 className="text-xl font-black text-white flex items-center gap-2">
                <FileText className="h-5 w-5 text-[#3B82F6]" />
                Usage Guidelines
              </h3>
              <div className="space-y-3">
                {[
                  { ok: true, text: 'Use the official logo and wordmark without modification' },
                  { ok: true, text: 'Reference us as "QuantumByte Technologies" in full on first mention' },
                  { ok: true, text: 'Quote statistics from this page with attribution to QuantumByte Technologies' },
                  { ok: true, text: 'Link to quantumbyte.tech for further information' },
                  { ok: false, text: 'Do not alter logo colors, proportions, or add effects' },
                  { ok: false, text: 'Do not use our brand assets in misleading or defamatory contexts' },
                  { ok: false, text: 'Do not imply endorsement without prior written approval' },
                ].map(({ ok, text }) => (
                  <div key={text} className="flex items-start gap-3 text-sm">
                    {ok ? (
                      <CheckCircle2 className="h-4.5 w-4.5 shrink-0 mt-0.5 text-[#10b981]" />
                    ) : (
                      <ExternalLink className="h-4.5 w-4.5 shrink-0 mt-0.5 text-[#ef4444] rotate-180" />
                    )}
                    <span className={ok ? 'text-[#94a3b8]' : 'text-[#64748b]'}>{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Boilerplate */}
          <section className="rounded-2xl border border-white/[0.06] bg-[#080B12] p-8 space-y-4">
            <h3 className="text-lg font-black text-white flex items-center gap-2">
              <Newspaper className="h-5 w-5 text-[#3B82F6]" />
              Standard Boilerplate — For Publication Use
            </h3>
            <blockquote className="border-l-4 border-[#3B82F6] pl-5 text-sm text-[#94a3b8] leading-relaxed italic">
              "QuantumByte Technologies is Pakistan's leading high-performance hardware retailer and certified enterprise IT
              solutions provider, headquartered in Faisalabad, Punjab. Founded in 2018, the company specializes in
              custom PC assembly, genuine hardware retail across 8 product categories, IPC-certified hardware repair,
              enterprise networking infrastructure, and full-stack software development. QuantumByte serves individuals,
              gamers, creative professionals, and corporate clients nationwide with 10,000+ systems delivered and a 99.9%
              customer satisfaction rate."
            </blockquote>
            <p className="text-xs text-[#475569]">
              Approved for reproduction in full. Contact supportquantumbytetechnologies@gmail.com for customized or extended descriptions.
            </p>
          </section>

        </div>
      </main>

      <Footer />
      <CartDrawer />
    </div>
  );
}
