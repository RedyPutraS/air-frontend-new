import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@chakra-ui/react";
import { Container, Content } from "components";
import { useRouter } from "next/router";
import { formatDate, formatImage } from "utils/formatter";

interface Props {
  lang?: any;
  data?: any;
}

function index(props: Props) {
  const { lang, data } = props;
  const router = useRouter();
  const { contentId, idBerita } = router.query;

  const sign = lang === "en" ? "_eng" : "_ind";
  const hero = data?.hero;
  
  let content;
  
  for (let index = 0; index <= data.hero.length; index++) {
    if (hero[index]?.media_ruang_media?.find((val: any) => val.id === Number(idBerita)) !== undefined) {
      content = hero[index]?.media_ruang_media?.find((val: any) => val.id === Number(idBerita));
      break;
    }
  }

  return (
    <Container>
      <div className="mt-10">
        <Button variant="ghost" color="primary" onClick={() => router.back()}>
          &larr; Kembali
        </Button>
      </div>

      <div className="mt-5">
        <div className="mb-5">
          <h1 className={`mt-2 font-bold text-xl sm:text-3xl`}>
            {content["title" + sign]}
          </h1>
          <div className="text-sm font-bold text-neutral sm:text-base mt-5">
            {formatDate(content?.date, lang)}
          </div>
        </div>

        <div className={`w-[100%] h-[230px] sm:h-[500px] relative`}>
          <Image
            src={formatImage(content?.image)}
            alt="ruang-media1"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div
          className="my-5 text-sm font-normal text-justify text-gray-500 sm:text-base"
          data-aos="fade-up"
        >
          <article className="prose" style={{ textAlign: "justify", maxWidth: '100%'}}>
          <div dangerouslySetInnerHTML={{ __html: content["description" + sign] }} />
          </article>
        </div>
      </div>
    </Container>
  );
}

export default index;
