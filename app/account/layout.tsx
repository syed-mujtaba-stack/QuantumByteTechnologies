'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useAuth } from '@/app/context/AuthContext';
import { Navbar } from '@/app/components/Navbar';
import { Footer } from '@/app/components/Footer';
import {
  LayoutDashboard,
  User,
  MapPin,
  ShoppingBag,
  Heart,
  Settings,
  LogOut,
  ShieldCheck,
  ChevronRight,
  Loader2
} from 'lucide-react';

export default function AccountLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const { user, loading, logout } = useAuth();

  // If on auth pages (login, register, forgot-password), render without sidebar layout
  const isAuthPage = ['/account/login', '/account/register', '/account/forgot-password'].includes(pathname);

  useEffect(() => {
    if (!loading && !user && !isAuthPage) {
      router.replace('/account/login');
    }
  }, [loading, user, isAuthPage, router]);

  if (isAuthPage) {
    return (
      <div className="min-h-screen bg-[#050505] text-white flex flex-col font-sans selection:bg-[#ff003c] selection:text-white">
        <Navbar />
        <main className="flex-1 flex items-center justify-center p-4 py-12 cyber-grid-bg">
          {children}
        </main>
        <Footer />
      </div>
    );
  }

  const handleSignOut = async () => {
    await logout();
    router.push('/account/login');
  };

  const initials = user
    ? user.name.split(' ').map((p) => p[0]).slice(0, 2).join('').toUpperCase()
    : 'QB';

  const navItems = [
    { href: '/account/dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { href: '/account/profile', label: 'My Profile', icon: User },
    { href: '/account/orders', label: 'Order History', icon: ShoppingBag },
    { href: '/account/wishlist', label: 'Wishlist', icon: Heart },
    { href: '/account/addresses', label: 'Address Book', icon: MapPin },
    { href: '/account/settings', label: 'Security & Settings', icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white flex flex-col font-sans selection:bg-[#ff003c] selection:text-white">
      <Navbar />

      <main className="flex-1 py-10 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb Header */}
          <div className="mb-8 flex items-center gap-2 text-xs text-[#a1a1aa]">
            <Link href="/" className="hover:text-white">Home</Link>
            <ChevronRight className="h-3 w-3 text-[#ff003c]" />
            <span className="text-white font-bold">Customer Account Portal</span>
          </div>

          {loading || !user ? (
            <div className="flex items-center justify-center py-24">
              <Loader2 className="h-8 w-8 animate-spin text-[#ff003c]" />
            </div>
          ) : (
          <div className="grid gap-8 lg:grid-cols-12">
            {/* Account Sidebar */}
            <aside className="lg:col-span-3 space-y-6">
              <div className="rounded-2xl border border-[#22222e] bg-[#0e0e12] p-5 shadow-xl glass-panel">
                {/* User Card */}
                <div className="flex items-center gap-3 pb-5 border-b border-[#1f1f2b]">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#ff003c] to-[#990024] text-white font-black text-lg shadow-md shadow-[#ff003c]/20">
                    {initials}
                  </div>
                  <div>
                    <h3 className="text-sm font-extrabold text-white">{user.name}</h3>
                    <p className="text-[11px] text-[#a1a1aa]">{user.email}</p>
                    <span className="mt-1 inline-flex items-center gap-1 rounded bg-[#ff003c]/15 px-2 py-0.5 text-[10px] font-bold text-[#ff003c]">
                      <ShieldCheck className="h-3 w-3" /> {user.isAdmin ? 'Admin' : 'Verified Member'}
                    </span>
                  </div>
                </div>

                {/* Nav Links */}
                <nav className="mt-4 space-y-1">
                  {navItems.map((item) => {
                    const Icon = item.icon;
                    const isActive = pathname === item.href;
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={`flex items-center gap-3 rounded-xl px-4 py-3 text-xs font-bold transition ${
                          isActive
                            ? 'bg-[#ff003c] text-white shadow-lg shadow-[#ff003c]/25'
                            : 'text-[#a1a1aa] hover:bg-[#16161f] hover:text-white'
                        }`}
                      >
                        <Icon className={`h-4 w-4 ${isActive ? 'text-white' : 'text-[#ff003c]'}`} />
                        {item.label}
                      </Link>
                    );
                  })}
                </nav>

                <div className="mt-6 pt-4 border-t border-[#1f1f2b]">
                  <button
                    onClick={handleSignOut}
                    className="flex w-full items-center gap-3 rounded-xl px-4 py-2.5 text-xs font-bold text-[#ef4444] transition hover:bg-[#ef4444]/10"
                  >
                    <LogOut className="h-4 w-4" />
                    Sign Out
                  </button>
                </div>
              </div>
            </aside>

            {/* Page Content */}
            <div className="lg:col-span-9">
              {children}
            </div>
          </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
