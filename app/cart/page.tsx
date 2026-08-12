'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Navbar } from '@/app/components/Navbar';
import { Footer } from '@/app/components/Footer';
import { useCart } from '@/app/context/CartContext';
import { formatPKR } from '@/sanity/lib/currency';
import { ShoppingBag, Trash2, Plus, Minus, ArrowRight, Tag, ShieldCheck, ChevronRight } from 'lucide-react';

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, cartTotal, clearCart, openCheckout } = useCart();
  const [promoCode, setPromoCode] = useState('');
  const [discountPercent, setDiscountPercent] = useState(0);
  const [promoApplied, setPromoApplied] = useState(false);

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

  return (
    <div className="min-h-screen bg-[#050505] text-white flex flex-col font-sans selection:bg-[#ff003c] selection:text-white">
      <Navbar />

      <main className="flex-1 py-10 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="mb-6 flex items-center gap-2 text-xs text-[#a1a1aa]">
            <Link href="/" className="hover:text-white">Home</Link>
            <ChevronRight className="h-3 w-3 text-[#ff003c]" />
            <span className="text-white font-bold">Shopping Cart</span>
          </div>

          <h1 className="text-3xl font-black text-white sm:text-4xl mb-8">
            YOUR SHOPPING <span className="text-[#ff003c]">CART</span>
          </h1>

          {cart.length > 0 ? (
            <div className="grid gap-8 lg:grid-cols-12">
              {/* Item Table Column */}
              <div className="lg:col-span-8 space-y-4">
                <div className="rounded-2xl border border-[#22222e] bg-[#0e0e12] p-6 space-y-4 glass-panel">
                  {cart.map((item) => (
                    <div
                      key={item.product.id}
                      className="flex flex-col sm:flex-row items-center justify-between gap-4 rounded-xl border border-[#22222e] bg-[#050505] p-4 transition hover:border-[#ff003c]/40"
                    >
                      <div className="flex items-center gap-4 w-full sm:w-auto">
                        <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-xl bg-[#16161f]">
                          <Image
                            src={item.product.imageUrl}
                            alt={item.product.name}
                            fill
                            sizes="80px"
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <span className="text-[10px] font-extrabold text-[#ff003c] uppercase">{item.product.brand}</span>
                          <h3 className="text-sm font-bold text-white line-clamp-1">{item.product.name}</h3>
                          <span className="text-xs text-[#a1a1aa]">{formatPKR(item.product.price)} each</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between sm:justify-end gap-6 w-full sm:w-auto border-t sm:border-t-0 border-[#1f1f2b] pt-3 sm:pt-0">
                        {/* Quantity Controls */}
                        <div className="flex items-center gap-3 rounded-xl border border-[#22222e] bg-[#0e0e12] px-3 py-1.5">
                          <button
                            onClick={() => updateQuantity(item.product.id, -1)}
                            className="text-[#a1a1aa] hover:text-white"
                          >
                            <Minus className="h-3.5 w-3.5" />
                          </button>
                          <span className="text-xs font-bold text-white min-w-4 text-center">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.product.id, 1)}
                            className="text-[#a1a1aa] hover:text-white"
                          >
                            <Plus className="h-3.5 w-3.5" />
                          </button>
                        </div>

                        <span className="text-base font-black text-white">
                          {formatPKR(item.product.price * item.quantity)}
                        </span>

                        <button
                          onClick={() => removeFromCart(item.product.id)}
                          className="rounded-lg p-2 text-[#71717a] hover:bg-[#ff003c]/20 hover:text-[#ff003c]"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  ))}

                  <div className="flex justify-between pt-2 text-xs">
                    <button onClick={clearCart} className="text-[#71717a] hover:text-[#ff003c]">
                      Clear Cart
                    </button>
                    <Link href="/shop" className="text-[#ff003c] font-bold hover:underline">
                      ← Continue Shopping
                    </Link>
                  </div>
                </div>
              </div>

              {/* Summary Sidebar Column */}
              <div className="lg:col-span-4 space-y-6">
                <div className="rounded-2xl border border-[#ff003c]/30 bg-[#0e0e12] p-6 space-y-4 glass-panel-red">
                  <h3 className="text-lg font-black text-white border-b border-[#1f1f2b] pb-3">Order Summary</h3>

                  {/* Promo Input */}
                  <div className="flex items-center gap-2">
                    <div className="relative flex-1">
                      <Tag className="absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-[#71717a]" />
                      <input
                        type="text"
                        value={promoCode}
                        onChange={(e) => setPromoCode(e.target.value)}
                        placeholder='Promo Code ("QUANTUM10")'
                        className="w-full rounded-xl border border-[#22222e] bg-[#050505] py-2 pl-9 pr-3 text-xs text-white uppercase outline-none focus:border-[#ff003c]"
                      />
                    </div>
                    <button
                      onClick={handleApplyPromo}
                      className="rounded-xl border border-[#ff003c]/40 bg-[#ff003c]/10 px-3 py-2 text-xs font-bold text-white hover:bg-[#ff003c]"
                    >
                      Apply
                    </button>
                  </div>

                  <div className="space-y-2 text-xs text-[#a1a1aa] pt-2">
                    <div className="flex justify-between">
                      <span>Subtotal</span>
                      <span className="font-bold text-white">{formatPKR(cartTotal)}</span>
                    </div>
                    {promoApplied && (
                      <div className="flex justify-between text-[#22c55e]">
                        <span>Discount (10%)</span>
                        <span>-{formatPKR(discountValue)}</span>
                      </div>
                    )}
                    <div className="flex justify-between">
                      <span>Express Shipping</span>
                      <span className="text-[#22c55e] font-bold">FREE</span>
                    </div>
                    <div className="flex justify-between border-t border-[#1f1f2b] pt-3 text-base font-extrabold text-white">
                      <span>Total Amount</span>
                      <span className="text-[#ff003c]">{formatPKR(finalTotal)}</span>
                    </div>
                  </div>

                  <button
                    onClick={openCheckout}
                    className="red-gradient-btn flex w-full items-center justify-center gap-2 rounded-xl py-3.5 text-xs font-extrabold text-white shadow-xl shadow-[#ff003c]/25"
                  >
                    Proceed to Checkout
                    <ArrowRight className="h-4 w-4" />
                  </button>

                  <div className="flex items-center gap-2 justify-center text-[11px] text-[#a1a1aa] pt-2">
                    <ShieldCheck className="h-4 w-4 text-[#ff003c]" />
                    <span>256-Bit Encrypted Secure Checkout</span>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center py-20 rounded-2xl border border-dashed border-[#22222e] bg-[#0e0e12] space-y-4">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#16161f] text-[#ff003c]">
                <ShoppingBag className="h-8 w-8" />
              </div>
              <h2 className="text-xl font-bold text-white">Your Cart is Currently Empty</h2>
              <p className="text-xs text-[#a1a1aa] max-w-sm mx-auto">
                Explore our custom PCs, laptops, flagships, and component parts to start building your order.
              </p>
              <Link href="/shop" className="inline-block red-gradient-btn rounded-xl px-6 py-3 text-xs font-extrabold text-white shadow-lg shadow-[#ff003c]/30">
                Explore Shop Catalog
              </Link>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
