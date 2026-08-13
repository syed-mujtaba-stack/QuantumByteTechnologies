'use client';

import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { CheckCircle2, Info, AlertTriangle, X } from 'lucide-react';
import { Product, ITService } from '@/sanity/lib/data';

export type ToastType = 'success' | 'info' | 'warning';

export interface ToastItem {
  id: number;
  message: string;
  type: ToastType;
}

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
  toasts: ToastItem[];
  showToast: (msg: string, type?: ToastType) => void;
  dismissToast: (id: number) => void;
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
  const [toasts, setToasts] = useState<ToastItem[]>([]);

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

  const dismissToast = useCallback((id: number) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const showToast = useCallback((msg: string, type: ToastType = 'success') => {
    const id = Date.now() + Math.random();
    setToasts((prev) => [...prev.slice(-3), { id, message: msg, type }]);
    setTimeout(() => {
      dismissToast(id);
    }, 3500);
  }, [dismissToast]);

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
        toasts,
        showToast,
        dismissToast,
      }}
    >
      {children}
      {/* Global Toast Notifications */}
      <div className="fixed right-4 top-24 z-[80] flex w-[calc(100vw-2rem)] max-w-sm flex-col gap-2.5">
        {toasts.map((toast) => {
          const isWarning = toast.type === 'warning';
          const isInfo = toast.type === 'info';
          const Icon = isWarning ? AlertTriangle : isInfo ? Info : CheckCircle2;
          return (
            <div
              key={toast.id}
              role="status"
              className={`qb-toast-in flex items-start gap-3 rounded-xl border bg-[#0e0e12]/95 px-4 py-3 text-xs font-semibold text-white shadow-2xl backdrop-blur-xl ${
                isWarning
                  ? 'border-[#f59e0b]/50 shadow-[#f59e0b]/10'
                  : isInfo
                  ? 'border-[#3b82f6]/50 shadow-[#3b82f6]/10'
                  : 'border-[#22c55e]/50 shadow-[#22c55e]/10'
              }`}
            >
              <Icon className={`h-4 w-4 shrink-0 ${isWarning ? 'text-[#f59e0b]' : isInfo ? 'text-[#3b82f6]' : 'text-[#22c55e]'}`} />
              <span className="flex-1 leading-snug">{toast.message}</span>
              <button
                onClick={() => dismissToast(toast.id)}
                aria-label="Dismiss notification"
                className="text-[#71717a] transition hover:text-white"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            </div>
          );
        })}
      </div>
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
