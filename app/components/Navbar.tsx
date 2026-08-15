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
      className={`sticky top-0 z-50 w-full transition-all duration-500 ease-out ${
        scrolled
          ? 'bg-[#05070D]/80 backdrop-blur-2xl border-b border-white/[0.06] shadow-[0_1px_32px_rgba(0,0,0,0.4)]'
          : 'bg-[#05070D]/50 backdrop-blur-xl border-b border-white/[0.03]'
      }`}
    >
      {/* ── Top Announcement Strip ─────────────────────────────────────────── */}
      {/* Desktop */}
      <div className="hidden lg:block border-b border-white/[0.04] bg-white/[0.01]">
        <div className="mx-auto max-w-7xl px-6 flex items-center justify-between h-9">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2 text-[11px] font-semibold tracking-wide text-[#94A3B8]">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#3B82F6]/10">
                <ShieldCheck className="h-3 w-3 text-[#3B82F6]" />
              </span>
              <span className="text-white/90">QuantumByte</span>
              <span className="text-[#64748B]">·</span>
              100% Genuine Tech Guarantee
            </span>
            <span className="hidden xl:block w-px h-3.5 bg-white/[0.08]" />
            <span className="hidden xl:block text-[11px] text-[#64748B] tracking-wide">
              Express Delivery &amp; 24/7 Technical Support
            </span>
          </div>
          <div className="flex items-center gap-5">
            <Link
              href="/deals"
              className="group flex items-center gap-1.5 text-[11px] font-bold tracking-wide text-[#3B82F6] hover:text-[#60A5FA] transition-colors duration-200"
            >
              <Flame className="h-3 w-3 transition-transform group-hover:scale-110" />
              Flash Deals
            </Link>
            <Link href="/about" className="text-[11px] font-medium tracking-wide text-[#64748B] hover:text-white/80 transition-colors duration-200">
              About
            </Link>
            <Link href="/contact" className="text-[11px] font-medium tracking-wide text-[#64748B] hover:text-white/80 transition-colors duration-200">
              Contact
            </Link>
            <Link
              href="/admin"
              className="flex items-center gap-1.5 text-[11px] font-medium tracking-wide text-[#64748B] hover:text-[#3B82F6] transition-colors duration-200"
            >
              <LayoutDashboard className="h-3 w-3" />
              Admin
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className="lg:hidden border-b border-white/[0.04] bg-white/[0.01]">
        <div className="mx-auto max-w-7xl px-4 flex items-center justify-between h-9">
          <span className="flex items-center gap-1.5 text-[10px] font-bold tracking-wide text-white/80">
            <ShieldCheck className="h-3 w-3 text-[#3B82F6]" />
            100% Genuine
          </span>
          <div className="flex items-center gap-3">
            <Link
              href="/deals"
              className="flex items-center gap-1 text-[10px] font-bold tracking-wide text-[#3B82F6] transition-colors"
            >
              <Flame className="h-3 w-3" />
              Deals
            </Link>
            <Link href="/contact" className="text-[10px] font-medium tracking-wide text-[#64748B] hover:text-white/80 transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>

      {/* ── Main Navigation ────────────────────────────────────────────────── */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 lg:h-16 gap-4 lg:gap-8">

          {/* ── Logo ──────────────────────────────────────────────────── */}
          <Link
            href="/"
            className="group flex items-center gap-2.5 flex-shrink-0 min-w-0"
            aria-label="QuantumByte Technologies Home"
          >
            <div className="relative flex h-9 w-9 items-center justify-center rounded-[10px] bg-gradient-to-br from-[#3B82F6] to-[#1D4ED8] shrink-0 transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.35)]">
              <Cpu className="h-5 w-5 text-white" />
            </div>
            <div className="hidden sm:flex flex-col min-w-0 leading-none">
              <span className="text-[17px] font-black tracking-[-0.03em] text-white">
                QUANTUM<span className="text-[#3B82F6]">BYTE</span>
              </span>
              <span className="text-[8px] font-bold tracking-[0.25em] text-[#475569] uppercase mt-0.5">
                Technologies
              </span>
            </div>
          </Link>

          {/* ── Search (Desktop) ──────────────────────────────────────── */}
          <div className="hidden lg:flex lg:flex-1 lg:max-w-xl">
            <form action="/search" method="GET" className="relative w-full group">
              <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#475569] transition-colors duration-200 group-focus-within:text-[#3B82F6]" aria-hidden="true" />
              <input
                type="text"
                name="q"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search products, brands, categories..."
                className="w-full h-10 rounded-xl border border-white/[0.07] bg-white/[0.03] pl-11 pr-4 text-[13px] font-medium text-white placeholder-[#475569] outline-none transition-all duration-300 focus:border-[#3B82F6]/40 focus:bg-white/[0.05] focus:shadow-[0_0_0_3px_rgba(59,130,246,0.08)]"
              />
            </form>
          </div>

          {/* ── Navigation Links (Desktop) ────────────────────────────── */}
          <nav className="hidden lg:flex items-center gap-0.5">
            <Link
              href="/shop"
              className="relative px-3.5 py-2 text-[13px] font-semibold text-white/65 hover:text-white tracking-wide transition-colors duration-200 rounded-lg hover:bg-white/[0.04]"
            >
              Shop
            </Link>

            {/* Categories Dropdown */}
            <div className="relative">
              <button
                onClick={() => setShowCategoryMenu(!showCategoryMenu)}
                className="relative flex items-center gap-1 px-3.5 py-2 text-[13px] font-semibold text-white/65 hover:text-white tracking-wide transition-colors duration-200 rounded-lg hover:bg-white/[0.04]"
              >
                Categories
                <ChevronDown
                  className={`h-3.5 w-3.5 transition-all duration-200 ${
                    showCategoryMenu ? 'rotate-180 text-[#3B82F6]' : 'text-[#475569]'
                  }`}
                />
              </button>

              {showCategoryMenu && (
                <>
                  <div
                    className="fixed inset-0 z-40"
                    onClick={() => setShowCategoryMenu(false)}
                  />
                  <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-[26rem] rounded-2xl border border-white/[0.07] bg-[#0B0F18] py-2 shadow-[0_16px_64px_rgba(0,0,0,0.5)] animate-slide-down z-50">
                    {/* Top accent line */}
                    <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-[#3B82F6]/30 to-transparent" />

                    <div className="px-3 py-2 mb-1">
                      <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#475569]">
                        Browse by Category
                      </span>
                    </div>
                    {categoriesList.map((cat) => {
                      const Icon = cat.icon;
                      const isActive = selectedCategory === cat.id;
                      return (
                        <Link
                          key={cat.id}
                          href={cat.href}
                          onClick={() => handleCategorySelect(cat.id)}
                          className={`mx-2 flex items-center gap-3 px-3 py-2.5 rounded-xl text-[13px] font-medium transition-all duration-200 touch-target-sm ${
                            isActive
                              ? 'bg-[#3B82F6]/10 text-[#3B82F6]'
                              : 'text-white/60 hover:bg-white/[0.04] hover:text-white'
                          }`}
                        >
                          <span className={`flex h-7 w-7 items-center justify-center rounded-lg transition-colors duration-200 ${
                            isActive ? 'bg-[#3B82F6]/15' : 'bg-white/[0.04]'
                          }`}>
                            <Icon className={`h-3.5 w-3.5 ${isActive ? 'text-[#3B82F6]' : 'text-[#475569]'}`} />
                          </span>
                          {cat.label}
                        </Link>
                      );
                    })}
                  </div>
                </>
              )}
            </div>

            <Link
              href="/deals"
              className="px-3.5 py-2 text-[13px] font-bold tracking-wide text-[#3B82F6] hover:text-[#60A5FA] transition-colors duration-200 rounded-lg hover:bg-[#3B82F6]/[0.06]"
            >
              Deals
            </Link>
            <Link
              href="/new-arrivals"
              className="px-3.5 py-2 text-[13px] font-semibold text-white/65 hover:text-white tracking-wide transition-colors duration-200 rounded-lg hover:bg-white/[0.04]"
            >
              New Arrivals
            </Link>
            <Link
              href="/best-sellers"
              className="px-3.5 py-2 text-[13px] font-semibold text-white/65 hover:text-white tracking-wide transition-colors duration-200 rounded-lg hover:bg-white/[0.04]"
            >
              Best Sellers
            </Link>
          </nav>

          {/* ── Right Actions ─────────────────────────────────────────── */}
          <div className="flex items-center gap-1.5 lg:gap-2">
            {/* Compare */}
            <Link
              href="/compare"
              className="relative flex h-9 w-9 items-center justify-center rounded-xl text-[#475569] hover:text-white hover:bg-white/[0.04] transition-all duration-200"
              title="Compare Products"
              aria-label="Compare Products"
            >
              <Scale className="h-[18px] w-[18px]" />
              {compareList.length > 0 && (
                <span className="absolute -top-0.5 -right-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-[#3B82F6] px-1 text-[9px] font-extrabold text-white animate-scale-in">
                  {compareList.length}
                </span>
              )}
            </Link>

            {/* Wishlist */}
            <Link
              href="/wishlist"
              className="relative flex h-9 w-9 items-center justify-center rounded-xl text-[#3B82F6] hover:bg-[#3B82F6]/[0.08] transition-all duration-200"
              title="Wishlist"
              aria-label="Wishlist"
            >
              <Heart className="h-[18px] w-[18px] fill-current" />
              {wishlist.length > 0 && (
                <span className="absolute -top-0.5 -right-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-[#3B82F6] px-1 text-[9px] font-extrabold text-white animate-scale-in">
                  {wishlist.length}
                </span>
              )}
            </Link>

            {/* Divider */}
            <div className="hidden lg:block w-px h-5 bg-white/[0.06] mx-1" />

            {/* Account */}
            <Link
              href={user ? '/account/dashboard' : '/account/login'}
              className="hidden sm:flex items-center gap-2 px-3 h-9 rounded-xl text-[13px] font-semibold text-white/60 hover:text-white hover:bg-white/[0.04] transition-all duration-200"
              title={user ? `Signed in as ${user.name}` : 'Sign in / Register'}
            >
              {user ? (
                <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-gradient-to-br from-[#3B82F6] to-[#1D4ED8] text-[9px] font-black text-white shrink-0">
                  {userInitials}
                </span>
              ) : (
                <User className="h-[18px] w-[18px] text-[#475569] shrink-0" />
              )}
              <span className="hidden lg:inline">{user ? 'Account' : 'Sign In'}</span>
            </Link>

            {/* Cart */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[#3B82F6] to-[#2563EB] text-white transition-all duration-300 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:scale-[1.03] active:scale-[0.97] shrink-0 touch-target"
              aria-label={`Shopping Cart ${cartCount > 0 ? `with ${cartCount} items` : 'empty'}`}
            >
              <ShoppingBag className="h-[18px] w-[18px]" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 flex h-4.5 min-w-[18px] items-center justify-center rounded-full bg-white px-1 text-[9px] font-extrabold text-[#3B82F6] shadow-md animate-scale-in">
                  {cartCount > 99 ? '99+' : cartCount}
                </span>
              )}
            </button>

            {/* Mobile Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex lg:hidden h-9 w-9 items-center justify-center rounded-xl text-white/60 hover:text-white hover:bg-white/[0.04] transition-all duration-200 touch-target"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5 text-[#3B82F6]" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* ── Mobile Menu Drawer ────────────────────────────────────────────── */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-white/[0.05] bg-[#05070D]/98 backdrop-blur-2xl animate-slide-down shadow-[0_16px_64px_rgba(0,0,0,0.5)] safe-area-inset">
          <div className="px-4 pt-4 pb-6 space-y-5">

            {/* Mobile Search */}
            <div className="relative">
              <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#475569]" aria-hidden="true" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search products..."
                className="w-full h-12 rounded-2xl border border-white/[0.07] bg-white/[0.03] pl-11 pr-4 text-[15px] font-medium text-white placeholder-[#475569] outline-none transition-all duration-200 focus:border-[#3B82F6]/40 focus:bg-white/[0.05] touch-target"
              />
            </div>

            {/* Categories */}
            <div>
              <span className="block px-1 mb-2 text-[10px] font-bold uppercase tracking-[0.15em] text-[#475569]">
                Categories
              </span>
              <div className="space-y-0.5">
                {categoriesList.map((cat) => {
                  const Icon = cat.icon;
                  const isActive = selectedCategory === cat.id;
                  return (
                    <button
                      key={cat.id}
                      onClick={() => handleMobileCategorySelect(cat.id)}
                      className={`flex w-full items-center gap-3 rounded-xl px-3 py-3 text-[14px] font-medium transition-all duration-200 touch-target ${
                        isActive
                          ? 'bg-[#3B82F6]/10 text-[#3B82F6]'
                          : 'text-white/60 hover:bg-white/[0.04] hover:text-white'
                      }`}
                    >
                      <span className={`flex h-8 w-8 items-center justify-center rounded-lg transition-colors ${
                        isActive ? 'bg-[#3B82F6]/15' : 'bg-white/[0.04]'
                      }`}>
                        <Icon className={`h-4 w-4 ${isActive ? 'text-[#3B82F6]' : 'text-[#475569]'}`} />
                      </span>
                      {cat.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-white/[0.05]" />

            {/* Quick Links */}
            <div className="grid grid-cols-2 gap-2">
              <Link
                href="/deals"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 rounded-xl border border-[#3B82F6]/20 bg-[#3B82F6]/[0.06] px-4 py-3 text-[13px] font-bold text-[#3B82F6] transition-all duration-200 active:scale-[0.97]"
              >
                <Flame className="h-4 w-4" />
                Flash Deals
              </Link>
              <Link
                href="/new-arrivals"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 rounded-xl border border-white/[0.07] bg-white/[0.03] px-4 py-3 text-[13px] font-semibold text-white/70 transition-all duration-200 active:scale-[0.97]"
              >
                <Sparkles className="h-4 w-4" />
                New Arrivals
              </Link>
            </div>

            {/* CTA */}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openBooking();
              }}
              className="flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#3B82F6] to-[#2563EB] px-6 py-3.5 text-[14px] font-bold text-white transition-all duration-300 hover:shadow-[0_0_24px_rgba(59,130,246,0.3)] active:scale-[0.98] touch-target"
            >
              <Wrench className="h-4.5 w-4.5" />
              Book IT Service / PC Build
            </button>

            {/* Account (Mobile) */}
            <Link
              href={user ? '/account/dashboard' : '/account/login'}
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-3 rounded-xl border border-white/[0.06] bg-white/[0.02] px-4 py-3 transition-all duration-200 active:scale-[0.98]"
            >
              {user ? (
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[#3B82F6] to-[#1D4ED8] text-[10px] font-black text-white shrink-0">
                  {userInitials}
                </span>
              ) : (
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/[0.04] text-[#475569] shrink-0">
                  <User className="h-4 w-4" />
                </div>
              )}
              <div className="min-w-0">
                <p className="text-[13px] font-bold text-white truncate">{user ? user.name : 'Sign In / Register'}</p>
                <p className="text-[11px] text-[#475569]">{user ? 'View your account' : 'Access your orders & wishlist'}</p>
              </div>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
