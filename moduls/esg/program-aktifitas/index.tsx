import { Container, Title, DocumentLink } from "components";
import React from "react";
import { programAktifitas } from "utils/esg";
import { formatImage } from "utils/formatter";

interface Props {
  data?: any;
  sign?: any;
}

function index(props: Props) {
  const { data, sign } = props;

  const programDanAktivitas = data?.programDanAktivitas?.content;

  const hero = data?.hero;

  return (
    <Container>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        <Title label={hero["title_program" + sign]} />
        <div className="col-span-1 sm:col-span-2">
          {programDanAktivitas.map((item: any, key: any) => {
            const child = item.content_file_program_aktivitas.map(
              (item: any) => {
                return {
                  label: item["name_file" + sign],
                  url: item.file,
                };
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
