'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Navbar } from '@/app/components/Navbar';
import { Footer } from '@/app/components/Footer';
import { CartDrawer } from '@/app/components/CartDrawer';
import { Mail, Phone, MapPin, Send, MessageSquare, ChevronRight, CheckCircle2 } from 'lucide-react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#05070D] text-white flex flex-col font-sans selection:bg-[#3B82F6] selection:text-white">
      <Navbar />

      <main className="flex-1 py-10 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="mb-6 flex items-center gap-2 text-xs text-[#94A3B8]">
            <Link href="/" className="hover:text-white">Home</Link>
            <ChevronRight className="h-3 w-3 text-[#3B82F6]" />
            <span className="text-white font-bold">Contact Support</span>
          </div>

          <div className="grid gap-10 md:grid-cols-12">
            {/* Contact Info Sidebar */}
            <div className="md:col-span-5 space-y-6">
              <div>
                <span className="text-xs font-extrabold text-[#3B82F6] uppercase tracking-widest">
                  24/7 TECHNICAL HELPDESK
                </span>
                <h1 className="text-3xl font-black text-white sm:text-4xl mt-1">
                  GET IN TOUCH WITH <span className="text-[#3B82F6]">OUR LAB</span>
                </h1>
                <p className="text-xs text-[#94A3B8] mt-2 leading-relaxed">
                  Have questions about a custom PC build, component compatibility, motherboard repair, or corporate IT services? Talk to our certified engineers directly.
                </p>
              </div>

              <div className="space-y-4 text-xs">
                <div className="flex items-start gap-4 rounded-xl border border-white/[0.06] bg-[#080B12] p-4 glass-panel">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#3B82F6] text-white">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Headquarters & Tech Lab</h4>
                    <p className="text-[#94A3B8] mt-0.5">Office No 7, Second Floor, AZ Mall Platform — Back Side Al-Fateh Kohinoor, Madina Town, Faisalabad, Punjab, Pakistan</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 rounded-xl border border-white/[0.06] bg-[#080B12] p-4 glass-panel">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#3B82F6] text-white">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Direct Email Inquiries</h4>
                    <p className="text-[#94A3B8] mt-0.5">support@quantumbyte.tech</p>
                    <p className="text-[#94A3B8]">sales@quantumbyte.tech</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 rounded-xl border border-white/[0.06] bg-[#080B12] p-4 glass-panel">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#3B82F6] text-white">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Support Hotline</h4>
                    <p className="text-[#94A3B8] mt-0.5">+92 325 4803957</p>
                    <p className="text-[#94A3B8]">+92 325 4803957 (WhatsApp 24/7)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="md:col-span-7">
              <div className="rounded-2xl border border-white/[0.06] bg-[#080B12] p-8 shadow-2xl glass-panel space-y-6">
                <h3 className="text-xl font-black text-white border-b border-[#1f1f2b] pb-4 flex items-center gap-2">
                  <MessageSquare className="h-5 w-5 text-[#3B82F6]" />
                  Send Us a Direct Message
                </h3>

                {submitted ? (
                  <div className="rounded-xl border border-[#22c55e]/40 bg-[#22c55e]/10 p-6 text-center text-xs text-[#22c55e] space-y-2">
                    <CheckCircle2 className="h-8 w-8 mx-auto" />
                    <h4 className="text-base font-bold">Message Received!</h4>
                    <p className="text-[#94A3B8]">Our hardware support team will get back to you within 2 business hours.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-[#94A3B8] mb-1">Your Name *</label>
                        <input
                          type="text"
                          required
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          placeholder="Alex Morgan"
                          className="w-full rounded-xl border border-white/[0.06] bg-[#05070D] p-3 text-xs text-white outline-none focus:border-[#3B82F6]"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-[#94A3B8] mb-1">Email Address *</label>
                        <input
                          type="email"
                          required
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          placeholder="alex@example.com"
                          className="w-full rounded-xl border border-white/[0.06] bg-[#05070D] p-3 text-xs text-white outline-none focus:border-[#3B82F6]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#94A3B8] mb-1">Subject *</label>
                      <input
                        type="text"
                        required
                        value={form.subject}
                        onChange={(e) => setForm({ ...form, subject: e.target.value })}
                        placeholder="Inquiry about RTX 4090 availability / Custom PC quote..."
                        className="w-full rounded-xl border border-white/[0.06] bg-[#05070D] p-3 text-xs text-white outline-none focus:border-[#3B82F6]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#94A3B8] mb-1">Message Details *</label>
                      <textarea
                        rows={4}
                        required
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        placeholder="Describe your technical request or question here..."
                        className="w-full rounded-xl border border-white/[0.06] bg-[#05070D] p-3 text-xs text-white outline-none focus:border-[#3B82F6]"
                      />
                    </div>

                    <button
                      type="submit"
                      className="red-gradient-btn flex w-full items-center justify-center gap-2 rounded-xl py-3.5 text-xs font-extrabold text-white shadow-xl shadow-[#3B82F6]/25"
                    >
                      <Send className="h-4 w-4" />
                      Submit Message to Engineers
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <CartDrawer />
    </div>
  );
}
