import type { NextPage } from "next";

import { Container, DocumentLink, Layout, Title } from "components";
import useCustomQuery from "hooks/useCustomQuery";
import useLanguage from "hooks/useLanguage";

const Home: NextPage = () => {
  const query_key = "persentasi-perusahaan";
  const { data, status } = useCustomQuery(query_key);
  const lang = useLanguage((state) => state.lang);
  const sign = lang === "en" ? "_eng" : "_ind";

  const hero = data?.hero;
  const persentasiPerusahaan = data?.persentasiPerusahaan?.content;

  return (
    <Layout data={data} status={status}>
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          <Title label={hero?.["title" + sign]} />

          <div className="pl-0 col-span-1 sm:col-span-2 sm:pl-20">
            {persentasiPerusahaan?.map((item: any, key: any) => {
              return (
                <DocumentLink
                  key={key}
                  label={item["name" + sign]}
                  url={item["file" + sign]}
                  isBorder
                  isDownload
                />
              );
            })}
          </div>
        </div>
      </Container>
    </Layout>
  );
};

export default Home;
