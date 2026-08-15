'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useCart } from '@/app/context/CartContext';
import { formatPKR } from '@/sanity/lib/currency';
import { X, Star, ShoppingBag, ShieldCheck, Truck, Check, Plus, Minus, Cpu, Zap, RotateCcw, ArrowRight, Sparkles, Headphones } from 'lucide-react';

export function ProductDetailModal() {
  const { activeProductDetail, closeProductDetail, addToCart, openCheckout } = useCart();
  const [quantity, setQuantity] = useState(1);

  const product = activeProductDetail;
  const discount = product?.discountPrice ? product.discountPrice - product.price : 0;
  const discountPercent = product?.discountPrice ? Math.round((discount / product.discountPrice) * 100) : 0;

  const handleAddToCart = () => {
    if (product) {
      addToCart(product, quantity);
      closeProductDetail();
    }
  };

  const handleBuyNow = () => {
    if (product) {
      addToCart(product, quantity);
      closeProductDetail();
      openCheckout();
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeProductDetail();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [closeProductDetail]);

  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 animate-fade-in">
      <div
        onClick={closeProductDetail}
        className="fixed inset-0 bg-[#030305]/90 backdrop-blur-sm transition-opacity"
        aria-hidden="true"
      />

      <div
        data-lenis-prevent
        className="relative z-10 w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl border border-[#232330] bg-[#0d0d12] shadow-2xl shadow-[#000000]/50 animate-scale-in"
      >
        <button
          onClick={closeProductDetail}
          className="absolute right-4 top-4 z-10 btn btn-icon btn-ghost text-[#6b6b7a] hover:text-white hover:bg-[#14141a]"
          aria-label="Close product details"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="p-4 sm:p-8">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Product Image Column */}
            <div className="space-y-4">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-[#030305]">
                <Image
                  src={product.imageUrl}
                  alt={product.name}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-contain bg-[#030305] transition-transform duration-500"
                />
                {discountPercent > 0 && (
                  <div className="absolute left-4 top-4 flex items-center gap-1.5 rounded-xl bg-[#ff003c] px-3 py-1.5 text-sm font-black text-white shadow-lg shadow-[#ff003c]/30">
                    <Sparkles className="h-4 w-4" />
                    <span>SAVE {discountPercent}%</span>
                  </div>
                )}
                <div className="absolute right-4 top-4">
                  <span className="badge badge-primary">{product.brand}</span>
                </div>
              </div>

              {/* Guarantees */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="flex items-center gap-2.5 rounded-xl border border-[#232330] bg-[#030305] p-3 hover:border-[#ff003c]/30 transition-colors">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#ff003c]/10 text-[#ff003c] shrink-0">
                    <ShieldCheck className="h-4.5 w-4.5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white">1 Year Official Warranty</p>
                    <p className="text-[10px] text-[#6b6b7a]">Manufacturer backed</p>
                  </div>
                </div>
                <div className="flex items-center gap-2.5 rounded-xl border border-[#232330] bg-[#030305] p-3 hover:border-[#ff003c]/30 transition-colors">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#00d4aa]/10 text-[#00d4aa] shrink-0">
                    <Truck className="h-4.5 w-4.5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white">Free Express Shipping</p>
                    <p className="text-[10px] text-[#6b6b7a]">Insured & tracked</p>
                  </div>
                </div>
                <div className="flex items-center gap-2.5 rounded-xl border border-[#232330] bg-[#030305] p-3 hover:border-[#ff003c]/30 transition-colors">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#f5a623]/10 text-[#f5a623] shrink-0">
                    <RotateCcw className="h-4.5 w-4.5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white">14-Day Easy Returns</p>
                    <p className="text-[10px] text-[#6b6b7a]">Hassle-free policy</p>
                  </div>
                </div>
                <div className="flex items-center gap-2.5 rounded-xl border border-[#232330] bg-[#030305] p-3 hover:border-[#ff003c]/30 transition-colors">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#03b3c3]/10 text-[#03b3c3] shrink-0">
                    <Headphones className="h-4.5 w-4.5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white">24/7 Expert Support</p>
                    <p className="text-[10px] text-[#6b6b7a]">Technical assistance</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Details Column */}
            <div className="space-y-6">
              {/* Category & Rating */}
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <span className="badge badge-primary">{product.category}</span>
                  {product.isNewRelease && <span className="badge badge-new">New</span>}
                  {product.isFeatured && <span className="badge badge-accent">Featured</span>}
                </div>
                <div className="flex items-center gap-1">
                  <Star className="h-4.5 w-4.5 fill-current text-[#ffb800]" />
                  <span className="font-bold text-white text-lg">{product.rating}</span>
                  <span className="text-sm text-[#6b6b7a]">({product.reviewsCount} reviews)</span>
                </div>
              </div>

              {/* Product Title */}
              <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-white leading-snug">{product.name}</h2>

              {/* Pricing */}
              <div className="flex flex-wrap items-baseline gap-3">
                <span className="text-3xl font-black text-white">{formatPKR(product.price)}</span>
                {product.discountPrice && (
                  <span className="text-lg text-[#6b6b7a] line-through">{formatPKR(product.discountPrice)}</span>
                )}
                {discount > 0 && (
                  <span className="badge badge-sale flex items-center gap-1.5">
                    <Zap className="h-3.5 w-3.5" />
                    Save {formatPKR(discount)}
                  </span>
                )}
              </div>

              {/* Stock Status */}
              <div className="flex items-center gap-3 text-sm">
                <span className="flex items-center gap-1.5 text-[#30d158] font-semibold">
                  <ShieldCheck className="h-4 w-4" />
                  In Stock ({product.stock} available)
                </span>
              </div>

              {/* Description */}
              <div className="rounded-xl border border-[#232330] bg-[#030305] p-5">
                <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-3 flex items-center gap-2">
                  <Cpu className="h-4.5 w-4.5 text-[#ff003c]" />
                  Description
                </h4>
                <p className="text-sm text-[#9c9ca8] leading-relaxed whitespace-pre-line">{product.description}</p>
              </div>

              {/* Specs List */}
              <div className="rounded-xl border border-[#232330] bg-[#030305] p-5">
                <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                  <Cpu className="h-4.5 w-4.5 text-[#ff003c]" />
                  Key Specifications
                </h4>
                <div className="grid gap-3 sm:grid-cols-2">
                  {product.specs.map((spec, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 rounded-lg bg-[#08080c] border border-[#1a1a24] p-3 text-sm text-white transition-colors hover:border-[#ff003c]/30">
                      <Check className="h-4.5 w-4.5 text-[#ff003c] flex-shrink-0" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quantity & Actions */}
              <div className="space-y-4 pt-4 border-t border-[#1a1a24]">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-[#9c9ca8]">Quantity</span>
                  <div className="flex items-center gap-2 rounded-xl border border-[#232330] bg-[#030305] px-4 py-2">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="btn btn-icon btn-sm btn-ghost text-[#6b6b7a] hover:text-white hover:bg-[#14141a]"
                      aria-label="Decrease quantity"
                    >
                      <Minus className="h-4 w-4" />
                    </button>
                    <span className="text-lg font-bold text-white min-w-8 text-center">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="btn btn-icon btn-sm btn-ghost text-[#6b6b7a] hover:text-white hover:bg-[#14141a]"
                      aria-label="Increase quantity"
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={handleAddToCart}
                    className="btn btn-secondary btn-lg flex-1 justify-center gap-2"
                  >
                    <ShoppingBag className="h-5 w-5" />
                    Add to Cart
                  </button>
                  <button
                    onClick={handleBuyNow}
                    className="btn btn-primary btn-lg flex-1 justify-center gap-2"
                  >
                    Buy Now
                    <ArrowRight className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

