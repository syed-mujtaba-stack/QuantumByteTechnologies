import { Navbar } from '@/app/components/Navbar';
import { Hero } from '@/app/components/Hero';
import { CartDrawer } from '@/app/components/CartDrawer';
import { ProductDetailModal } from '@/app/components/ProductDetailModal';
import { CheckoutModal } from '@/app/components/CheckoutModal';
import { ServiceBookingModal } from '@/app/components/ServiceBookingModal';
import { TechFeaturesBanner } from '@/app/components/TechFeaturesBanner';
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
    <div className="min-h-screen bg-[#050505] text-white flex flex-col font-sans selection:bg-[#ff003c] selection:text-white">
      <Navbar />

      <main className="flex-1">
        {/* Hero Banner */}
        <Hero />

        {/* Catalog + IT Services — Client Component receives server data as props */}
        <CatalogClient products={products} itServices={itServices} homeMode />

        {/* Trust Badges */}
        <TechFeaturesBanner />

        {/* Stats Counter */}
        <section className="border-b border-[#22222e] bg-[#050505] py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="space-y-1">
                <span className="text-3xl sm:text-4xl font-black text-[#ff003c]">{products.length}+</span>
                <p className="text-xs text-[#a1a1aa] font-semibold uppercase tracking-wider">Premium Products</p>
              </div>
              <div className="space-y-1">
                <span className="text-3xl sm:text-4xl font-black text-white">10,000+</span>
                <p className="text-xs text-[#a1a1aa] font-semibold uppercase tracking-wider">Happy Customers</p>
              </div>
              <div className="space-y-1">
                <span className="text-3xl sm:text-4xl font-black text-[#ff003c]">100%</span>
                <p className="text-xs text-[#a1a1aa] font-semibold uppercase tracking-wider">Genuine Hardware</p>
              </div>
              <div className="space-y-1">
                <span className="text-3xl sm:text-4xl font-black text-white">24/7</span>
                <p className="text-xs text-[#a1a1aa] font-semibold uppercase tracking-wider">Tech Support</p>
              </div>
            </div>
          </div>
        </section>
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
