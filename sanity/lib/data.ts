// ─────────────────────────────────────────────────────────────
// Shared TypeScript interfaces (used by both Sanity & fallback)
// ─────────────────────────────────────────────────────────────
export interface Product {
  id: string;
  name: string;
  brand: string;
  category: 'computers' | 'laptops' | 'mobiles' | 'chargers' | 'parts' | 'monitors' | 'accessories' | 'networking';
  price: number;
  discountPrice?: number;
  imageUrl: string;
  rating: number;
  reviewsCount: number;
  stock: number;
  isFeatured?: boolean;
  isNewRelease?: boolean;
  description: string;
  specs: string[];
}

export interface ITService {
  id: string;
  title: string;
  subtitle: string;
  imageUrl: string;
  priceStarting: number;
  features: string[];
  popularBadge?: boolean;
  description: string;
}

export const INITIAL_PRODUCTS: Product[] = [
  // COMPUTERS
  {
    id: 'comp-1',
    name: 'Apple Mac Studio M2 Ultra',
    brand: 'Apple',
    category: 'computers',
    price: 3999,
    discountPrice: 4299,
    imageUrl: '/images/computers/apple_mac_studio.jpg',
    rating: 4.9,
    reviewsCount: 48,
    stock: 8,
    isFeatured: true,
    isNewRelease: true,
    description: 'Empowered by the M2 Ultra chip, Mac Studio delivers workstation performance in a compact form factor for professional audio, video, and 3D rendering.',
    specs: ['24-Core CPU', '60-Core GPU', '64GB Unified Memory', '1TB NVMe SSD Storage', 'Thunderbolt 4 Ports']
  },
  {
    id: 'comp-2',
    name: 'ASUS ROG Strix G35 Gaming Desktop',
    brand: 'ASUS',
    category: 'computers',
    price: 2899,
    discountPrice: 3199,
    imageUrl: '/images/computers/asus_rog_strix_g35.jpg',
    rating: 4.8,
    reviewsCount: 64,
    stock: 12,
    isFeatured: true,
    description: 'Dominate esports with Intel Core i9 14900KF, RTX 4080 Super graphics, liquid cooling system, and customizable Aura Sync RGB lighting.',
    specs: ['Intel Core i9-14900KF', 'NVIDIA RTX 4080 Super 16GB', '32GB DDR5 RAM', '2TB Gen4 M.2 SSD', 'Liquid Cooled']
  },
  {
    id: 'comp-3',
    name: 'Alienware Aurora R16 Gaming PC',
    brand: 'Alienware',
    category: 'computers',
    price: 2499,
    discountPrice: 2699,
    imageUrl: '/images/computers/alienware_aurora_r16.jpg',
    rating: 4.7,
    reviewsCount: 39,
    stock: 15,
    isFeatured: false,
    description: 'Re-engineered Legend 3 design providing improved airflow, quieter acoustics, and high-FPS gaming power for extreme titles.',
    specs: ['Intel Core i7-14700F', 'NVIDIA RTX 4070 Ti Super', '32GB DDR5 XMP', '1TB NVMe SSD', 'AlienFX RGB Lighting']
  },
  {
    id: 'comp-4',
    name: 'HP Omen 45L Liquid Cooled Rig',
    brand: 'HP',
    category: 'computers',
    price: 2199,
    discountPrice: 2399,
    imageUrl: '/images/computers/hp_omen_45l.jpg',
    rating: 4.6,
    reviewsCount: 29,
    stock: 10,
    description: 'Features the innovative Cryo Chamber cooling system, isolating the liquid cooler radiator for superior CPU thermals during long intense sessions.',
    specs: ['AMD Ryzen 9 7900X', 'NVIDIA RTX 4070 12GB', '32GB Kingston FURY DDR5', '1TB M.2 SSD', '800W Gold PSU']
  },
  {
    id: 'comp-5',
    name: 'QuantumByte Cyber Workstation Pro',
    brand: 'QuantumByte',
    category: 'computers',
    price: 4999,
    discountPrice: 5499,
    imageUrl: '/images/computers/quantumbyte_custom_rig.jpg',
    rating: 5.0,
    reviewsCount: 18,
    stock: 5,
    isFeatured: true,
    isNewRelease: true,
    description: 'Handcrafted by QuantumByte technical engineers. Dual-loop liquid cooling, custom braided cables, and hand-selected overclocked hardware.',
    specs: ['Intel Core i9-14900KS', 'NVIDIA RTX 4090 24GB', '64GB Corsair Dominator Titanium', '4TB Gen5 SSD', 'Custom Hardline Watercooling']
  },

  // LAPTOPS
  {
    id: 'lap-1',
    name: 'Apple MacBook Pro 16" M3 Max',
    brand: 'Apple',
    category: 'laptops',
    price: 3499,
    discountPrice: 3699,
    imageUrl: '/images/laptops/apple_macbook_pro_16.jpg',
    rating: 4.9,
    reviewsCount: 112,
    stock: 20,
    isFeatured: true,
    isNewRelease: true,
    description: 'Liquid Retina XDR display with up to 22 hours of battery life. Built for heavy software engineering, 8K video editing, and ML workloads.',
    specs: ['Apple M3 Max Chip', '36GB Unified Memory', '1TB Superfast SSD', '16.2" Liquid Retina XDR', 'Space Black Finish']
  },
  {
    id: 'lap-2',
    name: 'ASUS ROG Zephyrus G16 OLED',
    brand: 'ASUS',
    category: 'laptops',
    price: 2299,
    discountPrice: 2499,
    imageUrl: '/images/laptops/asus_rog_zephyrus_g16.jpg',
    rating: 4.8,
    reviewsCount: 78,
    stock: 14,
    isFeatured: true,
    description: 'Ultra-thin CNC aluminum chassis with ROG Nebula 2.5K OLED 240Hz display and NVIDIA RTX 4080 graphics laptop power.',
    specs: ['Intel Core Ultra 9 185H', 'NVIDIA RTX 4080 12GB', '32GB LPDDR5X', '1TB PCIe 4.0 SSD', '240Hz OLED Display']
  },
  {
    id: 'lap-3',
    name: 'Dell XPS 16 Ultra Laptop',
    brand: 'Dell',
    category: 'laptops',
    price: 1999,
    discountPrice: 2199,
    imageUrl: '/images/laptops/dell_xps_16_ultra.jpg',
    rating: 4.7,
    reviewsCount: 54,
    stock: 18,
    description: 'Futuristic glass touchpad, capacitive touch function row, and 4K+ OLED infinity edge display for premium executive mobile productivity.',
    specs: ['Intel Core Ultra 7 155H', 'NVIDIA RTX 4060 8GB', '32GB LPDDR5x', '1TB M.2 NVMe SSD', '16.3" 4K+ Touch OLED']
  },
  {
    id: 'lap-4',
    name: 'Lenovo Legion Pro 7i Gen 9',
    brand: 'Lenovo',
    category: 'laptops',
    price: 2599,
    discountPrice: 2799,
    imageUrl: '/images/laptops/lenovo_legion_pro_7.jpg',
    rating: 4.8,
    reviewsCount: 89,
    stock: 11,
    description: 'AI-tuned legion Coldfront vapor chamber thermal technology with TrueStrike RGB per-key keyboard and 240Hz QHD+ display.',
    specs: ['Intel Core i9-14900HX', 'NVIDIA RTX 4080 12GB', '32GB DDR5 5600MHz', '1TB Gen4 SSD', '16" WQXGA 240Hz']
  },
  {
    id: 'lap-5',
    name: 'HP Spectre x360 2-in-1 Convertible',
    brand: 'HP',
    category: 'laptops',
    price: 1599,
    discountPrice: 1749,
    imageUrl: '/images/laptops/hp_spectre_x360.jpg',
    rating: 4.6,
    reviewsCount: 41,
    stock: 22,
    description: 'Versatile 360-degree hinge with bundled tilt pen, 2.8K OLED touchscreen, and AI battery optimization for creators on the go.',
    specs: ['Intel Core Ultra 7 155H', 'Intel Arc Graphics', '16GB LPDDR5x', '1TB PCIe Gen4 SSD', '14" 2.8K OLED Touch']
  },

  // MOBILES
  {
    id: 'mob-1',
    name: 'Apple iPhone 16 Pro Max',
    brand: 'Apple',
    category: 'mobiles',
    price: 1199,
    discountPrice: 1299,
    imageUrl: '/images/mobiles/apple_iphone_16_pro.jpg',
    rating: 4.9,
    reviewsCount: 210,
    stock: 30,
    isFeatured: true,
    isNewRelease: true,
    description: 'Grade 5 titanium enclosure, A18 Pro Bionic chip, Camera Control button, and 48MP Fusion camera with 5x Telephoto zoom.',
    specs: ['A18 Pro Chip', '256GB Storage', '6.9" Super Retina XDR', '48MP Triple Lens Camera', 'Action Button & USB-C']
  },
  {
    id: 'mob-2',
    name: 'Samsung Galaxy S25 Ultra 5G',
    brand: 'Samsung',
    category: 'mobiles',
    price: 1299,
    discountPrice: 1399,
    imageUrl: '/images/mobiles/samsung_galaxy_s25_ultra.jpg',
    rating: 4.9,
    reviewsCount: 175,
    stock: 25,
    isFeatured: true,
    isNewRelease: true,
    description: 'Built-in S Pen, Armor Aluminum titanium frame, Snapdragon 8 Gen 4 for Galaxy, and 200MP Quad Telephoto AI camera camera.',
    specs: ['Snapdragon 8 Gen 4', '12GB RAM / 512GB Storage', '6.8" Dynamic AMOLED 2X 120Hz', '200MP Main Camera', 'Built-in S Pen']
  },
  {
    id: 'mob-3',
    name: 'Google Pixel 9 Pro XL',
    brand: 'Google',
    category: 'mobiles',
    price: 1099,
    discountPrice: 1199,
    imageUrl: '/images/mobiles/google_pixel_9_pro.jpg',
    rating: 4.7,
    reviewsCount: 94,
    stock: 16,
    description: 'Tensor G4 processor with Gemini Nano AI assistant built-in, Super Actua display, and industry leading computational photography.',
    specs: ['Google Tensor G4', '16GB RAM / 256GB Storage', '6.8" Super Actua OLED', '50MP Triple Camera with Gemini AI', '7 Years OS Updates']
  },
  {
    id: 'mob-4',
    name: 'OnePlus 13 Pro Hasselblad',
    brand: 'OnePlus',
    category: 'mobiles',
    price: 899,
    discountPrice: 999,
    imageUrl: '/images/mobiles/oneplus_13_pro.jpg',
    rating: 4.7,
    reviewsCount: 68,
    stock: 20,
    description: 'Hasselblad Camera for Mobile 4.0, 100W SUPERVOOC charging (0 to 100% in 25 mins), and 2K 120Hz ProXDR display.',
    specs: ['Snapdragon 8 Gen 4', '16GB RAM / 512GB Storage', '100W Wired + 50W Wireless', '50MP Sony LYT-900 Sensor', '5400mAh Battery']
  },
  {
    id: 'mob-5',
    name: 'Xiaomi 14 Ultra Leica Edition',
    brand: 'Xiaomi',
    category: 'mobiles',
    price: 1049,
    discountPrice: 1149,
    imageUrl: '/images/mobiles/xiaomi_14_ultra.jpg',
    rating: 4.8,
    reviewsCount: 52,
    stock: 12,
    description: 'Quad 50MP camera system co-engineered with Leica, 1-inch main sensor with step-less variable aperture (f/1.63 - f/4.0).',
    specs: ['Snapdragon 8 Gen 3', '16GB RAM / 512GB Storage', 'Leica Quad Camera System', '6.73" WQHD+ AMOLED', '90W HyperCharge']
  },

  // CHARGERS
  {
    id: 'chg-1',
    name: 'Anker Prime 100W GaN Wall Charger',
    brand: 'Anker',
    category: 'chargers',
    price: 84,
    discountPrice: 99,
    imageUrl: '/images/chargers/anker_prime_100w_gan.jpg',
    rating: 4.9,
    reviewsCount: 140,
    stock: 45,
    isFeatured: true,
    description: 'Ultra-compact 3-port GaNPrime desktop adapter capable of fast charging a MacBook Pro, iPhone, and iPad simultaneously.',
    specs: ['100W Max Output', '2x USB-C + 1x USB-A Ports', 'GaNPrime Technology', 'ActiveShield 2.0 Temperature Monitoring']
  },
  {
    id: 'chg-2',
    name: 'Apple 70W USB-C Power Adapter',
    brand: 'Apple',
    category: 'chargers',
    price: 59,
    discountPrice: 65,
    imageUrl: '/images/chargers/apple_70w_usbc_charger.jpg',
    rating: 4.8,
    reviewsCount: 98,
    stock: 35,
    description: 'Official Apple power adapter offering fast, efficient charging at home, in the office, or on the go for MacBooks and iPad Pro.',
    specs: ['70W Power Output', 'USB-C Single Port', 'Official Apple OEM accessory', 'Compact Folding Pins']
  },
  {
    id: 'chg-3',
    name: 'Belkin BoostCharge Pro 3-in-1 MagSafe',
    brand: 'Belkin',
    category: 'chargers',
    price: 139,
    discountPrice: 149,
    imageUrl: '/images/chargers/belkin_boostcharge_pro.jpg',
    rating: 4.8,
    reviewsCount: 82,
    stock: 25,
    isFeatured: true,
    description: 'Official Apple MFi certified 15W MagSafe wireless charging stand for iPhone, Apple Watch Ultra, and AirPods.',
    specs: ['15W MagSafe Fast Wireless', '3-in-1 Simultaneous Charge', 'Premium Metal Finish', 'LED Status Indicator']
  },
  {
    id: 'chg-4',
    name: 'Samsung 45W Super Fast Charging 2.0',
    brand: 'Samsung',
    category: 'chargers',
    price: 49,
    discountPrice: 55,
    imageUrl: '/images/chargers/samsung_45w_fast_charger.jpg',
    rating: 4.7,
    reviewsCount: 115,
    stock: 50,
    description: 'Original Samsung 45W wall charger adapter with 5A Type-C to Type-C cable included for Galaxy phones and tablets.',
    specs: ['45W Max USB-C PD 3.0', 'PPS Fast Charging', 'Includes 1.8m 5A Cable', 'Over-current Protection']
  },
  {
    id: 'chg-5',
    name: 'Baseus 140W GaN5 Pro Multi-Charger',
    brand: 'Baseus',
    category: 'chargers',
    price: 79,
    discountPrice: 95,
    imageUrl: '/images/chargers/baseus_140w_gan_charger.jpg',
    rating: 4.6,
    reviewsCount: 63,
    stock: 28,
    description: 'Power delivery 3.1 supporting 140W high wattage for gaming laptops, power banks, and modern flagship smartphones.',
    specs: ['140W PD 3.1 Output', '2x USB-C + 1x USB-A', 'Includes 240W E-Mark Cable', 'BCT Cooling Tech']
  },

  // PARTS & COMPONENTS
  {
    id: 'part-1',
    name: 'ASUS ROG Strix RTX 4090 OC 24GB',
    brand: 'ASUS',
    category: 'parts',
    price: 1999,
    discountPrice: 2199,
    imageUrl: '/images/parts/nvidia_rtx_4090_gpu.jpg',
    rating: 5.0,
    reviewsCount: 88,
    stock: 6,
    isFeatured: true,
    isNewRelease: true,
    description: 'The ultimate graphics card. Ada Lovelace architecture, 24GB GDDR6X VRAM, axial-tech fans, and patented vapor chamber cooling.',
    specs: ['NVIDIA GeForce RTX 4090', '24GB GDDR6X VRAM', '2640 MHz Boost Clock', 'PCIe 4.0 x16', 'Triple Axial-Tech Fans']
  },
  {
    id: 'part-2',
    name: 'G.Skill Trident Z5 RGB 64GB DDR5',
    brand: 'G.Skill',
    category: 'parts',
    price: 249,
    discountPrice: 279,
    imageUrl: '/images/parts/gskill_trident_ddr5_ram.jpg',
    rating: 4.9,
    reviewsCount: 104,
    stock: 30,
    isFeatured: true,
    description: 'Flagship DDR5 memory kit designed for ultra-high performance on Intel & AMD platforms with customizable translucent light bar.',
    specs: ['64GB Kit (2x32GB)', 'DDR5 6400MHz Speed', 'CL32 Low Latency', 'Intel XMP 3.0 Ready', 'Aluminum Heatspreader']
  },
  {
    id: 'part-3',
    name: 'Samsung 990 PRO 2TB NVMe PCIe 4.0 SSD',
    brand: 'Samsung',
    category: 'parts',
    price: 179,
    discountPrice: 199,
    imageUrl: '/images/parts/samsung_990_pro_ssd.jpg',
    rating: 4.9,
    reviewsCount: 165,
    stock: 40,
    description: 'Sequential read/write speeds up to 7,450 / 6,900 MB/s. Designed for hardcore gamers, tech enthusiasts, and heavy workstation loads.',
    specs: ['2TB Capacity', 'Up to 7,450 MB/s Read', 'Pascal In-house Controller', 'Thermal Control Coating', 'PS5 & PC Compatible']
  },
  {
    id: 'part-4',
    name: 'ASUS ROG Maximus Z790 Hero Motherboard',
    brand: 'ASUS',
    category: 'parts',
    price: 599,
    discountPrice: 649,
    imageUrl: '/images/parts/asus_rog_z790_motherboard.jpg',
    rating: 4.8,
    reviewsCount: 47,
    stock: 14,
    description: 'Robust 20+1 power stages, PCIe 5.0 expansion slots, Wi-Fi 6E, dual Thunderbolt 4 ports, and Polymo lighting on the I/O shroud.',
    specs: ['LGA 1700 Socket (Intel 14th/13th Gen)', '20+1 Power Stages (90A)', 'DDR5 Memory Support', 'PCIe 5.0 M.2 & GPU Slots', 'Wi-Fi 6E & 2.5G LAN']
  },
  {
    id: 'part-5',
    name: 'NZXT Kraken Elite 360 RGB Liquid Cooler',
    brand: 'NZXT',
    category: 'parts',
    price: 279,
    discountPrice: 299,
    imageUrl: '/images/parts/nzxt_kraken_liquid_cooler.jpg',
    rating: 4.8,
    reviewsCount: 56,
    stock: 18,
    description: '2.36-inch wide-angle LCD display capable of displaying real-time system stats or custom animated GIFs with high-static pressure fans.',
    specs: ['360mm Radiator', 'Customizable 640x640 LCD Display', '3x F120 RGB Core Fans', 'Asetek 7th Gen Pump', 'CAM Software Controlled']
  }
];

export const INITIAL_IT_SERVICES: ITService[] = [
  {
    id: 'serv-1',
    title: 'Custom Gaming & Workstation PC Assembly',
    subtitle: 'Professional assembly, custom liquid loop tubing, cable management & stress testing',
    imageUrl: '/images/services/custom_pc_building.jpg',
    priceStarting: 99,
    popularBadge: true,
    features: [
      'Handcrafted Component Installation & Wiring',
      'BIOS Flashing & XMP/EXPO Memory Tuning',
      'Stress Testing & Thermal Benchmarking (24 Hours)',
      'Custom Hardline or Softline Water Cooling Loops',
      'Official QuantumByte 1-Year Build Warranty'
    ],
    description: 'Our expert hardware engineers build your dream rig with surgical precision, immaculate cable routing, and optimal airflow configurations.'
  },
  {
    id: 'serv-2',
    title: 'Hardware Maintenance & Chip-Level Repair',
    subtitle: 'Diagnose and fix laptops, desktops, GPUs, motherboards & mobile devices',
    imageUrl: '/images/services/hardware_repair.jpg',
    priceStarting: 49,
    popularBadge: false,
    features: [
      'Motherboard BGA Reballing & Micro-soldering',
      'Laptop Screen, Battery & Keyboard Replacement',
      'Liquid Damage Cleaning & Ultrasonic Bathing',
      'GPU Thermal Paste & Pad Replacement (Honeywell PTM7950)',
      'Component-level Short Circuit Diagnostics'
    ],
    description: 'Don’t throw away broken hardware. Our lab uses advanced diagnostic scopes to repair micro-electronics and save your valuable equipment.'
  },
  {
    id: 'serv-3',
    title: 'Corporate IT Infrastructure & Networking',
    subtitle: 'Enterprise server setup, Wi-Fi 6E mesh coverage, NAS storage & security',
    imageUrl: '/images/services/network_infrastructure.jpg',
    priceStarting: 299,
    popularBadge: true,
    features: [
      'Structured Cat6A / Fiber Optic Cabling',
      'Synology / QNAP Enterprise NAS Backup Systems',
      'Cisco / Ubiquiti UniFi Router & Firewall Setup',
      'Active Directory, VPN & Cloud Migration',
      '24/7 Managed IT Support & SLA Contracts'
    ],
    description: 'Scale your business infrastructure with secure, high-speed networking solutions designed for zero downtime and robust data backup.'
  },
  {
    id: 'serv-4',
    title: 'Full-Stack Web & Mobile App Development',
    subtitle: 'Custom e-commerce platforms, SaaS web apps, iOS & Android applications',
    imageUrl: '/images/services/software_web_dev.jpg',
    priceStarting: 799,
    popularBadge: false,
    features: [
      'Modern Next.js 16, React, & Node.js Applications',
      'Sanity CMS & Headless Backend Architecture',
      'Stripe, PayPal & Custom Payment Gateway Integration',
      'UI/UX Design with GSAP Motion & Micro-interactions',
      'SEO Optimization & 99+ Lighthouse Speed Score'
    ],
    description: 'Transform your digital vision into high-converting, lightning-fast web applications built by senior engineering teams.'
  }
];
