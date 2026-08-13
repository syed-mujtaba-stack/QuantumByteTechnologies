'use client';

import React from 'react';
import { GSAPReveal } from './GSAPWrapper';
import { WaveDivider } from './WaveDivider';
import { ShieldCheck, Truck, Cpu, Clock, Award, RotateCcw, BadgeCheck } from 'lucide-react';

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
    <section id="features-section" className="qb-page-section relative border-b border-[#0d2b20] bg-[#04100b] py-14 lg:py-16">
      <div className="pointer-events-none absolute -top-32 right-0 h-96 w-96 rounded-full bg-[#10b981]/8 blur-[140px]" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-80 w-80 rounded-full bg-[#14b8a6]/6 blur-[140px]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center space-y-3 max-w-2xl mx-auto">
          <GSAPReveal direction="down" delay={0.05}>
            <span className="inline-flex items-center gap-2 rounded-full border border-[#10b981]/40 bg-[#10b981]/10 px-4 py-1.5 text-xs font-extrabold uppercase tracking-widest text-[#34d399]">
              <BadgeCheck className="h-3.5 w-3.5" />
              Why Build With QuantumByte
            </span>
          </GSAPReveal>
          <GSAPReveal direction="up" delay={0.15}>
            <h2 className="text-3xl font-black text-white sm:text-4xl lg:text-5xl">
              TRUSTED <span className="text-[#34d399] glow-red-text">GUARANTEES</span>
            </h2>
          </GSAPReveal>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((item, idx) => {
            const Icon = item.icon;
            return (
              <GSAPReveal key={idx} direction="up" delay={0.1 * idx}>
                <div className="group flex items-start gap-4 rounded-xl border border-[#1a3a2c] bg-[#0a1912] p-5 transition hover:border-[#10b981]/50 hover:bg-[#0d2218] hover:shadow-xl hover:shadow-[#10b981]/10">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-[#10b981]/10 text-[#34d399] group-hover:bg-[#10b981] group-hover:text-white transition">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-sm font-extrabold text-white group-hover:text-[#34d399] transition">
                      {item.title}
                    </h4>
                    <p className="text-xs text-[#9ca3af] leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </GSAPReveal>
            );
          })}
        </div>
      </div>
      <WaveDivider fill="#100a04" />
    </section>
  );
}
