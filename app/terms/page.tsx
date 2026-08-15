import React from 'react';
import Link from 'next/link';
import { Navbar } from '@/app/components/Navbar';
import { Footer } from '@/app/components/Footer';
import { FileText, ChevronRight } from 'lucide-react';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#05070D] text-white flex flex-col font-sans selection:bg-[#3B82F6] selection:text-white">
      <Navbar />

      <main className="flex-1 py-10 lg:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="mb-6 flex items-center gap-2 text-xs text-[#94A3B8]">
            <Link href="/" className="hover:text-white">Home</Link>
            <ChevronRight className="h-3 w-3 text-[#3B82F6]" />
            <span className="text-white font-bold">Terms & Conditions</span>
          </div>

          <article className="rounded-2xl border border-[white/[0.06]] bg-[#080B12] p-8 sm:p-10 space-y-8">
            <header className="border-b border-[white/[0.06]] pb-6">
              <span className="text-[10px] font-extrabold text-[#3B82F6] uppercase tracking-widest flex items-center gap-1.5 mb-2">
                <FileText className="h-4 w-4" /> TERMS OF SERVICE
              </span>
              <h1 className="text-3xl sm:text-4xl font-black text-white">TERMS & CONDITIONS</h1>
              <p className="text-sm text-[#64748B] mt-2">Effective Date: August 15, 2026</p>
              <p className="text-sm text-[#64748B] mt-1">Last Updated: August 15, 2026</p>
            </header>

            <section className="space-y-4">
              <h2 className="text-lg font-bold text-white">1. Acceptance of Terms</h2>
              <p className="text-[#94A3B8] leading-relaxed">
                By accessing <code className="text-[#3B82F6] bg-[white/[0.04]] px-1.5 py-0.5 rounded">quantumbyte.tech</code>, creating an account, placing an order, or booking a service, you agree to be bound by these Terms & Conditions ("Terms"), our Privacy Policy, and all applicable laws. If you do not agree, please do not use our services.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-lg font-bold text-white">2. Definitions</h2>
              <dl className="space-y-2 text-[#94A3B8] leading-relaxed">
                <div className="bg-[white/[0.04]] border border-[white/[0.06]] rounded-lg p-4">
                  <dt className="font-semibold text-white">"QuantumByte", "we", "us", "our"</dt>
                  <dd className="text-sm mt-1">QuantumByte Technologies, a registered technology retailer and IT services provider based in Faisalabad, Punjab, Pakistan</dd>
                </div>
                <div className="bg-[white/[0.04]] border border-[white/[0.06]] rounded-lg p-4">
                  <dt className="font-semibold text-white">"You", "Customer", "User"</dt>
                  <dd className="text-sm mt-1">Any individual or entity browsing, purchasing, or booking services through our website</dd>
                </div>
                <div className="bg-[white/[0.04]] border border-[white/[0.06]] rounded-lg p-4">
                  <dt className="font-semibold text-white">"Products"</dt>
                  <dd className="text-sm mt-1">Hardware, components, accessories, and peripherals sold through our store</dd>
                </div>
                <div className="bg-[white/[0.04]] border border-[white/[0.06]] rounded-lg p-4">
                  <dt className="font-semibold text-white">"Services"</dt>
                  <dd className="text-sm mt-1">Custom PC assembly, hardware repair, IT infrastructure, software development, and consulting</dd>
                </div>
                <div className="bg-[white/[0.04]] border border-[white/[0.06]] rounded-lg p-4">
                  <dt className="font-semibold text-white">"Order"</dt>
                  <dd className="text-sm mt-1">A confirmed purchase request for Products or Services</dd>
                </div>
              </dl>
            </section>

            <section className="space-y-4">
              <h2 className="text-lg font-bold text-white">3. E-Commerce Purchases</h2>
              <h3 className="text-sm font-semibold text-white">3.1 Product Information & Pricing</h3>
              <p className="text-[#94A3B8] leading-relaxed mt-2">
                We strive for accurate product descriptions, specifications, images, and pricing. However, errors may occur. Prices are in Pakistani Rupees (PKR) and subject to change without notice. We reserve the right to correct pricing errors and cancel orders placed at incorrect prices.
              </p>

              <h3 className="text-sm font-semibold text-white mt-4">3.2 Order Placement & Confirmation</h3>
              <p className="text-[#94A3B8] leading-relaxed mt-2">
                Placing an order constitutes an offer to purchase. Orders are subject to stock verification. An order confirmation email does not constitute acceptance; we accept orders upon shipment or service booking confirmation.
              </p>

              <h3 className="text-sm font-semibold text-white mt-4">3.3 Payment</h3>
              <p className="text-[#94A3B8] leading-relaxed mt-2">
                We currently accept Cash on Delivery (COD) across Pakistan. EasyPaisa and other digital wallets are being integrated. COD orders require phone verification before dispatch. Payment is due upon delivery. We reserve the right to decline COD for high-value orders (Rs. 200,000+) and require advance bank transfer.
              </p>

              <h3 className="text-sm font-semibold text-white mt-4">3.4 Order Cancellation</h3>
              <p className="text-[#94A3B8] leading-relaxed mt-2">
                You may cancel an order before shipment by contacting support. Custom PC builds and custom liquid-cooled systems cannot be cancelled once component procurement or assembly has commenced (see Section 4).
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-lg font-bold text-white">4. Custom PC Assembly & Build-to-Order Terms</h2>
              <p className="text-[#94A3B8] leading-relaxed">
                Custom PC builds are personalized, non-standard products. Special terms apply:
              </p>
              <ul className="list-disc list-inside space-y-3 text-[#94A3B8] leading-relaxed ml-4 mt-2">
                <li><strong>Component Verification:</strong> All builds require your written approval of the final component list and pricing before procurement.</li>
                <li><strong>Non-Refundable Deposit:</strong> A 30% non-refundable deposit is required to begin component procurement.</li>
                <li><strong>Cancellation After Assembly:</strong> Cancellations after assembly, hardline liquid loop tubing, or BIOS tuning has started incur a 15% restocking fee + cost of any non-returnable custom parts (custom cables, tubing, coolant).</li>
                <li><strong>Build Timeline:</strong> Standard builds: 5-7 business days. Complex liquid-cooled workstations: 10-14 business days. Delays due to component availability will be communicated promptly.</li>
                <li><strong>Testing & Benchmarking:</strong> Every build undergoes 24-hour synthetic thermal stress testing (Prime95, FurMark, MemTest86) before shipment. Results are provided.</li>
                <li><strong>Warranty:</strong> 1-year QuantumByte build warranty covers assembly workmanship, cable routing, and liquid cooling loop integrity. Individual components carry their respective manufacturer warranties.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-lg font-bold text-white">5. IT Services Terms</h2>
              <p className="text-[#94A3B8] leading-relaxed mt-2">
                Professional IT services (hardware repair, networking, software development, consulting) are governed by these terms:
              </p>
              <ul className="list-disc list-inside space-y-3 text-[#94A3B8] leading-relaxed ml-4 mt-2">
                <li><strong>Scope & Quotation:</strong> Services require a signed Statement of Work (SoW) or approved quotation detailing scope, timeline, deliverables, and pricing.</li>
                <li><strong>Client Responsibilities:</strong> Provide access, credentials, documentation, and timely feedback. Delays caused by client inaction may extend timelines and incur additional charges.</li>
                <li><strong>Change Requests:</strong> Scope changes require written approval and may affect timeline and cost.</li>
                <li><strong>Acceptance:</strong> Services are deemed accepted upon delivery and client sign-off. A 7-day acceptance testing period applies.</li>
                <li><strong>Warranty on Services:</strong> 30-day warranty on repairs and configurations. Software development includes 90-day bug-fix warranty post-deployment.</li>
                <li><strong>Data Handling:</strong> Client data is handled per our Privacy Policy. We sign NDAs upon request.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-lg font-bold text-white">6. Shipping, Delivery & Risk Transfer</h2>
              <p className="text-[#94A3B8] leading-relaxed mt-2">
                <strong>Domestic (Pakistan):</strong> Free insured express shipping on orders over Rs. 27,900. Standard delivery: 1-3 business days (urban), 3-5 business days (rural). Custom PC crates: 3-7 business days.
              </p>
              <p className="text-[#94A3B8] leading-relaxed mt-2">
                <strong>Risk Transfer:</strong> Risk of loss transfers to you upon delivery to the shipping address. For COD orders, risk transfers upon payment and handover. Inspect packages upon delivery; report damage within 24 hours with photos.
              </p>
              <p className="text-[#94A3B8] leading-relaxed mt-2">
                <strong>Address Accuracy:</strong> You are responsible for providing accurate shipping details. Re-shipping due to incorrect address incurs additional charges.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-lg font-bold text-white">7. Warranty & Returns</h2>
              <p className="text-[#94A3B8] leading-relaxed mt-2">
                See our <Link href="/refund-policy" className="text-[#3B82F6] hover:underline">Refund Policy</Link> and <Link href="/shipping-policy" className="text-[#3B82F6] hover:underline">Shipping Policy</Link> for detailed terms. Summary:
              </p>
              <ul className="list-disc list-inside space-y-2 text-[#94A3B8] leading-relaxed ml-4 mt-2">
                <li>7-day return/exchange for unopened, sealed products or DOA hardware</li>
                <li>1-year QuantumByte hardware warranty on all retail products</li>
                <li>Manufacturer warranties apply per brand terms (Apple, ASUS, NVIDIA, etc.)</li>
                <li>Custom builds: 1-year build warranty + component manufacturer warranties</li>
                <li>Repair services: 30-day workmanship warranty</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-lg font-bold text-white">8. Intellectual Property</h2>
              <p className="text-[#94A3B8] leading-relaxed mt-2">
                All content on quantumbyte.tech (logos, text, images, code, designs, "QuantumByte" brand) is our property or licensed. You may not reproduce, distribute, or create derivative works without written permission. Product images and specifications belong to respective manufacturers.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-lg font-bold text-white">9. User Accounts</h2>
              <ul className="list-disc list-inside space-y-2 text-[#94A3B8] leading-relaxed ml-4 mt-2">
                <li>You are responsible for maintaining account confidentiality and all activity under your credentials.</li>
                <li>Use strong passwords; enable 2FA when available.</li>
                <li>Notify us immediately of unauthorized access.</li>
                <li>We may suspend/terminate accounts for fraud, abuse, or Terms violations.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-lg font-bold text-white">10. Prohibited Conduct</h2>
              <p className="text-[#94A3B8] leading-relaxed mt-2">You agree not to:</p>
              <ul className="list-disc list-inside space-y-2 text-[#94A3B8] leading-relaxed ml-4 mt-2">
                <li>Use the site for illegal, fraudulent, or harmful activities</li>
                <li>Attempt unauthorized access, scraping, or vulnerability testing</li>
                <li>Impersonate QuantumByte staff or other users</li>
                <li>Place fraudulent orders or abuse COD verification</li>
                <li>Reverse engineer, decompile, or copy our proprietary systems</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-lg font-bold text-white">11. Limitation of Liability</h2>
              <p className="text-[#94A3B8] leading-relaxed mt-2">
                To the maximum extent permitted by law, QuantumByte Technologies shall not be liable for:
              </p>
              <ul className="list-disc list-inside space-y-2 text-[#94A3B8] leading-relaxed ml-4 mt-2">
                <li>Indirect, incidental, special, consequential, or punitive damages</li>
                <li>Loss of profits, data, business opportunities, or goodwill</li>
                <li>Service interruptions, shipping delays beyond our control, or force majeure events</li>
                <li>Hardware compatibility issues not covered by manufacturer specifications</li>
                <li>Total liability shall not exceed the amount paid for the relevant Order</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-lg font-bold text-white">12. Indemnification</h2>
              <p className="text-[#94A3B8] leading-relaxed mt-2">
                You agree to indemnify and hold QuantumByte Technologies harmless from any claims, damages, losses, or expenses (including legal fees) arising from your breach of these Terms, misuse of Products/Services, or violation of applicable laws.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-lg font-bold text-white">13. Dispute Resolution & Governing Law</h2>
              <p className="text-[#94A3B8] leading-relaxed mt-2">
                These Terms are governed by the laws of Pakistan. Disputes shall be resolved through:
              </p>
              <ol className="list-decimal list-inside space-y-2 text-[#94A3B8] leading-relaxed ml-4 mt-2">
                <li>Good-faith negotiation between parties</li>
                <li>Mediation in Faisalabad, Punjab</li>
                <li>Binding arbitration under the Arbitration Act, 1940 (Pakistan)</li>
                <li>Exclusive jurisdiction of Faisalabad courts</li>
              </ol>
            </section>

            <section className="space-y-4">
              <h2 className="text-lg font-bold text-white">14. Force Majeure</h2>
              <p className="text-[#94A3B8] leading-relaxed mt-2">
                We are not liable for delays or failures caused by events beyond our reasonable control: natural disasters, pandemics, government actions, component supply chain disruptions, courier strikes, or internet outages.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-lg font-bold text-white">15. Changes to Terms</h2>
              <p className="text-[#94A3B8] leading-relaxed mt-2">
                We may modify these Terms at any time. Material changes will be posted with a revised "Effective Date." Continued use after changes constitutes acceptance. For active orders/services, the Terms at the time of purchase apply.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-lg font-bold text-white">16. Severability & Waiver</h2>
              <p className="text-[#94A3B8] leading-relaxed mt-2">
                If any provision is found unenforceable, the remainder remains in effect. Failure to enforce a right does not constitute a waiver.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-lg font-bold text-white">17. Entire Agreement</h2>
              <p className="text-[#94A3B8] leading-relaxed mt-2">
                These Terms, together with the Privacy Policy, Refund Policy, Shipping Policy, and any signed SoW, constitute the entire agreement between you and QuantumByte Technologies.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-lg font-bold text-white">18. Contact Information</h2>
              <p className="text-[#94A3B8] leading-relaxed">
                For questions about these Terms:
              </p>
              <div className="bg-[white/[0.04]] border border-[white/[0.06]] rounded-xl p-6 space-y-3">
                <div className="flex items-center gap-3">
                  <span className="text-[#3B82F6]">📧</span>
                  <a href="mailto:legal@quantumbyte.tech" className="text-[#3B82F6] hover:underline">legal@quantumbyte.tech</a>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[#3B82F6]">📞</span>
                  <a href="tel:+923254803957" className="text-[#3B82F6] hover:underline">+92 325 4803957</a>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[#3B82F6]">📍</span>
                  <address className="not-italic text-[#94A3B8]">Office 7, 2nd Floor, AZ Mall Platform, Back Side Al-Fateh Kohinoor, Madina Town, Faisalabad, Punjab, Pakistan</address>
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