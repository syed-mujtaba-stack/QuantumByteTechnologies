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
      className={`fixed bottom-4 right-4 z-40 flex h-11 w-11 items-center justify-center rounded-xl border border-[#3B82F6]/40 bg-[#0B0F18]/95 text-[#3B82F6] shadow-xl shadow-[#3B82F6]/15 backdrop-blur-xl transition-all duration-300 hover:bg-[#3B82F6] hover:text-white hover:shadow-[#3B82F6]/30 ${
        visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'
      }`}
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  );
}
