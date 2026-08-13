'use client';

import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { Cpu } from 'lucide-react';

const WORD = 'QUANTUMBYTE';

export function Preloader() {
  const overlayRef = useRef<HTMLDivElement>(null);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setHidden(true);
      return;
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ onComplete: () => setHidden(true) });
      tl.fromTo(
        '.qb-pre-logo',
        { scale: 0.5, opacity: 0, rotate: -12 },
        { scale: 1, opacity: 1, rotate: 0, duration: 0.6, ease: 'back.out(1.7)' }
      )
        .fromTo(
          '.qb-pre-word',
          { y: 26, opacity: 0 },
          { y: 0, opacity: 1, stagger: 0.07, duration: 0.5, ease: 'power3.out' },
          '-=0.25'
        )
        .fromTo(
          '.qb-pre-bar',
          { scaleX: 0 },
          { scaleX: 1, duration: 1.05, ease: 'power2.inOut' },
          '-=0.15'
        )
        .to('.qb-pre-inner', { y: -40, opacity: 0, duration: 0.4, ease: 'power2.in' }, '+=0.05')
        .to(overlayRef.current, { yPercent: -100, duration: 0.7, ease: 'power4.inOut' }, '-=0.1');
    }, overlayRef);

    return () => ctx.revert();
  }, []);

  if (hidden) return null;

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-[#050505]"
      aria-hidden
    >
      <div className="qb-pre-inner flex flex-col items-center gap-6">
        <div className="qb-pre-logo flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-[#ff003c] to-[#990024] text-white shadow-2xl shadow-[#ff003c]/40">
          <Cpu className="h-10 w-10" />
        </div>

        <div className="flex overflow-hidden">
          {WORD.split('').map((letter, i) => (
            <span
              key={i}
              className="qb-pre-word inline-block text-2xl font-black tracking-[0.18em] text-white"
              style={{ opacity: 0 }}
            >
              {letter}
            </span>
          ))}
        </div>

        <div className="h-[3px] w-48 overflow-hidden rounded-full bg-[#16161f]">
          <div className="qb-pre-bar h-full w-full origin-left scale-x-0 bg-[#ff003c] shadow-[0_0_10px_rgba(255,0,60,0.8)]" />
        </div>
      </div>
    </div>
  );
}