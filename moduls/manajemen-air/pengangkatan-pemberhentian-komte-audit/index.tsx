import { Collapse, IconButton } from "@chakra-ui/react";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";
import { Container, DocumentLink, Title } from "components";
import React, { useState } from "react";

interface Props {
  lang?: any;
  data?: any;
  filter?: any;
}

function index(props: Props) {
  const { lang, data, filter = {} } = props;

  const sign = lang === "en" ? "_eng" : "_ind";

  const titleContentDokumenTataKelolaPage =
    data?.titleContentDokumenTataKelolaPage?.content?.filter((val: any) =>
      val["title_dokumen_eng"].includes(filter)
    );

  return (
    <Container>
      {titleContentDokumenTataKelolaPage.map((item: any, key: any) => {
        const [open, setOpen] = useState(false);
        
        return (
          <div key={key} className="mt-5">
            <div className="relative pr-16 mb-5">
              <Title label={item["title_dokumen" + sign]} />
              {/* <IconButton
                variant="ghost"
                aria-label="open hubungan-afiliasi"
                onClick={() => setOpen(!open)}
                position="absolute"
                right={0}
                top={1}
                _focus={{ boxShadow: "none" }}
              >
                {open ? (
                  <MinusIcon className="w-8 font-bold text-warning3" />
                ) : (
                  <PlusIcon className="w-8 font-bold text-warning3" />
                )}
              </IconButton> */}
            </div>

            {/* <Collapse in={open}>
              {item.content_dokumen_tata_kelola_page.map(
                (item: any, key: any) => (
                  <DocumentLink
                    key={key}
                    label={item["name_file" + sign]}
                    url={item.file}
                    isBorder
                    isDownload
                  />
                )
              )}
            </Collapse> */}
            <div className="mt-5">
              {item.content_dokumen_tata_kelola_page.map((item: any, key: any) => (
                <DocumentLink
                  key={key}
                  label={item["name_file" + sign]}
                  url={item.file}
                  isBorder
                  isDownload
                  isCollapse={false}
                />
              ))}
            </div>

            <div className="mt-10">
              <div className="relative pr-16 mb-5">
                <Title isUnderline={item["title_dokumen2" + sign] == null ? false : true} label={item["title_dokumen2" + sign]} />
              </div>
              <div className="mt-5">
                {item.content_dokumen_tata_kelola_page_2?.map((item: any, key: any) => (
                  <DocumentLink
                    key={key}
                    label={item["name_file" + sign]}
                    url={item.file}
                    isBorder
                    isDownload
                    isCollapse={false}
                  />
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </Container>
  );
}

export default index;
