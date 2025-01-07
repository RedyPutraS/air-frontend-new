import { Container, Title } from "components";
import React from "react";

interface Props {
  data?: any;
  lang?: any;
  title?: any;
}

function index(props: Props) {
  const { data, lang, title } = props;
  
  return (
    <Container>
      <Title label={lang === "en" ? title.title_eng : title.title} />
      <div
        className="flex justify-start max-w-[100%] my-5 overflow-x-auto max-h-[300px] overflow-y-auto"
        data-aos="fade-up"
      >
        {data.map((item: any, key: any) => {
          const year = new Date(item.date).getFullYear();

          const month = new Date(item.date).getUTCMonth();
          const monthNames = [
            "Januari",
            "Februari",
            "Maret",
            "April",
            "Mei",
            "Juni",
            "Juli",
            "Agustus",
            "September",
            "Oktober",
            "November",
            "Desember",
          ];
          const monthString = monthNames[month];

          const content =
            lang === "en"
              ? {
                  title: item.title_eng,
                  description: item.description_eng,
                }
              : {
                  title: item.title,
                  description: item.description,
                };

          const image = item?.image ? JSON.parse(item?.image) : "";

          return (
            <div className="min-w-[350px]" key={key}>
              <div className="flex items-center justify-start w-full">
                <div className="px-5 py-3 font-bold text-warning3 bg-warning1 text-2xl sm:text-[28px]">
                  {year}
                </div>
                <div className="w-full border-b-2 border-dashed border-b-warning1 opacity-30" />
              </div>

              <div className="p-3">
                <div className="text-sm text-neutral sm:text-lg">
                  {monthString}
                </div>
                <div className="text-lg font-bold text-gray-700 sm:text-2xl">
                  {content.title}
                </div>
                <div className="mt-2 text-sm text-gray-500 sm:text-base">
                  <div
                    dangerouslySetInnerHTML={{ __html: content.description }}
                  />
                </div>

                {image && (
                  <img
                    src={image}
                    alt={`milestone-${key}`}
                    className="w-full mt-5"
                  />
                )}
              </div>
            </div>
          );
        })}
      </div>
    </Container>
  );
}

export default index;
