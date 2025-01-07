import type { NextPage } from "next";

import { LaporanTahunan } from "moduls";
import { Layout } from "components";
import useCustomQuery from "hooks/useCustomQuery";

const Home: NextPage = () => {
  const query_key = "laporan-tahunan";
  const { data, status } = useCustomQuery(query_key);

  return (
    <Layout data={data} status={status}>
      <LaporanTahunan data={data} />
    </Layout>
  );
};

export default Home;
