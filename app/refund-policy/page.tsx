import React from 'react';
import Link from 'next/link';
import { Navbar } from '@/app/components/Navbar';
import { Footer } from '@/app/components/Footer';
import { RefreshCw, ChevronRight, ShieldCheck, Truck, RotateCcw, AlertTriangle, CheckCircle2 } from 'lucide-react';

export default function RefundPolicyPage() {
  return (
    <div className="min-h-screen bg-[#05070D] text-white flex flex-col font-sans selection:bg-[#3B82F6] selection:text-white">
      <Navbar />

      <main className="flex-1 py-10 lg:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="mb-6 flex items-center gap-2 text-xs text-[#94A3B8]">
            <Link href="/" className="hover:text-white">Home</Link>
            <ChevronRight className="h-3 w-3 text-[#3B82F6]" />
            <span className="text-white font-bold">Refund & Return Policy</span>
          </div>

          <article className="rounded-2xl border border-[white/[0.06]] bg-[#080B12] p-8 sm:p-10 space-y-8">
            <header className="border-b border-[white/[0.06]] pb-6">
              <span className="text-[10px] font-extrabold text-[#3B82F6] uppercase tracking-widest flex items-center gap-1.5 mb-2">
                <RefreshCw className="h-4 w-4" /> WARRANTY & RETURNS
              </span>
              <h1 className="text-3xl sm:text-4xl font-black text-white">REFUND & RETURN POLICY</h1>
              <p className="text-sm text-[#64748B] mt-2">Last Updated: August 15, 2026</p>
              <p className="text-sm text-[#64748B] mt-1">7-Day Replacement Guarantee & 1-Year Hardware Warranty</p>
            </header>

            <section className="space-y-4">
              <h2 className="text-lg font-bold text-white">1. Policy Overview</h2>
              <p className="text-[#94A3B8] leading-relaxed">
                QuantumByte Technologies stands behind every product we sell. This policy covers returns, replacements, and warranty claims for hardware purchased through our store. Custom PC builds and services have separate terms (see <Link href="/terms" className="text-[#3B82F6] hover:underline">Terms & Conditions</Link> Sections 4 & 5).
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-lg font-bold text-white">2. 7-Day Return & Exchange Window</h2>
              <p className="text-[#94A3B8] leading-relaxed">You may request a return or exchange within <strong>7 calendar days</strong> of delivery if:</p>
              <ul className="list-disc list-inside space-y-2 text-[#94A3B8] leading-relaxed ml-4 mt-2">
                <li><strong>Unopened & Sealed:</strong> Product is in original factory-sealed packaging with all seals intact, accessories, manuals, and promotional items included.</li>
                <li><strong>Dead on Arrival (DOA):</strong> Hardware defect identified upon first use (e.g., GPU artifacting, SSD not detected, motherboard POST failure, display dead pixels exceeding manufacturer threshold).</li>
                <li><strong>Wrong Item Shipped:</strong> Product received does not match order confirmation (model, specification, or variant mismatch).</li>
                <li><strong>Shipping Damage:</strong> Visible physical damage from transit reported within <strong>24 hours</strong> of delivery with photos.</li>
              </ul>

              <div className="bg-[white/[0.04]] border border-[#3B82F6]/30 rounded-xl p-4 mt-4">
                <div className="flex items-center gap-3">
                  <AlertTriangle className="h-5 w-5 text-[#3B82F6]" />
                  <div>
                    <p className="font-semibold text-white">Non-Returnable Items</p>
                    <p className="text-sm text-[#94A3B8] mt-1">
                      Opened software/licenses, custom-cut cables, custom liquid cooling loops, thermal paste (once opened), consumables (thermal pads, cleaning kits), and personalized items.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-lg font-bold text-white">3. Return & Exchange Process</h2>
              <ol className="list-decimal list-inside space-y-3 text-[#94A3B8] leading-relaxed ml-4 mt-2">
                <li><strong>Initiate Request:</strong> Contact support via WhatsApp (+92 325 4803957) or email (returns@quantumbyte.tech) with order ID, reason, and photos (if DOA/damage).</li>
                <li><strong>RMA Issuance:</strong> We issue a Return Merchandise Authorization (RMA) number and return instructions within 4 business hours.</li>
                <li><strong>Packaging:</strong> Repack in original box with all accessories. Include RMA slip. Use anti-static bag for components (GPU, RAM, SSD, motherboard).</li>
                <li><strong>Shipment:</strong> We arrange free courier pickup for DOA/wrong item/damage. For change-of-mind returns, customer bears return shipping (Rs. 500-1,500 depending on size/weight).</li>
                <li><strong>Lab Inspection:</strong> Our technical lab inspects within 2 business days of receipt. Tests include: POST, stress benchmarks, firmware verification, physical inspection.</li>
                <li><strong>Resolution:</strong> Approved returns → refund to original payment (3-5 business days) or replacement dispatch. Denied returns → return shipped back at customer cost with detailed report.</li>
              </ol>
            </section>

            <section className="space-y-4">
              <h2 className="text-lg font-bold text-white">4. Refund Methods & Timelines</h2>
              <table className="w-full text-sm text-[#94A3B8]">
                <thead>
                  <tr className="border-b border-[white/[0.06]]">
                    <th className="text-left pb-2 font-semibold text-white">Payment Method</th>
                    <th className="text-left pb-2 font-semibold text-white">Refund Method</th>
                    <th className="text-left pb-2 font-semibold text-white">Timeline</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[white/[0.06]]">
                  <tr>
                    <td className="py-2">Cash on Delivery</td>
                    <td className="py-2">Bank Transfer / EasyPaisa / JazzCash</td>
                    <td className="py-2">3-5 business days after approval</td>
                  </tr>
                  <tr>
                    <td className="py-2">Bank Transfer (Advance)</td>
                    <td className="py-2">Original Bank Account</td>
                    <td className="py-2">3-5 business days after approval</td>
                  </tr>
                  <tr>
                    <td className="py-2">EasyPaisa / JazzCash</td>
                    <td className="py-2">Original Wallet</td>
                    <td className="py-2">1-2 business days after approval</td>
                  </tr>
                </tbody>
              </table>
              <p className="text-sm text-[#64748B] mt-2">
                Refunds exclude original shipping charges (unless DOA/wrong item/damage). Custom PC deposits are non-refundable per Section 4 of Terms.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-lg font-bold text-white">5. 1-Year QuantumByte Hardware Warranty</h2>
              <p className="text-[#94A3B8] leading-relaxed">All retail products carry a <strong>1-year QuantumByte warranty</strong> from delivery date, covering:</p>
              <ul className="list-disc list-inside space-y-2 text-[#94A3B8] leading-relaxed ml-4 mt-2">
                <li>Manufacturer component failures (GPU, CPU, RAM, SSD, PSU, motherboard, display, peripherals)</li>
                <li>Custom PC build workmanship: assembly, cable routing, liquid cooling loop integrity, BIOS tuning</li>
                <li>Power supply failures, display defects (dead pixels, backlight bleed beyond spec)</li>
                <li>Cooling system failures: AIO pump, fan controllers, custom loop components</li>
              </ul>

              <h3 className="text-sm font-semibold text-white mt-4">5.1 Warranty Claim Process</h3>
              <ol className="list-decimal list-inside space-y-2 text-[#94A3B8] leading-relaxed ml-4 mt-2">
                <li>Contact support with order ID, issue description, and error photos/videos.</li>
                <li>Remote troubleshooting (TeamViewer, phone) attempted first for software/driver issues.</li>
                <li>If hardware fault suspected: RMA issued, free courier pickup arranged.</li>
                <li>Lab diagnosis (3-5 business days). Covered repairs → free. Non-covered → quote provided.</li>
                <li>Repair completed with genuine parts. 24-hour post-repair stress test.</li>
                <li>Return shipping free for warranty claims.</li>
              </ol>

              <h3 className="text-sm font-semibold text-white mt-4">5.2 Warranty Exclusions</h3>
              <ul className="list-disc list-inside space-y-2 text-[#94A3B8] leading-relaxed ml-4 mt-2">
                <li>Physical damage: drops, liquid spills, crushed chassis, bent pins, cracked PCBs</li>
                <li>Unauthorized modifications: overclocking beyond safe limits, custom BIOS flashes, component swaps</li>
                <li>Improper installation: incorrect CPU mounting, RAM in wrong slots, PSU cables mismatched</li>
                <li>Environmental damage: power surges (use UPS), humidity, dust accumulation, pest infestation</li>
                <li>Normal wear: fan bearing noise after 12 months, thermal paste degradation, RGB LED dimming</li>
                <li>Software issues: OS corruption, driver conflicts, malware, user-installed applications</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-lg font-bold text-white">6. Manufacturer Warranties (Pass-Through)</h2>
              <p className="text-[#94A3B8] leading-relaxed">In addition to our 1-year warranty, products carry their respective manufacturer warranties:</p>
              <div className="grid gap-3 sm:grid-cols-2 mt-2">
                <div className="bg-[white/[0.04]] border border-[white/[0.06]] rounded-lg p-4">
                  <p className="font-semibold text-white">Apple</p>
                  <p className="text-sm text-[#94A3B8] mt-1">1-year limited warranty + 90-day phone support. AppleCare+ available.</p>
                </div>
                <div className="bg-[white/[0.04]] border border-[white/[0.06]] rounded-lg p-4">
                  <p className="font-semibold text-white">ASUS / ROG</p>
                  <p className="text-sm text-[#94A3B8] mt-1">3-year warranty on motherboards/GPUs (region dependent). ROG extended available.</p>
                </div>
                <div className="bg-[white/[0.04]] border border-[white/[0.06]] rounded-lg p-4">
                  <p className="font-semibold text-white">NVIDIA (Founders Edition)</p>
                  <p className="text-sm text-[#94A3B8] mt-1">3-year limited warranty. AIB partner cards follow their brand terms.</p>
                </div>
                <div className="bg-[white/[0.04]] border border-[white/[0.06]] rounded-lg p-4">
                  <p className="font-semibold text-white">Samsung / WD / Crucial (Storage)</p>
                  <p className="text-sm text-[#94A3B8] mt-1">3-5 years limited warranty (TBW limits apply). Data recovery not covered.</p>
                </div>
                <div className="bg-[white/[0.04]] border border-[white/[0.06]] rounded-lg p-4">
                  <p className="font-semibold text-white">Corsair / G.Skill / Kingston (RAM)</p>
                  <p className="text-sm text-[#94A3B8] mt-1">Lifetime limited warranty. Physical damage excluded.</p>
                </div>
                <div className="bg-[white/[0.04]] border border-[white/[0.06]] rounded-lg p-4">
                  <p className="font-semibold text-white">Seasonic / Corsair / EVGA (PSU)</p>
                  <p className="text-sm text-[#94A3B8] mt-1">5-10 years depending on series. Fan noise after 2 years not covered.</p>
                </div>
              </div>
              <p className="text-sm text-[#64748B] mt-3">
                We assist with manufacturer RMA coordination. Shipping to manufacturer service centers may incur charges.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-lg font-bold text-white">7. Repair Services Warranty</h2>
              <p className="text-[#94A3B8] leading-relaxed">Hardware repair and micro-soldering services carry a <strong>30-day workmanship warranty</strong> from pickup date. Covers the specific repair performed (e.g., BGA reball, trace repair, capacitor replacement). Does not cover unrelated subsequent failures or pre-existing conditions on other components.</p>
            </section>

            <section className="space-y-4">
              <h2 className="text-lg font-bold text-white">8. Custom PC Build Warranty Details</h2>
              <p className="text-[#94A3B8] leading-relaxed">See <Link href="/terms" className="text-[#3B82F6] hover:underline">Terms & Conditions</Link> Section 4 for full terms. Summary:</p>
              <ul className="list-disc list-inside space-y-2 text-[#94A3B8] leading-relaxed ml-4 mt-2">
                <li>1-year build warranty: assembly, cable management, liquid cooling loop, BIOS configuration</li>
                <li>Individual components: manufacturer warranties (pass-through)</li>
                <li>Free remote diagnostics for build warranty period</li>
                <li>Annual maintenance service available (thermal paste refresh, loop flush, dust cleaning) at discounted rate</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-lg font-bold text-white">9. Denied Claims & Appeals</h2>
              <p className="text-[#94A3B8] leading-relaxed">
                If a return or warranty claim is denied, we provide a detailed technical report with photos and test results. You may appeal within 7 days by providing additional evidence or requesting a second opinion from the manufacturer (at your cost). Final determinations rest with QuantumByte Technologies.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-lg font-bold text-white">10. Contact for Returns & Warranty</h2>
              <div className="bg-[white/[0.04]] border border-[white/[0.06]] rounded-xl p-6 space-y-3">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="h-5 w-5 text-[#3B82F6]" />
                  <div>
                    <p className="font-semibold text-white">Returns & RMA Department</p>
                    <p className="text-sm text-[#94A3B8]">returns@quantumbyte.tech</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Truck className="h-5 w-5 text-[#3B82F6]" />
                  <div>
                    <p className="font-semibold text-white">WhatsApp (Fastest Response)</p>
                    <p className="text-sm text-[#94A3B8]"><a href="https://wa.me/923254803957" className="text-[#3B82F6] hover:underline">+92 325 4803957</a></p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <RotateCcw className="h-5 w-5 text-[#3B82F6]" />
                  <div>
                    <p className="font-semibold text-white">Warranty & Repair Lab</p>
                    <p className="text-sm text-[#94A3B8]">warranty@quantumbyte.tech</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#3B82F6]" />
                  <div>
                    <p className="font-semibold text-white">Office Address</p>
                    <p className="text-sm text-[#94A3B8]">Office 7, 2nd Floor, AZ Mall Platform, Back Side Al-Fateh Kohinoor, Madina Town, Faisalabad</p>
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