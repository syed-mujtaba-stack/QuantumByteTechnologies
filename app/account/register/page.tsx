'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/app/context/AuthContext';
import { Lock, Mail, User, Phone, ArrowRight, Cpu, Loader2 } from 'lucide-react';

export default function RegisterPage() {
  const router = useRouter();
  const { register } = useAuth();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
  });
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSubmitting(true);
    const res = await register(formData);
    setSubmitting(false);
    if (res.ok) {
      router.push('/account/dashboard');
    } else {
      setError(res.error || 'Registration failed. Please try again.');
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
            JOIN QUANTUMBYTE CLUB
          </span>
          <h1 className="text-2xl font-black text-white mt-1">CREATE AN ACCOUNT</h1>
          <p className="text-xs text-[#a1a1aa] mt-1">Access VIP deals, build history, and priority tech support.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 text-left">
          {error && (
            <div className="rounded-xl border border-[#ef4444]/40 bg-[#ef4444]/10 p-3 text-xs font-bold text-[#ef4444]">
              {error}
            </div>
          )}
          <div>
            <label className="block text-xs font-bold text-[#a1a1aa] mb-1">Full Name</label>
            <div className="relative">
              <User className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#71717a]" />
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="John Doe"
                className="w-full rounded-xl border border-[#22222e] bg-[#050505] py-3 pl-10 pr-4 text-xs text-white outline-none focus:border-[#3B82F6]"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-[#a1a1aa] mb-1">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#71717a]" />
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="john.doe@example.com"
                className="w-full rounded-xl border border-[#22222e] bg-[#050505] py-3 pl-10 pr-4 text-xs text-white outline-none focus:border-[#3B82F6]"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-[#a1a1aa] mb-1">Phone Number</label>
            <div className="relative">
              <Phone className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#71717a]" />
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="+92 300 1234567"
                className="w-full rounded-xl border border-[#22222e] bg-[#050505] py-3 pl-10 pr-4 text-xs text-white outline-none focus:border-[#3B82F6]"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-[#a1a1aa] mb-1">Create Password</label>
            <div className="relative">
              <Lock className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#71717a]" />
              <input
                type="password"
                required
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
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
            {submitting ? 'Creating Account...' : 'Create Free Account'}
          </button>
        </form>

        <div className="pt-4 border-t border-[#1f1f2b] text-xs text-[#a1a1aa]">
          Already registered?{' '}
          <Link href="/account/login" className="font-bold text-[#3B82F6] hover:underline">
            Sign In Here
          </Link>
        </div>
      </div>
    </div>
  );
}
