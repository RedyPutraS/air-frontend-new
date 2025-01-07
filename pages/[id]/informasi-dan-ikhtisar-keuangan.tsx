import type { NextPage } from "next";

import { InformasiKeuangan } from "moduls";
import { Layout } from "components";
import useCustomQuery from "hooks/useCustomQuery";
import useLanguage from "hooks/useLanguage";

const Home: NextPage = () => {
  const query_key = "informasi-ikhtisar-keuangan";
  const { data, status } = useCustomQuery(query_key);
  const lang = useLanguage((state) => state.lang);

  return (
    <Layout data={data} status={status}>
      <InformasiKeuangan lang={lang} data={data} />
    </Layout>
  );
};

export default Home;
