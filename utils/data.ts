import {
  idJudi,
  idEdwin,
  idMursid,
  idRatno,
  idZakky,
  enJudi,
  enEdwin,
  enMursid,
  enRatno,
  enZakky,
  idReza,
  enReza,
  idAngelus,
  enAngelus,
  idShafiq,
  enShafiq,
} from "./persons";

export const useDetailData = () => {
  const optionsID: any = {
    "tentang-air": {
      title: "Tentang AIR",
      // description:
      //   "Perusahaan induk Indonesia, yang terdepan di bidang pertambangan dan jasanya, berdedikasi terhadap pertumbuhan berkelanjutan dan inovasi di sektor sumber daya alam",
      image: "/images/window/tentang-air.png",
    },
    "manajemen-air": {
      title: "Manajemen AIR",
      description: "",
      image: "/images/window/manajemen-air.png",
    },
    "hubungan-afiliasi": {
      title: "Hubungan Afiliasi",
      description: "",
      image: "/images/window/komite-audit.png",
    },
    "informasi-dan-ikhtisar-keuangan": {
      title: "Informasi & Ikhtisar Keuangan",
      description: "",
      image: "/images/window/informasi-dan-ikhtisar-keuangan.png",
    },
    "laporan-tahunan": {
      title: "Laporan Tahunan",
      description: "",
      image: "/images/window/laporan-tahunan.png",
    },
    prospektus: {
      title: "Prospektus",
      description: "",
      image: "/images/window/prospektus.png",
    },
    "rapat-umum-pemegang-saham": {
      title: "Rapat Umum Pemegang Saham",
      description: "",
      image: "/images/window/rapat-umum-pemegang-saham.png",
    },
    "informasi-saham": {
      title: "Informasi Saham, Bonus dan Dividen",
      description: "",
      image: "/images/window/informasi-saham.png",
    },
    "aksi-korporasi": {
      title: "Aksi Korporasi",
      description: "",
      image: "/images/window/aksi-korporasi.png",
    },
    "keterbukaan-informasi": {
      title: "Keterbukaan Informasi",
      description: "",
      image: "/images/window/keterbukaan-informasi.png",
    },
    "paparan-publik": {
      title: "Paparan Publik",
      description: "",
      image: "/images/window/paparan-publik.png",
    },
    "bormindo-nusantara": {
      title: "Bormindo Nusantara",
      description: "",
      image: "/images/window/bormindo-nusantara.png",
    },
    "multi-nitrotama-kimia": {
      title: "Multi Nitrotama Kimia",
      description: "",
      image: "/images/window/multi-nitrotama-kimia.png",
    },
    esg: {
      title: "ESG & Sustainability",
      description: "",
      image: "/images/window/esg.png",
    },
    "ikhtisar-tata-kelola-air": {
      title: "Ikhtisar Tata Kelola AIR",
      description: "",
      image: "/images/window/ikhtisar-tata-kelola-air.png",
    },
    "dokumen-tata-kelola": {
      title: "Dokumen Tata Kelola",
      description: "",
      image: "/images/window/keterbukaan-informasi.png",
    },
    "sistem-pengaduan-pelanggaran": {
      title: "Sistem Pengaduan Pelanggaran",
      description: "",
      image: "/images/window/sistem-pengaduan-pelanggaran.png",
    },
    "perangkat-tata-kelola": {
      title: "Perangkat Tata Kelola",
      description: "",
      image: "/images/window/komite-audit.png",
    },
    karir: {
      title: "Karir",
      description: "",
      image: "/images/window/karir.png",
    },
    "kebijakan-privasi": {
      title: "Kebijakan Privasi",
      description: "",
      image: "/images/window/karir.png",
    },
  };

  const optionsEN: any = {
    "tentang-air": {
      title: "About AIR",
      // description:
      //   "An Indonesian holding company, leading in mining and its services, dedicated to sustainable growth and innovation in the natural resources sector",
      image: "/images/window/tentang-air.png",
    },
    "manajemen-air": {
      title: "AIR Management",
      description: "",
      image: "/images/window/manajemen-air.png",
    },
    "hubungan-afiliasi": {
      title: "Affiliate Relationships",
      description: "",
      image: "/images/window/komite-audit.png",
    },
    "informasi-dan-ikhtisar-keuangan": {
      title: "Financial Information & Overview",
      description: "",
      image: "/images/window/informasi-dan-ikhtisar-keuangan.png",
    },
    "laporan-tahunan": {
      title: "Annual report",
      description: "",
      image: "/images/window/laporan-tahunan.png",
    },
    prospektus: {
      title: "Prospectus",
      description: "",
      image: "/images/window/prospektus.png",
    },
    "rapat-umum-pemegang-saham": {
      title: "General Meeting of Shareholders",
      description: "",
      image: "/images/window/rapat-umum-pemegang-saham.png",
    },
    "informasi-saham": {
      title: "Stock Information, Bonuses and Dividends",
      description: "",
      image: "/images/window/informasi-saham.png",
    },
    "aksi-korporasi": {
      title: "Corporate Action",
      description: "",
      image: "/images/window/aksi-korporasi.png",
    },
    "keterbukaan-informasi": {
      title: "Information Disclosure",
      description: "",
      image: "/images/window/keterbukaan-informasi.png",
    },
    "paparan-publik": {
      title: "Public Exposure",
      description: "",
      image: "/images/window/paparan-publik.png",
    },
    "bormindo-nusantara": {
      title: "Bormindo Nusantara",
      description: "",
      image: "/images/window/bormindo-nusantara.png",
    },
    "multi-nitrotama-kimia": {
      title: "Multi Nitrotama Kimia",
      description: "",
      image: "/images/window/multi-nitrotama-kimia.png",
    },
    esg: {
      title: "ESG & Sustainability",
      description: "",
      image: "/images/window/esg.png",
    },
    "ikhtisar-tata-kelola-air": {
      title: "AIR Governance Overview",
      description: "",
      image: "/images/window/ikhtisar-tata-kelola-air.png",
    },
    "dokumen-tata-kelola": {
      title: "Governance Document",
      description: "",
      image: "/images/window/keterbukaan-informasi.png",
    },
    "sistem-pengaduan-pelanggaran": {
      title: "Violation Complaint System",
      description: "",
      image: "/images/window/sistem-pengaduan-pelanggaran.png",
    },
    "perangkat-tata-kelola": {
      title: "Governance Toolkit",
      description: "",
      image: "/images/window/komite-audit.png",
    },
    karir: {
      title: "Career",
      description: "",
      image: "/images/window/karir.png",
    },
    "kebijakan-privasi": {
      title: "Privacy Policy",
      description: "",
      image: "/images/window/karir.png",
    },
  };

  return { optionsID, optionsEN };
};

export const roles: any = {
  id: {
    komisaris: [idJudi, idEdwin, idMursid],
    direksi: [idRatno, idZakky],
    "komite-audit-dan-manajemen-resiko": [idMursid, idReza, idAngelus],
    "komite-nominasi-dan-remunerasi": [idJudi, idEdwin, idShafiq],
  },

  en: {
    komisaris: [enJudi, enEdwin, enMursid],
    direksi: [enRatno, enZakky],
    "komite-audit-dan-manajemen-resiko": [enMursid, enReza, enAngelus],
    "komite-nominasi-dan-remunerasi": [enJudi, enEdwin, enShafiq],
  },
};
