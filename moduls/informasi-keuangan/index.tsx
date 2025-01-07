import { Collapse, IconButton } from "@chakra-ui/react";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";
import { Container, Title, DocumentLink } from "components";
import React, { useState } from "react";

interface Props {
  lang?: any;
  data?: any;
}
interface InterimProps {
  isLast?: boolean;
  item?: any;
}

function index(props: Props) {
  const { lang, data } = props;

  const hero = data?.hero;
  const sign = lang === "en" ? "_eng" : "_ind";
  const ikhtisarDataKeuangan = data?.ikhtisarDataKeuangan?.content;
  
  const tahun_tengah_tahun = data?.tahun_tengah_tahun?.content;
  const interim = data?.interim?.content;

  return (
    <Container>
      <Title label={hero["title" + sign]} />
      <div className="mt-10 text-lg font-bold text-gray-700 sm:text-2xl">
        {hero["title_ikhtisar" + sign]}
      </div>
      <div className="mt-5">
        {ikhtisarDataKeuangan.map((item: any, key: any) => (
          <DocumentLink
            key={key}
            label={item["name" + sign]}
            url={item.file}
            isBorder
            isDownload
          />
        ))}
      </div>

      <div className="mt-10 text-lg font-bold text-gray-700 sm:text-2xl">
        {lang === "en"
          ? "Annual & Semi-Annual Reports"
          : "Laporan Tahunan & Tengah Tahunan"}
      </div>
      <div className="mt-5">
        {tahun_tengah_tahun.map((item: any, key: any) => {
          return (
            <Interim
              key={key}
              isLast={key === tahun_tengah_tahun.length - 1}
              item={item}
            />
          );
        })}
      </div>

      <div className="mt-10 mb-5 text-lg font-bold text-gray-700 sm:text-2xl">Interim</div>
      {interim.map((item: any, key: any) => {
        return (
          <Interim key={key} isLast={key === interim.length - 1} item={item} />
        );
      })}
    </Container>
  );
}

export default index;

const Interim = ({ isLast, item }: InterimProps) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="flex justify-start gap-5 min-h-[70px]"
      // data-aos="fade-up"
      // data-aos-once="true"
    >
      <div className="relative w-16">
        <div className="w-[40px] h-[40px] flex justify-center items-center bg-indigo1 rounded-full">
          <div className="w-[20px] h-[20px] rounded-full bg-primary relative flex justify-center z-10" />
        </div>

        {!isLast && (
          <div className="border-l-[3px] border-dashed border-l-gray-400 absolute top-[20px] left-[18.5px] h-full"></div>
        )}
      </div>

      <div className="w-full">
        <div className="relative flex items-center w-full">
          <div className="mt-1 text-lg font-bold text-gray-700 sm:text-2xl">{item.tahun}</div>
          <IconButton
            variant="ghost"
            aria-label="open hubungan-afiliasi"
            onClick={() => setOpen(!open)}
            position="absolute"
            right={0}
            top={-1}
            _focus={{ boxShadow: "none" }}
          >
            {open ? (
              <MinusIcon className="w-8 font-bold text-warning5" />
            ) : (
              <PlusIcon className="w-8 font-bold text-warning5" />
            )}
          </IconButton>
        </div>
        <Collapse in={open}>
          <div className="pt-5 pb-2 grid grid-cols-1 lg:grid-cols-5 gap-1 lg:gap-3">
            {item.data_interim_tahun?.map((item: any, key: any) => (
              <DocumentLink
                key={key}
                label={item.name}
                url={item.file}
                isDownload
              />
            ))}
          </div>
        </Collapse>
      </div>
    </div>
  );
};
