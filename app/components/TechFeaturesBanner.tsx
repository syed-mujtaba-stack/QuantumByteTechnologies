'use client';

import React from 'react';
import { GSAPReveal } from './GSAPWrapper';
import { ShieldCheck, Truck, Cpu, Headphones, Award, RotateCcw } from 'lucide-react';

const features = [
  { icon: ShieldCheck, title: '100% Genuine', desc: 'Official warranty' },
  { icon: Cpu, title: 'Expert Testing', desc: '24hr stress test' },
  { icon: Truck, title: 'Insured Delivery', desc: 'Doorstep tracking' },
  { icon: Headphones, title: '24/7 Support', desc: 'Senior engineers' },
  { icon: Award, title: 'Certified Lab', desc: 'IPC technicians' },
  { icon: RotateCcw, title: '14-Day Returns', desc: 'Instant replacement' },
];

export function TechFeaturesBanner() {
  return (
    <section className="border-y border-white/[0.06] bg-[#05070D] py-10 lg:py-14" aria-labelledby="trust-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 id="trust-heading" className="sr-only">Trust Guarantees</h2>

        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 lg:gap-8">
          {features.map((item, idx) => {
            const Icon = item.icon;
            return (
              <GSAPReveal key={idx} direction="up" delay={idx * 0.06} distance={20}>
                <div className="flex flex-col items-center text-center gap-3 p-4 lg:p-0">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-white/[0.03] border border-white/[0.06] text-[#3B82F6] lg:mx-auto transition-colors duration-200 group-hover:border-[#3B82F6]/30 group-hover:bg-[#3B82F6]/[0.08]">
                    <Icon className="h-5.5 w-5.5" aria-hidden="true" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-sm font-semibold text-white leading-snug">{item.title}</h3>
                    <p className="text-[11px] text-[#64748B] leading-relaxed">{item.desc}</p>
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
