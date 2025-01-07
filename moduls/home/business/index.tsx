import React from "react";
import { Title, Button } from "components";
import { id, en } from "utils/language";
import { bormindoUrl, mnkUrl } from "utils/business";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import "swiper/swiper-bundle.css";

// import required modules
import { Pagination, Autoplay } from 'swiper/modules';

import styles from './index.module.css';

interface Props {
  data?: any;
  section_title?: any;
  lang?: any;
}

function Index(props: Props) {
  const { data, section_title, lang } = props;
  const language = lang === "id" ? id : en;
  const business = data ? data : [];
  const content =
    lang === "en"
      ? { title: section_title?.title_eng }
      : { title: section_title?.title };

  return (
    <div className="min-h-[500px] relative">
      <div className="h-[340px] w-full bg-primary hidden lg:block"></div>

      <div className="relative top-0 left-0 w-screen p-5 lg:absolute xl:absolute xl:p-16 2xl:px-64">
        <div className={`mt-10 grid grid-cols-1 xl:grid-cols-2 gap-5 sm:mt-0 ${styles['grid-cols-xl']}`}>
          <div className="text-black sm:text-white">
            <Title label={content.title} ClassNames="text-black lg:text-white md-text-blue"/>
          </div>

          {/* <Swiper
            slidesPerView={2}
            spaceBetween={30}
            pagination={{ clickable: true }}
            modules={[Pagination]}
            className={styles.mySwiper}
            breakpoints={{
              340: {
                slidesPerView: 1,
              },
              640: {
                slidesPerView: 1,
              },
              1056: {
                slidesPerView: 2,
              }
            }}
          >
            {business.map((item: any, key: any) => {
              const image = item?.image ? JSON.parse(item?.image) : "";

              const content =
                lang === "en"
                  ? {
                      title: item?.title_eng,
                      description: item?.description_eng,
                    }
                  : {
                      title: item?.title,
                      description: item?.description,
                    };

              return (
                <SwiperSlide key={key}>
                  <div className="flex flex-col items-start justify-between p-8 bg-white">
                    <img src={image} alt="" className="h-16 mb-5" />

                    <div>
                      <Title isUnderline={false} label={content.title} />
                      <div
                        className="mt-2 mb-5 text-sm font-normal text-justify text-gray-500 sm:text-base"
                        data-aos="fade-up"
                      >
                        <article className="prose" style={{ textAlign: "justify", maxWidth: '100%'}}>
                          <div dangerouslySetInnerHTML={{ __html: content.description }} />
                        </article>
                      </div>
                    </div>

                    <div data-aos="fade-in" className="w-full">
                      <Button
                        label={ lang === "id" ? "Lebih Tentang Kami" : "More About Us"}
                        style={{ width: "100%" }}
                        onClick={() => {
                          if (content.title.toLowerCase().includes("mnk")) {
                            window.open(`${lang}/multi-nitrotama-kimia`, "_blank");
                          } else if (content.title.toLowerCase().includes("bormindo")) {
                            window.open(`${lang}/bormindo-nusantara`, "_blank");
                          } else {
                            window.open(`${lang}/indotan-lombok-barat-bangkit`, "_blank");
                          }
                        }}
                      />
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper> */}
          
          <Swiper
            slidesPerView={2}
            spaceBetween={30}
            pagination={{
              clickable: true,
              renderBullet: (index, className) =>
                `<span class="${className}" style="width: 12px; height: 12px; background-color: #326AB3;"></span>`, // Ubah ukuran dan gaya langsung di sini
            }}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            loop={true}
            modules={[Pagination, Autoplay]}
            className={styles.mySwiper}
            breakpoints={{
              340: {
                slidesPerView: 1,
              },
              640: {
                slidesPerView: 1,
              },
              1056: {
                slidesPerView: 2,
              },
            }}
          >
            {business.map((item: any, key: any) => (
              <SwiperSlide key={key}>
                <div className="flex flex-col items-start justify-between p-8 bg-white">
                  <img src={item.image ? JSON.parse(item.image) : ""} alt="" className="h-16 mb-5" />
                  <div>
                    <Title isUnderline={false} label={item.title} />
                    <div className="mt-2 mb-5 text-sm font-normal text-justify text-gray-500 sm:text-base">
                      <article className="prose" style={{ textAlign: "justify", maxWidth: "100%" }}>
                        <div dangerouslySetInnerHTML={{ __html: item.description }} />
                      </article>
                    </div>
                  </div>
                  <div className="w-full">
                    <Button
                      label={lang === "id" ? "Lebih Tentang Kami" : "More About Us"}
                      style={{ width: "100%" }}
                      onClick={() => {
                        if (item.title.toLowerCase().includes("mnk")) {
                          window.open(`${lang}/multi-nitrotama-kimia`, "_blank");
                        } else if (item.title.toLowerCase().includes("bormindo")) {
                          window.open(`${lang}/bormindo-nusantara`, "_blank");
                        } else {
                          window.open(`${lang}/indotan-lombok-barat-bangkit`, "_blank");
                        }
                      }}
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Index;
