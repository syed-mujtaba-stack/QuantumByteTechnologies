'use client';

import React from 'react';
import { GSAPReveal } from './GSAPWrapper';
import { ShieldCheck, Truck, Cpu, Headphones, Award, RotateCcw } from 'lucide-react';

const features = [
  { icon: ShieldCheck, title: '100% Genuine',    desc: 'Official warranty' },
  { icon: Cpu,         title: 'Expert Testing',  desc: '24hr stress test' },
  { icon: Truck,       title: 'Insured Delivery',desc: 'Doorstep tracking' },
  { icon: Headphones,  title: '24/7 Support',    desc: 'Senior engineers' },
  { icon: Award,       title: 'Certified Lab',   desc: 'IPC technicians' },
  { icon: RotateCcw,   title: '14-Day Returns',  desc: 'Instant replacement' },
];

export function TechFeaturesBanner() {
  return (
    <section
      className="relative overflow-hidden qb-section-teal border-y border-white/[0.06] py-8 lg:py-10"
      aria-labelledby="trust-heading"
    >
      {/* Animated background orbs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="qb-orb-drift absolute top-1/2 -translate-y-1/2 -left-20 h-[320px] w-[320px] rounded-full bg-[#0D9488]/[0.18] blur-[90px]" />
        <div className="qb-orb-drift-rev absolute top-1/2 -translate-y-1/2 -right-20 h-[320px] w-[320px] rounded-full bg-[#0891B2]/[0.14] blur-[90px]" />
        <div className="qb-orb-drift-slow absolute top-0 left-1/2 -translate-x-1/2 h-[200px] w-[600px] rounded-full bg-[#047857]/[0.08] blur-[80px]" />
      </div>
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 id="trust-heading" className="sr-only">Trust Guarantees</h2>

        <div className="grid grid-cols-3 lg:grid-cols-6 gap-x-4 gap-y-6 lg:gap-x-8 lg:gap-y-0">
          {features.map((item, idx) => {
            const Icon = item.icon;
            return (
              <GSAPReveal key={idx} direction="up" delay={idx * 0.05} distance={16}>
                <div className="flex flex-col items-center text-center gap-2.5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.06] bg-white/[0.025] text-[#3B82F6] transition-all duration-200 hover:border-[#3B82F6]/25 hover:bg-[#3B82F6]/[0.06]">
                    <Icon className="h-4.5 w-4.5" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-[12.5px] font-semibold text-white leading-tight">{item.title}</h3>
                    <p className="text-[11px] text-[#64748B] mt-0.5">{item.desc}</p>
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
