import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/app/context/CartContext";
import { WishlistProvider } from "@/app/context/WishlistContext";
import { AuthProvider } from "@/app/context/AuthContext";
import { SmoothScroll } from "@/app/components/SmoothScroll";
import { ScrollProgress } from "@/app/components/ScrollProgress";
import { Preloader } from "@/app/components/Preloader";
import { WhatsAppButton } from "@/app/components/WhatsAppButton";
import { BackToTop } from "@/app/components/BackToTop";

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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
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
      <body suppressHydrationWarning className="min-h-full flex flex-col bg-[#030305] text-white">
        <Preloader />
        <SmoothScroll />
        <ScrollProgress />
        <AuthProvider>
          <CartProvider>
            <WishlistProvider>{children}</WishlistProvider>
          </CartProvider>
        </AuthProvider>
        <WhatsAppButton />
        <BackToTop />
      </body>
    </html>
  );
}


