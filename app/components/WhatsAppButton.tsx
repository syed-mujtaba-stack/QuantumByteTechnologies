'use client';

import { MessageCircle } from 'lucide-react';

const WHATSAPP_URL =
  'https://wa.me/923254803957?text=' +
  encodeURIComponent('Hi QuantumByte Technologies! I have a question about your products & IT services.');

export function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="group fixed bottom-4 left-4 z-40 flex items-center gap-0 rounded-full"
    >
      <span className="pointer-events-none mr-2 max-w-0 overflow-hidden whitespace-nowrap rounded-full border border-[#25D366]/40 bg-[#0e0e12]/95 px-0 py-2 text-[11px] font-extrabold text-white opacity-0 shadow-xl backdrop-blur transition-all duration-300 group-hover:max-w-[220px] group-hover:px-4 group-hover:opacity-100">
        Chat on WhatsApp
      </span>
      <span className="relative flex h-13 w-13 items-center justify-center rounded-full bg-[#25D366] p-3.5 text-white shadow-xl shadow-[#25D366]/30 transition-transform duration-300 group-hover:scale-110">
        <span className="absolute -inset-1 rounded-full border-2 border-[#25D366]/50" />
        <MessageCircle className="relative h-6 w-6" />
      </span>
    </a>
  );
}