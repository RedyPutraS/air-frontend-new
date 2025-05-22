import type { NextPage } from "next";

import {
  // StatistikSaham,
  KomposisiPemegangSaham,
  DaftarPemegangSaham,
  Dividen,
  PaparanPublikBonus,
  TradingView,
  TradingViewSaham,
} from "moduls";
import { Layout } from "components";
import useCustomQuery from "hooks/useCustomQuery";
import useLanguage from "hooks/useLanguage";

const Home: NextPage = () => {
  const query_key = "informasi-saham";
  const { data, status } = useCustomQuery(query_key);
  const lang = useLanguage((state) => state.lang);

  return (
    <Layout data={data} status={status}>
      {/* <StatistikSaham /> */}
      <TradingViewSaham />
      <KomposisiPemegangSaham lang={lang} data={data} />
      <DaftarPemegangSaham lang={lang} data={data} />
      <Dividen lang={lang} data={data} />
      <PaparanPublikBonus lang={lang} data={data} />
    </Layout>
  );
};

export default Home;
