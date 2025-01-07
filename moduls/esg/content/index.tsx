import { Container, Title } from "components";
import React from "react";

interface Props {
  hero?: any;
  sign?: any;
}

function index(props: Props) {
  const { hero, sign } = props;

  return (
    <Container>
      <Title label={hero["title_tinjauan" + sign]} />

      <div
        className="my-5 text-sm font-normal text-justify text-gray-500 sm:text-base"
        data-aos="fade-up"
      >
        <article className="prose" style={{ textAlign: "justify", maxWidth: '100%'}}>
        <div
          dangerouslySetInnerHTML={{
            __html: hero["description_tinjauan" + sign],
          }}
        />
        </article>
      </div>
    </Container>
  );
}

export default index;
