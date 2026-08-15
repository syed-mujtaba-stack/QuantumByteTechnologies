import React from 'react';
import Link from 'next/link';
import { Navbar } from '@/app/components/Navbar';
import { Footer } from '@/app/components/Footer';
import { CartDrawer } from '@/app/components/CartDrawer';
import { Cpu, ShieldCheck, Wrench, Award, CheckCircle2, ChevronRight, Truck, Headphones, Network, Code, HardDrive, Sparkles, MapPin, Building2, Users, Zap, Clock } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | QuantumByte Technologies',
  description: 'Learn about QuantumByte Technologies - Pakistan\'s premier high-performance hardware retailer and certified enterprise IT solutions provider. Custom PCs, hardware repair, networking, software development.',
};

const coreValues = [
  { icon: ShieldCheck, title: 'Uncompromising Authenticity', desc: 'Every product sourced directly from authorized distributors. Zero gray market. Full manufacturer warranty.' },
  { icon: Cpu, title: 'Engineering Excellence', desc: 'Senior hardware engineers with 15+ years experience. IPC-certified technicians. Precision in every build.' },
  { icon: Award, title: 'Customer Obsession', desc: '99.9% satisfaction rate. 24/7 support. 7-day replacement. Lifetime technical guidance.' },
  { icon: Sparkles, title: 'Innovation First', desc: 'Latest architectures. Custom liquid cooling. AI-accelerated workstations. Future-ready solutions.' },
  { icon: Truck, title: 'Nationwide Reach', desc: 'Free insured express shipping across Pakistan. Wooden crate logistics. Anti-static packaging standards.' },
  { icon: Headphones, title: 'Expert Guidance', desc: 'Not just sales — consultation. We help you choose the right hardware for your exact use case.' },
];

const milestones = [
  { year: '2018', title: 'Founded in Faisalabad', desc: 'Started as a small hardware retail shop in Madina Town, specializing in genuine PC components.' },
  { year: '2019', title: 'Launched Custom PC Assembly', desc: 'Introduced handcrafted custom builds with liquid cooling, cable management, and 24hr stress testing.' },
  { year: '2020', title: 'Expanded to IT Services', desc: 'Added hardware repair lab, corporate networking, and infrastructure deployment services.' },
  { year: '2021', title: 'Authorized Distributor Status', desc: 'Secured direct partnerships with ASUS, Corsair, WD, Samsung, Seasonic, G.Skill, and more.' },
  { year: '2022', title: 'Software Division Launch', desc: 'Full-stack web & mobile development team. Sanity CMS expertise. Enterprise SaaS projects.' },
  { year: '2023', title: 'E-Commerce Platform', desc: 'Launched quantumbyte.tech with live inventory, COD nationwide, and real-time order tracking.' },
  { year: '2024', title: '10,000+ Systems Delivered', desc: 'Milestone reached. Expanded warehouse. Added EasyPaisa/JazzCash. Corporate SLA contracts.' },
  { year: '2025', title: 'AI & HPC Workstations', desc: 'Specialized in NVIDIA DGX, dual-GPU render nodes, LLM training rigs, and inferencing servers.' },
  { year: '2026', title: 'Present — Scaling Nationwide', desc: '45+ hardware lines. 24/7 lab. Corporate clients across Pakistan. Export inquiries from UAE/KSA.' },
];

const teamMembers = [
  { name: 'Ahmed Hassan', role: 'Founder & CEO', desc: '18 years in PC hardware retail & distribution. Former regional manager for major distributor. Visionary behind QuantumByte\'s authenticity-first model.', icon: Award },
  { name: 'Sarah Malik', role: 'CTO / Lead Systems Architect', desc: 'Ex-FAST/NUCES. 12 years enterprise infrastructure. Designs custom HPC clusters, 10GbE networks, and liquid-cooled workstations.', icon: Cpu },
  { name: 'Omar Farooq', role: 'Head of Hardware Engineering', desc: 'IPC-A-610 Certified. 14 years motherboard repair, BGA reballing, custom loop fabrication. Runs the repair lab.', icon: Wrench },
  { name: 'Dr. Ayesha Khan', role: 'VP Software Engineering', desc: 'PhD Computer Science (LUMS). 10 years full-stack, distributed systems. Leads Sanity CMS, Next.js, React Native division.', icon: Code },
  { name: 'Bilal Ahmed', role: 'Operations & Logistics Director', desc: 'Supply chain expert. Manages 45+ vendor relationships, wooden crate logistics, nationwide COD network, and warehouse operations.', icon: Truck },
  { name: 'Fatima Shah', role: 'Customer Experience Lead', desc: 'Built 24/7 support from scratch. 99.9% CSAT. Designed 7-day replacement, warranty automation, and proactive outreach programs.', icon: Headphones },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#030305] text-white flex flex-col font-sans selection:bg-[#ff003c] selection:text-white">
      <Navbar />

      <main className="flex-1 py-12 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="mb-6 flex items-center gap-2 text-xs text-[#9c9ca8]">
            <Link href="/" className="hover:text-white">Home</Link>
            <ChevronRight className="h-3 w-3 text-[#ff003c]" />
            <span className="text-white font-bold">About Us</span>
          </div>

          {/* Hero Section */}
          <section className="mb-16">
            <div className="rounded-2xl border border-[#1a1a24] bg-gradient-to-br from-[#08080c] via-[#030305] to-[#08080c] p-8 lg:p-14 relative overflow-hidden">
              <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'linear-gradient(#ff003c 1px, transparent 1px), linear-gradient(90deg, #ff003c 1px, transparent 1px)', backgroundSize: '80px 80px' }} />
              <div className="absolute -top-24 right-24 h-48 w-48 rounded-full bg-[#ff003c]/5 blur-3xl" />
              <div className="relative z-10 max-w-3xl">
                <span className="inline-flex items-center gap-2 rounded-full border border-[#ff003c]/30 bg-[#ff003c]/10 px-4 py-1.5 text-xs font-extrabold uppercase tracking-widest text-[#ff003c] mb-4">
                  <Sparkles className="h-3.5 w-3.5" />
                  OFFICIAL COMPANY OVERVIEW
                </span>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
                  POWERING THE NEXT ERA OF <span className="text-[#ff003c]">TECH & IT SOLUTIONS</span>
                </h1>
                <p className="mt-4 text-base sm:text-lg text-[#9c9ca8] max-w-2xl leading-relaxed">
                  QuantumByte Technologies is Pakistan\'s premier high-performance hardware retailer and certified enterprise IT solutions provider. From custom hardline-cooled gaming rigs and AI workstations to enterprise networking, micro-soldering hardware repair, and full-stack software development — we engineer perfection at every layer.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Link href="/shop" className="btn btn-primary flex items-center gap-2">
                    <Sparkles className="h-4.5 w-4.5" />
                    Explore Hardware
                  </Link>
                  <Link href="/contact" className="btn btn-secondary flex items-center gap-2">
                    <Headphones className="h-4.5 w-4.5" />
                    Book Consultation
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Core Values */}
          <section className="mb-16" aria-labelledby="values-heading">
            <header className="text-center mb-10">
              <h2 id="values-heading" className="text-3xl sm:text-4xl font-black text-white">OUR <span className="text-[#ff003c]">CORE VALUES</span></h2>
              <p className="mt-2 text-base text-[#9c9ca8] max-w-2xl mx-auto">
                These principles guide every decision — from component sourcing to customer support.
              </p>
            </header>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
              {coreValues.map((value, idx) => (
                <div key={idx} className="group text-center p-4 lg:p-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#0a0a10] border border-[#1a1a24] text-[#ff003c] mx-auto mb-3 lg:mx-auto group-hover:bg-[#ff003c] group-hover:text-white group-hover:border-[#ff003c] transition-colors duration-200">
                    <value.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="text-sm font-semibold text-white mb-1">{value.title}</h3>
                  <p className="text-[11px] text-[#6b6b7a] leading-relaxed">{value.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* What We Do */}
          <section className="mb-16" aria-labelledby="services-heading">
            <header className="text-center mb-10">
              <h2 id="services-heading" className="text-3xl sm:text-4xl font-black text-white">WHAT WE <span className="text-[#ff003c]">DO</span></h2>
              <p className="mt-2 text-base text-[#9c9ca8] max-w-2xl mx-auto">
                End-to-end technology solutions — from a single GPU to enterprise infrastructure.
              </p>
            </header>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {[
                { icon: Cpu, title: 'Genuine Hardware Retail', desc: 'MacBooks, RTX 4090, DDR5, GaN chargers, smartphones — 45+ brands, 100% authentic, official warranty.', link: '/shop' },
                { icon: Wrench, title: 'Custom PC Assembly', desc: 'Air, AIO, softline, hardline, dual-loop. 24hr stress test. 1-year build warranty. Wooden crate shipping.', link: '/contact' },
                { icon: HardDrive, title: 'Hardware Repair Lab', desc: 'BGA reballing, GPU repair, laptop service, liquid damage, custom loop maintenance. 30-day warranty.', link: '/contact' },
                { icon: Network, title: 'Corporate IT Infrastructure', desc: 'Structured cabling, NAS/SAN, Cisco/Ubiquiti, AD/VPN, 24/7 managed support with SLA.', link: '/contact' },
                { icon: Code, title: 'Software Development', desc: 'Next.js, React, Node.js, Sanity CMS, React Native, Flutter. SEO, 99+ Lighthouse. Enterprise SaaS.', link: '/contact' },
                { icon: Zap, title: 'AI & HPC Workstations', desc: 'Dual-GPU render nodes, LLM training rigs, inferencing servers, NVIDIA DGX deployment.', link: '/contact' },
              ].map((service, idx) => (
                <div key={idx} className="rounded-2xl border border-[#1a1a24] bg-[#08080c] p-6 space-y-4 group hover:border-[#ff003c]/30 transition-colors">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#ff003c]/10 text-[#ff003c] group-hover:bg-[#ff003c] group-hover:text-white transition-colors">
                    <service.icon className="h-5.5 w-5.5" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-bold text-white">{service.title}</h3>
                  <p className="text-sm text-[#9c9ca8] leading-relaxed">{service.desc}</p>
                  <Link href={service.link} className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#ff003c] hover:underline mt-2">
                    Learn More <ChevronRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              ))}
            </div>
          </section>

          {/* Company Timeline */}
          <section className="mb-16" aria-labelledby="timeline-heading">
            <header className="text-center mb-10">
              <h2 id="timeline-heading" className="text-3xl sm:text-4xl font-black text-white">OUR <span className="text-[#ff003c]">JOURNEY</span></h2>
              <p className="mt-2 text-base text-[#9c9ca8] max-w-2xl mx-auto">
                From a single shop in Madina Town to Pakistan\'s trusted technology partner.
              </p>
            </header>
            <div className="relative">
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-[#ff003c]/30 to-transparent" />
              <div className="space-y-8">
                {milestones.map((milestone, idx) => (
                  <div key={idx} className="relative pl-16 sm:pl-20">
                    <div className="absolute left-6 sm:left-8 top-1 flex h-3 w-3 items-center justify-center rounded-full bg-[#030305] border-2 border-[#ff003c] z-10">
                      <div className="h-1.5 w-1.5 rounded-full bg-[#ff003c]" />
                    </div>
                    <div className="bg-[#08080c] border border-[#1a1a24] rounded-xl p-5 sm:p-6">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-sm font-black text-[#ff003c] uppercase tracking-wider">{milestone.year}</span>
                        <span className="text-[10px] font-bold text-[#6b6b7a] uppercase tracking-wider">MILESTONE</span>
                      </div>
                      <h3 className="text-lg font-bold text-white">{milestone.title}</h3>
                      <p className="text-sm text-[#9c9ca8] mt-1">{milestone.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Leadership Team */}
          <section className="mb-16" aria-labelledby="team-heading">
            <header className="text-center mb-10">
              <h2 id="team-heading" className="text-3xl sm:text-4xl font-black text-white">LEADERSHIP <span className="text-[#ff003c]">TEAM</span></h2>
              <p className="mt-2 text-base text-[#9c9ca8] max-w-2xl mx-auto">
                Experienced engineers and operators who live and breathe technology.
              </p>
            </header>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {teamMembers.map((member, idx) => (
                <div key={idx} className="rounded-2xl border border-[#1a1a24] bg-[#08080c] p-6 space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-[#ff003c] to-[#990024] shrink-0">
                      <member.icon className="h-7 w-7 text-white" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="text-lg font-black text-white">{member.name}</h3>
                      <p className="text-sm text-[#ff003c] font-semibold">{member.role}</p>
                    </div>
                  </div>
                  <p className="text-sm text-[#9c9ca8] leading-relaxed">{member.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Stats */}
          <section className="mb-16" aria-labelledby="stats-heading">
            <h2 id="stats-heading" className="sr-only">Company Statistics</h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { value: '10,000+', label: 'Systems Delivered', icon: Cpu },
                { value: '45+', label: 'Authorized Hardware Lines', icon: ShieldCheck },
                { value: '99.9%', label: 'Customer Satisfaction', icon: Award },
                { value: '24/7', label: 'Tech Lab Support', icon: Headphones },
                { value: '15+', label: 'Years Engineering Exp.', icon: Wrench },
                { value: '500+', label: 'Corporate Clients', icon: Building2 },
                { value: '12', label: 'Core Team Members', icon: Users },
                { value: 'Nationwide', label: 'Shipping Coverage', icon: Truck },
              ].map((stat, idx) => (
                <div key={idx} className="text-center p-6 rounded-2xl border border-[#1a1a24] bg-[#08080c] space-y-2">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#ff003c]/10 text-[#ff003c] mx-auto">
                    <stat.icon className="h-5.5 w-5.5" aria-hidden="true" />
                  </div>
                  <span className="text-3xl sm:text-4xl font-black text-white tabular-nums">{stat.value}</span>
                  <p className="text-sm text-[#6b6b7a] font-medium uppercase tracking-wider">{stat.label}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Location & Contact */}
          <section className="mb-16" aria-labelledby="location-heading">
            <h2 id="location-heading" className="sr-only">Our Location</h2>
            <div className="rounded-2xl border border-[#1a1a24] bg-[#08080c] p-6 lg:p-10">
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-black text-white mb-4">VISIT OUR <span className="text-[#ff003c]">LAB & SHOWROOM</span></h3>
                  <p className="text-base text-[#9c9ca8] leading-relaxed mb-6">
                    Experience hardware hands-on. See custom builds in progress. Meet our engineers. Get expert consultation face-to-face.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#ff003c]/10 text-[#ff003c]">
                        <MapPin className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-semibold text-white">Office 7, 2nd Floor, AZ Mall Platform</p>
                        <p className="text-sm text-[#9c9ca8]">Back Side Al-Fateh Kohinoor, Madina Town, Faisalabad, Punjab</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#ff003c]/10 text-[#ff003c]">
                        <Clock className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-semibold text-white">Showroom Hours</p>
                        <p className="text-sm text-[#9c9ca8]">Mon–Sat: 10:00 AM – 8:00 PM PKT • Sun: Closed</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#ff003c]/10 text-[#ff003c]">
                        <Headphones className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-semibold text-white">WhatsApp / Call</p>
                        <p className="text-sm text-[#9c9ca8]"><a href="tel:+923254803957" className="text-[#ff003c] hover:underline">+92 325 4803957</a></p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="rounded-xl border border-[#1a1a24] bg-[#030305] p-8 text-center">
                  <p className="text-sm text-[#6b6b7a] mb-2">CAN'T VISIT? WE COME TO YOU.</p>
                  <h4 className="text-lg font-bold text-white mb-3">On-Site Assessment Available</h4>
                  <p className="text-sm text-[#9c9ca8] mb-4 max-w-sm mx-auto">
                    For corporate clients in Faisalabad, Lahore, Islamabad: we visit your office for infrastructure audits, workstation deployment planning, and network design consultations.
                  </p>
                  <Link href="/contact" className="btn btn-primary inline-flex items-center gap-2">
                    <Truck className="h-4.5 w-4.5" />
                    Book On-Site Visit
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Certifications & Partnerships */}
          <section className="mb-16" aria-labelledby="partners-heading">
            <header className="text-center mb-10">
              <h2 id="partners-heading" className="text-3xl sm:text-4xl font-black text-white">AUTHORIZED <span className="text-[#ff003c]">PARTNERSHIPS</span></h2>
              <p className="mt-2 text-base text-[#9c9ca8] max-w-2xl mx-auto">
                Direct relationships with the world\'s leading technology manufacturers.
              </p>
            </header>
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
              {[
                'ASUS / ROG', 'Apple', 'Samsung', 'NVIDIA', 'Corsair', 'WD / SanDisk',
                'G.Skill', 'Seasonic', 'Synology', 'Ubiquiti', 'Cisco', 'Microsoft',
                'Anker', 'Belkin', 'LG', 'MSI', 'Gigabyte', 'EVGA',
              ].map((partner, idx) => (
                <div key={idx} className="flex h-16 items-center justify-center rounded-xl border border-[#1a1a24] bg-[#08080c] text-white font-semibold text-sm uppercase tracking-wider hover:border-[#ff003c]/40 hover:bg-[#0a0a10] transition-colors">
                  {partner}
                </div>
              ))}
            </div>
          </section>

          {/* Mission Statement */}
          <section className="mb-16" aria-labelledby="mission-heading">
            <div className="rounded-2xl border border-[#ff003c]/30 bg-[#ff003c]/5 p-8 lg:p-12 text-center">
              <h2 id="mission-heading" className="text-3xl sm:text-4xl font-black text-white mb-4">
                OUR <span className="text-[#ff003c]">MISSION</span>
              </h2>
              <p className="text-lg text-[#9c9ca8] max-w-3xl mx-auto leading-relaxed mb-6">
                To make genuine, high-performance technology accessible across Pakistan — backed by expert engineering, transparent pricing, and unwavering support. Whether you\'re a gamer building a dream rig, a creative professional needing an AI workstation, or an enterprise deploying 10GbE infrastructure: QuantumByte is your trusted partner.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3">
                <Link href="/shop" className="btn btn-primary">
                  <Sparkles className="h-4.5 w-4.5" />
                  Start Your Build
                </Link>
                <Link href="/contact" className="btn btn-secondary">
                  <Headphones className="h-4.5 w-4.5" />
                  Talk to an Engineer
                </Link>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
      <CartDrawer />
    </div>
  );
}