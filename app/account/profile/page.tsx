'use client';

import React, { useState } from 'react';
import { User, Mail, Phone, Save, ShieldCheck } from 'lucide-react';

export default function AccountProfilePage() {
  const [profile, setProfile] = useState({
    fullName: 'Alex Morgan',
    email: 'alex.morgan@quantumbyte.tech',
    phone: '+92 300 9876543',
    company: 'Nexus Tech Systems',
    currency: 'USD ($)',
  });

  const [saved, setSaved] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-[#22222e] bg-[#0e0e12] p-6 space-y-6 glass-panel">
        <div className="border-b border-[#1f1f2b] pb-4">
          <h2 className="text-xl font-black text-white">MY PROFILE DETAILS</h2>
          <p className="text-xs text-[#a1a1aa] mt-0.5">Manage your personal information and communication preferences.</p>
        </div>

        {saved && (
          <div className="rounded-xl border border-[#22c55e]/40 bg-[#22c55e]/10 p-3 text-xs text-[#22c55e] font-bold">
            Profile changes successfully saved!
          </div>
        )}

        <form onSubmit={handleSave} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-[#a1a1aa] mb-1">Full Name</label>
              <div className="relative">
                <User className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#71717a]" />
                <input
                  type="text"
                  value={profile.fullName}
                  onChange={(e) => setProfile({ ...profile, fullName: e.target.value })}
                  className="w-full rounded-xl border border-[#22222e] bg-[#050505] py-2.5 pl-10 pr-4 text-xs text-white outline-none focus:border-[#ff003c]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-[#a1a1aa] mb-1">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#71717a]" />
                <input
                  type="email"
                  value={profile.email}
                  onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                  className="w-full rounded-xl border border-[#22222e] bg-[#050505] py-2.5 pl-10 pr-4 text-xs text-white outline-none focus:border-[#ff003c]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-[#a1a1aa] mb-1">Phone Number</label>
              <div className="relative">
                <Phone className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#71717a]" />
                <input
                  type="tel"
                  value={profile.phone}
                  onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
                  className="w-full rounded-xl border border-[#22222e] bg-[#050505] py-2.5 pl-10 pr-4 text-xs text-white outline-none focus:border-[#ff003c]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-[#a1a1aa] mb-1">Company (Optional)</label>
              <input
                type="text"
                value={profile.company}
                onChange={(e) => setProfile({ ...profile, company: e.target.value })}
                className="w-full rounded-xl border border-[#22222e] bg-[#050505] py-2.5 px-4 text-xs text-white outline-none focus:border-[#ff003c]"
              />
            </div>
          </div>

          <div className="pt-4 border-t border-[#1f1f2b] flex justify-end">
            <button
              type="submit"
              className="red-gradient-btn flex items-center gap-2 rounded-xl px-5 py-2.5 text-xs font-bold text-white shadow-lg shadow-[#ff003c]/20"
            >
              <Save className="h-4 w-4" />
              Save Profile Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
