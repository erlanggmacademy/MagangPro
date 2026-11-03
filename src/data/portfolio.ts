export interface PortfolioItem {
  id: string;
  title: string;
  category: 'web' | 'marketing' | 'design' | 'galeri';
  categoryLabel: string;
  badge: string;
  rating: string;
  pill1: string;
  pill2: string;
  role: string;
  summary: string;
  image: string;
  cardBg: string;
  btnLabel: string;
  tags: string[];
  clientOrContext: string;
}

export const portfolioData: PortfolioItem[] = [
  {
    id: 'qris-run-bi',
    title: 'Aplikasi Pendaftaran Qris Run Bank Indonesia Kediri',
    category: 'web',
    categoryLabel: 'Aplikasi Web & Sistem Event',
    badge: 'Aplikasi & Event Nasional',
    rating: '⭐ 5K Race Registration',
    pill1: 'Bank Indonesia',
    pill2: 'Aplikasi Pendaftaran',
    role: 'Pengembangan Aplikasi Pendaftaran & Sistem Event QRIS Run',
    summary: 'Pengembangan aplikasi web sistem pendaftaran online peserta lomba lari, manajemen kuota tiket/race slot, integrasi pembayaran QRIS real-time, verifikasi race pack, serta publikasi digital event Syi\'ar 5K QRIS Run bersama Bank Indonesia Kediri.',
    image: '/images/portfolio/qris-run.webp',
    cardBg: '#1c2838',
    btnLabel: 'Tanya Detail Proyek',
    tags: ['Aplikasi Web', 'Sistem Pendaftaran', 'QRIS Payment', 'Bank Indonesia'],
    clientOrContext: 'Bank Indonesia Perwakilan Kediri'
  },
  {
    id: 'project-kka-radar-kediri',
    title: 'Project KKA Radar Kediri',
    category: 'web',
    categoryLabel: 'Website & Portal',
    badge: 'Portal Edukasi',
    rating: '⭐ Ribuan Peserta',
    pill1: 'Radar Kediri',
    pill2: 'Portal Web',
    role: 'Pengembangan Portal & Sistem Pendaftaran KKA',
    summary: 'Pengembangan platform website resmi pendaftaran mandiri & kolektif, publikasi regulasi, serta informasi ajang Kompetisi Kompetensi Akademik (KKA) 2026 se-Karesidenan Kediri.',
    image: '/images/portfolio/kka-radar-kediri.webp',
    cardBg: '#1e2638',
    btnLabel: 'Tanya Detail Proyek',
    tags: ['Web Development', 'Portal Resmi', 'Jawa Pos Radar Kediri'],
    clientOrContext: 'Jawa Pos Radar Kediri'
  },
  {
    id: 'pelatihan-smk-pgri-3-malang',
    title: 'Pelatihan di SMK PGRI 3 Malang',
    category: 'galeri',
    categoryLabel: 'Pelatihan Vokasi',
    badge: 'Workshop Sekolah',
    rating: '⭐ Pembekalan PKL',
    pill1: 'Skariga Malang',
    pill2: 'Skill Up Level Up',
    role: 'Workshop Pembekalan Siap Magang & Berkarya',
    summary: 'Pelatihan intensif "Skill Up, Level Up: Siap Magang, Siap Berkarya" untuk membekali siswa-siswi vokasi dengan keterampilan teknis dan etika kerja standar industri riil.',
    image: '/images/portfolio/pelatihan-smk3pgri.webp',
    cardBg: '#1a2c3a',
    btnLabel: 'Lihat Dokumentasi',
    tags: ['Workshop Vokasi', 'SMK PGRI 3 Malang', 'Pembekalan Industri'],
    clientOrContext: 'SMK PGRI 3 Malang (Skariga)'
  },
  {
    id: 'pelatihan-pesantren-insan-kamil',
    title: 'Pelatihan di Pesantren Insan Kamil',
    category: 'galeri',
    categoryLabel: 'Pemberdayaan Santri',
    badge: 'Edukasi Pesantren',
    rating: '⭐ Santripreneur',
    pill1: 'Insan Kamil',
    pill2: 'Literasi Digital',
    role: 'Program Pelatihan Wirausaha & Pemasaran Digital',
    summary: 'Bimbingan teknis literasi digital dan pemanfaatan teknologi pemasaran online bagi para santri untuk menumbuhkan jiwa wirausaha mandiri berbasis proyek nyata.',
    image: '/images/portfolio/pelatihan-insan-kamil.webp',
    cardBg: '#2d241e',
    btnLabel: 'Lihat Dokumentasi',
    tags: ['Digital Marketing', 'Santripreneur', 'Pesantren Insan Kamil'],
    clientOrContext: 'Pondok Pesantren Insan Kamil'
  },
  {
    id: 'optimasi-website-seminarkits',
    title: 'Optimasi Website Seminarkits.id',
    category: 'web',
    categoryLabel: 'Website & SEO',
    badge: 'Katalog Bisnis',
    rating: '⭐ Responsif & Cepat',
    pill1: 'Katalog UMKM',
    pill2: 'Astro Modern',
    role: 'Pengembangan Website Katalog Merchandise & Gift',
    summary: 'Pembuatan dan optimasi website katalog merchandise custom seminar kit dengan antarmuka modern, navigasi katalog terstruktur, alur CTA WhatsApp cepat, dan kecepatan tinggi.',
    image: '/images/portfolio/seminarkits.webp',
    cardBg: '#142232',
    btnLabel: 'Tanya Detail Proyek',
    tags: ['Web Catalog', 'SEO On-Page', 'Seminarkits.id'],
    clientOrContext: 'Vendor Seminar Kits Indonesia'
  },
  {
    id: 'seminar-umkm-xlsmart',
    title: 'Seminar Go Digital UMKM bersama XLSMART',
    category: 'marketing',
    categoryLabel: 'Pemberdayaan UMKM',
    badge: 'Seminar Nasional',
    rating: '⭐ Komunitas UMKM',
    pill1: 'XLSMART',
    pill2: 'Go Digital',
    role: 'Pelatihan Digitalisasi Usaha & Akselerasi Pasar',
    summary: 'Workshop akselerasi transformasi digital bagi puluhan pelaku usaha UMKM binaan, mencakup strategi konten promosi, pemanfaatan Google Bisnis, dan optimalisasi jaringan digital.',
    image: '/images/portfolio/seminar-umkm-xlsmart.webp',
    cardBg: '#1a3028',
    btnLabel: 'Tanya Detail Proyek',
    tags: ['UMKM Go Digital', 'XLSMART', 'Pelatihan Bisnis'],
    clientOrContext: 'Mitra Komunitas UMKM & XLSMART'
  }
];
