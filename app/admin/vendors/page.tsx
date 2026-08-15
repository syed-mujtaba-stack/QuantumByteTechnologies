import React from 'react';
import { Building2, Plus, Globe, CheckCircle2 } from 'lucide-react';

export default function AdminVendorsPage() {
  const vendors = [
    { name: 'Apple Inc.', category: 'MacBooks, iPhones & Displays', region: 'Cupertino, CA, USA', status: 'Official Authorized Partner' },
    { name: 'ASUS Tek Computer', category: 'ROG Rigs, Motherboards & Monitors', region: 'Taipei, Taiwan', status: 'Official Authorized Partner' },
    { name: 'Samsung Electronics', category: 'Galaxy Smartphones & NVMe SSDs', region: 'Suwon, South Korea', status: 'Official Authorized Partner' },
    { name: 'NVIDIA Corporation', category: 'GeForce RTX Graphics Processors', region: 'Santa Clara, CA, USA', status: 'Official Authorized Partner' },
    { name: 'Anker Innovations', category: 'GaN Power Chargers & Power Docks', region: 'Changsha, China', status: 'Official Authorized Partner' },
    { name: 'Corsair Gaming', category: 'DDR5 Memory, Cooling & PSUs', region: 'Fremont, CA, USA', status: 'Official Authorized Partner' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-2xl border border-[#22222e] bg-[#0e0e12] p-6 glass-panel">
        <div>
          <span className="text-xs font-extrabold text-[#3B82F6] uppercase tracking-widest">
            GLOBAL SUPPLY CHAIN
          </span>
          <h1 className="text-2xl font-black text-white">HARDWARE VENDORS & DISTRIBUTORS ({vendors.length})</h1>
        </div>

        <button className="red-gradient-btn flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs font-extrabold text-white shadow-lg shadow-[#3B82F6]/25">
          <Plus className="h-4 w-4" /> Add Vendor Partner
        </button>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {vendors.map((v, idx) => (
          <div key={idx} className="rounded-2xl border border-[#22222e] bg-[#0e0e12] p-5 space-y-3 glass-panel text-xs">
            <div className="flex items-center justify-between">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#3B82F6] text-white">
                <Building2 className="h-5 w-5" />
              </div>
              <span className="flex items-center gap-1 rounded bg-[#22c55e]/15 px-2 py-0.5 text-[10px] font-bold text-[#22c55e]">
                <CheckCircle2 className="h-3 w-3" /> Verified Partner
              </span>
            </div>

            <div>
              <h3 className="text-base font-extrabold text-white">{v.name}</h3>
              <p className="text-[11px] text-[#a1a1aa] mt-0.5">{v.category}</p>
              <p className="text-[10px] text-[#71717a] mt-1 flex items-center gap-1">
                <Globe className="h-3 w-3" /> {v.region}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
