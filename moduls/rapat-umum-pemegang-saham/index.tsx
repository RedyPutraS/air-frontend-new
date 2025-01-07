import { Container, Title, DocumentLink } from "components";
import React from "react";
import { formatImage } from "utils/formatter";

interface Props {
  lang?: any;
  data?: any;
}

function index(props: Props) {
  const { lang, data } = props;

  const hero = data?.hero;
  const titleContentRapatUmum = data?.titleContentRapatUmum?.["section-title"];
  const sign = lang === "en" ? "_eng" : "_ind";

  return (
    <Container>
      <div className="grid grid-cols-1 gap-5">
        <div>
          <Title label={hero["title" + sign]} />
        </div>
        <div className="mt-5">
          {titleContentRapatUmum.map((item: any, key: any) => {
            const child = item?.file_content_rapat_umum?.map((item: any) => {

              return {
                label: item["name_file" + sign],
                url: item?.file,
              };
            });

            return (
              <DocumentLink
                key={key}
                label={item["title_content" + sign]}
                child={child}
                isBorder
                isDownloadChild
                url={item.file}
                isDownload
                isCollapse
              />
            );
          })}
        </div>
      </div>
    </Container>
  );
}

export default index;
