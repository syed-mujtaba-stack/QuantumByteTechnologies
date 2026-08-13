'use client';

import React, { useState, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const SECTIONS = [
  { id: 'hero-section', label: 'Home' },
  { id: 'catalog-section', label: 'Products' },
  { id: 'services-section', label: 'IT Services' },
  { id: 'features-section', label: 'Guarantees' },
  { id: 'stats-section', label: 'Stats' },
  { id: 'site-footer', label: 'Contact' },
];

export function FullPageDots() {
  const [active, setActive] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const ctx = gsap.context(() => {
      SECTIONS.forEach((section, i) => {
        const el = document.getElementById(section.id);
        if (!el) return;
        ScrollTrigger.create({
          trigger: el,
          start: 'top center',
          end: 'bottom center',
          onToggle: (self) => {
            if (self.isActive) setActive(i);
          },
        });
      });
    });

    return () => ctx.revert();
  }, []);

  const scrollTo = (index: number) => {
    const el = document.getElementById(SECTIONS[index].id);
    if (!el) return;
    setActive(index);
    if (window.__lenis) {
      window.__lenis.scrollTo(el, { offset: 88, duration: 1.1, easing: (t: number) => 1 - Math.pow(1 - t, 3) });
    } else {
      gsap.to(window, {
        scrollTo: { y: el, offsetY: 88 },
        duration: 0.9,
        ease: 'power3.inOut',
      });
    }
  };

  return (
    <nav
      aria-label="Page sections"
      className={`fixed right-4 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-center gap-4 md:flex transition-opacity duration-500 ${
        mounted ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {SECTIONS.map((section, i) => {
        const isActive = active === i;
        return (
          <button
            key={section.id}
            onClick={() => scrollTo(i)}
            aria-label={section.label}
            aria-current={isActive ? 'true' : undefined}
            className="group relative flex items-center"
          >
            <span
              className={`absolute right-6 whitespace-nowrap rounded-md border border-[#22222e] bg-[#0e0e12] px-2 py-1 text-[10px] font-extrabold uppercase tracking-widest text-white opacity-0 shadow-xl transition-opacity duration-200 group-hover:opacity-100 ${
                isActive ? 'border-[#ff003c]/50' : ''
              }`}
            >
              {section.label}
            </span>
            <span
              className={`block rounded-full transition-all duration-300 ${
                isActive
                  ? 'h-3 w-3 bg-[#ff003c] shadow-lg shadow-[#ff003c]/50'
                  : 'h-2.5 w-2.5 border border-[#3f3f4e] bg-[#0e0e12] group-hover:border-[#ff003c]/60 group-hover:bg-[#ff003c]/20'
              }`}
            />
          </button>
        );
      })}
    </nav>
  );
}