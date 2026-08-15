'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/app/context/AuthContext';
import { Lock, Mail, ArrowRight, Cpu, ShieldCheck, Loader2 } from 'lucide-react';

export default function LoginPage() {
  const router = useRouter();
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSubmitting(true);
    const res = await login(email, password);
    setSubmitting(false);
    if (res.ok) {
      const next = new URLSearchParams(window.location.search).get('next');
      router.push(next && next.startsWith('/') && !next.startsWith('//') ? next : '/account/dashboard');
    } else {
      setError(res.error || 'Login failed. Please try again.');
    }
  };

  return (
    <div className="w-full max-w-md space-y-6">
      <div className="rounded-2xl border border-[#22222e] bg-[#0e0e12] p-8 shadow-2xl glass-panel text-center space-y-6">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#3B82F6] to-[#990024] p-3 text-white shadow-lg shadow-[#3B82F6]/30">
          <Cpu className="h-8 w-8 animate-pulse" />
        </div>

        <div>
          <span className="text-[10px] font-extrabold text-[#3B82F6] uppercase tracking-widest">
            SECURE PORTAL ACCESS
          </span>
          <h1 className="text-2xl font-black text-white mt-1">SIGN IN TO YOUR ACCOUNT</h1>
          <p className="text-xs text-[#a1a1aa] mt-1">Manage orders, custom builds, and hardware warranties.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 text-left">
          {error && (
            <div className="rounded-xl border border-[#ef4444]/40 bg-[#ef4444]/10 p-3 text-xs font-bold text-[#ef4444]">
              {error}
            </div>
          )}
          <div>
            <label className="block text-xs font-bold text-[#a1a1aa] mb-1">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#71717a]" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="john.doe@example.com"
                className="w-full rounded-xl border border-[#22222e] bg-[#050505] py-3 pl-10 pr-4 text-xs text-white outline-none focus:border-[#3B82F6]"
              />
            </div>
          </div>

          <div>
            <div className="flex justify-between items-center mb-1">
              <label className="block text-xs font-bold text-[#a1a1aa]">Password</label>
              <Link href="/account/forgot-password" className="text-[11px] text-[#3B82F6] hover:underline">
                Forgot password?
              </Link>
            </div>
            <div className="relative">
              <Lock className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#71717a]" />
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••••••"
                className="w-full rounded-xl border border-[#22222e] bg-[#050505] py-3 pl-10 pr-4 text-xs text-white outline-none focus:border-[#3B82F6]"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="red-gradient-btn flex w-full items-center justify-center gap-2 rounded-xl py-3.5 text-xs font-extrabold text-white shadow-xl shadow-[#3B82F6]/25 mt-2 disabled:opacity-60"
          >
            {submitting ? <Loader2 className="h-4 w-4 animate-spin" /> : <ArrowRight className="h-4 w-4" />}
            {submitting ? 'Signing In...' : 'Sign In to Dashboard'}
          </button>
        </form>

        <div className="pt-4 border-t border-[#1f1f2b] text-xs text-[#a1a1aa]">
          Don't have a QuantumByte account?{' '}
          <Link href="/account/register" className="font-bold text-[#3B82F6] hover:underline">
            Register Here
          </Link>
        </div>
      </div>
    </div>
  );
}
