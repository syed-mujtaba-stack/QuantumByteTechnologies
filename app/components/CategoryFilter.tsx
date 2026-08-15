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
    <div className="flex flex-wrap items-center justify-center gap-2.5" role="group" aria-label="Product categories">
      {categories.map((cat) => {
        const Icon = cat.icon;
        const isActive = selectedCategory === cat.id && !searchQuery;
        return (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`group relative flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition-all duration-300 ${
              isActive
                ? 'border-[#ff003c] bg-[#ff003c] text-white shadow-lg shadow-[#ff003c]/30'
                : 'border-[#232330] bg-[#08080c] text-[#9c9ca8] hover:border-[#ff003c]/50 hover:bg-[#14141a] hover:text-white hover:shadow-md hover:shadow-[#ff003c]/10'
            }`}
            aria-pressed={isActive}
          >
            <Icon className={`h-4.5 w-4.5 transition-transform group-hover:scale-110 ${isActive ? 'text-white' : 'text-[#ff003c]'}`} />
            <span className="hidden sm:inline">{cat.name}</span>
          </button>
        );
      })}
    </div>
  );
}