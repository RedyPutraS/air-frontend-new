import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, Title } from "components"; // Import Container dan Title dari "components"
import html2canvas from "html2canvas";
import { useRouter } from "next/router";
import React, { useState, useRef, useEffect } from "react";
import Swal from "sweetalert2";

interface Props {
  data?: any;
  lang?: any;
}
interface SelectedFile {
  file: File;
}

interface ComponentInput {
  full_name: string;
  email: string;
  phone: string;
  description: string;
  f_instansi_pelapor: string;
  file: SelectedFile[];
}

function index(props: Props) {
  const router = useRouter();
  const dataString = localStorage.getItem('kodeToken');
  const { f_noreg, f_token } = dataString ? JSON.parse(dataString) : { f_noreg: "", f_token: "" }; // Tambahkan nilai default jika dataString null
  const { lang, data } = props;
  const hero = data?.hero;
  
  const sign = lang === "en" ? "_eng" : "_ind";

  const [value, setValue] = useState<ComponentInput>({
    full_name: '',
    email: '',
    phone: '',
    f_instansi_pelapor: '',
    description: '',
    file: [],
  });

  useEffect(() => {
    if (dataString === null) {
      Swal.fire({
        icon: 'warning',
        title: 'Oops...',
        text: 'code and token data are no longer available.',
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.href = `/${lang}/sistem-pengaduan-pelanggaran`;
        }
      });
    } else {
      handleDownload();
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (e.target.type === 'file') {
      const fileList = (e.target as HTMLInputElement).files;
  
      if (fileList) {
        // Convert FileList to array
        const selectedFilesArray = Array.from(fileList).map(file => ({
          file,
        }));
  
        // Update state with selectedFilesArray
        setValue((prevValue: ComponentInput) => ({
          ...prevValue,
          file: selectedFilesArray,
        }));
      }
    } else {
      // Handling other input types (text, textarea, etc.)
      const newObject = { ...value, [e.target.name]: e.target.value };
      setValue(newObject);
    }
  };

  const tampilanRef = useRef<HTMLDivElement>(null);
  const handleDownload = () => {
    if (tampilanRef.current) {
      html2canvas(tampilanRef.current, {}).then(canvas => {
        const url = canvas.toDataURL("image/jpeg").replace("image/jpeg", "image/octet-stream");
        const a = document.createElement('a');
        a.href = url;
        a.download = 'Laporan.jpg'; // Nama file yang akan diunduh
        a.click();
      });
    }
  };

  return (
      <Container> {/* Container harus diimport dari "components" */}
        <div className="grid grid-cols-1 lg:grid-cols-9 gap-5 sm:gap-20">
          <div className="col-span-1 lg:col-span-12"></div>
          <div className="col-span-1 lg:col-span-12 grid grid-cols-1 gap-3">
            <div id="tampilan-dwonload" className="p-5" ref={tampilanRef}> {/* Tambahkan ref={tampilanRef} untuk menangkap referensi elemen */}
              <Title label={sign === "_ind" ? "Pengaduan Telah Diterima" : "Complaint Received"} style={{ marginBottom: 10 }} />
              <div className="lg:col-span-6 grid grid-cols-1 gap-3 mt-2">
                <p>{sign === "_ind" ? "Kami ucapkan terima kasih atas partisipasi bapak/ibu telah membuat laporan pengaduan di AIR Whistleblower system." : "We thank you for your participation in making a complaint report in the AIR Whistleblower system."}</p>
                <p className="text-center text-red-600 font-semibold mt-4">{sign === "_ind" ? "NOMOR PENGADUAN DAN TOKEN HANYA MUNCUL SATU KALI! CATATLAH/SIMPAN DENGAN BAIK." : "THE COMPLAINT NUMBER AND TOKEN ONLY APPEAR ONCE! NOTE/SAVE IT WELL."}</p>
              </div>
              <div className="my-4">
                <div className="lg:col-span-6 grid grid-cols-2 gap-3 mt-2">
                  <div className="flex justify-end items-center">{sign === "_ind" ? "Nomor Registrasi Laporan" : "Report Registration Number"} :</div>
                  <div className="bg-warning2 w-60 text-center py-3">{f_noreg}</div>
                </div>
                <div className="lg:col-span-6 grid grid-cols-2 gap-3 mt-2">
                  <div className="flex justify-end items-center">Token :</div>
                  <div className="border-2 border-warning1 w-60 text-center py-3">{f_token}</div>
                </div>
              </div>
              <div className="lg:col-span-6 grid grid-cols-1 gap-3 mt-2">
                {sign === "_ind" ? (<><p>Bapak/Ibu dapat memantau progres tindak lanjut laporan pada menu sebelumnya dengan menginput nomor laporan, serta berkomunikasi dengan investigator melalui platform yang ada dengan menginput nomor token tersebut. Isi laporan anda kami jamin kerahasiaannya dan akan kami tindak lanjuti sesuai peraturan dan ketentuan yang berlaku.</p>
                <p>PT. Ancora Indonesia Resources (AIR) memiliki komitmen untuk menjalankan perusahaan secara profesional dengan berlandaskan pada perilaku perusahaan yang sesuai dengan Budaya Kerja dan sikap kerja perusahaan, khususnya nilai budaya Integritas.</p></>) : (<><p>You can monitor the progress of follow-up reports in the previous menu by inputting the report number, as well as communicating with investigators via the existing platform by inputting the token number. We guarantee the confidentiality of the contents of your report and we will follow up according to the applicable rules and regulations.</p>
                <p>PT. Ancora Indonesia Resources (AIR) is committed to running the company professionally based on company behavior that is in accordance with the company's Work Culture and work attitudes, especially the cultural value of Integrity.</p></>)}
              </div>
            </div>
            <div className="flex justify-center items-center mt-5">
              <div className="flex flex-wrap bg-warning5 text-white md:mt-0 px-3 py-1 rounded-full"  onClick={handleDownload}>
                <FontAwesomeIcon icon={faDownload} className="mr-2 w-4" />
                <button>{sign === "_ind" ? "Unduh" : "download"}</button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex mt-5">
          <a href={`/${lang}/sistem-pengaduan-pelanggaran`} className="bg-warning5 p-1 px-6 text-white md:mt-10 mt-10 py-3 justify-end">{sign === "_ind" ? "Kembali ke Home" : "Back To Home"}</a>
        </div>
      </Container>
  );
}

export default index;