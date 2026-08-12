import React from 'react';
import Link from 'next/link';
import { Package, Save, ArrowLeft } from 'lucide-react';
import { fetchProducts } from '@/sanity/lib/fetch';

export const revalidate = 60;

export default async function EditProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = await params;
  const id = resolvedParams.id;
  const products = await fetchProducts();
  const product = products.find((p) => p.id === id) || products[0];

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div className="flex items-center justify-between border-b border-[#1f1f2b] pb-4">
        <div>
          <Link href="/admin/products" className="text-xs text-[#a1a1aa] hover:text-white flex items-center gap-1 mb-1">
            <ArrowLeft className="h-3.5 w-3.5 text-[#ff003c]" /> Back to Products List
          </Link>
          <h1 className="text-2xl font-black text-white flex items-center gap-2">
            <Package className="h-6 w-6 text-[#ff003c]" /> EDIT PRODUCT — <span className="text-[#ff003c] font-mono text-sm">{product.id}</span>
          </h1>
        </div>
      </div>

      <form className="rounded-2xl border border-[#22222e] bg-[#0e0e12] p-6 space-y-6 glass-panel">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
          <div>
            <label className="block font-bold text-[#a1a1aa] mb-1">Product Name</label>
            <input
              type="text"
              defaultValue={product.name}
              className="w-full rounded-xl border border-[#22222e] bg-[#050505] p-3 text-xs text-white outline-none focus:border-[#ff003c]"
            />
          </div>

          <div>
            <label className="block font-bold text-[#a1a1aa] mb-1">Brand</label>
            <input
              type="text"
              defaultValue={product.brand}
              className="w-full rounded-xl border border-[#22222e] bg-[#050505] p-3 text-xs text-white outline-none focus:border-[#ff003c]"
            />
          </div>

          <div>
            <label className="block font-bold text-[#a1a1aa] mb-1">Category</label>
            <input
              type="text"
              defaultValue={product.category}
              className="w-full rounded-xl border border-[#22222e] bg-[#050505] p-3 text-xs text-white outline-none focus:border-[#ff003c]"
            />
          </div>

          <div>
            <label className="block font-bold text-[#a1a1aa] mb-1">Price (Rs.)</label>
            <input
              type="number"
              defaultValue={product.price}
              className="w-full rounded-xl border border-[#22222e] bg-[#050505] p-3 text-xs text-white outline-none focus:border-[#ff003c]"
            />
          </div>

          <div>
            <label className="block font-bold text-[#a1a1aa] mb-1">Stock Quantity</label>
            <input
              type="number"
              defaultValue={product.stock}
              className="w-full rounded-xl border border-[#22222e] bg-[#050505] p-3 text-xs text-white outline-none focus:border-[#ff003c]"
            />
          </div>
        </div>

        <div className="text-xs">
          <label className="block font-bold text-[#a1a1aa] mb-1">Description</label>
          <textarea
            rows={4}
            defaultValue={product.description}
            className="w-full rounded-xl border border-[#22222e] bg-[#050505] p-3 text-xs text-white outline-none focus:border-[#ff003c]"
          />
        </div>

        <div className="flex justify-end border-t border-[#1f1f2b] pt-4">
          <button
            type="submit"
            className="red-gradient-btn flex items-center gap-2 rounded-xl px-6 py-3 text-xs font-bold text-white shadow-xl shadow-[#ff003c]/25"
          >
            <Save className="h-4 w-4" /> Save Updated Product
          </button>
        </div>
      </form>
    </div>
  );
}
