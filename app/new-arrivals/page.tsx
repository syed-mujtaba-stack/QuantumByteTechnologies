import React from 'react';
import Link from 'next/link';
import { Navbar } from '@/app/components/Navbar';
import { Footer } from '@/app/components/Footer';
import { CartDrawer } from '@/app/components/CartDrawer';
import { ProductCard } from '@/app/components/ProductCard';
import { fetchProducts } from '@/sanity/lib/fetch';
import { Sparkles, ChevronRight } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'New Arrivals | QuantumByte Technologies',
  description: 'Discover the newest hardware releases, flagship laptops, Wi-Fi 7 routers, and QD-OLED monitors.',
};

export const revalidate = 60;

export default async function NewArrivalsPage() {
  const products = await fetchProducts();
  const newArrivals = products.filter((p) => p.isNewRelease);

  return (
    <div className="min-h-screen bg-[#050505] text-white flex flex-col font-sans selection:bg-[#3B82F6] selection:text-white">
      <Navbar />

      <main className="flex-1 py-10 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="mb-6 flex items-center gap-2 text-xs text-[#a1a1aa]">
            <Link href="/" className="hover:text-white">Home</Link>
            <ChevronRight className="h-3 w-3 text-[#3B82F6]" />
            <span className="text-white font-bold">New Arrivals</span>
          </div>

          {/* Banner */}
          <div className="rounded-2xl border border-[#22222e] bg-[#0e0e12] p-8 mb-10 cyber-grid-bg shadow-xl glass-panel">
            <div className="flex items-center gap-2 text-xs font-extrabold text-[#3B82F6] uppercase mb-2">
              <Sparkles className="h-4 w-4" />
              <span>JUST LANDED IN INVENTORY</span>
            </div>
            <h1 className="text-3xl font-black text-white sm:text-5xl">
              NEW TECH <span className="text-[#3B82F6] glow-red-text">ARRIVALS</span>
            </h1>
            <p className="mt-2 text-xs sm:text-sm text-[#a1a1aa] max-w-lg">
              Check out the latest tech hardware released this season, from M3 Max MacBooks to Snapdragon 8 Gen 4 smartphones and Wi-Fi 7 routers.
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {newArrivals.map((product) => (
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
