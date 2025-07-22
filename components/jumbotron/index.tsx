import Image from "next/image";
import { useCarousel } from "hooks";
import { useRouter } from "next/router";
import { useDetailData } from "utils/data";
import useLanguage from "hooks/useLanguage";
import { formatImage, formatSentence, removeHTMLTags } from "utils/formatter";

interface Props {
  data?: any;
}

export default function Carousel({ data }: Props) {
  const router = useRouter();
  const { id } = router.query;
  const path = router.pathname.split("/")[2];

  const slides = data && router.pathname === "/" ? data?.hero || data?.dataPage?.hero : initSlides;

  const heroImage = data?.hero?.image_hero || data?.dataPage?.image_hero;
  const image_hero = heroImage ? formatImage(heroImage) : "";

  const { current, setCurrent } = useCarousel(slides);

  const lang = useLanguage((state) => state.lang);

  const { optionsID, optionsEN } = useDetailData();
  const detail = lang === "id" ? optionsID[path] : optionsEN[path];

  const sign = lang === "en" ? "_eng" : "_ind";

  const content =
    lang === "en"
      ? {
          title: data?.hero?.title_hero_eng || data?.dataPage?.title_hero_eng,
          description: data?.hero?.description_hero_eng || data?.dataPage?.description_hero_eng ,
        }
      : {
          title: data?.hero?.title_hero_ind || data?.dataPage?.title_hero_ind,
          description: data?.hero?.description_hero_ind || data?.dataPage?.description_hero_ind,
        };

  return (
    <div className="relative overflow-hidden">
      {id ? (
        <div
          className={`h-[70vh] sm:h-[90vh] w-[90vw] flex justify-center items-center text-white relative animate-fadein mx-auto`}
        >
          <Image
            src={image_hero}
            alt={detail?.image}
            layout="fill"
            objectFit="cover"
          />

          <div className="z-10 bg-[rgba(0,0,0,0.5)] h-full w-full flex justify-center items-center">
            <div className={`text-center px-5`}>
              <div className="w-full sm:w-[600px] text-[28px] sm:text-[48px] font-bold animate-fade">
                {content?.title}
              </div>
              <div className="w-full sm:w-[600px] text-[14px] sm:text-[24px] mt-5 animate-fade max-h-[200px] overflow-y-auto">
                <div
                  dangerouslySetInnerHTML={{ __html: content.description }}
                />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div
            className={`flex transition ease-out duration-500`}
            style={{
              transform: `translateX(-${current * 100}%)`,
            }}
          >
            {slides.map((s: any, key: any) => {
              return (
                <div
                  key={key}
                  className={`h-[70vh] sm:h-[90vh] min-w-[100%] flex justify-center items-center text-white bg-center lg:bg-bottom relative animate-fadein`}
                  // style={{
                  //   background: `linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.1) 90%), url('${s}') no-repeat fixed`,
                  //   backgroundSize: "100% 100%",
                  // }}
                >
                  <Image
                    src={formatImage(s.image_hero)}
                    alt={"hero" + key}
                    layout="fill"
                    objectFit="cover"
                  />

                  <div className="z-10 bg-[rgba(0,0,0,0.5)] h-full w-full flex justify-center items-center">
                    {key === current && (
                      <div className={`text-center`}>
                        <div className="w-[330px] sm:w-[600px] text-[28px] sm:text-[48px] font-bold animate-fade">
                          {s["title_hero" + sign]}
                        </div>
                        <div className="w-[330px] sm:w-[600px] text-[14px] sm:text-[24px] mt-0 sm:mt-5 animate-fade1">
                          <div
                            dangerouslySetInnerHTML={{
                              __html: s["description_hero" + sign],
                            }}
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="absolute flex justify-center lg:grid bottom-[-60px] lg:top-[38%] gap-2 sm:gap-3 w-full lg:w-[100px] h-[100px] px-4 z-20">
            {slides.map((s: any, i: any) => {
              return (
                <div
                  key={s + i}
                  onClick={() => {
                    setCurrent(i);
                  }}
                  className={`w-3 h-3 cursor-pointer transition-all duration-300 ${
                    i == current
                      ? "bg-white"
                      : "bg-white bg-opacity-30 backdrop-blur-sm border border-white hover:bg-opacity-50"
                  }`}
                ></div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}

let initSlides = [
  "/images/window/tentang-air.png",
  "/images/window/manajemen-air.png",
  "/images/window/laporan-tahunan.png",
  "/images/window/esg.png",
];
