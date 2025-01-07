export const dataKeuangan = [
  { label: "Lorem ipsum dolor" },
  { label: "Lorem ipsum dolor" },
  { label: "Lorem ipsum dolor" },
];

export const prospektus = [
  {
    label: "Prospektus Rights Issue II AIR 2009_Final",
    url: "https://ancorair.com/air/doc/report/Prospektus%20IPO%20OKANSA%202006_Final.pdf",
  },
  {
    label: "Prospektus Rights Issue I TDR 2008_Final",
    url: "https://ancorair.com/air/doc/report/Prospektus%20Rights%20Issue%20I%20TDR%202008_Final.pdf",
    isChild: true,
  },
  {
    label: "Prospektus IPO OKANSA 2006_Final",
    url: "https://ancorair.com/air/doc/report/Prospektus%20Rights%20Issue%20II%20AIR%202009_Final.pdf",
    isChild: true,
  },
];

export const rapatUmumPemegangSaham = [
  {
    label: "RUPS Tahunan dan RUPSLB  (AGMS & EGMS) - 12 Mei 2023",
    child: [
      {
        label:
          "a. Pengumuman RUPS Tahunan dan RUPSLB (AGMS & EGMS Announcement)",
      },
      {
        label:
          "b. Rencana Transaksi Material peningkatan jumlah fasilitas pinjaman yang diterima oleh salah satu anak Perusahaan secara tidak langsung Perseroan.",
      },
      {
        label:
          "c. Rencana Transaksi Material yang dilakukan oleh salah satu Perusahaan Terkendali",
      },
      {
        label:
          "d. Dalam Rangka Penambahan Modal Tanpa Memberikan Hak Memesan Efek Terlebih Dahulu (“PMTHMETD”)",
      },
      { label: "e. Rencana Pemberian Jaminan oleh Perseroan" },
    ],
  },
  {
    label:
      "Pemanggilan RUPS Tahunan dan RUPSLB (AGMS & EGMS Convocation) - 29 Mei 2023",
  },
  {
    label: "Perubahan dan/atau Tambahan Atas Keterbukaan Informasi",
  },
  {
    label: "Ringkasan Risalah RUPS Tahunan",
  },
  {
    label: "Ringkasan Risalah RUPSLB",
  },
  {
    label: "RUPSLB Kedua - 30 Juni 2023",
  },
  {
    label: "Ringkasan Risalah RUPSLB Kedua - 30 Juni 2023",
  },
];

export const statistikChart = {
  labels: [
    "PT Ancora Resources",
    "Summer Harvest Pte. Ltd",
    "Pictet and CIE S/A Burgundy",
    "Public",
  ],
  data: [12, 10, 7, 5],
};
