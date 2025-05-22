import { Container, DocumentLink, Title } from "components";
import React, { useState } from "react";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";
import { IconButton } from "@chakra-ui/react";

interface Props {
  lang?: any;
  data?: any;
}

function index(props: Props) {
  const { lang, data } = props;

  const hero = data?.hero;
  const sign = lang === "en" ? "_eng" : "_ind";
  const corporateActions = data?.contentAksiKorporasi || [];

  return (
    <Container>
      <div className="grid grid-cols-1">
        <div className="my-1 flex items-center justify-center">
          <Title label={hero["title" + sign]} />
        </div>

        <div className="pl-0 col-span-12 sm:col-span-12 mt-5">
          {corporateActions.map((yearGroup: any, yearIndex: number) => (
            <YearGroup
              key={yearIndex}
              yearGroup={yearGroup}
              sign={sign}
              isLast={yearIndex === corporateActions.length - 1}
            />
          ))}
        </div>
      </div>
    </Container>
  );
}

interface YearGroupProps {
  yearGroup: any;
  sign: string;
  isLast: boolean;
}

const YearGroup = ({ yearGroup, sign, isLast }: YearGroupProps) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex justify-start gap-5 min-h-[70px]">
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
          <div className="mt-1 text-lg font-bold text-gray-700 sm:text-2xl">
            {yearGroup.tahun}
          </div>
          <IconButton
            variant="ghost"
            aria-label="toggle corporate actions"
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

        <div
          className="overflow-hidden transition-all duration-300 ease-in-out"
          style={{
            maxHeight: open ? "1000px" : "0",
            opacity: open ? 1 : 0,
            margin: open ? "12px 0 0 0" : "0",
          }}
        >
          <div className="pt-2 pb-2">
            {yearGroup.content?.map((item: any, key: number) => (
              <DocumentLink
                key={key}
                label={item["name_file" + sign]}
                url={item.file}
                isBorder
                isDownload
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
