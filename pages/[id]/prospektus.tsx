import type { NextPage } from "next";

import { Prospektus } from "moduls";
import { Layout } from "components";
import useCustomQuery from "hooks/useCustomQuery";

const Home: NextPage = () => {
  const query_key = "prospektus";
  const { data, status } = useCustomQuery(query_key);

  return (
    <Layout data={data} status={status}>
      <Prospektus data={data} />
    </Layout>
  );
};

export default Home;
