'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useCart } from '@/app/context/CartContext';
import { formatPKR } from '@/sanity/lib/currency';
import { X, ShoppingBag, Trash2, Plus, Minus, ArrowRight, Tag, ShieldCheck } from 'lucide-react';

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
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Dark Overlay */}
      <div
        onClick={() => setIsCartOpen(false)}
        className="fixed inset-0 bg-[#050505]/80 backdrop-blur-sm transition-opacity"
      />

      <div className="fixed inset-y-0 right-0 flex max-w-full pl-10">
        <div className="w-screen max-w-md border-l border-[#ff003c]/30 bg-[#0e0e12] p-6 shadow-2xl flex flex-col justify-between">
          {/* Header */}
          <div>
            <div className="flex items-center justify-between border-b border-[#1f1f2b] pb-4">
              <div className="flex items-center gap-2">
                <ShoppingBag className="h-5 w-5 text-[#ff003c]" />
                <h2 className="text-lg font-extrabold text-white">Your Shopping Cart</h2>
                <span className="rounded-full bg-[#ff003c] px-2 py-0.5 text-xs font-bold text-white">
                  {cartCount}
                </span>
              </div>

              <button
                onClick={() => setIsCartOpen(false)}
                className="rounded-full bg-[#16161f] p-1.5 text-[#a1a1aa] hover:bg-[#ff003c] hover:text-white"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Free Shipping Progress */}
            <div className="mt-4 rounded-xl border border-[#22222e] bg-[#050505] p-3 space-y-1.5">
              <div className="flex items-center justify-between text-xs font-bold">
                <span className="text-white flex items-center gap-1.5">
                  <ShieldCheck className="h-3.5 w-3.5 text-[#ff003c]" />
                  {cartTotal >= freeShippingThreshold ? '🎉 Free Express Shipping Unlocked!' : `Add ${formatPKR(freeShippingThreshold - cartTotal)} for Free Express Shipping`}
                </span>
              </div>
              <div className="h-1.5 w-full rounded-full bg-[#16161f] overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-[#ff003c] to-[#ff4d73] transition-all duration-300"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            </div>
          </div>

          {/* Cart Items List */}
          <div className="my-4 flex-1 overflow-y-auto space-y-3 pr-1">
            {cart.length === 0 ? (
              <div className="flex h-full flex-col items-center justify-center text-center space-y-3">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#16161f] text-[#ff003c]">
                  <ShoppingBag className="h-8 w-8" />
                </div>
                <h3 className="text-base font-bold text-white">Your cart is empty</h3>
                <p className="text-xs text-[#a1a1aa] max-w-xs">
                  Browse our high-performance PCs, laptops, mobiles, chargers, and parts catalog to add items!
                </p>
              </div>
            ) : (
              cart.map((item) => (
                <div
                  key={item.product.id}
                  className="flex items-center justify-between rounded-xl border border-[#22222e] bg-[#050505] p-3 transition hover:border-[#ff003c]/40"
                >
                  {/* Thumbnail */}
                  <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-lg bg-[#16161f]">
                    <Image
                      src={item.product.imageUrl}
                      alt={item.product.name}
                      fill
                      sizes="64px"
                      className="object-cover"
                    />
                  </div>

                  {/* Details */}
                  <div className="ml-3 flex-1">
                    <h4 className="line-clamp-1 text-xs font-bold text-white">{item.product.name}</h4>
                    <span className="text-[10px] text-[#ff003c] font-semibold uppercase">{item.product.brand}</span>
                    <div className="mt-1 flex items-center justify-between">
                      <span className="text-sm font-black text-white">{formatPKR(item.product.price)}</span>

                      {/* Quantity Controls */}
                      <div className="flex items-center gap-2 rounded-lg border border-[#22222e] bg-[#0e0e12] px-2 py-1">
                        <button
                          onClick={() => updateQuantity(item.product.id, -1)}
                          className="text-[#a1a1aa] hover:text-white"
                        >
                          <Minus className="h-3 w-3" />
                        </button>
                        <span className="text-xs font-bold text-white min-w-3 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.product.id, 1)}
                          className="text-[#a1a1aa] hover:text-white"
                        >
                          <Plus className="h-3 w-3" />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Remove Button */}
                  <button
                    onClick={() => removeFromCart(item.product.id)}
                    className="ml-3 rounded-lg p-1.5 text-[#71717a] hover:bg-[#ff003c]/20 hover:text-[#ff003c]"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              ))
            )}
          </div>

          {/* Footer & Checkout */}
          {cart.length > 0 && (
            <div className="space-y-3 pt-4 border-t border-[#1f1f2b]">
              {/* Promo Input */}
              <div className="flex items-center gap-2">
                <div className="relative flex-1">
                  <Tag className="absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-[#71717a]" />
                  <input
                    type="text"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    placeholder='Promo code (try "QUANTUM10")'
                    className="w-full rounded-xl border border-[#22222e] bg-[#050505] py-2 pl-9 pr-3 text-xs text-white uppercase placeholder-[#71717a] outline-none focus:border-[#ff003c]"
                  />
                </div>
                <button
                  onClick={handleApplyPromo}
                  className="rounded-xl border border-[#ff003c]/40 bg-[#ff003c]/10 px-3 py-2 text-xs font-bold text-white hover:bg-[#ff003c]"
                >
                  Apply
                </button>
              </div>

              {/* Price Breakdown */}
              <div className="space-y-1.5 text-xs text-[#a1a1aa]">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-bold text-white">{formatPKR(cartTotal)}</span>
                </div>
                {promoApplied && (
                  <div className="flex justify-between text-[#22c55e]">
                    <span>Promo Discount (10%)</span>
                    <span>-{formatPKR(discountValue)}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Estimated Shipping</span>
                  <span className="font-bold text-white">
                    {cartTotal >= freeShippingThreshold ? 'FREE' : formatPKR(15)}
                  </span>
                </div>
                <div className="flex justify-between border-t border-[#1f1f2b] pt-2 text-sm font-extrabold text-white">
                  <span>Total Amount</span>
                  <span className="text-[#ff003c]">{formatPKR(finalTotal)}</span>
                </div>
              </div>

              {/* Actions */}
              <button
                onClick={openCheckout}
                className="red-gradient-btn flex w-full items-center justify-center gap-2 rounded-xl py-3.5 text-sm font-extrabold text-white shadow-xl shadow-[#ff003c]/25"
              >
                Proceed to Checkout
                <ArrowRight className="h-4 w-4" />
              </button>

              <button
                onClick={clearCart}
                className="w-full text-center text-[11px] text-[#71717a] hover:text-[#ff003c]"
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
