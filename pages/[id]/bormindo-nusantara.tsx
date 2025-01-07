import type { NextPage } from "next";

import { BormindoNusantara } from "moduls";
import { Layout } from "components";
import useCustomQuery from "hooks/useCustomQuery";
import useLanguage from "hooks/useLanguage";

const Home: NextPage = () => {
  const query_key = "bormindo-nusantara";
  const { data, status } = useCustomQuery(query_key);
  const lang = useLanguage((state) => state.lang);

  return (
    <Layout data={data} status={status}>
      <BormindoNusantara lang={lang} data={data} />
    </Layout>
  );
};

export default Home;
