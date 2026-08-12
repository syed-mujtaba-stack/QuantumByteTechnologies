import React from 'react';
import Link from 'next/link';
import {
  DollarSign,
  ShoppingBag,
  Package,
  Users,
  TrendingUp,
  ArrowUpRight,
  Plus,
  Eye,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Layers
} from 'lucide-react';
import { fetchProducts } from '@/sanity/lib/fetch';
import { formatPKR } from '@/sanity/lib/currency';

export const revalidate = 60;

export default async function AdminDashboardPage() {
  const products = await fetchProducts();

  const stats = [
    { label: 'Total Store Revenue', value: formatPKR(148290), change: '+18.4%', icon: DollarSign, isUp: true },
    { label: 'Total Orders Fulfillable', value: '1,492', change: '+12.1%', icon: ShoppingBag, isUp: true },
    { label: 'Sanity Active Products', value: `${products.length}`, change: 'Live Sync', icon: Package, isUp: true },
    { label: 'Registered Customers', value: '3,840', change: '+8.9%', icon: Users, isUp: true },
  ];

  const recentAdminOrders = [
    { id: 'QB-90812', customer: 'John Doe', email: 'john@example.com', item: 'Apple MacBook Pro 16" M3 Max', total: 3499, status: 'Processing', date: 'Just Now' },
    { id: 'QB-90811', customer: 'Sarah Jenkins', email: 'sarah@tech.io', item: 'ASUS ROG Strix RTX 4090 OC 24GB', total: 1999, status: 'Shipped', date: '25 mins ago' },
    { id: 'QB-90810', customer: 'Michael Chang', email: 'm.chang@dev.co', item: 'QuantumByte Cyber Workstation Pro', total: 4999, status: 'Delivered', date: '2 hours ago' },
    { id: 'QB-90809', customer: 'Elena Rostova', email: 'elena@design.net', item: 'Apple Studio Display 27" 5K', total: 1599, status: 'Delivered', date: '4 hours ago' },
    { id: 'QB-90808', customer: 'Tariq Mahmood', email: 'tariq@systems.pk', item: 'ASUS ROG Rapture GT-BE98 PRO', total: 799, status: 'Processing', date: '6 hours ago' },
  ];

  return (
    <div className="space-y-8">
      {/* Dashboard Top Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-2xl border border-[#ff003c]/40 bg-gradient-to-r from-[#ff003c]/20 via-[#0e0e12] to-[#0e0e12] p-6 shadow-xl glass-panel-red">
        <div>
          <span className="text-xs font-extrabold text-[#ff003c] uppercase tracking-widest">
            CONTROL CENTER OVERVIEW
          </span>
          <h1 className="text-2xl sm:text-3xl font-black text-white mt-0.5">
            ADMIN <span className="text-[#ff003c]">ANALYTICS DASHBOARD</span>
          </h1>
          <p className="text-xs text-[#a1a1aa] mt-1">
            Real-time store performance metrics, Sanity CMS sync status, and active order processing queue.
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
                <span className="inline-flex items-center gap-0.5 text-xs font-bold text-[#22c55e]">
                  <ArrowUpRight className="h-3.5 w-3.5" />
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
                <p className="text-[11px] text-[#a1a1aa]">Real-time orders ready for warehouse fulfillment.</p>
              </div>
              <Link href="/admin/orders" className="text-xs text-[#ff003c] font-bold hover:underline">
                View All Orders →
              </Link>
            </div>

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
                  {recentAdminOrders.map((ord) => (
                    <tr key={ord.id} className="hover:bg-[#16161f]/50 transition">
                      <td className="py-3 px-2 font-mono font-bold text-[#ff003c]">{ord.id}</td>
                      <td className="py-3 px-2">
                        <span className="font-bold text-white block">{ord.customer}</span>
                        <span className="text-[10px] text-[#71717a]">{ord.email}</span>
                      </td>
                      <td className="py-3 px-2 font-semibold text-white max-w-xs truncate">{ord.item}</td>
                      <td className="py-3 px-2 font-black text-white">{formatPKR(ord.total)}</td>
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
          </div>
        </div>

        {/* Category Breakdown Sidebar Column */}
        <div className="lg:col-span-4 space-y-6">
          <div className="rounded-2xl border border-[#22222e] bg-[#0e0e12] p-6 space-y-4 glass-panel">
            <h3 className="text-base font-black text-white border-b border-[#1f1f2b] pb-3 flex items-center gap-2">
              <Layers className="h-4 w-4 text-[#ff003c]" />
              Category Revenue Share
            </h3>

            <div className="space-y-4 text-xs">
              <div>
                <div className="flex justify-between font-bold mb-1">
                  <span className="text-white">Computers & Rigs</span>
                  <span className="text-[#ff003c]">{formatPKR(58240)} (39%)</span>
                </div>
                <div className="h-2 rounded-full bg-[#16161f] overflow-hidden">
                  <div className="h-full bg-[#ff003c] w-[39%]" />
                </div>
              </div>

              <div>
                <div className="flex justify-between font-bold mb-1">
                  <span className="text-white">Laptops & MacBooks</span>
                  <span className="text-[#ff003c]">{formatPKR(38900)} (26%)</span>
                </div>
                <div className="h-2 rounded-full bg-[#16161f] overflow-hidden">
                  <div className="h-full bg-[#ff003c] w-[26%]" />
                </div>
              </div>

              <div>
                <div className="flex justify-between font-bold mb-1">
                  <span className="text-white">Flagship Smartphones</span>
                  <span className="text-[#ff003c]">{formatPKR(29450)} (20%)</span>
                </div>
                <div className="h-2 rounded-full bg-[#16161f] overflow-hidden">
                  <div className="h-full bg-[#ff003c] w-[20%]" />
                </div>
              </div>

              <div>
                <div className="flex justify-between font-bold mb-1">
                  <span className="text-white">GPUs & Memory Parts</span>
                  <span className="text-[#ff003c]">{formatPKR(21700)} (15%)</span>
                </div>
                <div className="h-2 rounded-full bg-[#16161f] overflow-hidden">
                  <div className="h-full bg-[#ff003c] w-[15%]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
