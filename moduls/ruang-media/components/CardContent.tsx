import Image from "next/image";
import React from "react";
import { useRouter } from "next/router";

interface Props {
  isBig?: boolean;
  image?: string;
  date?: string;
  title?: string;
  body?: any;
  tabIndex?: any;
  lang?: any;
  router?: any;
}

const CardContent = ({
  isBig = false,
  image = "",
  date = "25 Agustus 2015",
  title = "OKAS restrukturisasi utang US$ 12,7 juta",
  body = "JAKARTA. PT Ancora Indonesia Resources Tbk (OKAS) merestrukturisasi pinjaman investasi senilai US$ 12,7 juta",
  tabIndex = 0,
  lang,
}: Props) => {
  const route = `/${lang}/ruang-media/${tabIndex}`;
  const router = useRouter();

  return (
    <div
      className="p-3 cursor-pointer hover:bg-blue-50 transition-all duration-300"
      onClick={() => router.push(route)}
    >
      <div
        className={`w-[100%] ${
          isBig ? "h-[210px] sm:h-[340px]" : "h-[210px]"
        } relative`}
      >
        <Image src={image} alt="ruang-media1" layout="fill" objectFit="cover" />
      </div>
      <div className="mt-3 text-sm font-bold text-neutral sm:text-base">
        {date}
      </div>
      <h1
        className={`mt-2 text-sm font-bold ${
          isBig ? "text-xl sm:text-3xl" : "text-lg sm:text-xl"
        }`}
      >
        {title}
      </h1>
      <div
        className="mt-1 text-sm text-neutral sm:text-base"
        dangerouslySetInnerHTML={{ __html: body }}
      ></div>
    </div>
  );
};

export default CardContent;
