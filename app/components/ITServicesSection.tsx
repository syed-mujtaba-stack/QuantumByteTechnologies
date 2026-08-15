'use client';

import React from 'react';
import Image from 'next/image';
import { ITService } from '@/sanity/lib/data';
import { useCart } from '@/app/context/CartContext';
import { formatPKR } from '@/sanity/lib/currency';
import { GSAPReveal } from './GSAPWrapper';
import { Wrench, CheckCircle2, ArrowRight, Cpu, Network, Code, HardDrive, Star } from 'lucide-react';

interface ITServicesSectionProps {
  itServices: ITService[];
}

const serviceIcons = {
  'Custom Gaming & Workstation PC Assembly': Cpu,
  'Hardware Maintenance & Chip-Level Repair': HardDrive,
  'Corporate IT Infrastructure & Networking': Network,
  'Full-Stack Web & Mobile App Development': Code,
};

const serviceCategories = {
  'Custom Gaming & Workstation PC Assembly': 'PC Building',
  'Hardware Maintenance & Chip-Level Repair': 'Repair',
  'Corporate IT Infrastructure & Networking': 'Infrastructure',
  'Full-Stack Web & Mobile App Development': 'Development',
};

export function ITServicesSection({ itServices }: ITServicesSectionProps) {
  const { openBooking } = useCart();

  return (
    <section className="relative overflow-hidden border-y border-white/[0.06] bg-[#05070D] py-16 lg:py-24" aria-labelledby="services-heading">
      {/* ── Background ──────────────────────────────────────────── */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[400px] w-[700px] rounded-full bg-[#3B82F6]/[0.03] blur-[100px]" />
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#3B82F6]/10 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* ── Section Intro ───────────────────────────────────────── */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-14">
          <GSAPReveal direction="down" delay={0.05}>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#3B82F6]/20 bg-[#3B82F6]/[0.06] px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.12em] text-[#3B82F6] mb-5">
              <Wrench className="h-3.5 w-3.5" />
              Professional IT &amp; Hardware Services
            </div>
          </GSAPReveal>

          <GSAPReveal direction="up" delay={0.1}>
            <h2 id="services-heading" className="text-3xl sm:text-4xl lg:text-[2.75rem] font-black tracking-[-0.03em] leading-[1.1] text-white">
              Enterprise-Grade{' '}
              <span className="bg-gradient-to-r from-[#60A5FA] via-[#3B82F6] to-[#06B6D4] bg-clip-text text-transparent">
                IT Solutions
              </span>
            </h2>
          </GSAPReveal>

          <GSAPReveal direction="up" delay={0.15}>
            <p className="mt-4 text-[15px] text-[#64748B] leading-relaxed max-w-xl mx-auto">
              Beyond hardware retail, QuantumByte Technologies offers certified technical expertise in custom PC building, component repair, corporate networking, and software engineering.
            </p>
          </GSAPReveal>
        </div>

        {/* ── Service Cards ───────────────────────────────────────── */}
        <div className="space-y-5 lg:space-y-6">
          {itServices.map((service, index) => {
            const Icon = serviceIcons[service.title as keyof typeof serviceIcons] || Wrench;
            const category = serviceCategories[service.title as keyof typeof serviceCategories] || 'Service';
            const isReversed = index % 2 !== 0;

            return (
              <GSAPReveal key={service.id} direction="up" delay={0.1 + index * 0.06} distance={20}>
                <div className="group relative rounded-2xl border border-white/[0.06] bg-[#0B0F18]/80 overflow-hidden transition-all duration-400 hover:border-[#3B82F6]/20 hover:shadow-[0_8px_40px_rgba(0,0,0,0.25)]">
                  <div className={`lg:grid lg:grid-cols-12 lg:gap-0 lg:items-stretch ${isReversed ? '' : ''}`}>

                    {/* ── Image ──────────────────────────────────────── */}
                    <div className={`relative overflow-hidden lg:col-span-5 ${isReversed ? 'lg:order-2' : 'lg:order-1'}`}>
                      <div className="relative h-56 sm:h-64 lg:h-full min-h-[280px]">
                        <Image
                          src={service.imageUrl}
                          alt={service.title}
                          fill
                          priority={index === 0}
                          sizes="(max-width: 1024px) 100vw, 42vw"
                          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        />
                        {/* Gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#05070D]/40 via-transparent to-transparent lg:from-transparent lg:via-transparent lg:to-[#0B0F18]/20" />
                        <div className={`absolute inset-0 bg-gradient-to-r from-[#05070D]/20 to-transparent ${isReversed ? 'lg:bg-gradient-to-l lg:from-[#0B0F18]/30 lg:to-transparent' : ''}`} />

                        {/* Badge on image */}
                        {service.popularBadge && (
                          <span className="absolute left-4 top-4 z-10 inline-flex items-center gap-1.5 rounded-lg bg-[#F59E0B]/90 px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-wider text-white shadow-lg">
                            <Star className="h-3 w-3 fill-current" />
                            Popular Choice
                          </span>
                        )}
                      </div>
                    </div>

                    {/* ── Content ─────────────────────────────────────── */}
                    <div className={`lg:col-span-7 p-5 sm:p-7 lg:p-8 flex flex-col justify-center ${isReversed ? 'lg:order-1' : 'lg:order-2'}`}>

                      {/* Category */}
                      <div className="flex items-center gap-2.5 mb-3">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#3B82F6]/[0.1]">
                          <Icon className="h-4 w-4 text-[#3B82F6]" aria-hidden="true" />
                        </div>
                        <span className="text-[11px] font-bold uppercase tracking-[0.1em] text-[#3B82F6]/80">
                          {category}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl sm:text-2xl font-black tracking-[-0.02em] text-white leading-tight mb-2">
                        {service.title}
                      </h3>

                      {/* Description */}
                      <p className="text-[13px] text-[#64748B] leading-relaxed mb-5 max-w-lg">
                        {service.subtitle}
                      </p>

                      {/* Features */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 mb-6">
                        {service.features.map((feat, idx) => (
                          <div key={idx} className="flex items-center gap-2.5 text-[13px] text-[#94A3B8]">
                            <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-[#3B82F6]/60" aria-hidden="true" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>

                      {/* Price & CTA */}
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-5 border-t border-white/[0.05]">
                        <div>
                          <span className="text-[10px] text-[#475569] uppercase font-semibold tracking-wider block mb-0.5">Starting from</span>
                          <span className="text-2xl font-black text-white tracking-tight">{formatPKR(service.priceStarting)}</span>
                        </div>

                        <button
                          onClick={() => openBooking(service)}
                          className="group/btn inline-flex items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-[#3B82F6] to-[#2563EB] px-7 py-3 text-[14px] font-bold text-white transition-all duration-300 hover:shadow-[0_0_24px_rgba(59,130,246,0.35)] hover:scale-[1.02] active:scale-[0.98] touch-target"
                        >
                          Book Service
                          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
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
  );
}
