'use client';

import React from 'react';
import Image from 'next/image';
import { ITService } from '@/sanity/lib/data';
import { useCart } from '@/app/context/CartContext';
import { formatPKR } from '@/sanity/lib/currency';
import { GSAPReveal, GSAPHoverTilt } from './GSAPWrapper';
import { WaveDivider } from './WaveDivider';
import { Wrench, CheckCircle2, ArrowRight } from 'lucide-react';

interface ITServicesSectionProps {
  itServices: ITService[];
}

export function ITServicesSection({ itServices }: ITServicesSectionProps) {
  const { openBooking } = useCart();

  return (
    <section id="services-section" className="qb-page-section relative border-b border-[#1c1440] bg-[#0b0714] py-16 lg:py-20 cyber-grid-bg">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#8b5cf6]/10 blur-[160px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <GSAPReveal direction="down" delay={0.1}>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#8b5cf6]/40 bg-[#8b5cf6]/10 px-4 py-1.5 text-xs font-extrabold text-white">
              <Wrench className="h-3.5 w-3.5 text-[#a78bfa]" />
              <span>PROFESSIONAL IT & HARDWARE SERVICES</span>
            </div>
          </GSAPReveal>

          <GSAPReveal direction="up" delay={0.2}>
            <h2 className="text-3xl font-black text-white sm:text-4xl lg:text-5xl">
              ENTERPRISE-GRADE <span className="text-[#a78bfa] glow-red-text">IT SOLUTIONS</span>
            </h2>
          </GSAPReveal>

          <GSAPReveal direction="up" delay={0.3}>
            <p className="text-sm sm:text-base text-[#a1a1aa] leading-relaxed">
              Beyond hardware retail, QuantumByte Technologies offers certified technical expertise in custom PC building, component repair, corporate networking, and software engineering.
            </p>
          </GSAPReveal>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {itServices.map((service, index) => (
            <GSAPReveal key={service.id} direction="up" delay={0.2 + index * 0.1}>
              <GSAPHoverTilt className="h-full">
                <div className="group relative flex h-full flex-col justify-between rounded-2xl border border-[#22222e] bg-[#0e0e12] p-6 transition-all duration-300 hover:border-[#8b5cf6]/60 hover:bg-[#131020] hover:shadow-2xl hover:shadow-[#8b5cf6]/15 glass-panel">
                  {service.popularBadge && (
                    <span className="absolute right-6 top-6 rounded-full bg-[#ff003c] px-3 py-1 text-[10px] font-extrabold text-white uppercase tracking-wider shadow-md shadow-[#ff003c]/30">
                      POPULAR CHOICE
                    </span>
                  )}

                  <div className="space-y-4">
                    <div className="relative h-48 w-full overflow-hidden rounded-xl bg-[#050505]">
                      <Image
                        src={service.imageUrl}
                        alt={service.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>

                    <div>
                      <h3 className="text-xl font-extrabold text-white group-hover:text-[#ff003c] transition">
                        {service.title}
                      </h3>
                      <p className="mt-1 text-xs text-[#a1a1aa]">{service.subtitle}</p>
                    </div>

                    <div className="space-y-2 pt-2 border-t border-[#1f1f2b]">
                      {service.features.map((feat, idx) => (
                        <div key={idx} className="flex items-center gap-2.5 text-xs text-white">
                          <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-[#a78bfa]" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 flex items-center justify-between pt-4 border-t border-[#1f1f2b]">
                    <div>
                      <span className="text-[11px] text-[#71717a] block uppercase font-semibold">Starting from</span>
                      <span className="text-2xl font-black text-white">{formatPKR(service.priceStarting)}</span>
                    </div>

                    <button
                      onClick={() => openBooking(service)}
                      className="group/btn red-gradient-btn flex items-center gap-2 rounded-xl px-5 py-3 text-xs font-extrabold text-white shadow-lg shadow-[#ff003c]/20"
                    >
                      Book Service
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/btn:translate-x-1" />
                    </button>
                  </div>
                </div>
              </GSAPHoverTilt>
            </GSAPReveal>
          ))}
        </div>
      </div>
      <WaveDivider fill="#04100b" />
    </section>
  );
}
