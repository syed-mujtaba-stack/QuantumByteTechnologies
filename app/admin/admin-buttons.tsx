'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  adminDeleteProduct,
  adminDeleteCategory,
  adminUpdateOrderStatus,
  adminDeleteOrder,
  adminDeleteUser,
  adminSetUserAdmin,
  adminUpdateUserRole,
  adminDeleteCoupon,
  adminModerateReview,
  adminDeleteReview,
  adminDeleteVendor,
} from '@/app/admin/actions';
import { Trash2, Check, X, Loader2, Shield } from 'lucide-react';

function useAction() {
  const router = useRouter();
  const [busy, setBusy] = useState(false);

  async function exec(fn: () => Promise<{ ok: boolean }>) {
    setBusy(true);
    const res = await fn();
    setBusy(false);
    if (res.ok) {
      router.refresh();
    }
    return res;
  }

  return { busy, exec };
}

type DeleteButtonProps = {
  id: string;
  label?: string;
  confirmText: string;
  deleteFn: (id: string) => Promise<{ ok: boolean }>;
};

export function DeleteButton({ id, label, confirmText, deleteFn }: DeleteButtonProps) {
  const { busy, exec } = useAction();

  return (
    <button
      disabled={busy}
      onClick={async () => {
        if (!window.confirm(confirmText)) return;
        await exec(() => deleteFn(id));
      }}
      className="rounded-lg border border-[#22222e] bg-[#050505] p-2 text-white hover:border-[#ef4444] disabled:opacity-50"
      title={label || 'Delete'}
    >
      {busy ? <Loader2 className="h-3.5 w-3.5 animate-spin text-[#ef4444]" /> : <Trash2 className="h-3.5 w-3.5 text-[#ef4444]" />}
    </button>
  );
}

export function DeleteProductButton({ id }: { id: string }) {
  return (
    <DeleteButton id={id} confirmText="Delete this product permanently from Sanity?" deleteFn={adminDeleteProduct} />
  );
}

export function DeleteCategoryButton({ id }: { id: string }) {
  return (
    <DeleteButton id={id} confirmText="Delete this category from Sanity?" deleteFn={adminDeleteCategory} />
  );
}

export function DeleteOrderButton({ id }: { id: string }) {
  return (
    <DeleteButton id={id} confirmText="Delete this order permanently from Sanity?" deleteFn={adminDeleteOrder} />
  );
}

export function DeleteCouponButton({ id }: { id: string }) {
  return (
    <DeleteButton id={id} confirmText="Delete this promo code from Sanity?" deleteFn={adminDeleteCoupon} />
  );
}

export function DeleteReviewButton({ id }: { id: string }) {
  return (
    <DeleteButton id={id} confirmText="Delete this review from Sanity?" deleteFn={adminDeleteReview} />
  );
}

export function DeleteVendorButton({ id }: { id: string }) {
  return (
    <DeleteButton id={id} confirmText="Delete this vendor from Sanity?" deleteFn={adminDeleteVendor} />
  );
}

export function DeleteUserButton({ id, label }: { id: string; label?: string }) {
  const { busy, exec } = useAction();
  return (
    <button
      disabled={busy}
      onClick={async () => {
        if (!window.confirm('Delete this user permanently from Sanity? Their account data will be removed.')) return;
        await exec(() => adminDeleteUser(id));
      }}
      className="rounded-lg border border-[#22222e] bg-[#050505] px-3 py-1.5 text-xs font-bold text-[#ef4444] hover:border-[#ef4444] disabled:opacity-50"
    >
      {busy ? <Loader2 className="h-3.5 w-3.5 animate-spin" /> : label || 'Delete'}
    </button>
  );
}

export function AdminToggleButton({ id, isAdmin }: { id: string; isAdmin: boolean }) {
  const { busy, exec } = useAction();
  return (
    <button
      disabled={busy}
      onClick={() => exec(() => adminSetUserAdmin(id, !isAdmin))}
      className="rounded-lg border border-[#22222e] bg-[#050505] px-3 py-1.5 text-xs font-bold text-white hover:border-[#ff003c] disabled:opacity-50 flex items-center gap-1.5"
    >
      {busy ? <Loader2 className="h-3.5 w-3.5 animate-spin text-[#ff003c]" /> : <Shield className="h-3.5 w-3.5 text-[#ff003c]" />}
      {isAdmin ? 'Make Customer' : 'Make Admin'}
    </button>
  );
}

const ROLE_DISPLAY: Record<string, string> = {
  customer: 'Customer',
  staff: 'Staff',
  'super admin': 'Super Admin',
};

export function RoleSelect({ id, role }: { id: string; role: string }) {
  const { busy, exec } = useAction();
  return (
    <select
      disabled={busy}
      value={role}
      onChange={(e) => exec(() => adminUpdateUserRole(id, e.target.value as 'customer' | 'staff' | 'super admin'))}
      className={`rounded-md border bg-[#050505] px-2 py-1 text-[11px] font-extrabold uppercase outline-none focus:border-[#ff003c] ${
        role === 'super admin'
          ? 'border-[#ff003c]/50 text-[#ff003c]'
          : role === 'staff'
          ? 'border-[#3b82f6]/40 text-[#3b82f6]'
          : 'border-[#22222e] text-[#a1a1aa]'
      }`}
    >
      <option value="customer">Customer</option>
      <option value="staff">Staff</option>
      <option value="super admin">Super Admin</option>
    </select>
  );
}

export function OrderStatusSelect({ id, status }: { id: string; status: string }) {
  const { busy, exec } = useAction();
  return (
    <select
      disabled={busy}
      value={status}
      onChange={(e) => exec(() => adminUpdateOrderStatus(id, e.target.value))}
      className={`rounded-md border bg-[#050505] px-2 py-1 text-[11px] font-extrabold outline-none focus:border-[#ff003c] ${
        status === 'Delivered'
          ? 'border-[#22c55e]/40 text-[#22c55e]'
          : status === 'Shipped'
          ? 'border-[#3b82f6]/40 text-[#3b82f6]'
          : 'border-[#ff003c]/40 text-[#ff003c]'
      }`}
    >
      {['Pending', 'Processing', 'Shipped', 'Delivered'].map((s) => (
        <option key={s} value={s}>
          {s}
        </option>
      ))}
    </select>
  );
}

export function ReviewModerateButtons({ id, status }: { id: string; status: string }) {
  const { busy, exec } = useAction();
  return (
    <div className="flex items-center gap-2">
      <button
        disabled={busy || status === 'Approved'}
        onClick={() => exec(() => adminModerateReview(id, 'Approved'))}
        className="rounded-lg border border-[#22c55e]/40 bg-[#22c55e]/10 px-3 py-1.5 text-xs font-bold text-[#22c55e] hover:bg-[#22c55e]/20 disabled:opacity-40"
      >
        <Check className="h-3.5 w-3.5 inline mr-1" /> Approve
      </button>
      <button
        disabled={busy || status === 'Rejected'}
        onClick={() => exec(() => adminModerateReview(id, 'Rejected'))}
        className="rounded-lg border border-[#ef4444]/40 bg-[#ef4444]/10 px-3 py-1.5 text-xs font-bold text-[#ef4444] hover:bg-[#ef4444]/20 disabled:opacity-40"
      >
        <X className="h-3.5 w-3.5 inline mr-1" /> Reject
      </button>
    </div>
  );
}