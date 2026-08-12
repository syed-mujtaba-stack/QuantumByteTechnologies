'use client';

import React, { Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Navbar } from '@/app/components/Navbar';
import { Footer } from '@/app/components/Footer';
import { CheckCircle2, Printer, ArrowRight, ShieldCheck, ShoppingBag } from 'lucide-react';

function OrderSuccessContent() {
  const searchParams = useSearchParams();
  const orderId = searchParams.get('orderId') || `QB-${Math.floor(100000 + Math.random() * 900000)}`;

  return (
    <div className="min-h-screen bg-[#050505] text-white flex flex-col font-sans selection:bg-[#ff003c] selection:text-white">
      <Navbar />

      <main className="flex-1 py-16 lg:py-24 flex items-center justify-center cyber-grid-bg">
        <div className="mx-auto max-w-2xl px-4 w-full text-center space-y-6">
          <div className="rounded-2xl border border-[#ff003c]/40 bg-[#0e0e12] p-8 shadow-2xl shadow-[#ff003c]/20 glass-panel-red space-y-6">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#ff003c]/20 text-[#ff003c] animate-bounce">
              <CheckCircle2 className="h-12 w-12" />
            </div>

            <div>
              <span className="text-xs font-extrabold text-[#ff003c] uppercase tracking-widest">
                TRANSACTION CONFIRMED
              </span>
              <h1 className="text-3xl font-black text-white sm:text-4xl mt-1">
                THANK YOU FOR YOUR ORDER!
              </h1>
              <p className="text-xs sm:text-sm text-[#a1a1aa] max-w-md mx-auto mt-2">
                Your hardware order has been successfully logged and sent to QuantumByte fulfillment labs for anti-static packaging.
              </p>
            </div>

            <div className="rounded-xl border border-[#22222e] bg-[#050505] p-5 text-left text-xs space-y-2.5">
              <div className="flex justify-between border-b border-[#1f1f2b] pb-2.5 font-bold">
                <span className="text-[#a1a1aa]">Order Reference Number:</span>
                <span className="text-[#ff003c] font-mono text-sm">{orderId}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#a1a1aa]">Fulfillment Status:</span>
                <span className="text-[#22c55e] font-semibold">Processing & Assembly</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#a1a1aa]">Estimated Delivery:</span>
                <span>2 - 4 Business Days</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#a1a1aa]">Official Warranty:</span>
                <span className="flex items-center gap-1 text-white font-bold">
                  <ShieldCheck className="h-3.5 w-3.5 text-[#ff003c]" /> 1 Year QuantumByte Guarantee
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                onClick={() => window.print()}
                className="flex items-center justify-center gap-2 rounded-xl border border-[#22222e] bg-[#16161f] px-6 py-3.5 text-xs font-bold text-white hover:border-[#ff003c]"
              >
                <Printer className="h-4 w-4" />
                Print Order Receipt
              </button>
              <Link
                href="/shop"
                className="red-gradient-btn flex-1 flex items-center justify-center gap-2 rounded-xl py-3.5 text-xs font-extrabold text-white shadow-xl shadow-[#ff003c]/25"
              >
                <ShoppingBag className="h-4 w-4" />
                Continue Tech Shopping
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default function OrderSuccessPage() {
  return (
    <Suspense fallback={null}>
      <OrderSuccessContent />
    </Suspense>
  );
}
