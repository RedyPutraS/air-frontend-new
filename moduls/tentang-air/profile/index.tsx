import { Container, Title } from "components";
import React from "react";

interface Props {
  data?: any;
  lang?: any;
}

function index(props: Props) {
  const { data, lang } = props;

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
    <Container>
      <Title label={content.title} />
      <div
        className="my-5 text-sm font-normal text-justify text-gray-500 sm:text-base"
        data-aos="fade-up"
      >
        <article className="prose" style={{ textAlign: "justify", maxWidth: '100%'}}>
        <div dangerouslySetInnerHTML={{ __html: content.description }} />
        </article>
      </div>
    </Container>
  );
}

export default index;
