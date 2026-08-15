'use client';

import React from 'react';
import { useCart } from '@/app/context/CartContext';
import { Cpu, Laptop, Smartphone, Zap, Wrench, Layers, Monitor, Headphones, Wifi } from 'lucide-react';

const categories = [
  { id: 'all', name: 'All Products', shortName: 'All', icon: Layers },
  { id: 'computers', name: 'Computers & PCs', shortName: 'PCs', icon: Cpu },
  { id: 'laptops', name: 'Laptops', shortName: 'Laptops', icon: Laptop },
  { id: 'mobiles', name: 'Mobiles', shortName: 'Mobiles', icon: Smartphone },
  { id: 'chargers', name: 'Chargers & Power', shortName: 'Power', icon: Zap },
  { id: 'parts', name: 'Parts & Components', shortName: 'Parts', icon: Wrench },
  { id: 'monitors', name: 'Monitors & Displays', shortName: 'Displays', icon: Monitor },
  { id: 'accessories', name: 'Gaming Accessories', shortName: 'Gaming', icon: Headphones },
  { id: 'networking', name: 'Networking & Storage', shortName: 'Network', icon: Wifi },
];

export function CategoryFilter() {
  const { selectedCategory, setSelectedCategory, searchQuery } = useCart();

  return (
    <div
      className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide snap-x snap-mandatory lg:flex-wrap lg:justify-center lg:overflow-visible"
      role="group"
      aria-label="Product categories"
    >
      {categories.map((cat) => {
        const Icon = cat.icon;
        const isActive = selectedCategory === cat.id && !searchQuery;
        return (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`group relative flex items-center gap-2 rounded-xl px-4 py-2.5 text-[13px] font-semibold transition-all duration-300 border snap-start shrink-0 ${
              isActive
                ? 'border-[#3B82F6]/60 bg-[#3B82F6]/[0.12] text-white shadow-[0_0_16px_rgba(59,130,246,0.15)]'
                : 'border-white/[0.06] bg-white/[0.025] text-[#94A3B8] hover:border-white/[0.1] hover:bg-white/[0.04] hover:text-white'
            }`}
            aria-pressed={isActive}
          >
            <Icon className={`h-4 w-4 transition-colors duration-300 ${isActive ? 'text-[#3B82F6]' : 'text-[#475569] group-hover:text-[#94A3B8]'}`} />
            <span className="hidden sm:inline">{cat.name}</span>
            <span className="sm:hidden">{cat.shortName}</span>
          </button>
        );
      })}
    </div>
  );
}
