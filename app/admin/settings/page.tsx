'use client';

import React, { useState } from 'react';
import { Settings, Save, ShieldAlert, Cpu, Globe, Database } from 'lucide-react';

export default function AdminSettingsPage() {
  const [saved, setSaved] = useState(false);
  const [storeSettings, setStoreSettings] = useState({
    storeName: 'QuantumByte Technologies',
    supportEmail: 'support@quantumbyte.tech',
    currency: 'USD ($)',
    taxRate: '0',
    sanityDataset: 'production',
    sanityProjectId: 'uu3ulr6g',
    maintenanceMode: false,
  });

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div className="rounded-2xl border border-[#22222e] bg-[#0e0e12] p-6 glass-panel">
        <span className="text-xs font-extrabold text-[#ff003c] uppercase tracking-widest">
          SYSTEM CONFIGURATION
        </span>
        <h1 className="text-2xl font-black text-white">PLATFORM SETTINGS</h1>
      </div>

      {saved && (
        <div className="rounded-xl border border-[#22c55e]/40 bg-[#22c55e]/10 p-4 text-xs text-[#22c55e] font-bold">
          System settings saved successfully!
        </div>
      )}

      <form onSubmit={handleSave} className="rounded-2xl border border-[#22222e] bg-[#0e0e12] p-6 space-y-6 glass-panel text-xs">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block font-bold text-[#a1a1aa] mb-1">Store Name</label>
            <input
              type="text"
              value={storeSettings.storeName}
              onChange={(e) => setStoreSettings({ ...storeSettings, storeName: e.target.value })}
              className="w-full rounded-xl border border-[#22222e] bg-[#050505] p-3 text-xs text-white outline-none focus:border-[#ff003c]"
            />
          </div>

          <div>
            <label className="block font-bold text-[#a1a1aa] mb-1">Support Email</label>
            <input
              type="email"
              value={storeSettings.supportEmail}
              onChange={(e) => setStoreSettings({ ...storeSettings, supportEmail: e.target.value })}
              className="w-full rounded-xl border border-[#22222e] bg-[#050505] p-3 text-xs text-white outline-none focus:border-[#ff003c]"
            />
          </div>

          <div>
            <label className="block font-bold text-[#a1a1aa] mb-1">Sanity Project ID</label>
            <input
              type="text"
              readOnly
              value={storeSettings.sanityProjectId}
              className="w-full rounded-xl border border-[#22222e] bg-[#050505] p-3 text-xs text-white font-mono opacity-80"
            />
          </div>

          <div>
            <label className="block font-bold text-[#a1a1aa] mb-1">Sanity Dataset</label>
            <input
              type="text"
              readOnly
              value={storeSettings.sanityDataset}
              className="w-full rounded-xl border border-[#22222e] bg-[#050505] p-3 text-xs text-white font-mono opacity-80"
            />
          </div>
        </div>

        <div className="flex justify-end border-t border-[#1f1f2b] pt-4">
          <button
            type="submit"
            className="red-gradient-btn flex items-center gap-2 rounded-xl px-6 py-3 text-xs font-bold text-white shadow-xl shadow-[#ff003c]/25"
          >
            <Save className="h-4 w-4" /> Save System Settings
          </button>
        </div>
      </form>
    </div>
  );
}
