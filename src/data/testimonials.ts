export interface TestimonialItem {
  id: string;
  number: number;
  badgeColor: string;
  quote: string;
  name: string;
  role: string;
  initials: string;
  avatarBg: string;
  image?: string;
}

export const testimonialsData: TestimonialItem[] = [
  {
    id: 'testi-1',
    number: 1,
    badgeColor: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
    quote: '"Internship di PixxelPro memberikan pengalaman industri riil yang jauh melampaui teori perkuliahan. Saya belajar arsitektur web modern dan best practices pengembangan sistem langsung pada proyek aktif. Bimbingan mentornya sangat suportif dan laporan magang untuk kampus UIN selesai dengan nilai A!"',
    name: 'Dian Lestari',
    role: 'Mahasiswa UIN Malang - Teknik Informatika',
    initials: 'DL',
    avatarBg: 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)',
    image: '/images/testimoni/dian-uin-malang.webp'
  },
  {
    id: 'testi-2',
    number: 2,
    badgeColor: 'linear-gradient(135deg, #c62828 0%, #b71c1c 100%)',
    quote: '"Awalnya sempat ragu apakah anak SMK bisa memegang proyek industri nyata. Namun di PixxelPro, mentor membimbing kami langkah demi langkah mulai dari alur coding, debugging, hingga deployment. Pengalaman PKL di sini benar-benar mengasah keahlian teknis saya di bidang rekayasa perangkat lunak."',
    name: 'Mega Anggun',
    role: 'Siswi SMKN 1 Pasuruan - TRPL',
    initials: 'MA',
    avatarBg: 'linear-gradient(135deg, #c62828 0%, #991b1b 100%)',
    image: '/images/testimoni/mega-anggun.webp'
  },
  {
    id: 'testi-3',
    number: 3,
    badgeColor: 'linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%)',
    quote: '"Banyak tempat magang lain hanya memberikan tugas administratif yang kurang sesuai jurusan, tetapi di PixxelPro kami siswi TRPL langsung diajak riset dan mengerjakan proyek digital nyata. Lingkungan belajarnya sangat nyaman, seru, dan membuat kami percaya diri siap masuk dunia kerja setelah lulus."',
    name: 'Hawa Nadira',
    role: 'Siswi SMKN 1 Pasuruan - TRPL',
    initials: 'HN',
    avatarBg: 'linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%)',
    image: '/images/testimoni/hawa.webp'
  }
];
