'use client';

import React from 'react';
import { GSAPReveal } from './GSAPWrapper';
import { Star, Quote, MessageSquare, Package } from 'lucide-react';

interface Review {
  name: string;
  location: string;
  avatar: string;
  rating: number;
  date: string;
  tag: string;
  tagColor: string;
  review: string;
  product?: string;
}

const reviews: Review[] = [
  {
    name: 'Ahmed Raza',
    location: 'Lahore, Punjab',
    avatar: 'AR',
    rating: 5,
    date: 'August 2026',
    tag: 'Custom PC Build',
    tagColor: 'text-[#3B82F6] bg-[#3B82F6]/10 border-[#3B82F6]/20',
    review:
      'Got my custom liquid-cooled build done in 6 days. The cable management is absolutely perfect — looks like it came straight out of a setup tour video. Stress-tested for 24 hours, zero issues. QuantumByte genuinely cares about the craft.',
    product: 'Ryzen 9 + RTX 4080 Super Build',
  },
  {
    name: 'Sana Malik',
    location: 'Karachi, Sindh',
    avatar: 'SM',
    rating: 5,
    date: 'July 2026',
    tag: 'MacBook Pro',
    tagColor: 'text-[#10b981] bg-[#10b981]/10 border-[#10b981]/20',
    review:
      "Ordered a MacBook Pro 14\" and it arrived the very next day in Karachi, perfectly sealed with original box. The serial number verified on Apple's website instantly. 100% legit — I was skeptical at first but QuantumByte is the real deal.",
    product: 'MacBook Pro 14" M3 Pro',
  },
  {
    name: 'Usman Tariq',
    location: 'Islamabad, ICT',
    avatar: 'UT',
    rating: 5,
    date: 'June 2026',
    tag: 'IT Services',
    tagColor: 'text-[#8b5cf6] bg-[#8b5cf6]/10 border-[#8b5cf6]/20',
    review:
      'Hired QB for our office network overhaul — 40 nodes, Ubiquiti APs, Synology NAS. Completed in 3 days. The team was professional, everything was documented, and the network is faster than anything we had before. Will be renewing the SLA.',
    product: 'Corporate Network Infrastructure',
  },
  {
    name: 'Fatima Noor',
    location: 'Faisalabad, Punjab',
    avatar: 'FN',
    rating: 5,
    date: 'May 2026',
    tag: 'Laptop Repair',
    tagColor: 'text-[#f59e0b] bg-[#f59e0b]/10 border-[#f59e0b]/20',
    review:
      'My HP laptop had a dead GPU and liquid damage. Their lab diagnosed it in one day, fixed it in three. They even sent me photos of the repair process. Charged fairly and it came back with a 30-day warranty. Exceptional service.',
    product: 'HP Omen Liquid Damage Recovery',
  },
  {
    name: 'Bilal Khan',
    location: 'Multan, Punjab',
    avatar: 'BK',
    rating: 5,
    date: 'April 2026',
    tag: 'Gaming PC',
    tagColor: 'text-[#06b6d4] bg-[#06b6d4]/10 border-[#06b6d4]/20',
    review:
      "The ASUS ROG Strix I bought came with full original warranty, benchmarks were included in the box, and delivery was insured. I've bought from two other shops before — nobody comes close to QB for transparency and packaging quality.",
    product: 'ASUS ROG Strix G35 Gaming Desktop',
  },
  {
    name: 'Hina Shahid',
    location: 'Rawalpindi, Punjab',
    avatar: 'HS',
    rating: 5,
    date: 'March 2026',
    tag: 'Web Dev',
    tagColor: 'text-[#ec4899] bg-[#ec4899]/10 border-[#ec4899]/20',
    review:
      'QB built our e-commerce platform from scratch in Next.js. The UI is stunning, the Lighthouse score hits 97, and the Sanity CMS backend is easy to manage. Delivered in 3 weeks as promised. Already planning the mobile app with them.',
    product: 'Full-Stack E-Commerce Platform',
  },
  {
    name: 'Zain ul Abidin',
    location: 'Sialkot, Punjab',
    avatar: 'ZA',
    rating: 5,
    date: 'February 2026',
    tag: 'Samsung Mobile',
    tagColor: 'text-[#10b981] bg-[#10b981]/10 border-[#10b981]/20',
    review:
      'Bought a Samsung S24 Ultra — factory sealed, IMEI verified, original charger included. Delivery was next-day to Sialkot which I did not expect. Price was better than every local shop I checked. Will be back for a laptop next month.',
    product: 'Samsung Galaxy S24 Ultra',
  },
  {
    name: 'Rabia Iqbal',
    location: 'Gujranwala, Punjab',
    avatar: 'RI',
    rating: 5,
    date: 'January 2026',
    tag: 'Custom PC Build',
    tagColor: 'text-[#3B82F6] bg-[#3B82F6]/10 border-[#3B82F6]/20',
    review:
      'Ordered a custom workstation for 3D rendering. The team helped me pick the right components within my budget, built it cleanly, and the render times are incredible. The white hardline loop they fabricated looks unreal.',
    product: 'AMD Threadripper Render Node',
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          className={`h-3.5 w-3.5 ${i <= rating ? 'fill-[#F59E0B] text-[#F59E0B]' : 'text-[#2d3748]'}`}
        />
      ))}
    </div>
  );
}

function ReviewCard({ review }: { review: Review }) {
  return (
    <div className="group flex flex-col w-[320px] sm:w-[340px] shrink-0 rounded-2xl border border-white/[0.06] bg-[#0B0F18] p-5 transition-all duration-300 hover:border-white/[0.12] hover:bg-[#0d1220] hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(0,0,0,0.4)]">

      {/* Top row — quote + tag */}
      <div className="flex items-start justify-between mb-3">
        <Quote className="h-5 w-5 text-[#8b5cf6]/35 shrink-0 mt-0.5" />
        <span className={`text-[10px] font-bold uppercase tracking-wide px-2 py-0.5 rounded-md border ${review.tagColor}`}>
          {review.tag}
        </span>
      </div>

      {/* Stars */}
      <div className="mb-3">
        <StarRating rating={review.rating} />
      </div>

      {/* Review text — fixed height so all cards align */}
      <p className="text-[12.5px] text-[#94A3B8] leading-relaxed flex-1 line-clamp-4">
        {review.review}
      </p>

      {/* Product chip */}
      {review.product && (
        <div className="mt-3">
          <span className="inline-flex items-center gap-1 rounded-md border border-white/[0.06] bg-white/[0.03] px-2 py-0.5 text-[10px] font-medium text-[#475569] max-w-full truncate">
            <Package className="shrink-0 h-3 w-3" />
            <span className="truncate">{review.product}</span>
          </span>
        </div>
      )}

      {/* Author */}
      <div className="mt-4 pt-3.5 border-t border-white/[0.05] flex items-center gap-2.5">
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#8b5cf6]/25 to-[#6d28d9]/15 border border-[#8b5cf6]/15 text-[10px] font-black text-[#a78bfa]">
          {review.avatar}
        </div>
        <div className="min-w-0">
          <p className="text-[12.5px] font-bold text-white leading-tight truncate">{review.name}</p>
          <p className="text-[10.5px] text-[#475569] truncate">{review.location} · {review.date}</p>
        </div>
      </div>
    </div>
  );
}

export function ClientVoices() {
  // Duplicate for seamless loop
  const track = [...reviews, ...reviews];

  return (
    <section
      className="relative overflow-hidden qb-section-purple py-14 lg:py-20"
      aria-labelledby="testimonials-heading"
    >
      {/* Animated background orbs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="qb-orb-drift-slow absolute -top-32 left-1/4 h-[520px] w-[520px] rounded-full bg-[#7C3AED]/[0.18] blur-[110px]" />
        <div className="qb-orb-drift absolute -bottom-32 right-1/4 h-[420px] w-[420px] rounded-full bg-[#5B21B6]/[0.14] blur-[100px]" />
        <div className="qb-orb-drift-rev absolute top-1/2 left-3/4 h-[280px] w-[280px] rounded-full bg-[#BE185D]/[0.08] blur-[80px]" />
        <div className="absolute top-0    inset-x-0 h-px bg-gradient-to-r from-transparent via-[#8B5CF6]/[0.2] to-transparent" />
        <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#8B5CF6]/[0.12] to-transparent" />
      </div>

      {/* ── Header ────────────────────────────────────────────────── */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-10 lg:mb-12">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-5">

          <div className="max-w-xl">
            <GSAPReveal direction="down" delay={0.05}>
              <div className="inline-flex items-center gap-1.5 rounded-full border border-[#8b5cf6]/25 bg-[#8b5cf6]/[0.07] px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.1em] text-[#a78bfa] mb-4">
                <MessageSquare className="h-3 w-3" />
                Client Voices
              </div>
            </GSAPReveal>

            <GSAPReveal direction="up" delay={0.1}>
              <h2
                id="testimonials-heading"
                className="text-[1.85rem] sm:text-4xl lg:text-[2.5rem] font-black tracking-[-0.03em] leading-[1.1] text-white"
              >
                What They{' '}
                <span className="bg-gradient-to-r from-[#a78bfa] via-[#8b5cf6] to-[#6d28d9] bg-clip-text text-transparent">
                  Say
                </span>
              </h2>
            </GSAPReveal>

            <GSAPReveal direction="up" delay={0.15}>
              <p className="mt-2.5 text-[14px] text-[#64748B] leading-relaxed">
                Real feedback from real customers — custom PC builds, hardware repair, IT services, and software.
              </p>
            </GSAPReveal>
          </div>

          {/* Aggregate rating pill */}
          <GSAPReveal direction="left" delay={0.15}>
            <div className="inline-flex items-center gap-3 rounded-2xl border border-white/[0.06] bg-white/[0.025] px-5 py-3 shrink-0">
              <div className="flex items-center gap-0.5">
                {[1,2,3,4,5].map((i) => (
                  <Star key={i} className="h-4 w-4 fill-[#F59E0B] text-[#F59E0B]" />
                ))}
              </div>
              <span className="text-[20px] font-black text-white tracking-tight">4.9</span>
              <div className="w-px h-5 bg-white/[0.08]" />
              <div className="text-left">
                <p className="text-[12px] font-semibold text-white leading-tight">10,000+ Orders</p>
                <p className="text-[10px] text-[#475569]">Verified customers</p>
              </div>
            </div>
          </GSAPReveal>
        </div>
      </div>

      {/* ── Scrolling marquee — full bleed ───────────────────────── */}
      <div className="relative z-10">
        {/* Left & right fade masks */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 sm:w-28 bg-gradient-to-r from-[#05070D] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 sm:w-28 bg-gradient-to-l from-[#05070D] to-transparent" />

        <style jsx>{`
          @keyframes cv-scroll {
            from { transform: translateX(0); }
            to   { transform: translateX(-50%); }
          }
          .cv-track {
            display: flex;
            width: max-content;
            gap: 16px;
            padding: 4px 8px 12px;
            animation: cv-scroll 40s linear infinite;
            will-change: transform;
          }
          .cv-wrap:hover .cv-track {
            animation-play-state: paused;
          }
          @media (prefers-reduced-motion: reduce) {
            .cv-track { animation: none; }
          }
        `}</style>

        <div className="cv-wrap overflow-hidden">
          <div className="cv-track">
            {track.map((review, idx) => (
              <ReviewCard key={`${review.name}-${idx}`} review={review} />
            ))}
          </div>
        </div>
      </div>

      {/* Bottom note */}
      <p className="relative z-10 mt-8 text-center text-[11.5px] text-[#475569] px-4">
        All reviews are from verified customers. Orders tracked &amp; fulfilled through QuantumByte Technologies.
      </p>
    </section>
  );
}
