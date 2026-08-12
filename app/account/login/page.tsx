'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Lock, Mail, ArrowRight, Cpu, ShieldCheck } from 'lucide-react';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push('/account/dashboard');
  };

  return (
    <div className="w-full max-w-md space-y-6">
      <div className="rounded-2xl border border-[#22222e] bg-[#0e0e12] p-8 shadow-2xl glass-panel text-center space-y-6">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#ff003c] to-[#990024] p-3 text-white shadow-lg shadow-[#ff003c]/30">
          <Cpu className="h-8 w-8 animate-pulse" />
        </div>

        <div>
          <span className="text-[10px] font-extrabold text-[#ff003c] uppercase tracking-widest">
            SECURE PORTAL ACCESS
          </span>
          <h1 className="text-2xl font-black text-white mt-1">SIGN IN TO YOUR ACCOUNT</h1>
          <p className="text-xs text-[#a1a1aa] mt-1">Manage orders, custom builds, and hardware warranties.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 text-left">
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
                className="w-full rounded-xl border border-[#22222e] bg-[#050505] py-3 pl-10 pr-4 text-xs text-white outline-none focus:border-[#ff003c]"
              />
            </div>
          </div>

          <div>
            <div className="flex justify-between items-center mb-1">
              <label className="block text-xs font-bold text-[#a1a1aa]">Password</label>
              <Link href="/account/forgot-password" className="text-[11px] text-[#ff003c] hover:underline">
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
                className="w-full rounded-xl border border-[#22222e] bg-[#050505] py-3 pl-10 pr-4 text-xs text-white outline-none focus:border-[#ff003c]"
              />
            </div>
          </div>

          <button
            type="submit"
            className="red-gradient-btn flex w-full items-center justify-center gap-2 rounded-xl py-3.5 text-xs font-extrabold text-white shadow-xl shadow-[#ff003c]/25 mt-2"
          >
            Sign In to Dashboard
            <ArrowRight className="h-4 w-4" />
          </button>
        </form>

        <div className="pt-4 border-t border-[#1f1f2b] text-xs text-[#a1a1aa]">
          Don't have a QuantumByte account?{' '}
          <Link href="/account/register" className="font-bold text-[#ff003c] hover:underline">
            Register Here
          </Link>
        </div>
      </div>
    </div>
  );
}
