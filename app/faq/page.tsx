'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Navbar } from '@/app/components/Navbar';
import { Footer } from '@/app/components/Footer';
import { CartDrawer } from '@/app/components/CartDrawer';
import { HelpCircle, ChevronDown, ChevronRight, ShieldCheck, Truck, Wrench } from 'lucide-react';

export default function FAQPage() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Are all products sold on QuantumByte 100% genuine and original?',
      a: 'Yes, absolutely. QuantumByte Technologies only sources products directly from official brand manufacturers and authorized global distributors (Apple, ASUS, Samsung, Anker, NVIDIA, Corsair). Every item carries full official warranty verification.',
    },
    {
      q: 'How does the Custom PC Assembly service work?',
      a: 'When you book a custom PC build, our senior hardware engineers assemble your chosen components with handcrafted cable routing, custom liquid cooling loop pressure testing, BIOS XMP memory tuning, and 24-hour thermal benchmarking before wooden crate shipping.',
    },
    {
      q: 'What is your delivery timeframe and shipping cost?',
      a: 'We offer FREE Express Insured Shipping on all orders over Rs. 27,900. Domestic urban orders (Karachi, Lahore, Islamabad, etc.) arrive within 1-3 business days. All shipments are packed in anti-static foam and heavy-duty boxes.',
    },
    {
      q: 'What payment methods do you accept?',
      a: 'We currently offer Cash on Delivery (COD) across Pakistan. Easy Paisa payments will be available very soon.',
    },
    {
      q: 'What is covered under the 1-Year QuantumByte Warranty?',
      a: 'Our official warranty covers manufacturer component failures, liquid cooling pump defects, power supply failures, and display defects. We offer immediate replacement or free in-house lab repair.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white flex flex-col font-sans selection:bg-[#ff003c] selection:text-white">
      <Navbar />

      <main className="flex-1 py-10 lg:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="mb-6 flex items-center gap-2 text-xs text-[#a1a1aa]">
            <Link href="/" className="hover:text-white">Home</Link>
            <ChevronRight className="h-3 w-3 text-[#ff003c]" />
            <span className="text-white font-bold">Frequently Asked Questions</span>
          </div>

          <div className="text-center space-y-3 mb-10">
            <span className="text-xs font-extrabold text-[#ff003c] uppercase tracking-widest flex items-center justify-center gap-1.5">
              <HelpCircle className="h-4 w-4" /> KNOWLEDGE BASE & HELPDESK
            </span>
            <h1 className="text-3xl font-black text-white sm:text-4xl">
              FREQUENTLY ASKED <span className="text-[#ff003c]">QUESTIONS</span>
            </h1>
            <p className="text-xs sm:text-sm text-[#a1a1aa]">
              Everything you need to know about our products, custom PC assembly, IT services, warranties, and shipping.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openIdx === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-[#22222e] bg-[#0e0e12] overflow-hidden transition glass-panel"
                >
                  <button
                    onClick={() => setOpenIdx(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between p-5 text-left text-sm font-bold text-white hover:text-[#ff003c] transition"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`h-4 w-4 flex-shrink-0 text-[#ff003c] transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isOpen && (
                    <div className="p-5 pt-0 text-xs text-[#a1a1aa] leading-relaxed border-t border-[#1f1f2b] bg-[#050505]/50">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </main>

      <Footer />
      <CartDrawer />
    </div>
  );
}
