import { ClassNames } from "@emotion/react";
import React from "react";

interface Props {
  label: any;
  isUnderline?: boolean;
  style?: object;
  width?: number;
  ClassNames?: string;
}

function index(props: Props) {
  const {
    label,
    isUnderline = true,
    style = {},
    width = 62,
    ClassNames = "",
  } = props;

  return (
    <div
      className={`text-[20px] sm:text-[28px] relative font-bold text-gray-700 ${ClassNames}`}
      style={style}
    >
      {label}

      {isUnderline && (
        <div
          data-aos="fade-right"
          className="mt-1 border-b-4 border-b-warning1"
          style={{ width }}
        />
      )}
    </div>
  );
}

export default index;
