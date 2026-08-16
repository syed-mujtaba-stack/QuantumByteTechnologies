'use client';

import React from 'react';
import Image from 'next/image';
import { Product } from '@/sanity/lib/data';
import { useCart } from '@/app/context/CartContext';
import { useWishlist } from '@/app/context/WishlistContext';
import { formatPKR } from '@/sanity/lib/currency';
import { Star, ShoppingBag, Eye, Check, Heart, Truck, RotateCcw, ShieldCheck } from 'lucide-react';

export function ProductCard({ product }: { product: Product }) {
  const { addToCart, openProductDetail } = useCart();
  const { addToWishlist, isInWishlist } = useWishlist();

  const discountAmount  = product.discountPrice ? product.discountPrice - product.price : 0;
  const discountPercent = product.discountPrice ? Math.round((discountAmount / product.discountPrice) * 100) : 0;
  const wished = isInWishlist(product.id);

  return (
    <article className="group relative flex h-full flex-col rounded-2xl border border-white/[0.06] bg-[#0B0F18] overflow-hidden transition-all duration-300 hover:border-[#3B82F6]/20 hover:shadow-[0_8px_32px_rgba(0,0,0,0.4)] hover:-translate-y-0.5">

      {/* ── Image ──────────────────────────────────────────────── */}
      <div className="relative overflow-hidden bg-[#080B12]">

        {/* Badges */}
        <div className="absolute left-2.5 top-2.5 z-10 flex flex-col gap-1">
          {product.isNewRelease && (
            <span className="inline-flex items-center rounded-md bg-[#3B82F6] px-2 py-0.5 text-[10px] font-extrabold uppercase tracking-wide text-white">
              NEW
            </span>
          )}
          {discountPercent > 0 && (
            <span className="inline-flex items-center rounded-md bg-[#EF4444] px-2 py-0.5 text-[10px] font-extrabold uppercase tracking-wide text-white">
              -{discountPercent}%
            </span>
          )}
          {product.isFeatured && !product.isNewRelease && discountPercent === 0 && (
            <span className="inline-flex items-center rounded-md bg-[#F59E0B]/90 px-2 py-0.5 text-[10px] font-extrabold uppercase tracking-wide text-white">
              Featured
            </span>
          )}
        </div>

        {/* Wishlist */}
        <button
          onClick={(e) => { e.preventDefault(); e.stopPropagation(); addToWishlist(product); }}
          aria-label={wished ? 'Remove from wishlist' : 'Add to wishlist'}
          className={`absolute right-2.5 top-2.5 z-10 flex h-8 w-8 items-center justify-center rounded-xl transition-all duration-200 ${
            wished
              ? 'bg-[#3B82F6] text-white shadow-[0_0_12px_rgba(59,130,246,0.4)]'
              : 'bg-[#05070D]/75 text-white/40 hover:bg-[#3B82F6] hover:text-white backdrop-blur-sm'
          }`}
        >
          <Heart className={`h-3.5 w-3.5 ${wished ? 'fill-current' : ''}`} />
        </button>

        {/* Product image */}
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={product.imageUrl}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
            className="object-contain bg-[#080B12] transition-transform duration-500 ease-out group-hover:scale-[1.04]"
            loading="lazy"
          />

          {/* Hover overlay */}
          <div className="absolute inset-0 bg-[#05070D]/65 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-2 px-4">
            <button
              onClick={(e) => { e.preventDefault(); e.stopPropagation(); addToCart(product); }}
              className="flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-[#3B82F6] to-[#2563EB] px-4 py-2.5 text-[12px] font-bold text-white transition-all duration-200 hover:shadow-[0_0_16px_rgba(59,130,246,0.4)] active:scale-[0.97]"
            >
              <ShoppingBag className="h-3.5 w-3.5" />
              Add to Cart
            </button>
            <button
              onClick={(e) => { e.preventDefault(); e.stopPropagation(); openProductDetail(product); }}
              aria-label="Quick view"
              className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/[0.12] bg-white/[0.07] text-white/70 backdrop-blur-sm transition-all duration-200 hover:bg-white/[0.12] hover:text-white active:scale-[0.97]"
            >
              <Eye className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* ── Content ──────────────────────────────────────────────── */}
      <div className="flex flex-1 flex-col p-4">

        {/* Category & Rating */}
        <div className="flex items-center justify-between mb-2">
          <span className="text-[10px] font-bold uppercase tracking-[0.1em] text-[#3B82F6]/75">
            {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
          </span>
          <div className="flex items-center gap-1">
            <Star className="h-3 w-3 fill-[#F59E0B] text-[#F59E0B]" />
            <span className="text-[11px] font-bold text-white">{product.rating}</span>
            <span className="text-[10px] text-[#475569]">({product.reviewsCount})</span>
          </div>
        </div>

        {/* Title */}
        <h3
          onClick={() => openProductDetail(product)}
          className="text-[13.5px] font-semibold text-white/85 leading-snug line-clamp-2 cursor-pointer transition-colors duration-200 group-hover:text-[#3B82F6] mb-2.5"
        >
          {product.name}
        </h3>

        {/* Specs */}
        {product.specs && product.specs.length > 0 && (
          <div className="flex flex-wrap gap-1 mb-3">
            {product.specs.slice(0, 2).map((spec, idx) => (
              <span
                key={idx}
                className="inline-block px-2 py-0.5 text-[10px] text-[#64748B] bg-white/[0.03] border border-white/[0.05] rounded-md leading-tight"
              >
                {spec}
              </span>
            ))}
            {product.specs.length > 2 && (
              <span className="inline-block px-2 py-0.5 text-[10px] text-[#475569]">
                +{product.specs.length - 2}
              </span>
            )}
          </div>
        )}

        {/* Push price to bottom */}
        <div className="mt-auto" />

        {/* Price & cart button */}
        <div className="flex items-center justify-between pt-3 border-t border-white/[0.05]">
          <div>
            <div className="flex items-baseline gap-1.5">
              <span className="text-[18px] font-black text-white tracking-tight leading-none">
                {formatPKR(product.price)}
              </span>
              {product.discountPrice && (
                <span className="text-[11px] text-[#475569] line-through leading-none">
                  {formatPKR(product.discountPrice)}
                </span>
              )}
            </div>
            <div className="flex items-center gap-1 mt-1">
              <Check className="h-3 w-3 text-[#22C55E]" />
              <span className="text-[10px] font-medium text-[#22C55E]">In Stock ({product.stock})</span>
            </div>
          </div>

          <button
            onClick={() => addToCart(product)}
            aria-label={`Add ${product.name} to cart`}
            className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[#3B82F6] to-[#2563EB] text-white transition-all duration-200 hover:shadow-[0_0_16px_rgba(59,130,246,0.35)] active:scale-[0.95] shrink-0"
          >
            <ShoppingBag className="h-4 w-4" />
          </button>
        </div>

        {/* Trust badges */}
        <div className="flex items-center justify-between mt-3 pt-3 border-t border-white/[0.04]">
          <span className="flex items-center gap-1 text-[9.5px] font-medium text-[#475569]">
            <Truck className="h-3 w-3 shrink-0" />
            Free Delivery
          </span>
          <span className="flex items-center gap-1 text-[9.5px] font-medium text-[#475569]">
            <RotateCcw className="h-3 w-3 shrink-0" />
            14-Day Returns
          </span>
          <span className="flex items-center gap-1 text-[9.5px] font-medium text-[#475569]">
            <ShieldCheck className="h-3 w-3 shrink-0" />
            Warranty
          </span>
        </div>
      </div>
    </article>
  );
}
