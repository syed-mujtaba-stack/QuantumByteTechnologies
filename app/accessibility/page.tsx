import React from 'react';
import Link from 'next/link';
import { Navbar } from '@/app/components/Navbar';
import { Footer } from '@/app/components/Footer';
import { Accessibility, ChevronRight, Mail, Phone, MapPin } from 'lucide-react';

export const metadata = {
  title: 'Accessibility Statement | QuantumByte Technologies',
  description: 'QuantumByte Technologies is committed to making our website accessible to all users, including those with disabilities.',
};

export default function AccessibilityPage() {
  return (
    <div className="min-h-screen bg-[#05070D] text-white flex flex-col font-sans selection:bg-[#3B82F6] selection:text-white">
      <Navbar />

      <main className="flex-1 py-10 lg:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="mb-6 flex items-center gap-2 text-xs text-[#94A3B8]">
            <Link href="/" className="hover:text-white">Home</Link>
            <ChevronRight className="h-3 w-3 text-[#3B82F6]" />
            <span className="text-white font-bold">Accessibility</span>
          </div>

          <article className="rounded-2xl border border-[white/[0.06]] bg-[#080B12] p-8 sm:p-10 space-y-8">
            <header className="border-b border-[white/[0.06]] pb-6">
              <span className="text-[10px] font-extrabold text-[#3B82F6] uppercase tracking-widest flex items-center gap-1.5 mb-2">
                <Accessibility className="h-4 w-4" /> COMMITMENT TO INCLUSION
              </span>
              <h1 className="text-3xl sm:text-4xl font-black text-white">ACCESSIBILITY STATEMENT</h1>
              <p className="text-sm text-[#64748B] mt-2">Last Updated: September 18, 2026</p>
              <p className="text-sm text-[#64748B] mt-1">Effective Date: September 18, 2026</p>
            </header>

            <section className="space-y-4">
              <h2 className="text-lg font-bold text-white">1. Our Commitment</h2>
              <p className="text-[#94A3B8] leading-relaxed">
                QuantumByte Technologies is committed to ensuring digital accessibility for people with disabilities. We continually improve the user experience for everyone and apply relevant accessibility standards to ensure our website{' '}
                <code className="text-[#3B82F6] bg-[white/[0.04]] px-1.5 py-0.5 rounded">quantumbyte.tech</code>{' '}
                is accessible, usable, and inclusive for all visitors — regardless of ability, technology, or circumstance.
              </p>
              <p className="text-[#94A3B8] leading-relaxed">
                We believe that every user deserves an equally dignified and independent experience. Accessibility is not an afterthought — it is a core part of how we design and build our platform.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-lg font-bold text-white">2. Conformance Status</h2>
              <p className="text-[#94A3B8] leading-relaxed">
                We aim to conform to the{' '}
                <a href="https://www.w3.org/WAI/WCAG21/quickref/" target="_blank" rel="noopener noreferrer" className="text-[#3B82F6] hover:underline">
                  Web Content Accessibility Guidelines (WCAG) 2.1
                </a>{' '}
                at Level AA. These guidelines explain how to make web content more accessible to people with disabilities.
              </p>
              <div className="grid sm:grid-cols-3 gap-3 mt-2">
                {[
                  { level: 'Level A', status: 'Fully Conformant', color: 'text-green-400', bg: 'bg-green-400/[0.08] border-green-400/[0.2]' },
                  { level: 'Level AA', status: 'Partially Conformant', color: 'text-[#3B82F6]', bg: 'bg-[#3B82F6]/[0.08] border-[#3B82F6]/[0.2]' },
                  { level: 'Level AAA', status: 'In Progress', color: 'text-yellow-400', bg: 'bg-yellow-400/[0.08] border-yellow-400/[0.2]' },
                ].map((item) => (
                  <div key={item.level} className={`rounded-xl border p-4 text-center ${item.bg}`}>
                    <p className={`font-bold text-sm ${item.color}`}>{item.level}</p>
                    <p className="text-[#94A3B8] text-xs mt-1">{item.status}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-lg font-bold text-white">3. Accessibility Features</h2>
              <p className="text-[#94A3B8] leading-relaxed">
                Our website includes the following accessibility features:
              </p>

              <h3 className="text-sm font-semibold text-white">3.1 Visual Accessibility</h3>
              <ul className="list-disc list-inside space-y-2 text-[#94A3B8] leading-relaxed ml-4">
                <li><strong>High Contrast:</strong> Dark theme with sufficient color contrast ratios (4.5:1 minimum for normal text)</li>
                <li><strong>Scalable Text:</strong> All text scales correctly with browser font size adjustments up to 200%</li>
                <li><strong>Color Independence:</strong> Information is never conveyed by color alone — icons and labels accompany color cues</li>
                <li><strong>Focus Indicators:</strong> Visible focus outlines on all interactive elements for keyboard users</li>
                <li><strong>No Flashing Content:</strong> We avoid animations that flash more than 3 times per second</li>
              </ul>

              <h3 className="text-sm font-semibold text-white mt-4">3.2 Navigation &amp; Structure</h3>
              <ul className="list-disc list-inside space-y-2 text-[#94A3B8] leading-relaxed ml-4">
                <li><strong>Keyboard Navigation:</strong> All functionality is accessible via keyboard (Tab, Enter, Arrow keys, Escape)</li>
                <li><strong>Skip Links:</strong> &quot;Skip to main content&quot; link available for screen reader and keyboard users</li>
                <li><strong>Logical Heading Structure:</strong> Pages use proper H1 → H2 → H3 hierarchy for easy navigation</li>
                <li><strong>Descriptive Page Titles:</strong> Each page has a unique, descriptive title tag</li>
                <li><strong>Breadcrumb Navigation:</strong> Clear breadcrumbs on all secondary pages</li>
                <li><strong>Consistent Navigation:</strong> Navigation menus appear in the same location across all pages</li>
              </ul>

              <h3 className="text-sm font-semibold text-white mt-4">3.3 Content &amp; Media</h3>
              <ul className="list-disc list-inside space-y-2 text-[#94A3B8] leading-relaxed ml-4">
                <li><strong>Alt Text:</strong> All meaningful images have descriptive alternative text</li>
                <li><strong>Decorative Images:</strong> Purely decorative images have empty alt attributes (alt=&quot;&quot;)</li>
                <li><strong>Plain Language:</strong> Content is written in clear, simple language where possible</li>
                <li><strong>Link Descriptions:</strong> Links have descriptive text rather than generic &quot;click here&quot; or &quot;read more&quot;</li>
                <li><strong>Form Labels:</strong> All form inputs have associated visible labels</li>
                <li><strong>Error Identification:</strong> Form errors are clearly identified and described in text</li>
              </ul>

              <h3 className="text-sm font-semibold text-white mt-4">3.4 Technical Standards</h3>
              <ul className="list-disc list-inside space-y-2 text-[#94A3B8] leading-relaxed ml-4">
                <li><strong>Semantic HTML5:</strong> Proper use of semantic elements (nav, main, article, section, header, footer)</li>
                <li><strong>ARIA Landmarks:</strong> ARIA roles and labels where native HTML semantics are insufficient</li>
                <li><strong>Screen Reader Compatible:</strong> Tested with NVDA, JAWS, and VoiceOver</li>
                <li><strong>Responsive Design:</strong> Works on all screen sizes from mobile to desktop</li>
                <li><strong>No Keyboard Traps:</strong> Users can always navigate away from any component using keyboard</li>
                <li><strong>Timeout Warnings:</strong> Users are warned before session timeouts occur</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-lg font-bold text-white">4. Assistive Technology Support</h2>
              <p className="text-[#94A3B8] leading-relaxed">
                Our website has been tested with the following assistive technologies:
              </p>
              <div className="overflow-x-auto rounded-xl border border-[white/[0.06]]">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-[white/[0.04]] border-b border-[white/[0.06]]">
                      <th className="text-left text-white font-semibold px-4 py-3">Assistive Technology</th>
                      <th className="text-left text-white font-semibold px-4 py-3">Browser</th>
                      <th className="text-left text-white font-semibold px-4 py-3">Support Level</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[white/[0.04]]">
                    {[
                      ['NVDA (Windows)', 'Chrome / Firefox', 'Full Support'],
                      ['JAWS (Windows)', 'Chrome / Edge', 'Full Support'],
                      ['VoiceOver (macOS)', 'Safari', 'Full Support'],
                      ['VoiceOver (iOS)', 'Safari Mobile', 'Full Support'],
                      ['TalkBack (Android)', 'Chrome Mobile', 'Full Support'],
                      ['Keyboard Only', 'All Major Browsers', 'Full Support'],
                    ].map(([tech, browser, support]) => (
                      <tr key={tech} className="hover:bg-[white/[0.02]] transition-colors">
                        <td className="px-4 py-3 text-[#94A3B8]">{tech}</td>
                        <td className="px-4 py-3 text-[#94A3B8]">{browser}</td>
                        <td className="px-4 py-3 text-green-400 font-medium">{support}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-lg font-bold text-white">5. Known Limitations</h2>
              <p className="text-[#94A3B8] leading-relaxed">
                Despite our efforts, some areas of our website may not yet fully meet all accessibility standards. Known limitations include:
              </p>
              <ul className="list-disc list-inside space-y-2 text-[#94A3B8] leading-relaxed ml-4">
                <li><strong>Product Image Galleries:</strong> Some interactive zoom features may not be fully keyboard accessible — a static fallback is available</li>
                <li><strong>Third-Party Embeds:</strong> Some embedded content (maps, payment widgets) is provided by third parties and may not fully conform to WCAG 2.1 AA</li>
                <li><strong>Complex Data Tables:</strong> Some comparison tables may lack full ARIA table markup on older browsers</li>
                <li><strong>PDF Documents:</strong> Technical specification PDFs may not be fully tagged — we provide HTML alternatives where possible</li>
              </ul>
              <p className="text-[#94A3B8] leading-relaxed mt-2">
                We are actively working to resolve these limitations in future updates.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-lg font-bold text-white">6. Accessibility for Our Physical Store</h2>
              <p className="text-[#94A3B8] leading-relaxed">
                Our physical store at AZ Mall, Faisalabad strives to be accessible to all customers:
              </p>
              <ul className="list-disc list-inside space-y-2 text-[#94A3B8] leading-relaxed ml-4">
                <li>Ground floor access available — please contact us in advance to arrange assistance if needed</li>
                <li>Staff are trained to assist customers with disabilities</li>
                <li>Large-print product information available on request</li>
                <li>Phone and WhatsApp ordering available for those unable to visit in person</li>
                <li>Home delivery available across Faisalabad for customers with mobility challenges</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-lg font-bold text-white">7. Feedback &amp; Accessibility Support</h2>
              <p className="text-[#94A3B8] leading-relaxed">
                We welcome your feedback on the accessibility of our website. If you encounter any barriers, need information in an alternative format, or require assistance:
              </p>
              <ul className="list-disc list-inside space-y-2 text-[#94A3B8] leading-relaxed ml-4">
                <li>Email us with a description of the accessibility issue and the page URL</li>
                <li>We will respond within <strong className="text-white">2 business days</strong></li>
                <li>We will work to provide the information in an accessible format or find another solution</li>
                <li>We take all accessibility reports seriously and use them to improve our site</li>
              </ul>
              <div className="bg-[#3B82F6]/[0.08] border border-[#3B82F6]/[0.2] rounded-xl p-4 mt-2">
                <p className="text-sm text-[#94A3B8] leading-relaxed">
                  <strong className="text-[#3B82F6]">Need help right now?</strong> Call or WhatsApp us at{' '}
                  <a href="tel:+923254803957" className="text-[#3B82F6] hover:underline">+92 325 4803957</a>{' '}
                  and our team will assist you directly.
                </p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-lg font-bold text-white">8. Our Ongoing Efforts</h2>
              <p className="text-[#94A3B8] leading-relaxed">
                Accessibility is an ongoing commitment, not a one-time fix. Our efforts include:
              </p>
              <ul className="list-disc list-inside space-y-2 text-[#94A3B8] leading-relaxed ml-4">
                <li><strong>Regular Audits:</strong> We conduct accessibility audits using automated tools (axe, Lighthouse) and manual testing</li>
                <li><strong>Developer Training:</strong> Our development team is trained in accessible web development best practices</li>
                <li><strong>Design Reviews:</strong> Accessibility is reviewed at every design and development stage</li>
                <li><strong>User Testing:</strong> We periodically test with users who rely on assistive technologies</li>
                <li><strong>Continuous Improvement:</strong> Accessibility issues are tracked and prioritized in our development backlog</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-lg font-bold text-white">9. Related Policies</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  { title: 'Privacy Policy', href: '/privacy-policy', desc: 'How we collect and use your personal data' },
                  { title: 'Cookie Policy', href: '/cookie-policy', desc: 'How we use cookies on our website' },
                  { title: 'Terms & Conditions', href: '/terms', desc: 'Rules governing use of our services' },
                  { title: 'Refund Policy', href: '/refund-policy', desc: 'Returns, exchanges, and refund procedures' },
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
                For accessibility concerns, feedback, or to request content in an alternative format:
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
