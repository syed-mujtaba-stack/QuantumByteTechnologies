'use client';

import React from 'react';
import { useCart } from '@/app/context/CartContext';
import { GSAPFadeIn } from './GSAPWrapper';
import { WaveDivider } from './WaveDivider';
import Hyperspeed from './Hyperspeed';
import { ShieldCheck, Cpu, ArrowRight, Wrench, Sparkles, Star } from 'lucide-react';

// Memoized so the WebGL scene isn't recreated on re-renders.
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
    shoulderLines: 0xff003c,
    brokenLines: 0xff003c,
    leftCars: [0xff003c, 0xd856bf, 0x6750a2],
    rightCars: [0x03b3c3, 0x0e5ea5, 0xffffff],
    sticks: 0xff003c
  }
};

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
      className="qb-page-section relative overflow-hidden border-b border-[#22222e] bg-[#050505]"
    >
      {/* Hyperspeed — full-bleed animated background */}
      <div className="absolute inset-0 z-0">
        <Hyperspeed effectOptions={HYPERSPEED_OPTIONS} />
      </div>

      {/* Readability scrim over the animation */}
      <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-r from-[#050505]/85 via-[#050505]/40 to-[#050505]/85" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Left Column: Heading & CTAs */}
          <div className="lg:col-span-8 space-y-6 text-center lg:text-left">
            {/* Top Badge */}
            <GSAPFadeIn direction="down" delay={0.1}>
              <div className="inline-flex items-center gap-2.5 rounded-full border border-[#ff003c]/40 bg-[#050505]/70 px-4 py-1.5 text-xs font-extrabold text-white backdrop-blur-md shadow-lg shadow-[#ff003c]/10">
                <Sparkles className="h-3.5 w-3.5 text-[#ff003c] animate-spin" />
                <span>QUANTUMBYTE TECHNOLOGIES</span>
                <span className="h-1 w-1 rounded-full bg-[#ff003c]" />
                <span className="text-[#a1a1aa] uppercase tracking-wider font-semibold">Official Hardware &amp; IT Hub</span>
              </div>
            </GSAPFadeIn>

            {/* Main Headline */}
            <GSAPFadeIn direction="up" delay={0.2}>
              <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl leading-[1.1]">
                NEXT-GEN <span className="bg-gradient-to-r from-white via-white to-[#ff003c] bg-clip-text text-transparent">COMPUTERS</span> &amp; ENTERPRISE{' '}
                <span className="relative inline-block text-[#ff003c] glow-red-text">
                  IT SERVICES
                </span>
              </h1>
            </GSAPFadeIn>

            {/* Subtitle */}
            <GSAPFadeIn direction="up" delay={0.3}>
              <p className="max-w-2xl text-base text-[#c9c9d1] sm:text-lg lg:text-xl font-normal leading-relaxed mx-auto lg:mx-0">
                Your premier source for high-performance Gaming PCs, MacBooks, Smartphones, GaN Chargers, Genuine Component Parts, and full-scale Enterprise IT Solutions.
              </p>
            </GSAPFadeIn>

            {/* Buttons */}
            <GSAPFadeIn direction="up" delay={0.4}>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <button
                  onClick={handleExploreStore}
                  className="group red-gradient-btn flex w-full sm:w-auto items-center justify-center gap-3 rounded-xl px-7 py-4 text-sm font-extrabold text-white shadow-xl shadow-[#ff003c]/25"
                >
                  Shop Products &amp; Parts
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>

                <button
                  onClick={() => openBooking()}
                  className="flex w-full sm:w-auto items-center justify-center gap-2.5 rounded-xl border border-[#22222e] bg-[#0e0e12]/80 px-7 py-4 text-sm font-bold text-white transition hover:border-[#ff003c] hover:bg-[#16161f]"
                >
                  <Wrench className="h-4 w-4 text-[#ff003c]" />
                  Book IT Consultation
                </button>
              </div>
            </GSAPFadeIn>

            {/* Trust Badges */}
            <GSAPFadeIn direction="up" delay={0.5}>
              <div className="pt-6 border-t border-white/10 grid grid-cols-3 gap-4 text-left">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#ff003c]/10 text-[#ff003c]">
                    <ShieldCheck className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white">100% Genuine</h4>
                    <p className="text-[10px] text-[#a1a1aa]">Official Warranty</p>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#ff003c]/10 text-[#ff003c]">
                    <Cpu className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white">Custom PCs</h4>
                    <p className="text-[10px] text-[#a1a1aa]">Overclocked &amp; Tested</p>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#ff003c]/10 text-[#ff003c]">
                    <Star className="h-4 w-4 text-[#ffb800]" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white">4.9/5 Rating</h4>
                    <p className="text-[10px] text-[#a1a1aa]">5,000+ Happy Clients</p>
                  </div>
                </div>
              </div>
            </GSAPFadeIn>
          </div>

          {/* Right Column: Hyperspeed visual spans the full section; the grid stays balanced for CTA readability */}
          <div className="hidden lg:col-span-4 lg:block" />
        </div>
      </div>
      <WaveDivider fill="#060913" />
    </section>
  );
}