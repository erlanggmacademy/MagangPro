export interface NavItem {
  title: string;
  href: string;
  children?: { title: string; href: string; desc?: string }[];
}

export const navigationItems: NavItem[] = [
  {
    title: 'Beranda',
    href: '/',
  },
  {
    title: 'Tentang Kami',
    href: '/tentang-kami',
  },
  {
    title: 'Program Magang',
    href: '/program-magang',
    children: [
      { title: 'Informasi Program Magang', href: '/program-magang', desc: 'Gambaran umum program dan kurikulum praktik' },
      { title: 'Magang SMK / PKL', href: '/program-magang/magang-smk-pkl', desc: 'Untuk jurusan RPL, TKJ, Multimedia, DKV, Bisnis' },
      { title: 'Internship Mahasiswa', href: '/program-magang/internship-mahasiswa', desc: 'Untuk mahasiswa IT, Bisnis Digital, Marketing' },
      { title: 'Posisi Magang', href: '/program-magang/posisi', desc: 'Daftar bidang dan posisi yang tersedia' },
      { title: 'Kompetensi yang Dipelajari', href: '/program-magang/kompetensi', desc: 'Keahlian teknis dan soft skill yang dibangun' },
      { title: 'Alur Pendaftaran', href: '/program-magang/alur-pendaftaran', desc: 'Tahapan dan tata cara pendaftaran magang' },
    ],
  },
  {
    title: 'Pelatihan & Jasa',
    href: '/pelatihan-digital-marketing',
    children: [
      { title: 'Pelatihan Digital Marketing', href: '/pelatihan-digital-marketing', desc: 'Program workshop dan pelatihan komprehensif' },
      { title: 'Pelatihan untuk UMKM', href: '/pelatihan-digital-marketing/umkm', desc: 'Tingkatkan penjualan online dan branding produk' },
      { title: 'Pelatihan Instansi & Perusahaan', href: '/pelatihan-digital-marketing/instansi-perusahaan', desc: 'Pelatihan in-house kapasitas tim digital' },
      { title: 'Layanan Digital & SEO', href: '/jasa', desc: 'Solusi website, SEO, dan pemasaran digital' },
    ],
  },
  {
    title: 'Portofolio',
    href: '/portofolio',
  },
  {
    title: 'Blog',
    href: '/blog',
  },
];
