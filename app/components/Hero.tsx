'use client';

import React from 'react';
import Image from 'next/image';
import { useCart } from '@/app/context/CartContext';
import { formatPKR } from '@/sanity/lib/currency';
import { GSAPFadeIn, GSAPHoverTilt } from './GSAPWrapper';
import { ShieldCheck, Cpu, ArrowRight, Wrench, Sparkles, Star } from 'lucide-react';

export function Hero() {
  const { openBooking, setSelectedCategory } = useCart();

  const handleExploreStore = () => {
    setSelectedCategory('all');
    const catalogEl = document.getElementById('catalog-section');
    if (catalogEl) {
      catalogEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative overflow-hidden border-b border-[#22222e] bg-[#050505] py-16 lg:py-24 cyber-grid-bg">
      {/* Red Ambient Glow Orbs */}
      <div className="pointer-events-none absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-[#ff003c]/15 blur-[120px]" />
      <div className="pointer-events-none absolute -right-32 bottom-1/4 h-96 w-96 rounded-full bg-[#ff003c]/10 blur-[140px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Left Column: Heading & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Top Badge */}
            <GSAPFadeIn direction="down" delay={0.1}>
              <div className="inline-flex items-center gap-2.5 rounded-full border border-[#ff003c]/40 bg-[#ff003c]/10 px-4 py-1.5 text-xs font-extrabold text-white backdrop-blur-md shadow-lg shadow-[#ff003c]/10">
                <Sparkles className="h-3.5 w-3.5 text-[#ff003c] animate-spin" />
                <span>QUANTUMBYTE TECHNOLOGIES</span>
                <span className="h-1 w-1 rounded-full bg-[#ff003c]" />
                <span className="text-[#a1a1aa] uppercase tracking-wider font-semibold">Official Hardware & IT Hub</span>
              </div>
            </GSAPFadeIn>

            {/* Main Headline */}
            <GSAPFadeIn direction="up" delay={0.2}>
              <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl leading-[1.1]">
                NEXT-GEN <span className="bg-gradient-to-r from-white via-white to-[#ff003c] bg-clip-text text-transparent">COMPUTERS</span> & ENTERPRISE{' '}
                <span className="relative inline-block text-[#ff003c] glow-red-text">
                  IT SERVICES
                </span>
              </h1>
            </GSAPFadeIn>

            {/* Subtitle */}
            <GSAPFadeIn direction="up" delay={0.3}>
              <p className="max-w-2xl text-base text-[#a1a1aa] sm:text-lg lg:text-xl font-normal leading-relaxed mx-auto lg:mx-0">
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
                  Shop Products & Parts
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>

                <button
                  onClick={() => openBooking()}
                  className="flex w-full sm:w-auto items-center justify-center gap-2.5 rounded-xl border border-[#22222e] bg-[#0e0e12] px-7 py-4 text-sm font-bold text-white transition hover:border-[#ff003c] hover:bg-[#16161f]"
                >
                  <Wrench className="h-4 w-4 text-[#ff003c]" />
                  Book IT Consultation
                </button>
              </div>
            </GSAPFadeIn>

            {/* Trust Badges */}
            <GSAPFadeIn direction="up" delay={0.5}>
              <div className="pt-6 border-t border-[#1f1f2b] grid grid-cols-3 gap-4 text-left">
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
                    <p className="text-[10px] text-[#a1a1aa]">Overclocked & Tested</p>
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

          {/* Right Column: 3D Floating Product Showcase */}
          <div className="lg:col-span-5 relative flex justify-center">
            <GSAPFadeIn direction="right" delay={0.3} className="w-full max-w-md">
              <GSAPHoverTilt>
                <div className="relative rounded-2xl border border-[#ff003c]/30 bg-[#0e0e14] p-5 shadow-2xl shadow-[#ff003c]/15 glass-panel-red">
                  {/* Floating Red Tag */}
                  <div className="absolute -top-3 -right-3 z-10 rounded-full bg-[#ff003c] px-3 py-1 text-[11px] font-extrabold text-white shadow-lg shadow-[#ff003c]/40 uppercase tracking-wider animate-bounce">
                    FEATURED RIG
                  </div>

                  {/* Main Product Image */}
                  <div className="relative h-64 w-full overflow-hidden rounded-xl bg-[#050505] p-2">
                    <Image
                      src="/images/computers/quantumbyte_custom_rig.jpg"
                      alt="QuantumByte Custom Workstation PC"
                      fill
                      sizes="(max-width: 768px) 100vw, 400px"
                      className="object-cover rounded-lg transition-transform duration-500 hover:scale-105"
                      priority
                    />
                  </div>

                  {/* Product Info */}
                  <div className="mt-4 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#ff003c]">
                        FLAGSHIP EDITION
                      </span>
                      <div className="flex items-center gap-1 text-xs text-[#ffb800]">
                        <Star className="h-3.5 w-3.5 fill-current" />
                        <span className="font-bold text-white">5.0</span>
                      </div>
                    </div>

                    <h3 className="text-lg font-extrabold text-white">
                      QuantumByte Cyber Workstation Pro
                    </h3>
                    <p className="text-xs text-[#a1a1aa] line-clamp-2">
                      Dual-loop hardline liquid cooling, Intel i9 14900KS, RTX 4090 24GB, 64GB DDR5.
                    </p>

                    <div className="flex items-center justify-between pt-2 border-t border-[#1f1f2b]">
                      <div>
                        <span className="text-xs text-[#a1a1aa] block">Starting from</span>
                        <span className="text-xl font-black text-white">{formatPKR(4999)}</span>
                        <span className="ml-2 text-xs text-[#71717a] line-through">{formatPKR(5499)}</span>
                      </div>

                      <button
                        onClick={handleExploreStore}
                        className="rounded-lg bg-[#ff003c] px-4 py-2 text-xs font-bold text-white shadow-md shadow-[#ff003c]/30 hover:bg-[#e60036] transition"
                      >
                        Explore Rig
                      </button>
                    </div>
                  </div>
                </div>
              </GSAPHoverTilt>
            </GSAPFadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
