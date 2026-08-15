'use client';

import React from 'react';
import Image from 'next/image';
import { Product } from '@/sanity/lib/data';
import { useCart } from '@/app/context/CartContext';
import { useWishlist } from '@/app/context/WishlistContext';
import { formatPKR } from '@/sanity/lib/currency';
import { GSAPHoverTilt } from './GSAPWrapper';
import { Star, ShoppingBag, Eye, Check, Heart, Truck, RotateCcw, ShieldCheck } from 'lucide-react';

export function ProductCard({ product }: { product: Product }) {
  const { addToCart, openProductDetail } = useCart();
  const { addToWishlist, isInWishlist } = useWishlist();

  const discountAmount = product.discountPrice ? product.discountPrice - product.price : 0;
  const discountPercent = product.discountPrice ? Math.round((discountAmount / product.discountPrice) * 100) : 0;
  const wished = isInWishlist(product.id);

  return (
    <GSAPHoverTilt className="h-full">
      <article className="group relative flex h-full flex-col bg-[#0d0d12] border border-[#232330] rounded-2xl overflow-hidden transition-all duration-300 hover:border-[#ff003c]/40 hover:shadow-xl hover:shadow-[#ff003c]/10 hover:-translate-y-1">
        <div className="relative overflow-hidden bg-[#030305]">
          <div className="absolute inset-0 bg-gradient-to-t from-[#030305]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          <div className="absolute left-3 top-3 z-10 flex flex-col gap-1.5">
            {product.isNewRelease && (
              <span className="badge badge-new">
                <span className="relative">NEW</span>
                <span className="absolute inset-0 bg-[inherit] blur-[4px] opacity-50" aria-hidden="true" />
              </span>
            )}
            {discountPercent > 0 && (
              <span className="badge badge-sale">
                -{discountPercent}%
              </span>
            )}
            {product.isFeatured && !product.isNewRelease && discountPercent === 0 && (
              <span className="badge badge-primary">Featured</span>
            )}
          </div>

          <div className="absolute right-3 top-3 z-10 flex items-center gap-1.5">
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                addToWishlist(product);
              }}
              aria-label={wished ? 'Remove from wishlist' : 'Add to wishlist'}
              className={`relative flex h-9 w-9 items-center justify-center rounded-xl transition-all duration-300 ${
                wished
                  ? 'bg-[#ff003c] text-white shadow-lg shadow-[#ff003c]/40'
                  : 'bg-[#08080c]/90 text-white/80 hover:bg-[#ff003c] hover:text-white hover:shadow-lg hover:shadow-[#ff003c]/30 backdrop-blur-sm'
              }`}
            >
              <Heart className={`h-4.5 w-4.5 ${wished ? 'fill-current' : ''}`} />
              {wished && (
                <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-white text-[10px] font-extrabold text-[#ff003c]" />
              )}
            </button>
          </div>

          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src={product.imageUrl}
              alt={product.name}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              loading="lazy"
            />

            <div className="absolute inset-0 bg-[#030305]/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 p-4">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  addToCart(product);
                }}
                className="btn btn-primary w-full sm:w-auto flex-1"
              >
                <ShoppingBag className="h-4.5 w-4.5" />
                <span>Add to Cart</span>
              </button>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  openProductDetail(product);
                }}
                className="btn btn-secondary w-full sm:w-auto flex-1"
              >
                <Eye className="h-4.5 w-4.5" />
                <span>Quick View</span>
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-1 flex-col p-5 space-y-4">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#ff003c]">
                {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
              </span>
              <div className="flex items-center gap-1">
                <Star className="h-3.5 w-3.5 fill-current text-[#ffb800]" />
                <span className="font-bold text-white text-sm">{product.rating}</span>
                <span className="text-[10px] text-[#6b6b7a]">({product.reviewsCount})</span>
              </div>
            </div>

            <h3
              onClick={() => openProductDetail(product)}
              className="text-base font-bold text-white leading-snug line-clamp-2 transition-colors duration-200 group-hover:text-[#ff003c] cursor-pointer"
            >
              {product.name}
            </h3>

            <div className="flex flex-wrap gap-1.5">
              {product.specs?.slice(0, 3).map((spec, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-0.5 text-[10px] text-[#6b6b7a] bg-[#08080c] border border-[#1a1a24] rounded-full hover:border-[#ff003c]/30 hover:text-white transition-all"
                >
                  {spec}
                </span>
              ))}
              {product.specs && product.specs.length > 3 && (
                <span className="px-2.5 py-0.5 text-[10px] text-[#6b6b7a] bg-[#08080c] border border-[#1a1a24] rounded-full">
                  +{product.specs.length - 3} more
                </span>
              )}
            </div>
          </div>

          <div className="mt-auto pt-4 border-t border-[#1a1a24]">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-baseline gap-2">
                <span className="text-xl font-black text-white">{formatPKR(product.price)}</span>
                {product.discountPrice && (
                  <span className="text-sm text-[#6b6b7a] line-through">{formatPKR(product.discountPrice)}</span>
                )}
              </div>
              <div className="flex items-center gap-1.5 text-[11px] font-semibold text-[#30d158]">
                <Check className="h-3.5 w-3.5" />
                In Stock ({product.stock})
              </div>
            </div>

            <button
              onClick={() => addToCart(product)}
              className="group btn btn-primary w-full justify-center gap-2"
            >
              <ShoppingBag className="h-4.5 w-4.5 transition-transform group-hover:scale-110" />
              <span>Add to Cart</span>
            </button>

            <div className="flex items-center justify-center gap-4 pt-3 text-[10px] text-[#6b6b7a]">
              <span className="flex items-center gap-1">
                <Truck className="h-3.5 w-3.5" />
                Free Shipping
              </span>
              <span className="flex items-center gap-1">
                <RotateCcw className="h-3.5 w-3.5" />
                14-Day Returns
              </span>
              <span className="flex items-center gap-1">
                <ShieldCheck className="h-3.5 w-3.5" />
                Genuine Warranty
              </span>
            </div>
          </div>
        </div>
      </article>
    </GSAPHoverTilt>
  );
}