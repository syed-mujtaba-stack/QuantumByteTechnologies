'use client';

import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface StatItem {
  value: number;
  suffix: string;
  label: string;
}

export function StatsCounter({ productsCount }: { productsCount: number }) {
  const sectionRef = useRef<HTMLElement>(null);

  const stats: StatItem[] = [
    { value: productsCount, suffix: '+', label: 'Premium Products' },
    { value: 10000, suffix: '+', label: 'Happy Customers' },
    { value: 100, suffix: '%', label: 'Genuine Hardware' },
    { value: 24, suffix: '/7', label: 'Tech Support' },
  ];

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      section.querySelectorAll('[data-counter]').forEach((el) => {
        el.textContent = el.getAttribute('data-target') || '';
      });
      return;
    }

    const ctx = gsap.context(() => {
      section.querySelectorAll('[data-counter]').forEach((el) => {
        const target = Number(el.getAttribute('data-target'));
        const state = { val: 0 };
        ScrollTrigger.create({
          trigger: el,
          start: 'top 90%',
          once: true,
          onEnter: () => {
            gsap.to(state, {
              val: target,
              duration: 1.4,
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
      className="border-y border-[#1a1a24] bg-[#030305] py-10 lg:py-16"
      aria-labelledby="stats-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 id="stats-heading" className="sr-only">Company Statistics</h2>

        {/* Mobile/Tablet: 2x2 grid, Desktop: 4 columns */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-10">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="flex items-baseline justify-center gap-1.5 mb-2">
                <span
                  data-counter
                  data-target={stat.value}
                  className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tabular-nums"
                >
                  0
                </span>
                <span className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#ff003c] tabular-nums">
                  {stat.suffix}
                </span>
              </div>
              <p className="text-sm text-[#6b6b7a] font-medium uppercase tracking-wider">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}