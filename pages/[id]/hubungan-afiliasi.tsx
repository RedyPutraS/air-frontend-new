import type { NextPage } from "next";

import { HubunganAfiliasi } from "moduls";
import { Layout } from "components";

const Home: NextPage = () => {
  return (
    <Layout>
      <div className="mt-10">
        <HubunganAfiliasi />
      </div>
    </Layout>
  );
};

export default Home;
