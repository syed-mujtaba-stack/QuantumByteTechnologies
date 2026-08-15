'use client';

import React from 'react';
import Link from 'next/link';
import { useWishlist } from '@/app/context/WishlistContext';
import { useCart } from '@/app/context/CartContext';
import { formatPKR } from '@/sanity/lib/currency';
import { Heart, Trash2, ShoppingBag } from 'lucide-react';

export default function AccountWishlistPage() {
  const { wishlist, removeFromWishlist, clearWishlist } = useWishlist();
  const { addToCart } = useCart();

  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-[#22222e] bg-[#0e0e12] p-6 space-y-6 glass-panel">
        <div className="flex items-center justify-between border-b border-[#1f1f2b] pb-4">
          <div>
            <h2 className="text-xl font-black text-white flex items-center gap-2">
              <Heart className="h-5 w-5 text-[#3B82F6] fill-current" />
              ACCOUNT WISHLIST ({wishlist.length})
            </h2>
            <p className="text-xs text-[#a1a1aa] mt-0.5">Your saved hardware builds and tech products.</p>
          </div>

          {wishlist.length > 0 && (
            <button onClick={clearWishlist} className="text-xs text-[#71717a] hover:text-[#3B82F6] underline">
              Clear All
            </button>
          )}
        </div>

        {wishlist.length > 0 ? (
          <div className="grid gap-4 md:grid-cols-2">
            {wishlist.map((item) => (
              <div key={item.id} className="flex items-center justify-between rounded-xl border border-[#22222e] bg-[#050505] p-3.5 text-xs">
                <div>
                  <span className="text-[10px] font-bold text-[#3B82F6] uppercase">{item.brand}</span>
                  <h4 className="font-bold text-white line-clamp-1">{item.name}</h4>
                  <span className="text-sm font-black text-white mt-1 block">{formatPKR(item.price)}</span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => {
                      addToCart(item);
                      removeFromWishlist(item.id);
                    }}
                    className="red-gradient-btn flex items-center gap-1 rounded-lg px-3 py-1.5 font-bold text-white shadow-md shadow-[#3B82F6]/20"
                  >
                    <ShoppingBag className="h-3.5 w-3.5" /> Cart
                  </button>
                  <button
                    onClick={() => removeFromWishlist(item.id)}
                    className="rounded-lg border border-[#22222e] bg-[#0e0e12] p-2 text-[#71717a] hover:text-[#3B82F6]"
                  >
                    <Trash2 className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 rounded-xl border border-dashed border-[#22222e] bg-[#050505] space-y-3">
            <Heart className="h-8 w-8 text-[#3B82F6] mx-auto" />
            <p className="text-xs text-[#a1a1aa]">Your saved account wishlist is empty.</p>
            <Link href="/shop" className="inline-block red-gradient-btn rounded-xl px-5 py-2.5 text-xs font-bold text-white">
              Browse Products
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
