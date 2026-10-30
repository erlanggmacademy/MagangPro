export interface ServiceItem {
  id: string;
  title: string;
  category: 'pelatihan' | 'jasa';
  badge: string;
  shortBadge: string;
  tagline: string;
  image: string;
  gradient: string;
  description: string;
  points: string[];
  href: string;
  waMessage: string;
}

export const servicesData: ServiceItem[] = [
  {
    id: 'pelatihan-umkm',
    title: 'Pelatihan Digital Marketing UMKM',
    category: 'pelatihan',
    badge: 'Untuk Usaha Mikro & Menengah',
    shortBadge: 'MARKETING UMKM',
    tagline: 'Optimasi Google Bisnis & Social Media Lokal',
    image: '/images/services/pelatihan-umkm.webp',
    gradient: 'linear-gradient(135deg, #c62828 0%, #b71c1c 60%, #880e4f 100%)',
    description: 'Bimbingan intensif bagi pelaku usaha lokal dan UMKM untuk memanfaatkan kanal digital secara efektif, mulai dari pencarian lokal hingga optimasi konversi penjualan.',
    points: [
      'Pemanfaatan Google Profil Bisnis (Local SEO)',
      'Pengelolaan media sosial berbasis engagement',
      'Manajemen leads dan penjualan via WhatsApp',
      'Strategi konten visual sederhana & cepat'
    ],
    href: '/pelatihan-digital-marketing/umkm',
    waMessage: 'Halo MagangPro, saya ingin konsultasi mengenai Pelatihan Digital Marketing untuk UMKM.'
  },
  {
    id: 'pelatihan-instansi',
    title: 'Pelatihan Instansi & Perusahaan',
    category: 'pelatihan',
    badge: 'Workshop In-House & Korporat',
    shortBadge: 'WORKSHOP KORPORAT',
    tagline: 'Peningkatan Kapasitas Digital Tim Organisasi',
    image: '/images/services/pelatihan-instansi.webp',
    gradient: 'linear-gradient(135deg, #374151 0%, #1f2937 60%, #111827 100%)',
    description: 'Program peningkatan kapabilitas digital tim korporat atau aparatur instansi dengan silabus yang disesuaikan dengan kebutuhan dan tujuan organisasi.',
    points: [
      'Strategi komunikasi dan publikasi digital instansi',
      'Fundamental iklan digital (Google & Meta Ads)',
      'Pengukuran analitik & pelaporan KPI digital',
      'Praktik studi kasus langsung (hands-on workshop)'
    ],
    href: '/pelatihan-digital-marketing/instansi-perusahaan',
    waMessage: 'Halo MagangPro, kami dari instansi/perusahaan ingin berkonsultasi mengenai program pelatihan tim.'
  },
  {
    id: 'jasa-seo',
    title: 'Layanan Optimasi SEO Website',
    category: 'jasa',
    badge: 'Layanan Jasa Digital',
    shortBadge: 'OPTIMASI SEO',
    tagline: 'Dominasi Halaman 1 Pencarian Google',
    image: '/images/services/layanan-seo.webp',
    gradient: 'linear-gradient(135deg, #1e3a8a 0%, #1e40af 60%, #0f172a 100%)',
    description: 'Membantu website bisnis Anda tampil di halaman pencarian Google melalui perbaikan teknis SEO, arsitektur informasi terstruktur, dan strategi konten organik yang solid.',
    points: [
      'Audit SEO teknis, struktur data, & Core Web Vitals',
      'Optimasi on-page dan penataan kata kunci',
      'Penerapan Schema.org JSON-LD terstandar',
      'Monitoring berkala Google Search Console'
    ],
    href: '/jasa',
    waMessage: 'Halo MagangPro, saya ingin berkonsultasi mengenai Layanan SEO Website.'
  },
  {
    id: 'jasa-web-dev',
    title: 'Pembuatan Website Modern & Cepat',
    category: 'jasa',
    badge: 'Layanan Jasa Digital',
    shortBadge: 'WEB DEVELOPMENT',
    tagline: 'Arsitektur SSG Cepat Skor 90+ Tanpa Database',
    image: '/images/services/pembuatan-website.webp',
    gradient: 'linear-gradient(135deg, #3b0764 0%, #1e1b4b 60%, #030712 100%)',
    description: 'Pengembangan website berbasis Static Site Generation (SSG) modern yang sangat cepat, aman tanpa database rentan, responsif, dan siap diindeks mesin pencari.',
    points: [
      'Arsitektur SSG berperforma tinggi (Skor 90+)',
      'Desain responsif ramah smartphone',
      'Struktur konten dan alur CTA terkonversi',
      'Bebas biaya pemeliharaan database rumit'
    ],
    href: '/jasa',
    waMessage: 'Halo MagangPro, saya tertarik untuk berkonsultasi tentang pembuatan website modern.'
  }
];
