import React from 'react';
import Link from 'next/link';
import { Navbar } from '@/app/components/Navbar';
import { Footer } from '@/app/components/Footer';
import { CartDrawer } from '@/app/components/CartDrawer';
import { ProductCard } from '@/app/components/ProductCard';
import { fetchProducts } from '@/sanity/lib/fetch';
import { Star, ChevronRight } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Best Sellers | QuantumByte Technologies',
  description: 'Explore top-rated and best-selling hardware products loved by gamers, developers, and tech pros.',
};

export const revalidate = 60;

export default async function BestSellersPage() {
  const products = await fetchProducts();
  const bestSellers = products.filter((p) => p.rating >= 4.8);

  return (
    <div className="min-h-screen bg-[#050505] text-white flex flex-col font-sans selection:bg-[#3B82F6] selection:text-white">
      <Navbar />

      <main className="flex-1 py-10 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="mb-6 flex items-center gap-2 text-xs text-[#a1a1aa]">
            <Link href="/" className="hover:text-white">Home</Link>
            <ChevronRight className="h-3 w-3 text-[#3B82F6]" />
            <span className="text-white font-bold">Best Sellers</span>
          </div>

          {/* Banner */}
          <div className="rounded-2xl border border-[#22222e] bg-[#0e0e12] p-8 mb-10 cyber-grid-bg shadow-xl glass-panel">
            <div className="flex items-center gap-2 text-xs font-extrabold text-[#3B82F6] uppercase mb-2">
              <Star className="h-4 w-4 fill-current text-[#F59E0B]" />
              <span>MOST POPULAR PRODUCTS</span>
            </div>
            <h1 className="text-3xl font-black text-white sm:text-5xl">
              BEST SELLING <span className="text-[#3B82F6] glow-red-text">HARDWARE</span>
            </h1>
            <p className="mt-2 text-xs sm:text-sm text-[#a1a1aa] max-w-lg">
              Top customer choices rated 4.8+ stars by verified buyers for performance, reliability, and build quality.
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {bestSellers.map((product) => (
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
