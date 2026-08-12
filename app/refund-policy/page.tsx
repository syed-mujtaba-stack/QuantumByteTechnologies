import React from 'react';
import Link from 'next/link';
import { Navbar } from '@/app/components/Navbar';
import { Footer } from '@/app/components/Footer';
import { RefreshCw, ChevronRight } from 'lucide-react';

export default function RefundPolicyPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-white flex flex-col font-sans selection:bg-[#ff003c] selection:text-white">
      <Navbar />

      <main className="flex-1 py-10 lg:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="mb-6 flex items-center gap-2 text-xs text-[#a1a1aa]">
            <Link href="/" className="hover:text-white">Home</Link>
            <ChevronRight className="h-3 w-3 text-[#ff003c]" />
            <span className="text-white font-bold">Refund Policy</span>
          </div>

          <div className="rounded-2xl border border-[#22222e] bg-[#0e0e12] p-8 sm:p-10 space-y-6 glass-panel text-xs text-[#a1a1aa] leading-relaxed">
            <div className="border-b border-[#1f1f2b] pb-4">
              <span className="text-[10px] font-extrabold text-[#ff003c] uppercase tracking-widest flex items-center gap-1.5 mb-1">
                <RefreshCw className="h-4 w-4" /> WARRANTY & RETURNS
              </span>
              <h1 className="text-3xl font-black text-white">REFUND & RETURN POLICY</h1>
              <p className="text-[11px] text-[#71717a] mt-1">7-Day Replacement Guarantee & 1-Year Hardware Warranty</p>
            </div>

            <section className="space-y-2">
              <h3 className="text-sm font-extrabold text-white">1. 7-Day Return Eligibility</h3>
              <p>
                Products can be returned or exchanged within 7 days of delivery if unopened, sealed in original packaging, or if a dead-on-arrival (DOA) hardware defect is identified by our engineers.
              </p>
            </section>

            <section className="space-y-2">
              <h3 className="text-sm font-extrabold text-white">2. Process & Inspection</h3>
              <p>
                Returned hardware is thoroughly inspected at our technical lab. Refunds are issued to original payment cards or bank accounts within 3-5 business days of inspection approval.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
