import React from 'react';
import Link from 'next/link';
import { Navbar } from '@/app/components/Navbar';
import { Footer } from '@/app/components/Footer';
import { CartDrawer } from '@/app/components/CartDrawer';
import { ProductCard } from '@/app/components/ProductCard';
import { fetchProducts } from '@/sanity/lib/fetch';
import { Flame, ChevronRight, Clock, Zap } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Flash Deals & Discounts | QuantumByte Technologies',
  description: 'Exclusive discounts on custom PCs, MacBooks, flagship smartphones, GPUs, and chargers.',
};

export const revalidate = 60;

export default async function DealsPage() {
  const products = await fetchProducts();
  const deals = products.filter((p) => p.discountPrice && p.discountPrice > p.price);

  return (
    <div className="min-h-screen bg-[#050505] text-white flex flex-col font-sans selection:bg-[#3B82F6] selection:text-white">
      <Navbar />

      <main className="flex-1 py-10 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="mb-6 flex items-center gap-2 text-xs text-[#a1a1aa]">
            <Link href="/" className="hover:text-white">Home</Link>
            <ChevronRight className="h-3 w-3 text-[#3B82F6]" />
            <span className="text-white font-bold">Flash Deals</span>
          </div>

          {/* Deals Banner */}
          <div className="rounded-2xl border border-[#3B82F6]/40 bg-gradient-to-r from-[#3B82F6]/20 via-[#0e0e12] to-[#0e0e12] p-8 mb-10 cyber-grid-bg shadow-2xl glass-panel-red">
            <div className="flex items-center gap-2 text-xs font-extrabold text-[#3B82F6] uppercase mb-2">
              <Flame className="h-4 w-4 fill-current animate-bounce" />
              <span>LIMITED TIME HARDWARE OFFERS</span>
            </div>
            <h1 className="text-3xl font-black text-white sm:text-5xl">
              HOT FLASH <span className="text-[#3B82F6] glow-red-text">DEALS & OFFERS</span>
            </h1>
            <p className="mt-2 text-xs sm:text-sm text-[#a1a1aa] max-w-lg">
              Save big on premium gaming rigs, OLED laptops, flagship smartphones, and high-speed GaN power chargers.
            </p>

            <div className="mt-6 flex items-center gap-4 text-xs font-bold">
              <span className="flex items-center gap-1.5 rounded-xl border border-[#3B82F6]/50 bg-[#050505] px-3.5 py-2 text-white">
                <Clock className="h-4 w-4 text-[#3B82F6]" /> Promo Code: <strong className="text-[#3B82F6]">QUANTUM10</strong> (Extra 10% Off)
              </span>
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {deals.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </main>

      <Footer />
      <CartDrawer />
    </div>
  );
}
