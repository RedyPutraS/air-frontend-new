import { Container, DocumentCard, Title } from "components";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import React from "react";

interface Props {
  data?: Array<any>;
  sign?: any;
}

function index(props: Props) {
  const { data = [], sign } = props;

  return (
    <Container>
      <div className="mt-16">
        <Title label="Sustainability Report" />
        <div className="mt-5 grid col-span-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {data?.map((item, key) => (
            <div
              key={key}
              className={`${
                key === 0 ? "col-span-1 sm:col-span-2 lg:col-span-3" : ""
              }`}
              data-aos="fade-up"
              data-aos-duration={400 + key * 100}
            >
              <DocumentCard isLarge={key === 0} item={item} />
            </div>
          ))}
        </div>
        <Pagination />
      </div>
    </Container>
  );
}

export default index;

function Pagination() {
  return (
    <div className="flex items-center justify-center mt-10 sm:justify-start gap-5">
      <div className="w-[32px] h-[32px] flex justify-center items-center text-white bg-primary rounded-full cursor-pointer">
        <ChevronLeftIcon className="w-5" />
      </div>
      <div className="w-[32px] h-[32px] flex justify-center items-center text-white bg-primary rounded-full cursor-pointer">
        <ChevronRightIcon className="w-5" />
      </div>
    </div>
  );
}
