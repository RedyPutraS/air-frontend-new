import type { NextPage } from "next";

import { LatestNews } from "moduls";
import { Layout } from "components";
import useCustomQuery from "hooks/useCustomQuery";
import useLanguage from "hooks/useLanguage";

const Home: NextPage = () => {
  const query_key = "ruang-media";
  const { data, status } = useCustomQuery(query_key);
  const lang = useLanguage((state) => state.lang);
  

  return (
    <Layout data={data} status={status} isJumbotron={false}>
      <div className="min-h-[65vh]">
        <LatestNews lang={lang} data={data} />
      </div>
    </Layout>
  );
};

export default Home;
