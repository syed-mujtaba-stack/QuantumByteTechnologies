import React from 'react';
import Link from 'next/link';
import {
  DollarSign,
  ShoppingBag,
  Package,
  Users,
  AlertTriangle,
  Plus,
  Layers
} from 'lucide-react';
import { fetchProducts, fetchOrders, fetchUsers } from '@/sanity/lib/fetch';
import { formatPKR } from '@/sanity/lib/currency';

export const revalidate = 30;

export default async function AdminDashboardPage() {
  const [products, orders, users] = await Promise.all([fetchProducts(), fetchOrders(), fetchUsers()]);

  const revenue = orders.reduce((sum, o) => sum + (o.totalAmount || 0), 0);
  const pendingOrders = orders.filter((o) => o.status === 'Pending' || o.status === 'Processing');
  const lowStock = products.filter((p) => (p.stock ?? 0) <= 5);

  const stats = [
    { label: 'Total Store Revenue', value: formatPKR(revenue), change: `${orders.length} sale${orders.length === 1 ? '' : 's'}`, icon: DollarSign },
    { label: 'Total Orders', value: `${orders.length}`, change: `${pendingOrders.length} pending`, icon: ShoppingBag },
    { label: 'Sanity Active Products', value: `${products.length}`, change: `${lowStock.length} low stock`, icon: Package },
    { label: 'Registered Customers', value: `${users.length}`, change: `${users.filter((u) => u.isAdmin).length} staff`, icon: Users },
  ];

  const recentOrders = orders.slice(0, 5);

  const categoryCount = products.reduce<Record<string, number>>((acc, p) => {
    acc[p.category] = (acc[p.category] || 0) + 1;
    return acc;
  }, {});
  const categoryBreakdown = Object.entries(categoryCount).sort((a, b) => b[1] - a[1]).slice(0, 6);
  const maxCategory = categoryBreakdown[0]?.[1] || 1;

  return (
    <div className="space-y-8">
      {/* Dashboard Top Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-2xl border border-[#ff003c]/40 bg-gradient-to-r from-[#ff003c]/20 via-[#0e0e12] to-[#0e0e12] p-6 shadow-xl glass-panel-red">
        <div>
          <span className="text-xs font-extrabold text-[#ff003c] uppercase tracking-widest">
            CONTROL CENTER OVERVIEW
          </span>
          <h1 className="text-2xl sm:text-3xl font-black text-white mt-0.5">
            ADMIN <span className="text-[#ff003c]">DASHBOARD</span>
          </h1>
          <p className="text-xs text-[#a1a1aa] mt-1">
            Live metrics synced directly from Sanity — products, orders &amp; customers.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/admin/products/new"
            className="red-gradient-btn flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs font-extrabold text-white shadow-lg shadow-[#ff003c]/25"
          >
            <Plus className="h-4 w-4" />
            Add New Product
          </Link>
        </div>
      </div>

      {/* KPI Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <div key={idx} className="rounded-2xl border border-[#22222e] bg-[#0e0e12] p-5 space-y-3 glass-panel">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-[#a1a1aa]">{stat.label}</span>
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#ff003c]/15 text-[#ff003c]">
                  <Icon className="h-4 w-4" />
                </div>
              </div>
              <div className="flex items-baseline justify-between">
                <span className="text-2xl font-black text-white">{stat.value}</span>
                <span className="inline-flex items-center gap-0.5 text-xs font-bold text-[#a1a1aa]">
                  {stat.change}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Main Content Grid */}
      <div className="grid gap-8 lg:grid-cols-12">
        {/* Orders Table Column */}
        <div className="lg:col-span-8 space-y-4">
          <div className="rounded-2xl border border-[#22222e] bg-[#0e0e12] p-6 space-y-4 glass-panel">
            <div className="flex items-center justify-between border-b border-[#1f1f2b] pb-4">
              <div>
                <h3 className="text-base font-black text-white">Live Customer Orders</h3>
                <p className="text-[11px] text-[#a1a1aa]">Latest orders fetched from Sanity.</p>
              </div>
              <Link href="/admin/orders" className="text-xs text-[#ff003c] font-bold hover:underline">
                View All Orders →
              </Link>
            </div>

            {recentOrders.length === 0 ? (
              <p className="py-8 text-center text-xs text-[#a1a1aa]">No orders placed yet.</p>
            ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="border-b border-[#1f1f2b] text-[#a1a1aa] font-bold">
                    <th className="py-2.5 px-2">Order ID</th>
                    <th className="py-2.5 px-2">Customer</th>
                    <th className="py-2.5 px-2">Item</th>
                    <th className="py-2.5 px-2">Total</th>
                    <th className="py-2.5 px-2">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#1f1f2b]">
                  {recentOrders.map((ord) => (
                    <tr key={ord._id} className="hover:bg-[#16161f]/50 transition">
                      <td className="py-3 px-2 font-mono font-bold text-[#ff003c]">{ord.orderId}</td>
                      <td className="py-3 px-2">
                        <span className="font-bold text-white block">{ord.customerName}</span>
                        <span className="text-[10px] text-[#71717a]">{ord.customerEmail}</span>
                      </td>
                      <td className="py-3 px-2 font-semibold text-white max-w-xs truncate">
                        {ord.items.map((i) => i.name).join(', ')}
                      </td>
                      <td className="py-3 px-2 font-black text-white">{formatPKR(ord.totalAmount)}</td>
                      <td className="py-3 px-2">
                        <span className={`inline-flex items-center gap-1 rounded-md px-2 py-0.5 text-[10px] font-extrabold ${
                          ord.status === 'Delivered'
                            ? 'bg-[#22c55e]/15 text-[#22c55e]'
                            : ord.status === 'Shipped'
                            ? 'bg-[#3b82f6]/15 text-[#3b82f6]'
                            : 'bg-[#ff003c]/15 text-[#ff003c]'
                        }`}>
                          {ord.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            )}
          </div>
        </div>

        {/* Category Breakdown Sidebar Column */}
        <div className="lg:col-span-4 space-y-6">
          <div className="rounded-2xl border border-[#22222e] bg-[#0e0e12] p-6 space-y-4 glass-panel">
            <h3 className="text-base font-black text-white border-b border-[#1f1f2b] pb-3 flex items-center gap-2">
              <Layers className="h-4 w-4 text-[#ff003c]" />
              Category Breakdown
            </h3>

            {categoryBreakdown.length === 0 ? (
              <p className="text-xs text-[#a1a1aa]">No products found.</p>
            ) : (
            <div className="space-y-4 text-xs">
              {categoryBreakdown.map(([cat, count]) => {
                const pct = Math.round((count / maxCategory) * 100);
                return (
                  <div key={cat}>
                    <div className="flex justify-between font-bold mb-1">
                      <span className="text-white capitalize">{cat}</span>
                      <span className="text-[#ff003c]">{count} product{count === 1 ? '' : 's'}</span>
                    </div>
                    <div className="h-2 rounded-full bg-[#16161f] overflow-hidden">
                      <div className="h-full bg-[#ff003c]" style={{ width: `${Math.max(pct, 6)}%` }} />
                    </div>
                  </div>
                );
              })}
            </div>
            )}
          </div>

          {lowStock.length > 0 && (
            <div className="rounded-2xl border border-[#f59e0b]/40 bg-[#f59e0b]/10 p-5 space-y-2 glass-panel">
              <h3 className="text-xs font-extrabold text-[#f59e0b] uppercase flex items-center gap-2">
                <AlertTriangle className="h-4 w-4" /> Low Stock Alerts
              </h3>
              <div className="space-y-1.5 text-xs">
                {lowStock.slice(0, 5).map((p) => (
                  <div key={p.id} className="flex justify-between">
                    <span className="text-white font-semibold line-clamp-1">{p.name}</span>
                    <span className="font-bold text-[#f59e0b]">{p.stock} left</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}