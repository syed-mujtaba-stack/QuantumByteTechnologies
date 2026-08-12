'use client';

import React, { useState } from 'react';
import { useCart } from '@/app/context/CartContext';
import confetti from 'canvas-confetti';
import { X, Wrench, CheckCircle2, Calendar, Clock, Send } from 'lucide-react';

export function ServiceBookingModal() {
  const { isBookingOpen, closeBooking, activeServiceBooking } = useCart();
  const [submitted, setSubmitted] = useState(false);

  const [bookingForm, setBookingForm] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: activeServiceBooking ? activeServiceBooking.title : 'Custom Gaming PC Assembly',
    preferredDate: '',
    notes: '',
  });

  if (!isBookingOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#ff003c', '#ffffff'],
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      {/* Dark Overlay */}
      <div
        onClick={closeBooking}
        className="fixed inset-0 bg-[#050505]/85 backdrop-blur-md transition-opacity"
      />

      {/* Modal Container */}
      <div className="relative z-10 w-full max-w-xl rounded-2xl border border-[#ff003c]/40 bg-[#0e0e12] p-6 shadow-2xl shadow-[#ff003c]/20 glass-panel-red">
        {/* Close Button */}
        <button
          onClick={closeBooking}
          className="absolute right-4 top-4 rounded-full bg-[#16161f] p-2 text-[#a1a1aa] transition hover:bg-[#ff003c] hover:text-white"
        >
          <X className="h-5 w-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="flex items-center gap-2 border-b border-[#1f1f2b] pb-4 mb-6">
              <Wrench className="h-5 w-5 text-[#ff003c]" />
              <div>
                <h2 className="text-xl font-black text-white">Book IT Service / Consultation</h2>
                <p className="text-xs text-[#a1a1aa]">
                  Schedule a session with QuantumByte senior hardware & software engineers.
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#a1a1aa] mb-1">Your Full Name *</label>
                  <input
                    type="text"
                    required
                    value={bookingForm.name}
                    onChange={(e) => setBookingForm({ ...bookingForm, name: e.target.value })}
                    placeholder="Alex Morgan"
                    className="w-full rounded-xl border border-[#22222e] bg-[#050505] p-3 text-xs text-white placeholder-[#71717a] outline-none focus:border-[#ff003c]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#a1a1aa] mb-1">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={bookingForm.email}
                    onChange={(e) => setBookingForm({ ...bookingForm, email: e.target.value })}
                    placeholder="alex@company.com"
                    className="w-full rounded-xl border border-[#22222e] bg-[#050505] p-3 text-xs text-white placeholder-[#71717a] outline-none focus:border-[#ff003c]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#a1a1aa] mb-1">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    value={bookingForm.phone}
                    onChange={(e) => setBookingForm({ ...bookingForm, phone: e.target.value })}
                    placeholder="+92 300 1234567"
                    className="w-full rounded-xl border border-[#22222e] bg-[#050505] p-3 text-xs text-white placeholder-[#71717a] outline-none focus:border-[#ff003c]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#a1a1aa] mb-1">Service Type *</label>
                  <select
                    value={bookingForm.serviceType}
                    onChange={(e) => setBookingForm({ ...bookingForm, serviceType: e.target.value })}
                    className="w-full rounded-xl border border-[#22222e] bg-[#050505] p-3 text-xs text-white outline-none focus:border-[#ff003c]"
                  >
                    <option>Custom Gaming & Workstation PC Assembly</option>
                    <option>Hardware Diagnostics & Micro-soldering Repair</option>
                    <option>Corporate IT Infrastructure & Networking</option>
                    <option>Full-Stack Web & Mobile App Development</option>
                    <option>General Tech Inquiry / Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#a1a1aa] mb-1">Preferred Consultation Date</label>
                <input
                  type="date"
                  value={bookingForm.preferredDate}
                  onChange={(e) => setBookingForm({ ...bookingForm, preferredDate: e.target.value })}
                  className="w-full rounded-xl border border-[#22222e] bg-[#050505] p-3 text-xs text-white outline-none focus:border-[#ff003c]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#a1a1aa] mb-1">Requirement Notes / Specs</label>
                <textarea
                  rows={3}
                  value={bookingForm.notes}
                  onChange={(e) => setBookingForm({ ...bookingForm, notes: e.target.value })}
                  placeholder="Describe your PC build budget, laptop repair issue, or networking project details..."
                  className="w-full rounded-xl border border-[#22222e] bg-[#050505] p-3 text-xs text-white placeholder-[#71717a] outline-none focus:border-[#ff003c]"
                />
              </div>

              <button
                type="submit"
                className="red-gradient-btn flex w-full items-center justify-center gap-2 rounded-xl py-3.5 text-xs font-extrabold text-white shadow-xl shadow-[#ff003c]/25"
              >
                <Send className="h-4 w-4" />
                Submit Service Request
              </button>
            </form>
          </div>
        ) : (
          <div className="text-center space-y-4 py-6">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#ff003c]/20 text-[#ff003c]">
              <CheckCircle2 className="h-10 w-10 animate-bounce" />
            </div>

            <h3 className="text-2xl font-black text-white">Booking Request Received!</h3>
            <p className="text-xs text-[#a1a1aa] max-w-sm mx-auto">
              Our lead technical team will contact you at <span className="text-white font-bold">{bookingForm.email}</span> or <span className="text-white font-bold">{bookingForm.phone}</span> within 2 business hours.
            </p>

            <button
              onClick={() => {
                setSubmitted(false);
                closeBooking();
              }}
              className="red-gradient-btn rounded-xl px-6 py-2.5 text-xs font-extrabold text-white shadow-lg shadow-[#ff003c]/30"
            >
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
