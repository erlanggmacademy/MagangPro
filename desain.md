# Design System MagangPro

## Panduan desain website berdasarkan referensi Sparks English

**Brand:** MagangPro\
**Domain:** https://programmagang.web.id/\
**Referensi desain:** https://sparks-edu.com/\
**Tanggal dokumen:** 29 Oktober 2026\
**Implementasi:** Astro SSG + BootstrapMade HTML/CSS\
**Palet brand MagangPro:** Putih dan merah --- dipertahankan sesuai PRD

------------------------------------------------------------------------

## 1. Tujuan Dokumen

Dokumen ini menerjemahkan referensi visual Sparks English menjadi
panduan desain untuk MagangPro. Tujuannya bukan menyalin identitas atau
aset referensi secara persis, melainkan mengambil inspirasi dari pola
presentasi, hirarki konten, struktur landing page, kartu program, CTA,
dan pengalaman responsif lalu mengadaptasinya ke brand MagangPro.

MagangPro mempunyai dua fokus: 1. Program magang untuk siswa SMK dan
mahasiswa. 2. Pelatihan digital marketing untuk UMKM, instansi, dan
perusahaan.

Karena target pengguna mencakup siswa, mahasiswa, dan organisasi,
tampilannya harus terasa modern, mudah dipahami, terpercaya,
profesional, dan tetap ramah.

## 2. Hasil Peninjauan Referensi

Referensi: [Sparks English](https://sparks-edu.com/)

Halaman referensi yang dapat ditemukan melalui hasil pencarian
memperlihatkan pola konten berikut: - Hero dengan pesan utama yang
langsung menjelaskan manfaat. - Angka atau ringkasan nilai yang membantu
membangun kepercayaan. - Penjelasan masalah atau alasan pengguna
membutuhkan layanan. - Kartu program yang dibedakan berdasarkan kelompok
pengguna. - Perbandingan pendekatan/keunggulan. - Bagian lokasi atau
cara memulai. - CTA berulang yang mengarahkan pengguna ke langkah
berikutnya.

Pola-pola tersebut cocok diadaptasi menjadi landing page MagangPro,
misalnya kartu program SMK dan mahasiswa, kartu posisi magang, blok
kompetensi, alur pendaftaran, dan CTA WhatsApp.

**Batasan pemeriksaan font:** akses otomatis ke situs referensi tidak
berhasil menampilkan stylesheet atau computed CSS secara langsung.
Karena itu, nama font yang tepat dari sparks-edu.com belum dapat
diverifikasi secara andal. Jangan menganggap nama font dari situs lain
yang kebetulan bernama "Spark" sebagai font milik sparks-edu.com.
Sebelum implementasi final, periksa font yang benar melalui browser
DevTools pada situs referensi: pilih elemen heading/body, lalu lihat tab
**Computed → font-family** dan tab **Network → Font**. Panduan di bawah
menyediakan rekomendasi implementasi yang selaras secara visual sambil
menunggu verifikasi tersebut.

## 3. Arah Art Direction MagangPro

### Kata kunci visual

-   Clean
-   Modern
-   Edukasi dan profesional
-   Berorientasi aksi
-   Layout lapang
-   Kartu program yang mudah dipindai
-   Tipografi tegas
-   Ilustrasi/foto yang relevan
-   CTA yang jelas
-   Mobile-first

### Prinsip adaptasi

1.  Ambil inspirasi dari susunan dan hirarki halaman, bukan menyalin
    logo, copywriting, ilustrasi, foto, atau aset eksklusif referensi.
2.  Pertahankan identitas MagangPro dengan warna merah-putih dari PRD.
3.  Gunakan komponen konsisten untuk program, posisi, layanan, artikel,
    dan portofolio.
4.  Hindari terlalu banyak variasi radius, shadow, warna aksen, dan
    animasi.
5.  Prioritaskan keterbacaan dan jalur pendaftaran yang jelas.

## 4. Design Tokens

### 4.1 Warna

Palet berikut tetap mengikuti PRD MagangPro.

  Token CSS         Nilai       Pemakaian
  ----------------- ----------- ----------------------------------
  `--mp-red`        `#C62828`   CTA utama, tautan penting, aksen
  `--mp-red-dark`   `#B71C1C`   Hover/focus tombol merah
  `--mp-red-soft`   `#FCE7E7`   Latar ikon dan highlight
  `--mp-white`      `#FFFFFF`   Latar utama
  `--mp-ink`        `#1F2937`   Heading dan teks utama
  `--mp-text`       `#374151`   Teks isi
  `--mp-muted`      `#6B7280`   Teks sekunder
  `--mp-border`     `#E5E7EB`   Border kartu dan divider
  `--mp-surface`    `#F9FAFB`   Section alternatif
  `--mp-success`    `#15803D`   Status positif jika dibutuhkan
  `--mp-focus`      `#1D4ED8`   Focus ring aksesibilitas

### Rasio penggunaan warna

-   70--80% putih atau latar netral.
-   10--20% abu-abu muda dan border.
-   Merah digunakan untuk CTA, highlight, ikon tertentu, dan penanda
    penting.

Jangan menggunakan merah untuk semua heading atau seluruh latar. Merah
harus menjadi warna aksi agar CTA lebih mudah ditemukan.

### CSS tokens

``` css
:root {
  --mp-red: #c62828;
  --mp-red-dark: #b71c1c;
  --mp-red-soft: #fce7e7;
  --mp-white: #ffffff;
  --mp-ink: #1f2937;
  --mp-text: #374151;
  --mp-muted: #6b7280;
  --mp-border: #e5e7eb;
  --mp-surface: #f9fafb;
  --mp-focus: #1d4ed8;

  --mp-font-heading: "Plus Jakarta Sans", sans-serif;
  --mp-font-body: "Inter", sans-serif;

  --mp-container: 1200px;
  --mp-section-space: clamp(64px, 8vw, 104px);
  --mp-radius-sm: 10px;
  --mp-radius-md: 16px;
  --mp-radius-lg: 24px;
  --mp-shadow-card: 0 8px 28px rgb(31 41 55 / 7%);
  --mp-shadow-hover: 0 14px 36px rgb(31 41 55 / 12%);
}
```

## 5. Tipografi

### 5.1 Status font referensi

Nama font asli Sparks English belum terverifikasi dari CSS yang dapat
diakses. Untuk benar-benar menggunakan font yang sama, lakukan
pemeriksaan `font-family` melalui DevTools pada heading dan body situs
referensi sebelum memilih berkas font. Pastikan lisensi font mengizinkan
penggunaan di website MagangPro.

### 5.2 Rekomendasi sementara untuk MagangPro

Gunakan **Plus Jakarta Sans** untuk heading dan **Inter** untuk body
sebagai pasangan sementara. Keduanya mudah diterapkan lewat Google Fonts
dan sesuai untuk situs modern berbahasa Indonesia. Jika hasil
pemeriksaan situs referensi menunjukkan font lain, ubah token font saja
tanpa merombak seluruh stylesheet.

  Elemen          Font                    Weight   Ukuran desktop   Line-height
  --------------- ------------------- ---------- ---------------- -------------
  H1 hero         Plus Jakarta Sans     700--800        48--64 px    1.08--1.16
  H2 section      Plus Jakarta Sans     700--800        34--44 px    1.15--1.25
  H3/card title   Plus Jakarta Sans     650--700        20--24 px     1.25--1.4
  Body utama      Inter                      400        16--18 px     1.65--1.8
  Body kecil      Inter                      400        14--15 px     1.55--1.7
  Label/eyebrow   Inter                 600--700        12--14 px           1.4
  Tombol          Inter                 600--700        14--16 px           1.2

### 5.3 Skala responsif

``` css
h1,
.heading-xl {
  font-size: clamp(2.5rem, 5vw, 4rem);
  line-height: 1.1;
  letter-spacing: -0.035em;
}

h2,
.heading-lg {
  font-size: clamp(2rem, 3.5vw, 2.75rem);
  line-height: 1.18;
  letter-spacing: -0.025em;
}

h3,
.heading-md {
  font-size: clamp(1.25rem, 2vw, 1.5rem);
  line-height: 1.3;
}

body {
  font-family: var(--mp-font-body);
  color: var(--mp-text);
  font-size: 16px;
  line-height: 1.75;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: var(--mp-font-heading);
  color: var(--mp-ink);
  font-weight: 750;
}
```

### 5.4 Penggunaan font

-   Batasi maksimal dua keluarga font utama.
-   Jangan memakai font display dekoratif untuk paragraf panjang.
-   Hindari body text terlalu tipis atau terlalu kecil.
-   Untuk performa, muat hanya bobot font yang digunakan.
-   Gunakan `font-display: swap` jika self-hosting font.
-   Jika memakai Google Fonts, gunakan subset dan bobot secukupnya;
    pertimbangkan self-hosting untuk kontrol performa dan privasi.

## 6. Layout dan Spacing

### Container

-   Lebar maksimum konten: sekitar 1200 px.
-   Padding horizontal desktop: 32 px.
-   Tablet: 24 px.
-   Mobile: 18--20 px.
-   Grid: 12 kolom desktop, 6 kolom tablet, 4 kolom mobile jika
    diperlukan.
-   Jarak antar-section: 64--104 px desktop dan 48--72 px mobile.

``` css
.mp-container {
  width: min(calc(100% - 40px), var(--mp-container));
  margin-inline: auto;
}

.mp-section {
  padding-block: var(--mp-section-space);
}

.mp-section--soft {
  background: var(--mp-surface);
}
```

### Bentuk komponen

-   Radius tombol: 10--14 px.
-   Radius kartu: 16--24 px.
-   Border: 1 px solid `--mp-border`.
-   Shadow ringan, tidak terlalu kontras.
-   Jarak isi kartu: 22--28 px.
-   Hover: perubahan border, shadow, atau posisi sangat ringan; jangan
    mengandalkan gerakan untuk menyampaikan informasi.

## 7. Header dan Navigasi

### Desktop

-   Header putih dengan logo MagangPro di kiri.
-   Menu utama di tengah atau kanan.
-   CTA merah "Hubungi Kami" di ujung kanan.
-   Header dapat sticky jika tidak menutupi konten dan tidak menambah
    beban visual.
-   Dropdown memiliki area klik yang cukup, indikator chevron, dan
    dukungan keyboard.

Menu: - Beranda - Tentang Kami - Jasa ▾ - Program Magang ▾ -
Portofolio - Galeri - Blog - Hubungi Kami (CTA)

### Mobile

-   Logo di kiri dan tombol menu di kanan.
-   Menu terbuka dalam panel atau drawer yang jelas.
-   Dropdown menjadi accordion.
-   CTA WhatsApp mudah ditemukan tanpa menutupi konten.
-   Ukuran target sentuh ideal sekitar 44 × 44 px atau lebih.

## 8. Hero Section

### Tujuan

Dalam beberapa detik, pengunjung harus memahami: 1. MagangPro menawarkan
program apa. 2. Siapa targetnya. 3. Apa tindakan selanjutnya.

### Struktur

-   Eyebrow kecil: `PROGRAM MAGANG SMK & MAHASISWA`
-   H1 besar, maksimal sekitar 2--4 baris di desktop.
-   Deskripsi singkat 1--3 kalimat.
-   CTA utama merah: `Konsultasi via WhatsApp`
-   CTA sekunder: `Jelajahi Program`
-   Visual pendukung berupa foto aktivitas, kolase proyek, atau
    ilustrasi orisinal yang relevan.

### Copy awal

**H1:** Bangun Keterampilan Digital dan Teknologi Bersama MagangPro

**Deskripsi:** Temukan informasi program magang dan pembelajaran di
bidang teknologi, pemasaran digital, bisnis digital, dan desain.
MagangPro juga menyediakan pelatihan digital marketing untuk UMKM,
instansi, dan perusahaan.

### Layout

Desktop dapat menggunakan dua kolom: copy di kiri, visual di kanan. Pada
mobile, tampilkan copy dan CTA terlebih dahulu, kemudian visual. Jangan
membuat teks utama menjadi bagian dari gambar.

## 9. Struktur Beranda

Urutan yang direkomendasikan:

1.  Header dan navigasi.
2.  Hero.
3.  Trust/overview strip: ringkasan program dan layanan yang benar-benar
    tersedia.
4.  Section "Pilih Programmu": Magang SMK/PKL dan Internship Mahasiswa.
5.  Section posisi magang: kartu bidang RPL, TKJ, Informatika, Digital
    Marketing, Bisnis Digital, Pemasaran, Multimedia, dan DKV sesuai
    ketersediaan.
6.  Section pelatihan digital marketing untuk UMKM, instansi, dan
    perusahaan.
7.  Section kompetensi yang dipelajari.
8.  Section alur pendaftaran.
9.  Portofolio atau studi kasus nyata.
10. Galeri kegiatan yang telah mendapat izin publikasi.
11. Artikel terbaru.
12. FAQ.
13. CTA penutup.
14. Footer.

Jangan menampilkan angka peserta, mitra, sertifikat, tingkat
keberhasilan, testimoni, atau logo klien kecuali data tersebut benar dan
memiliki izin penggunaan.

## 10. Kartu Program, Posisi, dan Jasa

### Kartu program

Setiap kartu menampilkan: - Ikon atau gambar. - Nama program. -
Ringkasan manfaat. - Informasi target peserta. - Link "Pelajari
Program". - CTA WhatsApp bila relevan.

### Kartu posisi magang

Tampilkan: - Nama posisi. - Jurusan/kompetensi terkait. - Ringkasan
kegiatan. - Kompetensi yang akan dipelajari. - Persyaratan. - Status:
dibuka, ditutup, atau informasi menyusul---hanya bila status diperbarui
secara nyata. - CTA untuk bertanya.

Jika tidak ada sistem lowongan real-time, jangan membuat label "tersedia
sekarang" secara otomatis. Gunakan "Tanyakan ketersediaan posisi".

### Kartu jasa

Tampilkan: - Nama layanan. - Masalah yang dibantu. - Ruang lingkup
layanan. - Link ke detail. - CTA konsultasi.

Gunakan desain kartu yang konsisten, tetapi hindari semua kartu memiliki
deskripsi panjang yang seragam dan repetitif.

## 11. Section Alur Pendaftaran

Gunakan urutan visual yang mudah diikuti: 1. Kenali program dan posisi.
2. Periksa persyaratan. 3. Hubungi MagangPro melalui WhatsApp. 4. Ikuti
arahan dan proses seleksi yang diberikan. 5. Konfirmasi jadwal dan
ketentuan program.

Sesuaikan langkah dengan proses pendaftaran yang benar-benar dijalankan.
Jangan menjanjikan penerimaan otomatis atau mengklaim adanya seleksi
tertentu sebelum dikonfirmasi.

## 12. CTA WhatsApp

Nomor tujuan: `+62 895-6390-68080`\
URL: `https://wa.me/62895639068080`

Gaya tombol: - Background `--mp-red`. - Teks putih dengan kontras
tinggi. - Radius 10--14 px. - Font weight 600--700. - Padding sekitar
14--18 px vertikal dan 20--24 px horizontal. - Hover `--mp-red-dark`. -
Focus ring yang jelas. - Ikon WhatsApp boleh digunakan jika berasal dari
aset/icon library yang sah.

Contoh pesan: - Umum: "Halo MagangPro, saya ingin bertanya tentang
program magang." - SMK: "Halo MagangPro, saya ingin informasi program
PKL SMK." - Mahasiswa: "Halo MagangPro, saya ingin bertanya tentang
internship mahasiswa." - Pelatihan: "Halo MagangPro, saya ingin
berkonsultasi tentang pelatihan digital marketing."

Semua tombol kontak harus menggunakan nomor yang sama melalui satu
komponen Astro reusable.

## 13. Portofolio, Galeri, dan Blog

### Portofolio

-   Utamakan proyek asli.
-   Gunakan gambar thumbnail dengan rasio konsisten.
-   Tampilkan konteks, masalah, proses, solusi, dan hasil jika tersedia.
-   Jangan menyajikan konsep latihan sebagai proyek klien nyata.
-   Jika proyek dikerjakan peserta, pastikan izin publikasi dan atribusi
    sesuai.

### Galeri

-   Gunakan grid responsif.
-   Optimalkan gambar dan tetapkan dimensi.
-   Tambahkan alt text yang menjelaskan isi gambar.
-   Gunakan lightbox hanya jika diperlukan dan tetap mendukung keyboard.
-   Hindari menampilkan data pribadi peserta tanpa izin.

### Blog

-   Layout artikel fokus pada keterbacaan.
-   Kolom konten sekitar 680--760 px untuk artikel panjang.
-   Tampilkan judul, tanggal, kategori, penulis yang benar, dan gambar
    utama bila relevan.
-   Gunakan daftar isi untuk artikel panjang.
-   Rekomendasikan artikel terkait berdasarkan topik.
-   Hindari pop-up yang menghalangi isi.

## 14. Footer

Footer menggunakan latar putih atau abu-abu sangat muda dengan: - Logo
dan deskripsi MagangPro. - Navigasi Program Magang. - Navigasi Jasa. -
Artikel atau sumber belajar. - Lokasi: Mojolangu, Kota Malang, Jawa
Timur 65142. - Link WhatsApp. - Kebijakan Privasi dan Syarat &
Ketentuan. - Copyright dengan tahun yang dihasilkan secara dinamis.

Jangan menampilkan alamat lengkap, email, akun sosial, atau jam
operasional yang belum diverifikasi.

## 15. Responsivitas

### Breakpoint awal

Sesuaikan dengan Bootstrap yang digunakan: - Mobile: sampai 575 px. -
Tablet: 576--991 px. - Desktop: 992--1199 px. - Desktop lebar: 1200 px
ke atas.

### Kriteria

-   Tidak ada horizontal overflow.
-   H1 tidak terlalu besar atau memotong kata.
-   Kartu berubah menjadi satu kolom di ponsel bila ruang sempit.
-   Dropdown tidak terpotong viewport.
-   CTA tetap mudah dijangkau.
-   Gambar tidak mendorong layout saat dimuat.
-   Ukuran teks body tetap nyaman dibaca.
-   Header tidak menghabiskan terlalu banyak tinggi layar.

## 16. Motion dan Interaksi

-   Transisi umum: 160--240 ms.
-   Animasi hanya memperjelas perubahan state atau memberi feedback.
-   Hindari animasi scroll yang berat dan autoplay video.
-   Hargai `prefers-reduced-motion`.
-   Jangan menyembunyikan konten utama sampai animasi berjalan.
-   Semua kontrol harus memiliki hover, focus, active, dan disabled
    state bila sesuai.

``` css
.mp-button {
  transition:
    background-color 180ms ease,
    box-shadow 180ms ease,
    transform 180ms ease;
}

.mp-button:hover {
  background-color: var(--mp-red-dark);
}

.mp-button:focus-visible,
.mp-link:focus-visible {
  outline: 3px solid var(--mp-focus);
  outline-offset: 3px;
}

@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    scroll-behavior: auto !important;
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

## 17. Aksesibilitas

-   Gunakan HTML semantik.
-   Sediakan skip link ke konten utama.
-   Setiap input harus mempunyai label jika ada form di masa depan.
-   Pastikan seluruh menu dapat digunakan dengan keyboard.
-   Jangan menggunakan warna sebagai satu-satunya indikator status.
-   Pastikan kontras teks dan tombol cukup.
-   Gunakan alt text untuk gambar informatif dan alt kosong untuk gambar
    dekoratif.
-   Gunakan H1 yang jelas dan hierarki heading yang logis.
-   Hindari teks CTA generik seperti "Klik di sini" bila konteksnya bisa
    dibuat lebih jelas.

## 18. Performa Visual

-   Gunakan gambar WebP/AVIF jika cocok.
-   Tetapkan `width` dan `height` untuk gambar.
-   Jangan lazy-load gambar hero utama bila gambar tersebut menjadi
    elemen LCP.
-   Lazy-load gambar di bawah fold.
-   Batasi font weight yang dimuat.
-   Pangkas CSS dan JavaScript template BootstrapMade yang tidak
    digunakan.
-   Hindari library animasi besar jika CSS sederhana sudah cukup.
-   Gunakan komponen Astro statis bila interaktivitas tidak diperlukan.
-   Uji Core Web Vitals pada perangkat nyata dan data lapangan bila
    tersedia.

Target proyek awal: - Lighthouse Performance ≥ 90 pada pengujian
representatif. - Tidak ada layout shift yang mengganggu. - Navigasi dan
CTA dapat digunakan pada koneksi mobile. - Core Web Vitals dipantau
setelah trafik tersedia.

Target tersebut bukan jaminan nilai yang selalu sama di semua perangkat.

## 19. Integrasi Astro dan BootstrapMade

-   Gunakan Astro untuk layout, routing, content collections, dan build
    statis.
-   Gunakan BootstrapMade sebagai titik awal desain, bukan alasan untuk
    memuat seluruh aset yang tidak diperlukan.
-   Pisahkan komponen: `Header.astro`, `Footer.astro`, `Hero.astro`,
    `ProgramCard.astro`, `ServiceCard.astro`, `BlogCard.astro`,
    `WhatsAppButton.astro`.
-   Simpan design tokens di `src/styles/global.css`.
-   Simpan variasi visual komponen di CSS lokal.
-   Gunakan data lokal untuk menu, program, layanan, dan FAQ.
-   Gunakan Markdown/MDX untuk artikel.
-   Pastikan seluruh halaman publik memiliki layout dan tipografi yang
    konsisten.

## 20. Contoh CSS Dasar

``` css
:root {
  --mp-red: #c62828;
  --mp-red-dark: #b71c1c;
  --mp-red-soft: #fce7e7;
  --mp-white: #fff;
  --mp-ink: #1f2937;
  --mp-text: #374151;
  --mp-muted: #6b7280;
  --mp-border: #e5e7eb;
  --mp-surface: #f9fafb;
  --mp-radius-card: 20px;
}

body {
  margin: 0;
  color: var(--mp-text);
  background: var(--mp-white);
  font-family: "Inter", sans-serif;
  line-height: 1.75;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  color: var(--mp-ink);
  font-family: "Plus Jakarta Sans", sans-serif;
  font-weight: 750;
  line-height: 1.2;
}

.mp-section {
  padding-block: clamp(64px, 8vw, 104px);
}

.mp-card {
  height: 100%;
  padding: 24px;
  background: var(--mp-white);
  border: 1px solid var(--mp-border);
  border-radius: var(--mp-radius-card);
  box-shadow: 0 8px 28px rgb(31 41 55 / 6%);
  transition: box-shadow 180ms ease, transform 180ms ease;
}

.mp-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 14px 36px rgb(31 41 55 / 10%);
}

.mp-button-primary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  min-height: 48px;
  padding: 14px 22px;
  color: var(--mp-white);
  background: var(--mp-red);
  border: 1px solid var(--mp-red);
  border-radius: 12px;
  font-weight: 700;
  text-decoration: none;
}

.mp-button-primary:hover {
  color: var(--mp-white);
  background: var(--mp-red-dark);
  border-color: var(--mp-red-dark);
}
```

## 21. Acceptance Criteria Desain

-   [ ] Identitas MagangPro jelas dan konsisten.
-   [ ] Warna putih-merah sesuai PRD.
-   [ ] Font referensi diverifikasi melalui browser sebelum finalisasi;
    fallback sementara terdokumentasi.
-   [ ] Heading, body, tombol, dan label memakai skala tipografi
    konsisten.
-   [ ] Hero menjelaskan program dan target pengguna.
-   [ ] Program SMK dan mahasiswa mudah dibedakan.
-   [ ] Pelatihan digital marketing untuk organisasi terlihat sebagai
    layanan utama.
-   [ ] CTA WhatsApp terlihat dan mengarah ke nomor yang benar.
-   [ ] Kartu program, jasa, portofolio, dan blog konsisten.
-   [ ] Navigasi mobile dan dropdown desktop berfungsi.
-   [ ] Semua halaman nyaman dibaca di ponsel.
-   [ ] Tidak ada klaim, statistik, testimoni, atau logo yang belum
    terverifikasi.
-   [ ] Tidak ada gambar atau font yang digunakan tanpa hak/lisensi yang
    sesuai.
-   [ ] Animasi tidak menghalangi konten atau aksesibilitas.
-   [ ] Performa dan aksesibilitas diuji sebelum rilis.

## 22. Sumber dan Catatan

-   Referensi visual: https://sparks-edu.com/
-   PRD MagangPro: identitas brand, palet merah-putih, target pengguna,
    struktur halaman, dan CTA WhatsApp.
-   Panduan tipografi aksesibel:
    https://www.progress.com/blogs/best-practices-choosing-typography-education-websites-apps
-   Google Fonts (untuk memeriksa ketersediaan dan lisensi font):
    https://fonts.google.com/

**Keputusan desain:** MagangPro menggunakan pendekatan landing page
edukasi modern dengan hero yang kuat, kartu program, konten berhirarki,
CTA berulang, dan layout responsif. Warna tetap merah-putih sesuai PRD.
Nama font asli situs referensi perlu dikonfirmasi melalui DevTools
sebelum dinyatakan sebagai font final; sampai saat itu Plus Jakarta
Sans + Inter adalah rekomendasi sementara, bukan klaim bahwa Sparks
English memakai font tersebut.
