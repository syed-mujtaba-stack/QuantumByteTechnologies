import React from 'react';
import Link from 'next/link';
import { Navbar } from '@/app/components/Navbar';
import { Footer } from '@/app/components/Footer';
import { CartDrawer } from '@/app/components/CartDrawer';
import type { Metadata } from 'next';
import {
  Wrench,
  ChevronRight,
  Cpu,
  Monitor,
  Smartphone,
  Zap,
  Droplets,
  HardDrive,
  CheckCircle2,
  Clock,
  ShieldCheck,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  AlertTriangle,
  Star,
  Package,
  Microscope,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Hardware Repair Services | QuantumByte Technologies',
  description:
    'IPC-certified hardware repair lab in Faisalabad. Motherboard BGA reballing, GPU repair, laptop screen & battery replacement, liquid damage recovery, custom loop maintenance. 30-day workmanship warranty.',
};

const repairServices = [
  {
    icon: Cpu,
    title: 'Motherboard Repair',
    subtitle: 'Micro-soldering & BGA Reballing',
    items: [
      'BGA chip reballing (GPU, CPU, Northbridge)',
      'PCIe / USB / power trace repair',
      'BIOS chip flashing & recovery',
      'VRM component replacement',
      'Bent / broken socket pin repair',
      'Short circuit diagnosis & fix',
    ],
    price: 'From Rs. 4,500',
    time: '3–7 business days',
    color: 'text-[#3B82F6]',
    bg: 'bg-[#3B82F6]/10',
    border: 'border-[#3B82F6]/20',
  },
  {
    icon: Monitor,
    title: 'GPU Repair',
    subtitle: 'Graphics Card Restoration',
    items: [
      'VRM / MOSFET replacement',
      'VRAM chip reball / replacement',
      'Artifact & display output fix',
      'Fan header & thermal pad replacement',
      'Bios corruption recovery',
      'Overclocking damage repair',
    ],
    price: 'From Rs. 5,500',
    time: '4–8 business days',
    color: 'text-[#8b5cf6]',
    bg: 'bg-[#8b5cf6]/10',
    border: 'border-[#8b5cf6]/20',
  },
  {
    icon: Smartphone,
    title: 'Laptop Repair',
    subtitle: 'Screen, Battery & Beyond',
    items: [
      'Screen replacement (IPS / OLED / 4K)',
      'Battery replacement (genuine cells)',
      'Keyboard & trackpad replacement',
      'Charging port & DC jack repair',
      'Thermal paste & heatsink service',
      'RAM / SSD upgrade & migration',
    ],
    price: 'From Rs. 2,500',
    time: '1–3 business days',
    color: 'text-[#10b981]',
    bg: 'bg-[#10b981]/10',
    border: 'border-[#10b981]/20',
  },
  {
    icon: Droplets,
    title: 'Liquid Damage Recovery',
    subtitle: 'Ultrasonic Cleaning Lab',
    items: [
      'Ultrasonic PCB cleaning (IPA bath)',
      'Corrosion removal & neutralization',
      'Component-level damage assessment',
      'Trace & pad reconstruction',
      'Full functional test post-recovery',
      'Data recovery from damaged drives',
    ],
    price: 'From Rs. 3,500',
    time: '2–5 business days',
    color: 'text-[#06b6d4]',
    bg: 'bg-[#06b6d4]/10',
    border: 'border-[#06b6d4]/20',
  },
  {
    icon: Zap,
    title: 'PSU Repair',
    subtitle: 'Power Supply Restoration',
    items: [
      'Capacitor replacement (Japanese caps)',
      'Voltage regulation troubleshooting',
      'Fan replacement (Noctua / Nidec)',
      'Modular cable port repair',
      'OVP / OCP / SCP circuit repair',
      'Full load testing post-repair',
    ],
    price: 'From Rs. 2,000',
    time: '2–4 business days',
    color: 'text-[#f59e0b]',
    bg: 'bg-[#f59e0b]/10',
    border: 'border-[#f59e0b]/20',
  },
  {
    icon: Droplets,
    title: 'Custom Loop Maintenance',
    subtitle: 'Liquid Cooling Service',
    items: [
      'Full loop flush & coolant replacement',
      'Radiator cleaning (reverse flush)',
      'Pump bearing & impeller check',
      'Fitting & tube inspection / replacement',
      'Leak test & pressure validation',
      'UV / pastel / clear coolant options',
    ],
    price: 'From Rs. 3,000',
    time: '1–2 business days',
    color: 'text-[#3B82F6]',
    bg: 'bg-[#3B82F6]/10',
    border: 'border-[#3B82F6]/20',
  },
  {
    icon: HardDrive,
    title: 'Data Recovery',
    subtitle: 'HDD, SSD & NVMe',
    items: [
      'Logical failure recovery (deleted / formatted)',
      'Firmware corruption repair',
      'Platter transplant (Class 100 cleanroom)',
      'SSD NAND-level recovery',
      'RAID array reconstruction',
      'Encrypted volume recovery',
    ],
    price: 'From Rs. 8,000',
    time: '5–10 business days',
    color: 'text-[#ef4444]',
    bg: 'bg-[#ef4444]/10',
    border: 'border-[#ef4444]/20',
  },
  {
    icon: Microscope,
    title: 'Diagnostics Only',
    subtitle: 'No-Fix-No-Fee Assessment',
    items: [
      'Full hardware component test',
      'Stress benchmarks (Prime95, FurMark)',
      'Memory test (MemTest86)',
      'Storage health scan (CrystalDiskInfo)',
      'Thermal imaging for hotspot detection',
      'Detailed written report provided',
    ],
    price: 'Rs. 2,000 flat',
    time: '1–2 business days',
    color: 'text-[#94a3b8]',
    bg: 'bg-white/[0.04]',
    border: 'border-white/[0.08]',
  },
];

const process = [
  {
    step: '01',
    title: 'Book or Drop In',
    desc: 'Call/WhatsApp us or walk into our lab at AZ Mall Platform. We log your device and issue a job card with a unique reference number.',
    icon: Phone,
  },
  {
    step: '02',
    title: 'Diagnosis',
    desc: 'IPC-certified technician performs component-level diagnosis within 24 hours. You receive a detailed fault report and repair quotation.',
    icon: Microscope,
  },
  {
    step: '03',
    title: 'Approval & Repair',
    desc: 'You approve the quote. We source genuine parts and perform the repair with precision micro-soldering and IPC-A-610 workmanship standards.',
    icon: Wrench,
  },
  {
    step: '04',
    title: 'QA Testing',
    desc: '24-hour burn-in test, thermal benchmarks, and full functionality verification before we declare the repair complete.',
    icon: ShieldCheck,
  },
  {
    step: '05',
    title: 'Collection / Delivery',
    desc: 'Pick up from our lab or opt for insured courier delivery. Repaired device ships in anti-static packaging with a 30-day workmanship warranty.',
    icon: Package,
  },
];

const guarantees = [
  { icon: ShieldCheck, title: '30-Day Workmanship Warranty', desc: 'Every repair is backed by a 30-day warranty covering the specific fault we fixed.' },
  { icon: Star, title: 'Genuine Parts Only', desc: 'We use only authentic components from authorized distributors — no counterfeit parts, ever.' },
  { icon: CheckCircle2, title: 'No-Fix, Reduced Fee', desc: 'If we cannot fix your device, diagnostic fee drops to Rs. 1,000. No surprise charges.' },
  { icon: Clock, title: 'Transparent Timelines', desc: 'You get a realistic ETA upfront. We update you at every stage via WhatsApp.' },
  { icon: AlertTriangle, title: 'Data Safety', desc: 'Your data is never accessed without consent. We sign an NDA on enterprise / business devices.' },
  { icon: HardDrive, title: 'IPC-A-610 Standards', desc: 'All soldering and rework meets IPC Class 2 or Class 3 standards depending on the board.' },
];

export default function RepairPage() {
  return (
    <div className="min-h-screen bg-[#05070D] text-white flex flex-col font-sans selection:bg-[#3B82F6] selection:text-white">
      <Navbar />

      <main className="flex-1 py-12 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-20">

          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs text-[#94A3B8]">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="h-3 w-3 text-[#3B82F6]" />
            <span className="text-white font-bold">Hardware Repair</span>
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
                <Wrench className="h-3.5 w-3.5" /> IPC-CERTIFIED REPAIR LAB
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.05] tracking-tight text-white">
                HARDWARE <span className="text-[#3B82F6]">REPAIR</span>
                <br />& RESTORATION
              </h1>
              <p className="text-base text-[#94A3B8] max-w-xl leading-relaxed">
                Component-level diagnosis and repair for PCs, laptops, GPUs, motherboards, and custom liquid cooling loops.
                15+ years of micro-soldering expertise. Genuine parts. 30-day workmanship warranty.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <a
                  href="https://wa.me/923254803957?text=Hi%2C%20I%20need%20a%20hardware%20repair%20quote"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary inline-flex items-center justify-center gap-2"
                >
                  <Phone className="h-4.5 w-4.5" />
                  Book Repair via WhatsApp
                  <ArrowRight className="h-4.5 w-4.5" />
                </a>
                <a
                  href="mailto:supportquantumbytetechnologies@gmail.com"
                  className="btn btn-secondary inline-flex items-center justify-center gap-2"
                >
                  <Mail className="h-4.5 w-4.5" />
                  Email Repair Enquiry
                </a>
              </div>
              <div className="flex flex-wrap gap-6 pt-4 text-sm text-[#64748b]">
                {[
                  { label: 'Diagnostic Fee', value: 'Rs. 2,000' },
                  { label: 'Workmanship Warranty', value: '30 Days' },
                  { label: 'Lab Hours', value: 'Mon–Sat, 10AM–7PM' },
                ].map(({ label, value }) => (
                  <div key={label}>
                    <p className="text-[10px] uppercase tracking-widest">{label}</p>
                    <p className="font-extrabold text-white text-base">{value}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Services Grid */}
          <section>
            <div className="text-center space-y-3 mb-10">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-[#3B82F6]/30 bg-[#3B82F6]/10 px-4 py-1.5 text-xs font-extrabold uppercase tracking-widest text-[#3B82F6]">
                <Wrench className="h-3.5 w-3.5" /> REPAIR SERVICES
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-white">
                WHAT WE <span className="text-[#3B82F6]">FIX</span>
              </h2>
              <p className="text-sm text-[#94A3B8] max-w-xl mx-auto">
                From BGA reballing to liquid loop maintenance — if it runs on silicon, we can fix it.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {repairServices.map((svc) => {
                const Icon = svc.icon;
                return (
                  <div
                    key={svc.title}
                    className={`rounded-2xl border ${svc.border} bg-[#080B12] p-5 space-y-4 hover:border-opacity-60 transition-all duration-300 flex flex-col`}
                  >
                    <div className={`flex h-11 w-11 items-center justify-center rounded-xl ${svc.bg}`}>
                      <Icon className={`h-5.5 w-5.5 ${svc.color}`} />
                    </div>
                    <div>
                      <h3 className="font-black text-white text-base">{svc.title}</h3>
                      <p className={`text-xs font-semibold ${svc.color} mt-0.5`}>{svc.subtitle}</p>
                    </div>
                    <ul className="space-y-1.5 flex-1">
                      {svc.items.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-xs text-[#94A3B8]">
                          <CheckCircle2 className={`h-3.5 w-3.5 shrink-0 mt-0.5 ${svc.color}`} />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between">
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-wider text-[#64748b]">Starting</p>
                        <p className={`text-sm font-extrabold ${svc.color}`}>{svc.price}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-[10px] font-bold uppercase tracking-wider text-[#64748b]">Turnaround</p>
                        <p className="text-xs font-bold text-white">{svc.time}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Repair Process */}
          <section>
            <div className="text-center space-y-3 mb-10">
              <h2 className="text-2xl sm:text-3xl font-black text-white">
                OUR REPAIR <span className="text-[#3B82F6]">PROCESS</span>
              </h2>
              <p className="text-sm text-[#94A3B8] max-w-xl mx-auto">
                Transparent, step-by-step — you're updated at every stage.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
              {process.map((step) => {
                const Icon = step.icon;
                return (
                  <div
                    key={step.step}
                    className="rounded-2xl border border-white/[0.06] bg-[#080B12] p-5 space-y-3 text-center"
                  >
                    <span className="text-3xl font-black text-[#3B82F6]/30">{step.step}</span>
                    <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl bg-[#3B82F6]/10">
                      <Icon className="h-5 w-5 text-[#3B82F6]" />
                    </div>
                    <h3 className="font-bold text-white text-sm">{step.title}</h3>
                    <p className="text-xs text-[#64748b] leading-relaxed">{step.desc}</p>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Guarantees */}
          <section>
            <div className="text-center space-y-3 mb-10">
              <h2 className="text-2xl sm:text-3xl font-black text-white">
                THE <span className="text-[#3B82F6]">QB REPAIR</span> PROMISE
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {guarantees.map(({ icon: Icon, title, desc }) => (
                <div
                  key={title}
                  className="flex items-start gap-4 rounded-2xl border border-white/[0.06] bg-[#080B12] p-5"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#3B82F6]/10">
                    <Icon className="h-5 w-5 text-[#3B82F6]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-sm">{title}</h3>
                    <p className="text-xs text-[#64748b] mt-1 leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* CTA + Location */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-[#3B82F6]/30 bg-[#3B82F6]/5 p-8 space-y-4">
              <h3 className="text-xl font-black text-white">Book a Repair</h3>
              <p className="text-sm text-[#94A3B8] leading-relaxed">
                Send us a WhatsApp message with your device model, fault description, and photos. Our senior technician will
                respond within 2 business hours with a diagnosis scope and initial estimate.
              </p>
              <div className="space-y-2.5">
                <a
                  href="https://wa.me/923254803957?text=Hi%2C%20I%20need%20a%20hardware%20repair%20quote"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary w-full justify-center gap-2 inline-flex"
                >
                  <Phone className="h-4.5 w-4.5" />
                  WhatsApp: +92 325 4803957
                </a>
                <a
                  href="mailto:supportquantumbytetechnologies@gmail.com"
                  className="btn btn-secondary w-full justify-center gap-2 inline-flex"
                >
                  <Mail className="h-4.5 w-4.5" />
                  supportquantumbytetechnologies@gmail.com
                </a>
              </div>
            </div>

            <div className="rounded-2xl border border-white/[0.06] bg-[#080B12] p-8 space-y-4">
              <h3 className="text-xl font-black text-white">Walk-In Lab</h3>
              <p className="text-sm text-[#94A3B8] leading-relaxed">
                Drop your device directly at our repair lab. No appointment needed for drop-in. We issue a job card on the spot
                and begin diagnostics within 24 hours.
              </p>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-3 text-[#94A3B8]">
                  <MapPin className="h-4.5 w-4.5 shrink-0 mt-0.5 text-[#3B82F6]" />
                  <address className="not-italic leading-relaxed">
                    Office No 7, Second Floor, AZ Mall Platform,<br />
                    Back Side Alfathy Kohinoor, Faisalabad
                  </address>
                </div>
                <div className="flex items-center gap-3 text-[#94A3B8]">
                  <Clock className="h-4.5 w-4.5 shrink-0 text-[#3B82F6]" />
                  <span>Monday – Saturday, 10:00 AM – 7:00 PM PKT</span>
                </div>
              </div>
              <Link href="/contact" className="btn btn-outline w-full justify-center gap-2 inline-flex mt-2">
                View Full Contact Details
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </section>

        </div>
      </main>

      <Footer />
      <CartDrawer />
    </div>
  );
}
