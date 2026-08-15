'use client';

import React from 'react';
import Image from 'next/image';
import { ITService } from '@/sanity/lib/data';
import { useCart } from '@/app/context/CartContext';
import { formatPKR } from '@/sanity/lib/currency';
import { GSAPReveal, GSAPHoverTilt } from './GSAPWrapper';
import { Wrench, CheckCircle2, ArrowRight, Cpu, Network, Code, HardDrive } from 'lucide-react';

interface ITServicesSectionProps {
  itServices: ITService[];
}

const serviceIcons = {
  'Custom Gaming & Workstation PC Assembly': Cpu,
  'Hardware Maintenance & Chip-Level Repair': HardDrive,
  'Corporate IT Infrastructure & Networking': Network,
  'Full-Stack Web & Mobile App Development': Code,
};

export function ITServicesSection({ itServices }: ITServicesSectionProps) {
  const { openBooking } = useCart();

  return (
    <section className="border-y border-[#1a1a24] bg-[#030305] py-12 lg:py-20" aria-labelledby="services-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-10 lg:mb-16">
          <GSAPReveal direction="down" delay={0.05}>
            <span className="inline-flex items-center gap-2 rounded-full border border-[#ff003c]/30 bg-[#ff003c]/10 px-4 py-1.5 text-xs font-extrabold uppercase tracking-widest text-[#ff003c]">
              <Wrench className="h-3.5 w-3.5" />
              Professional IT & Hardware Services
            </span>
          </GSAPReveal>

          <GSAPReveal direction="up" delay={0.15}>
            <h2 id="services-heading" className="text-2xl sm:text-3xl lg:text-4xl font-black text-white leading-tight">
              Enterprise-Grade <span className="text-[#ff003c]">IT Solutions</span>
            </h2>
          </GSAPReveal>

          <GSAPReveal direction="up" delay={0.25}>
            <p className="text-base text-[#6b6b7a] leading-relaxed max-w-2xl mx-auto">
              Beyond hardware retail, QuantumByte Technologies offers certified technical expertise in custom PC building, component repair, corporate networking, and software engineering.
            </p>
          </GSAPReveal>
        </div>

        <div className="space-y-6 lg:space-y-8">
          {itServices.map((service, index) => {
            const Icon = serviceIcons[service.title as keyof typeof serviceIcons] || Wrench;

            return (
              <GSAPReveal key={service.id} direction="up" delay={0.2 + index * 0.08} distance={30}>
                <div className="group rounded-2xl border border-[#1a1a24] bg-[#08080c] overflow-hidden transition-all duration-300 hover:border-[#ff003c]/30 hover:shadow-xl hover:shadow-[#ff003c]/10">

                  {/* Mobile: Image on top, Content below */}
                  <div className="lg:grid lg:grid-cols-12 lg:gap-8 lg:items-center">
                    <div className={`relative aspect-[4/3] overflow-hidden rounded-t-2xl lg:rounded-t-none lg:rounded-l-2xl lg:col-span-7 ${index % 2 === 0 ? '' : 'lg:col-start-6'}`}>
                      <Image
                        src={service.imageUrl}
                        alt={service.title}
                        fill
                        priority={index === 0}
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-102"
                      />
                      {service.popularBadge && (
                        <span className="absolute left-4 top-4 z-10 rounded-full bg-[#ff003c] px-3 py-1 text-[10px] font-extrabold text-white uppercase tracking-wider shadow-lg shadow-[#ff003c]/30">
                          Popular Choice
                        </span>
                      )}
                    </div>

                    <div className={`p-4 sm:p-6 lg:p-0 lg:col-span-5 ${index % 2 === 0 ? 'lg:col-start-8' : 'lg:col-start-1'} space-y-5`}>
                      <div className="flex items-center gap-3">
                        <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#ff003c]/10 text-[#ff003c] shrink-0">
                          <Icon className="h-6 w-6" aria-hidden="true" />
                        </div>
                        <div>
                          <h3 className="text-xl sm:text-2xl font-black text-white">{service.title}</h3>
                          <p className="text-sm text-[#6b6b7a] mt-0.5">{service.subtitle}</p>
                        </div>
                      </div>

                      <div className="space-y-3">
                        {service.features.map((feat, idx) => (
                          <div key={idx} className="flex items-center gap-3 text-sm text-[#9c9ca8]">
                            <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-[#ff003c]" aria-hidden="true" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>

                      <div className="flex flex-col sm:flex-row items-center justify-between pt-4 border-t border-[#1a1a24]">
                        <div className="text-center sm:text-left w-full">
                          <span className="text-xs text-[#6b6b7a] block uppercase font-semibold tracking-wider">Starting from</span>
                          <span className="text-2xl sm:text-3xl font-black text-white">{formatPKR(service.priceStarting)}</span>
                        </div>

                        <button
                          onClick={() => openBooking(service)}
                          className="btn btn-primary justify-center gap-2 whitespace-nowrap mt-3 sm:mt-0 w-full sm:w-auto"
                        >
                          Book Service
                          <ArrowRight className="h-4.5 w-4.5" />
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