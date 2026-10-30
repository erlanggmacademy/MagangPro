# PRD MagangPro

## Website Program Magang SMK & Mahasiswa dan Pelatihan Digital Marketing

**Versi:** 1.1\
**Tanggal pembaruan:** 29 Oktober 2026\
**Brand:** MagangPro\
**Domain produksi:** https://programmagang.web.id/\
**Lokasi:** Mojolangu, Kota Malang, Jawa Timur 65142\
**Framework:** Astro\
**UI:** BootstrapMade HTML/CSS yang disesuaikan\
**Arsitektur:** Website statis (SSG), tanpa database\
**CTA utama:** WhatsApp +62 895-6390-68080

------------------------------------------------------------------------

## 1. Ringkasan Produk

MagangPro adalah website informasi dan pemasaran untuk program magang
siswa SMK dan mahasiswa serta pelatihan digital marketing bagi UMKM,
instansi, dan perusahaan. Website difokuskan pada informasi program,
posisi dan kompetensi, jasa digital, portofolio, galeri, artikel
edukasi, dan konversi pengunjung menjadi prospek melalui WhatsApp.

Website dibangun menggunakan Astro dengan Static Site Generation (SSG).
BootstrapMade menjadi fondasi visual, kemudian disesuaikan dengan
identitas MagangPro. Konten dikelola melalui file Markdown/MDX dan file
data lokal sehingga versi awal tidak membutuhkan database maupun
backend.

### Identitas resmi

  -----------------------------------------------------------------------
  Elemen                              Nilai
  ----------------------------------- -----------------------------------
  Brand                               MagangPro

  Domain                              `https://programmagang.web.id/`

  Lokasi                              Mojolangu, Kota Malang, Jawa Timur
                                      65142

  Identitas                           Program Magang SMK dan Mahasiswa;
                                      Pelatihan Digital Marketing untuk
                                      UMKM, Instansi, dan Perusahaan

  Kontak WhatsApp                     `+62 895-6390-68080`

  Bahasa utama                        Bahasa Indonesia

  Warna                               Putih kombinasi merah

  Framework                           Astro

  UI                                  BootstrapMade HTML/CSS

  Database                            Tidak ada untuk MVP

  Konversi utama                      Klik WhatsApp
  -----------------------------------------------------------------------

**Catatan:** Informasi tentang badan hukum, email, logo, media sosial
resmi, jadwal, biaya, sertifikat, uang saku, kemitraan, dan ketersediaan
posisi belum ditentukan. Jangan menerbitkan klaim tersebut sebelum
diverifikasi.

## 2. Tujuan Produk

1.  Menarik calon peserta program magang SMK/PKL dan internship
    mahasiswa.
2.  Menjelaskan posisi, kompetensi, persyaratan, durasi, dan alur
    pendaftaran secara transparan.
3.  Mempromosikan pelatihan digital marketing untuk UMKM, instansi, dan
    perusahaan.
4.  Menampilkan jasa digital dan portofolio yang dapat diverifikasi.
5.  Membangun trafik organik melalui artikel yang bermanfaat.
6.  Mengarahkan calon peserta dan calon klien ke WhatsApp.
7.  Menyediakan fondasi website yang mudah dipelihara tanpa database.

### KPI awal

  -----------------------------------------------------------------------
  KPI                                 Sasaran awal
  ----------------------------------- -----------------------------------
  Lighthouse Performance              ≥ 90 pada pengujian representatif

  Lighthouse SEO                      ≥ 95

  Lighthouse Accessibility            ≥ 90

  Core Web Vitals                     Memenuhi ambang batas Google

  CTA WhatsApp                        Semua CTA utama berfungsi

  Broken link                         0 pada halaman publik

  Konten blog                         4--8 artikel berkualitas/bulan bila
                                      kapasitas memungkinkan

  Indeksasi                           Seluruh halaman penting yang layak
                                      diindeks dapat ditemukan Google
  -----------------------------------------------------------------------

Sasaran di atas adalah target proyek, bukan jaminan peringkat atau
jumlah pendaftar.

## 3. Target Pengguna

### A. Siswa SMK

Jurusan yang relevan antara lain: - Rekayasa Perangkat Lunak (RPL) -
Teknik Komputer dan Jaringan (TKJ) - Multimedia - Desain Komunikasi
Visual (DKV) - Pemasaran - Bisnis Digital

Kebutuhan: informasi tempat PKL, posisi, kompetensi, persyaratan
sekolah, durasi, pembimbing, proyek praktik, dan bukti kegiatan bila
tersedia.

### B. Mahasiswa

Prioritas jurusan: - Informatika / Ilmu Komputer - Sistem Informasi -
Digital Marketing - Bisnis Digital - Pemasaran - Desain Komunikasi
Visual - Multimedia dan jurusan relevan lainnya

Kebutuhan: informasi internship, ruang lingkup proyek, kompetensi,
persyaratan, proses seleksi, durasi, dan hasil belajar.

### C. UMKM, instansi, dan perusahaan

Kebutuhan: informasi pelatihan digital marketing, pilihan layanan, ruang
lingkup pelatihan, portofolio, metode kerja, serta konsultasi.

## 4. Sitemap dan Arsitektur Informasi

### Menu utama

1.  Beranda
2.  Tentang Kami
3.  Jasa (dropdown)
4.  Program Magang (dropdown)
5.  Portofolio
6.  Galeri
7.  Blog
8.  CTA Hubungi Kami

### Halaman inti

  -----------------------------------------------------------------------------------------
  Halaman                             URL
  ----------------------------------- -----------------------------------------------------
  Beranda                             `/`

  Tentang Kami                        `/tentang-kami/`

  Jasa                                `/jasa/`

  Program Magang                      `/program-magang/`

  Magang SMK / PKL                    `/program-magang/magang-smk-pkl/`

  Internship Mahasiswa                `/program-magang/internship-mahasiswa/`

  Posisi Magang                       `/program-magang/posisi/`

  Kompetensi yang Dipelajari          `/program-magang/kompetensi/`

  Alur Pendaftaran                    `/program-magang/alur-pendaftaran/`

  Persyaratan                         `/program-magang/persyaratan/`

  Durasi dan Jadwal                   `/program-magang/durasi-jadwal/`

  Pelatihan Digital Marketing         `/pelatihan-digital-marketing/`

  Pelatihan untuk UMKM                `/pelatihan-digital-marketing/umkm/`

  Pelatihan untuk Instansi dan        `/pelatihan-digital-marketing/instansi-perusahaan/`
  Perusahaan                          

  Portofolio                          `/portofolio/`

  Galeri                              `/galeri/`

  Kontak                              `/kontak/`

  Blog                                `/blog/`

  Kebijakan Privasi                   `/kebijakan-privasi/`

  Syarat dan Ketentuan                `/syarat-ketentuan/`

  Halaman 404                         `/404.html`
  -----------------------------------------------------------------------------------------

### Dropdown Jasa

-   Digital Marketing --- `/jasa/digital-marketing/`
-   SEO --- `/jasa/seo/`
-   Social Media Marketing --- `/jasa/social-media-marketing/`
-   Web Development --- `/jasa/web-development/`
-   Content Marketing --- `/jasa/content-marketing/`
-   Digital Advertising --- `/jasa/digital-advertising/`
-   Graphic Design --- `/jasa/graphic-design/`
-   UI/UX Design --- `/jasa/ui-ux-design/`
-   Video Editing & Motion Graphics --- `/jasa/video-editing/`
-   Copywriting --- `/jasa/copywriting/`
-   Email Marketing --- `/jasa/email-marketing/`
-   Analytics & Reporting --- `/jasa/analytics-reporting/`
-   Branding --- `/jasa/branding/`

Halaman detail hanya diterbitkan bila ada layanan nyata dan konten unik.
Hindari halaman tipis yang hanya mengganti nama layanan.

### Dropdown Program Magang

-   Informasi Magang
-   Magang SMK / PKL
-   Internship Mahasiswa
-   Posisi Magang
-   Kompetensi yang Dipelajari
-   Alur Pendaftaran
-   Persyaratan
-   Durasi & Jadwal
-   Output dan Portofolio
-   FAQ Program
-   Panduan untuk Sekolah/Kampus

Dropdown desktop harus dapat digunakan dengan keyboard. Pada mobile,
gunakan menu accordion yang mudah disentuh.

## 5. Struktur Halaman Beranda

Urutan section yang direkomendasikan:

1.  Header dan navigasi.
2.  Hero utama dengan penjelasan program magang dan CTA WhatsApp.
3.  Ringkasan program magang SMK/PKL dan internship mahasiswa.
4.  Pilihan bidang/posisi magang.
5.  Pelatihan digital marketing untuk UMKM, instansi, dan perusahaan.
6.  Kompetensi yang dipelajari.
7.  Metode pembelajaran dan alasan memilih MagangPro.
8.  Alur pendaftaran.
9.  Portofolio atau studi kasus yang benar-benar ada.
10. Galeri kegiatan dengan izin publikasi.
11. Artikel blog terbaru.
12. FAQ.
13. CTA penutup.
14. Footer berisi navigasi, lokasi, kontak, dan kebijakan privasi.

### Contoh hero

**Eyebrow:** PROGRAM MAGANG SMK & MAHASISWA\
**H1:** Bangun Keterampilan Digital dan Teknologi Bersama MagangPro\
**Deskripsi:** Temukan informasi program magang dan pembelajaran
berbasis proyek di bidang teknologi, pemasaran digital, bisnis digital,
dan desain. MagangPro juga menyediakan pelatihan digital marketing untuk
UMKM, instansi, dan perusahaan.\
**CTA utama:** Konsultasi via WhatsApp\
**CTA sekunder:** Jelajahi Program Magang

Gunakan klaim tentang proyek nyata, mentor, sertifikat, uang saku,
fleksibilitas, atau penyaluran kerja hanya jika memang disediakan.

## 6. UI/UX dan Design System

### Palet warna

  Token          Warna       Penggunaan
  -------------- ----------- ----------------------------
  Primary        `#C62828`   CTA, tautan penting, aksen
  Primary dark   `#B71C1C`   Hover dan penekanan
  Primary soft   `#FCE7E7`   Latar aksen dan ikon
  White          `#FFFFFF`   Latar utama
  Dark           `#1F2937`   Heading dan teks utama
  Gray           `#6B7280`   Teks sekunder
  Border         `#E5E7EB`   Garis dan pembatas
  Surface        `#F9FAFB`   Latar section alternatif

### Prinsip desain

-   Putih menjadi warna dominan; merah digunakan secara selektif untuk
    aksi.
-   Tampilan modern, bersih, profesional, dan mobile-first.
-   Heading jelas, jarak antar-section konsisten, dan kartu tidak
    berlebihan.
-   Kontras teks harus memenuhi standar aksesibilitas.
-   Hindari animasi berat dan carousel otomatis yang tidak diperlukan.
-   Gunakan gambar asli yang relevan; optimalkan gambar dan tetapkan
    dimensi.
-   Navigasi dan CTA harus bisa digunakan dengan keyboard serta layar
    sentuh.

### CTA

Semua CTA untuk kontak, pendaftaran, konsultasi, dan pertanyaan
diarahkan ke WhatsApp MagangPro. Pesan awal dapat berbeda sesuai halaman
agar percakapan lebih terarah.

## 7. Strategi SEO

### 7.1 Prinsip utama

SEO dibuat sebagai bagian dari arsitektur sejak awal. Astro membantu
menghasilkan HTML statis, tetapi peringkat ditentukan pula oleh kualitas
konten, relevansi, reputasi, crawlability, dan pengalaman pengguna.

**Catatan tanggal:** dokumen diperbarui pada 29 Oktober 2026. November
2026 belum dimulai pada tanggal tersebut, sehingga dokumen tidak
mengklaim perubahan SEO November yang belum terjadi. Periksa kembali
dokumentasi resmi Google sebelum rilis.

### 7.2 Keyword map

  -----------------------------------------------------------------------------------------
  Cluster                 Contoh keyword          Halaman sasaran
  ----------------------- ----------------------- -----------------------------------------
  Magang SMK              magang SMK, tempat PKL  `/program-magang/magang-smk-pkl/`
                          RPL, PKL TKJ            

  Internship mahasiswa    internship mahasiswa    `/program-magang/internship-mahasiswa/`
                          Informatika, magang     
                          mahasiswa IT            

  Digital marketing       magang digital          Halaman posisi terkait
                          marketing, PKL          
                          pemasaran digital       

  Web development         magang web developer,   Halaman posisi web development
                          magang programmer       

  SEO                     magang SEO, belajar SEO Halaman posisi SEO dan artikel
                          untuk pemula            

  Desain                  magang DKV, PKL         Halaman posisi desain
                          multimedia, magang      
                          graphic designer        

  Bisnis digital          magang bisnis digital,  Halaman posisi terkait
                          internship pemasaran    

  Pelatihan               pelatihan digital       Halaman pelatihan
                          marketing UMKM,         
                          pelatihan pemasaran     
                          digital perusahaan      

  Jasa                    jasa SEO, jasa website, Halaman jasa masing-masing
                          jasa social media       
                          marketing               

  Panduan                 cara mencari tempat     Artikel blog
                          PKL, persiapan          
                          internship, laporan PKL 
                          RPL                     
  -----------------------------------------------------------------------------------------

Lakukan riset keyword aktual sebelum menetapkan prioritas final. Hindari
membuat halaman untuk keyword yang tidak sesuai dengan program nyata.

### 7.3 Contoh metadata awal

**Beranda** - Title:
`Program Magang SMK & Mahasiswa dan Pelatihan Digital Marketing | MagangPro` -
Description:
`MagangPro menyediakan informasi program magang SMK/PKL dan internship mahasiswa di bidang IT, digital marketing, bisnis digital, multimedia, serta pelatihan digital marketing untuk UMKM, instansi, dan perusahaan.`

**Magang SMK** - Title:
`Program Magang SMK dan PKL RPL, TKJ, Multimedia | MagangPro` -
Description:
`Cari informasi program PKL siswa SMK, bidang kompetensi, persyaratan, durasi, alur pendaftaran, dan posisi magang yang tersedia di MagangPro.`

**Internship Mahasiswa** - Title:
`Internship Mahasiswa Informatika dan Digital Marketing | MagangPro` -
Description:
`Jelajahi informasi internship mahasiswa Informatika, Bisnis Digital, Pemasaran, dan jurusan relevan melalui program yang sesuai dengan posisi tersedia.`

**Pelatihan Digital Marketing** - Title:
`Pelatihan Digital Marketing untuk UMKM dan Perusahaan | MagangPro` -
Description:
`Informasi pelatihan digital marketing untuk UMKM, instansi, dan perusahaan, meliputi strategi konten, SEO, media sosial, iklan digital, dan analitik sesuai kebutuhan.`

**Jasa SEO** - Title:
`Jasa SEO Website dan Optimasi Mesin Pencari | MagangPro` - Description:
`Pelajari layanan SEO teknis, on-page, struktur website, dan strategi konten untuk membantu meningkatkan visibilitas organik website.`

Metadata harus unik untuk setiap halaman. Sesuaikan setelah riset
keyword, evaluasi SERP, dan pengukuran performa.

### 7.4 Technical SEO Astro

-   Gunakan Static Site Generation (`output: 'static'`).
-   Pastikan setiap halaman memiliki title, meta description, canonical,
    dan satu H1 utama yang jelas.
-   Konsisten menggunakan HTTPS dan domain kanonis
    `https://programmagang.web.id/`.
-   Gunakan trailing slash secara konsisten.
-   Generate sitemap dan masukkan hanya URL kanonis yang layak diindeks.
-   Buat `robots.txt` yang tidak memblokir aset atau halaman penting.
-   Pastikan konten utama dapat dirayapi tanpa JavaScript wajib.
-   Gunakan HTML semantik, tautan internal nyata, dan heading yang
    berurutan secara logis.
-   Optimalkan font, CSS, JavaScript, gambar, LCP, INP, dan CLS.
-   Pastikan halaman tidak memiliki horizontal overflow pada ponsel.
-   Periksa canonical, status HTTP, redirect, 404, dan link rusak
    sebelum rilis.

Contoh konfigurasi:

``` js
// astro.config.mjs
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://programmagang.web.id',
  output: 'static',
  trailingSlash: 'always',
  integrations: [sitemap()],
});
```

Pasang integrasi bila belum tersedia:

``` bash
npx astro add sitemap
```

### 7.5 Konten dan topical authority

Bangun cluster konten yang saling terhubung:

-   **SMK/PKL:** syarat PKL RPL, panduan PKL TKJ, persiapan siswa,
    target belajar, portofolio.
-   **Mahasiswa:** persiapan internship, CV, portofolio, wawancara,
    proyek kuliah.
-   **Teknologi:** dasar web development, Astro, Git, deployment, dasar
    SEO teknis.
-   **Pemasaran:** SEO, content marketing, social media marketing,
    digital advertising, analitik.
-   **Desain:** portofolio DKV, prinsip desain, multimedia, video
    editing.
-   **Pelatihan:** strategi digital marketing UMKM, perencanaan konten,
    pengukuran kampanye, pemahaman kanal digital.

Rencana awal: - Bulan 1: panduan PKL RPL, perbedaan PKL dan internship,
persiapan CV, dasar web development. - Bulan 2: panduan PKL TKJ, belajar
SEO, portofolio DKV, dasar social media marketing. - Bulan 3: proyek
digital untuk siswa SMK, studi kasus website, content marketing,
strategi digital marketing UMKM.

Terbitkan artikel yang benar-benar bermanfaat dan ditinjau secara
editorial. Hindari produksi massal halaman tipis yang hanya mengganti
nama jurusan atau kota.

### 7.6 SEO gambar

-   Gunakan nama file deskriptif, misalnya
    `proyek-website-magangpro.webp`.
-   Tambahkan alt text yang faktual.
-   Gunakan WebP/AVIF bila sesuai dengan workflow.
-   Tetapkan width dan height.
-   Lazy-load gambar di bawah fold, tetapi jangan lazy-load hero utama
    yang menjadi LCP.
-   Sediakan gambar Open Graph yang konsisten.
-   Dapatkan izin untuk foto peserta dan hindari memublikasikan data
    pribadi.

### 7.7 SEO lokal

Lokasi resmi yang dapat ditampilkan: **Mojolangu, Kota Malang, Jawa
Timur 65142, Indonesia.**

Jangan mengarang nama jalan, nomor bangunan, kode koordinat, nomor
telepon kantor terpisah, atau jam operasional. Jika lokasi fisik
memenuhi syarat dan dapat dikunjungi pelanggan, evaluasi pembuatan
Google Business Profile sesuai panduan Google. Pastikan alamat dan
informasi kontak konsisten di seluruh kanal.

### 7.8 SEO off-page

1.  Bangun hubungan yang nyata dengan sekolah, kampus, komunitas, dan
    mitra.
2.  Publikasikan panduan dan studi kasus yang pantas dirujuk.
3.  Minta tautan dari mitra hanya bila relevan dan berdasarkan hubungan
    yang nyata.
4.  Hindari pembelian backlink massal, PBN, dan praktik manipulatif.
5.  Ukur query, klik, impresi, CTR, konversi, dan kualitas rujukan.

### 7.9 Monitoring

-   Google Search Console: indeksasi, query, klik, impresi, CTR, dan
    crawl.
-   PageSpeed Insights: performa dan Core Web Vitals.
-   Rich Results Test: schema yang didukung Google.
-   Schema.org Validator: validasi vocabulary.
-   Google Analytics 4 (opsional): landing page dan event CTA;
    perhatikan privasi dan persetujuan yang relevan.

## 8. Schema.org JSON-LD

Schema harus sesuai dengan konten yang terlihat dan tidak menjamin rich
results atau peringkat. Gunakan schema yang relevan per jenis halaman,
bukan semua jenis pada semua URL.

### 8.1 Schema global Organization + WebSite

Tempatkan pada layout utama, misalnya `src/layouts/BaseLayout.astro`.
Data organisasi yang belum tersedia harus dihilangkan atau diganti
dengan data resmi sebelum produksi.

``` astro
---
const siteUrl = 'https://programmagang.web.id';
const brandName = 'MagangPro';

const globalSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${siteUrl}/#organization`,
      name: brandName,
      url: `${siteUrl}/`,
      description:
        'Program magang SMK dan mahasiswa serta pelatihan digital marketing untuk UMKM, instansi, dan perusahaan.',
      telephone: '+62895639068080',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Mojolangu, Kota Malang',
        addressRegion: 'Jawa Timur',
        postalCode: '65142',
        addressCountry: 'ID'
      },
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+62895639068080',
        contactType: 'customer support',
        availableLanguage: ['Indonesian']
      }
    },
    {
      '@type': 'WebSite',
      '@id': `${siteUrl}/#website`,
      url: `${siteUrl}/`,
      name: brandName,
      inLanguage: 'id-ID',
      publisher: {
        '@id': `${siteUrl}/#organization`
      }
    }
  ]
};
---

<script
  type="application/ld+json"
  set:html={JSON.stringify(globalSchema)}
/>
```

Tambahkan logo `ImageObject`, email, `sameAs`, atau informasi lain hanya
setelah aset dan akun resmi tersedia. Jangan mengarang profil sosial,
rating, badan hukum, atau data kontak.

### 8.2 Schema WebPage + BreadcrumbList

Contoh halaman Magang SMK:

``` js
const pageSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://programmagang.web.id/program-magang/magang-smk-pkl/#webpage',
      url: 'https://programmagang.web.id/program-magang/magang-smk-pkl/',
      name: 'Program Magang SMK dan PKL | MagangPro',
      description:
        'Informasi program PKL siswa SMK, kompetensi, persyaratan, dan alur pendaftaran.',
      inLanguage: 'id-ID',
      isPartOf: { '@id': 'https://programmagang.web.id/#website' },
      about: { '@id': 'https://programmagang.web.id/#organization' },
      breadcrumb: {
        '@id': 'https://programmagang.web.id/program-magang/magang-smk-pkl/#breadcrumb'
      }
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://programmagang.web.id/program-magang/magang-smk-pkl/#breadcrumb',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Beranda',
          item: 'https://programmagang.web.id/'
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Program Magang',
          item: 'https://programmagang.web.id/program-magang/'
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Magang SMK dan PKL',
          item: 'https://programmagang.web.id/program-magang/magang-smk-pkl/'
        }
      ]
    }
  ]
};
```

Gunakan breadcrumb aktual sesuai hierarki dan tautan yang terlihat pada
halaman.

### 8.3 Schema BlogPosting

``` js
const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  '@id': 'https://programmagang.web.id/blog/panduan-pkl-rpl/#article',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://programmagang.web.id/blog/panduan-pkl-rpl/'
  },
  headline: 'Panduan PKL RPL untuk Siswa SMK',
  description:
    'Panduan mempersiapkan PKL RPL, target pembelajaran, dan portofolio.',
  image: [
    'https://programmagang.web.id/images/blog/panduan-pkl-rpl.webp'
  ],
  datePublished: '2026-11-05T08:00:00+07:00',
  dateModified: '2026-11-05T08:00:00+07:00',
  author: {
    '@type': 'Organization',
    name: 'Tim Editorial MagangPro',
    url: 'https://programmagang.web.id/tentang-kami/'
  },
  publisher: {
    '@id': 'https://programmagang.web.id/#organization'
  },
  inLanguage: 'id-ID',
  articleSection: 'Program Magang'
};
```

Tanggal di atas adalah contoh rencana artikel pada 5 November 2026.
Ganti dengan tanggal publikasi yang sebenarnya. `dateModified` hanya
diperbarui ketika ada perubahan konten yang bermakna. Nama penulis harus
merepresentasikan pihak yang benar-benar bertanggung jawab atas artikel.

### 8.4 Schema Service

Gunakan pada halaman jasa yang benar-benar ditawarkan:

``` js
const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': 'https://programmagang.web.id/jasa/seo/#service',
  name: 'Layanan SEO Website',
  serviceType: 'Search Engine Optimization',
  description:
    'Layanan optimasi SEO teknis, on-page, struktur website, dan konten.',
  url: 'https://programmagang.web.id/jasa/seo/',
  provider: {
    '@id': 'https://programmagang.web.id/#organization'
  },
  areaServed: {
    '@type': 'Country',
    name: 'Indonesia'
  }
};
```

Sesuaikan cakupan geografis dan deskripsi dengan layanan nyata. Jangan
menambahkan harga atau rating yang tidak tersedia.

### 8.5 Schema FAQPage

Gunakan hanya jika FAQ dan jawaban benar-benar tampil di halaman:

``` js
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Siapa yang dapat mengikuti program magang MagangPro?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Program ditujukan untuk siswa SMK dan mahasiswa dari jurusan yang sesuai dengan posisi yang tersedia.'
      }
    },
    {
      '@type': 'Question',
      name: 'Bagaimana cara bertanya tentang pendaftaran?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Calon peserta dapat menghubungi MagangPro melalui WhatsApp untuk memperoleh informasi persyaratan dan proses pendaftaran.'
      }
    }
  ]
};
```

Pastikan jawaban sesuai dengan kebijakan penerimaan. Jangan mengharapkan
FAQ rich results umum di Google; validitas schema tidak menjamin
tampilan khusus.

### 8.6 Schema JobPosting

`JobPosting` hanya untuk halaman individual yang berisi posisi rekrutmen
nyata dan sedang dibuka. Jangan pasang di halaman umum program magang,
daftar posisi, atau program pendidikan yang bukan lowongan. Contoh
berikut hanya kerangka dan wajib dilengkapi sebelum dipakai:

``` js
const internshipPosting = {
  '@context': 'https://schema.org',
  '@type': 'JobPosting',
  title: 'Internship Web Developer',
  description: '<p>Deskripsi tugas, persyaratan, proses seleksi, dan informasi posisi yang sebenarnya harus ditulis lengkap di sini.</p>',
  identifier: {
    '@type': 'PropertyValue',
    name: 'MagangPro',
    value: '[ID LOWONGAN UNIK]'
  },
  datePosted: '2026-11-05',
  hiringOrganization: {
    '@type': 'Organization',
    name: 'MagangPro',
    sameAs: 'https://programmagang.web.id/'
  },
  employmentType: 'INTERN',
  url: 'https://programmagang.web.id/program-magang/posisi/web-developer/'
};
```

Sebelum produksi, pastikan deskripsi, persyaratan, tanggal, status
lowongan, serta informasi lokasi atau remote sesuai kenyataan dan
kebijakan Google. Jangan menambahkan properti lokasi, tenggat, gaji,
atau benefit yang belum ditentukan. Hapus atau perbarui markup saat
lowongan ditutup.

### 8.7 Schema per halaman lainnya

-   `AboutPage`: halaman Tentang Kami.
-   `ContactPage`: halaman Kontak.
-   `ItemList`: daftar portofolio atau daftar program, jika sesuai
    dengan konten.
-   `ImageObject`: jika metadata gambar memang diperlukan.
-   `WebPage`: tipe halaman umum sebagai dasar.
-   `BreadcrumbList`: halaman bertingkat.

Schema harus dihasilkan dari data halaman agar tidak terjadi duplikasi
atau ketidaksesuaian URL.

## 9. Struktur Proyek Astro

``` text
magangpro/
├── public/
│   ├── images/
│   │   ├── hero/
│   │   ├── services/
│   │   ├── portfolio/
│   │   ├── gallery/
│   │   └── blog/
│   ├── favicon.svg
│   ├── robots.txt
│   └── site.webmanifest
├── src/
│   ├── components/
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── Hero.astro
│   │   ├── WhatsAppButton.astro
│   │   ├── Breadcrumbs.astro
│   │   ├── ServiceCard.astro
│   │   ├── ProgramCard.astro
│   │   ├── PortfolioCard.astro
│   │   ├── BlogCard.astro
│   │   └── FaqSection.astro
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── content/
│   │   ├── config.ts
│   │   ├── blog/
│   │   └── portfolio/
│   ├── data/
│   │   ├── services.ts
│   │   ├── programs.ts
│   │   ├── navigation.ts
│   │   └── faq.ts
│   ├── styles/
│   │   ├── global.css
│   │   └── custom.css
│   └── pages/
│       ├── index.astro
│       ├── tentang-kami.astro
│       ├── kontak.astro
│       ├── pelatihan-digital-marketing/
│       ├── jasa/
│       │   ├── index.astro
│       │   └── [slug].astro
│       ├── program-magang/
│       │   ├── index.astro
│       │   ├── magang-smk-pkl.astro
│       │   ├── internship-mahasiswa.astro
│       │   ├── kompetensi.astro
│       │   ├── alur-pendaftaran.astro
│       │   └── posisi/
│       │       ├── index.astro
│       │       └── [slug].astro
│       ├── portofolio/
│       │   ├── index.astro
│       │   └── [slug].astro
│       ├── galeri.astro
│       ├── blog/
│       │   ├── index.astro
│       │   └── [...slug].astro
│       ├── kebijakan-privasi.astro
│       ├── syarat-ketentuan.astro
│       └── 404.astro
└── astro.config.mjs
```

Gunakan content collections untuk Markdown/MDX dan data lokal. Halaman
dinamis dengan `[slug].astro` harus menghasilkan semua URL saat build
melalui `getStaticPaths()` atau mekanisme content collection Astro yang
sesuai.

### BootstrapMade

1.  Pilih template yang lisensinya sesuai dengan penggunaan.
2.  Konversi HTML ke komponen Astro.
3.  Pisahkan header, footer, hero, kartu, FAQ, dan CTA.
4.  Hapus CSS serta JavaScript yang tidak digunakan.
5.  Uji ulang menu, carousel, animasi, dan navigasi setelah konversi.
6.  Sesuaikan warna, logo, font, dan CTA dengan identitas MagangPro.

## 10. Metadata Reusable Astro

Contoh dasar layout:

``` astro
---
interface Props {
  title: string;
  description: string;
  canonical: string;
  noindex?: boolean;
}

const {
  title,
  description,
  canonical,
  noindex = false
} = Astro.props;

const siteName = 'MagangPro';
---

<!doctype html>
<html lang="id">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>{title}</title>
    <meta name="description" content={description} />
    <link rel="canonical" href={canonical} />
    <meta
      name="robots"
      content={noindex ? 'noindex, follow' : 'index, follow, max-image-preview:large'}
    />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content={siteName} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:url" content={canonical} />
  </head>
  <body>
    <slot />
  </body>
</html>
```

Tambahkan Open Graph image, favicon, theme color, dan schema global.
Hindari `noindex` untuk halaman publik yang memang ingin diindeks.

## 11. CTA WhatsApp

Nomor yang diberikan: `+62 895-6390-68080`. Untuk URL WhatsApp gunakan
format internasional tanpa `+`, spasi, atau tanda hubung:

`https://wa.me/62895639068080`

Komponen reusable:

``` astro
---
interface Props {
  label?: string;
  message?: string;
  class?: string;
}

const {
  label = 'Hubungi MagangPro',
  message = 'Halo MagangPro, saya ingin bertanya tentang program magang.',
  class: className = ''
} = Astro.props;

const whatsappUrl =
  `https://wa.me/62895639068080?text=${encodeURIComponent(message)}`;
---

<a
  href={whatsappUrl}
  class={className}
  target="_blank"
  rel="noopener noreferrer"
  aria-label={label}
>
  {label}
</a>
```

Pesan CTA yang disarankan:

  -----------------------------------------------------------------------
  Konteks                             Pesan
  ----------------------------------- -----------------------------------
  Header                              Halo MagangPro, saya ingin bertanya
                                      tentang program magang.

  Magang SMK                          Halo MagangPro, saya ingin
                                      informasi program PKL SMK.

  Internship                          Halo MagangPro, saya ingin bertanya
                                      tentang internship mahasiswa.

  Posisi                              Halo MagangPro, saya ingin
                                      mengetahui posisi magang yang
                                      tersedia.

  Pelatihan                           Halo MagangPro, saya ingin
                                      berkonsultasi tentang pelatihan
                                      digital marketing untuk organisasi
                                      kami.

  Jasa                                Halo MagangPro, saya ingin
                                      berkonsultasi tentang layanan
                                      digital.
  -----------------------------------------------------------------------

Website statis tidak dapat memastikan bahwa pesan benar-benar terkirim
atau pendaftaran selesai. WhatsApp merupakan jalur komunikasi manual
untuk MVP.

## 12. Blog Tanpa Database

Setiap artikel disimpan sebagai file Markdown/MDX.

Contoh frontmatter:

``` yaml
---
title: "Panduan PKL RPL untuk Siswa SMK"
description: "Panduan mempersiapkan PKL RPL, target pembelajaran, dan portofolio."
pubDate: 2026-11-05
author: "Tim Editorial MagangPro"
category: "Program Magang"
tags:
  - PKL RPL
  - Magang SMK
  - Informatika
heroImage: "/images/blog/panduan-pkl-rpl.webp"
draft: true
---
```

`draft: true` digunakan selama artikel belum siap terbit. Tanggal di
atas merupakan contoh rencana publikasi. Setelah artikel siap, ubah
status sesuai konfigurasi content collection. Artikel baru diterbitkan
dengan menambahkan file dan menjalankan build ulang.

## 13. Kebutuhan Fungsional

  -----------------------------------------------------------------------
  ID                      Fitur                   Kriteria penerimaan
  ----------------------- ----------------------- -----------------------
  FR-01                   Beranda                 Menampilkan hero,
                                                  program, pelatihan,
                                                  posisi, portofolio,
                                                  blog, dan CTA.

  FR-02                   Navigasi                Dropdown desktop dan
                                                  menu mobile dapat
                                                  diakses.

  FR-03                   Tentang Kami            Menampilkan identitas
                                                  dan profil yang telah
                                                  diverifikasi.

  FR-04                   Jasa                    Daftar layanan dan
                                                  halaman detail dengan
                                                  CTA.

  FR-05                   Program Magang          Informasi SMK/PKL dan
                                                  mahasiswa dibedakan
                                                  dengan jelas.

  FR-06                   Posisi                  Menampilkan posisi,
                                                  kompetensi,
                                                  persyaratan, dan status
                                                  yang akurat.

  FR-07                   Alur pendaftaran        Langkah pendaftaran dan
                                                  kontak dijelaskan.

  FR-08                   Pelatihan               Menjelaskan pelatihan
                                                  digital marketing untuk
                                                  UMKM, instansi, dan
                                                  perusahaan.

  FR-09                   Portofolio              Menampilkan proyek dan
                                                  studi kasus yang
                                                  benar-benar ada.

  FR-10                   Galeri                  Menampilkan dokumentasi
                                                  dengan izin publikasi
                                                  dan alt text.

  FR-11                   Blog                    Daftar, detail,
                                                  kategori, metadata, dan
                                                  schema artikel.

  FR-12                   CTA WhatsApp            Semua CTA menggunakan
                                                  nomor yang telah
                                                  ditetapkan.

  FR-13                   SEO                     Canonical, metadata,
                                                  sitemap, robots.txt,
                                                  dan schema sesuai
                                                  halaman.

  FR-14                   Legal                   Kebijakan privasi dan
                                                  syarat penggunaan.

  FR-15                   Error page              Halaman 404 memiliki
                                                  tautan kembali ke
                                                  halaman utama.

  FR-16                   Analitik opsional       Klik CTA dapat diukur
                                                  tanpa database
                                                  aplikasi.
  -----------------------------------------------------------------------

## 14. Batasan MVP

Versi awal tidak menyediakan: - Login dan akun peserta. - Dashboard
admin. - Database pendaftar. - Formulir yang menyimpan data ke server. -
Upload CV atau dokumen. - Pelacakan status seleksi. - Notifikasi email
otomatis. - Pembaruan lowongan secara real-time.

Jika kebutuhan tersebut muncul, versi berikutnya dapat memakai layanan
formulir, CMS, atau backend. Jangan menampilkan form seolah-olah data
tersimpan jika tidak ada sistem yang benar-benar memprosesnya.

## 15. Kebutuhan Nonfungsional

  -----------------------------------------------------------------------
  ID                      Kebutuhan               Kriteria
  ----------------------- ----------------------- -----------------------
  NFR-01                  Performa                Target Lighthouse
                                                  Performance ≥ 90 pada
                                                  pengujian
                                                  representatif.

  NFR-02                  Responsif               Berfungsi di ponsel,
                                                  tablet, laptop, dan
                                                  desktop.

  NFR-03                  Aksesibilitas           Keyboard, kontras,
                                                  label, dan alt text
                                                  memadai.

  NFR-04                  SEO                     Metadata, canonical,
                                                  sitemap, dan HTML yang
                                                  dapat dirayapi.

  NFR-05                  Keamanan                HTTPS, dependensi
                                                  terpelihara, tanpa
                                                  secret di frontend.

  NFR-06                  Kompatibilitas          Browser modern umum
                                                  didukung.

  NFR-07                  Pemeliharaan            Komponen reusable dan
                                                  konten terpisah dari
                                                  layout.

  NFR-08                  Skalabilitas            Halaman baru dapat
                                                  ditambahkan tanpa
                                                  merombak seluruh situs.

  NFR-09                  Reliabilitas            Build produksi dan
                                                  pemeriksaan link lolos.

  NFR-10                  Privasi                 Tidak mengumpulkan data
                                                  yang tidak diperlukan.
  -----------------------------------------------------------------------

## 16. Hosting dan Deployment

Hosting statis yang dapat dipertimbangkan: Cloudflare Pages, Netlify,
atau Vercel. Pilih berdasarkan kebutuhan domain, biaya, batas
penggunaan, dan fitur terkini.

Alur: 1. Perubahan kode/konten. 2. Pemeriksaan dan build. 3. Deployment
hasil build. 4. Verifikasi domain dan HTTPS. 5. Uji CTA, URL, metadata,
dan schema. 6. Verifikasi domain di Google Search Console. 7. Kirim
sitemap. 8. Pantau indeksasi dan performa.

## 17. Roadmap

### Tahap 1 --- Fondasi

Tetapkan aset brand, setup Astro, pilih template BootstrapMade, buat
design system, header, footer, layout, dan CTA.

### Tahap 2 --- MVP konversi

Bangun Beranda, Tentang Kami, Program Magang, Magang SMK/PKL, Internship
Mahasiswa, Posisi, Kompetensi, Alur Pendaftaran, Pelatihan Digital
Marketing, dan Kontak.

### Tahap 3 --- Kredibilitas dan konten

Bangun halaman Jasa, Portofolio, Galeri, Blog, serta detail konten.

### Tahap 4 --- SEO teknis

Implementasikan metadata, canonical, sitemap, robots.txt, schema
JSON-LD, Open Graph, dan internal linking.

### Tahap 5 --- QA dan rilis

Uji responsivitas, aksesibilitas, CTA, link, schema, performa, HTTPS,
dan Search Console.

## 18. Checklist Peluncuran

### Brand dan konten

-   [ ] Nama MagangPro, domain, dan logo konsisten.
-   [ ] Informasi program, persyaratan, durasi, dan posisi sudah
    diverifikasi.
-   [ ] Informasi pelatihan untuk UMKM, instansi, dan perusahaan sudah
    jelas.
-   [ ] Kontak, alamat, dan kebijakan privasi benar.

### Desain dan fungsi

-   [ ] Dropdown desktop dan menu mobile berfungsi.
-   [ ] Semua CTA mengarah ke WhatsApp yang benar.
-   [ ] Portofolio dan galeri berisi materi yang sah untuk
    dipublikasikan.
-   [ ] Halaman 404 dan semua link internal diuji.

### SEO dan performa

-   [ ] Title, description, canonical, dan H1 sesuai per halaman.
-   [ ] Sitemap dan robots.txt benar.
-   [ ] Schema sesuai konten yang terlihat.
-   [ ] Gambar, font, CSS, dan JavaScript dioptimalkan.
-   [ ] Lighthouse dan Core Web Vitals diperiksa.

### Deployment

-   [ ] HTTPS aktif dan domain kanonis konsisten.
-   [ ] Build produksi berhasil.
-   [ ] Google Search Console diverifikasi.
-   [ ] Sitemap dikirim dan halaman penting diperiksa.

## 19. Referensi Resmi

Dokumentasi perlu diperiksa ulang sebelum peluncuran untuk menangkap
perubahan terbaru:

-   Astro Content Collections:
    https://docs.astro.build/en/guides/content-collections/
-   Astro Sitemap:
    https://docs.astro.build/en/guides/integrations-guide/sitemap/
-   Google SEO Starter Guide:
    https://developers.google.com/search/docs/fundamentals/seo-starter-guide
-   Google Structured Data Policies:
    https://developers.google.com/search/docs/appearance/structured-data/sd-policies
-   Google JobPosting:
    https://developers.google.com/search/docs/appearance/structured-data/job-posting
-   Google Search Console:
    https://search.google.com/search-console/about
-   PageSpeed Insights: https://pagespeed.web.dev/

## 20. Keputusan Akhir

MagangPro dibangun sebagai website statis menggunakan Astro SSG,
BootstrapMade yang disesuaikan, dan file konten lokal. Situs berfokus
pada dua layanan utama: program magang untuk siswa SMK dan mahasiswa,
serta pelatihan digital marketing untuk UMKM, instansi, dan perusahaan.

Identitas yang dipakai: - **Brand:** MagangPro - **Domain:**
https://programmagang.web.id/ - **Alamat:** Mojolangu, Kota Malang, Jawa
Timur 65142 - **WhatsApp:** +62 895-6390-68080 - **Warna:** putih dan
merah

Prioritas peluncuran adalah halaman program dan pelatihan yang lengkap,
CTA WhatsApp yang berfungsi, struktur SEO teknis yang benar, serta
konten yang akurat. Database dan backend tidak diperlukan untuk MVP
selama pendaftaran dilakukan secara manual melalui WhatsApp.
