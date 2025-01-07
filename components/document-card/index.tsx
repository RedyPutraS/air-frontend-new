import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";
import { Button } from "components";
import { useRouter } from "next/router";
import React from "react";
import { formatSentence, removeHTMLTags } from "utils/formatter";

interface DocumentProps {
  isLarge?: boolean;
  item?: any;
}

export default function DocumentCard(props: DocumentProps) {
  const {
    isLarge = false,
    item = {
      tahun: "2018",
      image_file:
        '["https://backend.ancorair.com/uploads/doc/ScreenShot2023-12-04at13.49.03_05M7m.png"]',
      file: '["https://backend.ancorair.com/uploads/doc/PTAncoraIndonesiaResourcesTbk_AR2018_05QQG.pdf"]',
      size: "8.796KB",
      title_ind: "LANGKAH TEPAT UNTUK MEMPERCEPAT PERTUMBUHAN",
      title_eng: "ON TRACK TO ACCELERATE GROWTH",
      description_ind: "<p>LANGKAH TEPAT UNTUK MEMPERCEPAT PERTUMBUHAN</p>",
      description_eng: "<p>ON TRACK<br />\r\nTO ACCELERATE GROWTH</p>",
      active: 1,
      status: "publish",
      created_at: "2023-12-04T06:50:05.000000Z",
      updated_at: "2023-12-04T06:50:05.000000Z",
    },
  } = props;

  const router = useRouter();
  const { id } = router.query;

  const content =
    id === "en"
      ? { title: item.title_eng, desc: item.description_eng }
      : { title: item.title_ind, desc: item.description_ind };

  const cover = item?.image_file ? JSON.parse(item?.image_file) : "";
  const url = item?.file ? JSON.parse(item?.file) : "";

  return (
    <div
      className={`${
        isLarge ? "grid text-center sm:text-left sm:flex" : "grid text-center"
      } p-8 bg-gray-100 gap-5 h-full`}
    >
      <img
        src={cover}
        alt="cover-doc.png"
        className={
          isLarge
            ? "h-[150px] sm:h-[350px] mx-auto sm:mx-0"
            : "h-[150px] mx-auto"
        }
      />
      <div className="relative pb-[90px] grid grid-cols-1 gap-3 w-full">
        <div
          className={`w-[100px] h-[40px] flex items-center justify-center bg-blue-50 text-indigo2 font-semibold ${
            isLarge ? "mx-auto sm:mx-0" : "mx-auto"
          }`}
        >
          {item.tahun}
        </div>

        <div
          className={`${
            isLarge ? "text-[18px] sm:text-[24px]" : "text-[18px]"
          } font-bold text-gray-700`}
        >
          {content.title}
        </div>

        {isLarge && (
          <div className="hidden sm:block text-[16px] text-gray-500 max-h-[190px] overflow-y-auto text-justify">
            <div dangerouslySetInnerHTML={{ __html: content.desc }} />
          </div>
        )}

        <div className="absolute bottom-0 left-0 w-full">
          <Button
            variant="outline"
            rightIcon={<ArrowDownTrayIcon className="w-5 font-bold" />}
            label="Download"
            style={{ width: "100%" }}
            onClick={() => {
              window.open(url, "_blank");
            }}
          />
          <div className="text-neutral text-[10px] text-center mt-2">
            {item.size}
          </div>
        </div>
      </div>
    </div>
  );
}
