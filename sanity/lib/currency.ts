// ─────────────────────────────────────────────────────────────
// PKR Currency helpers — Pakistani market pricing
// Prices are stored as USD reference values; we convert and
// format as Pakistani Rupees at display time.
// ─────────────────────────────────────────────────────────────

export const PKR_RATE = 279;

export function toPKR(usdAmount: number): number {
  return Math.round(usdAmount * PKR_RATE);
}

export function formatPKR(usdAmount: number): string {
  return `Rs. ${toPKR(usdAmount).toLocaleString()}`;
}