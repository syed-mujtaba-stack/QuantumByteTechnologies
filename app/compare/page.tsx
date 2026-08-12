'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Navbar } from '@/app/components/Navbar';
import { Footer } from '@/app/components/Footer';
import { useWishlist } from '@/app/context/WishlistContext';
import { useCart } from '@/app/context/CartContext';
import { formatPKR } from '@/sanity/lib/currency';
import { Scale, Trash2, ShoppingBag, ChevronRight, Check, Star } from 'lucide-react';

export default function ComparePage() {
  const { compareList, removeFromCompare, clearCompare } = useWishlist();
  const { addToCart } = useCart();

  return (
    <div className="min-h-screen bg-[#050505] text-white flex flex-col font-sans selection:bg-[#ff003c] selection:text-white">
      <Navbar />

      <main className="flex-1 py-10 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="mb-6 flex items-center gap-2 text-xs text-[#a1a1aa]">
            <Link href="/" className="hover:text-white">Home</Link>
            <ChevronRight className="h-3 w-3 text-[#ff003c]" />
            <span className="text-white font-bold">Compare Products</span>
          </div>

          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-black text-white sm:text-4xl flex items-center gap-3">
              <Scale className="h-7 w-7 text-[#ff003c]" />
              PRODUCT <span className="text-[#ff003c]">COMPARISON MATRIX</span> ({compareList.length}/4)
            </h1>

            {compareList.length > 0 && (
              <button
                onClick={clearCompare}
                className="text-xs text-[#71717a] hover:text-[#ff003c] underline"
              >
                Clear Comparison
              </button>
            )}
          </div>

          {compareList.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="w-full border-collapse rounded-2xl border border-[#22222e] bg-[#0e0e12] text-xs">
                <thead>
                  <tr className="border-b border-[#1f1f2b]">
                    <th className="p-4 text-left font-bold text-[#a1a1aa] w-48 bg-[#050505]/50">Specification</th>
                    {compareList.map((item) => (
                      <th key={item.id} className="p-4 text-left font-extrabold text-white min-w-64">
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] text-[#ff003c] uppercase">{item.brand}</span>
                          <button
                            onClick={() => removeFromCompare(item.id)}
                            className="text-[#71717a] hover:text-[#ff003c]"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                        <div className="relative h-36 w-full my-2 overflow-hidden rounded-xl bg-[#050505]">
                          <Image
                            src={item.imageUrl}
                            alt={item.name}
                            fill
                            sizes="200px"
                            className="object-cover"
                          />
                        </div>
                        <h4 className="text-sm font-black text-white line-clamp-1">{item.name}</h4>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#1f1f2b]">
                  <tr>
                    <td className="p-4 font-bold text-[#a1a1aa] bg-[#050505]/50">Price</td>
                    {compareList.map((item) => (
                      <td key={item.id} className="p-4 font-black text-white text-base">
                        {formatPKR(item.price)}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-[#a1a1aa] bg-[#050505]/50">Category</td>
                    {compareList.map((item) => (
                      <td key={item.id} className="p-4 capitalize text-white font-semibold">
                        {item.category}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-[#a1a1aa] bg-[#050505]/50">Rating</td>
                    {compareList.map((item) => (
                      <td key={item.id} className="p-4">
                        <div className="flex items-center gap-1 text-[#ffb800] font-bold">
                          <Star className="h-3.5 w-3.5 fill-current" />
                          <span>{item.rating}</span>
                        </div>
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-[#a1a1aa] bg-[#050505]/50">Stock Availability</td>
                    {compareList.map((item) => (
                      <td key={item.id} className="p-4 text-[#22c55e] font-semibold">
                        In Stock ({item.stock})
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-[#a1a1aa] bg-[#050505]/50">Key Specs</td>
                    {compareList.map((item) => (
                      <td key={item.id} className="p-4 space-y-1">
                        {item.specs?.map((spec, idx) => (
                          <div key={idx} className="flex items-center gap-1.5 text-white text-[11px]">
                            <Check className="h-3 w-3 text-[#ff003c]" />
                            <span>{spec}</span>
                          </div>
                        ))}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-[#a1a1aa] bg-[#050505]/50">Action</td>
                    {compareList.map((item) => (
                      <td key={item.id} className="p-4">
                        <button
                          onClick={() => addToCart(item)}
                          className="red-gradient-btn flex items-center justify-center gap-1.5 w-full rounded-xl py-2.5 text-xs font-bold text-white shadow-lg shadow-[#ff003c]/20"
                        >
                          <ShoppingBag className="h-3.5 w-3.5" />
                          Add to Cart
                        </button>
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          ) : (
            <div className="text-center py-20 rounded-2xl border border-dashed border-[#22222e] bg-[#0e0e12] space-y-4">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#16161f] text-[#ff003c]">
                <Scale className="h-8 w-8" />
              </div>
              <h2 className="text-xl font-bold text-white">No Products Selected for Comparison</h2>
              <p className="text-xs text-[#a1a1aa] max-w-sm mx-auto">
                Browse our hardware shop and click the compare icon on products to see side-by-side technical specs.
              </p>
              <Link href="/shop" className="inline-block red-gradient-btn rounded-xl px-6 py-3 text-xs font-extrabold text-white shadow-lg shadow-[#ff003c]/30">
                Explore Products to Compare
              </Link>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
