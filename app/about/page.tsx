import React from 'react';
import Link from 'next/link';
import { Navbar } from '@/app/components/Navbar';
import { Footer } from '@/app/components/Footer';
import { CartDrawer } from '@/app/components/CartDrawer';
import { Cpu, ShieldCheck, Wrench, Award, CheckCircle2, ChevronRight } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | QuantumByte Technologies',
  description: 'Learn about QuantumByte Technologies - your trusted hardware retailer and enterprise IT services partner.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-white flex flex-col font-sans selection:bg-[#ff003c] selection:text-white">
      <Navbar />

      <main className="flex-1 py-12 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="mb-6 flex items-center gap-2 text-xs text-[#a1a1aa]">
            <Link href="/" className="hover:text-white">Home</Link>
            <ChevronRight className="h-3 w-3 text-[#ff003c]" />
            <span className="text-white font-bold">About Us</span>
          </div>

          {/* Hero Banner */}
          <div className="rounded-2xl border border-[#ff003c]/40 bg-gradient-to-r from-[#ff003c]/20 via-[#0e0e12] to-[#0e0e12] p-8 lg:p-12 mb-12 cyber-grid-bg shadow-2xl glass-panel-red">
            <span className="text-xs font-extrabold text-[#ff003c] uppercase tracking-widest">
              OFFICIAL COMPANY OVERVIEW
            </span>
            <h1 className="text-3xl font-black text-white sm:text-5xl mt-2">
              POWERING THE NEXT ERA OF <span className="text-[#ff003c] glow-red-text">TECH & IT SOLUTIONS</span>
            </h1>
            <p className="mt-4 text-xs sm:text-sm text-[#a1a1aa] max-w-2xl leading-relaxed">
              QuantumByte Technologies is a premier high-performance hardware retailer and certified enterprise IT solutions provider. From custom hardline-cooled gaming rigs to enterprise networking and micro-soldering hardware repair, we engineer perfection.
            </p>
          </div>

          {/* Core Pillars */}
          <div className="grid gap-6 md:grid-cols-3 mb-16">
            <div className="rounded-2xl border border-[#22222e] bg-[#0e0e12] p-6 space-y-3 glass-panel">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#ff003c] text-white shadow-lg">
                <Cpu className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-extrabold text-white">Genuine Hardware Retail</h3>
              <p className="text-xs text-[#a1a1aa]">
                100% authentic MacBooks, flagship smartphones, RTX 4090 GPUs, DDR5 RAM, and GaN chargers sourced directly from official brand distributors.
              </p>
            </div>

            <div className="rounded-2xl border border-[#22222e] bg-[#0e0e12] p-6 space-y-3 glass-panel">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#ff003c] text-white shadow-lg">
                <Wrench className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-extrabold text-white">Expert IT Engineering Lab</h3>
              <p className="text-xs text-[#a1a1aa]">
                Our certified engineers assemble custom liquid-cooled workstations, perform motherboard BGA micro-soldering, and deploy 10GbE network infrastructure.
              </p>
            </div>

            <div className="rounded-2xl border border-[#22222e] bg-[#0e0e12] p-6 space-y-3 glass-panel">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#ff003c] text-white shadow-lg">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-extrabold text-white">100% Official Guarantee</h3>
              <p className="text-xs text-[#a1a1aa]">
                Every item shipped is backed by the QuantumByte 1-Year hardware warranty and 24/7 priority technical customer support.
              </p>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="rounded-2xl border border-[#22222e] bg-[#0e0e12] p-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <span className="text-3xl sm:text-4xl font-black text-[#ff003c]">10,000+</span>
              <p className="text-xs font-bold text-[#a1a1aa] uppercase mt-1">Computers Delivered</p>
            </div>
            <div>
              <span className="text-3xl sm:text-4xl font-black text-white">45+</span>
              <p className="text-xs font-bold text-[#a1a1aa] uppercase mt-1">Hardware Lines</p>
            </div>
            <div>
              <span className="text-3xl sm:text-4xl font-black text-[#ff003c]">99.9%</span>
              <p className="text-xs font-bold text-[#a1a1aa] uppercase mt-1">Customer Satisfaction</p>
            </div>
            <div>
              <span className="text-3xl sm:text-4xl font-black text-white">24/7</span>
              <p className="text-xs font-bold text-[#a1a1aa] uppercase mt-1">Tech Lab Support</p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <CartDrawer />
    </div>
  );
}
