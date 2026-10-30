const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const outputDir = path.join(__dirname, 'public/images/blog');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const images = [
  {
    filename: 'blog-magang-smk-detail.webp',
    title: 'DOKUMENTASI LAB ONSITE',
    subtitle: 'Sesi Asistensi Kode &amp; Review Mingguan Siswa',
    themeColor: '#ef4444',
    accentGrad: ['#1e1b4b', '#0f172a'],
    badge: 'Aktivitas Praktik',
    iconPath: '<rect x="2" y="3" width="20" height="14" rx="2" stroke="#f87171" stroke-width="2" fill="none"/><line x1="8" y1="21" x2="16" y2="21" stroke="#f87171" stroke-width="2"/><line x1="12" y1="17" x2="12" y2="21" stroke="#f87171" stroke-width="2"/>'
  },
  {
    filename: 'blog-local-seo-detail.webp',
    title: 'AUDIT GOOGLE MAPS PROFIL',
    subtitle: 'Metrik Kunjungan &amp; Kata Kunci Bisnis Malang',
    themeColor: '#38bdf8',
    accentGrad: ['#0f172a', '#1e293b'],
    badge: 'Data Analitik',
    iconPath: '<line x1="18" y1="20" x2="18" y2="10" stroke="#38bdf8" stroke-width="2"/><line x1="12" y1="20" x2="12" y2="4" stroke="#38bdf8" stroke-width="2"/><line x1="6" y1="20" x2="6" y2="14" stroke="#38bdf8" stroke-width="2"/>'
  },
  {
    filename: 'blog-portofolio-karier-detail.webp',
    title: 'SHOWCASE PORTOFOLIO GITHUB',
    subtitle: 'Studi Kasus Proyek Nyata &amp; Desain UI/UX Figma',
    themeColor: '#34d399',
    accentGrad: ['#064e3b', '#0f172a'],
    badge: 'Bukti Karya',
    iconPath: '<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" stroke="#34d399" stroke-width="2" fill="none"/>'
  },
  {
    filename: 'blog-konversi-sks-detail.webp',
    title: 'LOGBOOK SPRINT &amp; EVALUASI',
    subtitle: 'Standar Rekomendasi Kampus &amp; Nilai Konversi',
    themeColor: '#a78bfa',
    accentGrad: ['#2e1065', '#0f172a'],
    badge: 'Administrasi MBKM',
    iconPath: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="#a78bfa" stroke-width="2" fill="none"/><polyline points="14 2 14 8 20 8" stroke="#a78bfa" stroke-width="2" fill="none"/><line x1="16" y1="13" x2="8" y2="13" stroke="#a78bfa" stroke-width="2"/><line x1="16" y1="17" x2="8" y2="17" stroke="#a78bfa" stroke-width="2"/>'
  },
  {
    filename: 'blog-web-development-detail.webp',
    title: 'METRIK CORE WEB VITALS 98+',
    subtitle: 'Analisis Skor PageSpeed &amp; Lighthouse',
    themeColor: '#fbbf24',
    accentGrad: ['#451a03', '#0f172a'],
    badge: 'Performa Web',
    iconPath: '<circle cx="12" cy="12" r="10" stroke="#fbbf24" stroke-width="2" fill="none"/><polyline points="12 6 12 12 14 14" stroke="#fbbf24" stroke-width="2" fill="none"/>'
  },
  {
    filename: 'blog-etika-komunikasi-detail.webp',
    title: 'DAILY STANDUP &amp; COLLAB FLOW',
    subtitle: 'Koordinasi Lintas Divisi Developer &amp; Desainer',
    themeColor: '#f472b6',
    accentGrad: ['#500724', '#0f172a'],
    badge: 'Kolaborasi Tim',
    iconPath: '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="#f472b6" stroke-width="2" fill="none"/><circle cx="9" cy="7" r="4" stroke="#f472b6" stroke-width="2" fill="none"/><path d="M23 21v-2a4 4 0 0 0-3-3.87" stroke="#f472b6" stroke-width="2" fill="none"/><path d="M16 3.13a4 4 0 0 1 0 7.75" stroke="#f472b6" stroke-width="2" fill="none"/>'
  }
];

async function generateSecondary() {
  const width = 800;
  const height = 450;

  for (const img of images) {
    const svg = `
      <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="${img.accentGrad[0]}"/>
            <stop offset="100%" stop-color="${img.accentGrad[1]}"/>
          </linearGradient>

          <pattern id="grid" width="28" height="28" patternUnits="userSpaceOnUse">
            <path d="M 28 0 L 0 0 0 28" fill="none" stroke="rgba(255, 255, 255, 0.04)" stroke-width="1"/>
          </pattern>

          <radialGradient id="glow" cx="80%" cy="40%" r="55%">
            <stop offset="0%" stop-color="${img.themeColor}" stop-opacity="0.32"/>
            <stop offset="100%" stop-color="${img.themeColor}" stop-opacity="0"/>
          </radialGradient>
        </defs>

        <rect width="${width}" height="${height}" fill="url(#bgGrad)"/>
        <rect width="${width}" height="${height}" fill="url(#glow)"/>
        <rect width="${width}" height="${height}" fill="url(#grid)"/>

        <!-- Graphic circles on right -->
        <circle cx="600" cy="225" r="140" fill="none" stroke="${img.themeColor}" stroke-opacity="0.18" stroke-width="2" stroke-dasharray="6 6"/>
        <circle cx="600" cy="225" r="75" fill="rgba(255, 255, 255, 0.04)" stroke="${img.themeColor}" stroke-opacity="0.3" stroke-width="1.5"/>

        <g transform="translate(575, 200) scale(2)">
          ${img.iconPath}
        </g>

        <!-- Brand tag top right -->
        <text x="740" y="45" text-anchor="end" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="12" font-weight="700" fill="rgba(255, 255, 255, 0.35)" letter-spacing="1">MAGANGPRO MALANG</text>

        <!-- Content on left -->
        <g transform="translate(48, 160)">
          <rect x="0" y="0" width="130" height="26" rx="13" fill="rgba(255, 255, 255, 0.08)" stroke="${img.themeColor}" stroke-width="1" stroke-opacity="0.5"/>
          <text x="65" y="17" text-anchor="middle" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="11" font-weight="700" fill="#ffffff" letter-spacing="0.5">${img.badge}</text>

          <text x="0" y="65" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="28" font-weight="900" fill="#ffffff" letter-spacing="-0.5">${img.title}</text>
          <text x="0" y="100" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="16" font-weight="500" fill="#cbd5e1">${img.subtitle}</text>

          <rect x="0" y="130" width="50" height="3" rx="1.5" fill="${img.themeColor}"/>
        </g>
      </svg>
    `;

    const dest = path.join(outputDir, img.filename);
    await sharp(Buffer.from(svg))
      .webp({ quality: 85 })
      .toFile(dest);

    console.log(`Created secondary image: ${img.filename}`);
  }
}

generateSecondary().catch(console.error);
