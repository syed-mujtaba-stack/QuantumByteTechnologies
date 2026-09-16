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
  Truck,
  Tag,
  Star,
  Briefcase,
} from 'lucide-react';

// Rotating announcement messages — full text for xl, short for lg/md
const announcements = [
  {
    icon: ShieldCheck,
    full: '100% Genuine Hardware — Every product sourced from authorized distributors',
    short: '100% Genuine Hardware',
    color: 'text-[#3B82F6]',
  },
  {
    icon: Truck,
    full: 'Free Express Shipping on orders above Rs. 27,900 — Nationwide delivery',
    short: 'Free Shipping above Rs. 27,900',
    color: 'text-[#10b981]',
  },
  {
    icon: Tag,
    full: 'Flash Deals live now — Up to 30% off on selected Gaming PCs & Laptops',
    short: 'Flash Deals — Up to 30% off',
    color: 'text-[#f59e0b]',
  },
  {
    icon: Star,
    full: '10,000+ Happy Customers — 4.9★ rated service with 30-day warranty',
    short: '10,000+ Customers · 4.9★ Rating',
    color: 'text-[#8b5cf6]',
  },
  {
    icon: Wrench,
    full: 'Custom PC builds from Rs. 89,000 — 24hr stress tested & liquid cooled',
    short: 'Custom PCs from Rs. 89,000',
    color: 'text-[#06b6d4]',
  },
];

function AnnouncementTicker({ short = false }: { short?: boolean }) {
  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % announcements.length);
        setVisible(true);
      }, 300);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const item = announcements[current];
  const Icon = item.icon;

  return (
    <div className="flex items-center gap-2 w-full min-w-0">
      {/* Progress dots */}
      <div className="flex items-center gap-[3px] shrink-0">
        {announcements.map((_, i) => (
          <span
            key={i}
            className="block rounded-full transition-all duration-300"
            style={{
              width:      i === current ? '12px' : '4px',
              height:     '4px',
              background: i === current ? '#3B82F6' : 'rgba(255,255,255,0.12)',
            }}
          />
        ))}
      </div>
      {/* Icon + text */}
      <div
        className="flex items-center gap-1.5 min-w-0 transition-opacity duration-300"
        style={{ opacity: visible ? 1 : 0 }}
      >
        <Icon className={`h-3 w-3 shrink-0 ${item.color}`} />
        <span className="text-[11px] leading-none text-[#94A3B8] truncate">
          {short ? item.short : item.full}
        </span>
      </div>
    </div>
  );
}

const categoriesList = [
  { id: 'all',         label: 'All Catalog',           icon: Cpu,       href: '/shop' },
  { id: 'computers',  label: 'Computers & PCs',        icon: Cpu,       href: '/categories/computers' },
  { id: 'laptops',    label: 'Laptops',                icon: Laptop,    href: '/categories/laptops' },
  { id: 'mobiles',    label: 'Mobiles',                icon: Smartphone,href: '/categories/mobiles' },
  { id: 'chargers',   label: 'Chargers & Power',       icon: Zap,       href: '/categories/chargers' },
  { id: 'parts',      label: 'Parts & Components',     icon: Wrench,    href: '/categories/parts' },
  { id: 'monitors',   label: 'Monitors & Displays',    icon: Monitor,   href: '/categories/monitors' },
  { id: 'accessories',label: 'Gaming Accessories',     icon: Headphones,href: '/categories/accessories' },
  { id: 'networking', label: 'Networking & Storage',   icon: Wifi,      href: '/categories/networking' },
];

export function Navbar() {
  const {
    cartCount,
    setIsCartOpen,
    selectedCategory,
    setSelectedCategory,
    searchQuery,
    setSearchQuery,
    openBooking,
  } = useCart();

  const { wishlist } = useWishlist();
  const { user } = useAuth();

  const userInitials = user
    ? user.name.split(' ').map((p) => p[0]).slice(0, 2).join('').toUpperCase()
    : '';

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showCategoryMenu, setShowCategoryMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close category dropdown on outside click
  useEffect(() => {
    if (!showCategoryMenu) return;
    const handleClick = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setShowCategoryMenu(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [showCategoryMenu]);

  const handleCategorySelect = (catId: string) => {
    setSelectedCategory(catId);
    setShowCategoryMenu(false);
    setMobileMenuOpen(false);
  };

  return (
    <header
      ref={headerRef}
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? 'bg-[#05070D]/90 backdrop-blur-2xl border-b border-white/[0.07] shadow-[0_2px_24px_rgba(0,0,0,0.45)]'
          : 'bg-[#05070D]/60 backdrop-blur-xl border-b border-white/[0.04]'
      }`}
    >
      {/* ── Announcement Strip — Desktop (lg+) ───────────────────── */}
      <div className="hidden lg:block border-b border-white/[0.04] bg-white/[0.008]">
        <div className="mx-auto max-w-7xl px-6 h-8 flex items-center gap-4 overflow-hidden">

          {/* Ticker — short on lg, full on xl */}
          <div className="flex items-center min-w-0 flex-1 overflow-hidden">
            <div className="xl:hidden w-full"><AnnouncementTicker short /></div>
            <div className="hidden xl:flex w-full"><AnnouncementTicker /></div>
          </div>

          {/* Right links */}
          <div className="flex items-center gap-3 shrink-0">
            <Link
              href="/deals"
              className="flex items-center gap-1 text-[11px] font-bold leading-none text-[#3B82F6] hover:text-[#60A5FA] transition-colors duration-200 whitespace-nowrap"
            >
              <Flame className="h-3 w-3 shrink-0" />
              Flash Deals
            </Link>
            {/* About & Contact only on xl — they're in mobile drawer already */}
            <span className="hidden xl:block w-px h-3 bg-white/[0.08]" />
            <Link
              href="/about"
              className="hidden xl:flex items-center text-[11px] leading-none text-[#475569] hover:text-white/80 transition-colors duration-200 whitespace-nowrap"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="hidden xl:flex items-center text-[11px] leading-none text-[#475569] hover:text-white/80 transition-colors duration-200 whitespace-nowrap"
            >
              Contact
            </Link>
            <span className="w-px h-3 bg-white/[0.08]" />
            <Link
              href="/admin"
              className="flex items-center gap-1 text-[11px] leading-none text-[#475569] hover:text-[#3B82F6] transition-colors duration-200 whitespace-nowrap"
            >
              <LayoutDashboard className="h-3 w-3 shrink-0" />
              Admin
            </Link>
          </div>
        </div>
      </div>

      {/* ── Announcement Strip — Mobile (< lg) ───────────────────── */}
      <div className="lg:hidden border-b border-white/[0.04] bg-white/[0.008]">
        <div className="mx-auto px-4 h-8 flex items-center gap-3 overflow-hidden">
          {/* Ticker takes all available space, short variant */}
          <div className="flex items-center min-w-0 flex-1 overflow-hidden">
            <AnnouncementTicker short />
          </div>
          {/* Minimal right actions */}
          <div className="flex items-center gap-2.5 shrink-0">
            <Link
              href="/deals"
              className="flex items-center gap-1 text-[10px] font-bold leading-none text-[#3B82F6] whitespace-nowrap"
            >
              <Flame className="h-3 w-3 shrink-0" />
              Deals
            </Link>
          </div>
        </div>
      </div>

      {/* ── Main Navigation Bar ──────────────────────────────────── */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 lg:h-[60px] gap-3 lg:gap-6">

          {/* Logo */}
          <Link
            href="/"
            className="group flex items-center gap-2.5 shrink-0"
            aria-label="QuantumByte Technologies Home"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-[9px] bg-gradient-to-br from-[#3B82F6] to-[#1D4ED8] transition-all duration-300 group-hover:shadow-[0_0_18px_rgba(59,130,246,0.4)]">
              <Cpu className="h-4.5 w-4.5 text-white" />
            </div>
            <div className="hidden sm:flex flex-col leading-none">
              <span className="text-[16px] font-black tracking-[-0.03em] text-white">
                QUANTUM<span className="text-[#3B82F6]">BYTE</span>
              </span>
              <span className="text-[8px] font-bold tracking-[0.22em] text-[#475569] uppercase mt-[1px]">
                Technologies
              </span>
            </div>
          </Link>

          {/* Search — Desktop */}
          <div className="hidden lg:flex flex-1 max-w-[440px]">
            <form action="/search" method="GET" className="relative w-full group">
              <Search className="absolute left-3.5 top-1/2 h-[15px] w-[15px] -translate-y-1/2 text-[#475569] transition-colors duration-200 group-focus-within:text-[#3B82F6]" aria-hidden="true" />
              <input
                type="text"
                name="q"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search products, brands, categories..."
                className="w-full h-9 rounded-xl border border-white/[0.07] bg-white/[0.03] pl-10 pr-4 text-[13px] text-white placeholder-[#475569] outline-none transition-all duration-200 focus:border-[#3B82F6]/40 focus:bg-white/[0.05] focus:shadow-[0_0_0_3px_rgba(59,130,246,0.08)]"
              />
            </form>
          </div>

          {/* Nav Links — Desktop */}
          <nav className="hidden lg:flex items-center gap-0.5" aria-label="Main navigation">
            <Link
              href="/shop"
              className="px-3 py-2 text-[13px] font-medium text-white/60 hover:text-white rounded-lg hover:bg-white/[0.04] transition-all duration-200"
            >
              Shop
            </Link>

            {/* Categories Dropdown */}
            <div className="relative">
              <button
                onClick={() => setShowCategoryMenu(!showCategoryMenu)}
                aria-expanded={showCategoryMenu}
                aria-haspopup="true"
                className="flex items-center gap-1 px-3 py-2 text-[13px] font-medium text-white/60 hover:text-white rounded-lg hover:bg-white/[0.04] transition-all duration-200"
              >
                Categories
                <ChevronDown
                  className={`h-3.5 w-3.5 transition-transform duration-200 ${
                    showCategoryMenu ? 'rotate-180 text-[#3B82F6]' : 'text-[#475569]'
                  }`}
                />
              </button>

              {showCategoryMenu && (
                <>
                  <div className="fixed inset-0 z-40" onClick={() => setShowCategoryMenu(false)} />
                  <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-[25rem] rounded-2xl border border-white/[0.07] bg-[#0B0F18] py-2 shadow-[0_20px_60px_rgba(0,0,0,0.55)] animate-slide-down z-50">
                    <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-[#3B82F6]/25 to-transparent" />
                    <div className="px-4 pt-2 pb-1.5">
                      <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#475569]">Browse by Category</span>
                    </div>
                    {categoriesList.map((cat) => {
                      const Icon = cat.icon;
                      const isActive = selectedCategory === cat.id;
                      return (
                        <Link
                          key={cat.id}
                          href={cat.href}
                          onClick={() => handleCategorySelect(cat.id)}
                          className={`mx-2 flex items-center gap-3 px-3 py-2 rounded-xl text-[13px] font-medium transition-all duration-200 ${
                            isActive
                              ? 'bg-[#3B82F6]/10 text-[#3B82F6]'
                              : 'text-white/55 hover:bg-white/[0.04] hover:text-white'
                          }`}
                        >
                          <span className={`flex h-6 w-6 items-center justify-center rounded-lg ${isActive ? 'bg-[#3B82F6]/15' : 'bg-white/[0.04]'}`}>
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

            <Link href="/deals" className="px-3 py-2 text-[13px] font-bold text-[#3B82F6] hover:text-[#60A5FA] rounded-lg hover:bg-[#3B82F6]/[0.06] transition-all duration-200">
              Deals
            </Link>
            <Link href="/new-arrivals" className="px-3 py-2 text-[13px] font-medium text-white/60 hover:text-white rounded-lg hover:bg-white/[0.04] transition-all duration-200">
              New Arrivals
            </Link>
            <Link href="/best-sellers" className="px-3 py-2 text-[13px] font-medium text-white/60 hover:text-white rounded-lg hover:bg-white/[0.04] transition-all duration-200">
              Best Sellers
            </Link>
            <Link href="/services" className="px-3 py-2 text-[13px] font-medium text-[#06B6D4] hover:text-[#22D3EE] rounded-lg hover:bg-[#06B6D4]/[0.06] transition-all duration-200">
              Services
            </Link>
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-1 lg:gap-1.5">
            {/* Wishlist */}
            <Link
              href="/wishlist"
              title="Wishlist"
              aria-label="Wishlist"
              className="relative flex h-9 w-9 items-center justify-center rounded-xl text-[#3B82F6] hover:bg-[#3B82F6]/[0.08] transition-all duration-200"
            >
              <Heart className="h-[17px] w-[17px] fill-current" />
              {wishlist.length > 0 && (
                <span className="absolute -top-0.5 -right-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-[#3B82F6] px-1 text-[9px] font-extrabold text-white animate-scale-in">
                  {wishlist.length}
                </span>
              )}
            </Link>

            <div className="hidden lg:block w-px h-4 bg-white/[0.08] mx-0.5" />

            {/* Account */}
            <Link
              href={user ? '/account/dashboard' : '/account/login'}
              className="hidden sm:flex items-center gap-1.5 px-2.5 h-9 rounded-xl text-[13px] font-medium text-white/55 hover:text-white hover:bg-white/[0.04] transition-all duration-200"
              title={user ? `Signed in as ${user.name}` : 'Sign in / Register'}
            >
              {user ? (
                <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-gradient-to-br from-[#3B82F6] to-[#1D4ED8] text-[9px] font-black text-white shrink-0">
                  {userInitials}
                </span>
              ) : (
                <User className="h-[17px] w-[17px] text-[#475569] shrink-0" />
              )}
              <span className="hidden lg:inline text-[13px]">{user ? 'Account' : 'Sign In'}</span>
            </Link>

            {/* Cart */}
            <button
              onClick={() => setIsCartOpen(true)}
              aria-label={`Shopping Cart${cartCount > 0 ? `, ${cartCount} items` : ''}`}
              className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[#3B82F6] to-[#2563EB] text-white transition-all duration-200 hover:shadow-[0_0_18px_rgba(59,130,246,0.35)] hover:scale-[1.04] active:scale-[0.96] shrink-0"
            >
              <ShoppingBag className="h-[17px] w-[17px]" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 flex h-[18px] min-w-[18px] items-center justify-center rounded-full bg-white px-1 text-[9px] font-extrabold text-[#3B82F6] shadow-sm animate-scale-in">
                  {cartCount > 99 ? '99+' : cartCount}
                </span>
              )}
            </button>

            {/* Mobile Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
              className="flex lg:hidden h-9 w-9 items-center justify-center rounded-xl text-white/60 hover:text-white hover:bg-white/[0.04] transition-all duration-200"
            >
              {mobileMenuOpen
                ? <X className="h-5 w-5 text-[#3B82F6]" />
                : <Menu className="h-5 w-5" />
              }
            </button>
          </div>
        </div>
      </div>

      {/* ── Mobile Menu ──────────────────────────────────────────── */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-white/[0.06] bg-[#05070D]/98 backdrop-blur-2xl animate-slide-down">
          <div className="px-4 py-5 space-y-5 max-h-[80vh] overflow-y-auto">

            {/* Mobile Search */}
            <div className="relative">
              <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#475569]" aria-hidden="true" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search products..."
                className="w-full h-11 rounded-xl border border-white/[0.07] bg-white/[0.03] pl-10 pr-4 text-[14px] text-white placeholder-[#475569] outline-none focus:border-[#3B82F6]/40 focus:bg-white/[0.05] transition-all duration-200"
              />
            </div>

            {/* Quick Action Badges */}
            <div className="grid grid-cols-2 gap-2">
              <Link
                href="/services"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#06B6D4]/15 to-[#3B82F6]/15 border border-[#06B6D4]/30 px-3 py-2.5 text-[13px] font-bold text-[#22D3EE] hover:bg-[#06B6D4]/25 transition-all duration-200 shadow-sm"
              >
                <Briefcase className="h-4 w-4 text-[#06B6D4]" />
                <span>IT Services</span>
              </Link>
              <Link
                href="/deals"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 rounded-xl bg-[#3B82F6]/10 border border-[#3B82F6]/25 px-3 py-2.5 text-[13px] font-bold text-[#60A5FA] hover:bg-[#3B82F6]/20 transition-all duration-200"
              >
                <Zap className="h-4 w-4 text-[#3B82F6]" />
                <span>⚡ Flash Deals</span>
              </Link>
            </div>

            {/* Nav Links */}
            <div>
              <p className="px-1 mb-2 text-[10px] font-bold uppercase tracking-[0.15em] text-[#475569]">
                Menu
              </p>
              <div className="space-y-1">
                {[
                  { href: '/services', label: '💼 IT Services & Solutions', accent: true },
                  { href: '/shop', label: '🛍️ All Products' },
                  { href: '/new-arrivals', label: '✨ New Arrivals' },
                  { href: '/best-sellers', label: '🔥 Best Sellers' },
                  { href: '/wishlist', label: '❤️ My Wishlist' },
                  { href: user ? '/account/dashboard' : '/account/login', label: user ? '👤 My Account' : '🔑 Sign In' },
                ].map(({ href, label, accent }) => (
                  <Link
                    key={href}
                    href={href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center rounded-xl px-3 py-2.5 text-[13px] font-medium transition-all duration-200 ${
                      accent
                        ? 'bg-[#06B6D4]/10 text-[#22D3EE] border border-[#06B6D4]/20 font-semibold'
                        : 'text-white/70 hover:text-white hover:bg-white/[0.04]'
                    }`}
                  >
                    {label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Categories */}
            <div className="border-t border-white/[0.06] pt-4">
              <p className="px-1 mb-2.5 text-[10px] font-bold uppercase tracking-[0.15em] text-[#475569]">
                Product Categories
              </p>
              <div className="grid grid-cols-2 gap-1.5">
                {categoriesList.map((cat) => {
                  const Icon = cat.icon;
                  const isActive = selectedCategory === cat.id;
                  return (
                    <Link
                      key={cat.id}
                      href={cat.href}
                      onClick={() => handleCategorySelect(cat.id)}
                      className={`flex items-center gap-2.5 rounded-xl px-3 py-2.5 text-[13px] font-medium transition-all duration-200 ${
                        isActive
                          ? 'bg-[#3B82F6]/10 text-[#3B82F6] border border-[#3B82F6]/20'
                          : 'text-white/60 hover:text-white hover:bg-white/[0.04] border border-transparent'
                      }`}
                    >
                      <Icon className={`h-4 w-4 shrink-0 ${isActive ? 'text-[#3B82F6]' : 'text-[#475569]'}`} />
                      <span className="truncate">{cat.label}</span>
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Mobile IT Consultation CTA */}
            <div className="border-t border-white/[0.06] pt-4">
              <button
                onClick={() => { openBooking(); setMobileMenuOpen(false); }}
                className="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#3B82F6] to-[#2563EB] h-11 text-[14px] font-bold text-white transition-all duration-200 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] active:scale-[0.98]"
              >
                <Sparkles className="h-4 w-4" />
                Book IT Consultation
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
