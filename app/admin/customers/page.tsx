import React from 'react';
import { Users, Mail, Phone, MapPin, Award } from 'lucide-react';
import { formatPKR } from '@/sanity/lib/currency';

export default function AdminCustomersPage() {
  const customers = [
    { id: 'CUST-001', name: 'Alex Morgan', email: 'alex.morgan@quantumbyte.tech', phone: '+92 300 9876543', orders: 12, spent: 14820, rank: 'VIP Platinum' },
    { id: 'CUST-002', name: 'Sarah Jenkins', email: 'sarah@tech.io', phone: '+92 321 4567890', orders: 5, spent: 6890, rank: 'Gold' },
    { id: 'CUST-003', name: 'Michael Chang', email: 'm.chang@dev.co', phone: '+92 333 1122334', orders: 3, spent: 5490, rank: 'Gold' },
    { id: 'CUST-004', name: 'Elena Rostova', email: 'elena@design.net', phone: '+92 301 9988776', orders: 8, spent: 9450, rank: 'VIP Platinum' },
  ];

  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-[#22222e] bg-[#0e0e12] p-6 glass-panel">
        <span className="text-xs font-extrabold text-[#3B82F6] uppercase tracking-widest">
          CUSTOMER DIRECTORY
        </span>
        <h1 className="text-2xl font-black text-white">STORE CUSTOMERS ({customers.length})</h1>
      </div>

      <div className="rounded-2xl border border-[#22222e] bg-[#0e0e12] p-6 space-y-4 glass-panel">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="border-b border-[#1f1f2b] text-[#a1a1aa] font-bold">
                <th className="py-3 px-2">Customer ID</th>
                <th className="py-3 px-2">Full Name</th>
                <th className="py-3 px-2">Contact Email</th>
                <th className="py-3 px-2">Phone</th>
                <th className="py-3 px-2">Orders</th>
                <th className="py-3 px-2">Lifetime Spend</th>
                <th className="py-3 px-2">VIP Rank</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#1f1f2b]">
              {customers.map((c) => (
                <tr key={c.id} className="hover:bg-[#16161f]/50 transition">
                  <td className="py-3.5 px-2 font-mono text-[#3B82F6] font-bold">{c.id}</td>
                  <td className="py-3.5 px-2 font-bold text-white">{c.name}</td>
                  <td className="py-3.5 px-2 text-[#a1a1aa]">{c.email}</td>
                  <td className="py-3.5 px-2 text-[#71717a]">{c.phone}</td>
                  <td className="py-3.5 px-2 font-bold text-white">{c.orders} orders</td>
                  <td className="py-3.5 px-2 font-black text-white">{formatPKR(c.spent)}</td>
                  <td className="py-3.5 px-2">
                    <span className="inline-flex items-center gap-1 rounded bg-[#3B82F6]/15 px-2.5 py-0.5 text-[11px] font-extrabold text-[#3B82F6]">
                      <Award className="h-3 w-3" /> {c.rank}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
