import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Package, Plus, Edit, Trash2, Search, Filter, ExternalLink, Star } from 'lucide-react';
import { fetchProducts } from '@/sanity/lib/fetch';
import { formatPKR } from '@/sanity/lib/currency';

export const revalidate = 60;

export default async function AdminProductsPage() {
  const products = await fetchProducts();

  return (
    <div className="space-y-6">
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-2xl border border-[#22222e] bg-[#0e0e12] p-6 glass-panel">
        <div>
          <span className="text-xs font-extrabold text-[#ff003c] uppercase tracking-widest">
            INVENTORY MANAGEMENT
          </span>
          <h1 className="text-2xl font-black text-white">ALL PRODUCTS ({products.length})</h1>
          <p className="text-xs text-[#a1a1aa] mt-0.5">Manage live store catalog, stock quantities, and Sanity documents.</p>
        </div>

        <Link
          href="/admin/products/new"
          className="red-gradient-btn flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs font-extrabold text-white shadow-lg shadow-[#ff003c]/25"
        >
          <Plus className="h-4 w-4" /> Add Product
        </Link>
      </div>

      {/* Products Table Card */}
      <div className="rounded-2xl border border-[#22222e] bg-[#0e0e12] p-6 space-y-4 glass-panel">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="border-b border-[#1f1f2b] text-[#a1a1aa] font-bold">
                <th className="py-3 px-2">Product Name</th>
                <th className="py-3 px-2">Category</th>
                <th className="py-3 px-2">Brand</th>
                <th className="py-3 px-2">Price</th>
                <th className="py-3 px-2">Stock</th>
                <th className="py-3 px-2">Rating</th>
                <th className="py-3 px-2 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#1f1f2b]">
              {products.map((p) => (
                <tr key={p.id} className="hover:bg-[#16161f]/50 transition">
                  <td className="py-3 px-2">
                    <div className="flex items-center gap-3">
                      <div className="relative h-10 w-10 flex-shrink-0 overflow-hidden rounded-lg bg-[#050505]">
                        <Image src={p.imageUrl} alt={p.name} fill sizes="40px" className="object-cover" />
                      </div>
                      <div>
                        <span className="font-bold text-white block line-clamp-1">{p.name}</span>
                        <span className="text-[10px] text-[#71717a]">ID: {p.id.substring(0, 12)}</span>
                      </div>
                    </div>
                  </td>
                  <td className="py-3 px-2 capitalize font-semibold text-[#a1a1aa]">{p.category}</td>
                  <td className="py-3 px-2 font-bold text-white">{p.brand}</td>
                  <td className="py-3 px-2 font-black text-white">{formatPKR(p.price)}</td>
                  <td className="py-3 px-2 font-bold text-[#22c55e]">{p.stock} units</td>
                  <td className="py-3 px-2">
                    <span className="inline-flex items-center gap-1 text-[#ffb800] font-bold">
                      <Star className="h-3 w-3 fill-current" /> {p.rating}
                    </span>
                  </td>
                  <td className="py-3 px-2 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <Link
                        href={`/admin/products/${p.id}`}
                        className="rounded-lg border border-[#22222e] bg-[#050505] p-2 text-white hover:border-[#ff003c]"
                        title="Edit Product"
                      >
                        <Edit className="h-3.5 w-3.5 text-[#ff003c]" />
                      </Link>
                    </div>
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
