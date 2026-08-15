'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { formatPKR } from '@/sanity/lib/currency';
import { getMyOrderById, type MyOrder } from '@/app/auth/actions';
import { Package, ShieldCheck, Printer, ArrowLeft, Loader2, Truck } from 'lucide-react';

const STATUS_ORDER = ['Pending', 'Processing', 'Shipped', 'Delivered'];

export default function CustomerOrderDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const [orderId, setOrderId] = useState<string>('');
  const [order, setOrder] = useState<MyOrder | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;
    params.then((resolved) => {
      if (!active) return;
      setOrderId(resolved.id);
      getMyOrderById(resolved.id).then((res) => {
        if (!active) return;
        setOrder(res.order);
        setLoading(false);
      });
    });
    return () => {
      active = false;
    };
  }, [params]);

  if (loading) {
    return (
      <div className="flex items-center justify-center py-24">
        <Loader2 className="h-8 w-8 animate-spin text-[#3B82F6]" />
      </div>
    );
  }

  if (!order) {
    return (
      <div className="rounded-2xl border border-[#22222e] bg-[#0e0e12] p-10 text-center space-y-4 glass-panel">
        <h2 className="text-lg font-black text-white">ORDER NOT FOUND</h2>
        <p className="text-xs text-[#a1a1aa]">
          We couldn&apos;t find order <span className="font-mono text-[#3B82F6]">{orderId}</span> in your account.
        </p>
        <Link href="/account/orders" className="text-xs font-bold text-[#3B82F6] hover:underline">
          Back to Orders
        </Link>
      </div>
    );
  }

  const currentStatusIdx = Math.max(0, STATUS_ORDER.indexOf(order.status));

  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-[#22222e] bg-[#0e0e12] p-6 space-y-6 glass-panel">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#1f1f2b] pb-4">
          <div>
            <Link href="/account/orders" className="text-xs text-[#a1a1aa] hover:text-white flex items-center gap-1 mb-2">
              <ArrowLeft className="h-3.5 w-3.5 text-[#3B82F6]" /> Back to Orders List
            </Link>
            <h2 className="text-xl font-black text-white flex items-center gap-2">
              ORDER SUMMARY — <span className="text-[#3B82F6] font-mono">{order.orderId}</span>
            </h2>
            <p className="text-xs text-[#a1a1aa] mt-0.5">
              Placed on {new Date(order.createdAt).toLocaleDateString()} • {order.paymentMethod}
            </p>
          </div>

          <button
            onClick={() => window.print()}
            className="flex items-center gap-2 rounded-xl border border-[#22222e] bg-[#050505] px-4 py-2 text-xs font-bold text-white hover:border-[#3B82F6]"
          >
            <Printer className="h-4 w-4 text-[#3B82F6]" /> Print Receipt
          </button>
        </div>

        {/* Tracking Timeline */}
        <div className="rounded-xl border border-[#3B82F6]/30 bg-[#3B82F6]/10 p-5 space-y-3">
          <h4 className="text-xs font-extrabold text-[#3B82F6] uppercase tracking-wider flex items-center gap-2">
            <Truck className="h-4 w-4" /> Tracking Status — {order.status}
          </h4>

          <div className="grid grid-cols-4 gap-2 text-center text-[11px] pt-2">
            {STATUS_ORDER.map((status, idx) => {
              const reached = idx <= currentStatusIdx;
              return (
                <div key={status} className="space-y-1">
                  <div className={`h-2 rounded-full ${reached ? 'bg-[#3B82F6]' : 'bg-[#22222e]'} ${reached && status === order.status ? 'animate-pulse' : ''}`} />
                  <span className={reached ? 'font-bold text-white' : 'text-[#71717a]'}>{status}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Delivery Address */}
        <div className="rounded-xl border border-[#22222e] bg-[#050505] p-4 text-xs space-y-1">
          <h4 className="font-bold text-white">Delivery To</h4>
          <p className="text-[#a1a1aa]">{order.customerName}</p>
          <p className="text-[#a1a1aa]">{order.shippingAddress}, {order.city}</p>
          <p className="text-[#71717a]">{order.customerPhone} • {order.customerEmail}</p>
        </div>

        {/* Itemized Table */}
        <div className="space-y-3">
          <h4 className="text-xs font-bold text-[#a1a1aa] uppercase">Itemized Products</h4>
          <div className="space-y-2">
            {order.items.map((item, idx) => (
              <div key={`${item.productId}-${idx}`} className="rounded-xl border border-[#22222e] bg-[#050505] p-4 flex items-center justify-between text-xs">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#16161f] text-[#3B82F6]">
                    <Package className="h-5 w-5" />
                  </div>
                  <div>
                    <h5 className="font-bold text-white">{item.name}</h5>
                    <span className="text-[10px] text-[#a1a1aa]">
                      {item.brand} • Qty: {item.quantity} • {formatPKR(item.unitPrice)} each
                    </span>
                  </div>
                </div>
                <span className="font-black text-white text-sm">{formatPKR(item.lineTotal)}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Totals */}
        <div className="space-y-2 border-t border-[#1f1f2b] pt-4 text-xs text-[#a1a1aa]">
          <div className="flex justify-between">
            <span>Order Total ({order.items.reduce((s, i) => s + i.quantity, 0)} items)</span>
            <span className="font-black text-white text-sm">{formatPKR(order.totalAmount)}</span>
          </div>
        </div>

        {/* Guarantee Note */}
        <div className="flex items-center gap-2 rounded-xl border border-[#22222e] bg-[#050505] p-4 text-xs text-[#a1a1aa]">
          <ShieldCheck className="h-5 w-5 text-[#3B82F6] flex-shrink-0" />
          <span>Covered under QuantumByte 1-Year Hardware Guarantee with 24/7 priority support access.</span>
        </div>
      </div>
    </div>
  );
}