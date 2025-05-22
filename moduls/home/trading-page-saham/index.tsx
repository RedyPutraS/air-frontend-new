import React from "react";
import dynamic from "next/dynamic";
import { Container, Title } from "components";
import useLanguage from "hooks/useLanguage";

const SingleTicker: any = dynamic(
  () => import("react-ts-tradingview-widgets").then((w) => w.MiniChart),
  {
    ssr: false,
  }
);

const TradingViewChart = () => {
  const lang = useLanguage((state) => state.lang);
  return (
      // <div className="bg-[url('/images/window/trading1.png')] mt-16 bg-[length:100%_200px] lg:bg-[length:100%_400px] bg-top bg-no-repeat">
      //   <div className="h-[400px] sm:h-[500px] w-full flex justify-center items-center relative">
      //     <div className="w-[90%] lg:w-[800px] relative" data-aos="fade-in">
        <Container>
          <Title label={ lang === "id" ? "Harga Saham" : "Stock Price"} ClassNames="mb-5"/>
          <div data-aos="fade-in">
            <SingleTicker width="100%" symbol={"OKAS"}/>
          </div>
          <div className="-mb-20 mt-3 md:mt-0 md:-mb-16"></div>
        </Container>
      //     </div>
      //   </div>
      // </div>
    // <div className="bg-[url('/images/window/trading.png')] bg-top bg-no-repeat flex justify-center">
    //   <div className="md:h-[250px] md:w-[50%] flex flex-col items-center justify-center">
    //     <div className="w-full max-h-[500px]"> {/* Kontainer untuk SingleTicker */}
    //       <SingleTicker width="100%" style="height: 1000px" height="100%" symbol={"OKAS"} />
    //     </div>
    //   </div>
    // </div>
  );
};

export default TradingViewChart;
