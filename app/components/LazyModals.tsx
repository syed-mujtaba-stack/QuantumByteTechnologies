'use client';

import dynamic from 'next/dynamic';

const CartDrawer         = dynamic(() => import('./CartDrawer').then(m => ({ default: m.CartDrawer })),                 { ssr: false });
const ProductDetailModal = dynamic(() => import('./ProductDetailModal').then(m => ({ default: m.ProductDetailModal })), { ssr: false });
const CheckoutModal      = dynamic(() => import('./CheckoutModal').then(m => ({ default: m.CheckoutModal })),           { ssr: false });
const ServiceBookingModal= dynamic(() => import('./ServiceBookingModal').then(m => ({ default: m.ServiceBookingModal })),{ ssr: false });

export function LazyModals() {
  return (
    <>
      <CartDrawer />
      <ProductDetailModal />
      <CheckoutModal />
      <ServiceBookingModal />
    </>
  );
}
