import Link from 'next/link';
import Image from 'next/image';
import { Navbar } from '@/app/components/Navbar';
import { Footer } from '@/app/components/Footer';
import { CartDrawer } from '@/app/components/CartDrawer';
import { GSAPFadeIn, GSAPHoverTilt } from '@/app/components/GSAPWrapper';
import { Cpu, Laptop, Smartphone, Zap, Wrench, Monitor, Headphones, Wifi, ArrowRight } from 'lucide-react';
import { fetchProducts } from '@/sanity/lib/fetch';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hardware Categories | QuantumByte Technologies',
  description: 'Explore all hardware categories: Computers, Laptops, Mobiles, Chargers, Component Parts, Monitors, Accessories, and Networking.',
};

export const revalidate = 60;

export default async function CategoriesPage() {
  const products = await fetchProducts();

  const categories = [
    {
      slug: 'computers',
      title: 'Computers & Workstations',
      desc: 'Liquid-cooled gaming desktops, custom rigs, Mac Studio, and workstations.',
      icon: Cpu,
      imageUrl: '/images/computers/quantumbyte_custom_rig.jpg',
    },
    {
      slug: 'laptops',
      title: 'Laptops & Ultrabooks',
      desc: 'Apple MacBook Pro M3, ASUS ROG Zephyrus OLED, Dell XPS, and gaming laptops.',
      icon: Laptop,
      imageUrl: '/images/laptops/apple_macbook_pro_16.jpg',
    },
    {
      slug: 'mobiles',
      title: 'Flagship Smartphones',
      desc: 'iPhone 16 Pro Max, Samsung Galaxy S25 Ultra, Pixel 9 Pro, and 5G foldables.',
      icon: Smartphone,
      imageUrl: '/images/mobiles/apple_iphone_16_pro.jpg',
    },
    {
      slug: 'chargers',
      title: 'GaN Chargers & Power Docks',
      desc: 'Anker Prime 100W, Apple 70W USB-C, Belkin MagSafe 3-in-1, and fast chargers.',
      icon: Zap,
      imageUrl: '/images/chargers/anker_prime_100w_gan.jpg',
    },
    {
      slug: 'parts',
      title: 'GPUs, RAM & Component Parts',
      desc: 'NVIDIA RTX 4090 GPUs, G.Skill DDR5 RAM, Samsung Gen4 NVMe SSDs, and motherboards.',
      icon: Wrench,
      imageUrl: '/images/parts/nvidia_rtx_4090_gpu.jpg',
    },
    {
      slug: 'monitors',
      title: 'Gaming Monitors & 5K Displays',
      desc: 'ASUS ROG 4K OLED 240Hz, Samsung Odyssey G9 49" Curved, and Apple Studio Display.',
      icon: Monitor,
      imageUrl: '/images/monitors/asus_rog_swift_4k_oled.jpg',
    },
    {
      slug: 'accessories',
      title: 'Gaming Accessories & Audio',
      desc: 'Razer Viper V3 Pro 54g mouse, Logitech G915 keyboard, Arctis Nova Pro, AirPods Max.',
      icon: Headphones,
      imageUrl: '/images/accessories/razer_viper_v3_pro.jpg',
    },
    {
      slug: 'networking',
      title: 'Enterprise Networking & NAS Storage',
      desc: 'ASUS ROG Wi-Fi 7 GT-BE98 router, Synology DS923+ 4-Bay NAS, Ubiquiti UniFi UDM-SE.',
      icon: Wifi,
      imageUrl: '/images/networking/asus_rog_rapture_wifi7.jpg',
    },
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white flex flex-col font-sans selection:bg-[#ff003c] selection:text-white">
      <Navbar />

      <main className="flex-1 py-12 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Page Header */}
          <div className="text-center space-y-3 mb-12">
            <span className="text-xs font-extrabold text-[#ff003c] uppercase tracking-widest">
              BROWSE CATALOG BY DEPARTMENTS
            </span>
            <h1 className="text-3xl font-black text-white sm:text-5xl">
              PRODUCT <span className="text-[#ff003c] glow-red-text">CATEGORIES</span>
            </h1>
            <p className="text-xs sm:text-sm text-[#a1a1aa] max-w-xl mx-auto">
              Select a category below to explore specific hardware products, component specifications, and brand selections.
            </p>
          </div>

          {/* Categories Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((cat, idx) => {
              const Icon = cat.icon;
              const count = products.filter((p) => p.category === cat.slug).length;
              return (
                <GSAPFadeIn key={cat.slug} direction="up" delay={0.1 * idx}>
                  <GSAPHoverTilt className="h-full">
                    <Link href={`/categories/${cat.slug}`} className="group flex h-full flex-col justify-between rounded-2xl border border-[#22222e] bg-[#0e0e12] p-5 transition hover:border-[#ff003c]/60 hover:bg-[#12121a] hover:shadow-xl hover:shadow-[#ff003c]/15 glass-panel">
                      <div className="space-y-4">
                        <div className="relative h-44 w-full overflow-hidden rounded-xl bg-[#050505]">
                          <Image
                            src={cat.imageUrl}
                            alt={cat.title}
                            fill
                            sizes="(max-width: 640px) 100vw, 25vw"
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                          <div className="absolute top-3 left-3 flex h-9 w-9 items-center justify-center rounded-xl bg-[#ff003c] text-white shadow-lg">
                            <Icon className="h-5 w-5" />
                          </div>
                        </div>

                        <div>
                          <div className="flex items-center justify-between text-xs mb-1">
                            <span className="font-extrabold text-[#ff003c] uppercase">{count} Products</span>
                          </div>
                          <h3 className="text-lg font-black text-white group-hover:text-[#ff003c] transition">
                            {cat.title}
                          </h3>
                          <p className="mt-1 text-xs text-[#a1a1aa] line-clamp-2">{cat.desc}</p>
                        </div>
                      </div>

                      <div className="mt-6 flex items-center justify-between pt-3 border-t border-[#1f1f2b] text-xs font-bold text-white group-hover:text-[#ff003c]">
                        <span>Browse Category</span>
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    </Link>
                  </GSAPHoverTilt>
                </GSAPFadeIn>
              );
            })}
          </div>
        </div>
      </main>

      <Footer />
      <CartDrawer />
    </div>
  );
}
