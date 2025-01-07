import type { NextPage } from "next";

import { TataKelolaContent, TataKelolaDocument } from "moduls";
import { Layout } from "components";
import useCustomQuery from "hooks/useCustomQuery";
import useLanguage from "hooks/useLanguage";

const Home: NextPage = () => {
  const query_key = "tata-kelola-air";
  const { data, status } = useCustomQuery(query_key);
  const lang = useLanguage((state) => state.lang);

  return (
    <Layout data={data} status={status}>
      <TataKelolaContent lang={lang} data={data} />
      <TataKelolaDocument lang={lang} data={data} />
    </Layout>
  );
};

export default Home;
