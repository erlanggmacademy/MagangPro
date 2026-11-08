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
    avatar?: string;
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
  { label: 'Internship Mahasiswa', slug: 'internship-mahasiswa' },
  { label: 'Teknologi & Web', slug: 'teknologi-web' },
];

export const blogPosts: BlogPost[] = [
  {
    id: 'post-1',
    slug: 'ide-proyek-pkl-rpl',
    title: '10 Ide Proyek PKL RPL yang Bisa Jadi Portofolio Siap Kerja',
    excerpt: 'Bingung menentukan proyek PKL RPL? Ini 10 ide proyek web, SEO, dan aplikasi sederhana yang bisa jadi portofolio siap kerja. Cek daftar lengkapnya.',
    category: 'Panduan Magang',
    categorySlug: 'panduan-magang',
    date: '7 November 2026',
    readTime: '6 menit baca',
    image: '/images/blog/ide-proyek-pkl-rpl-siswa-smk.webp',
    secondImage: {
      src: '/images/blog/portofolio-proyek-pkl-rpl-web-developer.webp',
      alt: 'Contoh portofolio proyek PKL RPL berupa website dan aplikasi sederhana',
      caption: 'Contoh portofolio proyek PKL RPL berupa website dan aplikasi nyata yang siap dipamerkan ke industri kerja.',
    },
    readAlso: {
      title: 'Apa Itu Magang MBKM? Pengertian, Alur, dan Bedanya dengan Magang Mandiri',
      slug: 'magang-mbkm-adalah',
    },
    author: {
      name: 'Erlang Sinatrya',
      role: 'Praktisi RPL di PixxelPro',
      avatar: '/images/penulis/erlang.webp',
    },
    tags: ['PKL RPL', 'Portofolio SMK', 'Web Developer', 'Ide Proyek', 'Magang Vokasi'],
    featured: true,
    intro: 'Memilih ide proyek PKL RPL yang tepat sejak awal adalah penentu apakah masa magang Anda akan menghasilkan karya nyata atau sekadar tumpukan tugas tanpa arah. Banyak siswa RPL menjalani PKL tanpa target jelas sehingga di akhir bingung menjawab pertanyaan sederhana: "Apa yang sudah kamu buat?". Berikut panduan dan 10 pilihan proyek web, SEO, dan aplikasi yang siap dijadikan portofolio kerja nyata.',
    sections: [
      {
        heading: '1. Kenapa Proyek PKL Perlu Dipilih dengan Sengaja?',
        body: [
          'Proyek yang dipilih sejak awal membuat PKL punya arah yang jelas, sehingga siswa pulang dengan karya yang bisa ditunjukkan ke dunia kerja, bukan hanya tumpukan tugas kecil yang sulit dirangkum.',
          'Banyak siswa RPL menjalani masa PKL tanpa target yang terstruktur. Hari-hari diisi tugas acak, lalu di akhir periode bingung menjawab pertanyaan sederhana: "Apa yang sudah kamu buat?" Perekrut industri dan guru penguji sekolah biasanya jauh lebih tertarik pada satu proyek utuh yang bisa dijelaskan runut dari latar belakang masalah, solusi teknis, hingga hasil akhirnya.',
        ],
        quote: 'Proyek PKL yang baik menghasilkan sesuatu yang bisa dibuka dan didemokan langsung lewat satu tautan, bukan sekadar laporan tebal di atas kertas.',
      },
      {
        heading: '2. 10 Ide Proyek PKL RPL yang Layak Masuk Portofolio',
        body: [
          'Sepuluh ide proyek berikut berfokus pada hasil nyata, bisa dikerjakan secara bertahap selama masa magang, dan melatih skill yang memang dicari di industri digital:',
        ],
        list: [
          'Website company profile: Membuat situs profil usaha lengkap dengan halaman layanan, kontak, dan tampilan responsif di layar ponsel.',
          'Katalog produk UMKM: Halaman daftar produk dengan tombol pesan langsung via WhatsApp, sangat cocok untuk melatih struktur halaman dan navigasi.',
          'Landing page promosi: Satu halaman fokus dengan satu tujuan konversi (misal pendaftaran acara atau pre-order produk), melatih desain konversi tinggi.',
          'Formulir pendaftaran online: Form registrasi peserta dengan validasi data di sisi klien, melatih logika pemrograman dasar dan penanganan input form.',
          'Optimasi kecepatan website: Mengompres gambar ke format WebP, merapikan kode CSS/JS, dan membandingkan skor PageSpeed sebelum dan sesudah perbaikan.',
          'Perbaikan SEO on-page: Menata judul meta, deskripsi, heading tag (H1–H3), dan struktur URL agar mudah dipahami mesin pencari Google.',
          'Aplikasi pencatatan kas sederhana: Sistem pembukuan pemasukan dan pengeluaran harian untuk usaha mikro, melatih manipulasi data.',
          'Dashboard data sederhana: Menampilkan data dari spreadsheet Google Sheets atau file JSON dalam bentuk tabel interaktif dan grafik visual.',
          'Migrasi website lama: Memindahkan situs berbasis platform usang ke arsitektur kode modern HTML/CSS yang jauh lebih cepat dan rapi.',
          'Dokumentasi dan deployment: Menayangkan proyek ke hosting statis modern (seperti Cloudflare Pages), lalu menyusun dokumentasi README yang profesional.',
        ],
      },
      {
        heading: '3. Cara Menilai Apakah Sebuah Proyek Cocok untuk PKL',
        body: [
          'Tidak semua ide proyek cocok untuk skala waktu PKL. Proyek yang ideal memiliki kriteria terukur berikut agar selesai tepat waktu dengan bimbingan mentor:',
        ],
        list: [
          'Ada hasil akhir yang bisa dibuka secara live lewat tautan publik atau dijalankan di perangkat lain.',
          'Skalanya realistis untuk diselesaikan dalam durasi 3 hingga 6 bulan PKL, tetapi cukup menantang untuk melatih beberapa kompetensi kejuruan.',
          'Ada keputusan teknis yang bisa diceritakan, seperti alasan memilih tools tertentu atau kendala coding yang berhasil diatasi.',
          'Proyek bisa dipecah menjadi target mingguan (milestone) agar pengisian jurnal harian PKL menjadi sangat mudah.',
        ],
      },
      {
        heading: '4. Skill yang Terasah dari Proyek-Proyek Ini',
        body: [
          'Pengerjaan proyek riil melatih kemampuan teknis fundamental: sintaks HTML5 dan CSS modern, prinsip responsive web design, logika dasar pemrograman, penggunaan Git repository, serta kemampuan membaca kebutuhan riil pengguna.',
          'Selain hard skill, siswa juga belajar soft skills esensial yang jarang diajarkan di kelas: terbiasa menerima feedback revisi kode, memanajemen waktu kerja, dan mempresentasikan hasil kerja dengan bahasa yang mudah dipahami orang non-teknis. Kemampuan komunikasi inilah yang sering menjadi pembeda utama saat wawancara kerja.',
        ],
      },
      {
        heading: '5. Cara Mendokumentasikan Proyek agar Mudah Dipamerkan',
        body: [
          'Dokumentasi yang rapi adalah kunci mengubah tugas PKL menjadi bukti kompetensi yang diakui industri:',
        ],
        list: [
          'Simpan seluruh kode sumber di repositori GitHub dengan file README.md yang memuat deskripsi proyek, teknologi yang digunakan, dan panduan instalasi.',
          'Ambil tangkapan layar (screenshot) tampilan website sebelum dan sesudah perbaikan sebagai bukti perbandingan visual.',
          'Catat bug atau kendala teknis yang dihadapi beserta solusi yang Anda ambil—ini adalah bahan cerita problem-solving terbaik saat interview kerja.',
          'Integrasikan dokumentasi ini ke dalam laporan resmi PKL dan cantumkan tautan demonya pada Curriculum Vitae (CV) Anda.',
        ],
      },
      {
        heading: '6. Kesalahan Umum dalam Memilih Proyek PKL',
        body: [
          'Hindari beberapa kesalahan umum yang sering membuat siswa kehabisan waktu dan gagal menghasilkan portofolio:',
        ],
        list: [
          'Memilih ide proyek yang terlalu rumit (skala enterprise) sehingga akhirnya terbengkalai dan tidak selesai hingga akhir masa PKL.',
          'Hanya menjiplak tutorial video YouTube persis tanpa modifikasi atau penyesuaian dengan studi kasus nyata.',
          'Menunda dokumentasi hingga minggu terakhir PKL sehingga kesulitan menyusun laporan pertanggungjawaban.',
          'Bekerja sendirian tanpa pernah mengonsultasikan progres atau meminta review teknis dari mentor pembimbing industri.',
        ],
      },
    ],
    conclusion: 'Setiap sekolah kejuruan dan tempat magang memiliki ketentuan kurikulum yang berbeda. Pastikan Anda memilih proyek yang selaras dengan kompetensi keahlian dan arahan guru pembimbing. Memilih tempat PKL yang tepat dengan pendampingan mentor praktisi akan memastikan setiap baris kode yang Anda tulis bertransformasi menjadi modal portofolio karier profesional.',
    faqs: [
      {
        question: 'Apakah proyek PKL RPL harus menggunakan framework yang rumit?',
        answer: 'Tidak harus. Perekrut industri lebih mengapresiasi website yang selesai tuntas, cepat, responsif, dan kodenya bersih menggunakan HTML/CSS modern dibanding proyek full-stack rumit yang belum selesai atau banyak bug.',
      },
      {
        question: 'Kapan waktu terbaik mulai menentukan ide proyek PKL?',
        answer: 'Idealnya pada minggu pertama masa magang setelah Anda melakukan sesi orientasi dengan mentor industri dan guru pembimbing, agar roadmap kerja mingguan terencana dengan rapi.',
      },
      {
        question: 'Bagaimana cara memamerkan proyek PKL RPL ke calon perusahaan?',
        answer: 'Deploy proyek ke platform hosting gratis seperti Cloudflare Pages atau GitHub Pages, simpan kode di GitHub, lalu lampirkan link live demo langsung pada resume dan akun LinkedIn Anda.',
      },
    ],
    ctaBox: {
      badge: 'Program PKL RPL Berbasis Proyek',
      title: 'Siap Menyusun Proyek PKL yang Bisa Dipamerkan?',
      desc: 'Mencari tempat PKL di Malang yang menyediakan proyek industri nyata dan pendampingan mentor teknis 1-on-1? Tim PixxelPro di Mojolangu siap mendampingi Anda.',
      btnLabel: 'Konsultasi PKL via WhatsApp',
      btnHref: 'https://wa.me/62895639068080?text=Halo%20PixxelPro,%20saya%20siswa%20SMK%20RPL%20ingin%20konsultasi%20program%20PKL%20berbasis%20proyek.',
    },
  },
  {
    id: 'post-2',
    slug: 'magang-mbkm-adalah',
    title: 'Apa Itu Magang MBKM? Pengertian, Alur, dan Perbedaannya dengan Magang Mandiri',
    excerpt: 'Magang MBKM adalah magang yang diakui kampus sebagai bagian dari pembelajaran di luar kelas. Pahami pengertian, alur, dan bedanya dengan magang mandiri.',
    category: 'Internship Mahasiswa',
    categorySlug: 'internship-mahasiswa',
    date: '7 November 2026',
    readTime: '6 menit baca',
    image: '/images/blog/magang-mbkm-adalah-mahasiswa.webp',
    secondImage: {
      src: '/images/blog/perbedaan-magang-mbkm-dan-magang-mandiri.webp',
      alt: 'Tabel perbedaan magang MBKM dan magang mandiri untuk mahasiswa',
      caption: 'Perbandingan skema magang MBKM resmi program kampus dengan magang mandiri inisiatif mahasiswa.',
    },
    readAlso: {
      title: 'Magang Web Developer di Malang: Proyek Website Nyata dengan Astro',
      slug: 'magang-web-developer-malang',
    },
    author: {
      name: 'Erlang Sinatrya',
      role: 'Praktisi RPL di PixxelPro',
      avatar: '/images/penulis/erlang.webp',
    },
    tags: ['Magang MBKM', 'Internship Mahasiswa', 'Konversi SKS', 'Magang Mandiri', 'Kampus Merdeka'],
    featured: false,
    intro: 'Magang MBKM adalah kegiatan magang di dunia kerja yang dirancang sebagai bagian dari proses pembelajaran di luar kelas dalam kebijakan Merdeka Belajar Kampus Merdeka, dan umumnya diakui kampus lewat konversi SKS. Sementara itu, magang mandiri pada dasarnya dicari dan diurus sendiri oleh mahasiswa, lalu diajukan ke program studi agar disetujui dan diakui.',
    sections: [
      {
        heading: '1. Apa yang Dimaksud dengan Magang MBKM?',
        body: [
          'Magang MBKM memberi mahasiswa kesempatan belajar langsung di tempat kerja, dengan kegiatan yang dirancang untuk mendukung capaian pembelajaran program studi dan umumnya dikonversi menjadi SKS resmi.',
          'Kebijakan Merdeka Belajar Kampus Merdeka mendorong mahasiswa belajar tidak hanya di ruang kuliah. Mahasiswa mengerjakan tugas nyata di perusahaan atau lembaga mitra industri dengan didampingi pembimbing lapangan dan dosen pembimbing. Karena aturan teknis dan nama skema di setiap kampus terus berkembang, mahasiswa selalu disarankan membaca panduan terbaru dari program studi masing-masing.',
        ],
        quote: 'Magang MBKM menempatkan pengalaman kerja di dunia nyata sebagai bagian inti dari proses belajar akademik, bukan sekadar kegiatan sampingan.',
      },
      {
        heading: '2. Perbedaan Magang MBKM dan Magang Mandiri',
        body: [
          'Perbedaan mendasar antara magang MBKM dan magang mandiri terletak pada pihak yang mengurus dan bagaimana kegiatan tersebut diakui secara akademik:',
        ],
        list: [
          'Aspek Pengurusan: Magang MBKM mengikuti skema dan mitra yang disiapkan kampus/kementerian, sedangkan Magang Mandiri dicari dan diurus sendiri oleh mahasiswa.',
          'Aspek Pengakuan: Magang MBKM umumnya terikat langsung pada konversi bobot hingga 20 SKS, sedangkan Magang Mandiri memerlukan verifikasi dan persetujuan prodi terlebih dahulu.',
          'Aspek Dokumen: Magang MBKM mengikuti format dokumen baku program, sedangkan Magang Mandiri menggunakan surat pengantar kampus, surat persetujuan prodi, dan logbook mandiri.',
          'Aspek Fleksibilitas Mitra: Magang MBKM terbatas pada lowongan mitra resmi yang tersedia, sedangkan Magang Mandiri lebih luas di mana mahasiswa bebas memilih perusahaan sesuai minat keilmuan selama disetujui prodi.',
        ],
      },
      {
        heading: '3. Alur Umum Mengikuti Magang MBKM',
        body: [
          'Ada enam tahapan terstruktur yang umumnya dilalui mahasiswa mulai dari persiapan hingga pengakuan nilai akademik:',
        ],
        list: [
          'Konsultasi Akademik: Berdiskusi dengan dosen pembimbing akademik (DPA) atau koordinator magang prodi untuk memahami syarat semester dan kuota SKS.',
          'Riset & Pemilihan Posisi: Memilih tempat magang dan spesialisasi tugas yang linear dengan capaian pembelajaran prodi.',
          'Pendaftaran & Seleksi: Mengirimkan berkas administrasi (CV, portofolio, transkrip) dan mengikuti tahap interview teknis perusahaan.',
          'Penerbitan Surat Resmi: Mengurus surat izin resmi dari fakultas dan menandatangani pakta kesepakatan magang.',
          'Pelaksanaan Magang & Logbook: Menjalani jam kerja onsite/hybrid secara profesional sambil mengisi logbook harian dan asistensi mingguan bersama mentor.',
          'Ujian Laporan & Konversi: Mempresentasikan laporan akhir magang di hadapan dosen penguji dan mentor untuk penerbitan nilai konversi SKS.',
        ],
      },
      {
        heading: '4. Dokumen yang Umumnya Diminta Kampus dan Mitra',
        body: [
          'Kelengkapan administrasi menjadi syarat utama agar status keaktifan magang Anda legal di mata kampus dan perusahaan:',
        ],
        list: [
          'Surat permohonan atau surat pengantar resmi berkop fakultas/program studi.',
          'Curriculum Vitae (CV) ATS-friendly beserta tautan repositori portofolio atau karya riil.',
          'Transkrip nilai akademik terbaru dengan batas minimal IPK yang disyaratkan.',
          'Formulir persetujuan dosen pembimbing akademik atau koordinator MBKM prodi.',
          'Buku catatan harian (logbook) dan lembar evaluasi berkala dari pembimbing lapangan industri.',
        ],
      },
      {
        heading: '5. Yang Perlu Dipastikan Sebelum Menerima Tempat Magang',
        body: [
          'Sebelum menandatangani offering letter tempat magang, pastikan empat faktor krusial ini terpenuhi:',
        ],
        list: [
          'Relevansi Tugas: Pastikan tugas yang diberikan adalah proyek riil yang relevan dengan jurusan, bukan sekadar pekerjaan fotokopi atau tugas administratif monoton.',
          'Keberadaan Mentor Teknis: Pastikan ada praktisi industri yang ditunjuk sebagai pembimbing harian yang siap mengarahkan dan memberi review berkala.',
          'Hasil Output Terukur: Pastikan ada deliverables konkret yang bisa Anda jadikan bahan bab laporan magang dan bukti portofolio karier.',
          'Sinkronisasi Jadwal: Pastikan jam kerja tidak bentrok dengan jadwal mata kuliah wajib atau kegiatan skripsi yang masih Anda ambil.',
        ],
      },
      {
        heading: '6. Kesalahan yang Sering Terjadi dan Cara Menghindarinya',
        body: [
          'Banyak mahasiswa mengalami kendala konversi nilai akibat mengabaikan langkah-langkah administratif awal:',
          'Kesalahan paling umum adalah mencari tempat magang terlalu mepet dengan batas pengisian KRS, tidak mengonfirmasi mata kuliah yang bisa dikonversi ke ketua prodi, dan menunda pencatatan logbook hingga akhir periode. Mahasiswa yang aktif berkonsultasi sejak awal memiliki peluang lebih tinggi mendapatkan tempat magang industri berkualitas dengan konversi SKS lancar.',
        ],
      },
    ],
    conclusion: 'Setiap perguruan tinggi memiliki ketentuan dan petunjuk teknis MBKM masing-masing. Pendekatan terbaik adalah selalu merujuk pada panduan resmi prodi Anda sambil memilih mitra industri yang berkomitmen membimbing mahasiswa dengan proyek nyata yang bernilai tambah tinggi.',
    faqs: [
      {
        question: 'Apakah magang mandiri bisa dikonversi menjadi nilai SKS MBKM?',
        answer: 'Bisa, asalkan perusahaan tempat magang memiliki legalitas resmi, job description relevan dengan prodi, didampingi mentor berkeahlian, dan telah disetujui oleh ketua program studi sebelum magang dimulai.',
      },
      {
        question: 'Kapan semester paling ideal untuk mengambil program magang MBKM?',
        answer: 'Umumnya mahasiswa mengambil program magang MBKM pada semester 5, 6, atau 7 setelah menuntaskan mata kuliah dasar keilmuan prodi.',
      },
      {
        question: 'Apa keuntungan magang berbasis proyek riil dibanding magang biasa?',
        answer: 'Magang berbasis proyek riil menghasilkan karya nyata yang bisa dipamerkan di CV dan LinkedIn, melatih pemecahan masalah nyata, serta membuka peluang rekrutmen kerja lebih cepat setelah lulus.',
      },
    ],
    ctaBox: {
      badge: 'Konsultasi Magang MBKM',
      title: 'Konsultasikan Rencana Magang Mahasiswa Anda',
      desc: 'Ingin tahu apakah program internship di PixxelPro Malang cocok dengan ketentuan prodi dan konversi SKS kampus Anda? Tim mentor kami siap membantu.',
      btnLabel: 'Konsultasi via WhatsApp',
      btnHref: 'https://wa.me/62895639068080?text=Halo%20PixxelPro,%20saya%20mahasiswa%20ingin%20konsultasi%20program%20magang%20MBKM%20dan%20konversi%20SKS.',
    },
  },
  {
    id: 'post-3',
    slug: 'magang-web-developer-malang',
    title: 'Magang Web Developer di Malang: Proyek Website Nyata dengan Astro dan Bootstrap',
    excerpt: 'Magang web developer di Malang bersama PixxelPro: kerjakan proyek website nyata dengan Astro dan Bootstrap, didampingi mentor. Konsultasi posisi via WhatsApp.',
    category: 'Teknologi & Web',
    categorySlug: 'teknologi-web',
    date: '7 November 2026',
    readTime: '6 menit baca',
    image: '/images/blog/magang-web-developer-malang-pixxelpro.webp',
    secondImage: {
      src: '/images/blog/portofolio-proyek-website-peserta-magang.webp',
      alt: 'Portofolio proyek website hasil peserta magang web developer PixxelPro',
      caption: 'Koleksi karya portofolio website nyata yang dikerjakan peserta magang web development bersama mentor industri PixxelPro.',
    },
    readAlso: {
      title: '10 Ide Proyek PKL RPL yang Bisa Jadi Portofolio Siap Kerja',
      slug: 'ide-proyek-pkl-rpl',
    },
    author: {
      name: 'Erlang Sinatrya',
      role: 'Praktisi RPL di PixxelPro',
      avatar: '/images/penulis/erlang.webp',
    },
    tags: ['Magang Web Developer', 'Web Developer Malang', 'Astro JS', 'Bootstrap', 'Proyek Riil'],
    featured: false,
    intro: 'Magang web developer di PixxelPro, Mojolangu, Kota Malang, terbuka untuk siswa SMK dan mahasiswa. Peserta mengerjakan proyek website nyata dengan pendampingan mentor teknis, mempelajari teknologi modern seperti Astro dan Bootstrap, serta membangun portofolio valid yang siap ditunjukkan ke perekrut kerja.',
    sections: [
      {
        heading: '1. Kenapa Magang Web Developer Perlu Proyek Nyata?',
        body: [
          'Proyek nyata melatih hal penting yang tidak muncul di latihan kelas: terbiasa menerima revisi teknis, menangani bug yang tidak terduga, dan menayangkan karya secara live hingga bisa diakses publik.',
          'Banyak calon web developer sudah paham sintaks pemrograman di atas kertas, tetapi belum pernah menayangkan website sungguhan. Di proyek nyata industri, peserta belajar bahwa pekerjaan coding tidak berhenti saat kode bisa berjalan di komputer lokal, melainkan sampai tampilan rapi dan responsif di layar ponsel, cepat dimuat, mudah ditemukan di Google, serta stabil saat diakses banyak pengunjung.',
        ],
        quote: 'Perekrut web developer tidak mencari siapa yang paling banyak menghafal sintaks, melainkan siapa yang pernah menayangkan proyek nyata dan mampu menjelaskan cara kerjanya.',
      },
      {
        heading: '2. Apa Saja yang Dikerjakan Peserta Magang Web Developer?',
        body: [
          'Selama masa magang di PixxelPro, peserta terlibat langsung dalam tahapan produksi website sesuai kebutuhan proyek yang sedang berjalan:',
        ],
        list: [
          'Slicing & Komponen: Menyusun halaman dan komponen website modular menggunakan HTML5 semantik, CSS modern, dan framework Bootstrap.',
          'Framework Modern: Mempelajari cara membangun static site berkecepatan tinggi menggunakan Astro SSG.',
          'Version Control: Menggunakan Git dan repositori GitHub untuk mengelola branch, commit, dan kolaborasi tim.',
          'SEO Teknis Dasar: Memahami struktur metadata, heading hierarchy (H1-H3), sitemap XML, dan schema markup JSON-LD.',
          'Deployment & Live Testing: Menayangkan website ke cloud platform statis (seperti Cloudflare Pages) dan menguji performa PageSpeed.',
        ],
      },
      {
        heading: '3. Ringkasan Program: Jalur PKL SMK vs Internship Mahasiswa',
        body: [
          'Program magang web development di PixxelPro dirancang dengan kurikulum bertingkat sesuai jenjang pendidikan:',
        ],
        list: [
          'Jalur PKL SMK (RPL/TRPL): Fokus pada penguasaan fundamental HTML/CSS, responsive styling Bootstrap, kolaborasi Git dasar, dan penyusunan dokumentasi laporan resmi PKL sekolah.',
          'Jalur Internship Mahasiswa (Informatika/SI): Fokus pada arsitektur modern Astro, performa Core Web Vitals, implementasi SEO on-page teknis, serta penyusunan portofolio terapan untuk laporan konversi SKS MBKM.',
        ],
      },
      {
        heading: '4. Contoh Proyek Nyata yang Dikerjakan di PixxelPro',
        body: [
          'Peserta magang di PixxelPro berkesempatan berkontribusi pada pengembangan sistem dan portal digital aktif:',
        ],
        list: [
          'Aplikasi Pendaftaran Event QRIS Run: Sistem pendaftaran pelari dengan integrasi validasi data dan antarmuka responsif cepat.',
          'Portal Kompetisi Akademik Radar Kediri: Website informasi lomba dan verifikasi peserta berskala ribuan pengguna.',
          'Website Katalog Produk Seminarkits.id: Optimasi kecepatan loading katalog e-commerce lokal berbasis arsitektur statis modern.',
        ],
      },
      {
        heading: '5. Pendampingan Mentor Teknis Selama Magang',
        body: [
          'Mentor industri membimbing alur kerja harian peserta: mulai dari membaca brief, menulis kode, memecahkan error/debugging, hingga proses deployment.',
          'Pendampingan intensif ini sangat krusial, terutama bagi peserta yang baru pertama kali mengerjakan proyek standar industri. Saat menemukan error atau kendala teknis, peserta tidak dibiarkan menebak-nebak sendiri, melainkan dibimbing memahami akar masalah dan best practice solusinya. Kami juga memberikan lembar penilaian resmi dan asistensi penyusunan laporan magang.',
        ],
      },
      {
        heading: '6. Cara Mendaftar Magang Web Developer di PixxelPro',
        body: [
          'Proses pendaftaran dirancang praktis langsung melalui kanal WhatsApp resmi:',
        ],
        list: [
          'Langkah 1: Tentukan jalur yang diminati (PKL SMK atau Internship Mahasiswa bidang Web Development).',
          'Langkah 2: Siapkan berkas pengantar dari sekolah/kampus atau Curriculum Vitae (CV) singkat.',
          'Langkah 3: Hubungi admin PixxelPro via WhatsApp untuk menanyakan ketersediaan kuota workstation dan konfirmasi jadwal gelombang.',
        ],
      },
      {
        heading: '7. Apa yang Membedakan Pengalaman Magang di PixxelPro?',
        body: [
          'Empat pilar utama yang menjadikan pengalaman magang di PixxelPro bernilai tinggi bagi masa depan karier Anda:',
        ],
        list: [
          'Proyek Riil: Memberikan pengalaman teknis nyata yang relevan dengan kebutuhan industri digital, bukan tugas administratif.',
          'Mentoring Teknis 1-on-1: Membantu peserta berkembang jauh lebih cepat dibanding belajar otodidak sendirian.',
          'Dukungan Dokumen Lengkap: Memastikan seluruh persyaratan administratif sekolah atau konversi SKS kampus terpenuhi tepat waktu.',
          'Portofolio Siap Kerja: Menghasilkan karya nyata yang bisa diakses publik dan dicantumkan pada CV serta LinkedIn.',
        ],
      },
    ],
    conclusion: 'Magang web developer yang baik harus memberi Anda jam terbang teknis nyata dan portofolio yang dapat diakses publik. Di PixxelPro Mojolangu Malang, kami memastikan setiap baris kode yang Anda pelajari memiliki nilai guna riil bagi kesiapan karier Anda di industri teknologi.',
    faqs: [
      {
        question: 'Apakah harus sudah mahir coding sebelum mendaftar magang web developer?',
        answer: 'Tidak harus mahir, tetapi disarankan memiliki pemahaman dasar logika pemrograman dan dasar HTML/CSS. Selama masa magang, mentor akan mendampingi peningkatan skill teknis Anda.',
      },
      {
        question: 'Teknologi apa saja yang paling banyak digunakan di PixxelPro?',
        answer: 'Kami fokus pada teknologi web modern yang cepat dan efisien: Astro SSG, Bootstrap, Tailwind, modern CSS, Git/GitHub, dan Cloudflare Pages.',
      },
      {
        question: 'Bagaimana cara konfirmasi kuota dan jadwal magang web developer?',
        answer: 'Pendaftaran dilakukan langsung melalui WhatsApp resmi PixxelPro (+62 895-6390-68080) tanpa perlu membuat akun formulir online yang rumit.',
      },
    ],
    ctaBox: {
      badge: 'Pendaftaran Magang Web Developer',
      title: 'Tanyakan Kuota dan Posisi Magang Web Developer di Malang',
      desc: 'Ingin magang dengan proyek website sungguhan dan didampingi mentor praktisi? Hubungi tim PixxelPro di Mojolangu, Kota Malang untuk konfirmasi kuota.',
      btnLabel: 'Tanya Kuota via WhatsApp',
      btnHref: 'https://wa.me/62895639068080?text=Halo%20PixxelPro,%20saya%20ingin%20menanyakan%20ketersediaan%20kuota%20dan%20posisi%20magang%20Web%20Developer.',
    },
  },
];
