'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Navbar } from '@/app/components/Navbar';
import { Footer } from '@/app/components/Footer';
import { CartDrawer } from '@/app/components/CartDrawer';
import { HelpCircle, ChevronDown, ChevronRight, ShieldCheck, Truck, Wrench, Cpu, CreditCard, MapPin, Headphones, RotateCcw, AlertTriangle, CheckCircle2, Package, Smartphone } from 'lucide-react';

const faqs = [
  {
    category: 'Products & Authenticity',
    items: [
      {
        q: 'Are all products sold on QuantumByte 100% genuine and original?',
        a: 'Yes, absolutely. QuantumByte Technologies only sources products directly from official brand manufacturers and authorized global distributors (Apple, ASUS, Samsung, Anker, NVIDIA, Corsair, WD, Samsung, G.Skill, Seasonic). Every item carries full official warranty verification and can be validated on the manufacturer\'s website using the serial number.'
      },
      {
        q: 'How do I verify the authenticity of my purchase?',
        a: 'Each product ships with a QuantumByte authenticity card containing a unique verification code. Scan the QR code or visit verify.quantumbyte.tech, enter the code, and you\'ll see the product\'s sourcing chain, warranty start date, and manufacturer validation. You can also verify serial numbers directly on Apple, ASUS, NVIDIA, Samsung, and other brand websites.'
      },
      {
        q: 'Do products come with manufacturer warranties?',
        a: 'Yes. All products include their respective manufacturer warranties (Apple 1-year, ASUS 3-year on ROG, NVIDIA 3-year FE, Samsung/WD 3-5 year, Corsair/G.Skill lifetime). In addition, QuantumByte provides a 1-year hardware warranty on all retail products covering manufacturer defects, DOA, and component failures. See our Refund Policy for full details.'
      },
      {
        q: 'What condition are "Open Box" or "Refurbished" items in?',
        a: 'We currently do not sell open-box or refurbished items. Every product on quantumbyte.tech is brand new, factory-sealed, with full manufacturer packaging and accessories. If we ever introduce certified refurbished products, they will be clearly labeled with condition grades (A/B/C), 90-day warranty, and detailed inspection reports.'
      }
    ]
  },
  {
    category: 'Custom PC Assembly',
    items: [
      {
        q: 'How does the Custom PC Assembly service work?',
        a: 'When you book a custom PC build, our senior hardware engineers: (1) Consult with you on use-case, budget, and aesthetic preferences. (2) Provide a detailed component list with pricing for approval. (3) Procure genuine components from authorized distributors. (4) Assemble with handcrafted cable routing, custom liquid cooling loop pressure testing (if selected), BIOS XMP/EXPO memory tuning, and 24-hour thermal benchmarking (Prime95, FurMark, MemTest86). (5) Ship in ISPM-15 wooden crate with anti-static suspension. (6) Provide benchmark results, build photos, and 1-year build warranty.'
      },
      {
        q: 'What is the timeline for a custom PC build?',
        a: 'Standard air-cooled builds: 5-7 business days after component procurement. Custom liquid-cooled loops (softline): 7-10 business days. Hardline tubing / dual-loop / exotic coolant builds: 10-14 business days. Component procurement typically takes 2-3 days. You receive updates at each stage: procurement → assembly → testing → crating → dispatch.'
      },
      {
        q: 'Can I provide my own components for assembly?',
        a: 'Yes, we offer a "Bring Your Own Parts" service for Rs. 15,000 labor. You ship components to our lab; we assemble, cable manage, test, and ship back. Note: We cannot warranty components you provide. Any damage during assembly of customer-supplied parts is not covered. We recommend purchasing through us for full warranty coverage.'
      },
      {
        q: 'What cooling options are available?',
        a: 'Air cooling (dual-tower NH-D15 class), AIO liquid cooling (240/280/360/420mm), custom softline loops (EKWB, Corsair, Alphacool), custom hardline loops (PETG, acrylic, copper, brass), dual-loop (CPU + GPU separate), exotic coolants (clear, pastel, UV-reactive), and chilled water (TEC/chiller) for extreme overclocking.'
      }
    ]
  },
  {
    category: 'Shipping & Delivery',
    items: [
      {
        q: 'What is your delivery timeframe and shipping cost?',
        a: 'FREE insured express shipping on all orders over Rs. 27,900. Below threshold: Rs. 500 (standard) or Rs. 1,500 (oversize/wooden crate). Domestic urban orders (Karachi, Lahore, Islamabad, Faisalabad) arrive within 1-2 business days. Other cities: 2-4 days. Custom PC crates: 3-7 business days additional. See Shipping Policy for full details.'
      },
      {
        q: 'How is my hardware protected during shipping?',
        a: 'We use a 5-layer packaging system: (1) ESD anti-static bag (MIL-PRF-81705), (2) Anti-static bubble wrap, (3) Custom-cut high-density foam inserts, (2) Double-walled 275 lb test corrugated box with tamper-evident tape, (5) Wooden crate (ISPM-15) for custom PCs. All shipments are fully insured for declared value.'
      },
      {
        q: 'What happens if my package arrives damaged?',
        a: 'If the outer box shows visible damage, refuse delivery OR accept with "Damaged — Subject to Inspection" written on the courier receipt. Take photos of the box, packaging, and product. Email claims@quantumbyte.tech within 24 hours. We file the insurance claim and dispatch a replacement free of charge upon approval.'
      },
      {
        q: 'Do you ship to remote areas, AJK, or Gilgit-Baltistan?',
        a: 'Yes, we ship nationwide via Pakistan Post EMS for remote areas. Delivery: 5-7 business days (urban remote), 7-10 days (AJK/GB). Some oversize items (custom PC crates, large monitors) may not be available for AJK/GB — contact us for confirmation. Surcharges may apply for remote delivery.'
      },
      {
        q: 'Can I change my delivery address after placing an order?',
        a: 'Before dispatch: Free. Contact support immediately via WhatsApp (+92 325 4803957). After dispatch: Rs. 300 re-route fee if the courier allows it (not guaranteed). Update your default address in Account Settings to avoid issues.'
      }
    ]
  },
  {
    category: 'Payments & Orders',
    items: [
      {
        q: 'What payment methods do you accept?',
        a: 'We currently offer Cash on Delivery (COD) across Pakistan. EasyPaisa and JazzCash integration is in final testing — coming very soon. For orders above Rs. 200,000 or custom PC builds, we require 30-50% advance bank transfer. COD maximum: Rs. 200,000.'
      },
      {
        q: 'How does Cash on Delivery verification work?',
        a: 'The courier calls you 30-60 minutes before delivery to confirm: (1) Order details, (2) Amount, (3) Your availability. You pay in cash upon handover. The courier provides a receipt. COD amount is deposited to our account within 3-5 business days. Failed delivery attempts (3×) result in order cancellation.'
      },
      {
        q: 'Can I cancel or modify my order after placing it?',
        a: 'Before dispatch: Yes, free cancellation/modification. Contact support immediately. After dispatch: Not possible. For custom PC builds: 30% deposit is non-refundable once component procurement begins. Cancellations after assembly/liquid cooling installation incur 15% restocking fee + non-returnable custom parts cost.'
      },
      {
        q: 'Do you offer installment plans or financing?',
        a: 'Not currently. We are evaluating partnerships with banks for 0% markup installment plans (3/6/12 months) for orders above Rs. 100,000. Sign up for our newsletter to be notified when this launches.'
      }
    ]
  },
  {
    category: 'Warranty, Returns & Repairs',
    items: [
      {
        q: 'What is your return policy?',
        a: '7-day return/exchange for: (1) Unopened, factory-sealed products with all accessories, (2) Dead-on-Arrival (DOA) hardware defects, (3) Wrong item shipped, (4) Shipping damage reported within 24 hours. Free return shipping for DOA/wrong item/damage. Change-of-mind returns: customer pays return shipping (Rs. 500-1,500). Refunds to original payment in 3-5 business days.'
      },
      {
        q: 'What does the 1-Year QuantumByte Warranty cover?',
        a: 'Manufacturer component failures (GPU, CPU, RAM, SSD, PSU, motherboard, display, peripherals), custom PC build workmanship (assembly, cable routing, liquid cooling loop, BIOS tuning), power supply failures, display defects (dead pixels beyond spec), cooling system failures. Free repair/replacement. Free shipping for warranty claims. See Refund Policy for exclusions.'
      },
      {
        q: 'How do I file a warranty claim?',
        a: 'Contact support via WhatsApp (+92 325 4803957) or email (warranty@quantumbyte.tech) with order ID, issue description, and photos/videos. We attempt remote troubleshooting first. If hardware fault suspected: RMA issued, free courier pickup arranged. Lab diagnosis (3-5 days). Covered repairs free. Non-covered: quote provided. Free return shipping after repair.'
      },
      {
        q: 'Do you offer hardware repair services for products not purchased from you?',
        a: 'Yes. Our IPC-certified lab offers: Motherboard BGA reballing & micro-soldering, GPU repair (VRM, memory, core), laptop screen/battery/keyboard replacement, liquid damage cleaning (ultrasonic), custom loop maintenance (flush, coolant replacement), PSU repair. 30-day workmanship warranty on repairs. Diagnostic fee: Rs. 2,000 (waived if repair proceeds).'
      },
      {
        q: 'What is the process for a DOA (Dead on Arrival) product?',
        a: 'Report within 7 days of delivery with photos/video of the defect. We issue RMA and arrange free courier pickup. Lab confirms DOA within 2 business days. Options: (1) Full refund to original payment, (2) Immediate replacement dispatch (priority shipping). No restocking fee for verified DOA.'
      }
    ]
  },
  {
    category: 'IT Services & Enterprise',
    items: [
      {
        q: 'What IT services do you offer for businesses?',
        a: 'Corporate IT Infrastructure: Structured cabling (Cat6A/fiber), Synology/QNAP NAS deployment, Cisco/Ubiquiti networking, Active Directory, VPN, cloud migration. 24/7 Managed IT Support with SLA contracts. Hardware procurement & lifecycle management. Custom workstation deployment for creative/engineering teams.'
      },
      {
        q: 'Do you offer software development services?',
        a: 'Yes. Full-stack web & mobile development: Next.js 16, React, Node.js, TypeScript. Sanity CMS headless architecture. Stripe/PayPal/payment gateway integration. UI/UX with GSAP motion. SEO optimization, 99+ Lighthouse scores. iOS/Android native (Swift/Kotlin) and cross-platform (React Native, Flutter). Starting from Rs. 225,000/project.'
      },
      {
        q: 'How do I book an IT consultation?',
        a: 'Click "Book IT Consultation" in the navbar or visit any service page. Fill the form with your requirements, preferred date, and contact details. Our lead engineer will call within 2 business hours to discuss scope, timeline, and provide a quotation. On-site assessments available for Faisalabad/Lahore/Islamabad (Rs. 5,000 fee, credited if project proceeds).'
      }
    ]
  },
  {
    category: 'Account & Technical',
    items: [
      {
        q: 'How do I create an account?',
        a: 'Click "Sign In" in the navbar, then "Register." Enter your name, email, phone, and password (min 6 characters). You\'ll receive a verification email. Once verified, you can track orders, manage wishlist, save addresses, and access exclusive deals.'
      },
      {
        q: 'I forgot my password. How do I reset it?',
        a: 'Click "Forgot Password" on the login page. Enter your registered email. You\'ll receive a secure reset link valid for 1 hour. Set a new password (min 6 characters). If you don\'t receive the email, check spam or contact support.'
      },
      {
        q: 'Can I track my order without an account?',
        a: 'Yes. Use the "Track Order" page with your Order ID (format: QB-XXXXXX) and the email/phone used at checkout. Or use the tracking link in your confirmation SMS/email.'
      },
      {
        q: 'How do I manage my newsletter preferences?',
        a: 'Log in to your account, go to Settings → Notifications. Toggle promotional emails, order updates, price drop alerts, and new arrival notifications. You can also unsubscribe via the link in any marketing email.'
      }
    ]
  }
];

export default function FAQPage() {
  const [openIdx, setOpenIdx] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-[#030305] text-white flex flex-col font-sans selection:bg-[#ff003c] selection:text-white">
      <Navbar />

      <main className="flex-1 py-10 lg:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="mb-6 flex items-center gap-2 text-xs text-[#9c9ca8]">
            <Link href="/" className="hover:text-white">Home</Link>
            <ChevronRight className="h-3 w-3 text-[#ff003c]" />
            <span className="text-white font-bold">Frequently Asked Questions</span>
          </div>

          <div className="text-center space-y-3 mb-10">
            <span className="inline-flex items-center justify-center gap-1.5 rounded-full border border-[#ff003c]/30 bg-[#ff003c]/10 px-4 py-1.5 text-xs font-extrabold uppercase tracking-widest text-[#ff003c]">
              <HelpCircle className="h-4 w-4" /> KNOWLEDGE BASE & HELPDESK
            </span>
            <h1 className="text-3xl sm:text-4xl font-black text-white">
              FREQUENTLY ASKED <span className="text-[#ff003c]">QUESTIONS</span>
            </h1>
            <p className="text-sm text-[#9c9ca8] max-w-2xl mx-auto">
              Everything you need to know about our products, custom PC assembly, IT services, warranties, shipping, and payments. Can't find your answer?
              <Link href="/contact" className="text-[#ff003c] hover:underline ml-1">Contact our support team</Link>
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((section, sectionIdx) => (
              <div key={section.category} className="space-y-4">
                <h2 className="text-lg font-bold text-white flex items-center gap-2 pb-2 border-b border-[#1a1a24]">
                  {section.category}
                </h2>
                <div className="space-y-3">
                  {section.items.map((faq, itemIdx) => {
                    const uid = `${sectionIdx}-${itemIdx}`;
                    const isOpen = openIdx === uid;
                    return (
                      <div
                        key={uid}
                        className="rounded-2xl border border-[#1a1a24] bg-[#08080c] overflow-hidden transition"
                      >
                        <button
                          onClick={() => setOpenIdx(isOpen ? null : uid)}
                          className="w-full flex items-center justify-between p-5 text-left text-sm font-semibold text-white hover:text-[#ff003c] transition"
                        >
                          <span className="pr-4">{faq.q}</span>
                          <ChevronDown className={`h-4.5 w-4.5 flex-shrink-0 text-[#ff003c] transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                        </button>
                        {isOpen && (
                          <div className="p-5 pt-0 text-sm text-[#9c9ca8] leading-relaxed border-t border-[#1a1a24] bg-[#030305]/50">
                            {faq.a}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="mt-12 rounded-2xl border border-[#ff003c]/30 bg-[#ff003c]/5 p-8 text-center">
            <h3 className="text-xl font-bold text-white mb-2">Still Need Help?</h3>
            <p className="text-sm text-[#9c9ca8] mb-4 max-w-lg mx-auto">
              Our senior technical team is available Mon–Sat, 10AM–8PM PKT. We typically respond within 2 hours.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="https://wa.me/923254803957"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary flex items-center gap-2"
              >
                <Headphones className="h-4.5 w-4.5" />
                WhatsApp Support
              </a>
              <a
                href="mailto:support@quantumbyte.tech"
                className="btn btn-secondary flex items-center gap-2"
              >
                <Package className="h-4.5 w-4.5" />
                Email Support
              </a>
              <Link
                href="/contact"
                className="btn btn-outline flex items-center gap-2"
              >
                <Smartphone className="h-4.5 w-4.5" />
                Call Us
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <CartDrawer />
    </div>
  );
}