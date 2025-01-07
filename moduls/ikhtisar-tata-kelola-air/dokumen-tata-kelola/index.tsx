import { Container, Title, DocumentLink } from "components";
import React from "react";

interface Props {
  lang?: any;
  data?: any;
}

function index(props: Props) {
  const { lang, data } = props;
  const hero = data?.hero;
  const sign = lang === "en" ? "_eng" : "_ind";

  const titleDokumenTataKelola = data?.titleDokumenTataKelola?.content;

  return (
    <Container>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        <Title label={hero["title_dokumen" + sign]} />
        <div className="col-span-1 sm:col-span-2">
          {titleDokumenTataKelola?.map((item: any, key: any) => {
            const child = item?.content_dokumen_tata_kelola?.map(
              (item: any) => {
                return { label: item["name_file" + sign], url: item.file };
              }
            );
            return (
              <DocumentLink
                key={key}
                label={item["title_content" + sign]}
                child={child}
                isBorder
                isCollapse
                isDownloadChild
              />
            );
          })}
        </div>
      </div>
    </Container>
  );
}

export default index;
