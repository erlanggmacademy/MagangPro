const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

async function createOgImage() {
  const width = 1200;
  const height = 630;

  // Resize the light logo for dark background
  const logoLightBuffer = await sharp(path.join(__dirname, 'public/images/logo-magangpro-light.webp'))
    .resize({ width: 380 })
    .png()
    .toBuffer();

  // Resize graduation badge for background watermark
  const badgeBuffer = await sharp(path.join(__dirname, 'public/Red Graduation M Logo Badge.png'))
    .resize({ width: 440, height: 440 })
    .png()
    .toBuffer();

  // SVG overlay for text, badges, gradients, and frames
  const svgOverlay = `
    <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#0a0d14"/>
          <stop offset="50%" stop-color="#111827"/>
          <stop offset="100%" stop-color="#0f172a"/>
        </linearGradient>

        <radialGradient id="redGlow" cx="80%" cy="25%" r="60%">
          <stop offset="0%" stop-color="rgba(198, 40, 40, 0.32)"/>
          <stop offset="60%" stop-color="rgba(198, 40, 40, 0.05)"/>
          <stop offset="100%" stop-color="rgba(0, 0, 0, 0)"/>
        </radialGradient>

        <radialGradient id="subtleGlow" cx="20%" cy="85%" r="50%">
          <stop offset="0%" stop-color="rgba(79, 70, 229, 0.16)"/>
          <stop offset="100%" stop-color="rgba(0, 0, 0, 0)"/>
        </radialGradient>
      </defs>

      <!-- Background -->
      <rect width="${width}" height="${height}" fill="url(#bgGrad)"/>
      <rect width="${width}" height="${height}" fill="url(#redGlow)"/>
      <rect width="${width}" height="${height}" fill="url(#subtleGlow)"/>

      <!-- Elegant Outer Border -->
      <rect x="28" y="28" width="${width - 56}" height="${height - 56}" rx="28" fill="none" stroke="rgba(255, 255, 255, 0.12)" stroke-width="2"/>

      <!-- Accent Top Corner Dot / Tag -->
      <g transform="translate(80, 80)">
        <rect width="180" height="34" rx="17" fill="rgba(198, 40, 40, 0.18)" stroke="rgba(198, 40, 40, 0.4)" stroke-width="1.5"/>
        <circle cx="18" cy="17" r="5" fill="#ef4444"/>
        <text x="32" y="22" font-family="'Segoe UI', Roboto, sans-serif" font-size="13" font-weight="700" fill="#fca5a5" letter-spacing="1">RESMI • KOTA MALANG</text>
      </g>

      <!-- Main Headline -->
      <text x="80" y="270" font-family="'Paytone One', 'Segoe UI', Impact, sans-serif" font-size="52" font-weight="800" fill="#ffffff" letter-spacing="0.5">
        Program Magang SMK &amp; Mahasiswa
      </text>

      <!-- Subheadline -->
      <text x="80" y="330" font-family="'Paytone One', 'Segoe UI', Impact, sans-serif" font-size="34" font-weight="700" fill="#f87171">
        + Pelatihan Digital Marketing UMKM &amp; Instansi
      </text>

      <!-- Description Paragraph -->
      <text x="80" y="388" font-family="'Segoe UI', Roboto, sans-serif" font-size="20" fill="rgba(255, 255, 255, 0.78)" font-weight="400">
        Praktik kerja lapangan terstruktur berbasis proyek riil dengan bimbingan mentor industri.
      </text>
      <text x="80" y="420" font-family="'Segoe UI', Roboto, sans-serif" font-size="20" fill="rgba(255, 255, 255, 0.78)" font-weight="400">
        Menghasilkan portofolio siap kerja di bidang IT, SEO, Desain Grafis &amp; Bisnis Digital.
      </text>

      <!-- Feature Pill Badges -->
      <g transform="translate(80, 470)">
        <!-- Pill 1 -->
        <rect x="0" y="0" width="220" height="46" rx="23" fill="rgba(255, 255, 255, 0.08)" stroke="rgba(255, 255, 255, 0.16)" stroke-width="1"/>
        <text x="24" y="28" font-family="'Segoe UI', Roboto, sans-serif" font-size="15" font-weight="600" fill="#ffffff">✓ PKL SMK &amp; Mahasiswa</text>

        <!-- Pill 2 -->
        <rect x="236" y="0" width="220" height="46" rx="23" fill="rgba(255, 255, 255, 0.08)" stroke="rgba(255, 255, 255, 0.16)" stroke-width="1"/>
        <text x="260" y="28" font-family="'Segoe UI', Roboto, sans-serif" font-size="15" font-weight="600" fill="#ffffff">✓ Portofolio Proyek Riil</text>

        <!-- Pill 3 -->
        <rect x="472" y="0" width="200" height="46" rx="23" fill="rgba(255, 255, 255, 0.08)" stroke="rgba(255, 255, 255, 0.16)" stroke-width="1"/>
        <text x="496" y="28" font-family="'Segoe UI', Roboto, sans-serif" font-size="15" font-weight="600" fill="#ffffff">✓ Sertifikat Resmi</text>
      </g>

      <!-- Bottom Domain Watermark -->
      <g transform="translate(80, 560)">
        <text x="0" y="0" font-family="'Segoe UI', Roboto, sans-serif" font-size="16" font-weight="600" fill="#94a3b8">
          📍 Mojolangu, Lowokwaru, Kota Malang  •  🌐 programmagang.web.id
        </text>
      </g>
    </svg>
  `;

  // Watermark badge with 12% opacity
  const watermarkBadge = await sharp(badgeBuffer)
    .composite([{
      input: Buffer.from([255, 255, 255, 30]), // low opacity
      raw: { width: 1, height: 1, channels: 4 },
      tile: true,
      blend: 'dest-in'
    }])
    .toBuffer();

  const finalImage = await sharp(Buffer.from(svgOverlay))
    .composite([
      {
        input: watermarkBadge,
        top: 95,
        left: 700,
        blend: 'over'
      },
      {
        input: logoLightBuffer,
        top: 75,
        left: 740,
        blend: 'over'
      }
    ])
    .png({ quality: 90 })
    .toFile(path.join(__dirname, 'public/images/og-magangpro.png'));

  console.log('OG Image generated successfully at public/images/og-magangpro.png');
}

createOgImage().catch(console.error);
