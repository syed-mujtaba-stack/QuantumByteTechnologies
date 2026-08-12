'use server';

import { createClient } from 'next-sanity';
import { apiVersion, dataset, projectId } from '@/sanity/env';

export interface OrderItemInput {
  productId: string;
  name: string;
  brand: string;
  quantity: number;
  unitPrice: number;
}

export interface CreateOrderInput {
  orderId: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  shippingAddress: string;
  city: string;
  paymentMethod: string;
  totalAmount: number;
  items: OrderItemInput[];
}

export async function createOrder(input: CreateOrderInput) {
  const adminClient = createClient({
    projectId,
    dataset,
    apiVersion,
    token: process.env.SANITY_API_WRITE_TOKEN,
    useCdn: false,
  });

  try {
    const doc = await adminClient.create({
      _type: 'order',
      orderId: input.orderId,
      customerName: input.customerName,
      customerEmail: input.customerEmail,
      customerPhone: input.customerPhone,
      shippingAddress: input.shippingAddress,
      city: input.city,
      paymentMethod: input.paymentMethod,
      totalAmount: Math.round(input.totalAmount),
      status: 'Pending',
      items: input.items.map((item) => ({
        _type: 'orderItem',
        productId: item.productId,
        name: item.name,
        brand: item.brand,
        quantity: item.quantity,
        unitPrice: Math.round(item.unitPrice),
        lineTotal: Math.round(item.unitPrice * item.quantity),
      })),
      createdAt: new Date().toISOString(),
    });

    return { ok: true as const, id: doc._id };
  } catch (err) {
    console.error('[createOrder] Failed to save order to Sanity:', err);
    return {
      ok: false as const,
      error: err instanceof Error ? err.message : String(err),
    };
  }
}