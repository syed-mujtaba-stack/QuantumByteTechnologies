'use client';

import React, { useState } from 'react';
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
  Scale,
  User,
  LayoutDashboard,
  Sparkles,
  Flame
} from 'lucide-react';

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

  const handleCategorySelect = (catId: string) => {
    setSelectedCategory(catId);
    setShowCategoryMenu(false);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-[#22222e] bg-[#050505]/90 backdrop-blur-md transition-all">
      {/* Top Announcement Bar */}
      <div className="hidden border-b border-[#1f1f2b] bg-[#0d0d12] px-4 py-1.5 text-xs text-[#a1a1aa] sm:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-white">
              <ShieldCheck className="h-3.5 w-3.5 text-[#ff003c]" />
              Official QuantumByte 100% Genuine Tech Guarantee
            </span>
            <span className="text-[#333344]">|</span>
            <span className="text-[#a1a1aa]">Express Delivery & 24/7 Technical Support</span>
          </div>
          <div className="flex items-center gap-5">
            <Link href="/deals" className="flex items-center gap-1 text-[#ff003c] font-bold hover:underline">
              <Flame className="h-3.5 w-3.5" /> Flash Deals
            </Link>
            <Link href="/about" className="hover:text-white transition">About</Link>
            <Link href="/contact" className="hover:text-white transition">Contact</Link>
            <Link href="/admin" className="flex items-center gap-1 text-xs text-[#a1a1aa] hover:text-[#ff003c] transition">
              <LayoutDashboard className="h-3 w-3" /> Admin Portal
            </Link>
          </div>
        </div>
      </div>

      {/* Main Header Row */}
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5 sm:px-6 lg:px-8">
        {/* Brand Logo */}
        <Link href="/" className="group flex items-center gap-3">
          <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#ff003c] to-[#990024] p-2 shadow-lg shadow-[#ff003c]/20 group-hover:scale-105 transition-transform">
            <Cpu className="h-6 w-6 text-white animate-pulse" />
            <div className="absolute -inset-0.5 rounded-xl bg-[#ff003c] opacity-30 blur group-hover:opacity-60 transition" />
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-black tracking-tight text-white sm:text-xl">
              QUANTUM<span className="text-[#ff003c]">BYTE</span>
            </span>
            <span className="text-[10px] font-medium tracking-widest text-[#a1a1aa] uppercase">
              Technologies
            </span>
          </div>
        </Link>

        {/* Search Bar - Desktop */}
        <div className="hidden flex-1 max-w-md mx-6 lg:block">
          <form action="/search" method="GET" className="relative">
            <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#71717a]" />
            <input
              type="text"
              name="q"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search PCs, MacBooks, iPhones, GPUs, Chargers..."
              className="w-full rounded-xl border border-[#22222e] bg-[#0e0e12] py-2.5 pl-10 pr-4 text-sm text-white placeholder-[#71717a] outline-none transition focus:border-[#ff003c] focus:ring-1 focus:ring-[#ff003c]"
            />
          </form>
        </div>

        {/* Navigation Links - Desktop */}
        <nav className="hidden items-center gap-5 md:flex">
          <Link href="/shop" className="text-sm font-semibold text-white transition hover:text-[#ff003c]">
            Shop
          </Link>

          {/* Categories Dropdown */}
          <div className="relative">
            <button
              onClick={() => setShowCategoryMenu(!showCategoryMenu)}
              className="flex items-center gap-1 text-sm font-semibold text-white transition hover:text-[#ff003c]"
            >
              Categories
              <ChevronDown className={`h-4 w-4 transition-transform ${showCategoryMenu ? 'rotate-180 text-[#ff003c]' : ''}`} />
            </button>

            {showCategoryMenu && (
              <div className="absolute left-0 mt-3 w-56 rounded-xl border border-[#22222e] bg-[#0e0e12] py-2 shadow-2xl shadow-black/80 backdrop-blur-xl">
                {categoriesList.map((cat) => {
                  const Icon = cat.icon;
                  return (
                    <Link
                      key={cat.id}
                      href={cat.href}
                      onClick={() => handleCategorySelect(cat.id)}
                      className="flex w-full items-center gap-3 px-4 py-2.5 text-xs font-medium text-[#a1a1aa] transition hover:bg-[#16161f] hover:text-white"
                    >
                      <Icon className="h-4 w-4 text-[#ff003c]" />
                      {cat.label}
                    </Link>
                  );
                })}
              </div>
            )}
          </div>

          <Link href="/deals" className="text-sm font-semibold text-[#ff003c] transition hover:text-[#ff3366]">
            Deals
          </Link>
          <Link href="/new-arrivals" className="text-sm font-semibold text-white transition hover:text-[#ff003c]">
            New
          </Link>
          <Link href="/best-sellers" className="text-sm font-semibold text-white transition hover:text-[#ff003c]">
            Best Sellers
          </Link>
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-2.5">
          {/* Compare Button */}
          <Link
            href="/compare"
            className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-[#22222e] bg-[#0e0e12] text-white transition hover:border-[#ff003c] hover:bg-[#16161f]"
            title="Compare Products"
          >
            <Scale className="h-4 w-4 text-[#a1a1aa]" />
            {compareList.length > 0 && (
              <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#ff003c] text-[10px] font-extrabold text-white">
                {compareList.length}
              </span>
            )}
          </Link>

          {/* Wishlist Button */}
          <Link
            href="/wishlist"
            className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-[#22222e] bg-[#0e0e12] text-white transition hover:border-[#ff003c] hover:bg-[#16161f]"
            title="Wishlist"
          >
            <Heart className="h-4 w-4 text-[#ff003c]" />
            {wishlist.length > 0 && (
              <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#ff003c] text-[10px] font-extrabold text-white">
                {wishlist.length}
              </span>
            )}
          </Link>

          {/* Account Button */}
          <Link
            href={user ? '/account/dashboard' : '/account/login'}
            className="flex h-10 items-center gap-2 rounded-xl border border-[#22222e] bg-[#0e0e12] px-3 text-white transition hover:border-[#ff003c] hover:bg-[#16161f]"
            title={user ? `Signed in as ${user.name}` : 'Sign in / Register'}
          >
            {user ? (
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-[#ff003c] to-[#990024] text-[11px] font-black text-white">
                {userInitials}
              </span>
            ) : (
              <User className="h-4 w-4 text-[#a1a1aa]" />
            )}
            <span className="hidden text-xs font-bold sm:inline">
              {user ? 'Account' : 'Sign In'}
            </span>
          </Link>

          {/* Cart Drawer Trigger */}
          <button
            onClick={() => setIsCartOpen(true)}
            className="relative flex h-10 items-center gap-2 rounded-xl border border-[#22222e] bg-[#0e0e12] px-3.5 text-white transition hover:border-[#ff003c] hover:bg-[#16161f]"
            aria-label="Shopping Cart"
          >
            <ShoppingBag className="h-5 w-5 text-[#ff003c]" />
            <span className="hidden text-xs font-bold sm:inline">Cart</span>
            {cartCount > 0 && (
              <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-[#ff003c] px-1 text-[11px] font-extrabold text-white shadow-md shadow-[#ff003c]/50 animate-pulse">
                {cartCount}
              </span>
            )}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#22222e] bg-[#0e0e12] text-white md:hidden"
          >
            {mobileMenuOpen ? <X className="h-5 w-5 text-[#ff003c]" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="border-t border-[#22222e] bg-[#050505] px-4 py-4 md:hidden">
          {/* Mobile Search */}
          <div className="mb-4 relative">
            <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#71717a]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search products..."
              className="w-full rounded-xl border border-[#22222e] bg-[#0e0e12] py-2.5 pl-10 pr-4 text-sm text-white placeholder-[#71717a] outline-none"
            />
          </div>

          <div className="space-y-2">
            <span className="text-xs font-bold text-[#ff003c] uppercase tracking-wider">Categories</span>
            {categoriesList.map((cat) => {
              const Icon = cat.icon;
              return (
                <button
                  key={cat.id}
                  onClick={() => handleCategorySelect(cat.id)}
                  className={`flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm ${
                    selectedCategory === cat.id ? 'bg-[#ff003c]/20 text-[#ff003c] font-bold' : 'text-white'
                  }`}
                >
                  <Icon className="h-4 w-4 text-[#ff003c]" />
                  {cat.label}
                </button>
              );
            })}

            <div className="pt-3 border-t border-[#1a1a24] space-y-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openBooking();
                }}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#ff003c] py-2.5 text-xs font-bold text-white shadow-lg shadow-[#ff003c]/30"
              >
                <Wrench className="h-4 w-4" />
                Book Custom PC Build / IT Repair
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
