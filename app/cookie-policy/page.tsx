import React from 'react';
import Link from 'next/link';
import { Navbar } from '@/app/components/Navbar';
import { Footer } from '@/app/components/Footer';
import { Cookie, ChevronRight, Mail, Phone, MapPin } from 'lucide-react';

export const metadata = {
  title: 'Cookie Policy | QuantumByte Technologies',
  description: 'Learn how QuantumByte Technologies uses cookies and similar tracking technologies on our website.',
};

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-[#05070D] text-white flex flex-col font-sans selection:bg-[#3B82F6] selection:text-white">
      <Navbar />

      <main className="flex-1 py-10 lg:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="mb-6 flex items-center gap-2 text-xs text-[#94A3B8]">
            <Link href="/" className="hover:text-white">Home</Link>
            <ChevronRight className="h-3 w-3 text-[#3B82F6]" />
            <span className="text-white font-bold">Cookie Policy</span>
          </div>

          <article className="rounded-2xl border border-[white/[0.06]] bg-[#080B12] p-8 sm:p-10 space-y-8">
            <header className="border-b border-[white/[0.06]] pb-6">
              <span className="text-[10px] font-extrabold text-[#3B82F6] uppercase tracking-widest flex items-center gap-1.5 mb-2">
                <Cookie className="h-4 w-4" /> LEGAL DOCUMENTATION
              </span>
              <h1 className="text-3xl sm:text-4xl font-black text-white">COOKIE POLICY</h1>
              <p className="text-sm text-[#64748B] mt-2">Last Updated: September 18, 2026</p>
              <p className="text-sm text-[#64748B] mt-1">Effective Date: September 18, 2026</p>
            </header>

            <section className="space-y-4">
              <h2 className="text-lg font-bold text-white">1. Introduction</h2>
              <p className="text-[#94A3B8] leading-relaxed">
                QuantumByte Technologies (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) uses cookies and similar tracking technologies on our website{' '}
                <code className="text-[#3B82F6] bg-[white/[0.04]] px-1.5 py-0.5 rounded">quantumbyte.tech</code>. This Cookie Policy explains what cookies are, how we use them, your choices regarding cookies, and further information about cookies.
              </p>
              <p className="text-[#94A3B8] leading-relaxed">
                By continuing to browse or use our website, you agree to our use of cookies as described in this policy. You can manage your cookie preferences at any time through your browser settings.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-lg font-bold text-white">2. What Are Cookies?</h2>
              <p className="text-[#94A3B8] leading-relaxed">
                Cookies are small text files placed on your device (computer, tablet, or mobile) when you visit a website. They are widely used to make websites work efficiently, improve user experience, and provide information to website owners.
              </p>
              <p className="text-[#94A3B8] leading-relaxed">
                Cookies can be &quot;session cookies&quot; (deleted when you close your browser) or &quot;persistent cookies&quot; (remain until they expire or you delete them). We also use similar technologies such as web beacons, pixels, and local storage.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-lg font-bold text-white">3. Types of Cookies We Use</h2>

              <h3 className="text-sm font-semibold text-white">3.1 Strictly Necessary Cookies</h3>
              <p className="text-[#94A3B8] leading-relaxed">
                These cookies are essential for the website to function and cannot be disabled. They are usually only set in response to actions you take such as logging in, adding items to your cart, or filling out forms.
              </p>
              <ul className="list-disc list-inside space-y-2 text-[#94A3B8] leading-relaxed ml-4">
                <li><strong>Session Management:</strong> Maintain your login state and secure session</li>
                <li><strong>Cart Persistence:</strong> Remember items in your shopping cart across pages</li>
                <li><strong>Wishlist &amp; Comparison:</strong> Save your wishlist and product comparisons</li>
                <li><strong>Security:</strong> CSRF protection, fraud detection, and bot prevention</li>
                <li><strong>Load Balancing:</strong> Distribute traffic across servers for stability</li>
              </ul>

              <h3 className="text-sm font-semibold text-white mt-4">3.2 Analytics &amp; Performance Cookies</h3>
              <p className="text-[#94A3B8] leading-relaxed">
                These cookies help us understand how visitors interact with our website by collecting information anonymously. This helps us improve our website and services.
              </p>
              <ul className="list-disc list-inside space-y-2 text-[#94A3B8] leading-relaxed ml-4">
                <li><strong>Page Views:</strong> Track which pages are visited and how often</li>
                <li><strong>Traffic Sources:</strong> Understand where visitors come from (search, social, direct)</li>
                <li><strong>Product Interactions:</strong> Which products are viewed, compared, and purchased</li>
                <li><strong>Error Tracking:</strong> Identify and fix technical issues on the website</li>
                <li><strong>Performance Metrics:</strong> Page load times, Core Web Vitals monitoring</li>
              </ul>

              <h3 className="text-sm font-semibold text-white mt-4">3.3 Functional / Preference Cookies</h3>
              <p className="text-[#94A3B8] leading-relaxed">
                These cookies allow the website to remember choices you make and provide enhanced, personalized features.
              </p>
              <ul className="list-disc list-inside space-y-2 text-[#94A3B8] leading-relaxed ml-4">
                <li><strong>Language Preference:</strong> Remember your language selection</li>
                <li><strong>Currency Display:</strong> Remember PKR or other currency preferences</li>
                <li><strong>Theme Settings:</strong> Dark/light mode preference</li>
                <li><strong>Recently Viewed:</strong> Products you recently browsed</li>
                <li><strong>Notification Preferences:</strong> Cookie consent and notification settings</li>
              </ul>

              <h3 className="text-sm font-semibold text-white mt-4">3.4 Marketing &amp; Targeting Cookies</h3>
              <p className="text-[#94A3B8] leading-relaxed">
                These cookies may be set by us or our advertising partners to build a profile of your interests and show you relevant advertisements. We currently use these in limited capacity.
              </p>
              <ul className="list-disc list-inside space-y-2 text-[#94A3B8] leading-relaxed ml-4">
                <li><strong>Retargeting:</strong> Show relevant ads to users who have visited our site</li>
                <li><strong>Conversion Tracking:</strong> Measure the effectiveness of our advertising campaigns</li>
                <li><strong>Social Media Pixels:</strong> Enable sharing and track social media referrals</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-lg font-bold text-white">4. Third-Party Cookies</h2>
              <p className="text-[#94A3B8] leading-relaxed">
                We use trusted third-party services that may set cookies on your device. These services have their own privacy and cookie policies:
              </p>
              <div className="space-y-3">
                {[
                  { name: 'Sanity CMS', purpose: 'Content management and analytics', link: 'https://www.sanity.io/legal/privacy' },
                  { name: 'Vercel', purpose: 'Web hosting, analytics, and performance', link: 'https://vercel.com/legal/privacy-policy' },
                  { name: 'Google Analytics', purpose: 'Website traffic and user behavior analytics', link: 'https://policies.google.com/privacy' },
                  { name: 'EasyPaisa / Payment Gateways', purpose: 'Secure payment processing', link: '' },
                ].map((service) => (
                  <div key={service.name} className="bg-[white/[0.04]] border border-[white/[0.06]] rounded-lg p-4 flex items-start justify-between gap-4">
                    <div>
                      <p className="font-semibold text-white text-sm">{service.name}</p>
                      <p className="text-[#94A3B8] text-sm mt-0.5">{service.purpose}</p>
                    </div>
                    {service.link && (
                      <a href={service.link} target="_blank" rel="noopener noreferrer" className="text-xs text-[#3B82F6] hover:underline whitespace-nowrap shrink-0">
                        Privacy Policy &rarr;
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-lg font-bold text-white">5. Cookie Retention Periods</h2>
              <p className="text-[#94A3B8] leading-relaxed">Different cookies are retained for varying periods:</p>
              <div className="overflow-x-auto rounded-xl border border-[white/[0.06]]">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-[white/[0.04]] border-b border-[white/[0.06]]">
                      <th className="text-left text-white font-semibold px-4 py-3">Cookie Type</th>
                      <th className="text-left text-white font-semibold px-4 py-3">Retention Period</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[white/[0.04]]">
                    {[
                      ['Session Cookies', 'Deleted when browser is closed'],
                      ['Authentication Token', '30 days (or until logout)'],
                      ['Cart &amp; Wishlist', '90 days'],
                      ['Analytics (Sanity)', '26 months'],
                      ['Preference Cookies', '1 year'],
                      ['Marketing/Retargeting', '30–90 days'],
                    ].map(([type, period]) => (
                      <tr key={type} className="hover:bg-[white/[0.02]] transition-colors">
                        <td className="px-4 py-3 text-[#94A3B8]" dangerouslySetInnerHTML={{ __html: type }} />
                        <td className="px-4 py-3 text-[#94A3B8]">{period}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-lg font-bold text-white">6. Managing Your Cookie Preferences</h2>
              <p className="text-[#94A3B8] leading-relaxed">
                You have several options to manage cookies:
              </p>

              <h3 className="text-sm font-semibold text-white">6.1 Browser Settings</h3>
              <p className="text-[#94A3B8] leading-relaxed">
                Most browsers allow you to control cookies through their settings. You can configure your browser to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-[#94A3B8] leading-relaxed ml-4">
                <li>Block all cookies (may break website functionality)</li>
                <li>Block third-party cookies only</li>
                <li>Delete existing cookies</li>
                <li>Be notified before a cookie is placed</li>
              </ul>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-3">
                {[
                  { browser: 'Chrome', url: 'https://support.google.com/chrome/answer/95647' },
                  { browser: 'Firefox', url: 'https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer' },
                  { browser: 'Safari', url: 'https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac' },
                  { browser: 'Edge', url: 'https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09' },
                  { browser: 'Opera', url: 'https://help.opera.com/en/latest/web-preferences/#cookies' },
                ].map((b) => (
                  <a key={b.browser} href={b.url} target="_blank" rel="noopener noreferrer" className="bg-[white/[0.04]] border border-[white/[0.06]] rounded-lg p-3 text-center text-sm text-[#3B82F6] hover:bg-[white/[0.08]] transition-colors">
                    {b.browser} &rarr;
                  </a>
                ))}
              </div>

              <h3 className="text-sm font-semibold text-white mt-4">6.2 Opt-Out Tools</h3>
              <ul className="list-disc list-inside space-y-2 text-[#94A3B8] leading-relaxed ml-4">
                <li>
                  <a href="https://optout.networkadvertising.org/" target="_blank" rel="noopener noreferrer" className="text-[#3B82F6] hover:underline">NAI Opt-Out Tool</a> — opt out of interest-based advertising
                </li>
                <li>
                  <a href="https://www.youronlinechoices.eu/" target="_blank" rel="noopener noreferrer" className="text-[#3B82F6] hover:underline">Your Online Choices</a> — manage ad preferences in Europe
                </li>
                <li>
                  <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-[#3B82F6] hover:underline">Google Analytics Opt-Out</a> — browser add-on
                </li>
              </ul>

              <div className="bg-[#3B82F6]/[0.08] border border-[#3B82F6]/[0.2] rounded-xl p-4 mt-2">
                <p className="text-sm text-[#94A3B8] leading-relaxed">
                  <strong className="text-[#3B82F6]">Important:</strong> Disabling strictly necessary cookies (session, authentication, cart) will impair core website functionality including login, checkout, and cart persistence.
                </p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-lg font-bold text-white">7. Do Not Track Signals</h2>
              <p className="text-[#94A3B8] leading-relaxed">
                Some browsers transmit &quot;Do Not Track&quot; (DNT) signals. Currently, our website does not alter its data collection and use practices in response to DNT signals as there is no industry-wide consensus on how to respond to them.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-lg font-bold text-white">8. Changes to This Cookie Policy</h2>
              <p className="text-[#94A3B8] leading-relaxed">
                We may update this Cookie Policy periodically to reflect changes in technology, legislation, or our data practices. Material changes will be posted on this page with a revised &quot;Last Updated&quot; date. We encourage you to review this policy regularly.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-lg font-bold text-white">9. Related Policies</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  { title: 'Privacy Policy', href: '/privacy-policy', desc: 'How we collect and use your personal data' },
                  { title: 'Terms & Conditions', href: '/terms', desc: 'Rules governing use of our services' },
                  { title: 'Refund Policy', href: '/refund-policy', desc: 'Returns, exchanges, and refund procedures' },
                  { title: 'Shipping Policy', href: '/shipping-policy', desc: 'Delivery terms and shipping information' },
                ].map((policy) => (
                  <Link key={policy.href} href={policy.href} className="bg-[white/[0.04]] border border-[white/[0.06]] rounded-xl p-4 hover:bg-[white/[0.08]] hover:border-[#3B82F6]/[0.3] transition-all group">
                    <p className="font-semibold text-white text-sm group-hover:text-[#3B82F6] transition-colors">{policy.title} &rarr;</p>
                    <p className="text-[#64748B] text-xs mt-1">{policy.desc}</p>
                  </Link>
                ))}
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-lg font-bold text-white">10. Contact Us</h2>
              <p className="text-[#94A3B8] leading-relaxed">
                For questions or concerns about our Cookie Policy or cookie practices:
              </p>
              <div className="bg-[white/[0.04]] border border-[white/[0.06]] rounded-xl p-6 space-y-3">
                <div className="flex items-center gap-3">
                  <Mail className="h-4.5 w-4.5 text-[#3B82F6] shrink-0" />
                  <a href="mailto:supportquantumbytetechnologies@gmail.com" className="text-[#3B82F6] hover:underline">supportquantumbytetechnologies@gmail.com</a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-4.5 w-4.5 text-[#3B82F6] shrink-0" />
                  <a href="tel:+923254803957" className="text-[#3B82F6] hover:underline">+92 325 4803957</a>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-4.5 w-4.5 text-[#3B82F6] shrink-0" />
                  <address className="not-italic text-[#94A3B8]">Office No 7, Second Floor, AZ Mall Platform, Back Side Alfathy Kohinoor, Faisalabad</address>
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
