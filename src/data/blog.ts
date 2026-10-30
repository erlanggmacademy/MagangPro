export interface BlogSection {
  heading: string;
  body: string[];
  list?: string[];
  quote?: string;
}

export interface BlogFaq {
  question: string;
  answer: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  categorySlug: string;
  date: string;
  readTime: string;
  image: string;
  secondImage: {
    src: string;
    alt: string;
    caption: string;
  };
  readAlso: {
    title: string;
    slug: string;
  };
  author: {
    name: string;
    role: string;
  };
  tags: string[];
  featured?: boolean;
  intro: string;
  sections: BlogSection[];
  conclusion: string;
  faqs: BlogFaq[];
  ctaBox: {
    badge: string;
    title: string;
    desc: string;
    btnLabel: string;
    btnHref: string;
  };
}

export const blogCategories = [
  { label: 'Semua Artikel', slug: 'all' },
  { label: 'Panduan Magang', slug: 'panduan-magang' },
  { label: 'Digital Marketing', slug: 'digital-marketing' },
  { label: 'Teknologi & Web', slug: 'teknologi-web' },
  { label: 'Karier & Soft Skills', slug: 'karier-soft-skills' },
];

export const blogPosts: BlogPost[] = [
  {
    id: 'post-1',
    slug: 'panduan-magang-smk-pkl-malang',
    title: 'Panduan Lengkap Magang SMK & PKL di Malang: Syarat, Durasi, dan Tips Lolos',
    excerpt: 'Segala hal mendasar yang perlu dipersiapkan siswa SMK jurusan RPL, TKJ, DKV, dan Pemasaran sebelum mengajukan surat permohonan magang resmi ke industri digital.',
    category: 'Panduan Magang',
    categorySlug: 'panduan-magang',
    date: '30 Oktober 2026',
    readTime: '5 menit baca',
    image: '/images/blog/blog-magang-smk.webp',
    secondImage: {
      src: '/images/blog/blog-magang-smk-detail.webp',
      alt: 'Sesi Asistensi dan Mentoring Magang SMK di Lab MagangPro Malang',
      caption: 'Peserta magang SMK mendapatkan pendampingan langsung dari mentor industri dalam menyelesaikan tugas proyek riil di lab onsite Mojolangu Malang.',
    },
    readAlso: {
      title: 'Mengapa Bukti Portofolio Riil Lebih Dilirik Industri Dibanding Sekadar Nilai IPK',
      slug: 'portofolio-nyata-vs-ipk-dunia-kerja',
    },
    author: {
      name: 'Mentor MagangPro',
      role: 'Koordinator Vokasi & DUDI',
    },
    tags: ['Magang SMK', 'PKL Malang', 'Vokasi DUDI', 'Tips PKL'],
    featured: true,
    intro: 'Praktek Kerja Lapangan (PKL) bagi siswa Sekolah Menengah Kejuruan (SMK) bukan sekadar formalitas pengisi absensi kalender sekolah. Bagi siswa di Kota Malang dan sekitarnya, program magang industri adalah pintu gerbang awal untuk membuktikan bahwa kompetensi yang dipelajari di bangku sekolah siap menjawab kebutuhan nyata Dunia Usaha dan Dunia Industri (DUDI).',
    sections: [
      {
        heading: '1. Mengapa Memilih Tempat PKL yang Relevan Sangat Krusial?',
        body: [
          'Banyak siswa SMK mengalami kekecewaan saat menjalani PKL karena ditempatkan pada perusahaan yang hanya memberikan tugas administratif sederhana seperti fotokopi berkas, menginput data monoton, atau merapikan arsip yang sama sekali tidak berhubungan dengan kejuruan.',
          'Di ekosistem teknologi modern, siswa SMK jurusan Rekayasa Perangkat Lunak (RPL), Teknik Komputer dan Jaringan (TKJ), Desain Komunikasi Visual (DKV), maupun Bisnis Daring seharusnya diberi panggung untuk memegang tools standar industri: mulai dari code repository, software desain Figma, hingga dashboard analitik SEO.',
        ],
        quote: 'Tempat PKL terbaik adalah tempat di mana kesalahan Anda saat belajar diulas secara konstruktif oleh mentor praktisi, bukan diabaikan tanpa bimbingan.',
      },
      {
        heading: '2. Dokumen dan Persyaratan Resmi yang Wajib Dipersiapkan',
        body: [
          'Sebelum mengajukan pendaftaran magang resmi, pastikan seluruh berkas administratif sekolah telah lengkap agar proses penerbitan Surat Balasan Penerimaan dapat diproses secara cepat:',
        ],
        list: [
          'Surat Pengantar / Permohonan Magang resmi berkop sekolah yang ditandatangani Kepala Sekolah atau Kepala Program Keahlian.',
          'Curriculum Vitae (CV) sederhana yang memuat daftar keahlian dasar, tools yang pernah dipelajari di sekolah, dan link portofolio (jika ada).',
          'Membawa laptop pribadi dengan spesifikasi kerja standar (RAM min. 8GB disarankan untuk kelancaran pengerjaan tugas proyek).',
          'Surat persetujuan orang tua atau wali untuk mematuhi jam kerja onsite di laboratorium Mojolangu, Lowokwaru, Kota Malang.',
        ],
      },
      {
        heading: '3. Durasi Pelaksanaan dan Ketentuan Waktu',
        body: [
          'Setiap SMK memiliki ketentuan durasi magang yang bervariasi sesuai kurikulum yang diterapkan (Kurikulum Merdeka atau SMK Pusat Keunggulan):',
          'Durasi yang paling umum adalah 3 bulan (satu triwulan) atau 6 bulan (satu semester penuh). MagangPro memfasilitasi kedua skema durasi tersebut dengan pembagian target proyek harian dan mingguan yang terukur.',
        ],
      },
      {
        heading: '4. Tips Menghadapi Hari Pertama Masuk Lab MagangPro',
        body: [
          'Kesan pertama sangat penting. Pada hari pertama onboarding, mentor industri akan membagikan roadmap proyek, akun tools kolaborasi, dan pembagian kelompok kerja.',
          'Pastikan hadir tepat waktu (08.30 WIB), kenakan seragam sekolah rapi atau pakaian kasual sopan berkerah, dan jangan ragu untuk bertanya saat sesi pengenalan tools kerja.',
        ],
      },
    ],
    conclusion: 'Dengan persiapan dokumen yang matang, komitmen belajar yang konsisten, dan pemilihan mitra industri yang tepat, masa PKL Anda di Kota Malang akan menjadi batu loncatan berharga untuk membangun portofolio karier profesional.',
    faqs: [
      {
        question: 'Apakah program magang SMK di MagangPro dipungut biaya?',
        answer: 'Program PKL/magang SMK di MagangPro diselenggarakan melalui kemitraan sekolah dan jalur seleksi berkas resmi tanpa pungutan biaya pendidikan terselubung.',
      },
      {
        question: 'Berapa lama proses penerbitan surat balasan penerimaan magang?',
        answer: 'Setelah surat permohonan resmi sekolah dan data siswa dikirimkan via WhatsApp atau email, surat balasan resmi diterbitkan dalam 1 hingga 2 hari kerja.',
      },
      {
        question: 'Apakah MagangPro membantu penyusunan bab laporan PKL sekolah?',
        answer: 'Ya, setiap peserta magang mendapatkan bimbingan struktur laporan, lembar penilaian pembimbing industri, dan sertifikat resmi berpredikat setelah menyelesaikan program.',
      },
    ],
    ctaBox: {
      badge: 'Konsultasi Kuota PKL SMK',
      title: 'Amankan Kuota Magang SMK Anda di MagangPro Malang',
      desc: 'Kuota terbatas 8–12 siswa per gelombang untuk menjamin kualitas bimbingan 1-on-1 bersama praktisi industri.',
      btnLabel: 'Hubungi Admin via WhatsApp',
      btnHref: 'https://wa.me/62895639068080?text=Halo%20MagangPro,%20saya%20siswa%20SMK%20ingin%20konsultasi%20ketersediaan%20kuota%20PKL.',
    },
  },
  {
    id: 'post-2',
    slug: 'strategi-local-seo-google-maps-umkm',
    title: 'Strategi Efektif Local SEO Google Maps untuk Mendongkrak Omzet UMKM Lokal',
    excerpt: 'Cara terbukti mengoptimasi Google Profil Bisnis agar toko atau jasa Anda tampil di 3 besar pencarian lokal Google Maps tanpa harus bakar anggaran iklan mahal.',
    category: 'Digital Marketing',
    categorySlug: 'digital-marketing',
    date: '30 Oktober 2026',
    readTime: '7 menit baca',
    image: '/images/blog/blog-local-seo.webp',
    secondImage: {
      src: '/images/blog/blog-local-seo-detail.webp',
      alt: 'Analisis Dashboard Google Profil Bisnis dan Metrik Kunjungan Pelanggan',
      caption: 'Tampilan metrik pencarian lokal pada Google Profil Bisnis yang menunjukkan lonjakan panggilan telepon dan rute arah dari pelanggan lokal.',
    },
    readAlso: {
      title: 'Tren Web Development Modern: Mengapa Arsitektur SSG Jauh Lebih Cepat dan Aman',
      slug: 'tren-web-development-modern-ssg',
    },
    author: {
      name: 'Lead SEO Strategist',
      role: 'Praktisi Digital Marketing',
    },
    tags: ['Local SEO', 'Google Maps', 'Digital Marketing UMKM', 'Bisnis Lokal Malang'],
    intro: 'Bagi pemilik usaha kuliner, jasa service, toko oleh-oleh, hingga klinik kesehatan di Kota Malang, Google Maps bukan lagi sekadar penunjuk arah jalan. Google Maps kini menjadi mesin pencetak pembeli nomor satu saat konsumen mencari kebutuhan mendesak di sekitar mereka.',
    sections: [
      {
        heading: '1. Fenomena Pencarian "Dekat Saya" (Near Me)',
        body: [
          'Setiap detik, ribuan orang di Malang mengetikkan kata kunci seperti "kafe coworking terdekat", "service laptop mojolangu", atau "bengkel mobil malang 24 jam".',
          'Jika Profil Bisnis Google Anda tidak teroptimasi dengan benar, Anda sedang menyerahkan calon pembeli yang siap bayar tersebut langsung ke tangan kompetitor Anda.',
        ],
        quote: 'Konsumen yang mencari di Google Maps memiliki niat beli (buying intent) jauh lebih tinggi dibanding orang yang sekadar scrolling feed media sosial.',
      },
      {
        heading: '2. Formula Optimasi Profil Bisnis Google (GBP)',
        body: [
          'Untuk menembus posisi Local Pack (3 besar peringkat di Google Maps), perhatikan faktor-faktor kunci berikut:',
        ],
        list: [
          'Kesesuaian Nama Bisnis: Gunakan nama merk asli yang ditambahkan kata kunci layanan utama secara natural tanpa keyword stuffing berlebihan.',
          'Pemilihan Kategori Primer yang Tepat: Kategori primer menyumbang bobot algoritma terbesar dalam relevansi pencarian lokal Google.',
          'Lengkapi Atribut & Jam Operasional: Alamat presisi, nomor WhatsApp aktif, foto lokasi tampak depan, dan jadwal buka yang selalu akurat.',
          'Deskripsi Bisnis Mengandung Kata Kunci Geografis: Sebutkan area layanan seperti Lowokwaru, Klojen, Suhat, atau Kota Malang.',
        ],
      },
      {
        heading: '3. Strategi Mengumpulkan Ulasan Bintang 5 Secara Etis',
        body: [
          'Algoritma Google Maps sangat menyukai profil yang aktif mendapatkan interaksi ulasan dari pelanggan asli.',
          'Buat tautan review instan menggunakan Google Review Link generator dan cetak barcode QR di kasir atau meja transaksi. Berikan senyuman tulus dan mintalah ulasan singkat saat pelanggan merasa puas dengan produk atau layanan Anda.',
        ],
      },
      {
        heading: '4. Update Postingan dan Foto Berkala',
        body: [
          'Perlakukan Profil Bisnis Google seperti etalase toko yang hidup. Unggah foto produk resolusi tinggi minimal 2 kali seminggu dan buat postingan promo pembaruan menu atau layanan.',
        ],
      },
    ],
    conclusion: 'Mengoptimasi Local SEO Google Maps tidak membutuhkan biaya langganan software yang mahal. Kuncinya terletak pada konsistensi detail informasi dan pelayanan prima yang menghasilkan ulasan organik positif.',
    faqs: [
      {
        question: 'Berapa lama waktu yang dibutuhkan agar Profil Google Maps masuk halaman 1?',
        answer: 'Pada tingkat kompetisi lokal moderat di Kota Malang, hasil optimasi biasanya mulai terlihat dalam 2 hingga 4 minggu setelah verifikasi dan pengisian data lengkap.',
      },
      {
        question: 'Apakah ulasan negatif bisa dihapus dari Google Maps?',
        answer: 'Google hanya menghapus ulasan yang melanggar pedoman komunitas (spam atau ujaran kebencian). Untuk ulasan komplain asli, tanggapi dengan sopan, profesional, dan tawarkan solusi nyata.',
      },
      {
        question: 'Apakah saya butuh website jika sudah memiliki Google Maps?',
        answer: 'Memiliki website berkecepatan tinggi yang terhubung ke Google Maps akan meningkatkan otoritas peringkat lokal secara drastis serta membangun kredibilitas brand jangka panjang.',
      },
    ],
    ctaBox: {
      badge: 'Pelatihan Khusus Pelaku Usaha',
      title: 'Tingkatkan Penjualan Bisnis Anda Lewat Pelatihan UMKM MagangPro',
      desc: 'Bimbingan privat praktik langsung setup dan optimasi Google Maps serta strategi konten mandiri.',
      btnLabel: 'Daftar Workshop UMKM',
      btnHref: '/pelatihan-digital-marketing/umkm',
    },
  },
  {
    id: 'post-3',
    slug: 'portofolio-nyata-vs-ipk-dunia-kerja',
    title: 'Mengapa Bukti Portofolio Riil Lebih Dilirik Industri Dibanding Sekadar Nilai IPK',
    excerpt: 'Perusahaan teknologi masa kini mengutamakan bukti karya nyata di GitHub, Figma, dan live web yang dapat diverifikasi langsung dibanding transkrip nilai teoritis.',
    category: 'Karier & Soft Skills',
    categorySlug: 'karier-soft-skills',
    date: '30 Oktober 2026',
    readTime: '4 menit baca',
    image: '/images/blog/blog-portofolio-karier.webp',
    secondImage: {
      src: '/images/blog/blog-portofolio-karier-detail.webp',
      alt: 'Showcase Repositori Proyek Industri dan Dokumentasi Desain UI/UX Figma',
      caption: 'Tangkapan layar repositori kode terstruktur dan sistem desain antarmuka yang siap dipresentasikan saat sesi interview kerja.',
    },
    readAlso: {
      title: 'Panduan Lengkap Magang SMK & PKL di Malang: Syarat, Durasi, dan Tips Lolos',
      slug: 'panduan-magang-smk-pkl-malang',
    },
    author: {
      name: 'Tim Talent Acquisition',
      role: 'Karier & Kemitraan',
    },
    tags: ['Portofolio Karier', 'Tips Masuk Kerja', 'Rekrutmen Industri', 'Karier Digital'],
    intro: 'Banyak sarjana baru dan lulusan vokasi terkejut saat menghadapi bursa kerja: nilai IPK cumlaude tidak serta-merta menjamin panggilan wawancara kerja di perusahaan teknologi modern. Mengapa pergeseran ini terjadi, dan bagaimana cara memenangkan persaingan kerja di era digital?',
    sections: [
      {
        heading: '1. Pergeseran Paradigma Rekrutmen Industri Modern',
        body: [
          'Di masa lalu, ijazah dan transkrip nilai adalah satu-satunya instrumen penyaring awal bagi HRD. Namun, perkembangan industri digital yang dinamis membuktikan bahwa nilai akademis tinggi seringkali tidak berbanding lurus dengan kemampuan menyelesaikan tantangan teknis nyata.',
          'Lead Engineer dan Creative Director kini langsung menanyakan link portofolio: "Mana akun GitHub Anda?", "Bisa lihat studi kasus Figma Anda?", atau "Website apa saja yang sudah pernah Anda rilis ke internet?".',
        ],
        quote: 'Satu link website live yang Anda bangun sendiri bernilai sepuluh kali lipat lebih meyakinkan daripada nilai A pada mata kuliah Pemrograman Web.',
      },
      {
        heading: '2. Tiga Elemen Portofolio yang Bikin HRD Jatuh Hati',
        body: [
          'Portofolio yang kuat bukan sekadar kumpulan gambar screenshot. Rekruter ingin melihat pola pikir (mindset) dan alur kerja Anda:',
        ],
        list: [
          'Problem Statement: Masalah apa yang dihadapi klien atau pengguna sebelum solusi Anda dibangun?',
          'Proses Kerja & Kolaborasi: Tools apa yang Anda gunakan, arsitektur kode apa yang dipilih, dan bagaimana Anda berkoordinasi dalam tim?',
          'Hasil Terukur (Outcome): Apakah website tersebut memiliki kecepatan loading tinggi? Apakah desain Anda meningkatkan konversi penjualan?',
        ],
      },
      {
        heading: '3. Bagaimana Peserta MagangPro Mengisi Portofolio Mereka',
        body: [
          'Di MagangPro Malang, kami tidak memberikan tugas fiktif seperti membuat aplikasi kalkulator atau kloning to-do list biasa.',
          'Setiap peserta magang ditugaskan menggarap website rilisan aktif untuk mitra UMKM lokal, membenahi struktur SEO bisnis nyata, atau merancang aset visual yang benar-benar dicetak dan digunakan pelanggan.',
        ],
      },
    ],
    conclusion: 'Jangan menunggu wisuda untuk mulai merintis portofolio. Mulailah mengumpulkan dan mendokumentasikan setiap baris kode serta karya desain Anda sejak masa magang agar Anda siap kerja begitu lulus.',
    faqs: [
      {
        question: 'Apakah nilai IPK sama sekali tidak penting?',
        answer: 'IPK tetap penting sebagai syarat administratif awal di beberapa korporasi besar atau BUMN. Namun pada tahap tes kemampuan teknis, portofolio dan pemecahan masalah adalah penentu kelulusan akhir.',
      },
      {
        question: 'Berapa jumlah proyek ideal yang harus dicantumkan di portofolio?',
        answer: 'Kualitas lebih utama dari kuantitas. Tiga sampai lima proyek yang didokumentasikan secara mendalam (dengan latar belakang masalah dan hasil nyata) jauh lebih berbobot daripada sepuluh proyek template sederhana.',
      },
      {
        question: 'Bagaimana jika proyek magang saya dikerjakan secara tim?',
        answer: 'Justru itu keunggulan besar. Jelaskan secara spesifik apa peran dan kontribusi Anda di dalam tim tersebut, misalnya sebagai frontend dev, UI designer, atau copywriter.',
      },
    ],
    ctaBox: {
      badge: 'Portofolio Industri Terverifikasi',
      title: 'Bangun Bukti Karya Nyata Anda di MagangPro Malang',
      desc: 'Dapatkan bimbingan 1-on-1 dari mentor berpengalaman untuk menghasilkan portofolio proyek yang siap dipajang di CV dan LinkedIn.',
      btnLabel: 'Lihat Posisi Magang Tersedia',
      btnHref: '/program-magang/posisi',
    },
  },
  {
    id: 'post-4',
    slug: 'konversi-sks-magang-mahasiswa-mbkm',
    title: 'Konversi SKS Magang Mahasiswa: Alur Administrasi dan Standar Penilaian Kampus',
    excerpt: 'Tahapan praktis mahasiswa dalam mempersiapkan surat rekomendasi dekanat, pengisian logbook harian proyek, hingga presentasi sidang evaluasi magang.',
    category: 'Panduan Magang',
    categorySlug: 'panduan-magang',
    date: '30 Oktober 2026',
    readTime: '6 menit baca',
    image: '/images/blog/blog-konversi-sks.webp',
    secondImage: {
      src: '/images/blog/blog-konversi-sks-detail.webp',
      alt: 'Format Berkas Konversi SKS dan Berita Acara Penilaian Magang Kampus',
      caption: 'Alur dokumentasi administrasi magang mandiri yang selaras dengan kalender akademik perguruan tinggi di Malang.',
    },
    readAlso: {
      title: 'Etika Komunikasi dan Kebiasaan Kerja Profesional di Lingkungan Startup',
      slug: 'etika-kerja-komunikasi-onsite-startup',
    },
    author: {
      name: 'Akademik MagangPro',
      role: 'Hubungan Perguruan Tinggi',
    },
    tags: ['Magang Mahasiswa', 'Konversi SKS', 'Internship Malang', 'Administrasi Kampus'],
    intro: 'Bagi mahasiswa perguruan tinggi di Malang maupun luar kota, program magang industri mandiri atau skema MBKM memberikan kesempatan emas untuk mengonversi aktivitas kerja industri nyata menjadi bobot 10 hingga 20 Satuan Kredit Semester (SKS). Namun, kelancaran proses konversi sangat bergantung pada kepatuhan administrasi dan kualitas laporan magang.',
    sections: [
      {
        heading: '1. Langkah Awal: Sinkronisasi Capaian Pembelajaran (CPL)',
        body: [
          'Langkah paling mendasar adalah mencocokkan capaian pembelajaran mata kuliah yang ingin dikonversi dengan silabus kerja magang di mitra industri.',
          'Sebagai contoh, mahasiswa Teknik Informatika yang ingin mengonversi mata kuliah Rekayasa Web dan Basis Data harus memastikan bahwa tugas magang mencakup pembuatan frontend modern, integrasi API, dan deployment server.',
        ],
        quote: 'Kunci sukses konversi SKS adalah komunikasi proaktif dengan Dosen Pembimbing Akademik (DPA) sebelum memulai kegiatan magang.',
      },
      {
        heading: '2. Kelengkapan Berkas Administrasi Pra-Magang',
        body: [
          'Pastikan alur berkas resmi kampus diselesaikan secara runtut:',
        ],
        list: [
          'Pengajuan Surat Rekomendasi Magang dari Dekanat Fakultas atau Koordinator Program Studi.',
          'Penerbitan Surat Penerimaan (LoA - Letter of Acceptance) resmi berstempel dari MagangPro.',
          'Penandatanganan Lembar Komitmen Rencana Kerja Magang antara mahasiswa, dosen pembimbing, dan mentor industri.',
        ],
      },
      {
        heading: '3. Kedisiplinan Pengisian Logbook Harian',
        body: [
          'Salah satu alasan penolakan konversi SKS di kampus adalah catatan logbook yang tidak detail atau terlambat diisi.',
          'Di MagangPro, setiap peserta magang dibimbing untuk mendokumentasikan kegiatan harian berbasis sprint: apa yang dikerjakan, kendala teknis yang dihadapi, serta solusi pemecahan yang diterapkan.',
        ],
      },
      {
        heading: '4. Format Penilaian Objektif dan Sertifikat Berpredikat',
        body: [
          'Pada akhir periode (3 hingga 6 bulan), MagangPro menerbitkan Berita Acara Penilaian Magang resmi yang menilai aspek kedisiplinan kerja, penguasaan teknis, dan kemampuan kolaborasi tim, disertai Sertifikat Magang Resmi.',
        ],
      },
    ],
    conclusion: 'Mengonversi SKS magang tidak perlu rumit jika Anda bermitra dengan lembaga yang memahami standar birokrasi kampus. Pastikan seluruh dokumen terarsip rapi sejak awal hingga akhir kegiatan.',
    faqs: [
      {
        question: 'Apakah mahasiswa dari luar Malang bisa mendaftar program internship ini?',
        answer: 'Bisa, program internship onsite kami di Malang terbuka untuk mahasiswa dari seluruh universitas di Indonesia selama bersedia hadir di lab Mojolangu Malang.',
      },
      {
        question: 'Berapa bobot SKS yang umumnya dapat dikonversi di MagangPro?',
        answer: 'Tergantung kebijakan program studi masing-masing, biasanya berkisar antara 10 hingga 20 SKS untuk program magang mandiri berdurasi 1 semester (4–6 bulan).',
      },
      {
        question: 'Apakah MagangPro menyediakan surat evaluasi tengah semester (mid-term)?',
        answer: 'Ya, mentor kami siap mengisi formulir monev (monitoring dan evaluasi) tengah periode yang diminta oleh dosen pembimbing lapangan kampus.',
      },
    ],
    ctaBox: {
      badge: 'Program Magang Mahasiswa',
      title: 'Konsultasikan Kebutuhan Konversi SKS Kampus Anda',
      desc: 'MagangPro siap menerbitkan berkas resmi dan mendukung kelancaran administrasi akademik Anda.',
      btnLabel: 'Pelajari Jalur Magang Mahasiswa',
      btnHref: '/program-magang/internship-mahasiswa',
    },
  },
  {
    id: 'post-5',
    slug: 'tren-web-development-modern-ssg',
    title: 'Tren Web Development Modern: Mengapa Arsitektur SSG Jauh Lebih Cepat dan Aman',
    excerpt: 'Mengulas keunggulan Static Site Generation yang menghasilkan load time sub-detik, PageSpeed 95+, ramah SEO Google, dan bebas dari celah injeksi database.',
    category: 'Teknologi & Web',
    categorySlug: 'teknologi-web',
    date: '30 Oktober 2026',
    readTime: '8 menit baca',
    image: '/images/blog/blog-web-development.webp',
    secondImage: {
      src: '/images/blog/blog-web-development-detail.webp',
      alt: 'Laporan Skor Audit Google Lighthouse dan Core Web Vitals 98+',
      caption: 'Hasil uji performa Google PageSpeed Insights yang menunjukkan skor hijau sempurna berkat arsitektur static site modern.',
    },
    readAlso: {
      title: 'Strategi Efektif Local SEO Google Maps untuk Mendongkrak Omzet UMKM Lokal',
      slug: 'strategi-local-seo-google-maps-umkm',
    },
    author: {
      name: 'Fullstack Engineer',
      role: 'Divisi Teknologi MagangPro',
    },
    tags: ['Web Development', 'Astro SSG', 'PageSpeed', 'Teknologi Modern'],
    intro: 'Dalam lanskap pengembangan web era sekarang, kecepatan muat halaman (*load speed*) bukan lagi sekadar pelengkap kenyamanan pengguna, melainkan faktor penentu mutlak peringkat pencarian Google dan tingkat konversi penjualan bisnis.',
    sections: [
      {
        heading: '1. Masalah pada Web Tradisional Berbasis Database Dinamis',
        body: [
          'Situs web lama berbasis CMS monolitik tradisional (seperti WordPress klasik yang dijejali puluhan plugin) bekerja dengan cara membangun halaman setiap kali ada pengunjung yang datang.',
          'Server harus mengeksekusi script PHP, menanyakan database MySQL puluhan kali, baru mengirimkan kode HTML ke browser. Proses ini lambat, membutuhkan server berbiaya mahal, dan sangat rentan terhadap serangan SQL Injection atau kerentanan plugin usang.',
        ],
        quote: 'Google secara eksplisit menyatakan bahwa setiap keterlambatan 1 detik dalam memuat halaman website menurunkan konversi hingga 20%.',
      },
      {
        heading: '2. Keunggulan Arsitektur SSG (Static Site Generation)',
        body: [
          'Arsitektur SSG membalik cara kerja tersebut 180 derajat. Seluruh halaman web dikompilasi menjadi berkas HTML, CSS, dan JavaScript statis sejak awal saat proses build:',
        ],
        list: [
          'Kecepatan Buka Sub-Detik: Karena hanya menyajikan berkas statis ringan, browser langsung menampilkan konten tanpa menunggu pemrosesan database.',
          'Skor Google PageSpeed 90-100: Beban JavaScript minimal membuat metrik Core Web Vitals (LCP, FID, CLS) selalu berada di zona hijau prima.',
          'Bebas Celah Injeksi Database: Tanpa adanya database dinamis yang terhubung ke server publik, celah pembajakan dan injeksi script berbahaya tertutup rapat.',
          'Biaya Hosting Sangat Efisien: Berkas statis dapat di-hosting di Content Delivery Network (CDN) global dengan biaya mendekati nol rupiah.',
        ],
      },
      {
        heading: '3. Mengapa MagangPro Mengadopsi Framework Astro',
        body: [
          'Di MagangPro Malang, kami menggunakan teknologi Astro untuk membangun website klien dan materi pembelajaran peserta magang.',
          'Astro mengusung filosofi *Zero-JS by Default*, artinya JavaScript hanya dimuat pada komponen interaktif yang benar-benar membutuhkan interaksi (seperti slider atau filter pencarian), sementara sisa halaman tetap berbobot super ringan.',
        ],
      },
    ],
    conclusion: 'Mengadopsi arsitektur SSG adalah investasi cerdas bagi bisnis yang menginginkan website cepat, tahan banting, dan disukai algoritma Google tanpa pusing memikirkan biaya maintenance server tinggi.',
    faqs: [
      {
        question: 'Apakah website berbasis SSG sulit untuk di-update kontennya?',
        answer: 'Tidak. Konten dapat dikelola dengan mudah menggunakan berkas Markdown atau Headless CMS yang memicu build otomatis saat artikel baru diterbitkan.',
      },
      {
        question: 'Apakah arsitektur SSG cocok untuk toko online besar?',
        answer: 'Untuk toko online ribuan produk yang stoknya berubah tiap menit, arsitektur hybrid (SSG + SSR) atau Jamstack modern dengan checkout API eksternal adalah kombinasi paling ideal.',
      },
      {
        question: 'Berapa rata-rata skor PageSpeed website buatan MagangPro?',
        answer: 'Seluruh arsitektur website yang kami kembangkan dirancang untuk mencapai skor Google PageSpeed di kisaran 90 hingga 100 pada perangkat mobile dan desktop.',
      },
    ],
    ctaBox: {
      badge: 'Solusi Pembuatan Website',
      title: 'Bangun Website Berkecepatan Tinggi Bersama MagangPro',
      desc: 'Kami membangun website bisnis Anda dengan arsitektur modern SSG yang aman, responsif, dan siap merajai Google.',
      btnLabel: 'Konsultasi Jasa Website',
      btnHref: '/jasa',
    },
  },
  {
    id: 'post-6',
    slug: 'etika-kerja-komunikasi-onsite-startup',
    title: 'Etika Komunikasi dan Kebiasaan Kerja Profesional di Lingkungan Startup',
    excerpt: 'Tips beradaptasi dengan budaya kerja tim tangkas: tata krama diskusi Slack/WhatsApp, komitmen deadline sprint, serta keterbukaan menerima masukan review.',
    category: 'Karier & Soft Skills',
    categorySlug: 'karier-soft-skills',
    date: '30 Oktober 2026',
    readTime: '5 menit baca',
    image: '/images/blog/blog-etika-komunikasi.webp',
    secondImage: {
      src: '/images/blog/blog-etika-komunikasi-detail.webp',
      alt: 'Sesi Diskusi Standup Meeting dan Kolaborasi Tim Lintas Divisi',
      caption: 'Rutinitas standup meeting pagi hari di MagangPro untuk menyinkronkan target tugas antar tim developer, desainer, dan digital marketer.',
    },
    readAlso: {
      title: 'Konversi SKS Magang Mahasiswa: Alur Administrasi dan Standar Penilaian Kampus',
      slug: 'konversi-sks-magang-mahasiswa-mbkm',
    },
    author: {
      name: 'Head of Operations',
      role: 'Budaya Kerja & Mentoring',
    },
    tags: ['Soft Skills', 'Budaya Startup', 'Komunikasi Tim', 'Kesiapan Kerja'],
    intro: 'Bagi banyak siswa vokasi dan mahasiswa, masa magang adalah pengalaman pertama bersentuhan dengan dinamika dunia kerja profesional yang sesungguhnya. Seringkali, tantangan terbesar bukan terletak pada kemampuan teknis koding atau mendesain, melainkan pada kemampuan adaptasi soft skills dan komunikasi interpersonal.',
    sections: [
      {
        heading: '1. Perbedaan Budaya Sekolah/Kampus dengan Budaya Industri',
        body: [
          'Di lingkungan sekolah, tugas yang terlambat dikumpulkan mungkin hanya berakibat pengurangan poin nilai pribadi. Namun di industri, keterlambatan Anda menyelesaikan modul tugas dapat menahan jalannya sprint kerja seluruh anggota tim dan merugikan klien.',
          'Startup dan agensi modern menghargai inisiatif mandiri, kejujuran terhadap kendala teknis, serta transparansi progres kerja harian.',
        ],
        quote: 'Kecerdasan teknis (hard skill) membuka pintu masuk wawancara, tetapi etika komunikasi (soft skill) yang menentukan seberapa jauh karier Anda akan melesat.',
      },
      {
        heading: '2. Adab Berkomunikasi di Kanal Digital Kerja',
        body: [
          'Komunikasi asinkron via WhatsApp, Slack, atau Discord kerja memerlukan tata krama tersendiri:',
        ],
        list: [
          'Hindari Hanya Menyapa "P" atau "Halo": Langsung sertakan konteks maksud pembicaraan, misalnya: "Halo Kak, untuk modul header halaman kontak sudah selesai, mohon review-nya di link berikut ya."',
          'Laporkan Kendala Sebelum Tenggat: Jangan menunggu ditanya saat deadline sudah lewat. Jika mengalami error, segera laporkan kendala beserta screenshot dan langkah yang sudah dicoba.',
          'Konfirmasi Setiap Arahan: Berikan reaksi emoji atau balasan singkat "Siap Kak, saya eksekusi" agar rekan tim tahu instruksi telah dibaca.',
        ],
      },
      {
        heading: '3. Menyikapi Sesi Code Review dan Kritik Desain Secara Dewasa',
        body: [
          'Di MagangPro, setiap karya kode dan desain akan melalui sesi asistensi review bersama mentor praktisi. Pemula sering merasa tersinggung saat karyanya dikritik.',
          'Pahamilah bahwa review bukan kritik terhadap kepribadian Anda, melainkan upaya menjaga standar mutu produk yang diserahkan ke klien.',
        ],
      },
      {
        heading: '4. Menjaga Kebersihan dan Etika di Lab Onsite',
        body: [
          'Bagi peserta magang onsite di lab Mojolangu Malang, menjaga kerapian meja kerja, membuang sampah pada tempatnya, merapikan kabel laptop, dan saling menghormati saat rekan lain sedang fokus adalah cerminan profesionalisme sejati.',
        ],
      },
    ],
    conclusion: 'Mengasah etika kerja profesional selama masa magang adalah bekal paling berharga yang akan membedakan Anda dengan kandidat lain saat melamar kerja ke perusahaan impian.',
    faqs: [
      {
        question: 'Bagaimana jika saya belum pernah bekerja sama sekali dalam tim?',
        answer: 'Tidak perlu cemas. Pada minggu pertama magang, Anda akan dibimbing dalam sesi orientasi tim untuk mengenal alur kerja kolaboratif secara bertahap.',
      },
      {
        question: 'Apakah ada aturan jam kerja dan dress code di lab MagangPro?',
        answer: 'Jam kerja operasional adalah Senin–Jumat pukul 08.30–16.30 WIB dengan pakaian kasual rapi sopan (atau seragam sekolah bagi siswa SMK).',
      },
      {
        question: 'Bagaimana mentor mengevaluasi soft skill peserta magang?',
        answer: 'Penilaian soft skill mencakup kedisiplinan kehadiran, keaktifan berdiskusi, sikap terbuka menerima evaluasi, dan kerja sama tim.',
      },
    ],
    ctaBox: {
      badge: 'Lingkungan Belajar Onsite Kondusif',
      title: 'Rasakan Budaya Kerja Nyata di Laboratorium MagangPro Malang',
      desc: 'Bimbingan terstruktur yang tidak hanya mengasah keahlian teknis Anda, tetapi juga membentuk mentalitas profesional siap industri.',
      btnLabel: 'Kenali Profil MagangPro',
      btnHref: '/tentang-kami',
    },
  },
];
