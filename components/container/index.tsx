import React from "react";

interface Props {
  children: React.ReactNode;
}

function index(props: Props) {
  const { children } = props;

  return (
    <div className="px-5 pb-5 bg-[#fff] xl:px-16 2xl:px-64 mb-16">
      {children}
    </div>
  );
}

export default index;
