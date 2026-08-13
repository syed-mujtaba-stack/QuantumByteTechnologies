'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { Product, ITService } from '@/sanity/lib/data';
import { useCart } from '@/app/context/CartContext';
import { ProductCard } from '@/app/components/ProductCard';
import { CategoryFilter } from '@/app/components/CategoryFilter';
import { ITServicesSection } from '@/app/components/ITServicesSection';
import { GSAPReveal } from '@/app/components/GSAPWrapper';
import { WaveDivider } from '@/app/components/WaveDivider';
import { SlidersHorizontal, Cpu, SearchX, ArrowRight, Package, Flame, Sparkles } from 'lucide-react';

interface CatalogClientProps {
  products: Product[];
  itServices: ITService[];
  homeMode?: boolean;
}

export function CatalogClient({ products, itServices, homeMode = false }: CatalogClientProps) {
  const { selectedCategory, searchQuery, setSelectedCategory, setSearchQuery } = useCart();
  const [sortBy, setSortBy] = useState<'featured' | 'price-low' | 'price-high' | 'rating'>('featured');

  const filteredProducts = useMemo(() => {
    return products
      .filter((product) => {
        const matchesCategory =
          selectedCategory === 'all' || product.category === selectedCategory;
        const query = searchQuery.toLowerCase().trim();
        const matchesSearch =
          !query ||
          product.name.toLowerCase().includes(query) ||
          product.brand.toLowerCase().includes(query) ||
          product.category.toLowerCase().includes(query) ||
          product.specs?.some((spec) => spec.toLowerCase().includes(query));
        return matchesCategory && matchesSearch;
      })
      .sort((a, b) => {
        if (sortBy === 'price-low') return a.price - b.price;
        if (sortBy === 'price-high') return b.price - a.price;
        if (sortBy === 'rating') return b.rating - a.rating;
        return (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0);
      });
  }, [products, selectedCategory, searchQuery, sortBy]);

  // Home mode: only show the top 10 products in the scrolling carousel
  const showcaseProducts = useMemo(
    () => (homeMode ? filteredProducts.slice(0, 10) : filteredProducts),
    [homeMode, filteredProducts]
  );

  return (
    <>
      {/* Product Catalog Section */}
      <section id="catalog-section" className={`qb-page-section relative overflow-hidden border-b border-[#0e1b3f] bg-[#060913] ${homeMode ? 'py-10 lg:py-14' : 'py-20 lg:py-28'}`}>
        {/* Background decoration */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[500px] w-[900px] rounded-full bg-[#3b82f6]/5 blur-[120px]" />
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#3b82f6]/40 to-transparent" />
          {/* Grid pattern */}
          <div className="absolute inset-0 opacity-[0.03]"
            style={{ backgroundImage: 'linear-gradient(#3b82f6 1px, transparent 1px), linear-gradient(90deg, #3b82f6 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          {/* ── PREMIUM SECTION HEADER ── */}
          <div className={homeMode ? 'mb-8' : 'mb-12'}>
            <GSAPReveal direction="down" delay={0.05}>
              {/* Eyebrow pill */}
              <div className="mb-5 flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-2 rounded-full border border-[#3b82f6]/30 bg-[#3b82f6]/10 px-4 py-1.5 text-xs font-extrabold uppercase tracking-widest text-[#3b82f6]">
                  <Cpu className="h-3.5 w-3.5 animate-pulse" />
                  Official Hardware Inventory
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-[#22222e] bg-[#0e0e12] px-3 py-1.5 text-xs font-bold text-[#a1a1aa]">
                  <Package className="h-3.5 w-3.5 text-[#3b82f6]" />
                  {products.length} Products In Stock
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-[#22222e] bg-[#0e0e12] px-3 py-1.5 text-xs font-bold text-[#a1a1aa]">
                  <Flame className="h-3.5 w-3.5 text-orange-500" />
                  8 Categories
                </span>
              </div>
            </GSAPReveal>

            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
              {/* Left: Heading */}
              <div className="max-w-2xl">
                <GSAPReveal direction="up" delay={0.15}>
                  <h2 className="text-4xl font-black leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
                    EXPLORE{' '}
                    <span className="relative inline-block">
                      <span className="text-[#3b82f6] glow-red-text">PRODUCTS</span>
                    </span>
                    {' '}&amp;{' '}
                    <span className="text-[#3b82f6] glow-red-text">PARTS</span>
                  </h2>
                </GSAPReveal>
                <GSAPReveal direction="up" delay={0.25}>
                  <p className="mt-4 text-sm text-[#71717a] max-w-xl leading-relaxed">
                    Premium gaming rigs, flagship laptops, cutting-edge smartphones, GaN chargers, GPUs, RAM, SSDs — every component genuinely sourced &amp; warranty-backed.
                  </p>
                </GSAPReveal>
              </div>

              {/* Right: Controls */}
              <GSAPReveal direction="left" delay={0.3}>
                <div className="flex flex-wrap items-center gap-3">
                  {/* Item count chip */}
                  <div className="flex items-center gap-2 rounded-xl border border-[#22222e] bg-[#0e0e12] px-4 py-2.5 text-xs">
                    <Sparkles className="h-3.5 w-3.5 text-[#3b82f6]" />
                    <span className="text-[#a1a1aa]">Top</span>
                    <strong className="text-white text-sm">{Math.min(10, showcaseProducts.length)}</strong>
                    <span className="text-[#a1a1aa]">{homeMode ? 'picks of' : 'of'}</span>
                    <strong className="text-white text-sm">{products.length}</strong>
                  </div>

                  {/* Sort dropdown */}
                  <div className="flex items-center gap-2 rounded-xl border border-[#22222e] bg-[#0e0e12] px-4 py-2.5 text-xs text-white hover:border-[#3b82f6]/40 transition-colors">
                    <SlidersHorizontal className="h-3.5 w-3.5 text-[#3b82f6]" />
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
                      className="bg-transparent text-xs font-bold text-white outline-none cursor-pointer"
                    >
                      <option value="featured" className="bg-[#0e0e12]">Sort: Featured</option>
                      <option value="price-low" className="bg-[#0e0e12]">Price: Low → High</option>
                      <option value="price-high" className="bg-[#0e0e12]">Price: High → Low</option>
                      <option value="rating" className="bg-[#0e0e12]">Highest Rated</option>
                    </select>
                  </div>
                </div>
              </GSAPReveal>
            </div>

            {/* Accent rule */}
            <GSAPReveal direction="up" delay={0.35}>
              <div className="mt-8 flex items-center gap-4">
                <div className="h-px flex-1 bg-gradient-to-r from-[#3b82f6]/60 via-[#3b82f6]/20 to-transparent" />
                <div className="h-1.5 w-1.5 rotate-45 bg-[#3b82f6]" />
                <div className="h-px w-16 bg-[#22222e]" />
              </div>
            </GSAPReveal>
          </div>
          {/* ── END HEADER ── */}

          {/* Category Filter Bar */}
          <div className={homeMode ? 'mb-5' : 'mb-8'}>
            <CategoryFilter />
          </div>

          {/* Active Search Tag */}
          {searchQuery && (
            <div className="mb-6 flex items-center justify-between rounded-xl border border-[#3b82f6]/30 bg-[#3b82f6]/10 px-4 py-3 text-xs text-white">
              <span>
                Search results for: <strong className="text-[#3b82f6]">&ldquo;{searchQuery}&rdquo;</strong>
                <span className="ml-2 text-[#a1a1aa]">— {filteredProducts.length} result{filteredProducts.length !== 1 ? 's' : ''} found</span>
              </span>
              <button
                onClick={() => setSearchQuery('')}
                className="rounded-lg border border-[#3b82f6]/40 px-3 py-1 font-bold text-[#3b82f6] hover:bg-[#3b82f6] hover:text-white transition"
              >
                ✕ Clear
              </button>
            </div>
          )}

          {/* Products Grid */}
          {showcaseProducts.length > 0 ? (
            <>
              {homeMode ? (
                <ProductMarquee products={showcaseProducts} />
              ) : (
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              )}

              {/* Bottom CTA */}
              <div className={`flex flex-col items-center gap-4 text-center ${homeMode ? 'mt-6' : 'mt-14'}`}>
                <p className="text-xs text-[#71717a]">
                  Showing <strong className="text-white">{homeMode ? Math.min(10, showcaseProducts.length) : filteredProducts.length}</strong> of <strong className="text-white">{products.length}</strong> products
                </p>
                <Link
                  href="/shop"
                  className="group inline-flex items-center gap-3 rounded-2xl border border-[#3b82f6]/40 bg-[#3b82f6]/10 px-8 py-4 text-sm font-extrabold text-[#3b82f6] uppercase tracking-wider hover:bg-[#3b82f6] hover:text-white hover:border-[#3b82f6] hover:shadow-xl hover:shadow-[#3b82f6]/30 transition-all duration-300"
                >
                  <Package className="h-4 w-4" />
                  View Full Shop — All {products.length} Products
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </>
          ) : (
            <div className="my-16 flex flex-col items-center justify-center text-center space-y-4 py-16 rounded-2xl border border-dashed border-[#22222e] bg-[#0e0e12]/50">
              <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-[#16161f] text-[#ff003c] border border-[#22222e]">
                <SearchX className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-extrabold text-white">No matching products found</h3>
              <p className="text-sm text-[#a1a1aa] max-w-sm">
                Try switching category filters or clearing your search term to browse all {products.length} products.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory('all');
                  setSearchQuery('');
                }}
                className="red-gradient-btn rounded-xl px-6 py-3 text-xs font-bold text-white shadow-lg shadow-[#ff003c]/20"
              >
                Reset Catalog View
              </button>
            </div>
          )}
        </div>
        <WaveDivider fill="#0b0714" />
      </section>

      {/* IT Services */}
      <ITServicesSection itServices={itServices} />
    </>
  );
}

function ProductMarquee({ products }: { products: Product[] }) {
  if (!products.length) return null;

  // Duplicate once for a seamless infinite loop
  const items = [...products, ...products];

  return (
    <div className="qb-marquee-carousel relative overflow-hidden">
      <style>{`
        @keyframes qb-marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .qb-marquee-track {
          display: flex;
          width: max-content;
          padding: 0.5rem 0;
          animation: qb-marquee 44s linear infinite;
          will-change: transform;
        }
        .qb-marquee-carousel:hover .qb-marquee-track {
          animation-play-state: paused;
        }
        @media (prefers-reduced-motion: reduce) {
          .qb-marquee-track { animation: none; }
        }
      `}</style>

      {/* Edge fade masks */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 sm:w-20 bg-gradient-to-r from-[#060913] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 sm:w-20 bg-gradient-to-l from-[#060913] to-transparent" />

      <div className="qb-marquee-track">
        {items.map((product, idx) => (
          <div key={`${product.id}-${idx}`} className="w-[280px] sm:w-[300px] shrink-0 pr-6">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}



