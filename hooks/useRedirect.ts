import { useEffect } from "react";
import { useRouter } from "next/router";
import useLanguage from "./useLanguage";

function useRedirect() {
  const router = useRouter();
  const lang = useLanguage((state) => state.lang);
  const setLang = useLanguage((state) => state.setLang);

  const navlinks = [
    // { label_ind: "Tentang Kami", label_eng: "About Us", url: "tentang-air" },
    {
      label_ind: "Tentang Kami",
      label_eng: "About Us",
      isDropdown: true,
      options: [
        {
          label_ind: "Tentang Kami",
          label_eng: "About Us",
          url: "tentang-air",
        },
        {
          label_ind: "Profil Manajemen",
          label_eng: "Management Profile",
          url: "manajemen-air/komisaris",
        },
        // { label_ind: "Keterbukaan Informasi", url: 'Keterbukaan-informasi' }, // <-- hide
      ],
      width: 300,
    },
    {
      label_ind: "Info Investor",
      label_eng: "Investor Info",
      isDropdown: true,
      options: [
        {
          label_ind: "Informasi dan Ikhtisar Keuangan",
          label_eng: "Financial Information and Overview",
          url: "informasi-dan-ikhtisar-keuangan",
        },
        {
          label_ind: "Laporan Tahunan",
          label_eng: "Annual report",
          url: "laporan-tahunan",
        },
        { label_ind: "Prospektus", label_eng: "Prospectus", url: "prospektus" },
        {
          label_ind: "Rapat Umum Pemegang Saham",
          label_eng: "General Meeting of Shareholders",
          url: "rapat-umum-pemegang-saham",
        }, // <-- hide
        {
          label_ind: "Informasi Saham",
          label_eng: "Stock Information",
          url: "informasi-saham",
        },
        {
          label_ind: "Presentasi Perusahaan",
          label_eng: "Corporate Presentation",
          url: "presentasi-perusahaan",
        },
        {
          label_ind: "Paparan Publik",
          label_eng: "Public Expose",
          url: "paparan-publik",
        },
        {
          label_ind: "Aksi Korporasi",
          label_eng: "Corporate Action",
          url: "aksi-korporasi",
        },
        // { label_ind: "Keterbukaan Informasi", url: 'Keterbukaan-informasi' }, // <-- hide
      ],
      width: 300,
    },
    {
      label_ind: "Bisnis",
      label_eng: "Business",
      isDropdown: true,
      options: [
        {
          label_ind: "Bormindo Nusantara",
          label_eng: "Bormindo Nusantara",
          url: "bormindo-nusantara",
        },
        {
          label_ind: "Multi Nitrotama Kimia",
          label_eng: "Multi Nitrotama Kimia",
          url: "multi-nitrotama-kimia",
        },
        {
          label_ind: "Indotan Lombok Barat Bangkit",
          label_eng: "Indotan Lombok Barat Bangkit",
          url: "indotan-lombok-barat-bangkit",
        },
      ],
      width: 200,
    },
    { label_ind: "ESG", label_eng: "ESG", url: "esg" }, // <-- hide
    {
      label_ind: "Tata Kelola Perusahaan",
      label_eng: "Corporate Governance",
      isDropdown: true,
      options: [
        {
          label_ind: "Ikhtisar Tata Kelola AIR",
          label_eng: "GCG Overview",
          url: "ikhtisar-tata-kelola-air",
        }, // <-- hide
        {
          label_ind: "Perangkat Tata Kelola",
          label_eng: "Governance",
          isDropdown: true,
          options: [
            {
              label_ind: "Komite Audit dan Manajemen Resiko",
              label_eng: "Audit and Risk Management Committee",
              url: "perangkat-tata-kelola/komite-audit-dan-manajemen-resiko",
            },
            {
              label_ind: "Komite Nominasi dan Remunerasi",
              label_eng: "Nomination and Remuneration Committee",
              url: "perangkat-tata-kelola/komite-nominasi-dan-remunerasi",
            },
            {
              label_ind: "Sekretaris Perusahaan",
              label_eng: "Corporate Secretary",
              url: "perangkat-tata-kelola/sekretaris-perusahaan",
            },
            {
              label_ind: "Internal Audit Unit",
              label_eng: "Internal Audit Unit",
              url: "perangkat-tata-kelola/internal-audit-unit",
            },
            {
              label_ind: "Profile Profesi Penunjang",
              label_eng: "Supporting Professional Profile",
              url: "perangkat-tata-kelola/profile-profesi-penunjang",
            },
            // {
            //   label_ind: "Piagam Audit Internal",
            //   label_eng: "Internal Audit Charter",
            //   url: "perangkat-tata-kelola/piagam-internal-audit",
            // },
          ],
        },
        {
          label_ind: "Sistem Pengaduan Pelanggaran",
          label_eng: "Whistleblowing System",
          url: "sistem-pengaduan-pelanggaran",
        },
      ],
      width: 250,
    },
    {
      label_ind: "Ruang Media",
      label_eng: "Media Room",
      url: "ruang-media",
      width: 200,
    },
    // {
    //   label_ind: "Karir",
    //   label_eng: "Career",
    //   url: 'karir',
    //   width: 200,
    // },
  ];

  const { id } = router.query;
  const endpoint = router.asPath.split("/").slice(2).join("/");

  useEffect(() => {
    if (typeof id === "string") {
      setLang(id);
    }
  }, [id]);

  const redirect = (url: string) => {
    const route = `/${lang}/${url}`;
    router.push(route);
  };

  const onChangeLang = (label: string) => {
    delete router.query.id;
    delete router.query.contentId;
    if (label.toLowerCase().includes("id")) {
      if (id) {
        router.push({ pathname: `/id/${endpoint}`, query: router.query });
      } else {
        setLang("id");
      }
    } else {
      if (id) {
        router.push({ pathname: `/en/${endpoint}`, query: router.query });
      } else {
        setLang("en");
      }
    }
  };

  const sign = lang === "en" ? "_eng" : "_ind";

  return {
    redirect,
    navlinks,
    lang,
    onChangeLang,
    router,
    sign,
  };
}

export default useRedirect;
