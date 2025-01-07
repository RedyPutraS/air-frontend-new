import { IconButton, Collapse } from "@chakra-ui/react";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";
import { DownloadIcon, FolderIcon } from "components/icons";
import React, { useState } from "react";

interface DocumentLinkProps {
  label?: any;
  isBorder?: boolean;
  isCollapse?: boolean;
  isDownload?: boolean;
  isDownloadChild?: boolean;
  child?: any;
  icon?: any;
  isChild?: boolean;
  url?: string;
}

export default function DocumentLink({
  label,
  isBorder = false,
  isCollapse = false,
  isDownload = false,
  isDownloadChild = false,
  child,
  icon = <FolderIcon />,
  isChild = false,
  url = "",
}: DocumentLinkProps) {
  const [open, setOpen] = useState(false);
  
  const file_url = url ? JSON.parse(url)[0] : "";
  
  

  return (
    
    <div
      className={`mb-3 gap-5 relative ${
        isBorder && !isChild ? " border-b-2 border-b-gray-300 pb-3" : ""
      }`}
    >
      <div
        className={`flex items-center justify-start gap-5 relative pr-16`}
        // data-aos={isCollapse ? "" : "fade-up"}
        // data-aos-once="true"
      >
        <div className="flex items-center justify-center w-12 h-12 min-w-[50px] bg-warning5">
          {icon}
        </div>
        <div
          className={`${
            isChild
              ? "text-base sm:text-base font-semibold"
              : "text-base sm:text-base font-semibold"
          }`}
        >
          {label}
        </div>

        <div className="absolute right-0">
          {isCollapse && (
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
                <MinusIcon className="w-8 font-bold text-warning5" />
              ) : (
                <PlusIcon className="w-8 font-bold text-warning5" />
              )}
            </IconButton>
          )}
          {isDownload && (
            <IconButton
              variant="ghost"
              aria-label="download document link"
              // position="absolute"
              // right={0}
              onClick={() => {
                if (file_url) {
                  window.open(file_url, "_blank");
                }
              }}
            >
              <DownloadIcon size={isChild ? "32" : "32"} />
            </IconButton>
          )}
        </div>
      </div>

      {child && (
        <Collapse in={isCollapse ? open : true}>
          <ul className="pb-5 pl-[70px] list-[lower-alpha]">
            {child?.map((item: any, key: any) => (
              <li
                key={key}
                className="relative flex items-center justify-between mt-5 text-sm text-neutral sm:text-base"
                data-aos="fade-up"
                data-aos-once="true"
              >
                {item.label}

                {isDownloadChild && (
                  <IconButton
                    variant="ghost"
                    aria-label="download document link"
                    onClick={() => {
                      if (item.url) {
                        const file_url = JSON.parse(item.url)[0];
                        window.open(file_url, "_blank");
                      }
                    }}
                  >
                    <DownloadIcon />
                  </IconButton>
                )}
              </li>
            ))}
          </ul>
        </Collapse>
      )}
    </div>
  );
}
