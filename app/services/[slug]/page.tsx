import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { services, getServiceBySlug, getAllServiceSlugs } from "../servicesData";
import { ServiceDetailClient } from "./ServiceDetailClient";
import { Navbar } from "@/app/components/Navbar";
import { Footer } from "@/app/components/Footer";
import { CartDrawer } from "@/app/components/CartDrawer";
import { ServiceBookingModal } from "@/app/components/ServiceBookingModal";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: "Service Not Found | QuantumByte Technologies",
    };
  }

  return {
    title: `${service.title} in Pakistan | QuantumByte Technologies`,
    description: service.subtitle,
    keywords: [
      service.title,
      `${service.title} Pakistan`,
      `${service.category} Services`,
      "QuantumByte Technologies",
      ...service.features.slice(0, 4),
    ],
    openGraph: {
      title: `${service.title} | QuantumByte Technologies`,
      description: service.subtitle,
      images: [
        {
          url: service.image,
          width: 1200,
          height: 630,
          alt: service.title,
        },
      ],
    },
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    serviceType: service.category,
    provider: {
      "@type": "Organization",
      name: "QuantumByte Technologies",
      url: "https://quantumbyte.pk",
    },
    description: service.subtitle,
    offers: {
      "@type": "Offer",
      price: service.price.replace(/[^0-9]/g, "") || "15000",
      priceCurrency: "PKR",
    },
  };

  return (
    <div className="min-h-screen bg-[#05070D] text-white flex flex-col font-sans selection:bg-[#3B82F6] selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main className="flex-1">
        <ServiceDetailClient slug={slug} />
      </main>
      <Footer />
      <CartDrawer />
      <ServiceBookingModal />
    </div>
  );
}
