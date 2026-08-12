import React from 'react';
import Link from 'next/link';
import { formatPKR } from '@/sanity/lib/currency';
import { Package, Truck, CheckCircle2, ShieldCheck, Printer, ArrowLeft } from 'lucide-react';

export default async function CustomerOrderDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = await params;
  const id = resolvedParams.id;

  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-[#22222e] bg-[#0e0e12] p-6 space-y-6 glass-panel">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#1f1f2b] pb-4">
          <div>
            <Link href="/account/orders" className="text-xs text-[#a1a1aa] hover:text-white flex items-center gap-1 mb-2">
              <ArrowLeft className="h-3.5 w-3.5 text-[#ff003c]" /> Back to Orders List
            </Link>
            <h2 className="text-xl font-black text-white flex items-center gap-2">
              ORDER SUMMARY — <span className="text-[#ff003c] font-mono">{id}</span>
            </h2>
            <p className="text-xs text-[#a1a1aa] mt-0.5">Placed on August 10, 2026 • Paid via Credit Card</p>
          </div>

          <button
            onClick={() => window.print()}
            className="flex items-center gap-2 rounded-xl border border-[#22222e] bg-[#050505] px-4 py-2 text-xs font-bold text-white hover:border-[#ff003c]"
          >
            <Printer className="h-4 w-4 text-[#ff003c]" /> Print Tax Invoice
          </button>
        </div>

        {/* Tracking Timeline */}
        <div className="rounded-xl border border-[#ff003c]/30 bg-[#ff003c]/10 p-5 space-y-3">
          <h4 className="text-xs font-extrabold text-[#ff003c] uppercase tracking-wider flex items-center gap-2">
            <Truck className="h-4 w-4" /> Live Tracking Status
          </h4>

          <div className="grid grid-cols-4 gap-2 text-center text-[11px] pt-2">
            <div className="space-y-1">
              <div className="h-2 rounded-full bg-[#ff003c]" />
              <span className="font-bold text-white">Order Placed</span>
            </div>
            <div className="space-y-1">
              <div className="h-2 rounded-full bg-[#ff003c]" />
              <span className="font-bold text-white">Assembled & Tested</span>
            </div>
            <div className="space-y-1">
              <div className="h-2 rounded-full bg-[#ff003c] animate-pulse" />
              <span className="font-bold text-[#ff003c]">In Transit</span>
            </div>
            <div className="space-y-1">
              <div className="h-2 rounded-full bg-[#22222e]" />
              <span className="text-[#71717a]">Delivered</span>
            </div>
          </div>
        </div>

        {/* Itemized Table */}
        <div className="space-y-3">
          <h4 className="text-xs font-bold text-[#a1a1aa] uppercase">Itemized Products</h4>
          <div className="rounded-xl border border-[#22222e] bg-[#050505] p-4 flex items-center justify-between text-xs">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#16161f] text-[#ff003c]">
                <Package className="h-5 w-5" />
              </div>
              <div>
                <h5 className="font-bold text-white">Apple MacBook Pro 16&quot; M3 Max (36GB / 1TB SSD)</h5>
                <span className="text-[10px] text-[#a1a1aa]">SKU: QB-MAC-M3MAX-16</span>
              </div>
            </div>
            <span className="font-black text-white text-sm">{formatPKR(3499)}</span>
          </div>
        </div>

        {/* Guarantee Note */}
        <div className="flex items-center gap-2 rounded-xl border border-[#22222e] bg-[#050505] p-4 text-xs text-[#a1a1aa]">
          <ShieldCheck className="h-5 w-5 text-[#ff003c] flex-shrink-0" />
          <span>Covered under QuantumByte 1-Year Hardware Guarantee with 24/7 priority support access.</span>
        </div>
      </div>
    </div>
  );
}
