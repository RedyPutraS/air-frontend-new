import type { NextPage } from "next";

import { DewanKomisaris, HubunganAfiliasi, JabatanRangkap } from "moduls";
import { Layout } from "components";
import useCustomQuery from "hooks/useCustomQuery";
import useLanguage from "hooks/useLanguage";

const Home: NextPage = () => {
  const query_key = "manajemen-air";
  const { data, status } = useCustomQuery(query_key);
  const lang = useLanguage((state) => state.lang);

  return (
    <Layout data={data} status={status}>
      <DewanKomisaris lang={lang} data={data?.["direksi"]?.content} />
      <JabatanRangkap lang={lang} data={data?.jabatanRangkap?.content} />
      <HubunganAfiliasi lang={lang} data={data?.hubunganAfiliasi?.content} />
    </Layout>
  );
};

export default Home;
