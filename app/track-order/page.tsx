'use client';

import React, { useState, useTransition } from 'react';
import Link from 'next/link';
import { Navbar } from '@/app/components/Navbar';
import { Footer } from '@/app/components/Footer';
import { CartDrawer } from '@/app/components/CartDrawer';
import { trackOrder, type TrackedOrder } from './actions';
import { formatPKR } from '@/sanity/lib/currency';
import {
  Package,
  Search,
  ChevronRight,
  CheckCircle2,
  Clock,
  Truck,
  AlertTriangle,
  MapPin,
  Phone,
  Mail,
  CreditCard,
  Calendar,
  Hash,
  ShoppingBag,
  Loader2,
  ArrowRight,
  Info,
  RotateCcw,
} from 'lucide-react';

const STATUS_CONFIG: Record<
  string,
  { label: string; color: string; bg: string; border: string; icon: React.ElementType; step: number }
> = {
  Pending: {
    label: 'Order Placed',
    color: 'text-[#f59e0b]',
    bg: 'bg-[#f59e0b]/10',
    border: 'border-[#f59e0b]/30',
    icon: Clock,
    step: 1,
  },
  Confirmed: {
    label: 'Confirmed',
    color: 'text-[#3B82F6]',
    bg: 'bg-[#3B82F6]/10',
    border: 'border-[#3B82F6]/30',
    icon: CheckCircle2,
    step: 2,
  },
  Processing: {
    label: 'Processing',
    color: 'text-[#8b5cf6]',
    bg: 'bg-[#8b5cf6]/10',
    border: 'border-[#8b5cf6]/30',
    icon: Package,
    step: 2,
  },
  Shipped: {
    label: 'Shipped',
    color: 'text-[#06b6d4]',
    bg: 'bg-[#06b6d4]/10',
    border: 'border-[#06b6d4]/30',
    icon: Truck,
    step: 3,
  },
  Delivered: {
    label: 'Delivered',
    color: 'text-[#10b981]',
    bg: 'bg-[#10b981]/10',
    border: 'border-[#10b981]/30',
    icon: CheckCircle2,
    step: 4,
  },
  Cancelled: {
    label: 'Cancelled',
    color: 'text-[#ef4444]',
    bg: 'bg-[#ef4444]/10',
    border: 'border-[#ef4444]/30',
    icon: AlertTriangle,
    step: 0,
  },
};

const TIMELINE_STEPS = [
  { label: 'Order Placed', icon: ShoppingBag },
  { label: 'Confirmed', icon: CheckCircle2 },
  { label: 'Shipped', icon: Truck },
  { label: 'Delivered', icon: MapPin },
];

function OrderResult({ order }: { order: TrackedOrder }) {
  const cfg = STATUS_CONFIG[order.status] ?? STATUS_CONFIG['Pending'];
  const StatusIcon = cfg.icon;

  const formattedDate = new Date(order.createdAt).toLocaleDateString('en-PK', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Status Banner */}
      <div className={`rounded-2xl border ${cfg.border} ${cfg.bg} p-5 flex items-center gap-4`}>
        <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${cfg.bg} ${cfg.border} border`}>
          <StatusIcon className={`h-6 w-6 ${cfg.color}`} />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-xs font-extrabold uppercase tracking-widest text-[#64748b]">Order Status</p>
          <p className={`text-xl font-black ${cfg.color}`}>{cfg.label}</p>
        </div>
        <span className="hidden sm:block font-mono text-sm font-bold text-[#64748b]">{order.orderId}</span>
      </div>

      {/* Progress Timeline — hidden for Cancelled */}
      {order.status !== 'Cancelled' && (
        <div className="rounded-2xl border border-white/[0.06] bg-[#080B12] p-5">
          <p className="text-xs font-extrabold uppercase tracking-widest text-[#64748b] mb-5">Delivery Progress</p>
          <div className="flex items-start justify-between gap-2">
            {TIMELINE_STEPS.map((step, idx) => {
              const stepNum = idx + 1;
              const isCompleted = cfg.step >= stepNum;
              const isActive = cfg.step === stepNum;
              const Icon = step.icon;
              return (
                <React.Fragment key={step.label}>
                  <div className="flex flex-col items-center gap-2 text-center min-w-0 flex-1">
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-full border-2 transition-all duration-300 ${
                        isCompleted
                          ? 'border-[#3B82F6] bg-[#3B82F6] text-white'
                          : isActive
                          ? 'border-[#3B82F6] bg-[#3B82F6]/10 text-[#3B82F6]'
                          : 'border-white/[0.1] bg-white/[0.03] text-[#475569]'
                      }`}
                    >
                      <Icon className="h-4 w-4" />
                    </div>
                    <span
                      className={`text-[11px] font-bold leading-tight ${
                        isCompleted || isActive ? 'text-white' : 'text-[#475569]'
                      }`}
                    >
                      {step.label}
                    </span>
                  </div>
                  {idx < TIMELINE_STEPS.length - 1 && (
                    <div
                      className={`flex-1 h-0.5 mt-5 rounded-full transition-colors duration-300 ${
                        cfg.step > idx + 1 ? 'bg-[#3B82F6]' : 'bg-white/[0.06]'
                      }`}
                    />
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>
      )}

      {/* Order Details Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Shipping Info */}
        <div className="rounded-2xl border border-white/[0.06] bg-[#080B12] p-5 space-y-3">
          <p className="text-xs font-extrabold uppercase tracking-widest text-[#64748b]">Shipping Details</p>
          <div className="space-y-2 text-sm">
            <div className="flex items-start gap-2.5 text-[#94a3b8]">
              <Hash className="h-4 w-4 shrink-0 mt-0.5 text-[#3B82F6]" />
              <span><span className="font-semibold text-white">Order ID:</span> {order.orderId}</span>
            </div>
            <div className="flex items-start gap-2.5 text-[#94a3b8]">
              <Calendar className="h-4 w-4 shrink-0 mt-0.5 text-[#3B82F6]" />
              <span><span className="font-semibold text-white">Placed:</span> {formattedDate}</span>
            </div>
            <div className="flex items-start gap-2.5 text-[#94a3b8]">
              <MapPin className="h-4 w-4 shrink-0 mt-0.5 text-[#3B82F6]" />
              <span><span className="font-semibold text-white">Deliver to:</span> {order.shippingAddress}, {order.city}</span>
            </div>
            <div className="flex items-start gap-2.5 text-[#94a3b8]">
              <Phone className="h-4 w-4 shrink-0 mt-0.5 text-[#3B82F6]" />
              <span><span className="font-semibold text-white">Phone:</span> {order.customerPhone}</span>
            </div>
          </div>
        </div>

        {/* Payment Info */}
        <div className="rounded-2xl border border-white/[0.06] bg-[#080B12] p-5 space-y-3">
          <p className="text-xs font-extrabold uppercase tracking-widest text-[#64748b]">Payment Summary</p>
          <div className="space-y-2 text-sm">
            <div className="flex items-start gap-2.5 text-[#94a3b8]">
              <CreditCard className="h-4 w-4 shrink-0 mt-0.5 text-[#3B82F6]" />
              <span><span className="font-semibold text-white">Method:</span> {order.paymentMethod}</span>
            </div>
            <div className="flex items-start gap-2.5 text-[#94a3b8]">
              <Mail className="h-4 w-4 shrink-0 mt-0.5 text-[#3B82F6]" />
              <span><span className="font-semibold text-white">Email:</span> {order.customerEmail}</span>
            </div>
            <div className="flex items-center justify-between mt-3 pt-3 border-t border-white/[0.06]">
              <span className="text-xs font-bold uppercase tracking-wider text-[#64748b]">
                Total ({order.items.length} item{order.items.length !== 1 ? 's' : ''})
              </span>
              <span className="text-lg font-black text-[#3B82F6]">{formatPKR(order.totalAmount)}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Items List */}
      <div className="rounded-2xl border border-white/[0.06] bg-[#080B12] p-5 space-y-4">
        <p className="text-xs font-extrabold uppercase tracking-widest text-[#64748b]">Items in This Order</p>
        <div className="space-y-3">
          {order.items.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center justify-between gap-4 py-3 border-b border-white/[0.04] last:border-0"
            >
              <div className="flex items-center gap-3 min-w-0">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#3B82F6]/10 text-[#3B82F6]">
                  <Package className="h-4 w-4" />
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-white truncate">{item.name}</p>
                  <p className="text-xs text-[#64748b]">{item.brand} · Qty: {item.quantity}</p>
                </div>
              </div>
              <span className="text-sm font-bold text-white whitespace-nowrap">{formatPKR(item.lineTotal)}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Need Help */}
      <div className="rounded-2xl border border-[#3B82F6]/20 bg-[#3B82F6]/5 p-5 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <Info className="h-5 w-5 shrink-0 text-[#3B82F6]" />
        <p className="text-sm text-[#94a3b8] flex-1">
          Need help with this order? Contact our support team on{' '}
          <a href="https://wa.me/923254803957" className="text-[#3B82F6] hover:underline font-semibold" target="_blank" rel="noopener noreferrer">
            WhatsApp
          </a>{' '}
          or email{' '}
          <a href="mailto:support@quantumbyte.tech" className="text-[#3B82F6] hover:underline font-semibold">
            support@quantumbyte.tech
          </a>
        </p>
      </div>
    </div>
  );
}

export default function TrackOrderPage() {
  const [orderId, setOrderId] = useState('');
  const [email, setEmail] = useState('');
  const [order, setOrder] = useState<TrackedOrder | null>(null);
  const [error, setError] = useState('');
  const [isPending, startTransition] = useTransition();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setOrder(null);
    startTransition(async () => {
      const result = await trackOrder({ orderId, email });
      if (result.ok && result.order) {
        setOrder(result.order);
      } else {
        setError(result.error ?? 'Something went wrong.');
      }
    });
  };

  const handleReset = () => {
    setOrder(null);
    setError('');
    setOrderId('');
    setEmail('');
  };

  return (
    <div className="min-h-screen bg-[#05070D] text-white flex flex-col font-sans selection:bg-[#3B82F6] selection:text-white">
      <Navbar />

      <main className="flex-1 py-10 lg:py-16">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="mb-6 flex items-center gap-2 text-xs text-[#94A3B8]">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="h-3 w-3 text-[#3B82F6]" />
            <span className="text-white font-bold">Track Order</span>
          </div>

          {/* Header */}
          <div className="text-center space-y-3 mb-10">
            <span className="inline-flex items-center justify-center gap-1.5 rounded-full border border-[#3B82F6]/30 bg-[#3B82F6]/10 px-4 py-1.5 text-xs font-extrabold uppercase tracking-widest text-[#3B82F6]">
              <Truck className="h-4 w-4" /> LIVE ORDER TRACKING
            </span>
            <h1 className="text-3xl sm:text-4xl font-black text-white">
              TRACK YOUR <span className="text-[#3B82F6]">ORDER</span>
            </h1>
            <p className="text-sm text-[#94A3B8] max-w-md mx-auto">
              Enter your Order ID and email address to see real-time status and delivery details.
            </p>
          </div>

          {/* Lookup Form */}
          {!order && (
            <div className="rounded-2xl border border-white/[0.06] bg-[#080B12] p-6 sm:p-8 mb-8">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="orderId" className="label">
                    Order ID
                  </label>
                  <div className="relative">
                    <Hash className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-[#475569]" />
                    <input
                      id="orderId"
                      type="text"
                      value={orderId}
                      onChange={(e) => setOrderId(e.target.value.toUpperCase())}
                      placeholder="QB-123456"
                      required
                      className="input pl-10 font-mono tracking-widest uppercase"
                      autoComplete="off"
                    />
                  </div>
                  <p className="mt-1.5 text-xs text-[#475569]">
                    Found in your order confirmation SMS or email (format: QB-XXXXXX)
                  </p>
                </div>

                <div>
                  <label htmlFor="trackEmail" className="label">
                    Email Address Used at Checkout
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-[#475569]" />
                    <input
                      id="trackEmail"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@example.com"
                      required
                      className="input pl-10"
                      autoComplete="email"
                    />
                  </div>
                </div>

                {error && (
                  <div className="flex items-start gap-3 rounded-xl border border-[#ef4444]/30 bg-[#ef4444]/5 px-4 py-3 text-sm text-[#ef4444]">
                    <AlertTriangle className="h-4 w-4 shrink-0 mt-0.5" />
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isPending}
                  className="btn btn-primary btn-lg w-full justify-center gap-2"
                >
                  {isPending ? (
                    <>
                      <Loader2 className="h-4.5 w-4.5 animate-spin" />
                      Searching...
                    </>
                  ) : (
                    <>
                      <Search className="h-4.5 w-4.5" />
                      Track Order
                      <ArrowRight className="h-4.5 w-4.5" />
                    </>
                  )}
                </button>
              </form>
            </div>
          )}

          {/* Order Result */}
          {order && (
            <>
              <OrderResult order={order} />
              <button
                onClick={handleReset}
                className="mt-6 btn btn-secondary w-full justify-center gap-2"
              >
                <RotateCcw className="h-4 w-4" />
                Track Another Order
              </button>
            </>
          )}

          {/* Help Cards */}
          {!order && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-2">
              {[
                { icon: ShoppingBag, title: 'Order ID', desc: 'Check your confirmation SMS/email for QB-XXXXXX format.' },
                { icon: Truck, title: 'Shipping Time', desc: 'Urban: 1–2 days. Other cities: 2–4 days. Custom builds: 5–10 days.' },
                { icon: Phone, title: 'Need Help?', desc: 'WhatsApp +92 325 4803957 or email support@quantumbyte.tech' },
              ].map(({ icon: Icon, title, desc }) => (
                <div key={title} className="rounded-xl border border-white/[0.06] bg-[#080B12] p-4 space-y-2 text-center">
                  <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-xl bg-[#3B82F6]/10 text-[#3B82F6]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <p className="text-sm font-bold text-white">{title}</p>
                  <p className="text-xs text-[#64748b] leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>

      <Footer />
      <CartDrawer />
    </div>
  );
}
