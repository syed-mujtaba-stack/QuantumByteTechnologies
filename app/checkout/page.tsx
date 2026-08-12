'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Navbar } from '@/app/components/Navbar';
import { Footer } from '@/app/components/Footer';
import { useCart } from '@/app/context/CartContext';
import { useAuth } from '@/app/context/AuthContext';
import { formatPKR } from '@/sanity/lib/currency';
import { createOrder } from '@/app/checkout/actions';
import confetti from 'canvas-confetti';
import { Lock, Truck, ChevronRight, Wallet } from 'lucide-react';

export default function CheckoutPage() {
  const router = useRouter();
  const { cart, cartTotal, clearCart } = useCart();
  const { user } = useAuth();

  const [paymentMethod, setPaymentMethod] = useState<'cod'>('cod');
  const [formData, setFormData] = useState({
    fullName: user?.name || '',
    email: user?.email || '',
    phone: user?.phone || '',
    address: user?.address || '',
    city: user?.city || '',
    notes: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePlaceOrder = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.address) {
      alert('Please fill out all required fields');
      return;
    }

    const generatedId = `QB-${Math.floor(100000 + Math.random() * 900000)}`;

    const result = await createOrder({
      orderId: generatedId,
      customerName: formData.fullName,
      customerEmail: user?.email || formData.email,
      customerPhone: formData.phone,
      shippingAddress: formData.address,
      city: formData.city,
      paymentMethod: 'Cash on Delivery',
      totalAmount: cartTotal,
      items: cart.map((item) => ({
        productId: item.product.id,
        name: item.product.name,
        brand: item.product.brand,
        quantity: item.quantity,
        unitPrice: item.product.price,
      })),
    });

    if (!result.ok) {
      console.error('[Checkout] Order not saved to Sanity:', result.error);
    }

    confetti({
      particleCount: 120,
      spread: 80,
      origin: { y: 0.6 },
      colors: ['#ff003c', '#ffffff', '#ff4d73'],
    });

    clearCart();
    router.push(`/order-success?orderId=${generatedId}`);
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white flex flex-col font-sans selection:bg-[#ff003c] selection:text-white">
      <Navbar />

      <main className="flex-1 py-10 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs */}
          <div className="mb-6 flex items-center gap-2 text-xs text-[#a1a1aa]">
            <Link href="/" className="hover:text-white">Home</Link>
            <ChevronRight className="h-3 w-3 text-[#ff003c]" />
            <Link href="/cart" className="hover:text-white">Cart</Link>
            <ChevronRight className="h-3 w-3 text-[#ff003c]" />
            <span className="text-white font-bold">Secure Checkout</span>
          </div>

          <h1 className="text-3xl font-black text-white sm:text-4xl mb-8 flex items-center gap-3">
            <Lock className="h-7 w-7 text-[#ff003c]" />
            SECURE <span className="text-[#ff003c]">CHECKOUT</span>
          </h1>

          <form onSubmit={handlePlaceOrder} className="grid gap-8 lg:grid-cols-12">
            {/* Shipping Form & Payment Selection */}
            <div className="lg:col-span-8 space-y-6">
              {/* Step 1: Shipping Address */}
              <div className="rounded-2xl border border-[#22222e] bg-[#0e0e12] p-6 space-y-4 glass-panel">
                <h3 className="text-lg font-black text-white border-b border-[#1f1f2b] pb-3 flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#ff003c] text-xs font-bold">1</span>
                  Delivery Information
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#a1a1aa] mb-1">Full Name *</label>
                    <input
                      type="text"
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="Alex Morgan"
                      className="w-full rounded-xl border border-[#22222e] bg-[#050505] p-3 text-xs text-white placeholder-[#71717a] outline-none focus:border-[#ff003c]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#a1a1aa] mb-1">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="alex@example.com"
                      className="w-full rounded-xl border border-[#22222e] bg-[#050505] p-3 text-xs text-white placeholder-[#71717a] outline-none focus:border-[#ff003c]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#a1a1aa] mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+92 300 1234567"
                      className="w-full rounded-xl border border-[#22222e] bg-[#050505] p-3 text-xs text-white placeholder-[#71717a] outline-none focus:border-[#ff003c]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#a1a1aa] mb-1">City / Region *</label>
                    <input
                      type="text"
                      name="city"
                      required
                      value={formData.city}
                      onChange={handleInputChange}
                      placeholder="Karachi, Lahore, Islamabad, London, NY..."
                      className="w-full rounded-xl border border-[#22222e] bg-[#050505] p-3 text-xs text-white placeholder-[#71717a] outline-none focus:border-[#ff003c]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#a1a1aa] mb-1">Complete Address *</label>
                  <input
                    type="text"
                    name="address"
                    required
                    value={formData.address}
                    onChange={handleInputChange}
                    placeholder="House/Office #, Street, Block, Area"
                    className="w-full rounded-xl border border-[#22222e] bg-[#050505] p-3 text-xs text-white placeholder-[#71717a] outline-none focus:border-[#ff003c]"
                  />
                </div>
              </div>

              {/* Step 2: Payment Options */}
              <div className="rounded-2xl border border-[#22222e] bg-[#0e0e12] p-6 space-y-4 glass-panel">
                <h3 className="text-lg font-black text-white border-b border-[#1f1f2b] pb-3 flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#ff003c] text-xs font-bold">2</span>
                  Select Payment Method
                </h3>

                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('cod')}
                    className={`flex flex-col items-center justify-center rounded-xl border p-4 text-xs font-bold transition ${
                      paymentMethod === 'cod'
                        ? 'border-[#ff003c] bg-[#ff003c]/15 text-white'
                        : 'border-[#22222e] bg-[#050505] text-[#a1a1aa]'
                    }`}
                  >
                    <Truck className="h-6 w-6 text-[#ff003c] mb-1.5" />
                    Cash on Delivery
                  </button>

                  <div className="relative flex flex-col items-center justify-center rounded-xl border border-dashed border-[#22222e] bg-[#050505]/60 p-4 text-xs font-bold text-[#71717a] opacity-60 cursor-not-allowed select-none">
                    <span className="absolute right-2 top-2 rounded bg-[#ff003c] px-1.5 py-0.5 text-[9px] font-extrabold text-white uppercase tracking-wider">
                      Coming Soon
                    </span>
                    <Wallet className="h-6 w-6 text-[#71717a] mb-1.5" />
                    Easy Paisa
                  </div>
                </div>

                {paymentMethod === 'cod' && (
                  <div className="rounded-xl border border-[#22222e] bg-[#050505] p-4 text-xs text-[#a1a1aa]">
                    Pay with cash upon package delivery at your doorstep. A standard verification call will be conducted before dispatch.
                  </div>
                )}
              </div>
            </div>

            {/* Sidebar Summary */}
            <div className="lg:col-span-4 space-y-6">
              <div className="rounded-2xl border border-[#ff003c]/40 bg-[#0e0e12] p-6 space-y-4 glass-panel-red">
                <h3 className="text-lg font-black text-white border-b border-[#1f1f2b] pb-3">Order Overview</h3>

                <div className="space-y-3 max-h-60 overflow-y-auto pr-1">
                  {cart.map((item) => (
                    <div key={item.product.id} className="flex items-center justify-between text-xs">
                      <div>
                        <h5 className="font-bold text-white line-clamp-1">{item.product.name}</h5>
                        <span className="text-[10px] text-[#a1a1aa]">Qty: {item.quantity}</span>
                      </div>
                      <span className="font-extrabold text-white">{formatPKR(item.product.price * item.quantity)}</span>
                    </div>
                  ))}
                </div>

                <div className="space-y-2 border-t border-[#1f1f2b] pt-3 text-xs text-[#a1a1aa]">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span className="font-bold text-white">{formatPKR(cartTotal)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Express Shipping</span>
                    <span className="text-[#22c55e] font-bold">FREE</span>
                  </div>
                  <div className="flex justify-between border-t border-[#1f1f2b] pt-3 text-lg font-black text-white">
                    <span>Total Amount (COD)</span>
                    <span className="text-[#ff003c]">{formatPKR(cartTotal)}</span>
                  </div>
                </div>

                <button
                  type="submit"
                  className="red-gradient-btn flex w-full items-center justify-center gap-2 rounded-xl py-3.5 text-xs font-extrabold text-white shadow-xl shadow-[#ff003c]/25"
                >
                  Place Order Now ({formatPKR(cartTotal)})
                </button>
              </div>
            </div>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
}
