import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Navbar } from '@/app/components/Navbar';
import { Footer } from '@/app/components/Footer';
import { CartDrawer } from '@/app/components/CartDrawer';
import { ProductCard } from '@/app/components/ProductCard';
import { fetchProducts } from '@/sanity/lib/fetch';
import { formatPKR } from '@/sanity/lib/currency';
import { ChevronRight, ShieldCheck, Truck, Star, Check, Cpu } from 'lucide-react';
import { ProductActions } from './ProductActions';

export const revalidate = 60;

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = await params;
  const id = resolvedParams.id;
  const products = await fetchProducts();
  const product = products.find((p) => p.id === id) || products[0];

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="min-h-screen bg-[#050505] text-white flex flex-col font-sans selection:bg-[#3B82F6] selection:text-white">
      <Navbar />

      <main className="flex-1 py-10 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs */}
          <div className="mb-8 flex items-center gap-2 text-xs text-[#a1a1aa]">
            <Link href="/" className="hover:text-white">Home</Link>
            <ChevronRight className="h-3 w-3 text-[#3B82F6]" />
            <Link href="/shop" className="hover:text-white">Shop</Link>
            <ChevronRight className="h-3 w-3 text-[#3B82F6]" />
            <Link href={`/categories/${product.category}`} className="hover:text-white capitalize">
              {product.category}
            </Link>
            <ChevronRight className="h-3 w-3 text-[#3B82F6]" />
            <span className="text-white font-bold truncate max-w-xs">{product.name}</span>
          </div>

          {/* Main Product Showcase Grid */}
          <div className="grid gap-10 md:grid-cols-12 mb-16">
            {/* Image Section */}
            <div className="md:col-span-6 space-y-4">
              <div className="relative h-96 w-full overflow-hidden rounded-2xl border border-[#3B82F6]/40 bg-[#0e0e12] p-4 glass-panel-red shadow-2xl">
                <Image
                  src={product.imageUrl}
                  alt={product.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover rounded-xl"
                  priority
                />
                <span className="absolute top-4 left-4 rounded-md bg-[#3B82F6] px-3 py-1 text-xs font-extrabold text-white">
                  {product.brand}
                </span>
              </div>

              {/* Guarantees */}
              <div className="grid grid-cols-2 gap-4 rounded-xl border border-[#22222e] bg-[#0e0e12] p-4 text-xs">
                <div className="flex items-center gap-2 text-[#a1a1aa]">
                  <ShieldCheck className="h-5 w-5 text-[#3B82F6]" />
                  <div>
                    <h5 className="font-bold text-white">Official Warranty</h5>
                    <p className="text-[10px]">1 Year Brand Guarantee</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-[#a1a1aa]">
                  <Truck className="h-5 w-5 text-[#3B82F6]" />
                  <div>
                    <h5 className="font-bold text-white">Express Delivery</h5>
                    <p className="text-[10px]">Insured Wooden Crate</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Info & Purchase Column */}
            <div className="md:col-span-6 space-y-6">
              <div>
                <span className="text-xs font-extrabold text-[#3B82F6] uppercase tracking-widest">
                  {product.category}
                </span>
                <h1 className="text-2xl sm:text-3xl font-black text-white mt-1 leading-tight">
                  {product.name}
                </h1>

                {/* Rating & Stock */}
                <div className="mt-3 flex items-center gap-4 text-xs">
                  <div className="flex items-center gap-1 text-[#F59E0B]">
                    <Star className="h-4 w-4 fill-current" />
                    <span className="font-bold text-white">{product.rating}</span>
                    <span className="text-[#71717a]">({product.reviewsCount} verified reviews)</span>
                  </div>
                  <span className="text-[#22c55e] font-semibold flex items-center gap-1">
                    <Check className="h-3.5 w-3.5" /> In Stock ({product.stock} units left)
                  </span>
                </div>
              </div>

              {/* Price Row */}
              <div className="flex items-baseline gap-4 rounded-xl border border-[#22222e] bg-[#0e0e12] p-4">
                <span className="text-3xl font-black text-white">{formatPKR(product.price)}</span>
                {product.discountPrice && (
                  <span className="text-base text-[#71717a] line-through">
                    {formatPKR(product.discountPrice)}
                  </span>
                )}
                {product.discountPrice && (
                  <span className="rounded bg-[#3B82F6]/20 px-2.5 py-1 text-xs font-bold text-[#3B82F6]">
                    SAVE {formatPKR(product.discountPrice - product.price)}
                  </span>
                )}
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-[#a1a1aa] leading-relaxed">
                {product.description}
              </p>

              {/* Specifications Table */}
              <div className="space-y-3 pt-4 border-t border-[#1f1f2b]">
                <h4 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
                  <Cpu className="h-4 w-4 text-[#3B82F6]" /> Technical Specifications
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {product.specs?.map((spec, idx) => (
                    <div key={idx} className="flex items-center gap-2 rounded-lg bg-[#0e0e12] border border-[#22222e] px-3 py-2 text-white">
                      <Check className="h-3.5 w-3.5 text-[#3B82F6]" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Interactive Purchase Actions (Client Component) */}
              <ProductActions product={product} />
            </div>
          </div>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <div className="pt-12 border-t border-[#1f1f2b] space-y-6">
              <h3 className="text-2xl font-black text-white">
                SIMILAR <span className="text-[#3B82F6]">RECOMMENDATIONS</span>
              </h3>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {relatedProducts.map((rel) => (
                  <ProductCard key={rel.id} product={rel} />
                ))}
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
      <CartDrawer />
    </div>
  );
}
