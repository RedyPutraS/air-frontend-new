import { Container, DocumentCard, Title, Pagination } from "components";
import React from "react";
import useLanguage from "hooks/useLanguage";

interface Props {
  data?: any;
}

function index(props: Props) {
  const { data } = props;
  const lang = useLanguage((state) => state.lang);

  const contentLaporanTahunan = data?.contentLaporanTahunan?.content;
  const section_title = data?.hero;

  const content =
    lang === "lang"
      ? {
          title: section_title?.title_eng,
        }
      : {
          title: section_title?.title_ind,
        };

  return (
    <Container>
      <Title label={content.title} />
      <div className="mt-10 grid col-span-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {contentLaporanTahunan.map((item: any, key: any) => (
          <div
            key={key}
            className={`${
              key === 0 ? "col-span-1 sm:col-span-2 lg:col-span-3" : ""
            }`}
            data-aos="fade-up"
            data-aos-duration={400 + key * 100}
          >
            <DocumentCard isLarge={key === 0} item={item} />
          </div>
        ))}
      </div>
      <Pagination />
    </Container>
  );
}

export default index;
