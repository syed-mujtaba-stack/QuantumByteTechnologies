'use client';

import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const goTop = () => {
    if (window.__lenis) {
      window.__lenis.scrollTo(0, { duration: 1 });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <button
      onClick={goTop}
      aria-label="Back to top"
      className={`fixed bottom-4 right-4 z-40 flex h-11 w-11 items-center justify-center rounded-xl border border-[#ff003c]/50 bg-[#0e0e12]/95 text-[#ff003c] shadow-xl shadow-[#ff003c]/20 backdrop-blur transition-all duration-300 hover:bg-[#ff003c] hover:text-white ${
        visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'
      }`}
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  );
}