import React from "react";
import dynamic from "next/dynamic";

const SingleTicker: any = dynamic(
  () => import("react-ts-tradingview-widgets").then((w) => w.MiniChart),
  {
    ssr: false,
  }
);

const TradingViewChart = () => {
  return (
    <div className="bg-[url('/images/window/trading1.png')] mt-16 bg-[length:100%_200px] lg:bg-[length:100%_400px] bg-top bg-no-repeat">
      <div className="h-[400px] sm:h-[500px] w-full flex justify-center items-center relative">
        <div className="w-[90%] lg:w-[800px] relative" data-aos="fade-in">
          <SingleTicker width="100%" symbol={"OKAS"} />
        </div>
      </div>
    </div>
  );
};

export default TradingViewChart;
