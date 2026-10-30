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
    id: 'web-katalog-kopi',
    title: 'Website Katalog Kopi Dampit',
    category: 'web',
    categoryLabel: 'Website & App',
    badge: 'Proyek Riil',
    rating: '⭐ 98/100',
    pill1: 'RPL SMK',
    pill2: 'Astro SSG',
    role: 'Proyek Siswa RPL SMK & Informatika',
    summary: 'Landing page katalog produk cepat berbasis Static Site Generation (SSG) dengan performa PageSpeed 98/100.',
    image: '/images/portfolio/portfolio-web-kopi.webp',
    cardBg: '#18242c',
    btnLabel: 'Tanya Detail Proyek',
    tags: ['Astro SSG', 'TypeScript', 'Web Design'],
    clientOrContext: 'Mitra UMKM Kopi Dampit'
  },
  {
    id: 'marketing-local-seo',
    title: 'Local SEO Google Profil Bisnis',
    category: 'marketing',
    categoryLabel: 'Digital Marketing',
    badge: 'Studi Kasus',
    rating: '⭐ +140% Leads',
    pill1: 'Bisnis Digital',
    pill2: 'Google Maps',
    role: 'Proyek Mahasiswa Bisnis Digital',
    summary: 'Riset kata kunci dan optimasi titik Google Maps yang mendongkrak interaksi telepon serta petunjuk rute.',
    image: '/images/portfolio/portfolio-seo-umkm.webp',
    cardBg: '#1a2232',
    btnLabel: 'Tanya Detail Proyek',
    tags: ['Local SEO', 'Google Maps', 'Content Plan'],
    clientOrContext: 'Sentra Oleh-Oleh Khas Malang'
  },
  {
    id: 'design-branding-umkm',
    title: 'Rebranding & Kemasan UMKM',
    category: 'design',
    categoryLabel: 'Desain Grafis & DKV',
    badge: 'Desain DKV',
    rating: '⭐ Identitas Baru',
    pill1: 'DKV SMK',
    pill2: 'Packaging',
    role: 'Proyek Siswa DKV SMK & Multimedia',
    summary: 'Perancangan logo baru, panduan brand guideline, desain kemasan standing pouch, dan template promosi.',
    image: '/images/portfolio/portfolio-dkv-branding.webp',
    cardBg: '#2d1e18',
    btnLabel: 'Tanya Detail Proyek',
    tags: ['Branding', 'Packaging Design', 'Figma'],
    clientOrContext: 'Produk Keripik Buah Organik'
  },
  {
    id: 'galeri-mentoring-lab',
    title: 'Mentoring Teknis Lab Onsite',
    category: 'galeri',
    categoryLabel: 'Galeri Kegiatan',
    badge: 'Dokumentasi',
    rating: '⭐ 1-on-1 Mentor',
    pill1: 'Lab Malang',
    pill2: 'Code Review',
    role: 'Dokumentasi Pendampingan Mentor',
    summary: 'Bimbingan intensif harian peserta magang bersama lead software engineer untuk code review dan evaluasi tugas.',
    image: '/images/portfolio/portfolio-galeri-mentoring.webp',
    cardBg: '#28171c',
    btnLabel: 'Lihat Dokumentasi',
    tags: ['Mentoring Onsite', 'Lab Malang', 'Diskusi Teknis'],
    clientOrContext: 'Aktivitas Harian MagangPro'
  },
  {
    id: 'web-dashboard-inventory',
    title: 'Dashboard Inventaris Gudang',
    category: 'web',
    categoryLabel: 'Website & App',
    badge: 'Web App',
    rating: '⭐ Responsif',
    pill1: 'Mahasiswa TI',
    pill2: 'Frontend UI',
    role: 'Proyek Internship Mahasiswa TI',
    summary: 'Aplikasi web pencatatan dan monitoring stok barang real-time dengan antarmuka modern yang cepat dan responsif.',
    image: '/images/portfolio/portfolio-web-dashboard.webp',
    cardBg: '#132822',
    btnLabel: 'Tanya Detail Proyek',
    tags: ['Frontend Dashboard', 'JavaScript', 'UI/UX'],
    clientOrContext: 'Sistem Internal Usaha Distribusi'
  },
  {
    id: 'galeri-presentasi-laporan',
    title: 'Presentasi Laporan Resmi PKL',
    category: 'galeri',
    categoryLabel: 'Galeri Kegiatan',
    badge: 'Dokumentasi',
    rating: '⭐ Terverifikasi',
    pill1: 'Ujian PKL',
    pill2: 'Sertifikat',
    role: 'Dokumentasi Ujian Praktik PKL',
    summary: 'Pemaparan hasil karya magang di hadapan mentor industri serta guru pembimbing sebelum penerbitan sertifikat.',
    image: '/images/portfolio/portfolio-galeri-evaluasi.webp',
    cardBg: '#241a32',
    btnLabel: 'Lihat Dokumentasi',
    tags: ['Presentasi PKL', 'Laporan Resmi', 'Sertifikasi'],
    clientOrContext: 'Sesi Akhir Kelulusan Magang'
  }
];
