import { Container, Table, Title } from "components";
import React from "react";

interface Props {
  data?: any;
  lang?: any;
}

function index(props: Props) {
  const { data, lang } = props;

  const header = [
    { label: "Dividend for Year", value: "dividen_for_year" },
    { label: "Rupiah per Share", value: "rupiah_per_share" },
    { label: "Payment Date", value: "payment_date" },
    { label: "Amount of Shares", value: "amount_of_shares" },
  ];

  const rows = data?.dividen?.content;

  return (
    <Container>
      <Title label="Dividen" />

      <div className="max-w-full overflow-x-auto">
        <Table header={header} rows={rows} />
      </div>
    </Container>
  );
}

export default index;

// const rows = [
//   {
//     dividend_of_year: "2011",
//     rupiah_per_share: "1,02",
//     payment_date: "Jumat, 30 September 2001",
//     amount_of_shares: "1.765.927.777",
//   },
//   {
//     dividend_of_year: "2010",
//     rupiah_per_share: "0,53",
//     payment_date: "Rabu, 07 Juli 2010",
//     amount_of_shares: "1.017.500.000",
//   },
//   {
//     dividend_of_year: "2009",
//     rupiah_per_share: "4,75",
//     payment_date: "Kamis, 27 Agustus 2009",
//     amount_of_shares: "1.017.500.000",
//   },
// ];
