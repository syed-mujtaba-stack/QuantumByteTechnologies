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

const serviceIcons: Record<string, React.ElementType> = {
  'Custom Gaming & Workstation PC Assembly':     Cpu,
  'Hardware Maintenance & Chip-Level Repair':    HardDrive,
  'Corporate IT Infrastructure & Networking':    Network,
  'Full-Stack Web & Mobile App Development':     Code,
};

const serviceCategories: Record<string, string> = {
  'Custom Gaming & Workstation PC Assembly':     'PC Building',
  'Hardware Maintenance & Chip-Level Repair':    'Repair',
  'Corporate IT Infrastructure & Networking':    'Infrastructure',
  'Full-Stack Web & Mobile App Development':     'Development',
};

export function ITServicesSection({ itServices }: ITServicesSectionProps) {
  const { openBooking } = useCart();

  return (
    <section
      className="relative overflow-hidden border-y border-white/[0.06] bg-[#05070D] py-14 lg:py-20"
      aria-labelledby="services-heading"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[350px] w-[600px] rounded-full bg-[#3B82F6]/[0.025] blur-[100px]" />
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#3B82F6]/[0.08] to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section intro */}
        <div className="text-center max-w-2xl mx-auto mb-10 lg:mb-14">
          <GSAPReveal direction="down" delay={0.05}>
            <div className="inline-flex items-center gap-1.5 rounded-full border border-[#3B82F6]/20 bg-[#3B82F6]/[0.06] px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.1em] text-[#3B82F6] mb-4">
              <Wrench className="h-3 w-3" />
              Professional IT &amp; Hardware Services
            </div>
          </GSAPReveal>

          <GSAPReveal direction="up" delay={0.1}>
            <h2
              id="services-heading"
              className="text-[1.85rem] sm:text-4xl lg:text-[2.5rem] font-black tracking-[-0.03em] leading-[1.1] text-white"
            >
              Enterprise-Grade{' '}
              <span className="bg-gradient-to-r from-[#60A5FA] via-[#3B82F6] to-[#06B6D4] bg-clip-text text-transparent">
                IT Solutions
              </span>
            </h2>
          </GSAPReveal>

          <GSAPReveal direction="up" delay={0.15}>
            <p className="mt-3 text-[14px] text-[#64748B] leading-relaxed max-w-xl mx-auto">
              Beyond hardware retail — certified expertise in custom PC building, component repair,
              corporate networking, and software engineering.
            </p>
          </GSAPReveal>
        </div>

        {/* Service cards */}
        <div className="space-y-4 lg:space-y-5">
          {itServices.map((service, index) => {
            const Icon      = serviceIcons[service.title]   ?? Wrench;
            const category  = serviceCategories[service.title] ?? 'Service';
            const isReversed = index % 2 !== 0;

            return (
              <GSAPReveal key={service.id} direction="up" delay={0.08 + index * 0.05} distance={18}>
                <div className="group relative rounded-2xl border border-white/[0.06] bg-[#0B0F18] overflow-hidden transition-all duration-300 hover:border-[#3B82F6]/18 hover:shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
                  <div className="lg:grid lg:grid-cols-12 lg:items-stretch">

                    {/* Image column */}
                    <div className={`relative overflow-hidden lg:col-span-5 ${isReversed ? 'lg:order-2' : 'lg:order-1'}`}>
                      <div className="relative h-48 sm:h-56 lg:h-full lg:min-h-[280px]">
                        <Image
                          src={service.imageUrl}
                          alt={service.title}
                          fill
                          priority={index === 0}
                          sizes="(max-width: 1024px) 100vw, 42vw"
                          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                        />
                        {/* Gradient — mobile: bottom fade, desktop: side fade */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F18]/50 to-transparent lg:hidden" />
                        <div className={`hidden lg:block absolute inset-0 ${isReversed ? 'bg-gradient-to-l from-[#0B0F18]/20 to-transparent' : 'bg-gradient-to-r from-transparent to-[#0B0F18]/20'}`} />

                        {/* Popular badge */}
                        {service.popularBadge && (
                          <span className="absolute left-3 top-3 z-10 inline-flex items-center gap-1 rounded-lg bg-[#F59E0B]/90 px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-wider text-white shadow-lg">
                            <Star className="h-3 w-3 fill-current" />
                            Popular
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Content column */}
                    <div className={`lg:col-span-7 p-5 sm:p-6 lg:p-8 flex flex-col justify-center ${isReversed ? 'lg:order-1' : 'lg:order-2'}`}>

                      {/* Category label */}
                      <div className="flex items-center gap-2 mb-3">
                        <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#3B82F6]/[0.1]">
                          <Icon className="h-3.5 w-3.5 text-[#3B82F6]" aria-hidden="true" />
                        </div>
                        <span className="text-[11px] font-bold uppercase tracking-[0.1em] text-[#3B82F6]/80">
                          {category}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl sm:text-[1.35rem] font-black tracking-[-0.02em] text-white leading-tight mb-2">
                        {service.title}
                      </h3>

                      {/* Description */}
                      <p className="text-[13px] text-[#64748B] leading-relaxed mb-5 max-w-lg">
                        {service.subtitle}
                      </p>

                      {/* Features grid */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-1.5 mb-6">
                        {service.features.map((feat, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-[12.5px] text-[#94A3B8]">
                            <CheckCircle2 className="h-3.5 w-3.5 shrink-0 mt-[1px] text-[#3B82F6]/55" aria-hidden="true" />
                            <span className="leading-snug">{feat}</span>
                          </div>
                        ))}
                      </div>

                      {/* Price & CTA */}
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-5 border-t border-white/[0.05]">
                        <div>
                          <span className="text-[10px] font-semibold text-[#475569] uppercase tracking-wider block mb-0.5">
                            Starting from
                          </span>
                          <span className="text-[1.6rem] font-black text-white tracking-tight leading-none">
                            {formatPKR(service.priceStarting)}
                          </span>
                        </div>

                        <button
                          onClick={() => openBooking(service)}
                          className="group/btn inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#3B82F6] to-[#2563EB] px-6 py-2.5 text-[13px] font-bold text-white transition-all duration-200 hover:shadow-[0_0_20px_rgba(59,130,246,0.35)] hover:scale-[1.02] active:scale-[0.98]"
                        >
                          Book Service
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
  );
}
