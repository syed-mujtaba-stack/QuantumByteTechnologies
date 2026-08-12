'use client';

import React, { useState } from 'react';
import { adminCreateCategory } from '@/app/admin/actions';
import { Plus, Loader2, AlertCircle } from 'lucide-react';

export function CategoryCreateForm() {
  const [form, setForm] = useState({ title: '', icon: '' });
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSaving(true);
    const res = await adminCreateCategory({
      title: form.title,
      icon: form.icon,
    });
    setSaving(false);
    if (res.ok) {
      setForm({ title: '', icon: '' });
    } else {
      setError(res.error || 'Could not create category.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-end gap-3">
      <div className="flex-1">
        <label className="block text-xs font-bold text-[#a1a1aa] mb-1">Category Title</label>
        <input
          type="text"
          required
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          placeholder="e.g. Smart Speakers"
          className="w-full rounded-xl border border-[#22222e] bg-[#050505] p-2.5 text-xs text-white outline-none focus:border-[#ff003c]"
        />
      </div>
      <div className="flex-1">
        <label className="block text-xs font-bold text-[#a1a1aa] mb-1">Icon Name (optional)</label>
        <input
          type="text"
          value={form.icon}
          onChange={(e) => setForm({ ...form, icon: e.target.value })}
          placeholder="cpu, laptop, smartphone, monitor, zap..."
          className="w-full rounded-xl border border-[#22222e] bg-[#050505] p-2.5 text-xs text-white outline-none focus:border-[#ff003c]"
        />
      </div>
      <button
        type="submit"
        disabled={saving}
        className="red-gradient-btn flex items-center gap-1.5 rounded-xl px-4 py-2.5 text-xs font-extrabold text-white shadow-lg shadow-[#ff003c]/25 disabled:opacity-60"
      >
        {saving ? <Loader2 className="h-4 w-4 animate-spin" /> : <Plus className="h-4 w-4" />}
        Create
      </button>
      {error && (
        <p className="flex items-center gap-1 text-[11px] font-bold text-[#ef4444]">
          <AlertCircle className="h-3.5 w-3.5" /> {error}
        </p>
      )}
    </form>
  );
}