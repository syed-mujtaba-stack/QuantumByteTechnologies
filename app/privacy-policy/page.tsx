import React from 'react';
import Link from 'next/link';
import { Navbar } from '@/app/components/Navbar';
import { Footer } from '@/app/components/Footer';
import { ShieldCheck, ChevronRight } from 'lucide-react';

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-[#030305] text-white flex flex-col font-sans selection:bg-[#ff003c] selection:text-white">
      <Navbar />

      <main className="flex-1 py-10 lg:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="mb-6 flex items-center gap-2 text-xs text-[#9c9ca8]">
            <Link href="/" className="hover:text-white">Home</Link>
            <ChevronRight className="h-3 w-3 text-[#ff003c]" />
            <span className="text-white font-bold">Privacy Policy</span>
          </div>

          <article className="rounded-2xl border border-[#1a1a24] bg-[#08080c] p-8 sm:p-10 space-y-8">
            <header className="border-b border-[#1a1a24] pb-6">
              <span className="text-[10px] font-extrabold text-[#ff003c] uppercase tracking-widest flex items-center gap-1.5 mb-2">
                <ShieldCheck className="h-4 w-4" /> LEGAL DOCUMENTATION
              </span>
              <h1 className="text-3xl sm:text-4xl font-black text-white">PRIVACY POLICY</h1>
              <p className="text-sm text-[#6b6b7a] mt-2">Last Updated: August 15, 2026</p>
              <p className="text-sm text-[#6b6b7a] mt-1">Effective Date: August 15, 2026</p>
            </header>

            <section className="space-y-4">
              <h2 className="text-lg font-bold text-white">1. Introduction & Scope</h2>
              <p className="text-[#9c9ca8] leading-relaxed">
                QuantumByte Technologies ("we," "us," or "our") is committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your data when you visit our website <code className="text-[#ff003c] bg-[#0a0a10] px-1.5 py-0.5 rounded">quantumbyte.tech</code>, purchase hardware, book IT services, or interact with our services. By using our services, you agree to the collection and use of information in accordance with this policy.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-lg font-bold text-white">2. Information We Collect</h2>
              <h3 className="text-sm font-semibold text-white">2.1 Personal Information</h3>
              <p className="text-[#9c9ca8] leading-relaxed">
                When you create an account, place an order, book a service, or contact us, we may collect:
              </p>
              <ul className="list-disc list-inside space-y-2 text-[#9c9ca8] leading-relaxed ml-4">
                <li>Full name, email address, phone number</li>
                <li>Shipping and billing addresses</li>
                <li>Payment information (processed securely via third-party gateways)</li>
                <li>Account credentials (hashed passwords)</li>
                <li>Order history and service requests</li>
                <li>Communication preferences</li>
              </ul>

              <h3 className="text-sm font-semibold text-white mt-4">2.2 Automatic Data Collection</h3>
              <p className="text-[#9c9ca8] leading-relaxed">
                When you browse our website, we automatically collect:
              </p>
              <ul className="list-disc list-inside space-y-2 text-[#9c9ca8] leading-relaxed ml-4">
                <li>IP address, browser type, operating system</li>
                <li>Pages visited, time spent, referral source</li>
                <li>Device identifiers and cookies (see Cookie Policy section)</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-lg font-bold text-white">3. How We Use Your Information</h2>
              <p className="text-[#9c9ca8] leading-relaxed">We use your personal data for the following purposes:</p>
              <ul className="list-disc list-inside space-y-2 text-[#9c9ca8] leading-relaxed ml-4">
                <li><strong>Order Processing:</strong> Fulfill hardware orders, process payments, arrange shipping, and provide tracking updates</li>
                <li><strong>Service Delivery:</strong> Schedule IT consultations, custom PC builds, hardware repairs, and networking services</li>
                <li><strong>Customer Support:</strong> Respond to inquiries, process warranty claims, and provide technical assistance</li>
                <li><strong>Account Management:</strong> Maintain your profile, order history, wishlist, and comparison lists</li>
                <li><strong>Communication:</strong> Send order confirmations, shipping notifications, service updates, and occasional promotional emails (with consent)</li>
                <li><strong>Security & Fraud Prevention:</strong> Detect and prevent fraudulent transactions and unauthorized access</li>
                <li><strong>Legal Compliance:</strong> Fulfill legal obligations, resolve disputes, and enforce agreements</li>
              </ul>
              <p className="text-[#9c9ca8] leading-relaxed mt-4">
                We do <strong>not</strong> sell your personal information to third-party advertisers or data brokers.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-lg font-bold text-white">4. Data Sharing & Third Parties</h2>
              <p className="text-[#9c9ca8] leading-relaxed">We may share your information with:</p>
              <ul className="list-disc list-inside space-y-2 text-[#9c9ca8] leading-relaxed ml-4">
                <li><strong>Shipping Partners:</strong> Courier services (TCS, Leopards, Pakistan Post) for delivery</li>
                <li><strong>Payment Processors:</strong> Secure payment gateways (Stripe, PayPal, EasyPaisa) — we do not store full card details</li>
                <li><strong>Service Providers:</strong> Cloud hosting (Vercel, Neon), analytics (Sanity), email services</li>
                <li><strong>Legal Authorities:</strong> When required by law, court order, or to protect our rights</li>
              </ul>
              <p className="text-[#9c9ca8] leading-relaxed mt-4">
                All third parties are contractually bound to protect your data and use it only for specified purposes.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-lg font-bold text-white">5. Data Security</h2>
              <p className="text-[#9c9ca8] leading-relaxed">We implement industry-standard security measures:</p>
              <ul className="list-disc list-inside space-y-2 text-[#9c9ca8] leading-relaxed ml-4">
                <li>256-bit TLS/SSL encryption across all pages and checkout flows</li>
                <li>Passwords hashed with scrypt (salt + hash, never stored in plain text)</li>
                <li>HMAC-signed session cookies with secure, httpOnly, sameSite flags</li>
                <li>Role-based access control (customer, staff, super admin)</li>
                <li>Regular security audits and vulnerability assessments</li>
              </ul>
              <p className="text-[#9c9ca8] leading-relaxed mt-4">
                While we strive to protect your data, no internet transmission is 100% secure. You are responsible for keeping your account credentials confidential.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-lg font-bold text-white">6. Data Retention</h2>
              <p className="text-[#9c9ca8] leading-relaxed">We retain your personal information only as long as necessary:</p>
              <ul className="list-disc list-inside space-y-2 text-[#9c9ca8] leading-relaxed ml-4">
                <li>Account data: Until account deletion request</li>
                <li>Order records: 7 years (tax and legal compliance)</li>
                <li>Service booking records: 3 years</li>
                <li>Analytics/cookie data: 26 months maximum</li>
                <li>Marketing communications: Until unsubscribe</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-lg font-bold text-white">7. Your Rights (GDPR & Local Law)</h2>
              <p className="text-[#9c9ca8] leading-relaxed">Depending on your jurisdiction, you may have the right to:</p>
              <ul className="list-disc list-inside space-y-2 text-[#9c9ca8] leading-relaxed ml-4">
                <li>Access and obtain a copy of your personal data</li>
                <li>Rectify inaccurate or incomplete information</li>
                <li>Request erasure ("right to be forgotten") — subject to legal obligations</li>
                <li>Restrict or object to processing</li>
                <li>Data portability (receive your data in structured format)</li>
                <li>Withdraw consent for marketing communications at any time</li>
                <li>Lodge a complaint with a supervisory authority</li>
              </ul>
              <p className="text-[#9c9ca8] leading-relaxed mt-4">
                To exercise these rights, contact us at <a href="mailto:privacy@quantumbyte.tech" className="text-[#ff003c] hover:underline">privacy@quantumbyte.tech</a>
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-lg font-bold text-white">8. Cookies & Tracking Technologies</h2>
              <p className="text-[#9c9ca8] leading-relaxed">We use cookies and similar technologies to:</p>
              <ul className="list-disc list-inside space-y-2 text-[#9c9ca8] leading-relaxed ml-4">
                <li><strong>Essential:</strong> Session management, cart persistence, authentication, security</li>
                <li><strong>Analytics:</strong> Page views, product interactions, conversion tracking (Sanity)</li>
                <li><strong>Preferences:</strong> Language, currency, theme settings</li>
              </ul>
              <p className="text-[#9c9ca8] leading-relaxed mt-4">
                You can manage cookie preferences via your browser settings. Disabling essential cookies may break core functionality (cart, checkout, login).
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-lg font-bold text-white">9. Children's Privacy</h2>
              <p className="text-[#9c9ca8] leading-relaxed">
                Our services are not directed to individuals under 18. We do not knowingly collect personal information from minors. If you believe we have collected data from a minor, contact us immediately for deletion.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-lg font-bold text-white">10. International Data Transfers</h2>
              <p className="text-[#9c9ca8] leading-relaxed">
                Your data may be processed on servers located outside Pakistan (e.g., Vercel US/EU, Neon US). We ensure appropriate safeguards (Standard Contractual Clauses, adequacy decisions) for any cross-border transfers.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-lg font-bold text-white">11. Changes to This Policy</h2>
              <p className="text-[#9c9ca8] leading-relaxed">
                We may update this Privacy Policy periodically. Material changes will be posted on this page with a revised "Last Updated" date. Continued use of our services after changes constitutes acceptance.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-lg font-bold text-white">12. Contact Us</h2>
              <p className="text-[#9c9ca8] leading-relaxed">
                For privacy concerns, data requests, or questions about this policy:
              </p>
              <div className="bg-[#0a0a10] border border-[#1a1a24] rounded-xl p-6 space-y-3">
                <div className="flex items-center gap-3">
                  <span className="text-[#ff003c]">📧</span>
                  <a href="mailto:privacy@quantumbyte.tech" className="text-[#ff003c] hover:underline">privacy@quantumbyte.tech</a>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[#ff003c]">📞</span>
                  <a href="tel:+923254803957" className="text-[#ff003c] hover:underline">+92 325 4803957</a>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[#ff003c]">📍</span>
                  <address className="not-italic text-[#9c9ca8]">Office 7, 2nd Floor, AZ Mall Platform, Back Side Al-Fateh Kohinoor, Madina Town, Faisalabad, Punjab, Pakistan</address>
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