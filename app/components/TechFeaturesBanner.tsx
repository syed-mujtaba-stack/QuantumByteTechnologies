'use client';

import React from 'react';
import { GSAPFadeIn } from './GSAPWrapper';
import { ShieldCheck, Truck, Cpu, Clock, Award, RotateCcw } from 'lucide-react';

export function TechFeaturesBanner() {
  const features = [
    {
      icon: ShieldCheck,
      title: '100% Genuine Guarantee',
      desc: 'Sourced directly from official authorized brand distributors with global warranty.',
    },
    {
      icon: Cpu,
      title: 'Expert Overclocking & Testing',
      desc: 'Every custom rig undergoes 24-hour synthetic thermal stress testing before dispatch.',
    },
    {
      icon: Truck,
      title: 'Express Doorstep Delivery',
      desc: 'Insured anti-static wooden crate packaging with real-time tracking.',
    },
    {
      icon: Clock,
      title: '24/7 Priority Tech Support',
      desc: 'Direct access to senior hardware engineers & software consultants anytime.',
    },
    {
      icon: Award,
      title: 'Certified Lab Technicians',
      desc: 'BGA micro-soldering & chip-level repairs handled by IPC-certified engineers.',
    },
    {
      icon: RotateCcw,
      title: 'Hassle-Free 14-Day Returns',
      desc: 'Instant replacement policy for DOA or manufacturing defect hardware.',
    },
  ];

  return (
    <section id="features-section" className="relative border-b border-[#22222e] bg-[#08080d] py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((item, idx) => {
            const Icon = item.icon;
            return (
              <GSAPFadeIn key={idx} direction="up" delay={0.1 * idx}>
                <div className="group flex items-start gap-4 rounded-xl border border-[#22222e] bg-[#0e0e12] p-5 transition hover:border-[#ff003c]/50 hover:bg-[#12121a]">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-[#ff003c]/10 text-[#ff003c] group-hover:bg-[#ff003c] group-hover:text-white transition">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-sm font-extrabold text-white group-hover:text-[#ff003c] transition">
                      {item.title}
                    </h4>
                    <p className="text-xs text-[#a1a1aa] leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </GSAPFadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
