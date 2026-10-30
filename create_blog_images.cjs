const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const outputDir = path.join(__dirname, 'public/images/blog');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const images = [
  {
    filename: 'blog-magang-smk.webp',
    title: 'PANDUAN MAGANG SMK',
    subtitle: 'Persiapan Dokumen, DUDI &amp; Tips PKL',
    themeColor: '#dc2626',
    accentGrad: ['#1e1b4b', '#0f172a'],
    badge: 'Vokasi &amp; PKL',
    iconPath: '<path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="#ef4444" stroke-width="2" fill="none"/>'
  },
  {
    filename: 'blog-local-seo.webp',
    title: 'LOCAL SEO GOOGLE MAPS',
    subtitle: 'Optimasi Profil Bisnis UMKM Malang',
    themeColor: '#2563eb',
    accentGrad: ['#0f172a', '#1e293b'],
    badge: 'Digital Marketing',
    iconPath: '<path d="M12 2a8 8 0 0 0-8 8c0 5.25 8 12 8 12s8-6.75 8-12a8 8 0 0 0-8-8zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" stroke="#38bdf8" stroke-width="2" fill="none"/>'
  },
  {
    filename: 'blog-portofolio-karier.webp',
    title: 'PORTOFOLIO VS NILAI IPK',
    subtitle: 'Bukti Karya Riil di Mata Rekruter',
    themeColor: '#10b981',
    accentGrad: ['#064e3b', '#0f172a'],
    badge: 'Karier Industri',
    iconPath: '<rect x="2" y="7" width="20" height="14" rx="2" stroke="#34d399" stroke-width="2" fill="none"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" stroke="#34d399" stroke-width="2" fill="none"/>'
  },
  {
    filename: 'blog-konversi-sks.webp',
    title: 'KONVERSI SKS MAHASISWA',
    subtitle: 'Alur Administrasi &amp; Laporan Kampus',
    themeColor: '#8b5cf6',
    accentGrad: ['#2e1065', '#0f172a'],
    badge: 'Kampus &amp; MBKM',
    iconPath: '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20M4 4.5A2.5 2.5 0 0 1 6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15zM8 7h8M8 11h8" stroke="#a78bfa" stroke-width="2" fill="none"/>'
  },
  {
    filename: 'blog-web-development.webp',
    title: 'ARSITEKTUR WEB MODERN',
    subtitle: 'SSG, PageSpeed 95+ &amp; Keamanan',
    themeColor: '#f59e0b',
    accentGrad: ['#451a03', '#0f172a'],
    badge: 'Teknologi &amp; Web',
    iconPath: '<polyline points="16 18 22 12 16 6" stroke="#fbbf24" stroke-width="2" fill="none"/><polyline points="8 6 2 12 8 18" stroke="#fbbf24" stroke-width="2" fill="none"/>'
  },
  {
    filename: 'blog-etika-komunikasi.webp',
    title: 'ETIKA KERJA STARTUP',
    subtitle: 'Komunikasi Profesional &amp; Code Review',
    themeColor: '#ec4899',
    accentGrad: ['#500724', '#0f172a'],
    badge: 'Soft Skills',
    iconPath: '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="#f472b6" stroke-width="2" fill="none"/>'
  }
];

async function generateAll() {
  const width = 800;
  const height = 480;

  for (const img of images) {
    const svg = `
      <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="${img.accentGrad[0]}"/>
            <stop offset="100%" stop-color="${img.accentGrad[1]}"/>
          </linearGradient>

          <pattern id="gridPattern" width="32" height="32" patternUnits="userSpaceOnUse">
            <path d="M 32 0 L 0 0 0 32" fill="none" stroke="rgba(255, 255, 255, 0.04)" stroke-width="1"/>
          </pattern>

          <radialGradient id="glow" cx="80%" cy="30%" r="50%">
            <stop offset="0%" stop-color="${img.themeColor}" stop-opacity="0.35"/>
            <stop offset="100%" stop-color="${img.themeColor}" stop-opacity="0"/>
          </radialGradient>
        </defs>

        <!-- Base Background -->
        <rect width="${width}" height="${height}" fill="url(#bgGrad)"/>
        <rect width="${width}" height="${height}" fill="url(#glow)"/>
        <rect width="${width}" height="${height}" fill="url(#gridPattern)"/>

        <!-- Big Glow in Center-Right -->
        <circle cx="580" cy="240" r="160" fill="none" stroke="${img.themeColor}" stroke-opacity="0.18" stroke-width="2" stroke-dasharray="8 8"/>
        <circle cx="580" cy="240" r="100" fill="none" stroke="${img.themeColor}" stroke-opacity="0.25" stroke-width="1.5"/>

        <!-- Large Tech Icon in Circle -->
        <circle cx="580" cy="240" r="60" fill="rgba(255, 255, 255, 0.05)" stroke="rgba(255, 255, 255, 0.12)" stroke-width="1.5"/>
        <g transform="translate(555, 215) scale(2)">
          ${img.iconPath}
        </g>

        <!-- Brand Watermark at Top Right -->
        <text x="740" y="50" text-anchor="end" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="12" font-weight="700" fill="rgba(255, 255, 255, 0.4)" letter-spacing="1.5">MAGANGPRO</text>

        <!-- Text Group (Left Side) -->
        <g transform="translate(48, 170)">
          <!-- Topic Tag -->
          <text x="0" y="20" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="13" font-weight="700" fill="${img.themeColor}" letter-spacing="2">EDUKASI &amp; RISET</text>

          <!-- Main Title -->
          <text x="0" y="70" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="32" font-weight="900" fill="#ffffff" letter-spacing="-0.5">${img.title}</text>
          
          <!-- Subtitle -->
          <text x="0" y="110" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="17" font-weight="500" fill="#94a3b8">${img.subtitle}</text>

          <!-- Subtle bottom line -->
          <rect x="0" y="145" width="60" height="3" rx="1.5" fill="${img.themeColor}"/>
        </g>
      </svg>
    `;

    const dest = path.join(outputDir, img.filename);
    await sharp(Buffer.from(svg))
      .webp({ quality: 85 })
      .toFile(dest);

    console.log(`Created: ${img.filename}`);
  }
}

generateAll().catch(console.error);
