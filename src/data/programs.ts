export interface ProgramCategory {
  id: string;
  title: string;
  badge: string;
  target: string;
  description: string;
  highlights: string[];
  href: string;
  waMessage: string;
}

export interface PositionItem {
  id: string;
  title: string;
  department: string;
  targetAudience: string;
  description: string;
  skills: string[];
  status: string;
  iconType: 'code' | 'seo' | 'media' | 'design' | 'network' | 'business';
}

export const mainPrograms: ProgramCategory[] = [
  {
    id: 'smk-pkl',
    title: 'Program Magang SMK / PKL',
    badge: 'Siswa SMK / Vokasi',
    target: 'Siswa SMK Jurusan RPL, TKJ, Multimedia, DKV, & Pemasaran',
    description: 'Program Praktik Kerja Lapangan (PKL) terstruktur untuk mengasah keterampilan teknis, etika kerja profesional, dan kesiapan industri sesuai kompetensi keahlian sekolah.',
    highlights: [
      'Kurikulum berbasis proyek industri',
      'Pendampingan teknis dan etika kerja',
      'Dokumentasi laporan PKL sekolah',
      'Peningkatan portofolio nyata'
    ],
    href: '/program-magang/magang-smk-pkl',
    waMessage: 'Halo MagangPro, saya ingin informasi pendaftaran program PKL SMK.'
  },
  {
    id: 'internship-mahasiswa',
    title: 'Internship Mahasiswa',
    badge: 'Mahasiswa D3 / D4 / S1',
    target: 'Mahasiswa Informatika, Sistem Informasi, Bisnis Digital, & Marketing',
    description: 'Program magang berbasis proyek riil dan studi kasus komprehensif untuk mahasiswa guna memvalidasi teori akademis ke dalam kebutuhan industri digital modern.',
    highlights: [
      'Penugasan proyek dan studi kasus terapan',
      'Kolaborasi tim lintas disiplin ilmu',
      'Kesesuaian konversi SKS / Magang Mandiri',
      'Portofolio profesional siap kerja'
    ],
    href: '/program-magang/internship-mahasiswa',
    waMessage: 'Halo MagangPro, saya ingin bertanya tentang program internship mahasiswa.'
  }
];

export const internshipPositions: PositionItem[] = [
  {
    id: 'web-developer',
    title: 'Web Development',
    department: 'Teknologi & Software',
    targetAudience: 'RPL / Informatika / Sistem Informasi',
    description: 'Membangun website modern yang cepat, responsif, dan SEO-friendly menggunakan teknologi web terkini.',
    skills: ['HTML5 & CSS3', 'JavaScript / TypeScript', 'Astro / Modern Frameworks', 'Git & Deployment'],
    status: 'Tanyakan Ketersediaan',
    iconType: 'code'
  },
  {
    id: 'digital-marketing-seo',
    title: 'Digital Marketing & SEO',
    department: 'Pemasaran Digital',
    targetAudience: 'Bisnis Digital / Pemasaran / Umum',
    description: 'Mempelajari optimasi mesin pencari on-page & off-page, riset keyword, konten terarah, dan analitik trafik.',
    skills: ['Riset Keyword', 'Technical & On-Page SEO', 'Google Search Console', 'Content Strategy'],
    status: 'Tanyakan Ketersediaan',
    iconType: 'seo'
  },
  {
    id: 'social-media-content',
    title: 'Social Media & Content Creator',
    department: 'Creative & Media',
    targetAudience: 'Multimedia / DKV / Komunikasi',
    description: 'Merancang konten visual yang engaging, copywriting yang memikat, dan strategi pertumbuhan audiens di media sosial.',
    skills: ['Content Planning', 'Copywriting', 'Design Grafis Ringan', 'Social Media Analytics'],
    status: 'Tanyakan Ketersediaan',
    iconType: 'media'
  },
  {
    id: 'ui-ux-design',
    title: 'UI/UX & Graphic Design',
    department: 'Desain Kreatif',
    targetAudience: 'DKV / Multimedia / Desain Grafis',
    description: 'Merancang identitas visual, materi promosi kreatif, layout antarmuka digital, dan pengalaman pengguna yang nyaman.',
    skills: ['Figma', 'Visual Hierarchy & Typography', 'Wireframing & Prototyping', 'Branding Guidelines'],
    status: 'Tanyakan Ketersediaan',
    iconType: 'design'
  },
  {
    id: 'network-it-support',
    title: 'IT Support & Infrastruktur',
    department: 'Infrastruktur IT',
    targetAudience: 'TKJ / Sistem Informasi',
    description: 'Pengelolaan lingkungan komputasi dasar, troubleshooting perangkat lunak/keras, serta konfigurasi jaringan.',
    skills: ['Networking Basics', 'Hardware & OS Setup', 'Cloud & Hosting Basics', 'System Maintenance'],
    status: 'Tanyakan Ketersediaan',
    iconType: 'network'
  },
  {
    id: 'digital-business',
    title: 'Business Digital & Administrasi',
    department: 'Bisnis & Operasional',
    targetAudience: 'Bisnis Digital / Manajemen / Adm. Perkantoran',
    description: 'Membantu riset pasar, komunikasi pelanggan via WhatsApp CRM, serta administrasi proyek digital.',
    skills: ['Customer Communication', 'Spreadsheet Reporting', 'Market Research', 'Admin Workflow'],
    status: 'Tanyakan Ketersediaan',
    iconType: 'business'
  }
];
