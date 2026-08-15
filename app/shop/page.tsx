import { Navbar } from '@/app/components/Navbar';
import { Footer } from '@/app/components/Footer';
import { CartDrawer } from '@/app/components/CartDrawer';
import { ProductDetailModal } from '@/app/components/ProductDetailModal';
import { CheckoutModal } from '@/app/components/CheckoutModal';
import { ServiceBookingModal } from '@/app/components/ServiceBookingModal';
import { CatalogClient } from '@/app/components/CatalogClient';
import { fetchProducts, fetchITServices } from '@/sanity/lib/fetch';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Shop All Hardware & Tech Catalog | QuantumByte Technologies',
  description: 'Browse computers, laptops, smartphones, GaN chargers, GPUs, RAM, and SSDs with official warranty.',
};

export const revalidate = 60;

export default async function ShopPage() {
  const [products, itServices] = await Promise.all([
    fetchProducts(),
    fetchITServices(),
  ]);

  return (
    <div className="min-h-screen bg-[#05070D] text-white flex flex-col font-sans selection:bg-[#3B82F6] selection:text-white">
      <Navbar />

      <main className="flex-1">
        {/* Shop Banner */}
        <div className="border-b border-white/[0.06] bg-[#080B12] py-12 cyber-grid-bg">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-2">
            <span className="text-xs font-extrabold text-[#3B82F6] uppercase tracking-widest">
              OFFICIAL HARDWARE STORE
            </span>
            <h1 className="text-3xl font-black text-white sm:text-5xl">
              SHOP ALL <span className="text-[#3B82F6]">TECH INVENTORY</span>
            </h1>
            <p className="text-xs sm:text-sm text-[#94A3B8] max-w-xl mx-auto">
              Explore 100% genuine computers, laptops, mobiles, chargers, GPUs, and replacement parts with official manufacturer warranty.
            </p>
          </div>
        </div>

        {/* Catalog */}
        <CatalogClient products={products} itServices={itServices} />
      </main>

      <Footer />

      <CartDrawer />
      <ProductDetailModal />
      <CheckoutModal />
      <ServiceBookingModal />
    </div>
  );
}
