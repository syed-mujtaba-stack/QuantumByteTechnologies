import React from 'react';
import Link from 'next/link';
import { formatPKR } from '@/sanity/lib/currency';
import { ShoppingBag, Heart, ShieldCheck, MapPin, ArrowRight, Clock, Award } from 'lucide-react';

export default function AccountDashboardPage() {
  const recentOrders = [
    { id: 'QB-849201', date: '2026-08-10', total: 3499, status: 'Processing', item: 'Apple MacBook Pro 16" M3 Max' },
    { id: 'QB-719302', date: '2026-07-28', total: 1299, status: 'Delivered', item: 'Samsung Galaxy S25 Ultra 5G' },
    { id: 'QB-592019', date: '2026-06-15', total: 1999, status: 'Delivered', item: 'ASUS ROG Strix RTX 4090 OC 24GB' },
  ];

  return (
    <div className="space-y-8">
      {/* Welcome Banner */}
      <div className="rounded-2xl border border-[#ff003c]/40 bg-gradient-to-r from-[#ff003c]/20 via-[#0e0e12] to-[#0e0e12] p-6 shadow-xl glass-panel-red">
        <span className="text-xs font-extrabold text-[#ff003c] uppercase tracking-widest">
          WELCOME BACK, ALEX MORGAN
        </span>
        <h1 className="text-2xl sm:text-3xl font-black text-white mt-1">
          CUSTOMER <span className="text-[#ff003c]">DASHBOARD</span>
        </h1>
        <p className="text-xs text-[#a1a1aa] mt-1">
          Manage active hardware orders, track shipping status, access custom build warranties, and view saved specs.
        </p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="rounded-xl border border-[#22222e] bg-[#0e0e12] p-4 text-center space-y-1">
          <ShoppingBag className="h-5 w-5 text-[#ff003c] mx-auto" />
          <span className="text-2xl font-black text-white">12</span>
          <p className="text-[11px] text-[#a1a1aa] uppercase font-bold">Total Orders</p>
        </div>
        <div className="rounded-xl border border-[#22222e] bg-[#0e0e12] p-4 text-center space-y-1">
          <Clock className="h-5 w-5 text-[#ff003c] mx-auto" />
          <span className="text-2xl font-black text-white">1</span>
          <p className="text-[11px] text-[#a1a1aa] uppercase font-bold">Active Shipment</p>
        </div>
        <div className="rounded-xl border border-[#22222e] bg-[#0e0e12] p-4 text-center space-y-1">
          <Heart className="h-5 w-5 text-[#ff003c] mx-auto" />
          <span className="text-2xl font-black text-white">4</span>
          <p className="text-[11px] text-[#a1a1aa] uppercase font-bold">Wishlist Items</p>
        </div>
        <div className="rounded-xl border border-[#22222e] bg-[#0e0e12] p-4 text-center space-y-1">
          <Award className="h-5 w-5 text-[#ff003c] mx-auto" />
          <span className="text-2xl font-black text-[#ff003c]">4,850</span>
          <p className="text-[11px] text-[#a1a1aa] uppercase font-bold">Tech Points</p>
        </div>
      </div>

      {/* Recent Orders Section */}
      <div className="rounded-2xl border border-[#22222e] bg-[#0e0e12] p-6 space-y-4 glass-panel">
        <div className="flex items-center justify-between border-b border-[#1f1f2b] pb-3">
          <h3 className="text-base font-black text-white">Recent Hardware Orders</h3>
          <Link href="/account/orders" className="text-xs text-[#ff003c] font-bold hover:underline flex items-center gap-1">
            View All Orders <ArrowRight className="h-3 w-3" />
          </Link>
        </div>

        <div className="divide-y divide-[#1f1f2b]">
          {recentOrders.map((order) => (
            <div key={order.id} className="py-3 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-mono font-bold text-white">{order.id}</span>
                  <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                    order.status === 'Delivered' ? 'bg-[#22c55e]/15 text-[#22c55e]' : 'bg-[#ff003c]/15 text-[#ff003c]'
                  }`}>
                    {order.status}
                  </span>
                </div>
                <p className="text-[#a1a1aa] text-[11px] mt-0.5">{order.item} — {order.date}</p>
              </div>

              <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-end">
                <span className="font-black text-white text-sm">{formatPKR(order.total)}</span>
                <Link
                  href={`/account/orders/${order.id}`}
                  className="rounded-lg border border-[#22222e] bg-[#050505] px-3 py-1.5 text-xs font-bold text-white hover:border-[#ff003c]"
                >
                  Order Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
