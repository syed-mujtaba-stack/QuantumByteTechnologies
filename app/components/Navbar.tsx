'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useCart } from '@/app/context/CartContext';
import { useWishlist } from '@/app/context/WishlistContext';
import { useAuth } from '@/app/context/AuthContext';
import {
  ShoppingBag,
  Search,
  Cpu,
  Laptop,
  Smartphone,
  Zap,
  Wrench,
  Monitor,
  Headphones,
  Wifi,
  Menu,
  X,
  ShieldCheck,
  ChevronDown,
  Heart,
  User,
  LayoutDashboard,
  Sparkles,
  Flame,
  Scale
} from 'lucide-react';

const categoriesList = [
  { id: 'all', label: 'All Catalog', icon: Cpu, href: '/shop' },
  { id: 'computers', label: 'Computers & PCs', icon: Cpu, href: '/categories/computers' },
  { id: 'laptops', label: 'Laptops', icon: Laptop, href: '/categories/laptops' },
  { id: 'mobiles', label: 'Mobiles', icon: Smartphone, href: '/categories/mobiles' },
  { id: 'chargers', label: 'Chargers & Power', icon: Zap, href: '/categories/chargers' },
  { id: 'parts', label: 'Parts & Components', icon: Wrench, href: '/categories/parts' },
  { id: 'monitors', label: 'Monitors & Displays', icon: Monitor, href: '/categories/monitors' },
  { id: 'accessories', label: 'Gaming Accessories', icon: Headphones, href: '/categories/accessories' },
  { id: 'networking', label: 'Networking & Storage', icon: Wifi, href: '/categories/networking' },
];

export function Navbar() {
  const {
    cartCount,
    setIsCartOpen,
    selectedCategory,
    setSelectedCategory,
    searchQuery,
    setSearchQuery,
    openBooking
  } = useCart();

  const { wishlist, compareList } = useWishlist();
  const { user } = useAuth();

  const userInitials = user
    ? user.name.split(' ').map((p) => p[0]).slice(0, 2).join('').toUpperCase()
    : '';

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showCategoryMenu, setShowCategoryMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCategorySelect = (catId: string) => {
    setSelectedCategory(catId);
    setShowCategoryMenu(false);
    setMobileMenuOpen(false);
  };

  const handleMobileCategorySelect = (catId: string) => {
    setSelectedCategory(catId);
    setMobileMenuOpen(false);
  };

  return (
    <header
      ref={headerRef}
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? 'bg-[#030305]/95 backdrop-blur-xl border-b border-[#232330] shadow-xl shadow-[#000000]/50' : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="hidden lg:block border-b border-[#1a1a24] bg-[#050505]/80 backdrop-blur-sm px-4 py-2">
        <div className="mx-auto max-w-7xl flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-2 text-xs font-bold text-white">
              <ShieldCheck className="h-3.5 w-3.5 text-[#ff003c]" />
              Official QuantumByte 100% Genuine Tech Guarantee
            </span>
            <span className="hidden sm:block w-px h-5 bg-[#232330]" />
            <span className="text-xs text-[#6b6b7a]">Express Delivery & 24/7 Technical Support</span>
          </div>
          <div className="flex items-center gap-6">
            <Link href="/deals" className="flex items-center gap-1.5 text-xs font-bold text-[#ff003c] hover:underline transition-colors">
              <Flame className="h-3.5 w-3.5" /> Flash Deals
            </Link>
            <Link href="/about" className="text-xs text-[#6b6b7a] hover:text-white transition-colors">About</Link>
            <Link href="/contact" className="text-xs text-[#6b6b7a] hover:text-white transition-colors">Contact</Link>
            <Link href="/admin" className="flex items-center gap-1 text-xs text-[#6b6b7a] hover:text-[#ff003c] transition-colors">
              <LayoutDashboard className="h-3.5 w-3.5" /> Admin Portal
            </Link>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-18">
          <Link href="/" className="group flex items-center gap-3 flex-shrink-0" aria-label="QuantumByte Technologies Home">
            <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#ff003c] to-[#990024] p-2 shadow-lg shadow-[#ff003c]/20 group-hover:scale-105 transition-transform duration-300">
              <Cpu className="h-6 w-6 text-white" />
              <div className="absolute -inset-0.5 rounded-xl bg-[#ff003c] opacity-30 blur group-hover:opacity-60 transition-opacity duration-300" />
            </div>
            <div className="hidden sm:block flex flex-col">
              <span className="text-lg font-black tracking-tight text-white">
                QUANTUM<span className="text-[#ff003c]">BYTE</span>
              </span>
              <span className="text-[9px] font-bold tracking-widest text-[#6b6b7a] uppercase">Technologies</span>
            </div>
          </Link>

          <div className="hidden lg:flex lg:flex-1 lg:max-w-2xl mx-8">
            <form action="/search" method="GET" className="relative w-full">
              <Search className="absolute left-4 top-1/2 h-4.5 w-4.5 -translate-y-1/2 text-[#6b6b7a]" aria-hidden="true" />
              <input
                type="text"
                name="q"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search PCs, MacBooks, iPhones, GPUs, Chargers..."
                className="w-full h-11 rounded-xl border border-[#232330] bg-[#08080c] py-2.5 pl-12 pr-4 text-sm text-white placeholder-[#6b6b7a] outline-none transition-all duration-200 focus:border-[#ff003c] focus:ring-2 focus:ring-[#ff003c]/20 focus:bg-[#0d0d12]"
              />
            </form>
          </div>

          <nav className="hidden lg:flex items-center gap-1">
            <Link href="/shop" className="px-4 py-2.5 text-sm font-semibold text-white/80 hover:text-white transition-colors rounded-lg hover:bg-[#08080c]">
              Shop
            </Link>

            <div className="relative">
              <button
                onClick={() => setShowCategoryMenu(!showCategoryMenu)}
                className="flex items-center gap-1.5 px-4 py-2.5 text-sm font-semibold text-white/80 hover:text-white transition-colors rounded-lg hover:bg-[#08080c]"
              >
                Categories
                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${showCategoryMenu ? 'rotate-180 text-[#ff003c]' : 'text-[#6b6b7a]'}`} />
              </button>

              {showCategoryMenu && (
                <div className="absolute left-0 top-full mt-2 w-56 rounded-xl border border-[#232330] bg-[#0d0d12] py-2 shadow-2xl shadow-[#000000]/50 animate-slide-down">
                  {categoriesList.map((cat) => {
                    const Icon = cat.icon;
                    const isActive = selectedCategory === cat.id;
                    return (
                      <Link
                        key={cat.id}
                        href={cat.href}
                        onClick={() => handleCategorySelect(cat.id)}
                        className={`flex w-full items-center gap-3 px-4 py-2.5 text-sm font-medium transition-all duration-200 ${
                          isActive
                            ? 'bg-[#ff003c]/15 text-[#ff003c] font-bold'
                            : 'text-white/80 hover:bg-[#14141a] hover:text-white'
                        }`}
                      >
                        <Icon className={`h-4 w-4 ${isActive ? 'text-[#ff003c]' : 'text-[#6b6b7a]'}`} />
                        {cat.label}
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>

            <Link href="/deals" className="px-4 py-2.5 text-sm font-semibold text-[#ff003c] hover:text-[#ff3366] transition-colors rounded-lg hover:bg-[#ff003c]/10">
              Deals
            </Link>
            <Link href="/new-arrivals" className="px-4 py-2.5 text-sm font-semibold text-white/80 hover:text-white transition-colors rounded-lg hover:bg-[#08080c]">
              New
            </Link>
            <Link href="/best-sellers" className="px-4 py-2.5 text-sm font-semibold text-white/80 hover:text-white transition-colors rounded-lg hover:bg-[#08080c]">
              Best Sellers
            </Link>
          </nav>

          <div className="flex items-center gap-2">
            <Link
              href="/compare"
              className="relative btn btn-icon btn-ghost text-[#6b6b7a] hover:text-white hover:bg-[#08080c] transition-all"
              title="Compare Products"
              aria-label="Compare Products"
            >
              <Scale className="h-5 w-5" />
              {compareList.length > 0 && (
                <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#ff003c] text-[10px] font-extrabold text-white animate-scale-in">
                  {compareList.length}
                </span>
              )}
            </Link>

            <Link
              href="/wishlist"
              className="relative btn btn-icon btn-ghost text-[#ff003c] hover:bg-[#ff003c]/10 transition-all"
              title="Wishlist"
              aria-label="Wishlist"
            >
              <Heart className="h-5 w-5 fill-current" />
              {wishlist.length > 0 && (
                <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#ff003c] text-[10px] font-extrabold text-white animate-scale-in">
                  {wishlist.length}
                </span>
              )}
            </Link>

            <Link
              href={user ? '/account/dashboard' : '/account/login'}
              className="btn btn-ghost flex h-11 items-center gap-2.5 px-3 lg:px-4 text-sm font-bold text-white/80 hover:text-white hover:bg-[#08080c] transition-all rounded-xl"
              title={user ? `Signed in as ${user.name}` : 'Sign in / Register'}
            >
              {user ? (
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-[#ff003c] to-[#990024] text-[11px] font-black text-white">
                  {userInitials}
                </span>
              ) : (
                <User className="h-5 w-5 text-[#6b6b7a]" />
              )}
              <span className="hidden sm:inline">{user ? 'Account' : 'Sign In'}</span>
            </Link>

            <button
              onClick={() => setIsCartOpen(true)}
              className="relative btn btn-icon btn-primary group"
              aria-label={`Shopping Cart ${cartCount > 0 ? `with ${cartCount} items` : 'empty'}`}
            >
              <ShoppingBag className="h-5.5 w-5.5 transition-transform group-hover:scale-110" />
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-white px-1.5 text-[10px] font-extrabold text-[#ff003c] shadow-md shadow-[#ff003c]/50 animate-pulse">
                  {cartCount > 99 ? '99+' : cartCount}
                </span>
              )}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="btn btn-icon btn-ghost lg:hidden text-white/80 hover:text-white hover:bg-[#08080c]"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="h-6 w-6 text-[#ff003c]" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#1a1a24] bg-[#030305] px-4 py-4 animate-slide-down shadow-xl shadow-[#000000]/50">
          <div className="mb-4 relative">
            <Search className="absolute left-3.5 top-1/2 h-4.5 w-4.5 -translate-y-1/2 text-[#6b6b7a]" aria-hidden="true" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search products..."
              className="w-full h-11 rounded-xl border border-[#232330] bg-[#08080c] py-2.5 pl-11 pr-4 text-sm text-white placeholder-[#6b6b7a] outline-none focus:border-[#ff003c] focus:ring-2 focus:ring-[#ff003c]/20"
            />
          </div>

          <div className="space-y-1">
            <span className="block px-3 py-2 text-[10px] font-extrabold uppercase tracking-widest text-[#ff003c]">Categories</span>
            {categoriesList.map((cat) => {
              const Icon = cat.icon;
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => handleMobileCategorySelect(cat.id)}
                  className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-[#ff003c]/15 text-[#ff003c] font-bold'
                      : 'text-white/80 hover:bg-[#08080c] hover:text-white'
                  }`}
                >
                  <Icon className={`h-4.5 w-4.5 ${isActive ? 'text-[#ff003c]' : 'text-[#6b6b7a]'}`} />
                  {cat.label}
                </button>
              );
            })}

            <div className="pt-3 mt-3 border-t border-[#1a1a24] space-y-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openBooking();
                }}
                className="btn btn-primary w-full py-3"
              >
                <Wrench className="h-4.5 w-4.5" />
                Book Custom PC Build / IT Repair
              </button>

              <Link
                href="/deals"
                className="btn btn-secondary w-full py-3 justify-center"
              >
                <Flame className="h-4.5 w-4.5" />
                View Flash Deals
              </Link>

              <Link
                href="/new-arrivals"
                className="btn btn-outline w-full py-3 justify-center"
              >
                <Sparkles className="h-4.5 w-4.5" />
                New Arrivals
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}