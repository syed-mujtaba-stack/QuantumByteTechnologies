import { Navbar } from '@/app/components/Navbar';
import { Hero } from '@/app/components/Hero';
import { TechFeaturesBanner } from '@/app/components/TechFeaturesBanner';
import { StatsCounter } from '@/app/components/StatsCounter';
import { ClientVoices } from '@/app/components/ClientVoices';
import { Footer } from '@/app/components/Footer';
import { CatalogClient } from '@/app/components/CatalogClient';
import { LazyModals } from '@/app/components/LazyModals';
import { fetchProducts, fetchITServices } from '@/sanity/lib/fetch';
export const revalidate = 60;

export default async function Home() {
  const [products, itServices] = await Promise.all([
    fetchProducts(),
    fetchITServices(),
  ]);

  return (
    <div className="min-h-screen bg-[#05070D] text-white flex flex-col font-sans selection:bg-[#3B82F6] selection:text-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <CatalogClient products={products} itServices={itServices} homeMode />
        <TechFeaturesBanner />
        <StatsCounter productsCount={products.length} />
        <ClientVoices />
      </main>
      <Footer />
      <LazyModals />
    </div>
  );
}
