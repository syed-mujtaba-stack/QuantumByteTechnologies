import React from 'react';
import Link from 'next/link';
import { Navbar } from '@/app/components/Navbar';
import { Footer } from '@/app/components/Footer';
import { Truck, ChevronRight } from 'lucide-react';

export default function ShippingPolicyPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-white flex flex-col font-sans selection:bg-[#ff003c] selection:text-white">
      <Navbar />

      <main className="flex-1 py-10 lg:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="mb-6 flex items-center gap-2 text-xs text-[#a1a1aa]">
            <Link href="/" className="hover:text-white">Home</Link>
            <ChevronRight className="h-3 w-3 text-[#ff003c]" />
            <span className="text-white font-bold">Shipping Policy</span>
          </div>

          <div className="rounded-2xl border border-[#22222e] bg-[#0e0e12] p-8 sm:p-10 space-y-6 glass-panel text-xs text-[#a1a1aa] leading-relaxed">
            <div className="border-b border-[#1f1f2b] pb-4">
              <span className="text-[10px] font-extrabold text-[#ff003c] uppercase tracking-widest flex items-center gap-1.5 mb-1">
                <Truck className="h-4 w-4" /> EXPRESS DELIVERY
              </span>
              <h1 className="text-3xl font-black text-white">SHIPPING & PACKAGING POLICY</h1>
              <p className="text-[11px] text-[#71717a] mt-1">Anti-Static Protection & Insured Courier Logistics</p>
            </div>

            <section className="space-y-2">
              <h3 className="text-sm font-extrabold text-white">1. Anti-Static Packaging Standards</h3>
              <p>
                All sensitive electronics (GPUs, RAM, Motherboards, MacBooks, Smartphones) are wrapped in ESD anti-static bubble wrap and shipped in reinforced double-walled boxes to prevent transit damage.
              </p>
            </section>

            <section className="space-y-2">
              <h3 className="text-sm font-extrabold text-white">2. Delivery Timelines</h3>
              <p>
                Urban domestic orders arrive within 1-3 business days. Heavy workstation custom PC builds shipped in wooden crates arrive within 3-5 business days. Tracking numbers are emailed instantly upon courier dispatch.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
