'use client';

import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface StatItem {
  value: number;
  suffix: string;
  label: string;
  sublabel: string;
}

export function StatsCounter({ productsCount }: { productsCount: number }) {
  const sectionRef = useRef<HTMLElement>(null);

  const stats: StatItem[] = [
    { value: productsCount, suffix: '+',  label: 'Products Available',  sublabel: 'In stock & ready' },
    { value: 10000,         suffix: '+',  label: 'Happy Customers',      sublabel: 'Nationwide' },
    { value: 100,           suffix: '%',  label: 'Genuine Hardware',     sublabel: 'Certified authentic' },
    { value: 24,            suffix: '/7', label: 'Tech Support',         sublabel: 'Expert assistance' },
  ];

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      section.querySelectorAll('[data-counter]').forEach((el) => {
        el.textContent = el.getAttribute('data-target') ?? '';
      });
      return;
    }

    const ctx = gsap.context(() => {
      section.querySelectorAll('[data-counter]').forEach((el) => {
        const target = Number(el.getAttribute('data-target'));
        const state = { val: 0 };
        ScrollTrigger.create({
          trigger: el,
          start: 'top 92%',
          once: true,
          onEnter: () => {
            gsap.to(state, {
              val: target,
              duration: 1.6,
              ease: 'power2.out',
              onUpdate: () => {
                el.textContent = Math.round(state.val).toLocaleString();
              },
            });
          },
        });
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden qb-section-amber"
      aria-labelledby="stats-heading"
    >
      {/* Animated background orbs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="qb-orb-drift absolute -top-20 left-1/4 h-[380px] w-[380px] rounded-full bg-[#D97706]/[0.16] blur-[100px]" />
        <div className="qb-orb-drift-rev absolute -bottom-20 right-1/4 h-[320px] w-[320px] rounded-full bg-[#DC2626]/[0.1] blur-[90px]" />
        <div className="qb-orb-drift-slow absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[250px] w-[500px] rounded-full bg-[#B45309]/[0.08] blur-[80px]" />
      </div>

      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#F59E0B]/[0.2] to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#F59E0B]/[0.12] to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 id="stats-heading" className="sr-only">Company Statistics</h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/[0.05]">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`group relative flex flex-col items-center justify-center py-8 sm:py-10 px-4 sm:px-6 transition-colors duration-300 hover:bg-white/[0.012] ${
                /* add bottom border between the two rows on mobile */
                index < 2 ? 'border-b border-white/[0.05] lg:border-b-0' : ''
              }`}
            >
              {/* Number */}
              <div className="flex items-baseline justify-center gap-0.5 mb-2">
                <span
                  data-counter
                  data-target={stat.value}
                  className="text-[2.4rem] sm:text-[2.75rem] lg:text-[3rem] font-black text-white tabular-nums tracking-[-0.03em] leading-none"
                >
                  0
                </span>
                <span className="text-[1.4rem] sm:text-[1.6rem] lg:text-[1.75rem] font-black text-[#3B82F6] leading-none">
                  {stat.suffix}
                </span>
              </div>

              <p className="text-[13px] font-semibold text-white/75 tracking-wide text-center leading-tight mb-0.5">
                {stat.label}
              </p>
              <p className="text-[11px] text-[#475569] text-center">
                {stat.sublabel}
              </p>

              {/* Hover bottom accent */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-px bg-gradient-to-r from-transparent via-[#3B82F6]/40 to-transparent group-hover:w-12 transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
