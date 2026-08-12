import React from 'react';
import { BarChart3, TrendingUp, DollarSign, ShoppingBag, Users, ArrowUpRight } from 'lucide-react';
import { formatPKR } from '@/sanity/lib/currency';

export default function AdminAnalyticsPage() {
  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-[#ff003c]/40 bg-gradient-to-r from-[#ff003c]/20 via-[#0e0e12] to-[#0e0e12] p-6 shadow-xl glass-panel-red">
        <span className="text-xs font-extrabold text-[#ff003c] uppercase tracking-widest">
          BUSINESS INTELLIGENCE
        </span>
        <h1 className="text-2xl font-black text-white mt-0.5">SALES & CONVERSION ANALYTICS</h1>
        <p className="text-xs text-[#a1a1aa] mt-1">Detailed store revenue trends, average order values, and customer retention metrics.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="rounded-2xl border border-[#22222e] bg-[#0e0e12] p-5 space-y-2 glass-panel text-xs">
          <span className="text-[#a1a1aa] font-bold">Average Order Value (AOV)</span>
          <h2 className="text-3xl font-black text-white">{formatPKR(1240.5)}</h2>
          <span className="text-[#22c55e] font-bold flex items-center gap-1">
            <ArrowUpRight className="h-3.5 w-3.5" /> +14.2% vs last month
          </span>
        </div>

        <div className="rounded-2xl border border-[#22222e] bg-[#0e0e12] p-5 space-y-2 glass-panel text-xs">
          <span className="text-[#a1a1aa] font-bold">Checkout Conversion Rate</span>
          <h2 className="text-3xl font-black text-white">4.82%</h2>
          <span className="text-[#22c55e] font-bold flex items-center gap-1">
            <ArrowUpRight className="h-3.5 w-3.5" /> +1.1% industry lead
          </span>
        </div>

        <div className="rounded-2xl border border-[#22222e] bg-[#0e0e12] p-5 space-y-2 glass-panel text-xs">
          <span className="text-[#a1a1aa] font-bold">Repeat Customer Rate</span>
          <h2 className="text-3xl font-black text-white">38.5%</h2>
          <span className="text-[#22c55e] font-bold flex items-center gap-1">
            <ArrowUpRight className="h-3.5 w-3.5" /> +5.4% returning buyers
          </span>
        </div>
      </div>
    </div>
  );
}
