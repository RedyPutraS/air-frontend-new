import { Container, DocumentLink, Table, Title } from "components";
import React from "react";

interface Props {
  lang?: any;
  data?: any;
}

function index(props: Props) {
  const { lang, data } = props;

  const hero = data?.hero;

  const sign = lang === "en" ? "_eng" : "_ind";

  const rows = data?.contentAksiKorporasi?.content;

  return (
    <Container>
      <div className="grid grid-cols-1">
        <div className="my-1 flex items-center justify-center">
        <Title label={hero["title" + sign]} />
        </div>

        <div className="pl-0 col-span-12 sm:col-span-12">
          {rows?.map((item: any, key: any) => {
            return (
              <DocumentLink
                key={key}
                label={item["name_file" + sign]}
                url={item.file}
                isBorder
                isDownload
              />
            );
          })}
        </div>
      </div>
    </Container>
  );
}

export default index;
