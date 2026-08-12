'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { adminUpdateProduct } from '@/app/admin/actions';
import { Save, Loader2, AlertCircle, CheckCircle2 } from 'lucide-react';
import type { Product } from '@/sanity/lib/data';

export function ProductEditForm({ product }: { product: Product }) {
  const router = useRouter();
  const [form, setForm] = useState({
    name: product.name,
    brand: product.brand,
    category: String(product.category),
    price: String(product.price),
    discountPrice: product.discountPrice ? String(product.discountPrice) : '',
    stock: String(product.stock ?? 15),
    isFeatured: !!product.isFeatured,
    description: product.description || '',
    imageUrl: product.imageUrl || '',
    specs: (product.specs || []).join(', '),
  });

  const [saving, setSaving] = useState(false);
  const [status, setStatus] = useState<'idle' | 'saved' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setStatus('idle');

    const res = await adminUpdateProduct(product.id, {
      name: form.name,
      brand: form.brand,
      category: form.category,
      price: Number(form.price),
      discountPrice: form.discountPrice ? Number(form.discountPrice) : undefined,
      stock: Number(form.stock) || 15,
      isFeatured: form.isFeatured,
      description: form.description,
      imageUrl: form.imageUrl,
      specs: form.specs.split(',').map((s) => s.trim()).filter(Boolean),
    });

    setSaving(false);
    setStatus(res.ok ? 'saved' : 'error');
    if (res.ok) {
      router.refresh();
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl border border-[#22222e] bg-[#0e0e12] p-6 space-y-6 glass-panel">
      {status === 'saved' && (
        <div className="flex items-center gap-2 rounded-xl border border-[#22c55e]/40 bg-[#22c55e]/10 p-3 text-xs font-bold text-[#22c55e]">
          <CheckCircle2 className="h-4 w-4" /> Product updated in Sanity.
        </div>
      )}
      {status === 'error' && (
        <div className="flex items-center gap-2 rounded-xl border border-[#ef4444]/40 bg-[#ef4444]/10 p-3 text-xs font-bold text-[#ef4444]">
          <AlertCircle className="h-4 w-4" /> Could not update product.
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
        <div>
          <label className="block font-bold text-[#a1a1aa] mb-1">Product Name</label>
          <input
            type="text"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full rounded-xl border border-[#22222e] bg-[#050505] p-3 text-xs text-white outline-none focus:border-[#ff003c]"
          />
        </div>

        <div>
          <label className="block font-bold text-[#a1a1aa] mb-1">Brand</label>
          <input
            type="text"
            required
            value={form.brand}
            onChange={(e) => setForm({ ...form, brand: e.target.value })}
            className="w-full rounded-xl border border-[#22222e] bg-[#050505] p-3 text-xs text-white outline-none focus:border-[#ff003c]"
          />
        </div>

        <div>
          <label className="block font-bold text-[#a1a1aa] mb-1">Category</label>
          <select
            value={form.category}
            onChange={(e) => setForm({ ...form, category: e.target.value })}
            className="w-full rounded-xl border border-[#22222e] bg-[#050505] p-3 text-xs text-white outline-none focus:border-[#ff003c]"
          >
            {['computers', 'laptops', 'mobiles', 'chargers', 'parts', 'monitors', 'accessories', 'networking'].map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block font-bold text-[#a1a1aa] mb-1">Price (Base)</label>
          <input
            type="number"
            required
            value={form.price}
            onChange={(e) => setForm({ ...form, price: e.target.value })}
            className="w-full rounded-xl border border-[#22222e] bg-[#050505] p-3 text-xs text-white outline-none focus:border-[#ff003c]"
          />
        </div>

        <div>
          <label className="block font-bold text-[#a1a1aa] mb-1">Original / Scratch Price</label>
          <input
            type="number"
            value={form.discountPrice}
            onChange={(e) => setForm({ ...form, discountPrice: e.target.value })}
            className="w-full rounded-xl border border-[#22222e] bg-[#050505] p-3 text-xs text-white outline-none focus:border-[#ff003c]"
          />
        </div>

        <div>
          <label className="block font-bold text-[#a1a1aa] mb-1">Stock Quantity</label>
          <input
            type="number"
            value={form.stock}
            onChange={(e) => setForm({ ...form, stock: e.target.value })}
            className="w-full rounded-xl border border-[#22222e] bg-[#050505] p-3 text-xs text-white outline-none focus:border-[#ff003c]"
          />
        </div>
      </div>

      <label className="flex items-center gap-2 text-xs font-bold text-[#a1a1aa]">
        <input
          type="checkbox"
          checked={form.isFeatured}
          onChange={(e) => setForm({ ...form, isFeatured: e.target.checked })}
          className="h-4 w-4 accent-[#ff003c]"
        />
        Featured Product
      </label>

      <div className="text-xs">
        <label className="block font-bold text-[#a1a1aa] mb-1">Local Product Image Path</label>
        <input
          type="text"
          value={form.imageUrl}
          onChange={(e) => setForm({ ...form, imageUrl: e.target.value })}
          className="w-full rounded-xl border border-[#22222e] bg-[#050505] p-3 text-xs text-white outline-none focus:border-[#ff003c]"
        />
      </div>

      <div className="text-xs">
        <label className="block font-bold text-[#a1a1aa] mb-1">Description</label>
        <textarea
          rows={4}
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
          className="w-full rounded-xl border border-[#22222e] bg-[#050505] p-3 text-xs text-white outline-none focus:border-[#ff003c]"
        />
      </div>

      <div className="text-xs">
        <label className="block font-bold text-[#a1a1aa] mb-1">Key Specs (Comma-Separated)</label>
        <input
          type="text"
          value={form.specs}
          onChange={(e) => setForm({ ...form, specs: e.target.value })}
          className="w-full rounded-xl border border-[#22222e] bg-[#050505] p-3 text-xs text-white outline-none focus:border-[#ff003c]"
        />
      </div>

      <div className="flex justify-end border-t border-[#1f1f2b] pt-4">
        <button
          type="submit"
          disabled={saving}
          className="red-gradient-btn flex items-center gap-2 rounded-xl px-6 py-3 text-xs font-bold text-white shadow-xl shadow-[#ff003c]/25 disabled:opacity-60"
        >
          {saving ? <Loader2 className="h-4 w-4 animate-spin" /> : <Save className="h-4 w-4" />}
          {saving ? 'Saving to Sanity...' : 'Save Updated Product'}
        </button>
      </div>
    </form>
  );
}