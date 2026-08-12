'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useCart } from '@/app/context/CartContext';
import { formatPKR } from '@/sanity/lib/currency';
import { X, Star, ShoppingBag, ShieldCheck, Truck, Check, Plus, Minus, Cpu } from 'lucide-react';

export function ProductDetailModal() {
  const { activeProductDetail, closeProductDetail, addToCart, openCheckout } = useCart();
  const [quantity, setQuantity] = useState(1);

  if (!activeProductDetail) return null;

  const product = activeProductDetail;
  const discount = product.discountPrice ? product.discountPrice - product.price : 0;

  const handleAddToCart = () => {
    addToCart(product, quantity);
    closeProductDetail();
  };

  const handleBuyNow = () => {
    addToCart(product, quantity);
    closeProductDetail();
    openCheckout();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      {/* Dark Overlay */}
      <div
        onClick={closeProductDetail}
        className="fixed inset-0 bg-[#050505]/80 backdrop-blur-md transition-opacity"
      />

      {/* Modal Card */}
      <div className="relative z-10 w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl border border-[#ff003c]/40 bg-[#0e0e12] p-6 shadow-2xl shadow-[#ff003c]/20 glass-panel-red">
        {/* Close Button */}
        <button
          onClick={closeProductDetail}
          className="absolute right-4 top-4 rounded-full bg-[#16161f] p-2 text-[#a1a1aa] transition hover:bg-[#ff003c] hover:text-white"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="grid gap-6 md:grid-cols-12">
          {/* Product Image Column */}
          <div className="md:col-span-6 flex flex-col justify-between">
            <div className="relative h-72 w-full overflow-hidden rounded-xl bg-[#050505] p-2">
              <Image
                src={product.imageUrl}
                alt={product.name}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover rounded-lg"
              />
              <span className="absolute left-3 top-3 rounded-md bg-[#ff003c] px-2.5 py-1 text-xs font-extrabold text-white">
                {product.brand}
              </span>
            </div>

            {/* Guarantees */}
            <div className="mt-4 grid grid-cols-2 gap-2 text-xs border-t border-[#1f1f2b] pt-4">
              <div className="flex items-center gap-2 text-[#a1a1aa]">
                <ShieldCheck className="h-4 w-4 text-[#ff003c]" />
                <span>1 Year Official Warranty</span>
              </div>
              <div className="flex items-center gap-2 text-[#a1a1aa]">
                <Truck className="h-4 w-4 text-[#ff003c]" />
                <span>Express Insured Shipping</span>
              </div>
            </div>
          </div>

          {/* Details Column */}
          <div className="md:col-span-6 flex flex-col justify-between space-y-4">
            <div>
              {/* Category & Rating */}
              <div className="flex items-center justify-between text-xs mb-1">
                <span className="font-extrabold text-[#ff003c] uppercase tracking-wider">
                  {product.category}
                </span>
                <div className="flex items-center gap-1 text-[#ffb800]">
                  <Star className="h-4 w-4 fill-current" />
                  <span className="font-bold text-white">{product.rating}</span>
                  <span className="text-xs text-[#71717a]">({product.reviewsCount} reviews)</span>
                </div>
              </div>

              {/* Product Title */}
              <h2 className="text-xl font-extrabold text-white">{product.name}</h2>

              {/* Pricing */}
              <div className="mt-3 flex items-baseline gap-3">
                <span className="text-2xl font-black text-white">{formatPKR(product.price)}</span>
                {product.discountPrice && (
                  <span className="text-sm text-[#71717a] line-through">
                    {formatPKR(product.discountPrice)}
                  </span>
                )}
                {discount > 0 && (
                  <span className="rounded bg-[#ff003c]/20 px-2 py-0.5 text-xs font-bold text-[#ff003c]">
                    Save {formatPKR(discount)}
                  </span>
                )}
              </div>

              {/* Description */}
              <p className="mt-3 text-xs text-[#a1a1aa] leading-relaxed">
                {product.description}
              </p>

              {/* Specs List */}
              <div className="mt-4 space-y-2">
                <h4 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
                  <Cpu className="h-3.5 w-3.5 text-[#ff003c]" />
                  Key Specifications
                </h4>
                <div className="space-y-1.5">
                  {product.specs.map((spec, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-white">
                      <Check className="h-3.5 w-3.5 text-[#ff003c]" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Quantity & Actions */}
            <div className="space-y-3 pt-4 border-t border-[#1f1f2b]">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-[#a1a1aa]">Select Quantity:</span>
                <div className="flex items-center gap-3 rounded-xl border border-[#22222e] bg-[#050505] px-3 py-1.5">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="text-[#a1a1aa] hover:text-white"
                  >
                    <Minus className="h-3.5 w-3.5" />
                  </button>
                  <span className="text-sm font-bold text-white min-w-4 text-center">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="text-[#a1a1aa] hover:text-white"
                  >
                    <Plus className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={handleAddToCart}
                  className="flex items-center justify-center gap-2 rounded-xl border border-[#ff003c]/50 bg-[#16161f] py-3 text-xs font-bold text-white transition hover:bg-[#ff003c]/20"
                >
                  <ShoppingBag className="h-4 w-4 text-[#ff003c]" />
                  Add to Cart
                </button>
                <button
                  onClick={handleBuyNow}
                  className="red-gradient-btn flex items-center justify-center gap-2 rounded-xl py-3 text-xs font-extrabold text-white shadow-lg shadow-[#ff003c]/30"
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
