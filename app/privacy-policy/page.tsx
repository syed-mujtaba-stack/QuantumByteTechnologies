import React from 'react';
import Link from 'next/link';
import { Navbar } from '@/app/components/Navbar';
import { Footer } from '@/app/components/Footer';
import { ShieldCheck, ChevronRight } from 'lucide-react';

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-white flex flex-col font-sans selection:bg-[#ff003c] selection:text-white">
      <Navbar />

      <main className="flex-1 py-10 lg:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="mb-6 flex items-center gap-2 text-xs text-[#a1a1aa]">
            <Link href="/" className="hover:text-white">Home</Link>
            <ChevronRight className="h-3 w-3 text-[#ff003c]" />
            <span className="text-white font-bold">Privacy Policy</span>
          </div>

          <div className="rounded-2xl border border-[#22222e] bg-[#0e0e12] p-8 sm:p-10 space-y-6 glass-panel text-xs text-[#a1a1aa] leading-relaxed">
            <div className="border-b border-[#1f1f2b] pb-4">
              <span className="text-[10px] font-extrabold text-[#ff003c] uppercase tracking-widest flex items-center gap-1.5 mb-1">
                <ShieldCheck className="h-4 w-4" /> LEGAL DOCUMENTATION
              </span>
              <h1 className="text-3xl font-black text-white">PRIVACY POLICY</h1>
              <p className="text-[11px] text-[#71717a] mt-1">Last Updated: August 12, 2026</p>
            </div>

            <section className="space-y-2">
              <h3 className="text-sm font-extrabold text-white">1. Information We Collect</h3>
              <p>
                When you browse QuantumByte Technologies, place hardware orders, or request IT consultation services, we collect necessary personal details including your name, email address, shipping address, phone number, and payment preferences.
              </p>
            </section>

            <section className="space-y-2">
              <h3 className="text-sm font-extrabold text-white">2. How We Use Your Data</h3>
              <p>
                Your information is used strictly to process orders, package anti-static shipments, issue invoices, fulfill warranty claims, and send real-time delivery tracking updates. We never sell or share your data with third-party advertisers.
              </p>
            </section>

            <section className="space-y-2">
              <h3 className="text-sm font-extrabold text-white">3. Security Standards</h3>
              <p>
                We employ 256-bit SSL encryption across all web pages and payment checkout flows. Account credentials and financial transactions are handled via compliant, encrypted payment gateways.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
