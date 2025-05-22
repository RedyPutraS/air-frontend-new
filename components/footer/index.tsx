import { IdxIcon, LogoIcon, MailIcon } from "components/icons";
import useLanguage from "hooks/useLanguage";
import { url } from "inspector";
import { useRouter } from "next/router";

function Footer() {
  const router = useRouter();
  const lang = useLanguage((state) => state.lang);

  // const menus = [
  //   {
  //     url: `/${lang}/ruang-media`,
  //     label: lang === "en" ? "Media Room" : "Ruang Media",
  //   },
  //   { url: `/${lang}/karir`, label: lang === "en" ? "Career" : "Karir" },
  // ];

  const helps = [
    // {
    //   url: `/${lang}/kebijakan-privasi`,
    //   label: lang === "en" ? "Privacy Policy" : "Kebijakan Privasi",
    // },
    // {
    //   url: `/${lang}/ruang-media`,
    //   label: lang === "en" ? "Media Room" : "Ruang Media",
    // },
    { url: `/${lang}/karir`, label: lang === "en" ? "Career" : "Karir" },
  ];
  const privacy = {
    url: `/${lang}/kebijakan-privasi`,
    label: lang === "en" ? "Privacy Statement" : "Kebijakan Privasi",
  };
  const contacts = [
    { url: "tel:+622129035011", label: "Phone", value: "+62 21 290 35 011" },
    { url: "/", label: "Fax", value: "+62 21 290 35 335" },
    {
      url: "mailto:corporate.secretary@ancorair.com",
      label: "Email",
      value: "corporate.secretary@ancorair.com",
    },
  ];

  return (
    <div className="px-5 py-5 text-white bg-primary lg:py-16 xl:px-16 2xl:px-64 grid grid-cols-1 lg:grid-cols-7 gap-5 ">
      <div className="col-span-1 lg:col-span-2">
        {/* <LogoIcon /> */}
        <img
          alt="logo"
          src="/images/logo/AncoraLogoLight.png"
          className="h-[50px]"
        />
        <div className="hidden mt-3 text-sm text-justify sm:text-base lg:block">
          Equity Tower 41st Floor Sudirman Central Business District (SCBD) Jl.
          Jend. Sudirman Kav. 52-53 Lot 9 Jakarta Selatan 12190
        </div>
      </div>

      <div className="pl-0 col-span-1 lg:col-span-5 grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-5">
        {/* <div className="flex justify-start col-span-1 lg:col-span-2 lg:justify-end"> */}
        {/*   <div> */}
        {/*     <div className="text-[20px] sm:text-[24px] font-semibold tracking-[1.5px] text-white"> */}
        {/*       {lang === "en" ? "Information Resource" : "Sumber Informasi"} */}
        {/*     </div> */}
        {/*     <div className="mt-0 text-sm sm:text-base lg:mt-5"> */}
        {/*       {menus.map((item, key) => ( */}
        {/*         <div */}
        {/*           className={`mt-2 cursor-pointer transition-all duration-500 text-[14px] hover:text-warning1`} */}
        {/*           key={key} */}
        {/*           onClick={() => router.push(item.url)} */}
        {/*         > */}
        {/*           {item.label} */}
        {/*         </div> */}
        {/*       ))} */}
        {/*     </div> */}
        {/*   </div> */}
        {/* </div> */}

        <div className="flex justify-start lg:justify-end lg:pr-16">
          <div>
            <div className="text-[20px] sm:text-[24px] font-semibold tracking-[1.5px] text-white">
              {lang === "en" ? "Help" : "Bantuan"}
            </div>
            <div className="mt-0 text-sm sm:text-base lg:mt-5">
              {helps.map((item, key) => (
                <div
                  className={`mt-2 cursor-pointer transition-all duration-500 text-[14px] hover:text-warning1`}
                  key={key}
                  onClick={() => router.push(item.url)}
                >
                  {item.label}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-start lg:justify-end">
          <div>
            <div className="text-[20px] sm:text-[24px] font-semibold tracking-[1.5px] text-white">
              {lang === "en" ? "Contact Us" : "Kontak Kami"}
            </div>
            <div className="mt-0 text-sm sm:text-base lg:mt-5">
              {contacts.map((item, key) => (
                <div
                  className={`mt-2 cursor-pointer transition-all duration-500 text-[14px] hover:text-warning1 flex justify-start gap-3`}
                  key={key}
                  onClick={() => router.push(item.url)}
                >
                  <div className="w-[45px]">{item.label}</div>
                  <div>
                    <span className="mr-1">:</span> {item.value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="block text-sm sm:text-base lg:hidden">
        Equity Tower 41st Floor Sudirman Central Business District (SCBD) Jl.
        Jend. Sudirman Kav. 52-53 Lot 9 Jakarta Selatan 12190
      </div>

      {/* <div className="flex justify-start gap-3">
        <div className="bg-indigo2 w-[32px] h-[32px] flex justify-center items-center rounded-full">
          <MailIcon />
        </div>
        <div className="bg-indigo2 w-[32px] h-[32px] flex justify-center items-center rounded-full">
          <IdxIcon />
        </div>
      </div> */}

      <div className="flex flex-wrap justify-between md:grid md:grid-cols-2 xl:grid-cols-3 xl:col-span-12">
        <div className="flex flex-wrap">
          <div className="bg-indigo2 w-[32px] h-[32px] flex justify-center items-center rounded-full mr-2">
            <MailIcon />
          </div>
          <div className="bg-indigo2 w-[32px] h-[32px] flex justify-center items-center rounded-full">
            <IdxIcon />
          </div>
        </div>
        <div className="hidden xl:block"></div>
        <div
          className={`mt-2 cursor-pointer transition-all duration-500 text-[14px] hover:text-warning1 my-auto`}
          onClick={() => router.push(privacy.url)}
        >
          {privacy.label}
        </div>
      </div>

      <div className="text-justify col-span-1 lg:col-span-7">
        {lang === "en"
          ? "ATTENTION! PT Ancora Indonesia Resources Tbk (AIR) does not charge any fees for procurement or recruitment process and all its stages. Be careful of any misuse of AIR’s name. Immediately contact us for any form of suspicious activity or solicitation. If necessary, report the activity to the appropriate authorities."
          : "WASPADA! PT Ancora Indonesia Resources Tbk (AIR) tidak mengenakan biaya untuk proses pengadaan atau rekrutmen beserta seluruh tahapannya. Berhati-hatilah terhadap penipuan yang dapat mengatasnamakan AIR. Segera verifikasi segala bentuk aktivitas atau ajakan yang mencurigakan melalui kontak kami. Jika diperlukan, laporkan juga aktivitas tersebut ke pihak yang berwenang."}
      </div>
    </div>
  );
}

export default Footer;
