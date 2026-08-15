import { Navbar } from '@/app/components/Navbar';
import { Hero } from '@/app/components/Hero';
import { CartDrawer } from '@/app/components/CartDrawer';
import { ProductDetailModal } from '@/app/components/ProductDetailModal';
import { CheckoutModal } from '@/app/components/CheckoutModal';
import { ServiceBookingModal } from '@/app/components/ServiceBookingModal';
import { TechFeaturesBanner } from '@/app/components/TechFeaturesBanner';
import { StatsCounter } from '@/app/components/StatsCounter';
import { Footer } from '@/app/components/Footer';
import { CatalogClient } from '@/app/components/CatalogClient';
import { fetchProducts, fetchITServices } from '@/sanity/lib/fetch';

// Revalidate every 60 seconds — ISR
export const revalidate = 60;

export default async function Home() {
  // Fetch from Sanity (with automatic fallback to static data if empty)
  const [products, itServices] = await Promise.all([
    fetchProducts(),
    fetchITServices(),
  ]);

  return (
    <div className="min-h-screen bg-[#030305] text-white flex flex-col font-sans selection:bg-[#ff003c] selection:text-white">
      <Navbar />
      <main className="flex-1">
        {/* Hero Banner */}
        <Hero />

        {/* Catalog + IT Services — Client Component receives server data as props */}
        <CatalogClient products={products} itServices={itServices} homeMode />

        {/* Trust Badges */}
        <TechFeaturesBanner />

        {/* Stats Counter — GSAP count-up */}
        <StatsCounter productsCount={products.length} />
      </main>

      <Footer />

      {/* Global modals rendered client-side */}
      <CartDrawer />
      <ProductDetailModal />
      <CheckoutModal />
      <ServiceBookingModal />
    </div>
  );
}
