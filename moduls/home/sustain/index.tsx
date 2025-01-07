import React from "react";
// import Image from "next/image";
import { Title, Button } from "components";
import { id, en } from "utils/language";
import { useRouter } from "next/router";

interface Props {
  data?: any;
  lang?: any;
}

function index(props: Props) {
  const { data, lang } = props;
  const language = lang === "id" ? id : en;
  const router = useRouter();
  const route = `/${lang}/tentang-air`;

  const content =
    lang === "en"
      ? {
          title: data?.title_eng,
          description: data?.description_eng,
        }
      : {
          title: data?.title,
          description: data?.description,
        };

  return (
    <div className="relative grid grid-cols-1 lg:grid-cols-2">
      <div
        className="h-[300px] lg:h-[600px] relative sm:border-r-8 sm:border-r-warning1"
        style={{
          backgroundImage: `url('/images/window/sustain1.png')`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
        }}
      ></div>
      <div
        className="relative h-[300px] lg:h-[600px]"
        style={{
          backgroundImage: `url('/images/window/sustain2.png')`,
          backgroundSize: "100% 100%",
        }}
      >
        <div
          className="w-full h-full"
          style={{
            background: `linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.3) 90%)`,
          }}
        ></div>
      </div>

      <div className="absolute p-8 bg-white top-[150px] lg:top-[130px] left-5 lg:left-[40%] w-[88%] lg:w-[500px]">
        <Title label={content.title} />
        <div
          className="my-5 text-sm font-normal text-justify text-gray-500 sm:text-base"
          data-aos="fade-up"
        >
          <article className="prose" style={{ textAlign: "justify", maxWidth: '100%'}}>
          <div dangerouslySetInnerHTML={{ __html: content.description }} />
          </article>
        </div>
        <div data-aos="fade-in">
          <Button
            label={language.profil_more}
            onClick={() => router.push(route)}
          />
        </div>
      </div>
    </div>
  );
}

export default index;
