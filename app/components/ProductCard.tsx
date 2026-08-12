'use client';

import React from 'react';
import Image from 'next/image';
import { Product } from '@/sanity/lib/data';
import { useCart } from '@/app/context/CartContext';
import { formatPKR } from '@/sanity/lib/currency';
import { GSAPHoverTilt } from './GSAPWrapper';
import { Star, ShoppingBag, Eye, Check } from 'lucide-react';

export function ProductCard({ product }: { product: Product }) {
  const { addToCart, openProductDetail } = useCart();

  const discountAmount = product.discountPrice ? product.discountPrice - product.price : 0;

  return (
    <GSAPHoverTilt className="h-full">
      <div className="group relative flex h-full flex-col justify-between rounded-2xl border border-[#22222e] bg-[#0e0e12] p-4 transition-all duration-300 hover:border-[#ff003c]/60 hover:bg-[#12121a] hover:shadow-xl hover:shadow-[#ff003c]/10">
        {/* Top Badges Row */}
        <div className="absolute left-3 top-3 z-10 flex flex-col gap-1.5">
          {product.isNewRelease && (
            <span className="rounded-md bg-[#ff003c] px-2 py-0.5 text-[10px] font-extrabold uppercase text-white shadow-md shadow-[#ff003c]/30">
              NEW
            </span>
          )}
          {discountAmount > 0 && (
            <span className="rounded-md bg-[#16161f] border border-[#ff003c]/40 px-2 py-0.5 text-[10px] font-bold text-[#ff003c]">
              SAVE {formatPKR(discountAmount)}
            </span>
          )}
        </div>

        {/* Brand Tag */}
        <div className="absolute right-3 top-3 z-10">
          <span className="rounded-md bg-[#050505]/80 px-2 py-0.5 text-[10px] font-bold tracking-wider text-[#a1a1aa] uppercase border border-[#22222e]">
            {product.brand}
          </span>
        </div>

        {/* Product Image */}
        <div className="relative mt-4 h-48 w-full overflow-hidden rounded-xl bg-[#050505] p-2">
          <Image
            src={product.imageUrl}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover rounded-lg transition-transform duration-500 group-hover:scale-105"
          />
          {/* Hover Quick Overlay */}
          <div className="absolute inset-0 bg-[#050505]/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
            <button
              onClick={() => openProductDetail(product)}
              className="flex items-center gap-1.5 rounded-xl bg-[#0e0e12] border border-[#ff003c]/40 px-3 py-1.5 text-xs font-bold text-white hover:bg-[#ff003c] transition"
            >
              <Eye className="h-3.5 w-3.5" />
              Quick Specs
            </button>
          </div>
        </div>

        {/* Product Details */}
        <div className="mt-4 flex flex-1 flex-col justify-between space-y-3">
          <div className="space-y-1.5">
            {/* Category & Rating */}
            <div className="flex items-center justify-between text-xs">
              <span className="text-[11px] font-semibold text-[#ff003c] capitalize tracking-wide">
                {product.category}
              </span>
              <div className="flex items-center gap-1 text-[#ffb800]">
                <Star className="h-3.5 w-3.5 fill-current" />
                <span className="font-bold text-white text-xs">{product.rating}</span>
                <span className="text-[10px] text-[#71717a]">({product.reviewsCount})</span>
              </div>
            </div>

            {/* Name */}
            <h3
              onClick={() => openProductDetail(product)}
              className="line-clamp-1 text-sm font-bold text-white transition hover:text-[#ff003c] cursor-pointer"
            >
              {product.name}
            </h3>

            {/* Specs Snippet */}
            <div className="flex flex-wrap gap-1 pt-1">
              {product.specs.slice(0, 2).map((spec, idx) => (
                <span
                  key={idx}
                  className="rounded bg-[#16161f] px-1.5 py-0.5 text-[10px] text-[#a1a1aa] border border-[#22222e]"
                >
                  {spec}
                </span>
              ))}
            </div>
          </div>

          {/* Price & Action Row */}
          <div className="pt-2 border-t border-[#1f1f2b] flex items-center justify-between">
            <div>
              <div className="flex items-baseline gap-1.5">
                <span className="text-lg font-black text-white">{formatPKR(product.price)}</span>
                {product.discountPrice && (
                  <span className="text-xs text-[#71717a] line-through">
                    {formatPKR(product.discountPrice)}
                  </span>
                )}
              </div>
              <span className="text-[10px] text-[#22c55e] font-semibold flex items-center gap-1">
                <Check className="h-3 w-3" /> In Stock ({product.stock})
              </span>
            </div>

            <button
              onClick={() => addToCart(product)}
              className="group/btn flex items-center gap-1.5 rounded-xl bg-[#ff003c] px-3.5 py-2 text-xs font-extrabold text-white shadow-md shadow-[#ff003c]/20 transition hover:bg-[#e60036] hover:shadow-lg hover:shadow-[#ff003c]/40"
            >
              <ShoppingBag className="h-3.5 w-3.5 transition-transform group-hover/btn:scale-110" />
              Add
            </button>
          </div>
        </div>
      </div>
    </GSAPHoverTilt>
  );
}
