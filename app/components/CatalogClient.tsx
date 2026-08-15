'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { Product, ITService } from '@/sanity/lib/data';
import { useCart } from '@/app/context/CartContext';
import { ProductCard } from '@/app/components/ProductCard';
import { CategoryFilter } from '@/app/components/CategoryFilter';
import { ITServicesSection } from '@/app/components/ITServicesSection';
import { GSAPReveal } from '@/app/components/GSAPWrapper';
import { SlidersHorizontal, Cpu, SearchX, ArrowRight, Package, Flame, Sparkles, Grid, List } from 'lucide-react';

interface CatalogClientProps {
  products: Product[];
  itServices: ITService[];
  homeMode?: boolean;
}

export function CatalogClient({ products, itServices, homeMode = false }: CatalogClientProps) {
  const { selectedCategory, searchQuery, setSelectedCategory, setSearchQuery } = useCart();
  const [sortBy, setSortBy] = useState<'featured' | 'price-low' | 'price-high' | 'rating' | 'newest'>('featured');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showFilters, setShowFilters] = useState(false);

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
        className={`relative overflow-hidden border-b border-[#1a1a24] bg-[#030305] ${homeMode ? 'py-12 lg:py-16' : 'py-16 lg:py-24'}`}
      >
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[500px] w-[900px] rounded-full bg-[#ff003c]/5 blur-[120px]" />
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#ff003c]/20 to-transparent" />
          <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'linear-gradient(#ff003c 1px, transparent 1px), linear-gradient(90deg, #ff003c 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className={homeMode ? 'mb-10' : 'mb-14'}>
            <GSAPReveal direction="down" delay={0.05}>
              <div className="mb-6 flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-2 rounded-full border border-[#ff003c]/30 bg-[#ff003c]/10 px-4 py-1.5 text-xs font-extrabold uppercase tracking-widest text-[#ff003c]">
                  <Cpu className="h-3.5 w-3.5 animate-pulse" />
                  Official Hardware Inventory
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-[#232330] bg-[#08080c] px-3 py-1.5 text-xs font-bold text-[#9c9ca8]">
                  <Package className="h-3.5 w-3.5 text-[#ff003c]" />
                  {products.length} Products In Stock
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-[#232330] bg-[#08080c] px-3 py-1.5 text-xs font-bold text-[#9c9ca8]">
                  <Flame className="h-3.5 w-3.5 text-orange-500" />
                  8 Categories
                </span>
              </div>
            </GSAPReveal>

            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
              <div className="max-w-2xl">
                <GSAPReveal direction="up" delay={0.15}>
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-[1.05] tracking-tight text-white">
                    EXPLORE{' '}
                    <span className="relative inline-block">
                      <span className="text-[#ff003c]">PRODUCTS</span>
                    </span>
                    {' '}&{' '}
                    <span className="text-[#ff003c]">PARTS</span>
                  </h2>
                </GSAPReveal>
                <GSAPReveal direction="up" delay={0.25}>
                  <p className="mt-4 text-base text-[#9c9ca8] max-w-xl leading-relaxed">
                    Premium gaming rigs, flagship laptops, cutting-edge smartphones, GaN chargers, GPUs, RAM, SSDs — every component genuinely sourced & warranty-backed.
                  </p>
                </GSAPReveal>
              </div>

              <GSAPReveal direction="left" delay={0.3}>
                <div className="flex flex-wrap items-center gap-3">
                  <div className="flex items-center gap-2 rounded-xl border border-[#232330] bg-[#08080c] px-4 py-2.5 text-xs">
                    <Sparkles className="h-3.5 w-3.5 text-[#ff003c]" />
                    <span className="text-[#9c9ca8]">Showing</span>
                    <strong className="text-white text-sm">{Math.min(10, showcaseProducts.length)}</strong>
                    <span className="text-[#9c9ca8]">{homeMode ? 'picks of' : 'of'}</span>
                    <strong className="text-white text-sm">{products.length}</strong>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setViewMode('grid')}
                      className={`btn btn-icon btn-sm transition-all ${viewMode === 'grid' ? 'btn-primary' : 'btn-ghost'}`}
                      aria-label="Grid view"
                    >
                      <Grid className="h-4.5 w-4.5" />
                    </button>
                    <button
                      onClick={() => setViewMode('list')}
                      className={`btn btn-icon btn-sm transition-all ${viewMode === 'list' ? 'btn-primary' : 'btn-ghost'}`}
                      aria-label="List view"
                    >
                      <List className="h-4.5 w-4.5" />
                    </button>

                    <div className="relative flex items-center gap-2 rounded-xl border border-[#232330] bg-[#08080c] px-4 py-2.5 text-xs text-white hover:border-[#ff003c]/40 transition-colors">
                      <SlidersHorizontal className="h-3.5 w-3.5 text-[#ff003c]" />
                      <select
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
                        className="bg-transparent text-xs font-bold text-white outline-none cursor-pointer appearance-none pr-8"
                      >
                        <option value="featured" className="bg-[#08080c]">Sort: Featured</option>
                        <option value="newest" className="bg-[#08080c]">Newest First</option>
                        <option value="price-low" className="bg-[#08080c]">Price: Low → High</option>
                        <option value="price-high" className="bg-[#08080c]">Price: High → Low</option>
                        <option value="rating" className="bg-[#08080c]">Highest Rated</option>
                      </select>
                    </div>
                  </div>
                </div>
              </GSAPReveal>
            </div>

            <GSAPReveal direction="up" delay={0.35}>
              <div className="mt-8 flex items-center gap-4">
                <div className="h-px flex-1 bg-gradient-to-r from-[#ff003c]/40 via-transparent to-transparent" />
                <div className="h-1.5 w-1.5 rotate-45 bg-[#ff003c]" />
                <div className="h-px w-16 bg-[#232330]" />
              </div>
            </GSAPReveal>
          </div>

          <div className={homeMode ? 'mb-6' : 'mb-10'}>
            <CategoryFilter />
          </div>

          {searchQuery && (
            <div className="mb-8 flex items-center justify-between rounded-xl border border-[#ff003c]/30 bg-[#ff003c]/10 px-4 py-3 text-sm text-white animate-slide-down">
              <span>
                Search results for: <strong className="text-[#ff003c]">&ldquo;{searchQuery}&rdquo;</strong>
                <span className="ml-2 text-[#9c9ca8]">— {filteredProducts.length} result{filteredProducts.length !== 1 ? 's' : ''} found</span>
              </span>
              <button
                onClick={() => setSearchQuery('')}
                className="btn btn-sm btn-outline"
              >
                <SearchX className="h-3.5 w-3.5 mr-1.5" />
                Clear
              </button>
            </div>
          )}

          {showcaseProducts.length > 0 ? (
            <>
              {homeMode ? (
                <ProductMarquee products={showcaseProducts} />
              ) : (
                <>
                  <div
                    className={`grid gap-4 sm:gap-6 ${viewMode === 'list' ? 'grid-cols-1' : 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4'}`}
                    role="list"
                    aria-label="Product catalog"
                  >
                    {filteredProducts.map((product, index) => (
                      <GSAPReveal key={product.id} direction="up" delay={index * 0.03} distance={30}>
                        <ProductCard product={product} />
                      </GSAPReveal>
                    ))}
                  </div>

                  <div className={`flex flex-col items-center gap-4 text-center ${homeMode ? 'mt-8' : 'mt-16'}`}>
                    <p className="text-sm text-[#9c9ca8]">
                      Showing <strong className="text-white">{homeMode ? Math.min(10, showcaseProducts.length) : filteredProducts.length}</strong> of <strong className="text-white">{products.length}</strong> products
                    </p>
                    <Link
                      href="/shop"
                      className="group btn btn-primary btn-lg flex items-center gap-3"
                    >
                      <Package className="h-5 w-5" />
                      View Full Shop — All {products.length} Products
                      <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </>
              )}
            </>
          ) : (
            <div className="my-20 flex flex-col items-center justify-center text-center space-y-6 py-20 rounded-2xl border-2 border-dashed border-[#232330] bg-[#08080c]/50">
              <div className="flex h-24 w-24 items-center justify-center rounded-2xl bg-[#14141a] text-[#ff003c] border border-[#232330]">
                <SearchX className="h-12 w-12" />
              </div>
              <div>
                <h3 className="text-2xl font-extrabold text-white">No matching products found</h3>
                <p className="mt-2 text-base text-[#9c9ca8] max-w-sm">
                  Try switching category filters or clearing your search term to browse all {products.length} products.
                </p>
              </div>
              <button
                onClick={() => {
                  setSelectedCategory('all');
                  setSearchQuery('');
                }}
                className="btn btn-primary"
              >
                Reset Catalog View
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

      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 sm:w-24 bg-gradient-to-r from-[#030305] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 sm:w-24 bg-gradient-to-l from-[#030305] to-transparent" />

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