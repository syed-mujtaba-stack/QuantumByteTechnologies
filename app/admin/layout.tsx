'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useAuth } from '@/app/context/AuthContext';
import {
  LayoutDashboard,
  Package,
  Layers,
  ShoppingBag,
  Users,
  UserCheck,
  Building2,
  Tag,
  Star,
  BarChart3,
  Settings,
  Cpu,
  Bell,
  Search,
  ExternalLink,
  Menu,
  X,
  ShieldAlert,
  ShieldX,
  Loader2
} from 'lucide-react';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const { user, loading } = useAuth();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [denied, setDenied] = useState(false);

  useEffect(() => {
    if (loading) return;
    if (!user) {
      router.replace('/account/login?next=/admin');
      return;
    }
    if (user.role !== 'super admin') {
      setDenied(true);
    }
  }, [user, loading, router]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#030305] flex items-center justify-center">
        <div className="flex flex-col items-center gap-3 text-[#a1a1aa]">
          <Loader2 className="h-8 w-8 animate-spin text-[#ff003c]" />
          <span className="text-xs font-extrabold tracking-widest uppercase">Verifying Admin Access...</span>
        </div>
      </div>
    );
  }

  if (!user && !denied) {
    return (
      <div className="min-h-screen bg-[#030305] flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-[#ff003c]" />
      </div>
    );
  }

  if (denied) {
    return (
      <div className="min-h-screen bg-[#030305] flex items-center justify-center p-6">
        <div className="max-w-md w-full rounded-2xl border border-[#ff003c]/40 bg-[#0e0e12] p-8 text-center space-y-4 glass-panel-red">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#ff003c]/15 text-[#ff003c]">
            <ShieldX className="h-7 w-7" />
          </div>
          <div>
            <span className="text-[10px] font-extrabold text-[#ff003c] uppercase tracking-widest">ACCESS DENIED</span>
            <h1 className="text-xl font-black text-white mt-1">NOT AUTHORIZED</h1>
            <p className="text-xs text-[#a1a1aa] mt-2">
              Your account ({user?.email}) is not assigned the <span className="font-bold text-white">Super Admin</span> role.
              Ask the platform owner to set your role in the Sanity Studio users list.
            </p>
          </div>
          <Link
            href={user ? '/account/dashboard' : '/account/login'}
            className="inline-flex items-center rounded-xl border border-[#22222e] bg-[#16161f] px-5 py-2.5 text-xs font-extrabold text-white hover:border-[#ff003c]"
          >
            Return to My Account
          </Link>
        </div>
      </div>
    );
  }

  const adminNav = [
    { href: '/admin', label: 'Dashboard', icon: LayoutDashboard },
    { href: '/admin/products', label: 'Products Catalog', icon: Package },
    { href: '/admin/categories', label: 'Categories', icon: Layers },
    { href: '/admin/orders', label: 'Orders & Fulfillment', icon: ShoppingBag },
    { href: '/admin/customers', label: 'Customers Directory', icon: Users },
    { href: '/admin/users', label: 'Staff Users & Roles', icon: UserCheck },
    { href: '/admin/vendors', label: 'Hardware Vendors', icon: Building2 },
    { href: '/admin/coupons', label: 'Coupons & Promos', icon: Tag },
    { href: '/admin/reviews', label: 'Reviews Moderation', icon: Star },
    { href: '/admin/analytics', label: 'Sales & Analytics', icon: BarChart3 },
    { href: '/admin/settings', label: 'Platform Settings', icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-[#030305] text-white flex flex-col font-sans selection:bg-[#ff003c] selection:text-white">
      {/* Topbar */}
      <header className="sticky top-0 z-40 border-b border-[#1f1f2b] bg-[#08080c]/90 backdrop-blur-xl px-4 py-3 sm:px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="lg:hidden rounded-xl border border-[#22222e] bg-[#0e0e12] p-2 text-white"
            >
              {sidebarOpen ? <X className="h-5 w-5 text-[#ff003c]" /> : <Menu className="h-5 w-5" />}
            </button>

            {/* Admin Brand Logo */}
            <Link href="/admin" className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[#ff003c] to-[#990024] p-1.5 text-white shadow-lg shadow-[#ff003c]/20">
                <Cpu className="h-5 w-5 animate-pulse" />
              </div>
              <div className="flex flex-col">
                <span className="text-base font-black tracking-tight text-white">
                  QUANTUM<span className="text-[#ff003c]">BYTE</span>
                </span>
                <span className="text-[9px] font-bold tracking-widest text-[#ff003c] uppercase">
                  Control Center
                </span>
              </div>
            </Link>
          </div>

          {/* Quick Search & Actions */}
          <div className="flex items-center gap-3">
            <Link
              href="/"
              target="_blank"
              className="hidden sm:flex items-center gap-1.5 rounded-xl border border-[#22222e] bg-[#0e0e12] px-3.5 py-1.5 text-xs font-bold text-[#a1a1aa] transition hover:border-[#ff003c] hover:text-white"
            >
              Live Storefront
              <ExternalLink className="h-3.5 w-3.5 text-[#ff003c]" />
            </Link>

            <div className="relative">
              <button className="relative flex h-9 w-9 items-center justify-center rounded-xl border border-[#22222e] bg-[#0e0e12] text-[#a1a1aa] transition hover:border-[#ff003c] hover:text-white">
                <Bell className="h-4 w-4" />
                <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-[#ff003c] animate-ping" />
              </button>
            </div>

            {/* Admin User Chip */}
            <div className="flex items-center gap-2.5 rounded-xl border border-[#ff003c]/40 bg-[#ff003c]/10 px-3 py-1 text-xs font-bold text-white">
              <span className="h-2 w-2 rounded-full bg-[#22c55e]" />
              {user?.email ? (
                <span className="max-w-[180px] truncate">{user.email}</span>
              ) : (
                <span>Super Admin</span>
              )}
            </div>
          </div>
        </div>
      </header>

      <div className="flex-1 flex">
        {/* Sidebar Navigation */}
        <aside
          className={`fixed inset-y-0 left-0 z-30 w-64 transform border-r border-[#1f1f2b] bg-[#08080c] p-4 transition-transform duration-300 lg:static lg:translate-x-0 ${
            sidebarOpen ? 'translate-x-0 top-14' : '-translate-x-full lg:translate-x-0'
          }`}
        >
          <div className="mb-4 px-3 text-[10px] font-extrabold uppercase tracking-widest text-[#ff003c]">
            Management Console
          </div>

          <nav className="space-y-1">
            {adminNav.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href || (item.href !== '/admin' && pathname.startsWith(item.href));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setSidebarOpen(false)}
                  className={`flex items-center gap-3 rounded-xl px-3.5 py-2.5 text-xs font-bold transition ${
                    isActive
                      ? 'bg-[#ff003c] text-white shadow-lg shadow-[#ff003c]/30 font-extrabold'
                      : 'text-[#a1a1aa] hover:bg-[#12121c] hover:text-white'
                  }`}
                >
                  <Icon className={`h-4 w-4 ${isActive ? 'text-white' : 'text-[#ff003c]'}`} />
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="mt-8 rounded-xl border border-[#ff003c]/30 bg-[#ff003c]/10 p-3.5 text-xs">
            <div className="flex items-center gap-2 font-bold text-white mb-1">
              <ShieldAlert className="h-4 w-4 text-[#ff003c]" />
              Sanity CMS Sync
            </div>
            <p className="text-[11px] text-[#a1a1aa]">Dataset: production (uu3ulr6g)</p>
          </div>
        </aside>

        {/* Main Admin Area */}
        <main className="flex-1 bg-[#030305] p-4 sm:p-6 lg:p-8 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
