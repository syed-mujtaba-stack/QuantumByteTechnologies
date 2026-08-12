'use client';

import React from 'react';
import Link from 'next/link';
import { useAuth } from '@/app/context/AuthContext';
import { MapPin, Edit, CheckCircle2 } from 'lucide-react';

export default function AccountAddressesPage() {
  const { user } = useAuth();

  const hasAddress = Boolean(user?.address?.trim());

  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-[#22222e] bg-[#0e0e12] p-6 space-y-6 glass-panel">
        <div className="flex items-center justify-between border-b border-[#1f1f2b] pb-4">
          <div>
            <h2 className="text-xl font-black text-white">SAVED ADDRESS BOOK</h2>
            <p className="text-xs text-[#a1a1aa] mt-0.5">Your default delivery destination for express hardware shipping.</p>
          </div>
          <Link
            href="/account/profile"
            className="red-gradient-btn flex items-center gap-1.5 rounded-xl px-4 py-2 text-xs font-bold text-white shadow-lg shadow-[#ff003c]/20"
          >
            <Edit className="h-4 w-4" /> Edit Profile
          </Link>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="relative flex flex-col justify-between rounded-xl border border-[#ff003c]/60 bg-[#ff003c]/10 p-4 text-xs space-y-3">
            <div className="space-y-1">
              <div className="flex items-center justify-between">
                <span className="font-extrabold text-white text-sm">Primary Residence / Office</span>
                <span className="flex items-center gap-1 text-[10px] font-bold text-[#ff003c] uppercase">
                  <CheckCircle2 className="h-3 w-3" /> Default Shipping
                </span>
              </div>
              <p className="font-bold text-white pt-1">{user?.name}</p>
              {hasAddress ? (
                <>
                  <p className="text-[#a1a1aa]">{user?.address}</p>
                  <p className="text-[#a1a1aa]">{user?.city}</p>
                  <p className="text-[#71717a] pt-1">{user?.phone}</p>
                </>
              ) : (
                <p className="text-[#a1a1aa] pt-2">
                  No saved address yet.{' '}
                  <Link href="/account/profile" className="font-bold text-[#ff003c] hover:underline">
                    Add one in your profile
                  </Link>
                </p>
              )}
            </div>

            <div className="flex items-center gap-3 pt-2 border-t border-[#1f1f2b]">
              <Link href="/account/profile" className="text-xs font-bold text-white hover:text-[#ff003c]">
                Edit Address
              </Link>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-[#22222e] bg-[#050505] p-6 text-center space-y-3">
            <MapPin className="h-8 w-8 text-[#71717a]" />
            <p className="text-xs text-[#a1a1aa]">
              Delivery addresses are managed from your profile and are used at checkout.
            </p>
            <Link href="/account/profile" className="text-xs font-bold text-[#ff003c] hover:underline">
              Update Delivery Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}