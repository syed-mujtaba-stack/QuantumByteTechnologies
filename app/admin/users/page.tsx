import React from 'react';
import { UserCheck, Shield, Plus, Key } from 'lucide-react';

export default function AdminUsersPage() {
  const staff = [
    { id: 'ADM-01', name: 'Zainab Ahmed', role: 'Super Admin', dept: 'Executive Management', email: 'zainab@quantumbyte.tech', status: 'Active' },
    { id: 'ADM-02', name: 'Hamza Khan', role: 'Lead Hardware Engineer', dept: 'Custom PC Lab', email: 'hamza@quantumbyte.tech', status: 'Active' },
    { id: 'ADM-03', name: 'Rohan Sharma', role: 'Inventory Manager', dept: 'Warehouse Logistics', email: 'rohan@quantumbyte.tech', status: 'Active' },
    { id: 'ADM-04', name: 'Sara Ali', role: 'Customer Support Lead', dept: '24/7 Helpdesk', email: 'sara@quantumbyte.tech', status: 'Active' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-2xl border border-[#22222e] bg-[#0e0e12] p-6 glass-panel">
        <div>
          <span className="text-xs font-extrabold text-[#ff003c] uppercase tracking-widest">
            STAFF & ROLES ACCESS
          </span>
          <h1 className="text-2xl font-black text-white">STAFF USERS MANAGEMENT ({staff.length})</h1>
        </div>

        <button className="red-gradient-btn flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs font-extrabold text-white shadow-lg shadow-[#ff003c]/25">
          <Plus className="h-4 w-4" /> Add Staff Member
        </button>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {staff.map((usr) => (
          <div key={usr.id} className="rounded-2xl border border-[#22222e] bg-[#0e0e12] p-5 space-y-3 glass-panel text-xs">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#ff003c] text-white font-extrabold text-sm">
                  {usr.name.substring(0, 2).toUpperCase()}
                </div>
                <div>
                  <h3 className="font-extrabold text-white text-sm">{usr.name}</h3>
                  <span className="text-[11px] text-[#a1a1aa]">{usr.email}</span>
                </div>
              </div>
              <span className="rounded bg-[#22c55e]/15 px-2 py-0.5 text-[10px] font-bold text-[#22c55e]">
                {usr.status}
              </span>
            </div>

            <div className="pt-2 border-t border-[#1f1f2b] flex items-center justify-between text-[#a1a1aa]">
              <span>Department: <strong className="text-white">{usr.dept}</strong></span>
              <span className="flex items-center gap-1 font-bold text-[#ff003c]">
                <Shield className="h-3.5 w-3.5" /> {usr.role}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
