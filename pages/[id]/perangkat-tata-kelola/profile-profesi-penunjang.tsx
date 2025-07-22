import type { NextPage } from "next";
import useCustomQuery from "hooks/useCustomQuery";
import useLanguage from "hooks/useLanguage";
import { Layout, Title, Container, DocumentLink } from "components";

const ProfileProfesiPenunjang: NextPage = () => {
  const query_key = "profesi-penunjang";
  const { data, status } = useCustomQuery(query_key);
  const lang = useLanguage((state) => state.lang);
  const sign = lang === "en" ? "_eng" : "_ind";

  const dataPage = data?.dataPage;
  const profesiKategori = data?.profesiKategori || [];

  return (
    <Layout data={data} status={status}>
      {/* SECTION: Supporting Profession Profile */}
      <Container>
        <Title label={dataPage?.["title" + sign]} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          {profesiKategori.map((item: any) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow p-6 border border-gray-200 flex flex-col h-full"
            >
              <div className="flex items-center mb-2">
                <div className="w-1.5 h-8 bg-red-600 rounded mr-3" />
                <h3 className="text-xl font-bold text-blue-900">
                  {lang === "id" ? item.title_ind : item.title_eng}
                </h3>
              </div>
              <div className="text-gray-800 mb-4">
                {lang === "id" ? item.desc_ind : item.desc_eng}
              </div>
              <div className="font-bold mb-1">{lang === "id" ? "Kontak" : "Contact"}</div>
              <div className="text-gray-700 mb-1">
                {item.alamat}
              </div>
              <div className="text-gray-700 mb-1">
                T: {item.telepon}
              </div>
              <div className="text-gray-700 mb-4">
                {item.email}
              </div>
              <div className="mt-auto">
                <DocumentLink
                  label={dataPage?.["title_page_file" + sign] || "Legalitas Perusahaan"}
                  url={JSON.stringify({ file: item["file" + sign] })}
                  isBorder
                  isDownload
                  isCollapse={false}
                />
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Layout>
  );
};

export default ProfileProfesiPenunjang; 