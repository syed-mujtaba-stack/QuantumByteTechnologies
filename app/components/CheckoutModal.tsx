'use client';

import React, { useState, useEffect } from 'react';
import { useCart } from '@/app/context/CartContext';
import { useAuth } from '@/app/context/AuthContext';
import { formatPKR } from '@/sanity/lib/currency';
import { createOrder } from '@/app/checkout/actions';
import confetti from 'canvas-confetti';
import {
  X,
  Truck,
  CheckCircle2,
  Lock,
  Printer,
  Wallet,
  ShieldCheck,
  CreditCard,
  ArrowLeft,
  ArrowRight,
  Sparkles
} from 'lucide-react';

export function CheckoutModal() {
  const { isCheckoutOpen, closeCheckout, cart, cartTotal, clearCart } = useCart();
  const { user } = useAuth();

  const [step, setStep] = useState<'shipping' | 'payment' | 'success'>('shipping');
  const [formData, setFormData] = useState({
    fullName: user?.name || '',
    email: user?.email || '',
    phone: user?.phone || '',
    address: user?.address || '',
    city: user?.city || '',
    paymentMethod: 'cod',
  });
  const [orderId, setOrderId] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && step !== 'success') closeCheckout();
    };
    if (!isCheckoutOpen) return;
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isCheckoutOpen, step, closeCheckout]);

  if (!isCheckoutOpen) return null;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleShippingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.phone || !formData.address || !formData.city) {
      alert('Please fill in all required shipping fields');
      return;
    }
    setStep('payment');
  };

  const handlePaymentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const generatedId = `QB-${Math.floor(100000 + Math.random() * 900000)}`;
    setOrderId(generatedId);

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

    setIsSubmitting(false);

    if (!result.ok) {
      console.error('[CheckoutModal] Order not saved to Sanity:', result.error);
    }

    clearCart();
    setStep('success');

    confetti({
      particleCount: 150,
      spread: 90,
      origin: { y: 0.5 },
      colors: ['#3B82F6', '#ffffff', '#06B6D4', '#8B5CF6'],
      zIndex: 100,
    });
  };

  const steps = [
    { key: 'shipping', label: 'Shipping', icon: Truck },
    { key: 'payment', label: 'Payment', icon: CreditCard },
    { key: 'success', label: 'Confirm', icon: CheckCircle2 },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 animate-fade-in">
      <div
        onClick={() => step !== 'success' && closeCheckout()}
        className="fixed inset-0 bg-[#05070D]/90 backdrop-blur-sm transition-opacity"
        aria-hidden="true"
      />

      <div
        data-lenis-prevent
        className="relative z-10 w-full max-w-2xl max-h-[92vh] overflow-y-auto rounded-2xl border border-white/[0.08] bg-[#0B0F18] shadow-2xl shadow-black/50 animate-scale-in"
      >
        <button
          onClick={() => step !== 'success' && closeCheckout()}
          className="absolute right-4 top-4 z-10 btn btn-icon btn-ghost text-[#64748B] hover:text-white hover:bg-white/[0.05]"
          aria-label="Close checkout"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="p-6 sm:p-8">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#3B82F6]/[0.12] text-[#3B82F6]">
                  <Lock className="h-5.5 w-5.5" />
                </div>
                <div>
                  <h2 className="text-xl font-black text-white">Secure Checkout</h2>
                  <p className="text-sm text-[#64748B]">{cart.length} item{cart.length !== 1 ? 's' : ''} • {formatPKR(cartTotal)}</p>
                </div>
              </div>
            </div>

            {/* Stepper */}
            <div className="flex items-center">
              {steps.map((s, index) => {
                const isActive = step === s.key;
                const isCompleted = (step === 'payment' && s.key === 'shipping') || (step === 'success' && s.key !== 'success');
                const Icon = s.icon;
                return (
                  <React.Fragment key={s.key}>
                    <div className="flex items-center gap-2">
                      <span
                        className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold transition-all duration-300 ${
                          isActive || isCompleted
                            ? 'bg-[#3B82F6] text-white shadow-lg shadow-[#3B82F6]/25'
                            : 'bg-white/[0.05] text-[#64748B]'
                        }`}
                      >
                        {isCompleted ? <CheckCircle2 className="h-4.5 w-4.5" /> : <Icon className="h-4.5 w-4.5" />}
                      </span>
                      <span className={`hidden sm:block text-xs font-semibold ${isActive || isCompleted ? 'text-white' : 'text-[#64748B]'}`}>
                        {s.label}
                      </span>
                    </div>
                    {index < steps.length - 1 && (
                      <div className={`flex-1 h-1 max-w-xs mx-2 rounded-full transition-colors duration-300 ${isCompleted ? 'bg-[#3B82F6]' : 'bg-white/[0.06]'}`} />
                    )}
                  </React.Fragment>
                );
              })}
            </div>
          </div>

          {/* STEP 1: SHIPPING */}
          {step === 'shipping' && (
            <form onSubmit={handleShippingSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="fullName" className="label">Full Name *</label>
                  <input
                    id="fullName"
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required
                    placeholder="John Doe"
                    className="input"
                    autoComplete="name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="label">Email Address *</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="john@example.com"
                    className="input"
                    autoComplete="email"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="label">Phone Number *</label>
                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    placeholder="+92 300 1234567"
                    className="input"
                    autoComplete="tel"
                  />
                </div>

                <div>
                  <label htmlFor="city" className="label">City / Region *</label>
                  <input
                    id="city"
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    required
                    placeholder="Karachi, Lahore, Islamabad..."
                    className="input"
                    autoComplete="address-level2"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="address" className="label">Complete Delivery Address *</label>
                <input
                  id="address"
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  required
                  placeholder="House / Office #, Street, Block, Area"
                  className="input"
                  autoComplete="street-address"
                />
              </div>

              {/* Order Summary */}
              <div className="rounded-xl border border-white/[0.06] bg-[#05070D] p-4 space-y-3">
                <h4 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
                  <ShieldCheck className="h-4.5 w-4.5 text-[#3B82F6]" />
                  Order Summary
                </h4>
                <div className="space-y-2 max-h-48 overflow-y-auto pr-1">
                  {cart.map((item) => (
                    <div key={item.product.id} className="flex items-center justify-between gap-3 text-sm">
                      <div className="flex items-center gap-3 min-w-0">
                        <div className="h-10 w-10 flex-shrink-0 overflow-hidden rounded-lg bg-white/[0.04]">
                          <img src={item.product.imageUrl} alt={item.product.name} className="h-full w-full object-cover" loading="lazy" />
                        </div>
                        <div className="min-w-0">
                          <p className="font-semibold text-white truncate">{item.product.name}</p>
                          <p className="text-[11px] text-[#64748B]">{item.product.brand} • Qty: {item.quantity}</p>
                        </div>
                      </div>
                      <span className="font-bold text-white whitespace-nowrap">{formatPKR(item.product.price * item.quantity)}</span>
                    </div>
                  ))}
                </div>
                <div className="flex justify-between border-t border-white/[0.06] pt-3 font-bold text-white">
                  <span>Subtotal ({cart.length} items)</span>
                  <span className="text-[#3B82F6]">{formatPKR(cartTotal)}</span>
                </div>
                <div className="flex items-center justify-between text-sm text-[#10B981] font-semibold p-3 rounded-lg bg-[#10B981]/[0.08] border border-[#10B981]/25">
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck className="h-4 w-4" />
                    Free Express Shipping
                  </span>
                  <span>FREE</span>
                </div>
              </div>

              <button
                type="submit"
                className="btn btn-primary btn-lg w-full justify-center gap-2"
              >
                Continue to Payment
                <ArrowRight className="h-5 w-5" />
              </button>
            </form>
          )}

          {/* STEP 2: PAYMENT */}
          {step === 'payment' && (
            <form onSubmit={handlePaymentSubmit} className="space-y-6">
              <div className="flex items-center justify-between">
                <label className="label mb-0">Select Payment Method</label>
                <button
                  type="button"
                  onClick={() => setStep('shipping')}
                  className="btn btn-ghost btn-sm text-[#64748B] hover:text-white"
                >
                  <ArrowLeft className="h-4 w-4 mr-1" />
                  Back
                </button>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, paymentMethod: 'cod' })}
                  className={`relative flex flex-col items-center justify-center gap-3 rounded-xl border p-5 text-sm font-bold transition-all duration-300 ${
                    formData.paymentMethod === 'cod'
                      ? 'border-[#3B82F6] bg-[#3B82F6]/[0.08] text-white shadow-lg shadow-[#3B82F6]/10'
                      : 'border-white/[0.06] bg-[#05070D] text-[#94A3B8] hover:border-[#3B82F6]/30 hover:text-white hover:bg-white/[0.03]'
                  }`}
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#3B82F6]/[0.12] text-[#3B82F6]">
                    <Truck className="h-6 w-6" />
                  </div>
                  <div className="text-center">
                    <p>Cash on Delivery</p>
                    <span className="text-xs text-[#64748B]">Pay at doorstep</span>
                  </div>
                  {formData.paymentMethod === 'cod' && (
                    <div className="absolute inset-0 border-2 border-[#3B82F6] rounded-xl pointer-events-none" />
                  )}
                </button>

                <div className="relative flex flex-col items-center justify-center gap-3 rounded-xl border-2 border-dashed border-white/[0.06] bg-[#05070D]/50 p-5 text-sm font-bold text-[#64748B] opacity-60 cursor-not-allowed select-none">
                  <span className="absolute right-2 top-2 rounded bg-[#3B82F6] px-2 py-0.5 text-[10px] font-extrabold text-white uppercase tracking-wider">
                    Coming Soon
                  </span>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/[0.04] text-[#64748B]">
                    <Wallet className="h-6 w-6" />
                  </div>
                  <div className="text-center">
                    <p>Easy Paisa</p>
                    <span className="text-xs text-[#64748B]">Mobile wallet</span>
                  </div>
                </div>
              </div>

              {formData.paymentMethod === 'cod' && (
                <div className="rounded-xl border border-[#3B82F6]/25 bg-[#3B82F6]/[0.05] p-4 animate-fade-in">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 flex h-9 w-9 items-center justify-center rounded-lg bg-[#3B82F6]/[0.12] text-[#3B82F6]">
                      <ShieldCheck className="h-4.5 w-4.5" />
                    </div>
                    <div className="text-sm text-[#94A3B8]">
                      <p className="font-semibold text-white mb-1">How it works</p>
                      <p>Pay with cash upon package delivery at your doorstep. A standard verification call will be conducted before dispatch. Available nationwide across Pakistan.</p>
                    </div>
                  </div>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn btn-primary btn-lg w-full justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                    Processing...
                  </>
                ) : (
                  <>
                    Confirm & Place Order
                    <span className="text-white/80 font-black">{formatPKR(cartTotal)}</span>
                    <ArrowRight className="h-5 w-5" />
                  </>
                )}
              </button>
            </form>
          )}

          {/* STEP 3: ORDER SUCCESS */}
          {step === 'success' && (
            <div className="text-center space-y-6 py-4 animate-fade-in">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#10B981]/[0.12] text-[#10B981] animate-bounce">
                <CheckCircle2 className="h-12 w-12" />
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-black text-white">Order Confirmed!</h3>
                <p className="text-base text-[#94A3B8] mt-2 max-w-sm mx-auto">
                  Thank you for choosing QuantumByte Technologies. Your order has been placed successfully and a confirmation has been sent to your email.
                </p>
              </div>

              <div className="rounded-xl border border-[#3B82F6]/25 bg-[#05070D] p-5 text-left space-y-3 text-sm">
                <div className="flex items-center justify-between border-b border-white/[0.06] pb-3 font-bold text-white">
                  <span className="flex items-center gap-2">
                    <ShieldCheck className="h-5 w-5 text-[#3B82F6]" />
                    Order Reference ID
                  </span>
                  <span className="text-[#3B82F6] font-mono">{orderId}</span>
                </div>
                <div className="grid grid-cols-2 gap-3 text-[#94A3B8]">
                  <div>
                    <p className="text-xs font-semibold text-white uppercase tracking-wider">Customer</p>
                    <p>{formData.fullName}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-white uppercase tracking-wider">Email</p>
                    <p>{formData.email}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-white uppercase tracking-wider">Phone</p>
                    <p>{formData.phone}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-white uppercase tracking-wider">City</p>
                    <p>{formData.city}</p>
                  </div>
                  <div className="col-span-2">
                    <p className="text-xs font-semibold text-white uppercase tracking-wider">Delivery Address</p>
                    <p>{formData.address}, {formData.city}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-white uppercase tracking-wider">Payment</p>
                    <p className="uppercase text-[#3B82F6] font-semibold">Cash on Delivery</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-white uppercase tracking-wider">Total Paid</p>
                    <p className="text-[#3B82F6] font-black text-lg">{formatPKR(cartTotal)}</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => window.print()}
                  className="btn btn-secondary w-full sm:w-auto justify-center gap-2"
                >
                  <Printer className="h-4.5 w-4.5" />
                  Print Receipt
                </button>
                <button
                  onClick={closeCheckout}
                  className="btn btn-primary btn-lg w-full sm:w-auto justify-center gap-2"
                >
                  Back to Store
                  <Sparkles className="h-4.5 w-4.5" />
                </button>
              </div>

              <p className="text-xs text-[#64748B]">
                A verification call will be made within 24 hours. For inquiries, contact us at
                <a href="tel:+923254803957" className="text-[#3B82F6] hover:underline ml-1">+92 325 4803957</a>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
