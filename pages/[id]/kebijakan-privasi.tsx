import type { NextPage } from "next";

import { KebijakanPrivasi } from "moduls";
import { Layout } from "components";
import useCustomQuery from "hooks/useCustomQuery";
import useLanguage from "hooks/useLanguage";

const Home: NextPage = () => {
  // const query_key = "kebijakan-privasi";
  // const { data, status } = useCustomQuery(query_key);
  const lang = useLanguage((state) => state.lang);

  const data = {
    hero: {
      active: 1,
      created_at: "2023-12-08T10:18:25.000000Z",
      description_eng: "<p><strong>Welcome to the AIR Privacy Statement</strong></p>",
      description_hero_eng: null,
      description_hero_ind: null,
      description_ind: "<p><strong>Selamat datang di AIR Kebijakan Privasi</strong></p>",
      id: 1,
      image_hero: "https://backend.ancorair.com/uploads/doc/Asset(11)_25ID0.png",
      status: "publish",
      title_eng: "Privacy Statement",
      title_hero_eng: "Privacy Statement",
      title_hero_ind: "Kebijakan Privasi",
      title_ind: "Kebijakan Privasi",
      updated_at: "2024-09-03T02:21:51.000000Z",
    },
  };

  const status = "Success";

  return (
    <Layout data={data} status={status}>
      <KebijakanPrivasi lang={lang} />
    </Layout>
  );
};

export default Home;
