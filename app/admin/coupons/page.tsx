import React from 'react';
import { Tag, Plus, CheckCircle2, Clock } from 'lucide-react';

export default function AdminCouponsPage() {
  const coupons = [
    { code: 'QUANTUM10', discount: '10% OFF', type: 'Percentage', usage: '1,420 Uses', status: 'Active (Global)' },
    { code: 'WELCOME50', discount: 'Rs. 13,950 OFF', type: 'Fixed Amount', usage: '840 Uses', status: 'Active (New Users)' },
    { code: 'CYBERRIG', discount: '15% OFF', type: 'Percentage', usage: '310 Uses', status: 'Active (Custom PCs)' },
    { code: 'FREESHIP', discount: '100% OFF Shipping', type: 'Free Shipping', usage: '2,910 Uses', status: 'Active (Global)' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-2xl border border-[#22222e] bg-[#0e0e12] p-6 glass-panel">
        <div>
          <span className="text-xs font-extrabold text-[#ff003c] uppercase tracking-widest">
            PROMOTIONAL CAMPAIGNS
          </span>
          <h1 className="text-2xl font-black text-white">COUPONS & PROMO CODES ({coupons.length})</h1>
        </div>

        <button className="red-gradient-btn flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs font-extrabold text-white shadow-lg shadow-[#ff003c]/25">
          <Plus className="h-4 w-4" /> Create Promo Code
        </button>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {coupons.map((c, idx) => (
          <div key={idx} className="rounded-2xl border border-[#ff003c]/30 bg-[#0e0e12] p-5 space-y-3 glass-panel-red text-xs">
            <div className="flex items-center justify-between">
              <span className="font-mono font-black text-sm text-[#ff003c] bg-[#ff003c]/15 px-2.5 py-1 rounded">
                {c.code}
              </span>
              <span className="text-[10px] text-[#22c55e] font-bold">● Active</span>
            </div>

            <div>
              <h3 className="text-xl font-black text-white">{c.discount}</h3>
              <p className="text-[11px] text-[#a1a1aa] mt-0.5">{c.type} • {c.usage}</p>
              <p className="text-[10px] text-[#71717a] mt-1">{c.status}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
