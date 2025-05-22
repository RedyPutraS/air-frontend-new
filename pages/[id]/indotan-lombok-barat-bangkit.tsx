import type { NextPage } from "next";

import { ILBB } from "moduls";
import { Layout } from "components";
import useCustomQuery from "hooks/useCustomQuery";
import useLanguage from "hooks/useLanguage";

const Home: NextPage = () => {
  const query_key = "multi-nitrotama-kimia";
  const { data, status } = useCustomQuery(query_key);
  const dataa = {
    hero: {
        active: 1,
        created_at: "2023-12-08T08:29:42.000000Z",
        description_hero_eng: null,
        description_hero_ind: "<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>",
        description_page_eng: `<p>ILBB obtained a technical report from SRK Consulting, Canada, which was prepared in 2013. This report provided preliminary information on the mineral resources within ILBB’s exploration area, including inferred resources such as gold, silver, and copper.</p><p>These mineral resources form the foundation for the company’s mining project development. Over time, ILBB recognized the need to take further steps to ensure the accuracy of its existing exploration data.</p><p>In 2023, ILBB initiated advanced exploration activities aimed at verifying the 2013 exploration data. This effort not only seeks to update the existing mineral resource information but also aims to enhance certainty regarding the company’s mineral reserves by adhering to the international JORC Code 2012 standards. This standard is a global benchmark that offers detailed guidelines for estimating mineral resources and reserves, improving transparency in reporting.</p>The exploration process is expected to be completed in the second half of 2024 and is anticipated to provide a stronger foundation for future mining project development.</p><p>ILBB’s mining concession spans an area of 10,088 hectares, divided into three primary zones: Pelangan and Mecanggah (both classified as Epithermal zones), and Selodong (a Porphyry zone). Previous analyses have indicated inferred resources of gold, silver, and copper in all three areas.</p>`,
        description_page_ind: "<p>ILBB memiliki laporan teknis dari SRK Consulting, Kanada, yang disusun pada tahun 2013. Laporan ini memberikan informasi awal mengenai kandungan mineral di wilayah eksplorasi ILBB, yang mencakup sumber daya tereka berupa emas, perak, dan tembaga.</p><p>Kandungan mineral tersebut menjadi dasar bagi pengembangan proyek pertambangan Perseroan. Seiring berjalannya waktu, ILBB merasa perlu melakukan langkah-langkah lebih lanjut untuk memastikan keakuratan data eksplorasi yang sudah ada.</p><p>Pada tahun 2023, ILBB melakukan kegiatan eksplorasi lanjutan yang bertujuan untuk memverifikasi data eksplorasi tahun 2013. Kegiatan ini tidak hanya bertujuan untuk memperbarui informasi terkait sumber daya mineral yang ada, tetapi juga untuk meningkatkan kepastian dalam hal cadangan mineral Perseroan, dengan mengacu pada standar internasional Kode JORC 2012. Standar ini merupakan acuan global yang memberikan pedoman lebih rinci terkait estimasi sumber daya dan cadangan mineral, serta meningkatkan transparansi dalam pelaporan.</p><p>Proses eksplorasi ini diperkirakan selesai pada semester kedua tahun 2024, dan diharapkan mampu memberikan dasar yang lebih kuat dalam pengembangan proyek tambang di masa mendatang.</p>",
        description_sertifikat_eng: "<p>On September 10th, 2015, MNK was bestowed the Award for Occupational Safety and Health (SMK3) from Indonesia&rsquo;s Ministry of Labor.</p>",
        description_sertifikat_ind: "<p>Pada tanggal 10 September 2015, PT MNK mendapatkan Penghargaan Sistem Manajemen Keselamatan dan Kesehatan Kerja (SMK3) dari Kementerian Ketenagakerjaan Republik Indonesia.</p>",
        description_title_eng: `PT Indotan Lombok Barat Bangkit (“ILBB”) is a limited liability company engaged in gold and associated mineral mining activities located in West Lombok Regency, West Nusa Tenggara Province.</p><p>ILBB’s mining concession covers an area of 10,088 hectares, divided into three main zones: Pelangan, Mecanggah (both an Epithermal zone), and Selodong (a Porphyry zone). Previous analyses have identified inferred resources of gold, silver, and copper in all three zones.`,
        description_title_ind: "<p>PT Indotan Lombok Barat Bangkit (“ILBB”) merupakan perseroan terbatas yang memiliki kegiatan usaha di bidang pertambangan emas dan mineral pengikutnya, yang terletak di Kabupaten Lombok Barat, Provinsi Nusa Tenggara Barat.<br><br>Luas wilayah pertambangan ILBB adalah 10.088 hektar, yang terbagi menjadi tiga wilayah utama yaitu Pelangan, Mecanggah (keduanya daerah Epitermal), serta Selodong (daerah Porifiri). Berdasarkan analisis sebelumnya, ketiga daerah ini memiliki kandungan tereka berupa emas, perak, dan tembaga.</p>",
        id: 1,
        image_content_title: JSON.stringify(["https://firebasestorage.googleapis.com/v0/b/image-cloud-3c4d9.appspot.com/o/aa.jpg?alt=media&token=504dd85e-3d2a-43c2-a2f5-663c05309a3e"]),
        image_hero: JSON.stringify(["https://backend.ancorair.com/uploads/doc/PANORAMA13SEPTEMBER2011edit_341sT.jpg"]),
        image_page: JSON.stringify(["https://firebasestorage.googleapis.com/v0/b/image-cloud-3c4d9.appspot.com/o/kananpageilbb.jpg?alt=media&token=f33dd184-547c-48e9-9c0b-8fd8eb6866ca"]),
        image_produk_kami: JSON.stringify([
            "https://backend.ancorair.com/uploads/doc/z3_4430u.jpg",
            "https://backend.ancorair.com/uploads/doc/z2_4413U.jpg",
            "https://backend.ancorair.com/uploads/doc/z1_44XUx.jpg",
            "https://backend.ancorair.com/uploads/doc/z4_44QuR.jpg",
            "https://backend.ancorair.com/uploads/doc/z5_4495z.jpg"
        ]),
        image_title: JSON.stringify(["https://firebasestorage.googleapis.com/v0/b/image-cloud-3c4d9.appspot.com/o/ILBB%20Transparant.png?alt=media&token=5b928452-3553-466c-97d2-610ec068399e"]),
        status: "publish",
        title_eng: "Operational Overview",
        title_hero_eng: "Indotan Lombok Barat Bangkit",
        title_hero_ind: "Indotan Lombok Barat Bangkit",
        title_ind: "Tinjauan Operasional",
        title_produk_eng: "Our product",
        title_produk_ind: "Produk Kami",
        title_sertifikat_eng: "Certificates and Awards",
        title_sertifikat_ind: "Sertifikat dan Penghargaan",
        updated_at: "2024-06-13T07:00:44.000000Z"
      }
    };
  
  const lang = useLanguage((state) => state.lang);

  return (
    <Layout data={dataa} status={status}>
      <ILBB lang={lang} data={dataa} />
    </Layout>
  );
};

export default Home;
