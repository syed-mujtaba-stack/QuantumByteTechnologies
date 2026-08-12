import React from 'react';
import Link from 'next/link';
import { UserCheck, Shield, Plus } from 'lucide-react';
import { fetchUsers } from '@/sanity/lib/fetch';
import { RoleSelect, DeleteUserButton } from '@/app/admin/admin-buttons';

export const revalidate = 30;

export default async function AdminUsersPage() {
  const users = await fetchUsers();

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-2xl border border-[#22222e] bg-[#0e0e12] p-6 glass-panel">
        <div>
          <span className="text-xs font-extrabold text-[#ff003c] uppercase tracking-widest">
            STAFF & ROLES ACCESS
          </span>
          <h1 className="text-2xl font-black text-white">STAFF USERS MANAGEMENT ({users.length})</h1>
          <p className="text-xs text-[#a1a1aa] mt-0.5">
            Setting a user's role to <span className="font-bold text-[#ff003c]">Super Admin</span> grants dashboard access. This can also be set in Sanity Studio.
          </p>
        </div>

        <Link
          href="/studio"
          target="_blank"
          className="red-gradient-btn flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs font-extrabold text-white shadow-lg shadow-[#ff003c]/25"
        >
          <Plus className="h-4 w-4" /> Add User in Sanity Studio
        </Link>
      </div>

      {users.length === 0 ? (
        <div className="rounded-2xl border border-[#22222e] bg-[#0e0e12] p-12 text-center text-xs text-[#a1a1aa]">
          No registered users in Sanity yet.
        </div>
      ) : (
        <div className="grid gap-4 md:grid-cols-2">
          {users.map((usr) => (
            <div key={usr._id} className="rounded-2xl border border-[#22222e] bg-[#0e0e12] p-5 space-y-3 glass-panel text-xs">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#ff003c] text-white font-extrabold text-sm">
                    {(usr.name || '?').substring(0, 2).toUpperCase()}
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-extrabold text-white text-sm truncate">{usr.name}</h3>
                    <span className="text-[11px] text-[#a1a1aa] truncate block">{usr.email}</span>
                  </div>
                </div>
                <RoleSelect id={usr._id} role={usr.role} />
              </div>

              <div className="pt-2 border-t border-[#1f1f2b] flex items-center justify-between text-[#a1a1aa]">
                <span className="capitalize">
                  {usr.city ? `${usr.city}${usr.phone ? ' · ' + usr.phone : ''}` : usr.phone || 'No location'}
                </span>
                <span
                  className={`flex items-center gap-1 font-bold ${
                    usr.role === 'super admin' ? 'text-[#ff003c]' : usr.role === 'staff' ? 'text-[#3b82f6]' : 'text-[#a1a1aa]'
                  }`}
                >
                  <Shield className="h-3.5 w-3.5" /> {usr.role === 'super admin' ? 'Super Admin' : usr.role === 'staff' ? 'Staff' : 'Customer'}
                </span>
              </div>

              <div className="flex justify-end">
                <DeleteUserButton id={usr._id} label="Remove User" />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}