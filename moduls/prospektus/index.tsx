import { Container, Title, DocumentLink } from "components";
import useLanguage from "hooks/useLanguage";
import React from "react";

interface Props {
  data?: any;
}

function index(props: Props) {
  const { data } = props;

  const lang = useLanguage((state) => state.lang);

  const contentFileProspektus = data?.contentFileProspektus?.content;

  const content =
    lang === "en"
      ? {
          title: data?.hero?.title_eng,
          description: data?.hero?.description_eng,
        }
      : {
          title: data?.hero?.title_ind,
          description: data?.hero?.description_ind,
        };

  return (
    <Container>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        <div>
          <Title label={content.title} />
          <div
            className="my-5 text-sm font-normal text-gray-500 sm:text-base"
            data-aos="fade-up"
          >
            <div dangerouslySetInnerHTML={{ __html: content.description }} />
          </div>
        </div>
        <div className="col-span-1 sm:col-span-2">
          {contentFileProspektus.map((item: any, key: any) => {
            const label = lang === "en" ? item?.name_eng : item?.name_ind;

            return (
              <DocumentLink
                key={key}
                label={label}
                url={item.file}
                isBorder
                isDownload
                isChild={key > 0}
              />
            );
          })}
        </div>
      </div>
    </Container>
  );
}

export default index;
