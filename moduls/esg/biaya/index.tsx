import { Container, DocumentLink, Title } from "components";
import React from "react";

interface Props {
  hero?: any;
  sign?: any;
  data?: any;
}

function index(props: Props) {
  const { hero, sign, data } = props;
  const biayaEsgSustainability = data?.biayaEsgSustainability?.content;
  
  return (
    <Container>
      <div className="mt-10 text-lg font-bold text-gray-700 sm:text-2xl">
        {hero["title_biaya" + sign]}
      </div>
      <div className="mt-5">
        {biayaEsgSustainability.map((item: any, key: any) => (
          <DocumentLink
            key={key}
            label={item["name" + sign]}
            url={item.file}
            isBorder
            isDownload
          />
        ))}
      </div>
    </Container>
  );
}

export default index;
