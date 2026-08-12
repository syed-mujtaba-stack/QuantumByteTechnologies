import React from 'react';
import Link from 'next/link';
import { Navbar } from '@/app/components/Navbar';
import { Footer } from '@/app/components/Footer';
import { FileText, ChevronRight } from 'lucide-react';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-white flex flex-col font-sans selection:bg-[#ff003c] selection:text-white">
      <Navbar />

      <main className="flex-1 py-10 lg:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="mb-6 flex items-center gap-2 text-xs text-[#a1a1aa]">
            <Link href="/" className="hover:text-white">Home</Link>
            <ChevronRight className="h-3 w-3 text-[#ff003c]" />
            <span className="text-white font-bold">Terms & Conditions</span>
          </div>

          <div className="rounded-2xl border border-[#22222e] bg-[#0e0e12] p-8 sm:p-10 space-y-6 glass-panel text-xs text-[#a1a1aa] leading-relaxed">
            <div className="border-b border-[#1f1f2b] pb-4">
              <span className="text-[10px] font-extrabold text-[#ff003c] uppercase tracking-widest flex items-center gap-1.5 mb-1">
                <FileText className="h-4 w-4" /> TERMS OF SERVICE
              </span>
              <h1 className="text-3xl font-black text-white">TERMS & CONDITIONS</h1>
              <p className="text-[11px] text-[#71717a] mt-1">Effective Date: August 12, 2026</p>
            </div>

            <section className="space-y-2">
              <h3 className="text-sm font-extrabold text-white">1. E-Commerce Purchases</h3>
              <p>
                By placing an order on QuantumByte Technologies, you agree that all hardware items are purchased for legitimate personal or enterprise use. Prices are subject to market changes, and order confirmation is subject to stock verification.
              </p>
            </section>

            <section className="space-y-2">
              <h3 className="text-sm font-extrabold text-white">2. Custom PC Build Terms</h3>
              <p>
                Custom PC build orders require component component verification. Cancellations after assembly and hardline liquid loop tubing installation has commenced will be subject to a 10% restocking fee.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
