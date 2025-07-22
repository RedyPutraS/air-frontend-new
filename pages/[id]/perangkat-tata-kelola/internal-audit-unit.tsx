import type { NextPage } from "next";

import { DewanKomisaris, PengangkatanPemberhentianKomiteAudit } from "moduls";
import { Container, DocumentLink, Layout, Title } from "components";
import useCustomQuery from "hooks/useCustomQuery";
import useLanguage from "hooks/useLanguage";

const Home: NextPage = () => {
  const query_key = "internal-audit-unit";
  const { data, status } = useCustomQuery(query_key);
  const lang = useLanguage((state) => state.lang);
  const sign = lang === "en" ? "_eng" : "_ind";
  console.log(data);
  

//   const menuInternalAuditUnit = data?.auditTeamMembers;
  const dataProfile = data?.auditTeamMembers?.map((member: any) => ({
    image: member.image,
    jabatan_ind: member.jabatan_indo,
    jabatan_eng: member.jabatan_eng,
    name: member.name,
    description_ind: member.desc_indo,
    description_eng: member.desc_eng,
  }));

  return (
    <Layout data={data} status={status}>
      <DewanKomisaris
        // isOptions={false}
        options={[
          "Komite Audit dan Manajemen Resiko",
          "Komite Nominasi dan Remunerasi",
          "Sekretaris Perusahaan",
        ]}
        lang={lang}
        data={dataProfile}
      />
      {/* Tampilan dari PengangkatanPemberhentianKomiteAudit langsung di sini */}
      <Container>
  {data?.piagamFiles && data.piagamFiles.length > 0 && (
    <div className="mt-5">
      <div className="relative pr-16 mb-5">
        <Title label={data.dataPage?.["title_piagam" + sign]} />
      </div>

      <div className="mt-5">
        {data.piagamFiles.map((item: any, key: any) => (
          <DocumentLink
            key={key}
            label={item["name" + sign]}
            url={JSON.stringify({ file: item["file" + sign] })}
            isBorder
            isDownload
            isCollapse={false}
          />
        ))}
      </div>
    </div>
  )}
</Container>
    </Layout>
  );
};

export default Home;
