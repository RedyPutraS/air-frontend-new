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
    icons: JSON.parse(hero.image_produk_kami)
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
  
  return (
    <Container>
      <Image src={logo} alt="mnk logo" width={70} height={70} />
      <div className="relative mb-10 mt-4">
        <Title label={hero["title" + sign]} />
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

        <div className="mt-5" data-aos="fade-in">
          <Button
            label={lang === "en" ? "See Website " : "Lihat Website"}
            rightIcon={<ArrowRightIcon className="w-5" />}
            onClick={() => {
              window.open(mnkUrl, "_blank");
            }}
          />
        </div>
      </div>

      <div className="mt-16">
      <Title label="Produk Kami" />

      <div className="mt-5 grid grid-cols-1 sm:grid-cols-5 gap-5">
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
        </div>

        <div className="mt-5">
          {fileSertifikatDanPenghargaan?.map((item: any, key: any) => (
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
