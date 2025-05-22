import { Collapse, IconButton } from "@chakra-ui/react";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";
import { Container, Title, DocumentLink } from "components";
import { DownloadIcon, FolderIcon } from "components/icons";
import React, { useState } from "react";

interface Props {
  lang?: any;
  data?: any;
}

function index(props: Props) {
  const { lang, data } = props;
  const hero = data?.hero;
  const sign = lang === "en" ? "_eng" : "_ind";

  const titleDokumenTataKelola = data?.titleDokumenTataKelola?.content;
  const [open, setOpen] = useState(true);

  return (
    <Container>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        <Title label={hero["title_dokumen" + sign]} />
        <div className="col-span-1 sm:col-span-2">
          {titleDokumenTataKelola?.map((item: any, key: any) => {
            const child = item?.content_dokumen_tata_kelola?.map(
              (item: any) => {
                return { label: item["name_file" + sign], url: item.file };
              }
            );
            return (
              <>
                <DocumentLink
                  key={key}
                  label={item["title_content" + sign]}
                  child={child}
                  isBorder
                  isCollapse
                  isDownloadChild
                />
              </>
            );
          })}
          <div className="mb-3 gap-5 relative border-b-2 border-b-gray-300 pb-3">
            <div className="flex items-center justify-start gap-5 relative pr-16">
              <div className="flex items-center justify-center w-12 h-12 min-w-[50px] bg-warning5">
                {/* Static Icon Placeholder */}
                <FolderIcon />
              </div>
              <div className="text-base sm:text-base font-semibold">
                {lang === "id" ? "Anggaran Dasar" : "Articles of Association"}
              </div>
              <div className="absolute right-0">
              <IconButton
                variant="ghost"
                aria-label="open hubungan-afiliasi"
                onClick={() => setOpen(!open)}
                // position="absolute"
                // right={0}
                // top={1}
                _focus={{ boxShadow: "none" }}
              >
                {open ? (
                  <PlusIcon className="w-8 font-bold text-warning5" />
                ) : (
                  <MinusIcon className="w-8 font-bold text-warning5" />
                )}
              </IconButton>
              </div>
            </div>
            <Collapse in={open ? false : true}>
              <ul className="pb-5 pl-[70px] list-[lower-alpha]">
                <li className="relative flex items-center justify-between mt-5 text-sm text-neutral sm:text-base">
                {lang === "id" ? (
                  <p>
                    Anggaran Dasar PT Ancora Indonesia Resources Tbk tersedia berdasarkan permintaan
                    melalui email: corporate.secretary@ancorair.com. Terima kasih.
                  </p>
                ) : (
                  <p>
                    The Articles of Association of PT Ancora Indonesia Resources Tbk are available upon
                    request via email at corporate.secretary@ancorair.com. Thank you.
                  </p>
                )}
                </li>
              </ul>
            </Collapse>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default index;
