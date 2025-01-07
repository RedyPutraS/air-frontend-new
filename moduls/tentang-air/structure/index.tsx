import { useRouter } from "next/router";
import { Button, Container, Title } from "components";
import React from "react";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

interface Props {
  data?: any;
  lang?: any;
}

function index(props: Props) {
  const { data, lang } = props;
  const router = useRouter();
  const { id } = router.query;

  const strukturGrupAir = data?.strukturGrupAir;
  const strukturOrganisasi = data?.strukturOrganisasi;

  const imageGrup = strukturGrupAir ? JSON.parse(strukturGrupAir.image) : "";
  const imageOrganisasi = strukturOrganisasi
    ? JSON.parse(strukturOrganisasi.image)
    : "";

  const content =
    lang === "en"
      ? {
          titleGrup: strukturGrupAir.title_eng,
          spanGrup: strukturGrupAir.span_eng,
          titleOrganisasi: strukturOrganisasi.title_eng,
        }
        : {
          titleGrup: strukturGrupAir.title,
          spanGrup: strukturGrupAir.span_ind,
          titleOrganisasi: strukturOrganisasi.title,
        };

  return (
    <Container>
      <div className="flex items-center justify-between">
        <Title label={content.titleOrganisasi} />
        <div className="hidden sm:block">
          <Button
            label="Profil Manajemen"
            variant="outline"
            rightIcon={<ArrowRightIcon className="w-4" />}
            onClick={() => router.push(`/${id}/manajemen-air/komisaris`)}
          />
        </div>
      </div>
      <div className="mt-10 mb-16">
        <img
          src={imageOrganisasi}
          alt="struktur organisasi"
          className="w-full "
          data-aos="fade-in"
        />
        <div className="block mt-5 sm:hidden">
          <Button
            label="Profil Manajemen"
            variant="outline"
            onClick={() => router.push(`/${id}/manajemen-air/komisaris`)}
            style={{ width: "100%" }}
          />
        </div>
      </div>

      <Title label={content.titleGrup} />
      <img
        src={imageGrup}
        alt="struktur group air"
        className="w-full mt-10"
        data-aos="fade-in"
      />
      <div className="text-base font-semibold text-neutral w-full sm:w-[450px]">
        *{content.spanGrup}
      </div>
    </Container>
  );
}

export default index;
