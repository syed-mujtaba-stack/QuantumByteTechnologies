'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { formatPKR } from '@/sanity/lib/currency';
import { getMyOrders, type MyOrder } from '@/app/auth/actions';
import { Package, ArrowRight, Loader2 } from 'lucide-react';

export default function AccountOrdersPage() {
  const [orders, setOrders] = useState<MyOrder[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;
    getMyOrders().then((res) => {
      if (!active) return;
      setOrders(res.orders);
      setLoading(false);
    });
    return () => {
      active = false;
    };
  }, []);

  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-[#22222e] bg-[#0e0e12] p-6 space-y-4 glass-panel">
        <div className="border-b border-[#1f1f2b] pb-4">
          <h2 className="text-xl font-black text-white flex items-center gap-2">
            <Package className="h-5 w-5 text-[#ff003c]" /> ORDER HISTORY
          </h2>
          <p className="text-xs text-[#a1a1aa] mt-0.5">All hardware orders placed from your QuantumByte account.</p>
        </div>

        {loading ? (
          <div className="flex items-center justify-center py-16">
            <Loader2 className="h-8 w-8 animate-spin text-[#ff003c]" />
          </div>
        ) : orders.length === 0 ? (
          <div className="py-12 text-center text-xs text-[#a1a1aa]">
            You haven&apos;t placed any orders yet.
            <Link href="/shop" className="block mt-2 font-bold text-[#ff003c] hover:underline">
              Start Shopping
            </Link>
          </div>
        ) : (
          <div className="divide-y divide-[#1f1f2b]">
            {orders.map((order) => (
              <div key={order.orderId} className="py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-mono font-bold text-white">{order.orderId}</span>
                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                      order.status === 'Delivered'
                        ? 'bg-[#22c55e]/15 text-[#22c55e]'
                        : order.status === 'Shipped'
                        ? 'bg-[#3b82f6]/15 text-[#3b82f6]'
                        : 'bg-[#ff003c]/15 text-[#ff003c]'
                    }`}>
                      {order.status}
                    </span>
                  </div>
                  <p className="text-[#a1a1aa] text-[11px] mt-1">
                    {order.items.map((i) => i.name).join(', ')}
                  </p>
                  <p className="text-[10px] text-[#71717a] mt-0.5">
                    {new Date(order.createdAt).toLocaleDateString()} • {order.paymentMethod} • {order.city || 'N/A'}
                  </p>
                </div>

                <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-end">
                  <span className="font-black text-white text-sm">{formatPKR(order.totalAmount)}</span>
                  <Link
                    href={`/account/orders/${order.orderId}`}
                    className="flex items-center gap-1 rounded-lg border border-[#22222e] bg-[#050505] px-3 py-1.5 text-xs font-bold text-white hover:border-[#ff003c]"
                  >
                    Details <ArrowRight className="h-3 w-3 text-[#ff003c]" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}