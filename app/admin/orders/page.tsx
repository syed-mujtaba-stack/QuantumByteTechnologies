import React from 'react';
import { ShoppingBag, Truck, Clock } from 'lucide-react';
import { formatPKR } from '@/sanity/lib/currency';
import { fetchOrders } from '@/sanity/lib/fetch';
import { OrderStatusSelect, DeleteOrderButton } from '@/app/admin/admin-buttons';

const FALLBACK_ORDERS = [
  { orderId: 'QB-90812', customerName: 'John Doe', city: 'Karachi', createdAt: '2026-08-10', totalAmount: 3499, paymentMethod: 'Cash on Delivery', status: 'Processing', items: [{ name: 'Apple MacBook Pro 16" M3 Max' }] },
  { orderId: 'QB-90811', customerName: 'Sarah Jenkins', city: 'Lahore', createdAt: '2026-08-09', totalAmount: 1999, paymentMethod: 'Cash on Delivery', status: 'Shipped', items: [{ name: 'ASUS ROG Strix RTX 4090 OC 24GB' }] },
  { orderId: 'QB-90810', customerName: 'Michael Chang', city: 'Islamabad', createdAt: '2026-08-08', totalAmount: 4999, paymentMethod: 'Cash on Delivery', status: 'Delivered', items: [{ name: 'QuantumByte Cyber Workstation Pro' }] },
  { orderId: 'QB-90809', customerName: 'Elena Rostova', city: 'Karachi', createdAt: '2026-08-07', totalAmount: 1599, paymentMethod: 'Cash on Delivery', status: 'Delivered', items: [{ name: 'Apple Studio Display 27" 5K' }] },
  { orderId: 'QB-90808', customerName: 'Tariq Mahmood', city: 'Rawalpindi', createdAt: '2026-08-06', totalAmount: 799, paymentMethod: 'Cash on Delivery', status: 'Processing', items: [{ name: 'ASUS ROG Rapture GT-BE98 PRO' }] },
];

export default async function AdminOrdersPage() {
  const sanityOrders = await fetchOrders();
  const allOrders = sanityOrders.length > 0 ? sanityOrders : (FALLBACK_ORDERS as unknown as typeof sanityOrders);

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-2xl border border-[#22222e] bg-[#0e0e12] p-6 glass-panel">
        <div>
          <span className="text-xs font-extrabold text-[#3B82F6] uppercase tracking-widest">
            FULFILLMENT CENTER
          </span>
          <h1 className="text-2xl font-black text-white">ORDER MANAGEMENT ({allOrders.length})</h1>
          <p className="text-xs text-[#a1a1aa] mt-0.5">Track warehouse packaging, invoice generation, and courier dispatch.</p>
        </div>
      </div>

      <div className="rounded-2xl border border-[#22222e] bg-[#0e0e12] p-6 space-y-4 glass-panel">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="border-b border-[#1f1f2b] text-[#a1a1aa] font-bold">
                <th className="py-3 px-2">Order ID</th>
                <th className="py-3 px-2">Customer Name</th>
                <th className="py-3 px-2">City</th>
                <th className="py-3 px-2">Hardware Ordered</th>
                <th className="py-3 px-2">Payment</th>
                <th className="py-3 px-2">Status</th>
                <th className="py-3 px-2">Total Amount</th>
                <th className="py-3 px-2 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#1f1f2b]">
              {allOrders.map((ord) => (
                <tr key={ord.orderId} className="hover:bg-[#16161f]/50 transition">
                  <td className="py-4 px-2 font-mono font-bold text-[#3B82F6]">{ord.orderId}</td>
                  <td className="py-4 px-2 font-bold text-white">{ord.customerName}</td>
                  <td className="py-4 px-2 text-[#a1a1aa]">{ord.city || '—'}</td>
                  <td className="py-4 px-2 font-semibold text-white max-w-xs truncate">
                    {(ord.items || []).map((i) => i.name).join(', ')}
                  </td>
                  <td className="py-4 px-2 text-[#71717a]">{ord.paymentMethod}</td>
                  <td className="py-4 px-2">
                    {ord._id ? (
                      <OrderStatusSelect id={ord._id} status={ord.status} />
                    ) : (
                      <span className={`inline-flex items-center gap-1 rounded-md px-2.5 py-1 text-[11px] font-extrabold ${
                        ord.status === 'Delivered'
                          ? 'bg-[#22c55e]/15 text-[#22c55e]'
                          : ord.status === 'Shipped'
                          ? 'bg-[#3b82f6]/15 text-[#3b82f6]'
                          : 'bg-[#3B82F6]/15 text-[#3B82F6]'
                      }`}>
                        {ord.status}
                      </span>
                    )}
                  </td>
                  <td className="py-4 px-2 font-black text-white">{formatPKR(ord.totalAmount)}</td>
                  <td className="py-4 px-2 text-right">
                    {ord._id && <DeleteOrderButton id={ord._id} />}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
