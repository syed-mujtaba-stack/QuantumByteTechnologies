'use client';

import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { useCart } from '@/app/context/CartContext';
import { GSAPFadeIn } from './GSAPWrapper';
import {
  ShieldCheck,
  Cpu,
  ArrowRight,
  Wrench,
  Sparkles,
  Star,
  Zap,
  Truck,
  Headphones,
  ArrowUpRight,
} from 'lucide-react';

// Lazy-load the heavy THREE.js scene — excluded from initial bundle
const Hyperspeed = dynamic(() => import('./Hyperspeed'), {
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-[#05070D]" />,
});

const HYPERSPEED_OPTIONS = {
  distortion: 'turbulentDistortion',
  length: 400,
  roadWidth: 10,
  islandWidth: 2,
  lanesPerRoad: 3,
  fov: 90,
  fovSpeedUp: 150,
  speedUp: 2,
  carLightsFade: 0.4,
  totalSideLightSticks: 20,
  lightPairsPerRoadWay: 40,
  shoulderLinesWidthPercentage: 0.05,
  brokenLinesWidthPercentage: 0.1,
  brokenLinesLengthPercentage: 0.5,
  lightStickWidth: [0.12, 0.5],
  lightStickHeight: [1.3, 1.7],
  movingAwaySpeed: [60, 80],
  movingCloserSpeed: [-120, -160],
  carLightsLength: [12, 80],
  carLightsRadius: [0.05, 0.14],
  carWidthPercentage: [0.3, 0.5],
  carShiftX: [-0.8, 0.8],
  carFloorSeparation: [0, 5],
  colors: {
    roadColor: 0x080808,
    islandColor: 0x0a0a0a,
    background: 0x000000,
    shoulderLines: 0x3B82F6,
    brokenLines: 0x3B82F6,
    leftCars: [0x3B82F6, 0x8B5CF6, 0x06B6D4],
    rightCars: [0x60A5FA, 0x06B6D4, 0xffffff],
    sticks: 0x3B82F6,
  },
};

const features = [
  { icon: ShieldCheck, label: '100% Genuine',     desc: 'Official Warranty' },
  { icon: Cpu,         label: 'Custom PCs',        desc: 'Built & Tested' },
  { icon: Star,        label: '4.9 / 5 Rating',    desc: '5,000+ Clients' },
  { icon: Zap,         label: 'GaN Charging',      desc: 'Fast & Compact' },
  { icon: Truck,       label: 'Express Delivery',  desc: 'Nationwide' },
  { icon: Headphones,  label: '24/7 Support',      desc: 'Expert Help' },
];

export function Hero() {
  const { openBooking, setSelectedCategory } = useCart();
  const [showWebGL, setShowWebGL] = useState(false);

  useEffect(() => {
    // Only run WebGL on desktop + devices without reduced-motion preference
    const isMobile = window.innerWidth < 1024;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!isMobile && !reducedMotion) {
      setShowWebGL(true);
    }
  }, []);

  const handleExploreStore = () => {
    setSelectedCategory('all');
    const catalogEl = document.getElementById('catalog-section');
    if (catalogEl) {
      if (window.__lenis) {
        window.__lenis.scrollTo(catalogEl, { offset: -80 });
      } else {
        catalogEl.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section
      id="hero-section"
      className="relative overflow-hidden bg-[#05070D] min-h-[100svh] flex items-center"
    >
      {/* ── Hyperspeed background — lazy loaded, desktop only ────── */}
      <div className="absolute inset-0 z-0">
        {showWebGL
          ? <Hyperspeed effectOptions={HYPERSPEED_OPTIONS} />
          : <div className="absolute inset-0 bg-[#020C1B]" />
        }
      </div>

      {/* ── Gradient overlays ────────────────────────────────────── */}
      {/* Left scrim — makes copy legible at all widths */}
      <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-r from-[#05070D]/95 via-[#05070D]/55 to-transparent" />
      {/* Soft radial blue hint — keeps it from looking flat */}
      <div className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(ellipse_60%_80%_at_15%_50%,rgba(59,130,246,0.05)_0%,transparent_100%)]" />
      {/* Bottom vignette — smooth transition to catalog */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 z-[1] bg-gradient-to-t from-[#05070D] to-transparent" />

      {/* ── Content ──────────────────────────────────────────────── */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-0">
        <div className="max-w-7xl mx-auto">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8 lg:items-center lg:min-h-[100svh] lg:py-20">

            {/* ── Left column ──────────────────────────────────── */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">

              {/* Eyebrow badge */}
              <GSAPFadeIn direction="down" delay={0.1}>
                <div className="inline-flex items-center gap-2 rounded-full border border-[#3B82F6]/20 bg-[#3B82F6]/[0.06] px-3.5 py-1.5 backdrop-blur-xl">
                  <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#3B82F6]/20">
                    <Sparkles className="h-2.5 w-2.5 text-[#3B82F6]" />
                  </span>
                  <span className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[#94A3B8]">
                    QuantumByte Technologies
                  </span>
                  <span className="w-px h-3 bg-white/[0.12]" />
                  <span className="text-[11px] text-[#64748B]">Official Hardware &amp; IT Hub</span>
                </div>
              </GSAPFadeIn>

              {/* Headline */}
              <GSAPFadeIn direction="up" delay={0.2}>
                <h1 className="text-[2.6rem] sm:text-5xl lg:text-[3.25rem] xl:text-[3.75rem] font-black tracking-[-0.03em] leading-[1.07] text-white max-w-2xl mx-auto lg:mx-0">
                  Next-Gen{' '}
                  <span className="relative inline-block">
                    <span className="bg-gradient-to-r from-[#60A5FA] via-[#3B82F6] to-[#06B6D4] bg-clip-text text-transparent">
                      Computers
                    </span>
                    <span className="absolute -bottom-0.5 left-0 right-0 h-px bg-gradient-to-r from-[#3B82F6]/50 to-transparent" />
                  </span>
                  <br className="hidden sm:block" />{' '}
                  &amp; Enterprise IT Services
                </h1>
              </GSAPFadeIn>

              {/* Subheadline */}
              <GSAPFadeIn direction="up" delay={0.3}>
                <p className="max-w-[42ch] text-[15px] sm:text-[16px] text-[#94A3B8] leading-[1.7] mx-auto lg:mx-0">
                  Your premier source for high-performance Gaming PCs, MacBooks, Smartphones,
                  GaN Chargers, Genuine Parts, and full-scale Enterprise IT Solutions.
                </p>
              </GSAPFadeIn>

              {/* CTAs */}
              <GSAPFadeIn direction="up" delay={0.4}>
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 pt-1">
                  <button
                    onClick={handleExploreStore}
                    className="group relative flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-[#3B82F6] to-[#2563EB] text-[14px] font-bold text-white transition-all duration-300 hover:shadow-[0_0_28px_rgba(59,130,246,0.4)] hover:scale-[1.02] active:scale-[0.98] overflow-hidden"
                  >
                    <span className="absolute inset-0 bg-white/[0.08] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    Explore Catalog
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                  </button>

                  <button
                    onClick={() => openBooking()}
                    className="group flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 rounded-xl border border-white/[0.1] bg-white/[0.03] backdrop-blur-sm text-[14px] font-medium text-white/75 hover:text-white hover:bg-white/[0.06] hover:border-white/[0.15] transition-all duration-300 active:scale-[0.98]"
                  >
                    <Wrench className="h-4 w-4 text-[#3B82F6] shrink-0" />
                    Book IT Consultation
                    <ArrowUpRight className="h-3.5 w-3.5 text-[#475569] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>
                </div>
              </GSAPFadeIn>

              {/* Feature chips */}
              <GSAPFadeIn direction="up" delay={0.5}>
                <div className="flex flex-wrap justify-center lg:justify-start gap-2 pt-2">
                  {features.map((feature, index) => {
                    const Icon = feature.icon;
                    return (
                      <div
                        key={index}
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-white/[0.06] bg-white/[0.025] backdrop-blur-sm transition-all duration-200 hover:border-[#3B82F6]/25 hover:bg-[#3B82F6]/[0.04]"
                      >
                        <Icon className="h-3 w-3 text-[#3B82F6]/80 shrink-0" />
                        <span className="text-[11px] font-semibold text-[#94A3B8] whitespace-nowrap leading-none">
                          {feature.label}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </GSAPFadeIn>
            </div>

            {/* ── Right column — desktop info card ─────────────── */}
            <div className="hidden lg:flex lg:col-span-5 items-center justify-end">
              <GSAPFadeIn direction="right" delay={0.55} duration={1.1}>
                <div className="relative w-full max-w-[360px]">
                  {/* Ambient glow */}
                  <div className="absolute -inset-10 bg-gradient-to-br from-[#3B82F6]/[0.08] via-[#06B6D4]/[0.04] to-transparent rounded-[2rem] blur-3xl" />

                  {/* Card */}
                  <div className="relative rounded-2xl border border-white/[0.07] bg-[#0B0F18]/70 backdrop-blur-2xl p-6 space-y-5">
                    <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-[#3B82F6]/35 to-transparent" />

                    {/* Header */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#3B82F6]/10">
                          <Cpu className="h-4 w-4 text-[#3B82F6]" />
                        </div>
                        <div>
                          <p className="text-[12px] font-bold text-white leading-tight">Hyperspeed Engine</p>
                          <p className="text-[10px] text-[#475569]">WebGL Particle Simulation</p>
                        </div>
                      </div>
                      <span className="relative flex h-2 w-2">
                        <span className="absolute h-2 w-2 rounded-full bg-[#22C55E] animate-ping opacity-40" />
                        <span className="relative h-2 w-2 rounded-full bg-[#22C55E]" />
                      </span>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        { value: '60+', label: 'FPS Render' },
                        { value: '3D',  label: 'WebGL Core' },
                        { value: 'RT',  label: 'Real Time' },
                      ].map((s) => (
                        <div key={s.label} className="rounded-xl border border-white/[0.05] bg-white/[0.025] p-3 text-center">
                          <p className="text-[18px] font-black text-white leading-none">{s.value}</p>
                          <p className="text-[10px] text-[#475569] mt-1">{s.label}</p>
                        </div>
                      ))}
                    </div>

                    {/* Spec bars */}
                    <div className="space-y-3">
                      {[
                        { label: 'Distortion',   value: 'Turbulent', pct: 85 },
                        { label: 'Road Width',   value: '10 Lanes',  pct: 70 },
                        { label: 'Light Sticks', value: '20 Pairs',  pct: 60 },
                      ].map((spec) => (
                        <div key={spec.label}>
                          <div className="flex items-center justify-between mb-1.5">
                            <span className="text-[11px] text-[#64748B]">{spec.label}</span>
                            <span className="text-[11px] font-semibold text-white/60">{spec.value}</span>
                          </div>
                          <div className="h-[3px] rounded-full bg-white/[0.05] overflow-hidden">
                            <div
                              className="h-full rounded-full bg-gradient-to-r from-[#3B82F6] to-[#06B6D4]"
                              style={{ width: `${spec.pct}%` }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Footer */}
                    <div className="flex items-center gap-2 pt-1 border-t border-white/[0.05]">
                      <div className="flex -space-x-1.5">
                        {[0, 1, 2].map((i) => (
                          <div key={i} className="h-5 w-5 rounded-full border border-[#0B0F18] bg-gradient-to-br from-[#3B82F6] to-[#1D4ED8]" />
                        ))}
                      </div>
                      <span className="text-[10px] text-[#475569]">Live rendering · Updated every frame</span>
                    </div>
                  </div>
                </div>
              </GSAPFadeIn>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
