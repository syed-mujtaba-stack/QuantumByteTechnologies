'use client';

import React, { useState, useEffect } from 'react';
import { useCart } from '@/app/context/CartContext';
import confetti from 'canvas-confetti';
import { X, Wrench, CheckCircle2, Calendar, Send, ShieldCheck, ArrowLeft, Sparkles } from 'lucide-react';

export function ServiceBookingModal() {
  const { isBookingOpen, closeBooking, activeServiceBooking } = useCart();
  const [submitted, setSubmitted] = useState(false);

  const [bookingForm, setBookingForm] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: activeServiceBooking ? activeServiceBooking.title : 'Custom Gaming & Workstation PC Assembly',
    preferredDate: '',
    notes: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    confetti({
      particleCount: 120,
      spread: 80,
      origin: { y: 0.5 },
      colors: ['#ff003c', '#ffffff', '#00d4aa'],
      zIndex: 100,
    });
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && !submitted) closeBooking();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [submitted, closeBooking]);

  if (!isBookingOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 animate-fade-in">
      <div
        onClick={() => !submitted && closeBooking()}
        className="fixed inset-0 bg-[#030305]/90 backdrop-blur-sm transition-opacity"
        aria-hidden="true"
      />

      <div
        data-lenis-prevent
        className="relative z-10 w-full max-w-xl max-h-[90vh] overflow-y-auto rounded-2xl border border-[#232330] bg-[#0d0d12] shadow-2xl shadow-[#000000]/50 animate-scale-in"
      >
        <button
          onClick={() => !submitted && closeBooking()}
          className="absolute right-4 top-4 z-10 btn btn-icon btn-ghost text-[#6b6b7a] hover:text-white hover:bg-[#14141a]"
          aria-label="Close booking modal"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="p-6 sm:p-8">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#ff003c]/15 text-[#ff003c]">
                    <Wrench className="h-6.5 w-6.5" />
                  </div>
                  <div>
                    <h2 className="text-xl font-black text-white">Book IT Service / Consultation</h2>
                    <p className="text-sm text-[#9c9ca8]">Schedule a session with QuantumByte senior hardware & software engineers.</p>
                  </div>
                </div>
                <div className="rounded-xl border border-[#ff003c]/30 bg-[#ff003c]/5 p-4">
                  <div className="flex items-center gap-2.5 text-sm font-semibold text-[#ff003c]">
                    <Sparkles className="h-4.5 w-4.5" />
                    {activeServiceBooking ? activeServiceBooking.title : 'Custom Gaming PC Assembly'}
                  </div>
                  {activeServiceBooking && (
                    <p className="mt-1 text-sm text-[#9c9ca8] ml-7">{activeServiceBooking.subtitle}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="booking-name" className="label">Your Full Name *</label>
                  <input
                    id="booking-name"
                    type="text"
                    required
                    value={bookingForm.name}
                    onChange={(e) => setBookingForm({ ...bookingForm, name: e.target.value })}
                    placeholder="Alex Morgan"
                    className="input"
                    autoComplete="name"
                  />
                </div>

                <div>
                  <label htmlFor="booking-email" className="label">Email Address *</label>
                  <input
                    id="booking-email"
                    type="email"
                    required
                    value={bookingForm.email}
                    onChange={(e) => setBookingForm({ ...bookingForm, email: e.target.value })}
                    placeholder="alex@company.com"
                    className="input"
                    autoComplete="email"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="booking-phone" className="label">Phone Number *</label>
                  <input
                    id="booking-phone"
                    type="tel"
                    required
                    value={bookingForm.phone}
                    onChange={(e) => setBookingForm({ ...bookingForm, phone: e.target.value })}
                    placeholder="+92 300 1234567"
                    className="input"
                    autoComplete="tel"
                  />
                </div>

                <div>
                  <label htmlFor="booking-service" className="label">Service Type *</label>
                  <select
                    id="booking-service"
                    value={bookingForm.serviceType}
                    onChange={(e) => setBookingForm({ ...bookingForm, serviceType: e.target.value })}
                    className="input appearance-none"
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
                <label htmlFor="booking-date" className="label">Preferred Consultation Date</label>
                <input
                  id="booking-date"
                  type="date"
                  value={bookingForm.preferredDate}
                  onChange={(e) => setBookingForm({ ...bookingForm, preferredDate: e.target.value })}
                  className="input"
                  min={new Date().toISOString().split('T')[0]}
                />
              </div>

              <div>
                <label htmlFor="booking-notes" className="label">Requirement Notes / Specs</label>
                <textarea
                  id="booking-notes"
                  rows={4}
                  value={bookingForm.notes}
                  onChange={(e) => setBookingForm({ ...bookingForm, notes: e.target.value })}
                  placeholder="Describe your PC build budget, laptop repair issue, or networking project details..."
                  className="input resize-none"
                />
              </div>

              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => closeBooking()}
                  className="btn btn-secondary flex-1 justify-center gap-2"
                >
                  <ArrowLeft className="h-4.5 w-4.5" />
                  Cancel
                </button>
                <button
                  type="submit"
                  className="btn btn-primary btn-lg flex-1 justify-center gap-2"
                >
                  <Send className="h-5 w-5" />
                  Submit Service Request
                </button>
              </div>
            </form>
          ) : (
            <div className="text-center space-y-6 py-4 animate-fade-in">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#ff003c]/15 text-[#ff003c] animate-bounce">
                <CheckCircle2 className="h-12 w-12" />
              </div>

              <div>
                <h3 className="text-2xl font-black text-white">Booking Request Received!</h3>
                <p className="text-base text-[#9c9ca8] mt-2 max-w-sm mx-auto">
                  Our lead technical team will contact you at{' '}
                  <span className="text-white font-semibold">{bookingForm.email}</span>{' '}
                  or{' '}
                  <span className="text-white font-semibold">{bookingForm.phone}</span>{' '}
                  within 2 business hours.
                </p>
              </div>

              <div className="rounded-xl border border-[#232330] bg-[#030305] p-4 text-left space-y-2 text-sm">
                <div className="flex items-center gap-2 text-[#9c9ca8]">
                  <ShieldCheck className="h-4.5 w-4.5 text-[#ff003c]" />
                  <span className="font-semibold text-white">Service:</span>
                  <span>{bookingForm.serviceType}</span>
                </div>
                <div className="flex items-center gap-2 text-[#9c9ca8]">
                  <Calendar className="h-4.5 w-4.5 text-[#ff003c]" />
                  <span className="font-semibold text-white">Preferred Date:</span>
                  <span>{bookingForm.preferredDate || 'Not specified'}</span>
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => { setSubmitted(false); closeBooking(); }}
                  className="btn btn-primary btn-lg flex-1 justify-center gap-2"
                >
                  <Sparkles className="h-5 w-5" />
                  Done
                </button>
              </div>

              <p className="text-xs text-[#6b6b7a]">
                For urgent inquiries, call us at
                <a href="tel:+923254803957" className="text-[#ff003c] hover:underline ml-1">+92 325 4803957</a>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}