import { Container, Table, Title } from "components";
import React from "react";

interface Props {
  data?: any;
  lang?: any;
}

function index(props: Props) {
  const { data, lang } = props;

  const header = [
    {
      label: "Jumlah Saham (Rp)",
      en_label: "Number of Shares",
      value: "jumlah_saham",
    },
    {
      label: "Jumlah Nominal (Rp)",
      en_label: "Total Nominal",
      value: "jumlah_nominal",
    },
    { label: "%", value: "percentage" },
  ];

  const rows = data?.masterpemegangSaham?.content?.map((item: any) => {
    const content =
      lang === "en"
        ? {
            name: item.nama_pemegang_saham_eng,
            en_name: item.nama_pemegang_saham_ind,
          }
        : {
            name: item.nama_pemegang_saham_ind,
            en_name: item.nama_pemegang_saham_eng,
          };

    const saham = item?.komposisi_pemegang_saham?.[0];

    return {
      name: content.name,
      en_name: content.en_name,
      jumlah_saham: saham?.jumlah_saham,
      jumlah_nominal: saham?.jumlah_nominal,
      percentage: saham?.persen,
    };
  });

  const hero = data?.hero;

  const content =
    lang === "en"
      ? {
          title1: hero?.title_komposisi_eng,
          en_title1: hero?.title_komposisi_ind,
          title2: "Nominal Value of Rp 100 per share",
          en_title2: "Nilai Nominal Rp 100 per saham",
          span: hero?.span_komposisi_sumber_eng,
        }
      : {
          title1: hero?.title_komposisi_ind,
          en_title1: hero?.title_komposisi_eng,
          title2: "Nilai Nominal Rp 100 per saham",
          en_title2: "Nominal Value of Rp 100 per share",
          span: data?.hero?.span_komposisi_sumber_ind,
        };

  const customHeader = (
    <thead className="text-white bg-primary">
      <tr className="border border-gray-300">
        <th className="p-3 border border-gray-300" align="center" rowSpan={2}>
          <div>{content.title1}</div>
          <div className="text-sm italic font-normal">{content.en_title1}</div>
        </th>
        <th className="p-3 border border-gray-300" align="center" colSpan={3}>
          <div>{content.title2}</div>
          <div className="text-sm italic font-normal">{content.en_title2}</div>
        </th>
      </tr>

      <tr className="border border-gray-300">
        {header.map((item, key) => {
          const content =
            lang === "en"
              ? {
                  label: item.en_label,
                  en_label: item.label,
                }
              : {
                  label: item.label,
                  en_label: item.en_label,
                };

          return (
            <th key={key} className="p-3 border border-gray-300" align="center">
              {content.label}
              <div className="text-sm italic font-normal">
                {content.en_label}
              </div>
            </th>
          );
        })}
      </tr>
    </thead>
  );

  const customBody = (
    <tbody>
      {rows.map((item: any, key: any) => {
        return (
          <tr key={key} className={key % 2 !== 0 ? "bg-gray-100" : "bg-white"}>
            <td className={`p-3 border border-gray-300`} align="left">
              <div
                className={`text-base ${
                  item.isChild ? "font-semibold px-10" : "font-bold"
                }`}
              >
                {item.name}
              </div>
              <div
                className={`text-sm italic text-neutral ${
                  item.isChild && "px-10"
                }`}
              >
                {item.en_name}
              </div>
            </td>
            <td className={`p-3 border border-gray-300`} align="right">
              {item.jumlah_saham}
            </td>
            <td className={`p-3 border border-gray-300`} align="right">
              {item.jumlah_nominal}
            </td>
            <td className={`p-3 border border-gray-300`} align="right">
              {item.percentage}
            </td>
          </tr>
        );
      })}
    </tbody>
  );

  return (
    <Container>
      <Title label={lang === "id" ? "Komposisi Pemegang Saham" : "Shareholder Composition"} />

      <div className="max-w-full overflow-x-auto">
        <Table customHeader={customHeader} customBody={customBody} />
      </div>

      <div className="mt-8 text-sm font-bold text-neutral">{content.span}</div>
    </Container>
  );
}

export default index;

// const rows = [
//   {
//     name: "Modal Dasar",
//     en_name: "Authorized Capital",
//     jumlah_saham: "7.000.000.000",
//     jumlah_nominal: "7.000.000.000.000",
//     percentage: "",
//   },
//   {
//     name: "Modal Ditempatkan dan Disetor",
//     en_name: "Subscribed and Paid-up Capital",
//   },
//   {
//     // isChild: true,
//     name: "PT Multi Berkat Energi",
//     jumlah_saham: "918.304.978",
//     jumlah_nominal: "91.830.497.800",
//     percentage: "52,00",
//   },
//   {
//     // isChild: true,
//     name: "Romo Nitiyudo Wachjo",
//     jumlah_saham: "277.518.727",
//     jumlah_nominal: "27.751.872.700",
//     percentage: "15,72",
//   },
//   {
//     // isChild: true,
//     name: "Banque Pictet and Cie SA Burgundy Assets Corp",
//     jumlah_saham: "194.996.613",
//     jumlah_nominal: "19.499.661.300",
//     percentage: "11,04",
//   },
//   {
//     // isChild: true,
//     name: "UOB Kay Hian, Pte, Ltd",
//     jumlah_saham: "100.000.000",
//     jumlah_nominal: "10.000.000.000",
//     percentage: "5,66",
//   },
//   {
//     // isChild: true,
//     name: "Masyarakat (Pemegang saham di bawah 5%) Public (Shareholders below 5%)",
//     en_name: "Public (Shareholders below 5%)",
//     jumlah_saham: "275.107.459",
//     jumlah_nominal: "27.510.745.900",
//     percentage: "15,58",
//   },
//   {
//     name: "Jumlah Modal Ditempatkan dan Disetor",
//     en_name: "Total Subscribed and Paid-up Capital",
//     jumlah_saham: "1.765.927.777",
//     jumlah_nominal: "176.592.777.700",
//     percentage: "100,00",
//   },
//   {
//     name: "Saham dalam Portepel",
//     en_name: "Shares in Portfolio",
//     jumlah_saham: "5.234.072.223",
//     jumlah_nominal: "523.407.222.300",
//   },
// ];
