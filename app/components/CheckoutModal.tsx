'use client';

import React, { useState } from 'react';
import { useCart } from '@/app/context/CartContext';
import { formatPKR } from '@/sanity/lib/currency';
import { createOrder } from '@/app/checkout/actions';
import confetti from 'canvas-confetti';
import {
  X,
  Truck,
  CheckCircle2,
  Lock,
  Printer,
  Wallet
} from 'lucide-react';

export function CheckoutModal() {
  const { isCheckoutOpen, closeCheckout, cart, cartTotal, clearCart } = useCart();

  const [step, setStep] = useState<'shipping' | 'payment' | 'success'>('shipping');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    paymentMethod: 'cod',
  });
  const [orderId, setOrderId] = useState('');

  if (!isCheckoutOpen) return null;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleShippingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.phone || !formData.address) {
      alert('Please fill in all required shipping fields');
      return;
    }
    setStep('payment');
  };

  const handlePaymentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const generatedId = `QB-${Math.floor(100000 + Math.random() * 900000)}`;
    setOrderId(generatedId);
    clearCart();

    const result = await createOrder({
      orderId: generatedId,
      customerName: formData.fullName,
      customerEmail: formData.email,
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
      console.error('[CheckoutModal] Order not saved to Sanity:', result.error);
    }

    setStep('success');

    // Trigger confetti animation
    confetti({
      particleCount: 120,
      spread: 80,
      origin: { y: 0.6 },
      colors: ['#ff003c', '#ffffff', '#ff4d73'],
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      {/* Dark Overlay */}
      <div
        onClick={closeCheckout}
        className="fixed inset-0 bg-[#050505]/85 backdrop-blur-md transition-opacity"
      />

      {/* Modal Container */}
      <div className="relative z-10 w-full max-w-2xl max-h-[92vh] overflow-y-auto rounded-2xl border border-[#ff003c]/40 bg-[#0e0e12] p-6 shadow-2xl shadow-[#ff003c]/20 glass-panel-red">
        {/* Close Button */}
        <button
          onClick={closeCheckout}
          className="absolute right-4 top-4 rounded-full bg-[#16161f] p-2 text-[#a1a1aa] transition hover:bg-[#ff003c] hover:text-white"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Modal Header */}
        <div className="border-b border-[#1f1f2b] pb-4 mb-6">
          <div className="flex items-center gap-2">
            <Lock className="h-5 w-5 text-[#ff003c]" />
            <h2 className="text-xl font-black text-white">QuantumByte Checkout</h2>
          </div>

          {/* Stepper Progress */}
          <div className="mt-4 flex items-center justify-between">
            <div
              className={`flex items-center gap-2 text-xs font-bold ${
                step === 'shipping' ? 'text-[#ff003c]' : 'text-white'
              }`}
            >
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#ff003c] text-white">
                1
              </span>
              Shipping
            </div>
            <div className="h-0.5 flex-1 bg-[#22222e] mx-4" />
            <div
              className={`flex items-center gap-2 text-xs font-bold ${
                step === 'payment' ? 'text-[#ff003c]' : 'text-[#71717a]'
              }`}
            >
              <span
                className={`flex h-6 w-6 items-center justify-center rounded-full ${
                  step === 'payment' || step === 'success'
                    ? 'bg-[#ff003c] text-white'
                    : 'bg-[#16161f] text-[#71717a]'
                }`}
              >
                2
              </span>
              Payment
            </div>
            <div className="h-0.5 flex-1 bg-[#22222e] mx-4" />
            <div
              className={`flex items-center gap-2 text-xs font-bold ${
                step === 'success' ? 'text-[#ff003c]' : 'text-[#71717a]'
              }`}
            >
              <span
                className={`flex h-6 w-6 items-center justify-center rounded-full ${
                  step === 'success' ? 'bg-[#ff003c] text-white' : 'bg-[#16161f] text-[#71717a]'
                }`}
              >
                3
              </span>
              Confirmation
            </div>
          </div>
        </div>

        {/* STEP 1: SHIPPING */}
        {step === 'shipping' && (
          <form onSubmit={handleShippingSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-[#a1a1aa] mb-1">Full Name *</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required
                  placeholder="John Doe"
                  className="w-full rounded-xl border border-[#22222e] bg-[#050505] p-3 text-xs text-white placeholder-[#71717a] outline-none focus:border-[#ff003c]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#a1a1aa] mb-1">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="john@example.com"
                  className="w-full rounded-xl border border-[#22222e] bg-[#050505] p-3 text-xs text-white placeholder-[#71717a] outline-none focus:border-[#ff003c]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#a1a1aa] mb-1">Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  placeholder="+92 300 1234567"
                  className="w-full rounded-xl border border-[#22222e] bg-[#050505] p-3 text-xs text-white placeholder-[#71717a] outline-none focus:border-[#ff003c]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#a1a1aa] mb-1">City / Region *</label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  required
                  placeholder="Karachi, Lahore, Islamabad, London, NY..."
                  className="w-full rounded-xl border border-[#22222e] bg-[#050505] p-3 text-xs text-white placeholder-[#71717a] outline-none focus:border-[#ff003c]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-[#a1a1aa] mb-1">Complete Delivery Address *</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                required
                placeholder="House / Office #, Street, Block, Area"
                className="w-full rounded-xl border border-[#22222e] bg-[#050505] p-3 text-xs text-white placeholder-[#71717a] outline-none focus:border-[#ff003c]"
              />
            </div>

            {/* Order Summary Mini */}
            <div className="rounded-xl border border-[#22222e] bg-[#050505] p-4 text-xs space-y-2">
              <div className="flex justify-between font-bold text-white">
                <span>Total Items ({cart.length})</span>
                <span className="text-[#ff003c]">{formatPKR(cartTotal)}</span>
              </div>
            </div>

            <button
              type="submit"
              className="red-gradient-btn flex w-full items-center justify-center gap-2 rounded-xl py-3.5 text-xs font-extrabold text-white shadow-xl shadow-[#ff003c]/25"
            >
              Continue to Payment →
            </button>
          </form>
        )}

        {/* STEP 2: PAYMENT */}
        {step === 'payment' && (
          <form onSubmit={handlePaymentSubmit} className="space-y-4">
            <label className="block text-xs font-bold text-[#a1a1aa] mb-2">Select Payment Method</label>

            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setFormData({ ...formData, paymentMethod: 'cod' })}
                className={`flex flex-col items-center justify-center rounded-xl border p-4 text-xs font-bold transition ${
                  formData.paymentMethod === 'cod'
                    ? 'border-[#ff003c] bg-[#ff003c]/15 text-white'
                    : 'border-[#22222e] bg-[#050505] text-[#a1a1aa]'
                }`}
              >
                <Truck className="h-5 w-5 text-[#ff003c] mb-1" />
                Cash on Delivery
              </button>

              <div className="relative flex flex-col items-center justify-center rounded-xl border border-dashed border-[#22222e] bg-[#050505]/60 p-4 text-xs font-bold text-[#71717a] opacity-60 cursor-not-allowed select-none">
                <span className="absolute right-2 top-2 rounded bg-[#ff003c] px-1.5 py-0.5 text-[9px] font-extrabold text-white uppercase tracking-wider">
                  Coming Soon
                </span>
                <Wallet className="h-5 w-5 text-[#71717a] mb-1" />
                Easy Paisa
              </div>
            </div>

            {formData.paymentMethod === 'cod' && (
              <div className="rounded-xl border border-[#22222e] bg-[#050505] p-4 text-xs text-[#a1a1aa]">
                Pay with cash upon package delivery at your doorstep. A standard verification call will be conducted before dispatch.
              </div>
            )}

            <div className="flex gap-3 pt-2">
              <button
                type="button"
                onClick={() => setStep('shipping')}
                className="w-1/3 rounded-xl border border-[#22222e] bg-[#16161f] py-3 text-xs font-bold text-white hover:bg-[#22222e]"
              >
                ← Back
              </button>
              <button
                type="submit"
                className="red-gradient-btn flex-1 rounded-xl py-3.5 text-xs font-extrabold text-white shadow-xl shadow-[#ff003c]/25"
              >
                Confirm & Place Order ({formatPKR(cartTotal)})
              </button>
            </div>
          </form>
        )}

        {/* STEP 3: ORDER SUCCESS RECEIPT */}
        {step === 'success' && (
          <div className="text-center space-y-5 py-4">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#ff003c]/20 text-[#ff003c] animate-bounce">
              <CheckCircle2 className="h-10 w-10" />
            </div>

            <div>
              <h3 className="text-2xl font-black text-white">Order Confirmed!</h3>
              <p className="text-xs text-[#a1a1aa] mt-1">
                Thank you for choosing QuantumByte Technologies. Your order receipt has been generated.
              </p>
            </div>

            <div className="rounded-xl border border-[#ff003c]/40 bg-[#050505] p-4 text-left space-y-2 text-xs text-white">
              <div className="flex justify-between border-b border-[#1f1f2b] pb-2 font-bold">
                <span>Order Reference ID:</span>
                <span className="text-[#ff003c]">{orderId}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#a1a1aa]">Customer:</span>
                <span>{formData.fullName} ({formData.email})</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#a1a1aa]">Delivery Address:</span>
                <span>{formData.address}, {formData.city}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#a1a1aa]">Payment Method:</span>
                <span className="uppercase">Cash on Delivery</span>
              </div>
              <div className="flex justify-between pt-2 border-t border-[#1f1f2b] font-black text-sm">
                <span>Total Amount (COD):</span>
                <span className="text-[#ff003c]">{formatPKR(cartTotal)}</span>
              </div>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => window.print()}
                className="flex items-center justify-center gap-2 rounded-xl border border-[#22222e] bg-[#16161f] px-4 py-3 text-xs font-bold text-white hover:border-[#ff003c]"
              >
                <Printer className="h-4 w-4" />
                Print Receipt
              </button>
              <button
                onClick={closeCheckout}
                className="red-gradient-btn flex-1 rounded-xl py-3 text-xs font-extrabold text-white"
              >
                Back to Store
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
