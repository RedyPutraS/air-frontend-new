import type { NextPage } from "next";

import { EsgContent, EsgSustain, EsgAktifitas, EsgBiaya } from "moduls";
import { Layout } from "components";
import useCustomQuery from "hooks/useCustomQuery";
import useLanguage from "hooks/useLanguage";

const Home: NextPage = () => {
  const query_key = "esg-sustainability";
  const { data, status } = useCustomQuery(query_key);
  const lang = useLanguage((state) => state.lang);

  const sustainData = data?.contentSustainabilityReport?.content;
  const sign = lang === "en" ? "_eng" : "_ind";

  return (
    <Layout status={status} data={data}>
      <EsgContent hero={data?.hero} sign={sign} />
      <EsgSustain data={sustainData} sign={sign} />
      <EsgAktifitas data={data} sign={sign} />
      <EsgBiaya hero={data?.hero} sign={sign} data={data}/>
    </Layout>
  );
};

export default Home;
