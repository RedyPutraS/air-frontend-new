import { Collapse, IconButton } from "@chakra-ui/react";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";
import { Container, DocumentLink, Title } from "components";
import React, { useState } from "react";

interface Props {
  data?: any;
  lang?: any;
}

function index(props: Props) {
  const { data, lang } = props;
  const [open, setOpen] = useState(true);

  const rows = data?.daftarPemegangSaham?.content;

  const hero = data?.hero;
  const title =
    lang === "en" ? hero?.title_pemegang_eng : hero?.title_pemegang_ind;

  return (
    <Container>
      <div className="relative flex items-center w-full">
        <Title label={title} />

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
            <MinusIcon className="w-8 font-bold text-warning3" />
          ) : (
            <PlusIcon className="w-8 font-bold text-warning3" />
          )}
        </IconButton>
      </div>
      <Collapse in={open}>
        <div className="mt-5">
          {rows?.map((item: any, key: any) => {
            return (
              <DocumentLink
                key={key}
                label={lang === "en" ? item.name_eng : item.name_ind}
                url={item.file}
                isBorder
                isDownload
              />
            );
          })}
        </div>
      </Collapse>
    </Container>
  );
}

export default index;
