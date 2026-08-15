'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { Product, ITService } from '@/sanity/lib/data';
import { useCart } from '@/app/context/CartContext';
import { ProductCard } from '@/app/components/ProductCard';
import { CategoryFilter } from '@/app/components/CategoryFilter';
import { ITServicesSection } from '@/app/components/ITServicesSection';
import { GSAPReveal } from '@/app/components/GSAPWrapper';
import { SlidersHorizontal, Cpu, SearchX, ArrowRight, Package, Sparkles, Grid3X3, List } from 'lucide-react';

interface CatalogClientProps {
  products: Product[];
  itServices: ITService[];
  homeMode?: boolean;
}

export function CatalogClient({ products, itServices, homeMode = false }: CatalogClientProps) {
  const { selectedCategory, searchQuery, setSelectedCategory, setSearchQuery } = useCart();
  const [sortBy, setSortBy] = useState<'featured' | 'price-low' | 'price-high' | 'rating' | 'newest'>('featured');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const filteredProducts = useMemo(() => {
    return products
      .filter((product) => {
        const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
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
        if (sortBy === 'newest') return (b.isNewRelease ? 1 : 0) - (a.isNewRelease ? 1 : 0);
        return (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0);
      });
  }, [products, selectedCategory, searchQuery, sortBy]);

  const showcaseProducts = useMemo(
    () => (homeMode ? filteredProducts.slice(0, 10) : filteredProducts),
    [homeMode, filteredProducts]
  );

  return (
    <>
      <section
        id="catalog-section"
        className={`relative overflow-hidden bg-[#05070D] ${homeMode ? 'py-12 lg:py-16' : 'py-16 lg:py-24'}`}
      >
        {/* ── Background ──────────────────────────────────────────── */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[500px] w-[900px] rounded-full bg-[#3B82F6]/[0.03] blur-[120px]" />
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#3B82F6]/10 to-transparent" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          {/* ── Section Header ──────────────────────────────────────── */}
          <div className={homeMode ? 'mb-8' : 'mb-12'}>
            <GSAPReveal direction="down" delay={0.05}>
              <div className="flex items-center gap-3 mb-5">
                <span className="inline-flex items-center gap-2 rounded-full border border-[#3B82F6]/20 bg-[#3B82F6]/[0.06] px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.12em] text-[#3B82F6]">
                  <Cpu className="h-3 w-3" />
                  Official Hardware Inventory
                </span>
                <span className="hidden sm:inline-flex items-center gap-1.5 rounded-full border border-white/[0.05] bg-white/[0.025] px-3 py-1.5 text-[11px] font-semibold text-[#64748B]">
                  <Package className="h-3 w-3" />
                  {products.length} Products
                </span>
              </div>
            </GSAPReveal>

            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
              <div className="max-w-2xl">
                <GSAPReveal direction="up" delay={0.1}>
                  <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-black tracking-[-0.03em] leading-[1.1] text-white">
                    Explore{' '}
                    <span className="bg-gradient-to-r from-[#60A5FA] via-[#3B82F6] to-[#06B6D4] bg-clip-text text-transparent">
                      Products
                    </span>
                    {' '}&{' '}
                    <span className="bg-gradient-to-r from-[#60A5FA] via-[#3B82F6] to-[#06B6D4] bg-clip-text text-transparent">
                      Parts
                    </span>
                  </h2>
                </GSAPReveal>
                <GSAPReveal direction="up" delay={0.15}>
                  <p className="mt-3 text-[15px] text-[#64748B] max-w-xl leading-relaxed">
                    Premium gaming rigs, flagship laptops, cutting-edge smartphones, GaN chargers, GPUs, RAM, SSDs — every component genuinely sourced &amp; warranty-backed.
                  </p>
                </GSAPReveal>
              </div>

              <GSAPReveal direction="left" delay={0.2}>
                <div className="flex items-center gap-2.5">
                  {/* Count indicator */}
                  <div className="flex items-center gap-2 rounded-xl border border-white/[0.05] bg-white/[0.025] px-3.5 py-2 text-[12px]">
                    <Sparkles className="h-3.5 w-3.5 text-[#3B82F6]/70" />
                    <span className="text-[#475569]]">Showing</span>
                    <strong className="text-white font-bold">{Math.min(10, showcaseProducts.length)}</strong>
                    <span className="text-[#475569]">{homeMode ? 'of' : 'of'}</span>
                    <strong className="text-white font-bold">{products.length}</strong>
                  </div>

                  {/* View toggles */}
                  <div className="flex items-center rounded-xl border border-white/[0.05] bg-white/[0.025] p-0.5">
                    <button
                      onClick={() => setViewMode('grid')}
                      className={`flex h-8 w-8 items-center justify-center rounded-lg transition-all duration-200 ${
                        viewMode === 'grid'
                          ? 'bg-[#3B82F6]/15 text-[#3B82F6]'
                          : 'text-[#475569] hover:text-white'
                      }`}
                      aria-label="Grid view"
                    >
                      <Grid3X3 className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => setViewMode('list')}
                      className={`flex h-8 w-8 items-center justify-center rounded-lg transition-all duration-200 ${
                        viewMode === 'list'
                          ? 'bg-[#3B82F6]/15 text-[#3B82F6]'
                          : 'text-[#475569] hover:text-white'
                      }`}
                      aria-label="List view"
                    >
                      <List className="h-4 w-4" />
                    </button>
                  </div>

                  {/* Sort */}
                  <div className="flex items-center gap-2 rounded-xl border border-white/[0.05] bg-white/[0.025] px-3 py-2 text-[12px]">
                    <SlidersHorizontal className="h-3.5 w-3.5 text-[#475569]" />
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
                      className="bg-transparent text-[12px] font-semibold text-white outline-none cursor-pointer appearance-none"
                    >
                      <option value="featured" className="bg-[#0B0F18]">Featured</option>
                      <option value="newest" className="bg-[#0B0F18]">Newest</option>
                      <option value="price-low" className="bg-[#0B0F18]">Price ↑</option>
                      <option value="price-high" className="bg-[#0B0F18]">Price ↓</option>
                      <option value="rating" className="bg-[#0B0F18]">Top Rated</option>
                    </select>
                  </div>
                </div>
              </GSAPReveal>
            </div>
          </div>

          {/* ── Category Filter ────────────────────────────────────── */}
          <div className={homeMode ? 'mb-6' : 'mb-8'}>
            <CategoryFilter />
          </div>

          {/* ── Search Results Banner ──────────────────────────────── */}
          {searchQuery && (
            <div className="mb-6 flex items-center justify-between rounded-xl border border-[#3B82F6]/20 bg-[#3B82F6]/[0.06] px-4 py-3 text-[13px] text-white animate-slide-down">
              <span>
                Results for <strong className="text-[#3B82F6]">&ldquo;{searchQuery}&rdquo;</strong>
                <span className="ml-2 text-[#64748B]">— {filteredProducts.length} found</span>
              </span>
              <button
                onClick={() => setSearchQuery('')}
                className="flex items-center gap-1.5 rounded-lg border border-white/[0.08] bg-white/[0.04] px-3 py-1.5 text-[12px] font-semibold text-white/70 hover:text-white hover:bg-white/[0.06] transition-all duration-200"
              >
                <SearchX className="h-3.5 w-3.5" />
                Clear
              </button>
            </div>
          )}

          {/* ── Product Grid ───────────────────────────────────────── */}
          {showcaseProducts.length > 0 ? (
            <>
              {homeMode ? (
                <ProductMarquee products={showcaseProducts} />
              ) : (
                <>
                  <div
                    className={`grid gap-4 sm:gap-5 ${
                      viewMode === 'list'
                        ? 'grid-cols-1'
                        : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
                    }`}
                    role="list"
                    aria-label="Product catalog"
                  >
                    {filteredProducts.map((product, index) => (
                      <GSAPReveal key={product.id} direction="up" delay={index * 0.03} distance={20}>
                        <ProductCard product={product} />
                      </GSAPReveal>
                    ))}
                  </div>

                  {/* Footer */}
                  <div className={`flex flex-col items-center gap-4 text-center ${homeMode ? 'mt-8' : 'mt-14'}`}>
                    <p className="text-[13px] text-[#475569]">
                      Showing <strong className="text-white">{homeMode ? Math.min(10, showcaseProducts.length) : filteredProducts.length}</strong> of <strong className="text-white">{products.length}</strong> products
                    </p>
                    <Link
                      href="/shop"
                      className="group flex items-center gap-2.5 rounded-xl bg-gradient-to-r from-[#3B82F6] to-[#2563EB] px-7 py-3.5 text-[14px] font-bold text-white transition-all duration-300 hover:shadow-[0_0_32px_rgba(59,130,246,0.35)] hover:scale-[1.02] active:scale-[0.98]"
                    >
                      <Package className="h-4.5 w-4.5" />
                      View Full Shop — All {products.length} Products
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </div>
                </>
              )}
            </>
          ) : (
            /* ── Empty State ─────────────────────────────────────── */
            <div className="my-20 flex flex-col items-center justify-center text-center space-y-5 py-16 rounded-2xl border border-dashed border-white/[0.06] bg-white/[0.015]">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/[0.03] border border-white/[0.05]">
                <SearchX className="h-8 w-8 text-[#475569]" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">No matching products</h3>
                <p className="mt-2 text-[14px] text-[#64748B] max-w-sm">
                  Try switching category filters or clearing your search to browse all {products.length} products.
                </p>
              </div>
              <button
                onClick={() => {
                  setSelectedCategory('all');
                  setSearchQuery('');
                }}
                className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#3B82F6] to-[#2563EB] px-6 py-3 text-[13px] font-bold text-white transition-all duration-300 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] active:scale-[0.98]"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>

      <ITServicesSection itServices={itServices} />
    </>
  );
}

function ProductMarquee({ products }: { products: Product[] }) {
  if (!products.length) return null;

  const items = [...products, ...products];

  return (
    <div className="relative overflow-hidden">
      <style jsx>{`
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

      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 sm:w-24 bg-gradient-to-r from-[#05070D] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 sm:w-24 bg-gradient-to-l from-[#05070D] to-transparent" />

      <div className="qb-marquee-track">
        {items.map((product, idx) => (
          <div key={`${product.id}-${idx}`} className="w-[260px] sm:w-[280px] lg:w-[300px] shrink-0 pr-4">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}
