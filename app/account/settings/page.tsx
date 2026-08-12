'use client';

import React, { useState } from 'react';
import { Lock, ShieldCheck, Bell, Save, KeyRound } from 'lucide-react';

export default function AccountSettingsPage() {
  const [passwords, setPasswords] = useState({
    current: '',
    newPass: '',
    confirmPass: '',
  });

  const [notifications, setNotifications] = useState({
    emailDeals: true,
    orderSMS: true,
    securityAlerts: true,
  });

  const [saved, setSaved] = useState(false);

  const handleSaveSecurity = (e: React.FormEvent) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="space-y-6">
      {/* Change Password */}
      <div className="rounded-2xl border border-[#22222e] bg-[#0e0e12] p-6 space-y-6 glass-panel">
        <div className="border-b border-[#1f1f2b] pb-4">
          <h2 className="text-xl font-black text-white flex items-center gap-2">
            <Lock className="h-5 w-5 text-[#ff003c]" />
            SECURITY & PASSWORD
          </h2>
          <p className="text-xs text-[#a1a1aa] mt-0.5">Update your password and manage account authorization.</p>
        </div>

        {saved && (
          <div className="rounded-xl border border-[#22c55e]/40 bg-[#22c55e]/10 p-3 text-xs text-[#22c55e] font-bold">
            Security settings successfully updated!
          </div>
        )}

        <form onSubmit={handleSaveSecurity} className="space-y-4 max-w-md">
          <div>
            <label className="block text-xs font-bold text-[#a1a1aa] mb-1">Current Password</label>
            <input
              type="password"
              required
              value={passwords.current}
              onChange={(e) => setPasswords({ ...passwords, current: e.target.value })}
              placeholder="••••••••••••"
              className="w-full rounded-xl border border-[#22222e] bg-[#050505] py-2.5 px-4 text-xs text-white outline-none focus:border-[#ff003c]"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-[#a1a1aa] mb-1">New Password</label>
            <input
              type="password"
              required
              value={passwords.newPass}
              onChange={(e) => setPasswords({ ...passwords, newPass: e.target.value })}
              placeholder="••••••••••••"
              className="w-full rounded-xl border border-[#22222e] bg-[#050505] py-2.5 px-4 text-xs text-white outline-none focus:border-[#ff003c]"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-[#a1a1aa] mb-1">Confirm New Password</label>
            <input
              type="password"
              required
              value={passwords.confirmPass}
              onChange={(e) => setPasswords({ ...passwords, confirmPass: e.target.value })}
              placeholder="••••••••••••"
              className="w-full rounded-xl border border-[#22222e] bg-[#050505] py-2.5 px-4 text-xs text-white outline-none focus:border-[#ff003c]"
            />
          </div>

          <button
            type="submit"
            className="red-gradient-btn flex items-center gap-2 rounded-xl px-5 py-2.5 text-xs font-bold text-white shadow-lg shadow-[#ff003c]/20"
          >
            <Save className="h-4 w-4" />
            Update Password
          </button>
        </form>
      </div>

      {/* Notification Preferences */}
      <div className="rounded-2xl border border-[#22222e] bg-[#0e0e12] p-6 space-y-4 glass-panel">
        <div className="border-b border-[#1f1f2b] pb-4">
          <h2 className="text-xl font-black text-white flex items-center gap-2">
            <Bell className="h-5 w-5 text-[#ff003c]" />
            NOTIFICATION PREFERENCES
          </h2>
        </div>

        <div className="space-y-3 text-xs">
          <label className="flex items-center justify-between p-3 rounded-xl border border-[#22222e] bg-[#050505] cursor-pointer">
            <div>
              <span className="font-bold text-white">Flash Deals & Hardware Promos</span>
              <p className="text-[11px] text-[#a1a1aa]">Receive instant alerts on discounted GPUs and MacBooks.</p>
            </div>
            <input
              type="checkbox"
              checked={notifications.emailDeals}
              onChange={(e) => setNotifications({ ...notifications, emailDeals: e.target.checked })}
              className="h-4 w-4 accent-[#ff003c] cursor-pointer"
            />
          </label>

          <label className="flex items-center justify-between p-3 rounded-xl border border-[#22222e] bg-[#050505] cursor-pointer">
            <div>
              <span className="font-bold text-white">Order SMS & Delivery Tracking</span>
              <p className="text-[11px] text-[#a1a1aa]">Get real-time SMS updates when order status changes to In-Transit.</p>
            </div>
            <input
              type="checkbox"
              checked={notifications.orderSMS}
              onChange={(e) => setNotifications({ ...notifications, orderSMS: e.target.checked })}
              className="h-4 w-4 accent-[#ff003c] cursor-pointer"
            />
          </label>
        </div>
      </div>
    </div>
  );
}
