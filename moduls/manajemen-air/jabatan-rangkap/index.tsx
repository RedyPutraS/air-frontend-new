import { Container, Table, Title } from "components";
import React from "react";
import { id, en } from "utils/language";

interface Props {
  data?: any;
  lang?: any;
}

function index(props: Props) {
  const { data = [], lang } = props;

  const language: any = lang === "en" ? en : id;

  const header = [
    { label: lang === "en" ? "Name" : "Nama", value: "name" },
    {
      label: lang === "en" ? "Position in the Company" : "Jabatan di Perseroan",
      value: "role",
    },
    {
      label:
        lang === "en"
          ? "Positions in Other Companies"
          : "Jabatan di Perusahaan Lain",
      value: "otherRole",
    },
  ];

  const sign = lang === "en" ? "_eng" : "_indo";

  const rows = data.map((item: any) => {
    return {
      ...item,
      role: item["jabatan_di_peseroan" + sign],
      otherRole: [item["jabatan_diperusahaan_lain" + sign]],
    };
  });

  return (
    <Container>
      <Title label={language?.jabatan_rangkap_title} />

      <div className="max-w-full overflow-x-auto">
        <Table header={header} rows={rows} isNumber />
      </div>
    </Container>
  );
}

export default index;
