import type { NextPage } from "next";

import { TentangAirProfile, Milestone, Structure } from "moduls";
import { Layout } from "components";
import useCustomQuery from "hooks/useCustomQuery";
import useLanguage from "hooks/useLanguage";

const Home: NextPage = () => {
  const query_key = "tentang-air";
  const { data, status } = useCustomQuery(query_key);
  
  const lang = useLanguage((state) => state.lang);

  return (
    <Layout status={status} data={data}>
      <TentangAirProfile lang={lang} data={data?.sekilasDanInfo?.content} />
      <Milestone lang={lang} data={data?.contentMilestone?.content} title={data?.sectionTitleMilestone?.section_title} />
      <Structure
        lang={lang}
        data={{
          strukturGrupAir: data?.strukturGrupAir?.content?.[0],
          strukturOrganisasi: data?.strukturOrganisasi?.content?.[0],
        }}
      />
    </Layout>
  );
};

export default Home;
