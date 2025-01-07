import { Button, Container, DocumentLink, Title } from "components";
import React from "react";

interface Props {
  data?: any;
  lang?: any;
}

function index(props: Props) {
  const { data, lang } = props;

  const paparanPublik = data?.paparanPublik?.content;
  const sahamBonus = data?.sahamBonus?.content;
  const hero = data?.hero;

  const titlePaparanPublik = data?.titlePaparanPublik?.["section-title"]?.[0];
  const sign = lang === "en" ? "_eng" : "_ind";

  const content =
    lang === "en"
      ? {
          title_paparan: hero?.title_paparan_eng,
          title_saham: hero?.title_saham_eng,
        }
      : {
          title_paparan: hero?.title_paparan_ind,
          title_saham: hero?.title_saham_ind,
        };

  return (
    <Container>
      <div className="grid grid-cols-1 gap-5 sm:gap-20">
        {/* <div>
          <Title label={titlePaparanPublik["title" + sign]} />
          <div className="mt-5">
            {paparanPublik.map((item: any, key: any) => (
              <DocumentLink
                key={key}
                label={lang === "en" ? item.name_eng : item.name_ind}
                url={item?.file}
                isBorder
                isDownload
              />
            ))}
          </div>
        </div> */}
        <div>
          <Title label={content.title_saham} />
          <div className="mt-5">
            {sahamBonus.map((item: any, key: any) => (
              <DocumentLink
                key={key}
                label={lang === "en" ? item.name_eng : item.name_ind}
                url={item?.file}
                isBorder
                isDownload
              />
            ))}
          </div>
        </div>
      </div>

      {/* <div className="mt-5"> */}
      {/*   <Button */}
      {/*     variant="outline" */}
      {/*     label={lang === "en" ? "See All" : "Lihat Semua"} */}
      {/*   /> */}
      {/* </div> */}
    </Container>
  );
}

export default index;
