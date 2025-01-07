import { Container, Title, DocumentLink } from "components";
import React from "react";

interface Props {}

export const keterbukaanInformasi = [
  {
    label: "Keterbukaan Informasi Rencana Pelaksanaan PMTHMETD",
  },
  {
    label: "Perubahan dan/atau Tambahan Atas Keterbukaan Informasi",
    isDownload: true,
    child: [
      {
        label:
          "a. Perubahan dan/atau Tambahan Atas Rencana Transaksi Material peningkatan jumlah fasilitas pinjaman yang diterima oleh salah satu anak Perusahaan secara tidak langsung Perseroan",
      },
      {
        label:
          "b. Rencana Transaksi Material yang dilakukan oleh salah satu Perusahaan Terkendali",
      },
      {
        label:
          "c. Dalam Rangka Penambahan Modal Tanpa Memberikan Hak Memesan Efek Terlebih Dahulu (“PMTHMETD”)",
      },
    ],
  },
  {
    label:
      "Rencana Transaksi Material peningkatan jumlah fasilitas pinjaman yang diterima oleh salah satu anak Perusahaan secara tidak langsung Perseroan tanggal 12 Mei 2023.",
  },
  {
    label:
      "Rencana Transaksi Material yang dilakukan oleh salah satu Perusahaan Terkendali tanggal 12 Mei 2023.",
  },
];

function index(props: Props) {
  const {} = props;

  return (
    <Container>
      <Title label="Keterbukaan Informasi" />
      <div className="mt-5">
        {keterbukaanInformasi.map((item: any, key: any) => (
          <DocumentLink
            key={key}
            label={item.label}
            child={item.child}
            isBorder
            isDownload
            isDownloadChild
          />
        ))}
      </div>
    </Container>
  );
}

export default index;
