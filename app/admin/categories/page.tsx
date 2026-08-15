import React from 'react';
import { Layers, Plus, Cpu, Laptop, Smartphone, Zap, Wrench, Monitor, Headphones, Wifi } from 'lucide-react';
import { fetchCategories, fetchProducts } from '@/sanity/lib/fetch';
import { DeleteCategoryButton } from '@/app/admin/admin-buttons';
import { CategoryCreateForm } from '@/app/admin/components/CategoryCreateForm';

export const revalidate = 30;

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  cpu: Cpu,
  laptop: Laptop,
  smartphone: Smartphone,
  mobile: Smartphone,
  zap: Zap,
  charger: Zap,
  wrench: Wrench,
  part: Wrench,
  monitor: Monitor,
  headphones: Headphones,
  wifi: Wifi,
};

export default async function AdminCategoriesPage() {
  const [categories, products] = await Promise.all([fetchCategories(), fetchProducts()]);

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-2xl border border-[#22222e] bg-[#0e0e12] p-6 glass-panel">
        <div>
          <span className="text-xs font-extrabold text-[#3B82F6] uppercase tracking-widest">
            TAXONOMY CONTROL
          </span>
          <h1 className="text-2xl font-black text-white">CATEGORY DEPARTMENTS ({categories.length})</h1>
          <p className="text-xs text-[#a1a1aa] mt-0.5">Categories synced from Sanity, with real product counts.</p>
        </div>

        <div className="w-full sm:max-w-lg">
          <CategoryCreateForm />
        </div>
      </div>

      {categories.length === 0 ? (
        <div className="rounded-2xl border border-[#22222e] bg-[#0e0e12] p-12 text-center text-xs text-[#a1a1aa]">
          No categories in Sanity yet. Create one above and it will appear in Sanity Studio.
        </div>
      ) : (
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {categories.map((cat) => {
          const Icon = ICON_MAP[cat.icon] || Layers;
          const count = products.filter((p) => p.category === cat.slug).length;
          return (
            <div key={cat._id} className="rounded-2xl border border-[#22222e] bg-[#0e0e12] p-5 space-y-3 glass-panel">
              <div className="flex items-center justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#3B82F6] text-white">
                  <Icon className="h-5 w-5" />
                </div>
                <DeleteCategoryButton id={cat._id} />
              </div>

              <div>
                <h3 className="font-black text-white text-sm">{cat.title}</h3>
                <p className="text-[11px] text-[#a1a1aa] capitalize mt-0.5">/{cat.slug}</p>
              </div>

              <div className="flex items-center justify-between border-t border-[#1f1f2b] pt-3 text-xs">
                <span className="text-[#a1a1aa]">Product Count</span>
                <span className="font-black text-[#3B82F6]">{count}</span>
              </div>
            </div>
          );
        })}
      </div>
      )}
    </div>
  );
}