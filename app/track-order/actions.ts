'use server';

import { client } from '@/sanity/lib/client';

export interface TrackedOrder {
  orderId: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  shippingAddress: string;
  city: string;
  paymentMethod: string;
  totalAmount: number;
  status: string;
  createdAt: string;
  items: {
    productId: string;
    name: string;
    brand: string;
    quantity: number;
    unitPrice: number;
    lineTotal: number;
  }[];
}

export async function trackOrder(input: {
  orderId: string;
  email: string;
}): Promise<{ ok: boolean; order?: TrackedOrder; error?: string }> {
  const orderId = input.orderId.trim().toUpperCase();
  const email = input.email.trim().toLowerCase();

  if (!orderId || !email) {
    return { ok: false, error: 'Order ID and email are required.' };
  }

  try {
    const order = await client.fetch<TrackedOrder | null>(
      `*[_type == "order" && orderId == $orderId && lower(customerEmail) == $email][0] {
        orderId,
        customerName,
        customerEmail,
        customerPhone,
        shippingAddress,
        city,
        paymentMethod,
        totalAmount,
        status,
        createdAt,
        items[] {
          productId,
          name,
          brand,
          quantity,
          unitPrice,
          lineTotal
        }
      }`,
      { orderId, email },
      { next: { revalidate: 30 } }
    );

    if (!order) {
      return {
        ok: false,
        error: 'No order found. Please check your Order ID and email address.',
      };
    }

    return { ok: true, order };
  } catch (err) {
    console.error('[trackOrder] Failed:', err);
    return { ok: false, error: 'Could not fetch order. Please try again.' };
  }
}
