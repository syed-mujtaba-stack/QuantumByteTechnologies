'use client';

import React, { useState } from 'react';
import { MapPin, Plus, Trash2, Edit, CheckCircle2 } from 'lucide-react';

export default function AccountAddressesPage() {
  const [addresses, setAddresses] = useState([
    {
      id: 1,
      title: 'Primary Residence / Office',
      name: 'Alex Morgan',
      street: 'Suite 402, Quantum Byte Tower, Tech Enclave',
      city: 'Karachi, Sindh',
      phone: '+92 300 9876543',
      isDefault: true,
    },
    {
      id: 2,
      title: 'Secondary Hardware Lab',
      name: 'Alex Morgan (Hardware Dev)',
      street: 'Plot 12, Cyber Park Phase 6, DHA',
      city: 'Lahore, Punjab',
      phone: '+92 321 4567890',
      isDefault: false,
    },
  ]);

  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-[#22222e] bg-[#0e0e12] p-6 space-y-6 glass-panel">
        <div className="flex items-center justify-between border-b border-[#1f1f2b] pb-4">
          <div>
            <h2 className="text-xl font-black text-white">SAVED ADDRESS BOOK</h2>
            <p className="text-xs text-[#a1a1aa] mt-0.5">Manage delivery destinations for express hardware shipping.</p>
          </div>
          <button className="red-gradient-btn flex items-center gap-1.5 rounded-xl px-4 py-2 text-xs font-bold text-white shadow-lg shadow-[#ff003c]/20">
            <Plus className="h-4 w-4" /> Add New Address
          </button>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {addresses.map((addr) => (
            <div
              key={addr.id}
              className={`relative flex flex-col justify-between rounded-xl border p-4 text-xs space-y-3 ${
                addr.isDefault
                  ? 'border-[#ff003c]/60 bg-[#ff003c]/10'
                  : 'border-[#22222e] bg-[#050505]'
              }`}
            >
              <div className="space-y-1">
                <div className="flex items-center justify-between">
                  <span className="font-extrabold text-white text-sm">{addr.title}</span>
                  {addr.isDefault && (
                    <span className="flex items-center gap-1 text-[10px] font-bold text-[#ff003c] uppercase">
                      <CheckCircle2 className="h-3 w-3" /> Default Shipping
                    </span>
                  )}
                </div>
                <p className="font-bold text-white pt-1">{addr.name}</p>
                <p className="text-[#a1a1aa]">{addr.street}</p>
                <p className="text-[#a1a1aa]">{addr.city}</p>
                <p className="text-[#71717a] pt-1">{addr.phone}</p>
              </div>

              <div className="flex items-center gap-3 pt-2 border-t border-[#1f1f2b]">
                <button className="text-xs font-bold text-white hover:text-[#ff003c]">Edit</button>
                <button className="text-xs text-[#71717a] hover:text-[#ff003c]">Remove</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
