'use client';

import React from 'react';
import { useCart } from '@/app/context/CartContext';
import { Cpu, Laptop, Smartphone, Zap, Wrench, Layers, Monitor, Headphones, Wifi } from 'lucide-react';

export function CategoryFilter() {
  const { selectedCategory, setSelectedCategory, searchQuery } = useCart();

  const categories = [
    { id: 'all', name: 'All Products', icon: Layers },
    { id: 'computers', name: 'Computers & PCs', icon: Cpu },
    { id: 'laptops', name: 'Laptops', icon: Laptop },
    { id: 'mobiles', name: 'Mobiles', icon: Smartphone },
    { id: 'chargers', name: 'Chargers & Power', icon: Zap },
    { id: 'parts', name: 'Parts & Components', icon: Wrench },
    { id: 'monitors', name: 'Monitors & Displays', icon: Monitor },
    { id: 'accessories', name: 'Gaming Accessories', icon: Headphones },
    { id: 'networking', name: 'Networking & Storage', icon: Wifi },
  ];

  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      {categories.map((cat) => {
        const Icon = cat.icon;
        const isActive = selectedCategory === cat.id && !searchQuery;
        return (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`group flex items-center gap-2.5 rounded-xl border px-4 py-2.5 text-xs font-bold transition-all duration-300 ${
              isActive
                ? 'border-[#ff003c] bg-[#ff003c] text-white shadow-lg shadow-[#ff003c]/30 scale-105'
                : 'border-[#22222e] bg-[#0e0e12] text-[#a1a1aa] hover:border-[#ff003c]/50 hover:bg-[#16161f] hover:text-white'
            }`}
          >
            <Icon className={`h-4 w-4 transition-transform group-hover:scale-110 ${isActive ? 'text-white' : 'text-[#ff003c]'}`} />
            {cat.name}
          </button>
        );
      })}
    </div>
  );
}
