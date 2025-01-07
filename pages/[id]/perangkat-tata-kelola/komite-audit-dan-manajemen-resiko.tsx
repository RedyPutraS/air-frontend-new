import type { NextPage } from "next";

import { DewanKomisaris, PengangkatanPemberhentianKomiteAudit } from "moduls";
import { Layout } from "components";
import useCustomQuery from "hooks/useCustomQuery";
import useLanguage from "hooks/useLanguage";

const Home: NextPage = () => {
  const query_key = "perangkat-tata-kelola";
  const { data, status } = useCustomQuery(query_key);
  
  const lang = useLanguage((state) => state.lang);

  const menuKomiteAudit = data?.menuKomiteAudit?.content?.[0];
  
  const dataProfile = [
    {
      image: menuKomiteAudit?.image_ketua,
      jabatan_ind: menuKomiteAudit?.jabatan_ketua_ind,
      jabatan_eng: menuKomiteAudit?.jabatan_ketua_eng,
      name: menuKomiteAudit?.nama_ketua,
      description_ind: menuKomiteAudit?.description_ketua_ind,
      description_eng: menuKomiteAudit?.description_ketua_eng,
    },
    {
      image: menuKomiteAudit?.image_anggota_1,
      jabatan_ind: menuKomiteAudit?.jabatan_anggota_1_ind,
      jabatan_eng: menuKomiteAudit?.jabatan_anggota_1_eng,
      name: menuKomiteAudit?.nama_anggota_1,
      description_ind: menuKomiteAudit?.description_anggota_1_ind,
      description_eng: menuKomiteAudit?.description_anggota_1_eng,
    },
    {
      image: menuKomiteAudit?.image_anggota_2,
      jabatan_ind: menuKomiteAudit?.jabatan_anggota_2_ind,
      jabatan_eng: menuKomiteAudit?.jabatan_anggota_2_eng,
      name: menuKomiteAudit?.nama_anggota_2,
      description_ind: menuKomiteAudit?.description_anggota_2_ind,
      description_eng: menuKomiteAudit?.description_anggota_2_eng,
    },
  ];
  

  return (
    <Layout data={data} status={status}>
      <DewanKomisaris
        options={[
          "Komite Audit dan Manajemen Resiko",
          "Komite Nominasi dan Remunerasi",
          "Sekretaris Perusahaan",
        ]}
        lang={lang}
        data={dataProfile}
      />
      <PengangkatanPemberhentianKomiteAudit
        lang={lang}
        data={data}
        filter={"Audit"}
      />
    </Layout>
  );
};

export default Home;
