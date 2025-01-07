import type { NextPage } from "next";

import { PengaduanPelanggaran } from "moduls";
import { Layout } from "components";
import useCustomQuery from "hooks/useCustomQuery";
import useLanguage from "hooks/useLanguage";

const Home: NextPage = () => {
  const query_key = "sistem-pengaduan-pelanggan";
  const { data, status } = useCustomQuery(query_key);
  const lang = useLanguage((state) => state.lang);

  return (
    <Layout data={data} status={status}>
      <PengaduanPelanggaran lang={lang} data={data} />
    </Layout>
  );
};

export default Home;
