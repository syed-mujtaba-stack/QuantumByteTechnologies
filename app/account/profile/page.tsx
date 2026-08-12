'use client';

import React, { useState } from 'react';
import { useAuth } from '@/app/context/AuthContext';
import { updateProfile } from '@/app/auth/actions';
import { User, Mail, Phone, MapPin, Save, Loader2 } from 'lucide-react';

export default function AccountProfilePage() {
  const { user, setUser } = useAuth();

  const [profile, setProfile] = useState({
    fullName: user?.name || '',
    phone: user?.phone || '',
    address: user?.address || '',
    city: user?.city || '',
  });

  const [saving, setSaving] = useState(false);
  const [status, setStatus] = useState<'idle' | 'saved' | 'error'>('idle');

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;
    setSaving(true);
    setStatus('idle');
    const res = await updateProfile({
      name: profile.fullName,
      email: user.email,
      phone: profile.phone,
      address: profile.address,
      city: profile.city,
    });
    setSaving(false);
    if (res.ok && res.user) {
      setUser(res.user);
      setProfile({ fullName: res.user.name, phone: res.user.phone, address: res.user.address, city: res.user.city });
      setStatus('saved');
    } else {
      setStatus('error');
    }
    setTimeout(() => setStatus('idle'), 3000);
  };

  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-[#22222e] bg-[#0e0e12] p-6 space-y-6 glass-panel">
        <div className="border-b border-[#1f1f2b] pb-4">
          <h2 className="text-xl font-black text-white">MY PROFILE DETAILS</h2>
          <p className="text-xs text-[#a1a1aa] mt-0.5">Manage your personal information and delivery preferences.</p>
        </div>

        {status === 'saved' && (
          <div className="rounded-xl border border-[#22c55e]/40 bg-[#22c55e]/10 p-3 text-xs text-[#22c55e] font-bold">
            Profile changes successfully saved!
          </div>
        )}
        {status === 'error' && (
          <div className="rounded-xl border border-[#ef4444]/40 bg-[#ef4444]/10 p-3 text-xs text-[#ef4444] font-bold">
            Could not save profile. Please try again.
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
              <label className="block text-xs font-bold text-[#a1a1aa] mb-1">Email Address (Sign-In ID)</label>
              <div className="relative">
                <Mail className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#71717a]" />
                <input
                  type="email"
                  value={user?.email || ''}
                  readOnly
                  className="w-full rounded-xl border border-[#22222e] bg-[#0e0e12] py-2.5 pl-10 pr-4 text-xs text-[#71717a] outline-none cursor-not-allowed"
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
              <label className="block text-xs font-bold text-[#a1a1aa] mb-1">City / Region</label>
              <div className="relative">
                <MapPin className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#71717a]" />
                <input
                  type="text"
                  value={profile.city}
                  onChange={(e) => setProfile({ ...profile, city: e.target.value })}
                  className="w-full rounded-xl border border-[#22222e] bg-[#050505] py-2.5 pl-10 pr-4 text-xs text-white outline-none focus:border-[#ff003c]"
                />
              </div>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-[#a1a1aa] mb-1">Shipping Address</label>
            <input
              type="text"
              value={profile.address}
              onChange={(e) => setProfile({ ...profile, address: e.target.value })}
              className="w-full rounded-xl border border-[#22222e] bg-[#050505] py-2.5 px-4 text-xs text-white outline-none focus:border-[#ff003c]"
            />
          </div>

          <div className="pt-4 border-t border-[#1f1f2b] flex justify-end">
            <button
              type="submit"
              disabled={saving}
              className="red-gradient-btn flex items-center gap-2 rounded-xl px-5 py-2.5 text-xs font-bold text-white shadow-lg shadow-[#ff003c]/20 disabled:opacity-60"
            >
              {saving ? <Loader2 className="h-4 w-4 animate-spin" /> : <Save className="h-4 w-4" />}
              {saving ? 'Saving...' : 'Save Profile Changes'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}