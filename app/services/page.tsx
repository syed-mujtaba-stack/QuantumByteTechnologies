import type { Metadata } from "next";
import { ServicesPageClient } from "./ServicesPageClient";
import { Navbar } from "@/app/components/Navbar";
import { Footer } from "@/app/components/Footer";
import { LazyModals } from "@/app/components/LazyModals";

export const metadata: Metadata = {
  title: "IT & Software Services | QuantumByte Technologies",
  description:
    "QuantumByte Technologies offers end-to-end IT & software services: web development, mobile apps, e-commerce solutions, payment gateway integration, UI/UX design, cloud hosting, digital marketing, and enterprise IT support.",
  keywords: [
    "Web Development Pakistan",
    "Mobile App Development",
    "E-Commerce Solutions",
    "Payment Gateway Integration",
    "UI UX Design",
    "Cloud Hosting",
    "Digital Marketing",
    "IT Support Pakistan",
    "QuantumByte Technologies Services",
  ],
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[#05070D] text-white flex flex-col font-sans selection:bg-[#3B82F6] selection:text-white">
      <Navbar />
      <main className="flex-1">
        <ServicesPageClient />
      </main>
      <Footer />
      <LazyModals />
    </div>
  );
}
