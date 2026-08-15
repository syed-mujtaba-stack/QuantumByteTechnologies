import React from 'react';
import Link from 'next/link';
import { Navbar } from '@/app/components/Navbar';
import { Footer } from '@/app/components/Footer';
import { CartDrawer } from '@/app/components/CartDrawer';
import { ProductCard } from '@/app/components/ProductCard';
import { fetchProducts } from '@/sanity/lib/fetch';
import { Search, ChevronRight, SearchX } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Search Results | QuantumByte Technologies',
  description: 'Search hardware catalog for PCs, MacBooks, GPUs, Smartphones, Chargers, and Accessories.',
};

export const revalidate = 60;

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const resolvedParams = await searchParams;
  const query = (resolvedParams.q || '').trim().toLowerCase();
  const products = await fetchProducts();

  const results = products.filter((product) => {
    if (!query) return true;
    return (
      product.name.toLowerCase().includes(query) ||
      product.brand.toLowerCase().includes(query) ||
      product.category.toLowerCase().includes(query) ||
      product.specs?.some((spec) => spec.toLowerCase().includes(query))
    );
  });

  return (
    <div className="min-h-screen bg-[#050505] text-white flex flex-col font-sans selection:bg-[#3B82F6] selection:text-white">
      <Navbar />

      <main className="flex-1 py-10 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="mb-6 flex items-center gap-2 text-xs text-[#a1a1aa]">
            <Link href="/" className="hover:text-white">Home</Link>
            <ChevronRight className="h-3 w-3 text-[#3B82F6]" />
            <span className="text-white font-bold">Search Results</span>
          </div>

          {/* Search Header */}
          <div className="rounded-2xl border border-[#22222e] bg-[#0e0e12] p-8 mb-10 cyber-grid-bg shadow-xl glass-panel">
            <div className="flex items-center gap-2 text-xs font-extrabold text-[#3B82F6] uppercase mb-2">
              <Search className="h-4 w-4" />
              <span>SEARCH RESULTS FOR</span>
            </div>
            <h1 className="text-3xl font-black text-white sm:text-4xl">
              "{query || 'All Items'}"
            </h1>
            <p className="mt-2 text-xs sm:text-sm text-[#a1a1aa]">
              Found <strong className="text-white">{results.length}</strong> matching hardware products in store inventory.
            </p>
          </div>

          {/* Results Grid */}
          {results.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {results.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="my-12 flex flex-col items-center justify-center text-center space-y-4 py-16 rounded-2xl border border-dashed border-[#22222e] bg-[#0e0e12]">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#16161f] text-[#3B82F6]">
                <SearchX className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-extrabold text-white">No products found for "{query}"</h3>
              <p className="text-xs text-[#a1a1aa] max-w-sm">
                Try searching for terms like "MacBook", "RTX 4090", "iPhone", "Charger", or "DDR5".
              </p>
              <Link href="/shop" className="red-gradient-btn rounded-xl px-5 py-2.5 text-xs font-bold text-white shadow-lg shadow-[#3B82F6]/20">
                Browse Full Shop
              </Link>
            </div>
          )}
        </div>
      </main>

      <Footer />
      <CartDrawer />
    </div>
  );
}
