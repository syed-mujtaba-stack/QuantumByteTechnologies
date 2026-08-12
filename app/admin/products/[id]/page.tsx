import React from 'react';
import Link from 'next/link';
import { Package, ArrowLeft } from 'lucide-react';
import { fetchProducts } from '@/sanity/lib/fetch';
import { ProductEditForm } from '@/app/admin/components/ProductEditForm';

export const revalidate = 30;

export default async function EditProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = await params;
  const id = resolvedParams.id;
  const products = await fetchProducts();
  const product = products.find((p) => p.id === id);

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div className="flex items-center justify-between border-b border-[#1f1f2b] pb-4">
        <div>
          <Link href="/admin/products" className="text-xs text-[#a1a1aa] hover:text-white flex items-center gap-1 mb-1">
            <ArrowLeft className="h-3.5 w-3.5 text-[#ff003c]" /> Back to Products List
          </Link>
          <h1 className="text-2xl font-black text-white flex items-center gap-2">
            <Package className="h-6 w-6 text-[#ff003c]" /> EDIT PRODUCT — <span className="text-[#ff003c] font-mono text-sm">{id}</span>
          </h1>
        </div>
      </div>

      {product ? (
        <ProductEditForm product={product} />
      ) : (
        <div className="rounded-2xl border border-[#22222e] bg-[#0e0e12] p-10 text-center text-xs text-[#a1a1aa]">
          Product not found in Sanity.
          <Link href="/admin/products" className="block mt-2 font-bold text-[#ff003c] hover:underline">
            Back to Products
          </Link>
        </div>
      )}
    </div>
  );
}