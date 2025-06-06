import type { NextPage } from "next";

import { DewanKomisaris, PengangkatanPemberhentianKomiteAudit } from "moduls";
import { Layout } from "components";
import useCustomQuery from "hooks/useCustomQuery";
import useLanguage from "hooks/useLanguage";

const Home: NextPage = () => {
  const query_key = "perangkat-tata-kelola";
  const { data, status } = useCustomQuery(query_key);
  const lang = useLanguage((state) => state.lang);

  const menuKomiteNominasi = data?.menuKomiteNominasi?.content?.[0];
  console.log(menuKomiteNominasi);
  

  const dataProfile = [
    {
      image: menuKomiteNominasi?.image_ketua_1,
      jabatan_ind: menuKomiteNominasi?.jabatan_ketua_1_ind,
      jabatan_eng: menuKomiteNominasi?.jabatan_ketua_1_eng,
      name: menuKomiteNominasi?.nama_ketua_1,
      description_ind: menuKomiteNominasi?.description_ketua_1_ind,
      description_eng: menuKomiteNominasi?.description_ketua_1_eng,
    },
    {
      image: menuKomiteNominasi?.image_ketua,
      jabatan_ind: menuKomiteNominasi?.jabatan_ketua_ind,
      jabatan_eng: menuKomiteNominasi?.jabatan_ketua_eng,
      name: menuKomiteNominasi?.nama_ketua,
      description_ind: menuKomiteNominasi?.description_ketua_ind,
      description_eng: menuKomiteNominasi?.description_ketua_eng,
    },
    {
      image: menuKomiteNominasi?.image_anggota_1,
      jabatan_ind: menuKomiteNominasi?.jabatan_anggota_1_ind,
      jabatan_eng: menuKomiteNominasi?.jabatan_anggota_1_eng,
      name: menuKomiteNominasi?.nama_anggota_1,
      description_ind: menuKomiteNominasi?.description_anggota_1_ind,
      description_eng: menuKomiteNominasi?.description_anggota_1_eng,
    },
    {
      image: menuKomiteNominasi?.image_anggota_2,
      jabatan_ind: menuKomiteNominasi?.jabatan_anggota_2_ind,
      jabatan_eng: menuKomiteNominasi?.jabatan_anggota_2_eng,
      name: menuKomiteNominasi?.nama_anggota_2,
      description_ind: menuKomiteNominasi?.description_anggota_2_ind,
      description_eng: menuKomiteNominasi?.description_anggota_2_eng,
    },
  ];
  console.log(dataProfile);

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
      <PengangkatanPemberhentianKomiteAudit
        lang={lang}
        data={data}
        filter={"Nomination"}
      />
    </Layout>
  );
};

export default Home;
