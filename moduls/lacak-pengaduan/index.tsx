import { Input, Select, Textarea } from "@chakra-ui/react";
import { PostFormPengaduan, PostLacakPengaduan, TraceReport, UnggahBuktiPengaduan } from "api";
import { Button, Container, Content, Title } from "components";
import Link from "next/link";
import { useRouter } from "next/router";
import React, {useState, ChangeEvent, useEffect} from "react";
import Swal from "sweetalert2";

interface Props {
  data?: any;
  lang?: any;
}
interface SelectedFile {
  file: File;
}

interface ResponseData {
  created_at: string;
  created_by: string;
  f_divisi: string;
  f_email: string;
  f_id: number;
  f_instansi_pelapor_1: string;
  f_instansi_pelapor_2: string;
  f_jabatan: string;
  f_jenis_pengaduan: string;
  f_kronologi: string;
  f_nama: string;
  f_no_telepon: string;
  f_noreg: string;
  f_sumber: string;
  f_tanggal_masuk: string;
  f_tempat_kejadian: string;
  f_token: string;
  f_waktu_kejadian: string;
  is_active: number;
  s_id: number;
  status: {
    created_at: string;
    created_by: string;
    is_active: number;
    s_deskripsi: string;
    s_id: number;
    s_keterangan: string;
    s_label: string;
    s_nama: string;
    s_urutan: number;
    s_warna_background: string;
    s_warna_teks: string;
    updated_at: string;
    updated_by: string;
  };
}

const initialData: ResponseData = {
  created_at: "",
  created_by: "",
  f_divisi: "",
  f_email: "",
  f_id: 0,
  f_instansi_pelapor_1: "",
  f_instansi_pelapor_2: "",
  f_jabatan: "",
  f_jenis_pengaduan: "",
  f_kronologi: "",
  f_nama: "",
  f_no_telepon: "",
  f_noreg: "",
  f_sumber: "",
  f_tanggal_masuk: "",
  f_tempat_kejadian: "",
  f_token: "",
  f_waktu_kejadian: "",
  is_active: 0,
  s_id: 0,
  status: {
    created_at: "",
    created_by: "",
    is_active: 0,
    s_deskripsi: "",
    s_id: 0,
    s_keterangan: "",
    s_label: "",
    s_nama: "",
    s_urutan: 0,
    s_warna_background: "",
    s_warna_teks: "",
    updated_at: "",
    updated_by: "",
  },
};

interface ComponentInput {
  fb_keterangan: string;
  fb_file_bukti: SelectedFile[];
}

function index(props: Props) {
  const kode = localStorage.getItem('kode') || null;
  const kodeToken = localStorage.getItem('kodeToken');
  // const {f_id} = kodeToken ? JSON.parse(kodeToken) : null;
  
  const router = useRouter();
  const [resData, setResData] = useState<ResponseData>(initialData);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    localStorage.removeItem('dataDetail');
    if (kode !== null) {
      resLacakPengaduan(kode);
    }
  }, []);

  useEffect(() => {
    if (kode !== null) {
      resLacakPengaduan(kode);
    }
  }, [kode]);

  const resLacakPengaduan = async (data: any) => {
    const formData = new FormData();
    formData.append("f_noreg_search", data);
    const response = await PostLacakPengaduan(formData);
    if (response.data.status === "Failed") {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Error : ' + response.data.Message,
      });
    } else {
      setResData(response.data);
    }
  }
  const { lang, data } = props;
  const hero = data?.hero;
  
  const sign = lang === "en" ? "_eng" : "_ind";

  const [value, setValue] = useState<ComponentInput>({
    fb_keterangan: '',
    fb_file_bukti: [],
  });

  const handleClick = (bool:boolean) => {
    setIsActive(bool);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    if (e.target.type === 'file') {
      const fileList = (e.target as HTMLInputElement).files;
  
      if (fileList && fileList.length > 0) {
        // Convert FileList to array
        const selectedFilesArray = Array.from(fileList).map(file => ({
          file,
        }));
  
        // Update state with selectedFilesArray
        setValue((prevValue: ComponentInput) => ({
          ...prevValue,
          fb_file_bukti: [...prevValue.fb_file_bukti, ...selectedFilesArray],
        }));
      } else {
        // Clear the f_bukti array if no file is selected
        setValue((prevValue: ComponentInput) => ({
          ...prevValue,
          fb_file_bukti: [],
        }));
      }
    } else {
      // Handling other input types (text, textarea, select)
      const newObject = { ...value, [e.target.name]: e.target.value };
      setValue(newObject);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      // Validasi data sebelum mengirim ke API
      if (
        !value.fb_keterangan
      ) {
        Swal.fire({
          icon: 'warning',
          title: 'Oops...',
          text: 'Please fill in all required field.',
        });
        return;
      }
  
      // Mengirim data ke API
      const formData = new FormData();
      formData.append("fb_keterangan", value.fb_keterangan);
      value.fb_file_bukti.forEach((file, index) => {
        formData.append(`fb_file_bukti[${index}]`, file.file, file.file.name);
      });
  
      const response = await UnggahBuktiPengaduan(formData, resData?.f_id);
  
      if (response.data.status === "Failed") {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Error : ' + response.data.Message,
        });
      } else {
        Swal.fire({
          icon: 'success',
          title: 'Success!',
          text: 'Data successfully submitted.',
        }).then(() => {
          window.location.reload(); // Memuat ulang halaman setelah pengguna mengklik OK
      });
      }
    } catch (error: any) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Error: ' + error.message,
      });
    }
  };

  //! Fungsi Untuk input token
  const handleToken = async (param: string) => {
    const { value: token } = await Swal.fire({
      title: sign === "_ind" ? "Masukan Token" : "Enter Token",
      input: 'text',
      inputPlaceholder: sign === "_ind" ? "Masukan token.." : "Enter Token..",
      showCancelButton: true,
      confirmButtonText: 'Submit',
      cancelButtonText: 'Cancel',
      inputValidator: (value) => {
          if (!value) {
              return sign === "_ind" ? "Mohon di isi.." : "Please fill..";
          }
      }
    });

    if(param === 'detail' || param === 'tanya-tim') {
      const formData = new FormData();
      
      formData.append('f_id', `${resData?.f_id}`);
      formData.append('f_token_search', token);
      const response = await TraceReport(formData);
      
      if (response.data.status === "Failed") {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Error : ' + response.data.Message,
        });
      } else {
        localStorage.setItem('dataDetail', JSON.stringify(response.data));
        localStorage.setItem('tab', param);
        router.push(`/${lang}/tampil-detail`);
      }
    }
  }
  

  return (
    <Container>
      <div className="grid grid-cols-1 lg:grid-cols-9 gap-5 sm:gap-20">
          <div className="col-span-1 lg:col-span-12">
          </div>
          <div className="col-span-1 lg:col-span-12 grid grid-cols-1 gap-3">
              {/* <Title label={`Status Pengaduan No. ${f_noreg}:`} style={{ marginBottom: 10 }} /> */}
              <div className="flex flex-wrap">
                <p className="text-lg font-semibold">{sign === "_ind" ? "Status Pengaduan No." : "Complaint Status No."} {kode} : </p>
                <div className={`${resData.status.s_nama === "Kurang Bukti" || resData.status.s_nama === "Tidak Terbukti" || resData.status.s_nama === "Diproses" ? "bg-yellow-500" : "bg-warning2"} py-2 mt-3 md:-mt-1 md:ml-2 w-36 text-center text-white`}>
                  {resData.status.s_nama == "Diterima" && (sign === "_ind" ? "Diterima" : "Accepted")}
                  {resData.status.s_nama == "Terbukti" && (sign === "_ind" ? "Terbukti" : "Proven")}
                  {resData.status.s_nama === "Diproses" && (sign === "_ind" ? "Diproses" : "Processed")}
                  {resData.status.s_nama === "Kurang Bukti" && (sign === "_ind" ? "Kurang Bukti" : "Lack of Evidence")}
                  {resData.status.s_nama === "Tidak Terbukti" && (sign === "_ind" ? "Tidak Terbukti" : "Not proven")}
                </div>
              </div>
              <div className="flex flex-wrap">
                <p>{sign === "_ind" ? "Laporan Bapak/Ibu telah kami terima dan akan kami tindak lanjuti." : "We have received your report and we will follow up on it."}</p>
                <div className="lg:ml-5 lg:-mt-20 lg:flex lg:flex-col lg:items-end lg:w-full">
                  <button className="text-white bg-warning5 w-60 h-16 mt-2" onClick={e => handleToken('detail')}>{sign === "_ind" ? "Detail Pengaduan" : "Complaint Details"}</button>
                  <button className=" w-60 h-16 mt-2 md:ml-4 lg:ml-0 border-4 border-warning4" onClick={e => handleToken('tanya-tim')}>{sign === "_ind" ? "Tanya Investigator" : "Investigator asked"}</button>
                </div>
              </div>
              <hr className="mt-10"/>
              <p>{sign === "_ind" ? "Bapak ibu juga dapat melampirkan bukti atau keterangan tambahan untuk laporan ini." : "Ladies and gentlemen can also attach additional evidence or information to this report."}</p>
              <div className="flex flex-wrap">
                <div className="flex flex-col">
                  <text className="font-semibold">{sign === "_ind" ? "Tambah Bukti/Keterangan" : "Add Evidence/Remarks"}</text>
                  <p className="w-80 text-sm">{sign === "_ind" ? "Dapat berupa dokumen, foto, video dan audio. Ukuran file maksimal 10240kb!" : "Can be documents, photos, videos and audio. Maximum file size 10240kb!"}</p>
                </div>
                <div className="mr-3">
                  :
                </div>
                <button onClick={e => handleClick(true)} className="w-40 bg-warning6 text-center h-10 flex justify-center items-center mt-3 md:mt-0">
                {isActive ? (sign === "_ind" ? "Isi Form" : "Fill the form") : (sign === "_ind" ? " + Tambahkan Bukti" : " + Add Evidence")}
                </button>
              </div>
              <div>
                <form onSubmit={handleSubmit}>
                  <div className={`flex flex-wrap ${isActive ? '' : 'hidden'}`}>
                      <div className="w-full">
                        <label htmlFor="fb_keterangan" className="my-3 md:flex-shrink-0 md:w-60 md:mr-2 flex items-center">
                          {sign === "_ind" ? "Tambahkan Keterangan" : "Add Description"}
                          <span className="ml-4">:</span>
                        </label>
                        <Textarea
                          id="fb_keterangan"
                          placeholder={lang === "en" ? "Enter Chronology" : "Masukkan Keterangan"}
                          mt={1}
                          name="fb_keterangan"
                          size="sm"
                          onChange={handleChange}
                          value={value.fb_keterangan}
                          className="w-full"
                        />
                      </div>
                      <div className="w-full">
                        <label htmlFor="fb_file_bukti" className="my-3 md:flex-shrink-0 md:w-60 md:mr-2 flex">
                          {sign === "_ind" ? "Unggah Bukti" : "Upload Proof"}
                          
                          <span className="ml-4">:</span>
                        </label>
                        <input onChange={handleChange} type="file" name="fb_file_bukti" id="fb_file_bukti" className="block w-full border border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none
                        file:bg-gray-50 file:border-0
                        file:me-4
                        file:py-3 file:px-4
                        " multiple/>
                      </div>
                      </div>
                    <div className={`flex justify-end items-end mt-4 ${isActive ? '' : 'hidden'}`}>
                      <button className="w-36 h-14 bg-warning1 text-white">{sign === "_ind" ? "Tambahkan" : "Add"}</button>
                    </div>
                </form>
              </div>
          </div>
      </div>
      <div className="mt-7">
        <a href={`/${lang}/sistem-pengaduan-pelanggaran`} className="bg-warning5 p-1 px-6 text-white md:mt-10 mt-10 py-3 justify-end">{sign === "_ind" ? "Kembali ke Home" : "Back To Home"}</a>
      </div>
    </Container>
  );
}

export default index;
