import React, {useEffect} from "react";
import Image from "next/image";
import { Button, Container, Content, DocumentLink, Title } from "components";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { bormindoUrl } from "utils/business";

interface Props {
  lang?: any;
  data?: any;
}

function index(props: Props) {
  const { lang, data } = props;

  const hero = data?.hero;
  const sectionIconContent = data?.sectionIconContent?.content;
  const fileSertifikatDanPenghargaan =
    data?.fileSertifikatDanPenghargaan?.content;
  const sign = lang === "en" ? "_eng" : "_ind";

  const logo = hero?.image_title ? JSON.parse(hero?.image_title)[0] : "";
  const image_content_title = hero?.image_content_title
    ? JSON.parse(hero?.image_content_title)[0]
    : "";
  const image_page = hero?.image_page ? JSON.parse(hero?.image_page)[0] : "";

  // useEffect(() => {
  //   // Mengakses elemen berdasarkan tag menggunakan querySelector
  //   const textElement = document.querySelector('h2'); // Ganti 'div.my-text' dengan tag dan kelas yang sesuai

  //   // Lakukan sesuatu dengan elemen tersebut
  //   if (textElement) {
  //     textElement.style.color = 'red'; // Ganti dengan warna yang diinginkan
  //   }

  //   // Bersihkan efek samping jika diperlukan
  //   return () => {
  //     // Contoh: mengembalikan warna teks ke warna default saat komponen di-unmount
  //     if (textElement) {
  //       textElement.style.color = ''; // Menghapus warna yang ditetapkan
  //     }
  //   };
  // }, []);

  return (
    <Container>
      <Image src={logo} alt="bormindo" width={150} height={70} />
      <div className="relative mb-10 mt-4">
        <Title label={hero["title" + sign]} />
        <div className="float-none mt-5 sm:float-right sm:mt-0 sm:ml-5">
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

        <div className="mt-5" data-aos="fade-in">
          <Button
            label={lang === "en" ? "See Website " : "Lihat Website"}
            rightIcon={<ArrowRightIcon className="w-5" />}
            onClick={() => {
              window.open(bormindoUrl, "_blank");
            }}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        {sectionIconContent.map((item: any, key: any) => (
          <div
            key={key}
            className="flex items-center pt-3 border-t-4 gap-5 border-t-warning1"
          >
            <div className="flex justify-center w-16">
              <img
                src={item?.file ? JSON.parse(item?.file)[0] : ""}
                alt={`file ${key}`}
                height={60}
              />
            </div>
            <div>
              <div className="flex items-end gap-2">
                <div className="text-2xl font-bold text-gray-700 sm:text-3xl">
                  {item.jumlah}
                </div>
                <div className="text-sm text-gray-700 sm:text-base">
                  {item["desc_span" + sign]}
                </div>
              </div>
              <div className="text-xl font-bold text-gray-700 sm:text-2xl">
                {item["name" + sign]}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="relative h-[200px] sm:h-[500px] mt-10">
        <Image
          src={image_page}
          alt="landscape-content"
          layout="fill"
          objectFit="contain"
          data-aos="fade-in"
          data-aos-duration="1000"
        />
      </div>
      <div className="mt-5">
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

      <div className="mt-16">
        <Title label={hero["title_sertifikat" + sign]} />
        <div className="mt-5">
          {fileSertifikatDanPenghargaan.map((item: any, key: any) => (
            <DocumentLink
              key={key}
              label={item["name" + sign]}
              url={item.file}
              isBorder
              isDownload
            />
          ))}
        </div>
      </div>
    </Container>
  );
}

export default index;
