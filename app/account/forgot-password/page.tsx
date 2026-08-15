'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Mail, ArrowRight, KeyRound, CheckCircle2 } from 'lucide-react';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="w-full max-w-md space-y-6">
      <div className="rounded-2xl border border-[#22222e] bg-[#0e0e12] p-8 shadow-2xl glass-panel text-center space-y-6">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#3B82F6]/20 text-[#3B82F6]">
          <KeyRound className="h-7 w-7" />
        </div>

        <div>
          <span className="text-[10px] font-extrabold text-[#3B82F6] uppercase tracking-widest">
            PASSWORD RECOVERY
          </span>
          <h1 className="text-2xl font-black text-white mt-1">FORGOT YOUR PASSWORD?</h1>
          <p className="text-xs text-[#a1a1aa] mt-1">Enter your account email to receive a password reset link.</p>
        </div>

        {submitted ? (
          <div className="rounded-xl border border-[#22c55e]/30 bg-[#22c55e]/10 p-4 text-xs text-[#22c55e] space-y-2">
            <CheckCircle2 className="h-6 w-6 mx-auto text-[#22c55e]" />
            <p className="font-bold">Reset Instructions Sent!</p>
            <p className="text-[11px] text-[#a1a1aa]">Check your inbox at <strong>{email}</strong> for instructions.</p>
          </div>
        ) : (
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
                  className="w-full rounded-xl border border-[#22222e] bg-[#050505] py-3 pl-10 pr-4 text-xs text-white outline-none focus:border-[#3B82F6]"
                />
              </div>
            </div>

            <button
              type="submit"
              className="red-gradient-btn flex w-full items-center justify-center gap-2 rounded-xl py-3.5 text-xs font-extrabold text-white shadow-xl shadow-[#3B82F6]/25 mt-2"
            >
              Send Reset Link
              <ArrowRight className="h-4 w-4" />
            </button>
          </form>
        )}

        <div className="pt-4 border-t border-[#1f1f2b] text-xs text-[#a1a1aa]">
          Remember your password?{' '}
          <Link href="/account/login" className="font-bold text-[#3B82F6] hover:underline">
            Back to Sign In
          </Link>
        </div>
      </div>
    </div>
  );
}
