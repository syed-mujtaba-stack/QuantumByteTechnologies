'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product, ITService } from '@/sanity/lib/data';

export interface CartItem {
  product: Product;
  quantity: number;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, delta: number) => void;
  clearCart: () => void;
  cartCount: number;
  cartTotal: number;
  
  // Cart Drawer State
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  
  // Product Detail Modal State
  activeProductDetail: Product | null;
  openProductDetail: (product: Product) => void;
  closeProductDetail: () => void;
  
  // Checkout Modal State
  isCheckoutOpen: boolean;
  openCheckout: () => void;
  closeCheckout: () => void;
  
  // IT Service Booking Modal State
  isBookingOpen: boolean;
  activeServiceBooking: ITService | null;
  openBooking: (service?: ITService) => void;
  closeBooking: () => void;
  
  // Filtering & Search
  selectedCategory: string;
  setSelectedCategory: (cat: string) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;

  // Toast notifications
  toastMessage: string | null;
  showToast: (msg: string) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [activeProductDetail, setActiveProductDetail] = useState<Product | null>(null);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [activeServiceBooking, setActiveServiceBooking] = useState<ITService | null>(null);
  
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Load cart from LocalStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem('quantumbyte_cart');
      if (saved) {
        setCart(JSON.parse(saved));
      }
    } catch (e) {
      console.error('Failed to load cart from storage', e);
    }
  }, []);

  // Sync cart to LocalStorage
  useEffect(() => {
    try {
      localStorage.setItem('quantumbyte_cart', JSON.stringify(cart));
    } catch (e) {
      console.error('Failed to save cart to storage', e);
    }
  }, [cart]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  const addToCart = (product: Product, quantity: number = 1) => {
    setCart((prev) => {
      const existingIndex = prev.findIndex((item) => item.product.id === product.id);
      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].quantity += quantity;
        return updated;
      } else {
        return [...prev, { product, quantity }];
      }
    });
    showToast(`Added "${product.name}" to your cart!`);
  };

  const removeFromCart = (productId: string) => {
    setCart((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const updateQuantity = (productId: string, delta: number) => {
    setCart((prev) => {
      return prev
        .map((item) => {
          if (item.product.id === productId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[];
    });
  };

  const clearCart = () => {
    setCart([]);
  };

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
  const cartTotal = cart.reduce((total, item) => total + item.product.price * item.quantity, 0);

  const openProductDetail = (product: Product) => {
    setActiveProductDetail(product);
  };

  const closeProductDetail = () => {
    setActiveProductDetail(null);
  };

  const openCheckout = () => {
    if (cart.length === 0) {
      showToast('Your cart is empty!');
      return;
    }
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  const closeCheckout = () => {
    setIsCheckoutOpen(false);
  };

  const openBooking = (service?: ITService) => {
    setActiveServiceBooking(service || null);
    setIsBookingOpen(true);
  };

  const closeBooking = () => {
    setIsBookingOpen(false);
    setActiveServiceBooking(null);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartCount,
        cartTotal,
        isCartOpen,
        setIsCartOpen,
        activeProductDetail,
        openProductDetail,
        closeProductDetail,
        isCheckoutOpen,
        openCheckout,
        closeCheckout,
        isBookingOpen,
        activeServiceBooking,
        openBooking,
        closeBooking,
        selectedCategory,
        setSelectedCategory,
        searchQuery,
        setSearchQuery,
        toastMessage,
        showToast,
      }}
    >
      {children}
      {/* Global Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-xl border border-[#ff003c]/40 bg-[#0e0e12] px-5 py-3 text-sm font-semibold text-white shadow-2xl shadow-[#ff003c]/20 backdrop-blur-xl animate-bounce">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff003c] animate-ping" />
          {toastMessage}
        </div>
      )}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
