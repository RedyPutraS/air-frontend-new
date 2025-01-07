import { Container } from "components";
import Image from "next/image";
import React, { useState } from "react";
import {
  Tabs,
  TabList,
  Tab,
  TabIndicator,
  TabPanels,
  TabPanel,
} from "@chakra-ui/react";
import CardContent from "../components/CardContent";
import {
  formatDate,
  formatImage,
  formatSentence,
  removeHTMLTags,
} from "utils/formatter";
import { useRouter } from "next/router";

interface Props {
  lang?: any;
  data?: any;
}

function index(props: Props) {
  const { lang, data } = props;
  const router = useRouter();

  const sign = lang === "en" ? "_eng" : "_ind";
  const hero = data?.hero;

  const [tabIndex, setTabIndex] = useState(0);

  const content = hero?.[tabIndex]?.media_ruang_media;

  const lastContent = content.map((item: any, key: any) => {
    if (key > 0 && key < 5)
      return (
        <div
          key={key}
          className="flex items-center justify-start pt-5 pb-3 border-b-2 cursor-pointer gap-5 border-b-gray-200 hover:bg-blue-50"
          onClick={() =>
            router.push(
              `/${lang}/ruang-media/${item?.title_topic_id}?idBerita=${item?.id}`
            )
          }
        >
          <div className=" sm:min-w-[80px]">
            <Image
              src={formatImage(item.image)}
              alt={`hero-${key}`}
              height={80}
              width={80}
            />
          </div>
          <div className="w-[100%]">
            <div className="text-sm font-bold text-neutral sm:text-base">
              {formatDate(item.date, lang)}
            </div>
            <h1 className="text-lg font-bold truncate sm:text-xl w-[200px] sm:w-[285px]">
              {item["title" + sign]}
            </h1>
          </div>
        </div>
      );
  });

  return (
    <div className="pt-0 sm:pt-10">
      <Container>
        <Tabs onChange={(index) => setTabIndex(index)}>
          <TabList>
            {hero?.map((item: any, key: any) => (
              <Tab
                key={key}
                color="neutral"
                _focus={{
                  boxShadow: "none",
                }}
                _selected={{
                  color: "primary",
                  fontWeight: 700,
                }}
              >
                {item["title_topic" + sign]}
              </Tab>
            ))}
          </TabList>
          <TabIndicator
            mt="-1.5px"
            height="2px"
            bg="primary"
            borderRadius="1px"
          />
          {/* <TabPanels> */}
          {/*   <TabPanel> */}
          {/*   </TabPanel> */}
          {/* </TabPanels> */}
        </Tabs>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-5">
          <div className="col-span-1 lg:col-span-2">
            {content?.length > 0 && (
              <CardContent
                isBig
                image={formatImage(content?.[0]?.image)}
                date={formatDate(content?.[0]?.date, lang)}
                title={content?.[0]?.["title" + sign]}
                body={formatSentence(
                  removeHTMLTags(content?.[0]?.["description" + sign]),
                  2
                )}
                tabIndex={`${content?.[0]?.title_topic_id}?idBerita=${content?.[0]?.id}`}
                lang={lang}
              />
            )}
          </div>

          <div className="hidden lg:block">{lastContent}</div>
        </div>

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-5">
          {content.map((item: any, key: any) => {
            if (key > 4)
              return (
                <CardContent
                  image={formatImage(item.image)}
                  date={formatDate(item.date, lang)}
                  title={item["title" + sign]}
                  body={formatSentence(
                    removeHTMLTags(item["description" + sign]),
                    2
                  )}
                  tabIndex={`${item?.title_topic_id}?idBerita=${item?.id}`}
                  lang={lang}
                />
              );
          })}
        </div>
        <div className="block mt-8 lg:hidden">{lastContent}</div>
      </Container>
    </div>
  );
}

export default index;
