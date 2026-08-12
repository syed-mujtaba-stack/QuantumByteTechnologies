'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

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
