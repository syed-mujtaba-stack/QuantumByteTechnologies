'use client';

import React from 'react';
import { useCart } from '@/app/context/CartContext';
import { Cpu, Laptop, Smartphone, Zap, Wrench, Layers, Monitor, Headphones, Wifi } from 'lucide-react';

const categories = [
  { id: 'all',         name: 'All Products',          shortName: 'All',      icon: Layers },
  { id: 'computers',  name: 'Computers & PCs',        shortName: 'PCs',      icon: Cpu },
  { id: 'laptops',    name: 'Laptops',                shortName: 'Laptops',  icon: Laptop },
  { id: 'mobiles',    name: 'Mobiles',                shortName: 'Mobiles',  icon: Smartphone },
  { id: 'chargers',   name: 'Chargers & Power',       shortName: 'Power',    icon: Zap },
  { id: 'parts',      name: 'Parts & Components',     shortName: 'Parts',    icon: Wrench },
  { id: 'monitors',   name: 'Monitors & Displays',    shortName: 'Displays', icon: Monitor },
  { id: 'accessories',name: 'Gaming Accessories',     shortName: 'Gaming',   icon: Headphones },
  { id: 'networking', name: 'Networking & Storage',   shortName: 'Network',  icon: Wifi },
];

export function CategoryFilter() {
  const { selectedCategory, setSelectedCategory, searchQuery } = useCart();

  return (
    <div
      className="flex gap-2 overflow-x-auto pb-1.5 scrollbar-hide snap-x snap-mandatory lg:flex-wrap lg:justify-start lg:overflow-visible"
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
            aria-pressed={isActive}
            className={`group flex items-center gap-1.5 h-9 rounded-xl px-3.5 text-[12.5px] font-semibold transition-all duration-200 border snap-start shrink-0 ${
              isActive
                ? 'border-[#3B82F6]/50 bg-[#3B82F6]/[0.1] text-white shadow-[0_0_12px_rgba(59,130,246,0.12)]'
                : 'border-white/[0.06] bg-white/[0.025] text-[#94A3B8] hover:border-white/[0.1] hover:bg-white/[0.04] hover:text-white'
            }`}
          >
            <Icon className={`h-3.5 w-3.5 shrink-0 transition-colors duration-200 ${isActive ? 'text-[#3B82F6]' : 'text-[#475569] group-hover:text-[#94A3B8]'}`} />
            <span className="hidden sm:inline leading-none">{cat.name}</span>
            <span className="sm:hidden leading-none">{cat.shortName}</span>
          </button>
        );
      })}
    </div>
  );
}
