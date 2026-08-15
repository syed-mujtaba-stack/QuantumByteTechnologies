'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Navbar } from '@/app/components/Navbar';
import { Footer } from '@/app/components/Footer';
import { useWishlist } from '@/app/context/WishlistContext';
import { useCart } from '@/app/context/CartContext';
import { formatPKR } from '@/sanity/lib/currency';
import { Heart, Trash2, ShoppingBag, ChevronRight, Star } from 'lucide-react';

export default function WishlistPage() {
  const { wishlist, removeFromWishlist, clearWishlist } = useWishlist();
  const { addToCart } = useCart();

  return (
    <div className="min-h-screen bg-[#050505] text-white flex flex-col font-sans selection:bg-[#3B82F6] selection:text-white">
      <Navbar />

      <main className="flex-1 py-10 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="mb-6 flex items-center gap-2 text-xs text-[#a1a1aa]">
            <Link href="/" className="hover:text-white">Home</Link>
            <ChevronRight className="h-3 w-3 text-[#3B82F6]" />
            <span className="text-white font-bold">Wishlist</span>
          </div>

          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-black text-white sm:text-4xl flex items-center gap-3">
              <Heart className="h-7 w-7 text-[#3B82F6] fill-current" />
              SAVED <span className="text-[#3B82F6]">WISHLIST</span> ({wishlist.length})
            </h1>

            {wishlist.length > 0 && (
              <button
                onClick={clearWishlist}
                className="text-xs text-[#71717a] hover:text-[#3B82F6] underline"
              >
                Clear All Saved Items
              </button>
            )}
          </div>

          {wishlist.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {wishlist.map((product) => (
                <div
                  key={product.id}
                  className="group relative flex flex-col justify-between rounded-2xl border border-[#22222e] bg-[#0e0e12] p-4 transition hover:border-[#3B82F6]/60 glass-panel"
                >
                  <div className="space-y-3">
                    {/* Image */}
                    <div className="relative h-48 w-full overflow-hidden rounded-xl bg-[#050505] p-2">
                      <Image
                        src={product.imageUrl}
                        alt={product.name}
                        fill
                        sizes="300px"
                        className="object-cover rounded-lg group-hover:scale-105 transition duration-500"
                      />
                      <button
                        onClick={() => removeFromWishlist(product.id)}
                        className="absolute top-2 right-2 rounded-full bg-[#050505]/80 p-2 text-[#3B82F6] hover:bg-[#3B82F6] hover:text-white transition"
                        title="Remove from wishlist"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>

                    <div>
                      <span className="text-[10px] font-extrabold text-[#3B82F6] uppercase">{product.brand}</span>
                      <h3 className="text-sm font-bold text-white line-clamp-1">{product.name}</h3>
                      <div className="flex items-center gap-1 text-xs text-[#F59E0B] mt-1">
                        <Star className="h-3.5 w-3.5 fill-current" />
                        <span className="font-bold text-white">{product.rating}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-[#1f1f2b] flex items-center justify-between">
                    <span className="text-lg font-black text-white">{formatPKR(product.price)}</span>
                    <button
                      onClick={() => {
                        addToCart(product);
                        removeFromWishlist(product.id);
                      }}
                      className="red-gradient-btn flex items-center gap-1.5 rounded-xl px-3.5 py-2 text-xs font-bold text-white shadow-lg shadow-[#3B82F6]/20"
                    >
                      <ShoppingBag className="h-3.5 w-3.5" />
                      Move to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 rounded-2xl border border-dashed border-[#22222e] bg-[#0e0e12] space-y-4">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#16161f] text-[#3B82F6]">
                <Heart className="h-8 w-8" />
              </div>
              <h2 className="text-xl font-bold text-white">Your Wishlist is Empty</h2>
              <p className="text-xs text-[#a1a1aa] max-w-sm mx-auto">
                Explore our tech store and click the heart icon on any product to save it here for later.
              </p>
              <Link href="/shop" className="inline-block red-gradient-btn rounded-xl px-6 py-3 text-xs font-extrabold text-white shadow-lg shadow-[#3B82F6]/30">
                Explore Tech Catalog
              </Link>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
