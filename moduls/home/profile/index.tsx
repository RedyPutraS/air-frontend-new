import React from "react";
import { Title, Button, Container } from "components";
import { useRouter } from "next/router";
import { id, en } from "utils/language";
import { formatSentence } from "utils/formatter";

interface Props {
  data?: any;
  lang?: any;
}

function index(props: Props) {
  const { data, lang } = props;
  const router = useRouter();
  const route = `/${lang}/tentang-air`;

  const language = lang === "id" ? id : en;

  const image = data ? JSON.parse(data?.image) : "";
  const content =
    lang === "en"
      ? {
          title: data?.title_eng,
          description: formatSentence(data?.description_eng),
        }
      : {
          title: data?.title,
          description: formatSentence(data?.description),
        };

  return (
    <Container>
      <div className="mt-10 grid grid-cols-1 lg:grid-cols-5 gap-10">
        <div className="flex items-start justify-center col-span-1 lg:col-span-2">
          <img
            src={image}
            alt="profile1.png"
            className="h-[400px] w-full sm:h-[550px] sm:w-[451px]"
            data-aos="fade-in"
          />
        </div>

        <div className="flex items-center col-span-1 lg:col-span-3">
          <div>
            <Title label={content.title} />
            <div
              className="my-5 text-sm font-normal text-justify text-gray-500 sm:text-base"
              data-aos="fade-up"
            >
              <article className="prose" style={{ textAlign: "justify", maxWidth: '100%'}}>
              <div
                dangerouslySetInnerHTML={{
                  __html: content.description,
                }}
              />
              </article>
            </div>
            <div data-aos="fade-in">
              <Button
                label={language.profil_see}
                onClick={() => router.push(route)}
              />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default index;
