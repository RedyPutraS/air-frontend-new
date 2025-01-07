import type { NextPage } from "next";

import { KeterbukaanInformasi } from "moduls";
import { Layout } from "components";

const Home: NextPage = () => {
  return (
    <Layout>
      <KeterbukaanInformasi />
    </Layout>
  );
};

export default Home;
