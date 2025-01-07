import type { NextPage } from "next";

import { AllPengaduanPelanggaran } from "moduls";
import { Layout } from "components";
import useCustomQuery from "hooks/useCustomQuery";
import useLanguage from "hooks/useLanguage";

const Home: NextPage = () => {
  const query_key = "sistem-pengaduan-pelanggan";
  const { data, status } = useCustomQuery(query_key);
  const lang = useLanguage((state) => state.lang);
  console.log(data, status);
  

  return (
    <Layout data={data} status={status}>
      <AllPengaduanPelanggaran lang={lang} data={data} />
    </Layout>
  );
};

export default Home;
