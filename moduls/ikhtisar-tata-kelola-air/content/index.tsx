import { Container, Content, Title } from "components";
import React from "react";

interface Props {
  lang?: any;
  data?: any;
}

function index(props: Props) {
  const { lang, data } = props;
  const hero = data?.hero;
  const sign = lang === "en" ? "_eng" : "_ind";
  

  return (
    <Container>
      <Title label={hero["title_ikhtisar" + sign]} />

      <div className="mt-8" />
      <Content
        row={{
          body: (
            <article className="prose" style={{ textAlign: "justify", maxWidth: '100%'}}>
            <div
              dangerouslySetInnerHTML={{
                __html: hero.description_ikhtisar_ind,
              }}
            />
            </article>
          ),
        }}
      />
    </Container>
  );
}

export default index;
