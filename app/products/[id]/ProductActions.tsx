'use client';

import React, { useState } from 'react';
import { Product } from '@/sanity/lib/data';
import { useCart } from '@/app/context/CartContext';
import { useWishlist } from '@/app/context/WishlistContext';
import { ShoppingBag, Heart, Scale, Plus, Minus } from 'lucide-react';

export function ProductActions({ product }: { product: Product }) {
  const { addToCart, openCheckout } = useCart();
  const { addToWishlist, isInWishlist, addToCompare, isInCompare } = useWishlist();
  const [quantity, setQuantity] = useState(1);

  const handleBuyNow = () => {
    addToCart(product, quantity);
    openCheckout();
  };

  return (
    <div className="space-y-4 pt-4 border-t border-[#1f1f2b]">
      {/* Quantity Picker */}
      <div className="flex items-center justify-between">
        <span className="text-xs font-bold text-[#a1a1aa]">Select Quantity:</span>
        <div className="flex items-center gap-3 rounded-xl border border-[#22222e] bg-[#0e0e12] px-4 py-2">
          <button
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="text-[#a1a1aa] hover:text-white"
          >
            <Minus className="h-3.5 w-3.5" />
          </button>
          <span className="text-sm font-bold text-white min-w-4 text-center">{quantity}</span>
          <button
            onClick={() => setQuantity(quantity + 1)}
            className="text-[#a1a1aa] hover:text-white"
          >
            <Plus className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>

      {/* Cart & Buy Buttons */}
      <div className="grid grid-cols-2 gap-3">
        <button
          onClick={() => addToCart(product, quantity)}
          className="flex items-center justify-center gap-2 rounded-xl border border-[#ff003c]/50 bg-[#16161f] py-3.5 text-xs font-bold text-white transition hover:bg-[#ff003c]/20"
        >
          <ShoppingBag className="h-4 w-4 text-[#ff003c]" />
          Add to Cart
        </button>

        <button
          onClick={handleBuyNow}
          className="red-gradient-btn flex items-center justify-center gap-2 rounded-xl py-3.5 text-xs font-extrabold text-white shadow-xl shadow-[#ff003c]/25"
        >
          Buy Now
        </button>
      </div>

      {/* Wishlist & Compare Quick Toggles */}
      <div className="grid grid-cols-2 gap-3 pt-2">
        <button
          onClick={() => addToWishlist(product)}
          className={`flex items-center justify-center gap-2 rounded-xl border py-2.5 text-xs font-bold transition ${
            isInWishlist(product.id)
              ? 'border-[#ff003c] bg-[#ff003c]/20 text-[#ff003c]'
              : 'border-[#22222e] bg-[#0e0e12] text-[#a1a1aa] hover:text-white hover:border-[#ff003c]'
          }`}
        >
          <Heart className={`h-4 w-4 ${isInWishlist(product.id) ? 'fill-current text-[#ff003c]' : ''}`} />
          {isInWishlist(product.id) ? 'In Wishlist' : 'Add to Wishlist'}
        </button>

        <button
          onClick={() => addToCompare(product)}
          className={`flex items-center justify-center gap-2 rounded-xl border py-2.5 text-xs font-bold transition ${
            isInCompare(product.id)
              ? 'border-[#ff003c] bg-[#ff003c]/20 text-[#ff003c]'
              : 'border-[#22222e] bg-[#0e0e12] text-[#a1a1aa] hover:text-white hover:border-[#ff003c]'
          }`}
        >
          <Scale className="h-4 w-4" />
          {isInCompare(product.id) ? 'Comparing' : 'Add to Compare'}
        </button>
      </div>
    </div>
  );
}
