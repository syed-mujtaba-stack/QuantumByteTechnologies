import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/app/context/CartContext";
import { WishlistProvider } from "@/app/context/WishlistContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "QuantumByte Technologies | E-Commerce & Enterprise IT Services",
  description: "Official store & service provider for high-performance Gaming PCs, MacBooks, Smartphones, GaN Chargers, Genuine Parts, and Certified IT Solutions.",
  keywords: ["QuantumByte Technologies", "Computers", "Laptops", "Mobiles", "Chargers", "PC Parts", "IT Services", "Custom PC Build", "Hardware Repair"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full dark antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#050505] text-white">
        <CartProvider>
          <WishlistProvider>{children}</WishlistProvider>
        </CartProvider>
      </body>
    </html>
  );
}


