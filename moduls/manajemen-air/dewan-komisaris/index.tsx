import { Button, Container, Title } from "components";
import React from "react";
import { useRouter } from "next/router";
import { Avatar } from "@chakra-ui/react";
import { id, en } from "utils/language";
import { formatImage } from "utils/formatter";

interface Props {
  options?: Array<string>;
  isOptions?: boolean;
  data?: any;
  lang?: any;
}

function index(props: Props) {
  const {
    options = ["Komisaris", "Direksi"],
    isOptions = true,
    data = [],
    lang,
  } = props;
  const router = useRouter();
  const path = router.pathname;
  const routePath = path.split("/")[3];

  const initTab = routePath?.replace(/-/g, " ");

  const { id: routeId } = router.query;

  const language: any = lang === "id" ? id : en;
  console.log(data, "dk");
  

  return (
    <Container>
      {isOptions && (
        <div
          className={`p-2 grid gap-3 sm:gap-0 sm:flex justify-around bg-transparent sm:bg-indigo1`}
        >
          {options.map((item, key) => (
            <Button
              key={key}
              variant={
                initTab?.toLowerCase() === item.toLowerCase()
                  ? "solid"
                  : "ghost"
              }
              label={
                <div className="mx-auto font-bold">
                  {language?.manajemen?.[item.toLowerCase().replace(/ /g, "-")]}
                </div>
              }
              onClick={() => {
                if (item.includes("Audit")) {
                  router.push(
                    `/${routeId}/perangkat-tata-kelola/komite-audit-dan-manajemen-resiko`
                  );
                } else if (item.includes("Nominasi")) {
                  router.push(
                    `/${routeId}/perangkat-tata-kelola/komite-nominasi-dan-remunerasi`
                  );
                } else if (item.includes("Sekretaris")) {
                  router.push(
                    `/${routeId}/perangkat-tata-kelola/sekretaris-perusahaan`
                  );
                }
                // else if (item.includes("Internal")) {
                //   router.push(
                //     `/${routeId}/perangkat-tata-kelola/piagam-internal-audit`
                //   );
                // }
                else if (item.includes("Direksi")) {
                  router.push(`/${routeId}/manajemen-air/direksi`);
                } else {
                  router.push(`/${routeId}/manajemen-air/komisaris`);
                }
              }}
              style={{ width: "100%" }}
            />
          ))}
        </div>
      )}

      <div className="mt-10">
        <Title label={language?.manajemen?.[routePath]} />

        {data?.map((item: any, key: any) => {
          const image = formatImage(item?.image);
          const content =
            lang === "en"
              ? {
                  jabatan: item?.jabatan_eng,
                  description: item?.description_eng,
                }
              : {
                  jabatan: item?.jabatan_ind,
                  description: item?.description_ind,
                };

          if (!item?.image || !item?.name) return null;

          return (
            <div
              key={key}
              className={`${
                key % 2 !== 0 ? "sm:flex-row-reverse" : "sm:flex-row"
              } grid sm:flex items-center justify-start mt-10 gap-10`}
            >
              <div
                className="min-w-[300px] shadow-lg flex justify-center items-center"
                data-aos="fade-in"
              >
                {item.image ? (
                  <img src={image} alt={image} width={300} height={300} />
                ) : (
                  <div className="w-[300px] h-[300px] flex justify-center items-center">
                    <Avatar src={item.image} size="2xl" />
                  </div>
                )}
              </div>
              <div className="grid grid-cols-1 gap-3">
                <div className="text-[24px] font-bold text-gray-700" data-aos="fade-up">
                  {item.name}
                </div>
                <div
                  className="text-neutral text-[16px] font-bold"
                  data-aos="fade-up"
                >
                  {content.jabatan}
                </div>
                <div
                  className="text-gray-500 text-[16px] text-justify"
                  data-aos="fade-up"
                >
                  <div
                    dangerouslySetInnerHTML={{ __html: content.description }}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Container>
  );
}

export default index;
