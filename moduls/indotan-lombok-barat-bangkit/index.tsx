import React from "react";
import Image from "next/image";
import { Button, Container, Content, DocumentLink, Title } from "components";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import {
  MnkAnfoIcon,
  MnkDetIcon,
  MnkMaxIcon,
  MnkPrillIcon,
} from "components/icons";
import { mnkUrl } from "utils/business";
import { Milestone, MilestoneIndo } from "moduls";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
// import "swiper/swiper-bundle.min.css";

interface Props {
  lang?: any;
  data?: any;
}

function index(props: Props) {
  const { lang, data } = props;

  const hero = data?.hero;
  // const sectionIconContent = data?.sectionIconContent?.content;
  const fileSertifikatDanPenghargaan =
  data?.fileSertifikatDanPenghargaanMulti?.content;
  const sign = lang === "en" ? "_eng" : "_ind";
  
  const logo = hero?.image_title ? JSON.parse(hero?.image_title)[0] : "";
  const image_content_title = hero?.image_content_title
  ? JSON.parse(hero?.image_content_title)[0]
  : "";
  const image_page = hero?.image_page ? JSON.parse(hero?.image_page)[0] : "";
  
  // const dadada = hero.image_produk_kami;
  
  const dataProductKami = {
    icons: [
      "https://firebasestorage.googleapis.com/v0/b/image-cloud-3c4d9.appspot.com/o/emas1N.png?alt=media&token=8208c9d9-25c2-41c7-a806-e14b095742f6",
      "https://firebasestorage.googleapis.com/v0/b/image-cloud-3c4d9.appspot.com/o/perakN.png?alt=media&token=f7173af1-c4ff-4356-8569-344b7962c227",
      "https://firebasestorage.googleapis.com/v0/b/image-cloud-3c4d9.appspot.com/o/tembaga.png?alt=media&token=1370dbd6-239e-43cc-8417-b84459bad433",
    ]
  };
  const dataProgramPemberdayaan = {
    icons: [
      "https://firebasestorage.googleapis.com/v0/b/image-cloud-3c4d9.appspot.com/o/1ilbb.png?alt=media&token=e84a270d-3643-4d7c-84a2-3cacff4dece0",
      "https://firebasestorage.googleapis.com/v0/b/image-cloud-3c4d9.appspot.com/o/2ilbb.png?alt=media&token=fea677d1-2003-4d62-9c18-20006a79f388",
      "https://firebasestorage.googleapis.com/v0/b/image-cloud-3c4d9.appspot.com/o/3ilbb.png?alt=media&token=938da224-e271-42eb-96cb-728e9f456868",
      "https://firebasestorage.googleapis.com/v0/b/image-cloud-3c4d9.appspot.com/o/4ilbb1.png?alt=media&token=41e99461-2e19-4ad8-b99d-5a18883f5850",
    ]
  };
  

  const products = [
    {
      icon: <MnkPrillIcon />,
    },
    {
      icon: <MnkAnfoIcon />,
    },
    {
      icon: <MnkDetIcon />,
    },
    {
      icon: <MnkDetIcon />,
    },
    {
      icon: <MnkMaxIcon />,
    },
  ];

  const dataa = {
    sectionTitleMilestone: {
        section_title: {
            id: 2,
            title: "Jejak Langkah",
            title_eng: "Milestones",
            content_id: 3,
            content_alias: "sectiontitlemilestone",
            active: 1,
            status: "publish",
            created_at: "2024-01-05T02:48:57.000000Z",
            updated_at: "2024-01-18T08:49:17.000000Z"
        }
    },
    contentMilestone: {
        content: [
          {
            id: 15,
              description: null,
              image: null,
              date: "2024-11-07",
              date_desc: "2024-onwards",
              content_id: 4,
              content_alias: "milestone",
              active: 1,
              status: "publish",
              created_at: "2023-12-28T01:59:40.000000Z",
              updated_at: "2023-12-28T01:59:40.000000Z",
              description_eng: null,
              title: "• Laporan JORC akan diumumkan pada awal Q3.<br>• Perusahaan akan memulai pembangunan pabrik pengolahan dan infrastruktur pada pertengahan 2024<br>• Produksi emas direncanakan mulai pada Q3 2026.",
              title_eng: "• The JORC report will be announced at the beginning of Q3.<br>• The company will start construction of the processing plant and infrastructure by mid 2024<br>• Start of gold production by Q3 2026"
          },
          {
            id: 15,
              description: null,
              image: null,
              date: "2023-11-07",
              date_desc: "2023",
              content_id: 4,
              content_alias: "milestone",
              active: 1,
              status: "publish",
              created_at: "2023-12-28T01:59:40.000000Z",
              updated_at: "2023-12-28T01:59:40.000000Z",
              description_eng: null,
              title: "Menyelesaikan pengeboran eksplorasi pada akhir Q4 2023",
              title_eng: "Completed the exploration drilling at the end of Q4 2023."
          },
          {
            id: 13,
            description: null,
            image: null,
            date: "2022-01-14",
            date_desc: "2020-2022",
            content_id: 4,
            content_alias: "milestone",
            active: 1,
            status: "publish",
            created_at: "2023-12-12T07:43:03.000000Z",
            updated_at: "2023-12-12T07:43:03.000000Z",
            description_eng: null,
            title: "Perolehan kembali ijin eksplorasi dan pertambangan, setelah sebelumnya dicabut karena kurangnya aktivitas selama pandemi.",
            title_eng: "Perolehan kembali ijin eksplorasi dan pertambangan, setelah sebelumnya dicabut karena kurangnya aktivitas selama pandemi."
          },
          {
            id: 13,
            description: null,
            image: null,
            date: "2019-01-14",
            date_desc: "2019",
            content_id: 4,
            content_alias: "milestone",
            active: 1,
            status: "publish",
            created_at: "2023-12-12T07:43:03.000000Z",
            updated_at: "2023-12-12T07:43:03.000000Z",
            description_eng: null,
            title: "Pada tanggal 14 Januari 2019, PT Indotan Lombok Barat Bangkit mendapatkan Izin Usaha Pertambangan Operasi Produksi berdasarkan Surat Keputusan Kepala Badan Koordinasi Penanaman Modal No. 3/1/IUP/PMA/2019 tanggal 14 Januari 2019 tentang Persetujuan Peningkatan Tahap Izin Usaha Pertambangan Operasi Produksi dalam rangka Penanaman Modal Asing untuk Komoditas Emas kepada PT Indotan Lombok Barat Bangkit (“IUP OP”).",
            title_eng: "Pada tanggal 14 Januari 2019, PT Indotan Lombok Barat Bangkit mendapatkan Izin Usaha Pertambangan Operasi Produksi berdasarkan Surat Keputusan Kepala Badan Koordinasi Penanaman Modal No. 3/1/IUP/PMA/2019 tanggal 14 Januari 2019 tentang Persetujuan Peningkatan Tahap Izin Usaha Pertambangan Operasi Produksi dalam rangka Penanaman Modal Asing untuk Komoditas Emas kepada PT Indotan Lombok Barat Bangkit (“IUP OP”)."
          },
          {
            id: 15,
              description: null,
              image: null,
              date: "2017-11-07",
              date_desc: "2017",
              content_id: 4,
              content_alias: "milestone",
              active: 1,
              status: "publish",
              created_at: "2023-12-28T01:59:40.000000Z",
              updated_at: "2023-12-28T01:59:40.000000Z",
              description_eng: null,
              title: "Pada tanggal 7 November 2017, PT Ancora Indonesia Resouces, Tbk (“Perseroan”) efektif menyelesaikan akuisisi atas 100% saham Indotan Lombok, Pte, Ltd. Transaksi pengambilalihan ini telah mendapatkan persetujuan Rapat Umum Pemegang Saham Perseroan pada tanggal 30 Oktober 2017.",
              title_eng: "Pada tanggal 7 November 2017, PT Ancora Indonesia Resouces, Tbk (“Perseroan”) efektif menyelesaikan akuisisi atas 100% saham Indotan Lombok, Pte, Ltd. Transaksi pengambilalihan ini telah mendapatkan persetujuan Rapat Umum Pemegang Saham Perseroan pada tanggal 30 Oktober 2017."
          },
        ]
    }
};

  
  return (
    <Container>
      <Image src={logo} alt="mnk logo" width={70} height={70} />
      <div className="relative mb-10 mt-4">
        <Title label={"Indotan Lombok Barat Bangkit"} />
        <div className="float-none mt-5 sm:float-right sm:mt-0 sm:ml-3">
          <Image
            src={image_content_title}
            alt="portrait-content"
            height={280}
            width={350}
            data-aos="fade-in"
            data-aos-duration="1000"
          />
        </div>
        <Content
          row={{
            body: (
              <article className="prose" style={{ textAlign: "justify", maxWidth: '100%'}}>
              <div
                dangerouslySetInnerHTML={{
                  __html: hero["description_title" + sign],
                }}
              />
              </article>
            ),
          }}
        />

        {/* <div className="mt-5" data-aos="fade-in">
          <Button
            label={lang === "en" ? "See Website " : "Lihat Website"}
            rightIcon={<ArrowRightIcon className="w-5" />}
            onClick={() => {
              window.open(mnkUrl, "_blank");
            }}
          />
        </div> */}
      </div>

      <div className="mt-16">
        <Title label="Proses Eksplorasi" />

        <div className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-1">
          {dataProductKami.icons.map((icon:any, key:any) => (
            <div
              key={key}
              className={`flex items-center justify-center ${
                key < dataProductKami.icons.length - 1
                  ? "border-b-2 border-b-gray-200 sm:border-b-transparent sm:border-r-2 sm:border-r-gray-200"
                  : ""
              }`}
            >
              <img src={icon} alt={`Product ${key + 1}`} className="max-w-full h-[200px] lg:h-[170px]" />
            </div>
          ))}
        </div>
      </div>

      {/* <div className="md:flex md:flex-wrap  justify-between bg-slate-300">
        <div className="mt-5">
          <Content
            row={{
              body: (
                <article className="prose md:max-w-full lg:max-w-[650px]" style={{ textAlign: "justify"}}>
                <div
                  dangerouslySetInnerHTML={{
                    __html: hero["description_page" + sign],
                  }}
                />
                </article>
              ),
            }}
          />
        </div>
        <div className="relative h-[500px] sm:h-[500px] w-[300px] mx-auto lg:mx-0">
          <Image
            src={image_page}
            alt="landscape-content"
            layout="fill"
            objectFit="contain"
            data-aos="fade-in"
            data-aos-duration="1000"
          />
        </div>
      </div> */}

      <div className="relative mb-10 my-16 xl:h-[400px]">
        <Content
          row={{
            body: (
              <article className="prose" style={{ textAlign: "justify", maxWidth: '100%'}}>
                <div
                  dangerouslySetInnerHTML={{
                    __html: hero["description_page" + sign],
                  }}
                />
              </article>
            ),
          }}
        />
      </div>

      <MilestoneIndo lang={lang} data={dataa?.contentMilestone?.content} title={dataa?.sectionTitleMilestone?.section_title} /> 

      <div className="mt-16">
        <Title label={"Program Pemberdayaan Masyarakat"} />
        <div className="mt-5">
          <Swiper
            className="xl:h-[350px] md:h-[300px]"
            spaceBetween={10}
            slidesPerView={1}
            pagination={{ clickable: true }}  // Menambahkan pagination
            modules={[Pagination]}  // Impor module pagination
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
          >
            {dataProgramPemberdayaan.icons.map((icon: any, key: any) => (
              <SwiperSlide key={key}>
                <div className="flex items-center justify-center h-[480px] md:h-auto">
                  <img
                    src={icon}
                    alt={`Product ${key + 1}`}
                    className="max-w-full h-[400px] md:h-[250px] lg:h-[300px]"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        {/* <div className="mt-5">
          <Content
          row={{
            body: (
              <article className="prose" style={{ textAlign: "justify", maxWidth: '100%'}}>
              <div
                dangerouslySetInnerHTML={{
                  __html: hero["description_sertifikat" + sign],
                }}
              />
              </article>
            ),
          }}
            // row={{
            //   body: hero["description_sertifikat" + sign],
            // }}
          />
        </div> */}

        {/* <div className="mt-5">
          {fileSertifikatDanPenghargaan?.map((item: any, key: any) => (
            <DocumentLink
              key={key}
              label={item["name" + sign]}
              url={item.file}
              isBorder
              isDownload
            />
          ))}
        </div> */}
      </div>
    </Container>
  );
}

export default index;
