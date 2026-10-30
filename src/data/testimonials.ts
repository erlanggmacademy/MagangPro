export interface TestimonialItem {
  id: string;
  number: number;
  badgeColor: string;
  quote: string;
  name: string;
  role: string;
  initials: string;
  avatarBg: string;
}

export const testimonialsData: TestimonialItem[] = [
  {
    id: 'testi-1',
    number: 1,
    badgeColor: 'linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)',
    quote: '"Magang di MagangPro membuka wawasan saya tentang standar industri nyata. Dari yang awalnya hanya paham teori di sekolah, di sini saya langsung memegang proyek website klien dengan bimbingan mentor yang sangat sabar."',
    name: 'Rizky Pratama',
    role: 'Alumni PKL SMK RPL — Web Developer',
    initials: 'RP',
    avatarBg: 'linear-gradient(135deg, #c62828 0%, #b71c1c 100%)'
  },
  {
    id: 'testi-2',
    number: 2,
    badgeColor: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
    quote: '"Program internship di MagangPro sangat terstruktur. Laporan resmi untuk kampus selesai tepat waktu dengan nilai A, dan yang paling berharga adalah portofolio SEO nyata yang membuat saya langsung diterima kerja."',
    name: 'Nabila Azzahra',
    role: 'Mahasiswa Magang — Digital Marketing',
    initials: 'NA',
    avatarBg: 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)'
  },
  {
    id: 'testi-3',
    number: 3,
    badgeColor: 'linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%)',
    quote: '"Pelatihan digital marketing dari MagangPro benar-benar mengubah cara kami jualan. Profil Google Bisnis kami sekarang ramai ulasan bintang 5 dan pesanan via WhatsApp naik drastis. Bimbingannya solutif!"',
    name: 'H. Budi Santoso',
    role: 'Owner UMKM Sentra Keripik Khas Malang',
    initials: 'BS',
    avatarBg: 'linear-gradient(135deg, #059669 0%, #047857 100%)'
  }
];
