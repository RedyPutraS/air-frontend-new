import type { NextPage } from "next";

import { Layout, Container, DocumentLink, Title } from "components";
import useCustomQuery from "hooks/useCustomQuery";
import useLanguage from "hooks/useLanguage";

const Home: NextPage = () => {
  const query_key = "dokumen-tata-kelola";
  const { data, status } = useCustomQuery(query_key);
  const lang = useLanguage((state) => state.lang);
  const sign = lang === "en" ? "_eng" : "_ind";

  const hero = data?.hero;
  const dataDokumen = data?.contentDokumenTataKelolaPage;

  return (
    <Layout data={data} status={status}>
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          <Title label={hero?.["title_pengangkatan" + sign]} />

          <div className="pl-0 col-span-1 sm:col-span-2 sm:pl-20">
            {dataDokumen?.map((item: any, key: any) => {
              return (
                <DocumentLink
                  key={key}
                  label={item["name_file" + sign]}
                  url={item.file}
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
