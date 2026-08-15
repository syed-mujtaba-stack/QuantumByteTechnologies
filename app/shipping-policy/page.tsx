import React from 'react';
import Link from 'next/link';
import { Navbar } from '@/app/components/Navbar';
import { Footer } from '@/app/components/Footer';
import { Truck, ChevronRight, ShieldCheck, Package, MapPin, Clock, AlertTriangle, CheckCircle2 } from 'lucide-react';

export default function ShippingPolicyPage() {
  return (
    <div className="min-h-screen bg-[#030305] text-white flex flex-col font-sans selection:bg-[#ff003c] selection:text-white">
      <Navbar />

      <main className="flex-1 py-10 lg:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="mb-6 flex items-center gap-2 text-xs text-[#9c9ca8]">
            <Link href="/" className="hover:text-white">Home</Link>
            <ChevronRight className="h-3 w-3 text-[#ff003c]" />
            <span className="text-white font-bold">Shipping Policy</span>
          </div>

          <article className="rounded-2xl border border-[#1a1a24] bg-[#08080c] p-8 sm:p-10 space-y-8">
            <header className="border-b border-[#1a1a24] pb-6">
              <span className="text-[10px] font-extrabold text-[#ff003c] uppercase tracking-widest flex items-center gap-1.5 mb-2">
                <Truck className="h-4 w-4" /> EXPRESS DELIVERY
              </span>
              <h1 className="text-3xl sm:text-4xl font-black text-white">SHIPPING & PACKAGING POLICY</h1>
              <p className="text-sm text-[#6b6b7a] mt-2">Last Updated: August 15, 2026</p>
              <p className="text-sm text-[#6b6b7a] mt-1">Anti-Static Protection • Insured Courier Logistics • Nationwide Coverage</p>
            </header>

            <section className="space-y-4">
              <h2 className="text-lg font-bold text-white">1. Shipping Overview</h2>
              <p className="text-[#9c9ca8] leading-relaxed">
                QuantumByte Technologies provides free insured express shipping on all orders over <strong>Rs. 27,900</strong>. Every shipment is fully insured for the declared value, trackable in real-time, and packaged to military-grade anti-static standards.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-lg font-bold text-white">2. Anti-Static Packaging Standards</h2>
              <p className="text-[#9c9ca8] leading-relaxed">We use a multi-layer packaging system designed for sensitive electronics:</p>
              <div className="grid gap-4 mt-4">
                <div className="bg-[#0a0a10] border border-[#1a1a24] rounded-xl p-5 space-y-2">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#ff003c]/10 text-[#ff003c]">
                      <Package className="h-5 w-5" />
                    </div>
                    <h3 className="font-semibold text-white">Layer 1: ESD Anti-Static Bag</h3>
                  </div>
                  <p className="text-sm text-[#9c9ca8] ml-13">Pink poly ESD bags (MIL-PRF-81705 compliant) for all components: GPUs, RAM, SSDs, motherboards, CPUs. Static-shielding for transit protection.</p>
                </div>

                <div className="bg-[#0a0a10] border border-[#1a1a24] rounded-xl p-5 space-y-2">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#ff003c]/10 text-[#ff003c]">
                      <ShieldCheck className="h-5 w-5" />
                    </div>
                    <h3 className="font-semibold text-white">Layer 2: Anti-Static Bubble Wrap</h3>
                  </div>
                  <p className="text-sm text-[#9c9ca8] ml-13">Pink anti-static bubble wrap (3/16" bubbles) wrapped 2x around each component. Prevents mechanical shock and static discharge.</p>
                </div>

                <div className="bg-[#0a0a10] border border-[#1a1a24] rounded-xl p-5 space-y-2">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#ff003c]/10 text-[#ff003c]">
                      <Package className="h-5 w-5" />
                    </div>
                    <h3 className="font-semibold text-white">Layer 3: Custom-Cut Foam Inserts</h3>
                  </div>
                  <p className="text-sm text-[#9c9ca8] ml-13">High-density polyethylene foam (2.2 lb/ft³) precision-cut for GPUs, MacBooks, monitors. Eliminates movement within box.</p>
                </div>

                <div className="bg-[#0a0a10] border border-[#1a1a24] rounded-xl p-5 space-y-2">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#ff003c]/10 text-[#ff003c]">
                      <ShieldCheck className="h-5 w-5" />
                    </div>
                    <h3 className="font-semibold text-white">Layer 4: Double-Walled Corrugated Box</h3>
                  </div>
                  <p className="text-sm text-[#9c9ca8] ml-13">275 lb test double-wall corrugated (ECT-48). Reinforced corners. Tamper-evident security tape with QuantumByte branding.</p>
                </div>

                <div className="bg-[#0a0a10] border border-[#1a1a24] rounded-xl p-5 space-y-2">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#ff003c]/10 text-[#ff003c]">
                      <Truck className="h-5 w-5" />
                    </div>
                    <h3 className="font-semibold text-white">Layer 5: Wooden Crate (Custom PCs)</h3>
                  </div>
                  <p className="text-sm text-[#9c9ca8] ml-13">ISPM-15 heat-treated pine crates with foam suspension. Steel banding. "This Side Up" and "Fragile" markings. Forklift-ready.</p>
                </div>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-lg font-bold text-white">3. Free Shipping Threshold</h2>
              <div className="bg-[#0a0a10] border border-[#ff003c]/30 rounded-xl p-5 space-y-3">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="h-6 w-6 text-[#ff003c]" />
                  <div>
                    <p className="font-bold text-white text-lg">Free Insured Express Shipping</p>
                    <p className="text-sm text-[#9c9ca8]">On all orders ≥ <span className="text-[#ff003c] font-black">Rs. 27,900</span></p>
                  </div>
                </div>
                <p className="text-sm text-[#9c9ca8]">
                  Orders below threshold: <strong className="text-white">Rs. 500</strong> (standard) or <strong className="text-white">Rs. 1,500</strong> (oversize/wooden crate). Remote areas may incur surcharge (quoted at checkout).
                </p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-lg font-bold text-white">4. Delivery Timelines</h2>
              <table className="w-full text-sm text-[#9c9ca8]">
                <thead>
                  <tr className="border-b border-[#1a1a24]">
                    <th className="text-left pb-2 font-semibold text-white">Destination</th>
                    <th className="text-left pb-2 font-semibold text-white">Standard Items</th>
                    <th className="text-left pb-2 font-semibold text-white">Custom PC / Crated</th>
                    <th className="text-left pb-2 font-semibold text-white">Cut-off Time</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#1a1a24]">
                  <tr>
                    <td className="py-2 font-semibold text-white">Karachi, Lahore, Islamabad, Rawalpindi, Faisalabad</td>
                    <td className="py-2">1-2 business days</td>
                    <td className="py-2">3-5 business days</td>
                    <td className="py-2">2:00 PM PKT</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-semibold text-white">Multan, Gujranwala, Hyderabad, Peshawar, Quetta</td>
                    <td className="py-2">2-3 business days</td>
                    <td className="py-2">4-6 business days</td>
                    <td className="py-2">2:00 PM PKT</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-semibold text-white">Other Cities / Urban Areas</td>
                    <td className="py-2">3-4 business days</td>
                    <td className="py-2">5-7 business days</td>
                    <td className="py-2">2:00 PM PKT</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-semibold text-white">Remote / Rural Areas</td>
                    <td className="py-2">4-6 business days</td>
                    <td className="py-2">7-10 business days</td>
                    <td className="py-2">2:00 PM PKT</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-semibold text-white">Azad Kashmir / Gilgit-Baltistan</td>
                    <td className="py-2">5-7 business days</td>
                    <td className="py-2">N/A (special arrangement)</td>
                    <td className="py-2">2:00 PM PKT</td>
                  </tr>
                </tbody>
              </table>
              <p className="text-sm text-[#6b6b7a] mt-3">
                <strong>Business Days:</strong> Monday–Saturday. Orders placed after 2:00 PM PKT or on Sunday process next business day. Custom PC build time (5-14 days) is <strong>additional</strong> to shipping.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-lg font-bold text-white">5. Courier Partners & Tracking</h2>
              <p className="text-[#9c9ca8] leading-relaxed">We partner with Pakistan's most reliable logistics providers:</p>
              <ul className="list-disc list-inside space-y-2 text-[#9c9ca8] leading-relaxed ml-4 mt-2">
                <li><strong>TCS (Primary):</strong> Nationwide coverage, real-time SMS/email tracking, COD collection, 24/7 support</li>
                <li><strong>Leopards Courier:</strong> Strong rural network, COD, insurance claims handling</li>
                <li><strong>Pakistan Post (EMS):</strong> Remote/AJK/GB areas, registered insured mail</li>
              </ul>
              <p className="text-[#9c9ca8] leading-relaxed mt-4">
                Tracking numbers emailed and SMS'd instantly upon dispatch. Track at <a href="https://quantumbyte.tech/track-order" className="text-[#ff003c] hover:underline">quantumbyte.tech/track-order</a> or courier website. COD orders: verification call before dispatch.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-lg font-bold text-white">6. Cash on Delivery (COD) Process</h2>
              <div className="space-y-3">
                <div className="bg-[#0a0a10] border border-[#1a1a24] rounded-lg p-4">
                  <p className="font-semibold text-white mb-2">COD Verification Protocol</p>
                  <ol className="list-decimal list-inside space-y-1 text-sm text-[#9c9ca8] leading-relaxed">
                    <li>Courier calls customer 30-60 min before delivery</li>
                    <li>Customer confirms order details, amount, availability</li>
                    <li>Customer pays in cash (exact change appreciated)</li>
                    <li>Courier hands over sealed package</li>
                    <li>Customer signs delivery receipt</li>
                    <li>COD amount deposited to our account within 3-5 business days</li>
                  </ol>
                </div>
                <div className="bg-[#0a0a10] border border-[#ff003c]/30 rounded-lg p-4">
                  <div className="flex items-center gap-3">
                    <AlertTriangle className="h-5 w-5 text-[#ff003c]" />
                    <div>
                      <p className="font-semibold text-white">COD Limits & Restrictions</p>
                      <ul className="list-disc list-inside space-y-1 text-sm text-[#9c9ca8] mt-1">
                        <li>Maximum COD: Rs. 200,000 (orders above require 50% advance bank transfer)</li>
                        <li>COD not available for custom PC builds (advance deposit required)</li>
                        <li>Failed delivery attempts (3×) → order cancelled, return shipping charged</li>
                        <li>Refused COD packages → blacklisted from future COD</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-lg font-bold text-white">7. Receiving Your Shipment</h2>
              <p className="text-[#9c9ca8] leading-relaxed">Upon delivery, please:</p>
              <ol className="list-decimal list-inside space-y-2 text-[#9c9ca8] leading-relaxed ml-4 mt-2">
                <li><strong>Inspect outer box:</strong> Check for crushing, punctures, water damage, tampered tape. Note damage on courier receipt.</li>
                <li><strong>Open carefully:</strong> Use box cutter away from product. Do not discard packaging until inspection complete.</li>
                <li><strong>Verify contents:</strong> Match items to packing slip. Check model numbers, serial numbers (GPU, CPU, SSD).</li>
                <li><strong>Power-on test:</strong> For components, test within 24 hours. For custom PCs, run provided benchmark suite.</li>
                <li><strong>Report issues:</strong> Shipping damage → 24 hours with photos. DOA hardware → 7 days (see Refund Policy).</li>
              </ol>

              <div className="bg-[#0a0a10] border border-[#ff003c]/30 rounded-lg p-4 mt-4">
                <div className="flex items-center gap-3">
                  <AlertTriangle className="h-5 w-5 text-[#ff003c]" />
                  <div>
                    <p className="font-semibold text-white">Important</p>
                    <p className="text-sm text-[#9c9ca8] mt-1">Signing "Received in Good Condition" without inspection waives shipping damage claims. Always write "Subject to Inspection" on receipt if unable to open immediately.</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-lg font-bold text-white">8. Shipping Damage Claims</h2>
              <p className="text-[#9c9ca8] leading-relaxed">If package shows visible external damage:</p>
              <ol className="list-decimal list-inside space-y-2 text-[#9c9ca8] leading-relaxed ml-4 mt-2">
                <li>Refuse delivery OR accept with "Damaged — Subject to Inspection" written on receipt</li>
                <li>Take photos: outer box (all sides), shipping label, internal packaging, product damage</li>
                <li>Email photos to <a href="mailto:claims@quantumbyte.tech" className="text-[#ff003c] hover:underline">claims@quantumbyte.tech</a> within 24 hours</li>
                <li>We file insurance claim with courier (typically 3-7 business days)</li>
                <li>Replacement dispatched upon claim approval (free shipping)</li>
              </ol>
            </section>

            <section className="space-y-4">
              <h2 className="text-lg font-bold text-white">9. Address Changes & Delivery Issues</h2>
              <ul className="list-disc list-inside space-y-3 text-[#9c9ca8] leading-relaxed ml-4 mt-2">
                <li><strong>Address Change Before Dispatch:</strong> Free. Contact support immediately.</li>
                <li><strong>Address Change After Dispatch:</strong> Rs. 300 re-route fee (if possible). Not guaranteed.</li>
                <li><strong>Failed Delivery (Customer Unavailable):</strong> Courier attempts 3× over 3 days. Then returned to us. Re-shipping: Rs. 500-1,500.</li>
                <li><strong>Incorrect Address Provided:</strong> Customer responsible for re-shipping costs. Update address in account settings.</li>
                <li><strong>PO Box / Military Address:</strong> Not supported for COD or insured express. Use physical address.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-lg font-bold text-white">10. International Shipping</h2>
              <p className="text-[#9c9ca8] leading-relaxed">
    Currently, we ship <strong>within Pakistan only</strong>. For international inquiries (UAE, Saudi Arabia, UK, USA, EU), contact <a href="mailto:international@quantumbyte.tech" className="text-[#ff003c] hover:underline">international@quantumbyte.tech</a> for custom quotes. International shipping involves customs duties, import taxes, and compliance certifications (CE, FCC, RoHS) which are buyer's responsibility.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-lg font-bold text-white">11. Holiday & Peak Season Schedule</h2>
              <p className="text-[#9c9ca8] leading-relaxed">During major holidays (Eid, Ramadan, Independence Day, Black Friday, New Year):</p>
              <ul className="list-disc list-inside space-y-2 text-[#9c9ca8] leading-relaxed ml-4 mt-2">
                <li>Add 1-2 business days to standard timelines</li>
                <li>Cut-off time may move to 12:00 PM PKT</li>
                <li>Courier networks operate reduced schedules — communicated via website banner and email</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-lg font-bold text-white">12. Contact for Shipping Inquiries</h2>
              <div className="bg-[#0a0a10] border border-[#1a1a24] rounded-xl p-6 space-y-3">
                <div className="flex items-center gap-3">
                  <Truck className="h-5 w-5 text-[#ff003c]" />
                  <div>
                    <p className="font-semibold text-white">Shipping & Logistics Team</p>
                    <p className="text-sm text-[#9c9ca8]">shipping@quantumbyte.tech</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-[#ff003c]" />
                  <div>
                    <p className="font-semibold text-white">WhatsApp Tracking Support</p>
                    <p className="text-sm text-[#9c9ca8]"><a href="https://wa.me/923254803957" className="text-[#ff003c] hover:underline">+92 325 4803957</a></p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-[#ff003c]" />
                  <div>
                    <p className="font-semibold text-white">Support Hours</p>
                    <p className="text-sm text-[#9c9ca8]">Mon–Sat 10:00 AM – 8:00 PM PKT</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Package className="h-5 w-5 text-[#ff003c]" />
                  <div>
                    <p className="font-semibold text-white">Warehouse Address</p>
                    <p className="text-sm text-[#9c9ca8]">Office 7, 2nd Floor, AZ Mall Platform, Back Side Al-Fateh Kohinoor, Madina Town, Faisalabad</p>
                  </div>
                </div>
              </div>
            </section>
          </article>
        </div>
      </main>

      <Footer />
    </div>
  );
}