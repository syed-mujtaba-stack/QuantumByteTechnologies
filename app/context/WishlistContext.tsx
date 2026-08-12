'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product } from '@/sanity/lib/data';
import { useCart } from './CartContext';

interface WishlistContextType {
  wishlist: Product[];
  addToWishlist: (product: Product) => void;
  removeFromWishlist: (productId: string) => void;
  isInWishlist: (productId: string) => boolean;
  clearWishlist: () => void;
  
  // Compare State
  compareList: Product[];
  addToCompare: (product: Product) => void;
  removeFromCompare: (productId: string) => void;
  isInCompare: (productId: string) => boolean;
  clearCompare: () => void;
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

export function WishlistProvider({ children }: { children: React.ReactNode }) {
  const [wishlist, setWishlist] = useState<Product[]>([]);
  const [compareList, setCompareList] = useState<Product[]>([]);
  const { showToast } = useCart();

  useEffect(() => {
    try {
      const savedW = localStorage.getItem('quantumbyte_wishlist');
      if (savedW) setWishlist(JSON.parse(savedW));

      const savedC = localStorage.getItem('quantumbyte_compare');
      if (savedC) setCompareList(JSON.parse(savedC));
    } catch (e) {
      console.error(e);
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem('quantumbyte_wishlist', JSON.stringify(wishlist));
    } catch (e) {
      console.error(e);
    }
  }, [wishlist]);

  useEffect(() => {
    try {
      localStorage.setItem('quantumbyte_compare', JSON.stringify(compareList));
    } catch (e) {
      console.error(e);
    }
  }, [compareList]);

  const addToWishlist = (product: Product) => {
    if (!isInWishlist(product.id)) {
      setWishlist((prev) => [...prev, product]);
      showToast(`Added "${product.name}" to your wishlist!`);
    } else {
      removeFromWishlist(product.id);
    }
  };

  const removeFromWishlist = (productId: string) => {
    setWishlist((prev) => prev.filter((item) => item.id !== productId));
    showToast('Removed item from wishlist.');
  };

  const isInWishlist = (productId: string) => {
    return wishlist.some((item) => item.id === productId);
  };

  const clearWishlist = () => setWishlist([]);

  const addToCompare = (product: Product) => {
    if (compareList.length >= 4 && !isInCompare(product.id)) {
      showToast('You can compare a maximum of 4 products at once.');
      return;
    }
    if (!isInCompare(product.id)) {
      setCompareList((prev) => [...prev, product]);
      showToast(`Added "${product.name}" to comparison matrix.`);
    } else {
      removeFromCompare(product.id);
    }
  };

  const removeFromCompare = (productId: string) => {
    setCompareList((prev) => prev.filter((item) => item.id !== productId));
  };

  const isInCompare = (productId: string) => {
    return compareList.some((item) => item.id === productId);
  };

  const clearCompare = () => setCompareList([]);

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        addToWishlist,
        removeFromWishlist,
        isInWishlist,
        clearWishlist,
        compareList,
        addToCompare,
        removeFromCompare,
        isInCompare,
        clearCompare,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error('useWishlist must be used within a WishlistProvider');
  }
  return context;
}
