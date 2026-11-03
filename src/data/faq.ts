export interface FaqItem {
  question: string;
  answer: string;
}

export const faqList: FaqItem[] = [
  {
    question: 'Siapa saja yang dapat mendaftar program magang di PixxelPro?',
    answer: 'Program magang terbuka untuk siswa SMK aktif yang membutuhkan tempat PKL (jurusan RPL, TKJ, Multimedia, DKV, Bisnis Digital, Pemasaran) serta mahasiswa D3/D4/S1 dari jurusan terkait teknologi informasi, desain, dan bisnis digital.'
  },
  {
    question: 'Bagaimana alur pendaftaran magang di PixxelPro?',
    answer: 'Alur pendaftaran dimulai dengan memilih bidang yang diminati, mempersiapkan surat pengantar dari sekolah/kampus atau CV singkat, kemudian menghubungi tim PixxelPro melalui WhatsApp resmi (+62 895-6390-68080) untuk konfirmasi ketersediaan posisi dan jadwal periode.'
  },
  {
    question: 'Di mana lokasi pelaksanaan program PixxelPro?',
    answer: 'PixxelPro berlokasi di Mojolangu, Kota Malang, Jawa Timur 65142. Informasi teknis mengenai pembagian jadwal dan metode pelaksanaan akan disampaikan saat sesi koordinasi pendaftaran.'
  },
  {
    question: 'Apakah PixxelPro menyediakan pelatihan untuk UMKM dan instansi?',
    answer: 'Ya, PixxelPro menyelenggarakan program pelatihan digital marketing yang dirancang khusus untuk UMKM, instansi pemerintah, dan perusahaan swasta dengan materi praktis yang dapat disesuaikan dengan kebutuhan tim Anda.'
  },
  {
    question: 'Apakah ada formulir online atau pembuatan akun di website?',
    answer: 'Untuk versi awal (MVP), PixxelPro tidak menggunakan sistem login akun atau database formulir online. Semua proses konsultasi, tanya jawab ketersediaan slot, dan pendaftaran dilakukan secara langsung dan transparan melalui saluran WhatsApp resmi.'
  }
];
