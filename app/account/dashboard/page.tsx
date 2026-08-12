'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { formatPKR } from '@/sanity/lib/currency';
import { useAuth } from '@/app/context/AuthContext';
import { useWishlist } from '@/app/context/WishlistContext';
import { getMyOrders, type MyOrder } from '@/app/auth/actions';
import { ShoppingBag, Heart, ShieldCheck, MapPin, ArrowRight, Clock, Award, Loader2 } from 'lucide-react';

export default function AccountDashboardPage() {
  const { user } = useAuth();
  const { wishlist } = useWishlist();
  const [orders, setOrders] = useState<MyOrder[]>([]);
  const [ordersLoading, setOrdersLoading] = useState(true);

  useEffect(() => {
    let active = true;
    getMyOrders().then((res) => {
      if (!active) return;
      setOrders(res.orders);
      setOrdersLoading(false);
    });
    return () => {
      active = false;
    };
  }, []);

  const firstName = user?.name?.split(' ')[0] || 'Customer';
  const initials = user
    ? user.name.split(' ').map((p) => p[0]).slice(0, 2).join('').toUpperCase()
    : 'QB';

  const totalOrders = orders.length;
  const activeShipments = orders.filter((o) => o.status === 'Processing' || o.status === 'Pending').length;
  const totalSpent = orders.reduce((sum, o) => sum + o.totalAmount, 0);
  const recentOrders = orders.slice(0, 3);

  return (
    <div className="space-y-8">
      {/* Welcome Banner */}
      <div className="rounded-2xl border border-[#ff003c]/40 bg-gradient-to-r from-[#ff003c]/20 via-[#0e0e12] to-[#0e0e12] p-6 shadow-xl glass-panel-red">
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#ff003c] to-[#990024] text-white font-black text-xl shadow-lg shadow-[#ff003c]/30">
            {initials}
          </div>
          <div>
            <span className="text-xs font-extrabold text-[#ff003c] uppercase tracking-widest">
              WELCOME BACK, {firstName.toUpperCase()}
            </span>
            <h1 className="text-2xl sm:text-3xl font-black text-white mt-1">
              CUSTOMER <span className="text-[#ff003c]">DASHBOARD</span>
            </h1>
          </div>
        </div>
        <p className="text-xs text-[#a1a1aa] mt-3">
          Track live hardware orders, view warranties, and manage your QuantumByte account.
        </p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="rounded-xl border border-[#22222e] bg-[#0e0e12] p-4 text-center space-y-1">
          <ShoppingBag className="h-5 w-5 text-[#ff003c] mx-auto" />
          <span className="text-2xl font-black text-white">{ordersLoading ? '—' : totalOrders}</span>
          <p className="text-[11px] text-[#a1a1aa] uppercase font-bold">Total Orders</p>
        </div>
        <div className="rounded-xl border border-[#22222e] bg-[#0e0e12] p-4 text-center space-y-1">
          <Clock className="h-5 w-5 text-[#ff003c] mx-auto" />
          <span className="text-2xl font-black text-white">{ordersLoading ? '—' : activeShipments}</span>
          <p className="text-[11px] text-[#a1a1aa] uppercase font-bold">Active Shipments</p>
        </div>
        <div className="rounded-xl border border-[#22222e] bg-[#0e0e12] p-4 text-center space-y-1">
          <Heart className="h-5 w-5 text-[#ff003c] mx-auto" />
          <span className="text-2xl font-black text-white">{wishlist.length}</span>
          <p className="text-[11px] text-[#a1a1aa] uppercase font-bold">Wishlist Items</p>
        </div>
        <div className="rounded-xl border border-[#22222e] bg-[#0e0e12] p-4 text-center space-y-1">
          <Award className="h-5 w-5 text-[#ff003c] mx-auto" />
          <span className="text-2xl font-black text-white">{formatPKR(totalSpent)}</span>
          <p className="text-[11px] text-[#a1a1aa] uppercase font-bold">Total Spent</p>
        </div>
      </div>

      {/* Recent Orders Section */}
      <div className="rounded-2xl border border-[#22222e] bg-[#0e0e12] p-6 space-y-4 glass-panel">
        <div className="flex items-center justify-between border-b border-[#1f1f2b] pb-3">
          <h3 className="text-base font-black text-white">Recent Orders</h3>
          <Link href="/account/orders" className="text-xs text-[#ff003c] font-bold hover:underline flex items-center gap-1">
            View All Orders <ArrowRight className="h-3 w-3" />
          </Link>
        </div>

        {ordersLoading ? (
          <div className="flex items-center justify-center py-8">
            <Loader2 className="h-6 w-6 animate-spin text-[#ff003c]" />
          </div>
        ) : recentOrders.length === 0 ? (
          <div className="py-8 text-center text-xs text-[#a1a1aa]">
            No orders yet. Start shopping and your hardware orders will appear here.
            <Link href="/shop" className="block mt-2 font-bold text-[#ff003c] hover:underline">
              Browse Products
            </Link>
          </div>
        ) : (
        <div className="divide-y divide-[#1f1f2b]">
          {recentOrders.map((order) => (
            <div key={order.orderId} className="py-3 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-mono font-bold text-white">{order.orderId}</span>
                  <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                    order.status === 'Delivered' ? 'bg-[#22c55e]/15 text-[#22c55e]' : 'bg-[#ff003c]/15 text-[#ff003c]'
                  }`}>
                    {order.status}
                  </span>
                </div>
                <p className="text-[#a1a1aa] text-[11px] mt-0.5">
                  {order.items.map((i) => i.name).join(', ')} — {order.createdAt?.slice(0, 10)}
                </p>
              </div>

              <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-end">
                <span className="font-black text-white text-sm">{formatPKR(order.totalAmount)}</span>
                <Link
                  href={`/account/orders/${order.orderId}`}
                  className="rounded-lg border border-[#22222e] bg-[#050505] px-3 py-1.5 text-xs font-bold text-white hover:border-[#ff003c]"
                >
                  Order Details
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