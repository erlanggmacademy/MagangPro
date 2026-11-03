export interface MitraItem {
  id: string;
  name: string;
  shortName: string;
  category: 'kampus' | 'smk' | 'industri';
  categoryLabel: string;
  logo: string;
  city: string;
  description: string;
  focus: string[];
}

export const mitraCategories = [
  { label: 'Semua Mitra', slug: 'all' },
  { label: 'Perguruan Tinggi', slug: 'kampus' },
  { label: 'SMK Vokasi', slug: 'smk' },
  { label: 'Media & Industri', slug: 'industri' },
];

export const mitraList: MitraItem[] = [
  {
    id: 'um',
    name: 'Universitas Negeri Malang',
    shortName: 'UM Malang',
    category: 'kampus',
    categoryLabel: 'Perguruan Tinggi',
    logo: '/images/mitra/um.webp',
    city: 'Kota Malang',
    description: 'Kolaborasi program magang mandiri & internship MBKM mahasiswa prodi Teknik Informatika, Desain, dan Manajemen Bisnis.',
    focus: ['Internship MBKM', 'Konversi SKS', 'Proyek Nyata Industri']
  },
  {
    id: 'umm',
    name: 'Universitas Muhammadiyah Malang',
    shortName: 'UMM',
    category: 'kampus',
    categoryLabel: 'Perguruan Tinggi',
    logo: '/images/mitra/umm.webp',
    city: 'Kota Malang',
    description: 'Kemitraan penempatan magang mahasiswa rumpun informatika & komunikasi dengan fokus pembuatan portofolio terverifikasi.',
    focus: ['Praktik Industri', 'Mentoring Teknis', 'Portofolio Karier']
  },
  {
    id: 'uin-malang',
    name: 'UIN Maulana Malik Ibrahim Malang',
    shortName: 'UIN Malang',
    category: 'kampus',
    categoryLabel: 'Perguruan Tinggi',
    logo: '/images/mitra/uin-malang.webp',
    city: 'Kota Malang',
    description: 'Penyaluran mahasiswa magang Teknik Informatika dalam proyek riil pengembangan sistem web modern dan arsitektur data.',
    focus: ['Web Development', 'Laporan Akademik', 'Bimbingan Mentor']
  },
  {
    id: 'polinema',
    name: 'Politeknik Negeri Malang',
    shortName: 'Polinema',
    category: 'kampus',
    categoryLabel: 'Perguruan Tinggi',
    logo: '/images/mitra/polinema.webp',
    city: 'Kota Malang',
    description: 'Sinergi pendidikan vokasi terapan bagi mahasiswa teknologi informasi untuk penguasaan stack teknologi terkini berbasis industri.',
    focus: ['Vokasi Terapan', 'Frontend/Backend', 'Kesiapan Kerja']
  },
  {
    id: 'unmer',
    name: 'Universitas Merdeka Malang',
    shortName: 'Unmer Malang',
    category: 'kampus',
    categoryLabel: 'Perguruan Tinggi',
    logo: '/images/mitra/unmer.webp',
    city: 'Kota Malang',
    description: 'Kerja sama praktik magang kerja mahasiswa dalam bidang pemasaran digital, konten media kreatif, dan pengembangan web.',
    focus: ['Digital Marketing', 'Creative Media', 'Internship Terarah']
  },
  {
    id: 'poliwangi',
    name: 'Politeknik Negeri Banyuwangi',
    shortName: 'Poliwangi',
    category: 'kampus',
    categoryLabel: 'Perguruan Tinggi',
    logo: '/images/mitra/poliwangi.webp',
    city: 'Banyuwangi',
    description: 'Kemitraan magang vokasi lintas kota di Jawa Timur guna memperluas wawasan implementasi teknologi di lingkungan startup digital.',
    focus: ['Magang Vokasi', 'Budaya Kerja Modern', 'Studi Kasus Riil']
  },
  {
    id: 'smkn-5-malang',
    name: 'SMKN 5 Malang',
    shortName: 'SMKN 5 Malang',
    category: 'smk',
    categoryLabel: 'SMK Vokasi',
    logo: '/images/mitra/smkn-5-malang.webp',
    city: 'Kota Malang',
    description: 'Penerimaan Praktik Kerja Lapangan (PKL) siswa jurusan RPL & Multimedia dengan bimbingan tugas harian berstandar industri.',
    focus: ['PKL Terstruktur', 'Logbook & Laporan', 'Penguasaan Coding']
  },
  {
    id: 'smkn-11-malang',
    name: 'SMKN 11 Malang',
    shortName: 'SMKN 11 Malang',
    category: 'smk',
    categoryLabel: 'SMK Vokasi',
    logo: '/images/mitra/smkn-11-malang.webp',
    city: 'Kota Malang',
    description: 'Program PKL vokasi teknologi informasi untuk mencetak lulusan SMK yang adaptif, disiplin kerja tim, dan terampil teknis.',
    focus: ['Pengembangan Diri', 'Keterampilan Digital', 'Evaluasi Berkala']
  },
  {
    id: 'smk-1-turen',
    name: 'SMKN 1 Turen',
    shortName: 'SMKN 1 Turen',
    category: 'smk',
    categoryLabel: 'SMK Vokasi',
    logo: '/images/mitra/smk-1-turen.webp',
    city: 'Kab. Malang',
    description: 'Kerja sama berkelanjutan penerimaan peserta PKL bidang teknologi informasi, bisnis daring, dan pemasaran digital.',
    focus: ['Pemasaran Daring', 'SEO & Konten', 'Sertifikat Industri']
  },
  {
    id: 'smkn-1-pasuruan',
    name: 'SMKN 1 Pasuruan',
    shortName: 'SMKN 1 Pasuruan',
    category: 'smk',
    categoryLabel: 'SMK Vokasi',
    logo: '/images/mitra/smkn-1-pasuruan.webp',
    city: 'Kota Pasuruan',
    description: 'Penempatan PKL intensif siswi jurusan TRPL (Teknik Rekayasa Perangkat Lunak) pada proyek arsitektur web dan digital marketing.',
    focus: ['TRPL / RPL', 'Hands-on Projects', 'Portofolio Nyata']
  },
  {
    id: 'skariga',
    name: 'SMK PGRI 3 Malang (Skariga)',
    shortName: 'SMK Skariga',
    category: 'smk',
    categoryLabel: 'SMK Vokasi',
    logo: '/images/mitra/skariga.webp',
    city: 'Kota Malang',
    description: 'Workshop pembekalan kompetensi industri, pelatihan kejuruan, serta kemitraan penerimaan peserta magang kejuruan unggulan.',
    focus: ['Workshop Kejuruan', 'Sinkronisasi Kurikulum', 'PKL Industri']
  },
  {
    id: 'radar-kediri',
    name: 'Radar Kediri (Jawa Pos Group)',
    shortName: 'Radar Kediri',
    category: 'industri',
    categoryLabel: 'Mitra Media & Industri',
    logo: '/images/mitra/radar-kediri.webp',
    city: 'Kota Kediri',
    description: 'Kolaborasi strategis pengembangan portal web kompetisi akademik (KKA) 2026 dan publikasi ekosistem literasi digital di Jawa Timur.',
    focus: ['Portal Web Event', 'Publikasi Media', 'Sinergi Industri']
  },
];

