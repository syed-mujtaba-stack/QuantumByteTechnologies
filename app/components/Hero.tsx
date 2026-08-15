'use client';

import React from 'react';
import { useCart } from '@/app/context/CartContext';
import { GSAPFadeIn } from './GSAPWrapper';
import Hyperspeed from './Hyperspeed';
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
  { icon: ShieldCheck, label: '100% Genuine', desc: 'Official Warranty' },
  { icon: Cpu, label: 'Custom PCs', desc: 'Built & Tested' },
  { icon: Star, label: '4.9/5 Rating', desc: '5,000+ Clients' },
  { icon: Zap, label: 'GaN Tech', desc: 'Fast & Compact' },
  { icon: Truck, label: 'Express Delivery', desc: 'Nationwide' },
  { icon: Headphones, label: '24/7 Support', desc: 'Expert Help' },
];

export function Hero() {
  const { openBooking, setSelectedCategory } = useCart();

  const handleExploreStore = () => {
    setSelectedCategory('all');
    const catalogEl = document.getElementById('catalog-section');
    if (catalogEl) {
      if (window.__lenis) {
        window.__lenis.scrollTo(catalogEl, { offset: 88 });
      } else {
        catalogEl.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section
      id="hero-section"
      className="relative overflow-hidden bg-[#05070D] min-h-screen flex items-center"
    >
      {/* Hyperspeed Animation - PRESERVED EXACTLY */}
      <div className="absolute inset-0 z-0">
        <Hyperspeed effectOptions={HYPERSPEED_OPTIONS} />
      </div>

      {/* ── Overlays ─────────────────────────────────────────────── */}
      {/* Left-to-right gradient for text legibility */}
      <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-r from-[#05070D]/95 via-[#05070D]/50 to-transparent lg:to-[#05070D]/70" />
      {/* Subtle radial accent */}
      <div className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(ellipse_at_20%_50%,rgba(59,130,246,0.06)_0%,transparent_60%)]" />
      {/* Bottom vignette for depth */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 z-[1] bg-gradient-to-t from-[#05070D] to-transparent" />

      {/* ── Content ──────────────────────────────────────────────── */}
      <div className="relative z-10 w-full px-5 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-0">
        <div className="max-w-7xl mx-auto">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8 lg:items-center lg:min-h-screen lg:py-16">

            {/* ── Left Column: Copy ─────────────────────────────────── */}
            <div className="lg:col-span-7 space-y-7 lg:space-y-8 text-center lg:text-left pt-16 lg:pt-0">

              {/* Eyebrow Badge */}
              <GSAPFadeIn direction="down" delay={0.1}>
                <div className="inline-flex items-center gap-2 rounded-full border border-[#3B82F6]/20 bg-[#3B82F6]/[0.06] px-4 py-1.5 backdrop-blur-xl">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#3B82F6]/15">
                    <Sparkles className="h-3 w-3 text-[#3B82F6]" />
                  </span>
                  <span className="text-[11px] font-bold uppercase tracking-[0.12em] text-[#94A3B8]">
                    QuantumByte Technologies
                  </span>
                  <span className="w-px h-3 bg-white/[0.1]" />
                  <span className="text-[11px] font-medium text-[#64748B]">Official Hardware & IT Hub</span>
                </div>
              </GSAPFadeIn>

              {/* Headline */}
              <GSAPFadeIn direction="up" delay={0.2}>
                <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-6xl font-black tracking-[-0.03em] leading-[1.08] text-white max-w-2xl mx-auto lg:mx-0">
                  Next-Gen{' '}
                  <span className="relative inline-block">
                    <span className="bg-gradient-to-r from-[#60A5FA] via-[#3B82F6] to-[#06B6D4] bg-clip-text text-transparent">
                      Computers
                    </span>
                    <span className="absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r from-[#3B82F6]/60 to-transparent" />
                  </span>
                  <br className="hidden sm:block" />{' '}
                  &amp; Enterprise IT Services
                </h1>
              </GSAPFadeIn>

              {/* Subheadline */}
              <GSAPFadeIn direction="up" delay={0.3}>
                <p className="max-w-lg text-[15px] sm:text-base lg:text-[15px] text-[#94A3B8] leading-relaxed mx-auto lg:mx-0">
                  Your premier source for high-performance Gaming PCs, MacBooks, Smartphones, GaN Chargers, Genuine Component Parts, and full-scale Enterprise IT Solutions.
                </p>
              </GSAPFadeIn>

              {/* CTAs */}
              <GSAPFadeIn direction="up" delay={0.4}>
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
                  <button
                    onClick={handleExploreStore}
                    className="group relative flex items-center justify-center gap-2.5 w-full sm:w-auto px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#3B82F6] to-[#2563EB] text-[14px] font-bold text-white transition-all duration-300 hover:shadow-[0_0_32px_rgba(59,130,246,0.35)] hover:scale-[1.02] active:scale-[0.98] touch-target"
                  >
                    Explore Catalog
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    <span className="absolute inset-0 rounded-xl bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </button>

                  <button
                    onClick={() => openBooking()}
                    className="group flex items-center justify-center gap-2.5 w-full sm:w-auto px-7 py-3.5 rounded-xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-sm text-[14px] font-bold text-white/80 hover:text-white hover:bg-white/[0.06] hover:border-white/[0.12] transition-all duration-300 active:scale-[0.98] touch-target"
                  >
                    <Wrench className="h-4 w-4 text-[#3B82F6]" />
                    Book IT Consultation
                    <ArrowUpRight className="h-3.5 w-3.5 text-[#475569] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>
                </div>
              </GSAPFadeIn>

              {/* Feature Rail */}
              <GSAPFadeIn direction="up" delay={0.5}>
                <div className="flex flex-wrap justify-center lg:justify-start gap-2 pt-2">
                  {features.map((feature, index) => {
                    const Icon = feature.icon;
                    return (
                      <div
                        key={index}
                        className="flex items-center gap-2 px-3 py-2 rounded-lg border border-white/[0.05] bg-white/[0.02] backdrop-blur-sm transition-all duration-300 hover:border-[#3B82F6]/20 hover:bg-[#3B82F6]/[0.03] group"
                      >
                        <Icon className="h-3.5 w-3.5 text-[#3B82F6]/70 group-hover:text-[#3B82F6] transition-colors duration-300" />
                        <span className="text-[11px] font-semibold text-[#94A3B8] group-hover:text-white/80 transition-colors duration-300 whitespace-nowrap">
                          {feature.label}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </GSAPFadeIn>
            </div>

            {/* ── Right Column: Visual Card ──────────────────────────── */}
            <div className="hidden lg:flex lg:col-span-5 items-center justify-center">
              <GSAPFadeIn direction="right" delay={0.6} duration={1.2}>
                <div className="relative w-full max-w-md">
                  {/* Ambient glow behind card */}
                  <div className="absolute -inset-8 bg-gradient-to-br from-[#3B82F6]/10 via-[#06B6D4]/5 to-transparent rounded-[2rem] blur-3xl opacity-60" />

                  {/* Main card */}
                  <div className="relative rounded-[1.5rem] border border-white/[0.06] bg-[#0B0F18]/60 backdrop-blur-2xl p-8 space-y-6">
                    {/* Top accent line */}
                    <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-[#3B82F6]/40 to-transparent" />

                    {/* Header */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#3B82F6]/10">
                          <Cpu className="h-4.5 w-4.5 text-[#3B82F6]" />
                        </div>
                        <div>
                          <p className="text-[12px] font-bold text-white">Hyperspeed Engine</p>
                          <p className="text-[10px] text-[#475569]">WebGL Particle Simulation</p>
                        </div>
                      </div>
                      <span className="flex h-2 w-2 items-center justify-center">
                        <span className="absolute h-2 w-2 rounded-full bg-[#22C55E] animate-ping opacity-40" />
                        <span className="relative h-2 w-2 rounded-full bg-[#22C55E]" />
                      </span>
                    </div>

                    {/* Stats grid */}
                    <div className="grid grid-cols-3 gap-3">
                      {[
                        { value: '60+', label: 'FPS Render' },
                        { value: '3D', label: 'WebGL Core' },
                        { value: 'Real', label: 'Time Effects' },
                      ].map((stat, i) => (
                        <div key={i} className="rounded-xl border border-white/[0.05] bg-white/[0.02] p-3 text-center">
                          <p className="text-lg font-black text-white">{stat.value}</p>
                          <p className="text-[10px] font-medium text-[#475569] mt-0.5">{stat.label}</p>
                        </div>
                      ))}
                    </div>

                    {/* Tech specs */}
                    <div className="space-y-2.5">
                      {[
                        { label: 'Distortion', value: 'Turbulent', pct: 85 },
                        { label: 'Road Width', value: '10 Lanes', pct: 70 },
                        { label: 'Light Sticks', value: '20 Pairs', pct: 60 },
                      ].map((spec, i) => (
                        <div key={i} className="space-y-1.5">
                          <div className="flex items-center justify-between">
                            <span className="text-[11px] font-medium text-[#64748B]">{spec.label}</span>
                            <span className="text-[11px] font-bold text-white/70">{spec.value}</span>
                          </div>
                          <div className="h-1 rounded-full bg-white/[0.04] overflow-hidden">
                            <div
                              className="h-full rounded-full bg-gradient-to-r from-[#3B82F6] to-[#06B6D4] transition-all duration-1000"
                              style={{ width: `${spec.pct}%` }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Bottom accent */}
                    <div className="flex items-center gap-2 pt-2 border-t border-white/[0.05]">
                      <div className="flex -space-x-1.5">
                        {[0, 1, 2].map((i) => (
                          <div
                            key={i}
                            className="h-5 w-5 rounded-full border border-[#0B0F18] bg-gradient-to-br from-[#3B82F6] to-[#1D4ED8]"
                          />
                        ))}
                      </div>
                      <span className="text-[10px] font-medium text-[#475569]">
                        Live rendering · Updated every frame
                      </span>
                    </div>
                  </div>
                </div>
              </GSAPFadeIn>
            </div>

            {/* ── Mobile Visual Card ────────────────────────────────── */}
            <div className="lg:hidden mt-10">
              <GSAPFadeIn direction="up" delay={0.6} duration={1.2}>
                <div className="relative max-w-sm mx-auto">
                  <div className="absolute -inset-6 bg-gradient-to-br from-[#3B82F6]/10 via-[#06B6D4]/5 to-transparent rounded-[2rem] blur-3xl opacity-50" />
                  <div className="relative rounded-2xl border border-white/[0.06] bg-[#0B0F18]/60 backdrop-blur-2xl p-6 space-y-5">
                    <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-[#3B82F6]/40 to-transparent" />

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#3B82F6]/10">
                          <Cpu className="h-4 w-4 text-[#3B82F6]" />
                        </div>
                        <div>
                          <p className="text-[12px] font-bold text-white">Hyperspeed Engine</p>
                          <p className="text-[10px] text-[#475569]">WebGL Active</p>
                        </div>
                      </div>
                      <span className="flex h-2 w-2 items-center justify-center">
                        <span className="absolute h-2 w-2 rounded-full bg-[#22C55E] animate-ping opacity-40" />
                        <span className="relative h-2 w-2 rounded-full bg-[#22C55E]" />
                      </span>
                    </div>

                    <div className="grid grid-cols-3 gap-2.5">
                      {[
                        { value: '60+', label: 'FPS' },
                        { value: '3D', label: 'WebGL' },
                        { value: 'Real', label: 'Time' },
                      ].map((stat, i) => (
                        <div key={i} className="rounded-xl border border-white/[0.05] bg-white/[0.02] p-2.5 text-center">
                          <p className="text-base font-black text-white">{stat.value}</p>
                          <p className="text-[10px] text-[#475569] mt-0.5">{stat.label}</p>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center gap-2 pt-2 border-t border-white/[0.05]">
                      <div className="flex -space-x-1.5">
                        {[0, 1, 2].map((i) => (
                          <div
                            key={i}
                            className="h-4 w-4 rounded-full border border-[#0B0F18] bg-gradient-to-br from-[#3B82F6] to-[#1D4ED8]"
                          />
                        ))}
                      </div>
                      <span className="text-[10px] text-[#475569]">Live rendering</span>
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
