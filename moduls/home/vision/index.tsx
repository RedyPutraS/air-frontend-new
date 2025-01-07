import React from "react";
import Image from "next/image";
import { Title, Container } from "components";
import { id, en } from "utils/language";
import { formatImage } from "utils/formatter";
import { title } from "process";

interface Props {
  data?: any;
  lang?: any;
  misions?: any;
}

function index(props: Props) {
  const { data, lang, misions } = props;
  const sign = lang === "en" ? "_eng" : "";
  const language = lang === "en" ? en : id;

  const philosophies = data?.filosofi?.filosofi_point;
  // const misions = data?.misi?.
  const misi = {
    title: 'Misi Perseroan',
    title_eng: 'Company Mission'
  };

  const visi = data?.visi;
  const filosofi = data?.filosofi;

  return (
    <Container>
      {/* <Title label={language.vision_title} /> */}
      <div className="mt-5 grid grid-cols-1 lg:grid-cols-2 gap-5">
        <div className="p-5 bg-gray-100 lg:p-8">
        <Title label={visi["title" + sign]} isUnderline={false} />
          <div
            className="mt-2 font-normal text-gray-500 text-[14px] sm:text-[16px] mb-5"
            data-aos="fade-in"
          >
            <div
              dangerouslySetInnerHTML={{
                __html: visi["description" + sign],
              }}
            />
          </div>

          <Title label={misi["title" + sign]} isUnderline={false}/>
          {misions.map((item: any, key: any) => (
            <div
              key={key}
              className="flex items-center justify-start mb-3 gap-5"
              data-aos="fade-in"
            >
              <div className="text-gray-500 text-[14px] sm:text-[16px] w-[90%] text-justify mt-2">
                <p className="font-bold">{item['title'+sign]}</p>
                <div
                  dangerouslySetInnerHTML={{
                    __html: item["description" + sign],
                  }}
                />
              </div>
            </div>
          ))}

          {/* <div className="h-[370px] relative">
            <Image
              src={formatImage(visi?.image)}
              alt="vision.png"
              layout="fill"
              objectFit="cover"
              data-aos="fade-in"
              data-aos-duration="2000"
            />
          </div> */}
        </div>

        <div className="p-5 bg-gray-100 lg:p-8">
          <Title label={filosofi["title" + sign]} isUnderline={false} />
          <div
            className="mt-2 font-normal text-gray-500 text-[14px] sm:text-[16px]"
            data-aos="fade-in"
          >
            <div
              dangerouslySetInnerHTML={{
                __html: filosofi["description" + sign],
              }}
            />
          </div>

          {philosophies.map((item: any, key: any) => (
            <div
              key={key}
              className="flex items-center justify-start mb-3 gap-5"
              data-aos="fade-in"
            >
              <img
                src={formatImage(item?.image)}
                alt={formatImage(item?.image)}
                className="h-[40px] w-[40px]"
              />
              <div className="text-gray-500 text-[14px] sm:text-[16px] w-[90%] text-justify">
                <div
                  dangerouslySetInnerHTML={{
                    __html: item["description" + sign],
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="text-sm italic text-gray-500 mt-8 mb-[-30px] w-full sm:w-[60%]">
        <div dangerouslySetInnerHTML={{ __html: visi.span }} />
      </div>
    </Container>
  );
}

export default index;
