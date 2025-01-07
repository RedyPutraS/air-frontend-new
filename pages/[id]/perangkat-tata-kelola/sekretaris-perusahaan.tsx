import type { NextPage } from "next";

import { DewanKomisaris, PengangkatanPemberhentianKomiteAudit } from "moduls";
import { Layout } from "components";
import useCustomQuery from "hooks/useCustomQuery";
import useLanguage from "hooks/useLanguage";

const Home: NextPage = () => {
  const query_key = "perangkat-tata-kelola";
  const { data, status } = useCustomQuery(query_key);
  const lang = useLanguage((state) => state.lang);

  const menuSekretarisPerusahaan = data?.menuSekretarisPerusahaan?.content?.[0];
  const dataProfile = [
    {
      image: menuSekretarisPerusahaan?.image_ketua,
      jabatan_ind: menuSekretarisPerusahaan?.jabatan_ketua_ind,
      jabatan_eng: menuSekretarisPerusahaan?.jabatan_ketua_eng,
      name: menuSekretarisPerusahaan?.nama_ketua,
      description_ind: menuSekretarisPerusahaan?.description_ketua_ind,
      description_eng: menuSekretarisPerusahaan?.description_ketua_eng,
    },
    {
      image: menuSekretarisPerusahaan?.image_anggota_1,
      jabatan_ind: menuSekretarisPerusahaan?.jabatan_anggota_1_ind,
      jabatan_eng: menuSekretarisPerusahaan?.jabatan_anggota_1_eng,
      name: menuSekretarisPerusahaan?.nama_anggota_1,
      description_ind: menuSekretarisPerusahaan?.description_anggota_1_ind,
      description_eng: menuSekretarisPerusahaan?.description_anggota_1_eng,
    },
    {
      image: menuSekretarisPerusahaan?.image_anggota_2,
      jabatan_ind: menuSekretarisPerusahaan?.jabatan_anggota_2_ind,
      jabatan_eng: menuSekretarisPerusahaan?.jabatan_anggota_2_eng,
      name: menuSekretarisPerusahaan?.nama_anggota_2,
      description_ind: menuSekretarisPerusahaan?.description_anggota_2_ind,
      description_eng: menuSekretarisPerusahaan?.description_anggota_2_eng,
    },
  ];

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
        filter={"Secretary"}
      />
    </Layout>
  );
};

export default Home;
