'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { adminCreateProduct } from '@/app/admin/actions';
import { Package, Save, ArrowLeft, Loader2, AlertCircle, CheckCircle2 } from 'lucide-react';

export default function AddProductPage() {
  const router = useRouter();
  const [form, setForm] = useState({
    name: '',
    brand: '',
    category: 'computers',
    price: '',
    discountPrice: '',
    stock: '15',
    description: '',
    specs: '',
    imageUrl: '',
  });
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSaving(true);

    const res = await adminCreateProduct({
      name: form.name,
      brand: form.brand,
      category: form.category,
      price: Number(form.price),
      discountPrice: form.discountPrice ? Number(form.discountPrice) : undefined,
      stock: Number(form.stock) || 15,
      description: form.description,
      imageUrl: form.imageUrl,
      specs: form.specs.split(',').map((s) => s.trim()).filter(Boolean),
    });

    setSaving(false);

    if (res.ok) {
      router.push('/admin/products');
      router.refresh();
    } else {
      setError(res.error || 'Could not save product to Sanity.');
    }
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div className="flex items-center justify-between border-b border-[#1f1f2b] pb-4">
        <div>
          <Link href="/admin/products" className="text-xs text-[#a1a1aa] hover:text-white flex items-center gap-1 mb-1">
            <ArrowLeft className="h-3.5 w-3.5 text-[#ff003c]" /> Back to Products List
          </Link>
          <h1 className="text-2xl font-black text-white flex items-center gap-2">
            <Package className="h-6 w-6 text-[#ff003c]" /> ADD NEW PRODUCT
          </h1>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="rounded-2xl border border-[#22222e] bg-[#0e0e12] p-6 space-y-6 glass-panel">
        {error && (
          <div className="flex items-center gap-2 rounded-xl border border-[#ef4444]/40 bg-[#ef4444]/10 p-3 text-xs font-bold text-[#ef4444]">
            <AlertCircle className="h-4 w-4" /> {error}
          </div>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
          <div>
            <label className="block font-bold text-[#a1a1aa] mb-1">Product Name *</label>
            <input
              type="text"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="e.g. Apple MacBook Pro 16-inch M3 Max"
              className="w-full rounded-xl border border-[#22222e] bg-[#050505] p-3 text-xs text-white outline-none focus:border-[#ff003c]"
            />
          </div>

          <div>
            <label className="block font-bold text-[#a1a1aa] mb-1">Brand / Manufacturer *</label>
            <input
              type="text"
              required
              value={form.brand}
              onChange={(e) => setForm({ ...form, brand: e.target.value })}
              placeholder="e.g. Apple, ASUS, Samsung, Anker"
              className="w-full rounded-xl border border-[#22222e] bg-[#050505] p-3 text-xs text-white outline-none focus:border-[#ff003c]"
            />
          </div>

          <div>
            <label className="block font-bold text-[#a1a1aa] mb-1">Department Category *</label>
            <select
              value={form.category}
              onChange={(e) => setForm({ ...form, category: e.target.value })}
              className="w-full rounded-xl border border-[#22222e] bg-[#050505] p-3 text-xs text-white outline-none focus:border-[#ff003c]"
            >
              <option value="computers">Computers & Workstations</option>
              <option value="laptops">Laptops & Ultrabooks</option>
              <option value="mobiles">Flagship Smartphones</option>
              <option value="chargers">GaN Chargers & Power</option>
              <option value="parts">GPUs & Components</option>
              <option value="monitors">Monitors & Displays</option>
              <option value="accessories">Gaming Accessories</option>
              <option value="networking">Networking & Storage</option>
            </select>
          </div>

          <div>
            <label className="block font-bold text-[#a1a1aa] mb-1">Retail Price (Rs.) *</label>
            <input
              type="number"
              required
              value={form.price}
              onChange={(e) => setForm({ ...form, price: e.target.value })}
              placeholder="1299"
              className="w-full rounded-xl border border-[#22222e] bg-[#050505] p-3 text-xs text-white outline-none focus:border-[#ff003c]"
            />
          </div>

          <div>
            <label className="block font-bold text-[#a1a1aa] mb-1">Original Price / Scratch (Rs.)</label>
            <input
              type="number"
              value={form.discountPrice}
              onChange={(e) => setForm({ ...form, discountPrice: e.target.value })}
              placeholder="1499"
              className="w-full rounded-xl border border-[#22222e] bg-[#050505] p-3 text-xs text-white outline-none focus:border-[#ff003c]"
            />
          </div>

          <div>
            <label className="block font-bold text-[#a1a1aa] mb-1">Stock Quantity *</label>
            <input
              type="number"
              required
              value={form.stock}
              onChange={(e) => setForm({ ...form, stock: e.target.value })}
              className="w-full rounded-xl border border-[#22222e] bg-[#050505] p-3 text-xs text-white outline-none focus:border-[#ff003c]"
            />
          </div>
        </div>

        <div className="text-xs">
          <label className="block font-bold text-[#a1a1aa] mb-1">Detailed Product Description</label>
          <textarea
            rows={4}
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
            placeholder="Write complete product specs, features, and warranty details..."
            className="w-full rounded-xl border border-[#22222e] bg-[#050505] p-3 text-xs text-white outline-none focus:border-[#ff003c]"
          />
        </div>

        <div className="text-xs">
          <label className="block font-bold text-[#a1a1aa] mb-1">Key Specs (Comma-Separated)</label>
          <input
            type="text"
            value={form.specs}
            onChange={(e) => setForm({ ...form, specs: e.target.value })}
            placeholder="M3 Max Chip, 36GB RAM, 1TB SSD, 16.2 Inch Liquid Retina XDR"
            className="w-full rounded-xl border border-[#22222e] bg-[#050505] p-3 text-xs text-white outline-none focus:border-[#ff003c]"
          />
        </div>

        <div className="text-xs">
          <label className="block font-bold text-[#a1a1aa] mb-1">Local Product Image Path (Optional)</label>
          <input
            type="text"
            value={form.imageUrl}
            onChange={(e) => setForm({ ...form, imageUrl: e.target.value })}
            placeholder="/images/computers/quantumbyte_custom_rig.jpg"
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
            {saving ? 'Publishing to Sanity...' : 'Save & Publish Product'}
          </button>
        </div>
      </form>
    </div>
  );
}
