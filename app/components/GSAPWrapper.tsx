'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function prefersReducedMotion(): boolean {
  return typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

export function GSAPFadeIn({
  children,
  delay = 0,
  duration = 0.8,
  direction = 'up',
  className = '',
}: {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  className?: string;
}) {
  const elRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = elRef.current;
    if (!el) return;

    if (prefersReducedMotion()) return;

    let yOffset = 0;
    let xOffset = 0;

    if (direction === 'up') yOffset = 40;
    if (direction === 'down') yOffset = -40;
    if (direction === 'left') xOffset = 40;
    if (direction === 'right') xOffset = -40;

    gsap.fromTo(
      el,
      {
        opacity: 0,
        y: yOffset,
        x: xOffset,
      },
      {
        opacity: 1,
        y: 0,
        x: 0,
        duration: duration,
        delay: delay,
        ease: 'power3.out',
      }
    );
  }, [delay, duration, direction]);

  return (
    <div ref={elRef} className={className}>
      {children}
    </div>
  );
}

/**
 * ScrollTrigger-based reveal — fades & slides content in when it enters the viewport.
 * Plays once per element; respects prefers-reduced-motion.
 */
export function GSAPReveal({
  children,
  delay = 0,
  duration = 0.9,
  direction = 'up',
  distance = 50,
  className = '',
  yoyo = false,
}: {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  distance?: number;
  className?: string;
  yoyo?: boolean;
}) {
  const elRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = elRef.current;
    if (!el) return;

    if (prefersReducedMotion()) {
      el.style.opacity = '1';
      el.style.transform = 'none';
      return;
    }

    let y = 0;
    let x = 0;
    if (direction === 'up') y = distance;
    if (direction === 'down') y = -distance;
    if (direction === 'left') x = distance;
    if (direction === 'right') x = -distance;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { opacity: 0, y, x },
        {
          opacity: 1,
          y: 0,
          x: 0,
          duration,
          delay,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 88%',
            toggleActions: yoyo ? 'play none none reverse' : 'play none none none',
            once: !yoyo,
          },
        }
      );
    });

    return () => ctx.revert();
  }, [delay, duration, direction, distance, yoyo]);

  return (
    <div ref={elRef} className={className}>
      {children}
    </div>
  );
}

/**
 * Scroll-linked parallax — translates children vertically as the section scrolls past.
 */
export function GSAPParallax({
  children,
  className = '',
  speed = 80,
  triggerFrom,
}: {
  children: React.ReactNode;
  className?: string;
  speed?: number;
  triggerFrom?: React.RefObject<HTMLElement | null>;
}) {
  const elRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = elRef.current;
    if (!el) return;

    if (prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      gsap.to(el, {
        y: speed,
        ease: 'none',
        scrollTrigger: {
          trigger: triggerFrom?.current ?? el.parentElement ?? el,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
      });
    }, el);

    return () => ctx.revert();
  }, [speed, triggerFrom]);

  return (
    <div ref={elRef} className={className}>
      {children}
    </div>
  );
}

export function GSAPHoverTilt({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    gsap.to(card, {
      rotateY: x / 15,
      rotateX: -y / 15,
      transformPerspective: 1000,
      duration: 0.3,
      ease: 'power2.out',
    });
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;

    gsap.to(card, {
      rotateY: 0,
      rotateX: 0,
      duration: 0.5,
      ease: 'power2.out',
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`transition-transform duration-300 ${className}`}
      style={{ transformStyle: 'preserve-3d' }}
    >
      {children}
    </div>
  );
}