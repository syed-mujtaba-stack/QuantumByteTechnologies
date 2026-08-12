'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Cpu, ShieldCheck, Mail, Send, MapPin, Phone, Truck, Wallet } from 'lucide-react';

const SocialIcons = {
  Twitter: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.262 5.636L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
    </svg>
  ),
  Instagram: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-4 w-4">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  ),
  Linkedin: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  ),
  Github: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
      <path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.298 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  ),
  WhatsApp: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  ),
};

export function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
      setNewsletterEmail('');
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  return (
    <footer className="relative border-t border-[#22222e] bg-[#030305] text-[#a1a1aa] pt-16 pb-8">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#ff003c]/50 to-transparent" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-6">

          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#ff003c] to-[#990024] p-2 text-white shadow-lg shadow-[#ff003c]/30">
                <Cpu className="h-6 w-6" />
              </div>
              <span className="text-xl font-black tracking-tight text-white">
                QUANTUM<span className="text-[#ff003c]">BYTE</span>
              </span>
            </Link>
            <p className="text-xs leading-relaxed max-w-sm text-[#a1a1aa]">
              QuantumByte Technologies — your high-performance hardware retailer and certified enterprise IT solution provider. Custom gaming rigs, laptops, mobiles, chargers, genuine parts, and micro-electronics repair.
            </p>
            <div className="flex items-center gap-3 text-xs text-white pt-1">
              <ShieldCheck className="h-4 w-4 text-[#ff003c]" />
              <span>Official Registered Tech Brand &amp; Retailer</span>
            </div>

            <div className="space-y-2.5 pt-1 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#ff003c]" />
                <span>Office No 7, 2nd Floor, AZ Mall<br />Platform, Back Side Al-Fateh Kohinoor,<br />Madina Town, Faisalabad, Punjab, Pakistan</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 shrink-0 text-[#ff003c]" />
                <a href="tel:+923254803957" className="hover:text-[#ff003c] transition-colors">+92 325 4803957 (WhatsApp)</a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 shrink-0 text-[#ff003c]" />
                <a href="mailto:support@quantumbyte.tech" className="hover:text-[#ff003c] transition-colors">support@quantumbyte.tech</a>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-1">
              {(
                [
                  { Icon: SocialIcons.WhatsApp, href: 'https://wa.me/923254803957', label: 'WhatsApp' },
                  { Icon: SocialIcons.Twitter, href: '#', label: 'X / Twitter' },
                  { Icon: SocialIcons.Instagram, href: '#', label: 'Instagram' },
                  { Icon: SocialIcons.Linkedin, href: '#', label: 'LinkedIn' },
                  { Icon: SocialIcons.Github, href: '#', label: 'GitHub' },
                ] as { Icon: () => React.ReactElement; href: string; label: string }[]
              ).map(({ Icon, href, label }) => (
                <a key={label} href={href} aria-label={label}
                  className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#22222e] bg-[#0e0e12] text-[#71717a] hover:border-[#ff003c]/60 hover:text-[#ff003c] transition-all duration-200">
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Shop Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Shop</h4>
            <ul className="space-y-2 text-xs">
              {[
                { label: 'All Products', href: '/shop' },
                { label: 'New Arrivals', href: '/new-arrivals' },
                { label: 'Best Sellers', href: '/best-sellers' },
                { label: 'Deals & Offers', href: '/deals' },
                { label: 'Compare Products', href: '/compare' },
                { label: 'My Wishlist', href: '/wishlist' },
              ].map(({ label, href }) => (
                <li key={href}><Link href={href} className="hover:text-[#ff003c] transition-colors">{label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Categories</h4>
            <ul className="space-y-2 text-xs">
              {[
                { label: 'Gaming Desktops', href: '/categories/computers' },
                { label: 'Gaming Laptops', href: '/categories/laptops' },
                { label: 'Smartphones', href: '/categories/mobiles' },
                { label: 'Chargers & Docks', href: '/categories/chargers' },
                { label: 'PC Components', href: '/categories/parts' },
                { label: 'All Categories', href: '/categories' },
              ].map(({ label, href }) => (
                <li key={href}><Link href={href} className="hover:text-[#ff003c] transition-colors">{label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Company</h4>
            <ul className="space-y-2 text-xs">
              {[
                { label: 'About Us', href: '/about' },
                { label: 'Contact Us', href: '/contact' },
                { label: 'FAQ', href: '/faq' },
                { label: 'Privacy Policy', href: '/privacy-policy' },
                { label: 'Terms & Conditions', href: '/terms' },
                { label: 'Refund Policy', href: '/refund-policy' },
                { label: 'Shipping Policy', href: '/shipping-policy' },
              ].map(({ label, href }) => (
                <li key={href}><Link href={href} className="hover:text-[#ff003c] transition-colors">{label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Newsletter + Account */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Stay Updated</h4>
            <p className="text-xs">Subscribe for hardware drops, price alerts &amp; tech news.</p>
            <p className="text-[11px] text-[#71717a]">Support Hours: Mon–Sat, 10AM–8PM PKT</p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-2">
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-[#71717a]" />
                <input type="email" required value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Enter your email..."
                  className="w-full rounded-xl border border-[#22222e] bg-[#0e0e12] py-2 pl-9 pr-3 text-xs text-white placeholder-[#71717a] outline-none focus:border-[#ff003c] transition-colors"
                />
              </div>
              <button type="submit"
                className="red-gradient-btn flex w-full items-center justify-center gap-2 rounded-xl py-2 text-xs font-extrabold text-white">
                <Send className="h-3.5 w-3.5" />
                {subscribed ? '✓ Subscribed!' : 'Subscribe'}
              </button>
            </form>
            <div className="pt-2 space-y-2">
              <h4 className="text-xs font-bold text-white uppercase tracking-wider">Account</h4>
              <ul className="space-y-2 text-xs">
                {[
                  { label: 'My Dashboard', href: '/account' },
                  { label: 'My Orders', href: '/account/orders' },
                  { label: 'My Wishlist', href: '/account/wishlist' },
                  { label: 'Login / Register', href: '/account/login' },
                ].map(({ label, href }) => (
                  <li key={href}><Link href={href} className="hover:text-[#ff003c] transition-colors">{label}</Link></li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between border-t border-[#1f1f2b] pt-8 text-xs gap-4">
          <p>© {new Date().getFullYear()} QuantumByte Technologies. All Rights Reserved.</p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-[#71717a]">
            <Link href="/privacy-policy" className="hover:text-[#ff003c] transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-[#ff003c] transition-colors">Terms</Link>
            <Link href="/refund-policy" className="hover:text-[#ff003c] transition-colors">Refunds</Link>
            <Link href="/shipping-policy" className="hover:text-[#ff003c] transition-colors">Shipping</Link>
          </div>
          <div className="flex items-center gap-3 text-white text-[11px] font-semibold">
            <span className="flex items-center gap-1 rounded bg-[#0e0e12] border border-[#22222e] px-2 py-1">
              <Truck className="h-3.5 w-3.5 text-[#22c55e]" /> Cash on Delivery
            </span>
            <span className="flex items-center gap-1 rounded bg-[#0e0e12] border border-dashed border-[#22222e] px-2 py-1 opacity-70">
              <Wallet className="h-3.5 w-3.5 text-[#ff003c]" /> EasyPaisa · Coming Soon
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
