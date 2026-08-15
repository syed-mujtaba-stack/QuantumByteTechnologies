import React from 'react';
import { Star, CheckCircle2, XCircle, MessageSquare } from 'lucide-react';

export default function AdminReviewsPage() {
  const reviews = [
    { id: 1, author: 'Alex Morgan', product: 'Apple MacBook Pro 16" M3 Max', rating: 5, comment: 'Insane rendering speeds! The M3 Max handles 8K video timelines with zero lag.', status: 'Approved' },
    { id: 2, author: 'Hamza K.', product: 'QuantumByte Cyber Workstation Pro', rating: 5, comment: 'Custom hardline liquid loop tubing and cable routing are immaculate. 10/10 build quality!', status: 'Approved' },
    { id: 3, author: 'Sarah J.', product: 'ASUS ROG Swift PG32UCDM 4K OLED', rating: 5, comment: '240Hz OLED color reproduction is breathtaking for gaming and video editing.', status: 'Approved' },
    { id: 4, author: 'Tariq M.', product: 'Anker Prime 100W GaN Charger', rating: 4, comment: 'Very fast charging for laptop and phone simultaneously. Compact design.', status: 'Pending Review' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-2xl border border-[#22222e] bg-[#0e0e12] p-6 glass-panel">
        <div>
          <span className="text-xs font-extrabold text-[#3B82F6] uppercase tracking-widest">
            FEEDBACK MODERATION
          </span>
          <h1 className="text-2xl font-black text-white">CUSTOMER REVIEWS & RATINGS ({reviews.length})</h1>
        </div>
      </div>

      <div className="space-y-4">
        {reviews.map((r) => (
          <div key={r.id} className="rounded-2xl border border-[#22222e] bg-[#0e0e12] p-5 space-y-3 glass-panel text-xs">
            <div className="flex items-center justify-between">
              <div>
                <span className="font-extrabold text-white text-sm">{r.author}</span>
                <span className="text-[#a1a1aa] text-[11px] block">Reviewed: <strong className="text-[#3B82F6]">{r.product}</strong></span>
              </div>
              <div className="flex items-center gap-1 text-[#F59E0B] font-bold">
                <Star className="h-4 w-4 fill-current" />
                <span>{r.rating}.0</span>
              </div>
            </div>

            <p className="text-[#a1a1aa] bg-[#050505] p-3 rounded-xl border border-[#1f1f2b]">"{r.comment}"</p>

            <div className="flex items-center justify-between pt-2 border-t border-[#1f1f2b]">
              <span className={`inline-flex items-center gap-1 text-[11px] font-bold ${
                r.status === 'Approved' ? 'text-[#22c55e]' : 'text-[#F59E0B]'
              }`}>
                ● {r.status}
              </span>

              <div className="flex items-center gap-2">
                <button className="rounded-lg border border-[#22222e] bg-[#050505] px-3 py-1.5 font-bold text-white hover:border-[#3B82F6]">
                  Approve Review
                </button>
                <button className="rounded-lg border border-[#22222e] bg-[#050505] px-3 py-1.5 font-bold text-[#ef4444] hover:bg-[#ef4444]/10">
                  Reject
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
