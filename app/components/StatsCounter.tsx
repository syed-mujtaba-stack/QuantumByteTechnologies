'use client';

import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { WaveDivider } from './WaveDivider';

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
              duration: 1.8,
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
      id="stats-section"
      className="qb-page-section relative overflow-hidden border-b border-[#3a2a10] bg-[#100a04] py-16"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#f59e0b]/40 to-transparent" />
      <div className="pointer-events-none absolute -top-24 left-1/2 h-72 w-[600px] -translate-x-1/2 rounded-full bg-[#f59e0b]/8 blur-[140px]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{ backgroundImage: 'linear-gradient(#f59e0b 1px, transparent 1px), linear-gradient(90deg, #f59e0b 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat) => (
            <div key={stat.label} className="space-y-1">
              <span className="text-3xl sm:text-4xl font-black text-[#f59e0b]">
                <span data-counter data-target={stat.value}>0</span>
                <span>{stat.suffix}</span>
              </span>
              <p className="text-xs text-[#a1a1aa] font-semibold uppercase tracking-wider">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
      <WaveDivider fill="#040407" />
    </section>
  );
}