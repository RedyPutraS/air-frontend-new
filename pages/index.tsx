import type { NextPage } from "next";

import { Profile, Vision, Sustain, Business, TradingView } from "moduls";
import { Layout } from "components";
import useCustomQuery from "hooks/useCustomQuery";
import useLanguage from "hooks/useLanguage";

const Home: NextPage = () => {
  const query_key = "home";
  const { data, status } = useCustomQuery(query_key);
  const lang = useLanguage((state) => state.lang);

  return (
    <Layout status={status} data={data}>
      <Profile lang={lang} data={data?.sekilasDanInfo?.content} />
      <Vision lang={lang} data={data?.["visi-dan-filosofi"]?.content} misions={data?.misi?.content} />
      <Sustain lang={lang} data={data?.sustainability?.content} />
      <Business
        lang={lang}
        data={data?.bisnis?.content}
        section_title={data?.bisnis?.["section-title"]?.[0]}
      />
      <TradingView />
    </Layout>
  );
};

export default Home;
