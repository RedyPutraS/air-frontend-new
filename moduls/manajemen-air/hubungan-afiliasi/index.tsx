import { Collapse, IconButton } from "@chakra-ui/react";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";
import { Container, Title } from "components";
import React, { useState } from "react";

interface Props {
  data?: any;
  lang?: any;
}

function index(props: Props) {
  const { data, lang } = props;
  const [open, setOpen] = useState(false);

  const content =
    lang === "en"
      ? {
          title: data?.title_eng,
        }
      : {
          title: data?.title,
        };

  const image = data ? JSON.parse(data?.image) : "";

  return (
    <Container>
      <div className="relative mb-5">
        <Title label={content.title} />
        <IconButton
          variant="ghost"
          aria-label="open hubungan-afiliasi"
          onClick={() => setOpen(!open)}
          position="absolute"
          right={0}
          top={1}
          _focus={{ boxShadow: "none" }}
        >
          {open ? (
            <MinusIcon className="w-8 font-bold text-warning6" />
          ) : (
            <PlusIcon className="w-8 font-bold text-warning6" />
          )}
        </IconButton>
      </div>

      <Collapse in={open}>
        <div className="max-w-full overflow-x-auto">
          <img src={image} alt="hubungan-afiliasi" className="w-full" />
        </div>
      </Collapse>
    </Container>
  );
}

export default index;
