import React from 'react';
import { Layers, Plus, Edit, Trash2, Cpu, Laptop, Smartphone, Zap, Wrench, Monitor, Headphones, Wifi } from 'lucide-react';
import { fetchProducts } from '@/sanity/lib/fetch';

export const revalidate = 60;

export default async function AdminCategoriesPage() {
  const products = await fetchProducts();

  const categories = [
    { slug: 'computers', name: 'Computers & Workstations', icon: Cpu },
    { slug: 'laptops', name: 'Laptops & Ultrabooks', icon: Laptop },
    { slug: 'mobiles', name: 'Flagship Smartphones', icon: Smartphone },
    { slug: 'chargers', name: 'GaN Chargers & Power Docks', icon: Zap },
    { slug: 'parts', name: 'GPUs & Component Parts', icon: Wrench },
    { slug: 'monitors', name: 'Monitors & Displays', icon: Monitor },
    { slug: 'accessories', name: 'Gaming Accessories', icon: Headphones },
    { slug: 'networking', name: 'Networking & Storage', icon: Wifi },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-2xl border border-[#22222e] bg-[#0e0e12] p-6 glass-panel">
        <div>
          <span className="text-xs font-extrabold text-[#ff003c] uppercase tracking-widest">
            TAXONOMY CONTROL
          </span>
          <h1 className="text-2xl font-black text-white">CATEGORY DEPARTMENTS ({categories.length})</h1>
          <p className="text-xs text-[#a1a1aa] mt-0.5">Manage store categories, slugs, and associated hardware product counts.</p>
        </div>

        <button className="red-gradient-btn flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs font-extrabold text-white shadow-lg shadow-[#ff003c]/25">
          <Plus className="h-4 w-4" /> Create Category
        </button>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {categories.map((cat) => {
          const Icon = cat.icon;
          const count = products.filter((p) => p.category === cat.slug).length;
          return (
            <div key={cat.slug} className="rounded-2xl border border-[#22222e] bg-[#0e0e12] p-5 space-y-3 glass-panel">
              <div className="flex items-center justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#ff003c] text-white">
                  <Icon className="h-5 w-5" />
                </div>
                <span className="rounded bg-[#ff003c]/15 px-2.5 py-1 text-[11px] font-extrabold text-[#ff003c]">
                  {count} Items
                </span>
              </div>

              <div>
                <h3 className="text-base font-extrabold text-white">{cat.name}</h3>
                <span className="text-[11px] font-mono text-[#71717a]">/categories/{cat.slug}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
