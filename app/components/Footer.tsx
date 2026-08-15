'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Cpu, ShieldCheck, Mail, Send, MapPin, Phone, Truck, Wallet, Headphones, RotateCcw } from 'lucide-react';

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
  Youtube: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  ),
};

const footerLinks = {
  shop: [
    { label: 'All Products', href: '/shop' },
    { label: 'New Arrivals', href: '/new-arrivals' },
    { label: 'Best Sellers', href: '/best-sellers' },
    { label: 'Flash Deals', href: '/deals' },
    { label: 'Compare Products', href: '/compare' },
    { label: 'My Wishlist', href: '/wishlist' },
  ],
  categories: [
    { label: 'Gaming Desktops', href: '/categories/computers' },
    { label: 'Gaming Laptops', href: '/categories/laptops' },
    { label: 'Smartphones', href: '/categories/mobiles' },
    { label: 'Chargers & Docks', href: '/categories/chargers' },
    { label: 'PC Components', href: '/categories/parts' },
    { label: 'Monitors & Displays', href: '/categories/monitors' },
    { label: 'Gaming Accessories', href: '/categories/accessories' },
    { label: 'Networking & Storage', href: '/categories/networking' },
    { label: 'All Categories', href: '/categories' },
  ],
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'Contact Us', href: '/contact' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Careers', href: '/careers' },
    { label: 'Press & Media', href: '/press' },
  ],
  support: [
    { label: 'Shipping Policy', href: '/shipping-policy' },
    { label: 'Refund & Returns', href: '/refund-policy' },
    { label: 'Warranty Info', href: '/warranty' },
    { label: 'Repair Services', href: '/repair' },
    { label: 'Track Order', href: '/track-order' },
    { label: 'Contact Support', href: '/contact' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Terms & Conditions', href: '/terms' },
    { label: 'Cookie Policy', href: '/cookies' },
    { label: 'Accessibility', href: '/accessibility' },
  ],
};

const socialLinks = [
  { Icon: SocialIcons.WhatsApp, href: 'https://wa.me/923254803957', label: 'WhatsApp', color: 'hover:text-green-500' },
  { Icon: SocialIcons.Twitter, href: '#', label: 'X / Twitter', color: 'hover:text-sky-400' },
  { Icon: SocialIcons.Instagram, href: '#', label: 'Instagram', color: 'hover:text-pink-500' },
  { Icon: SocialIcons.Youtube, href: '#', label: 'YouTube', color: 'hover:text-red-500' },
  { Icon: SocialIcons.Linkedin, href: '#', label: 'LinkedIn', color: 'hover:text-blue-600' },
  { Icon: SocialIcons.Github, href: '#', label: 'GitHub', color: 'hover:text-white' },
];

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
    <footer id="site-footer" className="relative border-t border-[#1a1a26] bg-[#030305] text-[#9c9ca8] pt-16 pb-8">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#ff003c]/50 to-transparent" />
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[radial-gradient(ellipse_at_center,rgba(255,0,60,0.06)_0%,transparent_70%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-6">
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="flex items-center gap-3" aria-label="QuantumByte Technologies Home">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-[#ff003c] to-[#990024] p-2.5 text-white shadow-lg shadow-[#ff003c]/30">
                <Cpu className="h-6.5 w-6.5" />
              </div>
              <span className="text-xl font-black tracking-tight text-white">
                QUANTUM<span className="text-[#ff003c]">BYTE</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed max-w-sm text-[#9c9ca8]">
              QuantumByte Technologies — your high-performance hardware retailer and certified enterprise IT solution provider. Custom gaming rigs, laptops, mobiles, chargers, genuine parts, and micro-electronics repair.
            </p>
            <div className="flex items-center gap-2.5 text-sm font-medium text-white">
              <ShieldCheck className="h-4.5 w-4.5 text-[#ff003c]" />
              <span>Official Registered Tech Brand & Retailer</span>
            </div>

            <div className="space-y-3 pt-2 text-sm">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 flex h-9 w-9 items-center justify-center rounded-lg bg-[#ff003c]/10 text-[#ff003c]">
                  <MapPin className="h-4.5 w-4.5" />
                </div>
                <address className="not-italic text-[#9c9ca8] leading-relaxed">
                  Office 7, 2nd Floor, AZ Mall Platform<br />
                  Back Side Al-Fateh Kohinoor<br />
                  Madina Town, Faisalabad, Punjab, Pakistan
                </address>
              </div>
              <a href="tel:+923254803957" className="flex items-center gap-3 text-[#9c9ca8] hover:text-[#ff003c] transition-colors">
                <div className="flex-shrink-0 flex h-9 w-9 items-center justify-center rounded-lg bg-[#08080c] text-[#ff003c] border border-[#232330]">
                  <Phone className="h-4.5 w-4.5" />
                </div>
                <span>+92 325 4803957 (WhatsApp)</span>
              </a>
              <a href="mailto:support@quantumbyte.tech" className="flex items-center gap-3 text-[#9c9ca8] hover:text-[#ff003c] transition-colors">
                <div className="flex-shrink-0 flex h-9 w-9 items-center justify-center rounded-lg bg-[#08080c] text-[#ff003c] border border-[#232330]">
                  <Mail className="h-4.5 w-4.5" />
                </div>
                <span>support@quantumbyte.tech</span>
              </a>
            </div>

            <div className="flex items-center gap-3 pt-2">
              {socialLinks.map(({ Icon, href, label, color }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex h-10 w-10 items-center justify-center rounded-xl border border-[#232330] bg-[#08080c] text-[#6b6b7a] transition-all duration-300 ${color}`}
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Shop</h4>
            <ul className="space-y-3 text-sm" role="list">
              {footerLinks.shop.map(({ label, href }) => (
                <li key={href}>
                  <Link href={href} className="text-[#9c9ca8] hover:text-[#ff003c] transition-colors flex items-center gap-2">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Categories</h4>
            <ul className="space-y-3 text-sm" role="list">
              {footerLinks.categories.map(({ label, href }) => (
                <li key={href}>
                  <Link href={href} className="text-[#9c9ca8] hover:text-[#ff003c] transition-colors flex items-center gap-2">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Company</h4>
            <ul className="space-y-3 text-sm" role="list">
              {footerLinks.company.map(({ label, href }) => (
                <li key={href}>
                  <Link href={href} className="text-[#9c9ca8] hover:text-[#ff003c] transition-colors flex items-center gap-2">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4 lg:col-span-2">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Support</h4>
            <ul className="space-y-3 text-sm" role="list">
              {footerLinks.support.map(({ label, href }) => (
                <li key={href}>
                  <Link href={href} className="text-[#9c9ca8] hover:text-[#ff003c] transition-colors flex items-center gap-2">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="pt-6 border-t border-[#1a1a24]">
              <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">Stay Updated</h4>
              <p className="text-sm text-[#9c9ca8] mb-4">Subscribe for hardware drops, price alerts & tech news.</p>
              <p className="text-xs text-[#6b6b7a] mb-4">Support Hours: Mon–Sat, 10AM–8PM PKT</p>
              <form onSubmit={handleNewsletterSubmit} className="space-y-3">
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 h-4.5 w-4.5 -translate-y-1/2 text-[#6b6b7a]" aria-hidden="true" />
                  <input
                    type="email"
                    required
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="Enter your email..."
                    className="w-full h-11 rounded-xl border border-[#232330] bg-[#08080c] pl-11 pr-12 text-sm text-white placeholder-[#6b6b7a] outline-none transition-all focus:border-[#ff003c] focus:ring-2 focus:ring-[#ff003c]/20 focus:bg-[#0d0d12]"
                    aria-label="Email address for newsletter"
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-primary w-full justify-center gap-2"
                  disabled={subscribed}
                >
                  <Send className="h-4.5 w-4.5" />
                  {subscribed ? '��� Subscribed!' : 'Subscribe'}
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-[#1a1a24]">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <p className="text-sm text-[#6b6b7a] text-center lg:text-left">
              © {new Date().getFullYear()} QuantumByte Technologies. All Rights Reserved.
            </p>

            <nav className="flex flex-wrap items-center justify-center gap-6 text-sm" aria-label="Legal links">
              {footerLinks.legal.map(({ label, href }) => (
                <Link key={href} href={href} className="text-[#6b6b7a] hover:text-[#ff003c] transition-colors">
                  {label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center justify-center gap-4 flex-wrap text-xs font-medium text-white">
              <span className="flex items-center gap-1.5 rounded-lg bg-[#08080c] border border-[#232330] px-3 py-1.5">
                <Truck className="h-4 w-4 text-[#30d158]" />
                Cash on Delivery
              </span>
              <span className="flex items-center gap-1.5 rounded-lg bg-[#08080c] border border-dashed border-[#232330] px-3 py-1.5 opacity-70">
                <Wallet className="h-4 w-4 text-[#ff003c]" />
                EasyPaisa · Coming Soon
              </span>
              <span className="flex items-center gap-1.5 rounded-lg bg-[#08080c] border border-[#232330] px-3 py-1.5">
                <ShieldCheck className="h-4 w-4 text-[#ff003c]" />
                14-Day Returns
              </span>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-4 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-3 p-4 rounded-xl bg-[#08080c] border border-[#232330] hover:border-[#ff003c]/30 transition-colors">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#ff003c]/10 text-[#ff003c] shrink-0">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div>
                <p className="font-semibold text-white">100% Genuine Products</p>
                <p className="text-xs text-[#6b6b7a]">Official manufacturer warranty</p>
              </div>
            </div>
            <div className="flex items-center justify-center lg:justify-start gap-3 p-4 rounded-xl bg-[#08080c] border border-[#232330] hover:border-[#ff003c]/30 transition-colors">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#00d4aa]/10 text-[#00d4aa] shrink-0">
                <Truck className="h-5 w-5" />
              </div>
              <div>
                <p className="font-semibold text-white">Free Express Shipping</p>
                <p className="text-xs text-[#6b6b7a]">On orders over Rs. 15,000</p>
              </div>
            </div>
            <div className="flex items-center justify-center lg:justify-start gap-3 p-4 rounded-xl bg-[#08080c] border border-[#232330] hover:border-[#ff003c]/30 transition-colors">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#f5a623]/10 text-[#f5a623] shrink-0">
                <RotateCcw className="h-5 w-5" />
              </div>
              <div>
                <p className="font-semibold text-white">Easy Returns</p>
                <p className="text-xs text-[#6b6b7a]">14-day hassle-free policy</p>
              </div>
            </div>
            <div className="flex items-center justify-center lg:justify-start gap-3 p-4 rounded-xl bg-[#08080c] border border-[#232330] hover:border-[#ff003c]/30 transition-colors">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#03b3c3]/10 text-[#03b3c3] shrink-0">
                <Headphones className="h-5 w-5" />
              </div>
              <div>
                <p className="font-semibold text-white">Expert Support</p>
                <p className="text-xs text-[#6b6b7a]">Mon-Sat 10AM-8PM PKT</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

