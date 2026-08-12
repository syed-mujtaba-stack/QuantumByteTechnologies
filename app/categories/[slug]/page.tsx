import React from 'react';
import Link from 'next/link';
import { Navbar } from '@/app/components/Navbar';
import { Footer } from '@/app/components/Footer';
import { CartDrawer } from '@/app/components/CartDrawer';
import { ProductCard } from '@/app/components/ProductCard';
import { ProductDetailModal } from '@/app/components/ProductDetailModal';
import { fetchProducts } from '@/sanity/lib/fetch';
import { ChevronRight, Cpu } from 'lucide-react';

export const revalidate = 60;

const categoryNames: Record<string, string> = {
  computers: 'Computers & Workstations',
  laptops: 'Laptops & Ultrabooks',
  mobiles: 'Flagship Smartphones',
  chargers: 'GaN Chargers & Power Docks',
  parts: 'GPUs, RAM & Component Parts',
  monitors: 'Gaming Monitors & Displays',
  accessories: 'Gaming Accessories & Audio',
  networking: 'Enterprise Networking & NAS Storage',
};

export default async function CategoryDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const products = await fetchProducts();
  const filtered = products.filter((p) => p.category === slug);
  const categoryTitle = categoryNames[slug] || slug.toUpperCase();

  return (
    <div className="min-h-screen bg-[#050505] text-white flex flex-col font-sans selection:bg-[#ff003c] selection:text-white">
      <Navbar />

      <main className="flex-1 py-10 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs */}
          <div className="mb-6 flex items-center gap-2 text-xs text-[#a1a1aa]">
            <Link href="/" className="hover:text-white">Home</Link>
            <ChevronRight className="h-3 w-3 text-[#ff003c]" />
            <Link href="/categories" className="hover:text-white">Categories</Link>
            <ChevronRight className="h-3 w-3 text-[#ff003c]" />
            <span className="text-white font-bold capitalize">{categoryTitle}</span>
          </div>

          {/* Category Banner */}
          <div className="rounded-2xl border border-[#22222e] bg-[#0e0e12] p-8 mb-10 cyber-grid-bg shadow-xl glass-panel">
            <div className="flex items-center gap-3 text-xs font-extrabold text-[#ff003c] uppercase mb-2">
              <Cpu className="h-4 w-4" />
              <span>Category Inventory</span>
            </div>
            <h1 className="text-3xl font-black text-white sm:text-4xl">
              {categoryTitle}
            </h1>
            <p className="mt-2 text-xs sm:text-sm text-[#a1a1aa]">
              Showing <strong className="text-white">{filtered.length}</strong> high-performance products in {categoryTitle}.
            </p>
          </div>

          {/* Product Grid */}
          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filtered.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 rounded-2xl border border-dashed border-[#22222e] bg-[#0e0e12]">
              <h3 className="text-lg font-bold text-white">No products found in this category</h3>
              <Link href="/shop" className="mt-4 inline-block red-gradient-btn rounded-xl px-5 py-2.5 text-xs font-bold text-white">
                Back to Full Shop
              </Link>
            </div>
          )}
        </div>
      </main>

      <Footer />
      <CartDrawer />
      <ProductDetailModal />
    </div>
  );
}
