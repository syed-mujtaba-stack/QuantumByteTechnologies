'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useCart } from '@/app/context/CartContext';
import { formatPKR } from '@/sanity/lib/currency';
import { X, ShoppingBag, Trash2, Plus, Minus, ArrowRight, Tag, ShieldCheck, Truck, Gift, Sparkles } from 'lucide-react';

export function CartDrawer() {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateQuantity,
    cartTotal,
    cartCount,
    openCheckout,
    clearCart
  } = useCart();

  const [promoCode, setPromoCode] = useState('');
  const [discountPercent, setDiscountPercent] = useState(0);
  const [promoApplied, setPromoApplied] = useState(false);

  if (!isCartOpen) return null;

  const handleApplyPromo = () => {
    if (promoCode.trim().toUpperCase() === 'QUANTUM10') {
      setDiscountPercent(10);
      setPromoApplied(true);
    } else {
      alert('Invalid Promo Code. Try "QUANTUM10"');
    }
  };

  const discountValue = (cartTotal * discountPercent) / 100;
  const finalTotal = cartTotal - discountValue;
  const freeShippingThreshold = 100;
  const progressPercent = Math.min(100, (cartTotal / freeShippingThreshold) * 100);

  return (
    <div className="fixed inset-0 z-50 overflow-hidden animate-fade-in">
      <div
        onClick={() => setIsCartOpen(false)}
        className="fixed inset-0 bg-[#05070D]/85 backdrop-blur-sm transition-opacity"
        aria-hidden="true"
      />

      <div className="fixed inset-y-0 right-0 flex max-w-full pl-10">
        <div className="w-screen max-w-md border-l border-white/[0.08] bg-[#080B12] shadow-2xl flex flex-col justify-between animate-slide-in">
          <div className="flex flex-col h-full">
            {/* Header */}
            <div className="p-6 border-b border-white/[0.06]">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#3B82F6]/[0.12] text-[#3B82F6]">
                    <ShoppingBag className="h-5 w-5" />
                  </div>
                  <div>
                    <h2 className="text-lg font-black text-white">Shopping Cart</h2>
                    <span className="text-xs text-[#64748B]">{cartCount} item{cartCount !== 1 ? 's' : ''}</span>
                  </div>
                </div>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="btn btn-icon btn-ghost text-[#64748B] hover:text-white hover:bg-white/[0.05]"
                  aria-label="Close cart"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Free Shipping Progress */}
              <div className="rounded-xl border border-white/[0.06] bg-[#05070D] p-4 space-y-2">
                <div className="flex items-center justify-between text-sm font-semibold">
                  <span className="text-white flex items-center gap-2">
                    <ShieldCheck className="h-4 w-4 text-[#3B82F6]" />
                    {cartTotal >= freeShippingThreshold ? (
                      <>
                        <span>Free Express Shipping Unlocked!</span>
                        <Gift className="h-4 w-4 text-[#06B6D4]" />
                      </>
                    ) : (
                      `Add ${formatPKR(freeShippingThreshold - cartTotal)} for Free Express Shipping`
                    )}
                  </span>
                </div>
                <div className="h-2 w-full rounded-full bg-white/[0.06] overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-[#3B82F6] to-[#06B6D4] transition-all duration-500 ease-out"
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>
                <div className="flex items-center justify-between text-[10px] text-[#64748B]">
                  <span>Cart Value</span>
                  <span className="font-bold text-white">{formatPKR(cartTotal)}</span>
                </div>
              </div>
            </div>

            {/* Cart Items */}
            <div data-lenis-prevent className="flex-1 overflow-y-auto p-6 space-y-4">
              {cart.length === 0 ? (
                <div className="flex h-[200px] flex-col items-center justify-center text-center space-y-4">
                  <div className="flex h-18 w-18 items-center justify-center rounded-2xl bg-white/[0.04] text-[#3B82F6]">
                    <ShoppingBag className="h-9 w-9" />
                  </div>
                  <h3 className="text-base font-bold text-white">Your cart is empty</h3>
                  <p className="text-sm text-[#64748B] max-w-xs">
                    Browse our high-performance PCs, laptops, mobiles, chargers, and parts catalog to add items!
                  </p>
                  <button
                    onClick={() => setIsCartOpen(false)}
                    className="btn btn-primary mt-2"
                  >
                    Continue Shopping
                  </button>
                </div>
              ) : (
                cart.map((item) => (
                  <div
                    key={item.product.id}
                    className="group flex gap-4 rounded-xl border border-white/[0.06] bg-[#0B0F18] p-3 transition-all hover:border-[#3B82F6]/25 hover:shadow-lg hover:shadow-[#3B82F6]/[0.08]"
                  >
                    <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-lg bg-[#05070D]">
                      <Image
                        src={item.product.imageUrl}
                        alt={item.product.name}
                        fill
                        sizes="80px"
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <h4 className="line-clamp-1 text-sm font-bold text-white">{item.product.name}</h4>
                          <span className="text-[10px] font-semibold text-[#3B82F6] uppercase tracking-wide">{item.product.brand}</span>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.product.id)}
                          className="btn btn-icon btn-sm btn-ghost text-[#64748B] hover:text-[#EF4444] hover:bg-[#EF4444]/10 flex-shrink-0"
                          aria-label={`Remove ${item.product.name}`}
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                      <div className="mt-2 flex items-center justify-between">
                        <span className="text-base font-black text-white">{formatPKR(item.product.price)}</span>
                        <div className="flex items-center gap-1.5 rounded-lg border border-white/[0.06] bg-[#05070D] px-2.5 py-1.5">
                          <button
                            onClick={() => updateQuantity(item.product.id, -1)}
                            className="btn btn-icon btn-sm btn-ghost text-[#64748B] hover:text-white hover:bg-white/[0.05]"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="h-3.5 w-3.5" />
                          </button>
                          <span className="text-sm font-bold text-white min-w-6 text-center">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.product.id, 1)}
                            className="btn btn-icon btn-sm btn-ghost text-[#64748B] hover:text-white hover:bg-white/[0.05]"
                            aria-label="Increase quantity"
                          >
                            <Plus className="h-3.5 w-3.5" />
                          </button>
                        </div>
                      </div>
                      <p className="mt-1 text-[11px] text-[#10B981] font-medium flex items-center gap-1">
                        <ShieldCheck className="h-3 w-3" />
                        Genuine · {item.product.stock} in stock
                      </p>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Footer & Checkout */}
          {cart.length > 0 && (
            <div className="border-t border-white/[0.06] p-6 space-y-4 bg-[#05070D]/50">
              {/* Promo Input */}
              <div className="flex items-center gap-2">
                <div className="relative flex-1">
                  <Tag className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#64748B]" aria-hidden="true" />
                  <input
                    type="text"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    placeholder='Promo code (try "QUANTUM10")'
                    className="input w-full h-11 pl-10 pr-10 text-sm uppercase tracking-wider"
                  />
                </div>
                <button
                  onClick={handleApplyPromo}
                  className="btn btn-sm btn-outline whitespace-nowrap"
                >
                  Apply
                </button>
              </div>

              {promoApplied && (
                <div className="flex items-center gap-2 rounded-lg bg-[#06B6D4]/10 border border-[#06B6D4]/25 p-3 animate-scale-in">
                  <Sparkles className="h-4.5 w-4.5 text-[#06B6D4]" />
                  <span className="text-sm font-semibold text-[#06B6D4]">Promo applied! 10% off — Saved {formatPKR(discountValue)}</span>
                </div>
              )}

              {/* Price Breakdown */}
              <div className="space-y-2.5 text-sm text-[#94A3B8]">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-bold text-white">{formatPKR(cartTotal)}</span>
                </div>
                {promoApplied && (
                  <div className="flex justify-between text-[#06B6D4]">
                    <span>Promo Discount (10%)</span>
                    <span>-{formatPKR(discountValue)}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span className="flex items-center gap-1.5">
                    Estimated Shipping
                    <Truck className="h-3.5 w-3.5" />
                  </span>
                  <span className="font-bold text-white">
                    {cartTotal >= freeShippingThreshold ? (
                      <span className="text-[#10B981] flex items-center gap-1">FREE <ShieldCheck className="h-3 w-3" /></span>
                    ) : (
                      formatPKR(15)
                    )}
                  </span>
                </div>
                <div className="flex justify-between border-t border-white/[0.06] pt-2 text-base font-extrabold text-white">
                  <span>Total Amount</span>
                  <span className="text-[#3B82F6]">{formatPKR(finalTotal)}</span>
                </div>
              </div>

              {/* Actions */}
              <button
                onClick={openCheckout}
                className="btn btn-primary btn-lg w-full justify-center gap-2"
              >
                Proceed to Checkout
                <ArrowRight className="h-5 w-5" />
              </button>

              <button
                onClick={clearCart}
                className="btn btn-ghost w-full text-sm"
              >
                Clear Cart
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
