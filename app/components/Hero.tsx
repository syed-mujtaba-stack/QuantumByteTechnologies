'use client';

import React from 'react';
import { useCart } from '@/app/context/CartContext';
import { GSAPFadeIn } from './GSAPWrapper';
import Hyperspeed from './Hyperspeed';
import { ShieldCheck, Cpu, ArrowRight, Wrench, Sparkles, Star, Zap, Truck, Headphones } from 'lucide-react';

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

const features = [
  { icon: ShieldCheck, label: '100% Genuine', desc: 'Official Warranty', color: 'text-[#ff003c]' },
  { icon: Cpu, label: 'Custom PCs', desc: 'Overclocked & Tested', color: 'text-[#ff003c]' },
  { icon: Star, label: '4.9/5 Rating', desc: '5,000+ Happy Clients', color: 'text-[#ffb800]' },
  { icon: Zap, label: 'GaN Chargers', desc: 'Fast & Compact', color: 'text-[#00d4aa]' },
  { icon: Truck, label: 'Express Delivery', desc: 'Nationwide Shipping', color: 'text-[#00d4aa]' },
  { icon: Headphones, label: '24/7 Support', desc: 'Expert Tech Help', color: 'text-[#ff003c]' },
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
      className="relative overflow-hidden border-b border-[#232330] bg-[#030305] min-h-[90vh] flex items-center"
    >
      <div className="absolute inset-0 z-0">
        <Hyperspeed effectOptions={HYPERSPEED_OPTIONS} />
      </div>

      <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-r from-[#030305]/95 via-[#030305]/60 to-[#030305]/95" />
      <div className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(ellipse_at_center,rgba(255,0,60,0.08)_0%,transparent_70%)]" />

      <div className="relative z-10 w-full px-6 lg:px-8 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
              <GSAPFadeIn direction="down" delay={0.1}>
                <div className="inline-flex items-center gap-3 rounded-full border border-[#ff003c]/30 bg-[#030305]/80 px-5 py-2 text-xs font-bold uppercase tracking-widest backdrop-blur-xl">
                  <Sparkles className="h-4 w-4 text-[#ff003c] animate-pulse" />
                  <span>QUANTUMBYTE TECHNOLOGIES</span>
                  <span className="w-1 h-1 rounded-full bg-[#ff003c]" />
                  <span className="text-[#9c9ca8]">Official Hardware & IT Hub</span>
                </div>
              </GSAPFadeIn>

              <GSAPFadeIn direction="up" delay={0.2}>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight leading-[1.05] text-white">
                  NEXT-GEN <span className="bg-gradient-to-r from-white via-white to-[#ff003c] bg-clip-text text-transparent">COMPUTERS</span> & ENTERPRISE
                  <br />
                  <span className="relative inline-block text-[#ff003c]">IT SERVICES</span>
                </h1>
              </GSAPFadeIn>

              <GSAPFadeIn direction="up" delay={0.3}>
                <p className="max-w-xl text-lg sm:text-xl lg:text-lg text-[#9c9ca8] leading-relaxed mx-auto lg:mx-0">
                  Your premier source for high-performance Gaming PCs, MacBooks, Smartphones, GaN Chargers, Genuine Component Parts, and full-scale Enterprise IT Solutions.
                </p>
              </GSAPFadeIn>

              <GSAPFadeIn direction="up" delay={0.4}>
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                  <button
                    onClick={handleExploreStore}
                    className="group btn btn-primary btn-lg w-full sm:w-auto"
                  >
                    <span>Explore Catalog</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </button>

                  <button
                    onClick={() => openBooking()}
                    className="btn btn-secondary btn-lg w-full sm:w-auto"
                  >
                    <Wrench className="h-4 w-4 text-[#ff003c]" />
                    <span>Book IT Consultation</span>
                  </button>
                </div>
              </GSAPFadeIn>

              <GSAPFadeIn direction="up" delay={0.5}>
                <div className="pt-4 grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 rounded-xl bg-[#08080c]/60 border border-[#232330] hover:border-[#ff003c]/30 transition-all duration-300 group">
                      <div className="flex-shrink-0 flex h-11 w-11 items-center justify-center rounded-xl bg-[#ff003c]/10">
                        <feature.icon className={`h-5 w-5 ${feature.color}`} />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-white group-hover:text-[#ff003c] transition-colors">
                          {feature.label}
                        </h4>
                        <p className="text-[11px] text-[#6b6b7a] mt-0.5">{feature.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </GSAPFadeIn>
            </div>

            <div className="hidden lg:block lg:col-span-5 relative">
              <GSAPFadeIn direction="right" delay={0.6} duration={1.2}>
                <div className="relative aspect-[4/3] max-w-md mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#ff003c]/20 via-transparent to-[#03b3c3]/20 rounded-3xl blur-3xl opacity-50" />
                  <div className="relative h-full rounded-3xl bg-gradient-to-br from-[#08080c] to-[#0d0d12] border border-[#232330] p-1">
                    <div className="h-full rounded-2xl bg-[#030305] border border-[#1a1a24] flex items-center justify-center">
                      <div className="text-center p-8">
                        <Cpu className="h-24 w-24 mx-auto mb-6 text-[#ff003c]/50 animate-pulse" />
                        <p className="text-[#6b6b7a] font-medium">HYPERSPEED ENGINE ACTIVE</p>
                        <p className="text-[11px] text-[#3a3a4a] mt-2">WebGL Particle Simulation</p>
                      </div>
                    </div>
                  </div>
                  <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-2xl bg-gradient-to-br from-[#ff003c] to-[#03b3c3] opacity-20 blur-2xl" />
                </div>
              </GSAPFadeIn>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}