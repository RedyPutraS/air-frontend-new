import { Input, Select, Textarea } from "@chakra-ui/react";
import { GetDivisi, GetJabatan, PostFormPengaduan, getInstansi } from "api";
import { Button, Container, Content, Title } from "components";
import Link from "next/link";
import { useRouter } from "next/router";
import React, {useState, ChangeEvent, useEffect} from "react";
import ReCAPTCHA from "react-google-recaptcha";
import Swal from "sweetalert2";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface Props {
  data?: any;
  lang?: any;
}
interface SelectedFile {
  file: File;
}

interface ComponentInput {
  f_instansi_pelapor_1: string;
  f_nama: string;
  f_no_telepon: string;
  f_email: string;
  f_yang_di_laporkan: string;
  f_instansi_pelapor_2: string;
  j_id: string;
  d_id: string;
  f_jenis_pengaduan: string;
  f_waktu_kejadian: string;
  f_tempat_kejadian: string;
  f_kronologi: string;
  f_deskripsi_tgl_kejadian: string;
  g_recaptcha_response: string;
  f_bukti: SelectedFile[];
  fb_keterangan:string[];
}

function index(props: Props) {
  const router = useRouter();
  const { lang, data } = props;
  const [jabatans, setJabatans] = useState([]);
  const [instansi, setInstansi] = useState([]);
  const [divisis, setDivisis] = useState([]);
  const hero = data?.hero;
  
  const sign = lang === "en" ? "_eng" : "_ind";

  const [value, setValue] = useState<ComponentInput>({
    f_instansi_pelapor_1: '',
    f_nama: '',
    f_no_telepon: '',
    f_email: '',
    f_yang_di_laporkan: '',
    f_instansi_pelapor_2: '',
    j_id: '',
    d_id: '',
    f_jenis_pengaduan: '',
    f_waktu_kejadian: '',
    f_tempat_kejadian: '',
    f_kronologi: '',
    f_deskripsi_tgl_kejadian: '',
    g_recaptcha_response: '',
    f_bukti: [],
    fb_keterangan: [],
  });

  useEffect(() => {
    getJabatanApi();
  }, []);

  useEffect(() => {
    getInstansiApi();
  }, []);

  useEffect(() => {
    getDivisiApi();
  }, []);

  const getJabatanApi = async () => {
    const data = await GetJabatan();
    setJabatans(data.data);
  }

  const getInstansiApi = async () => {
    const data = await getInstansi();
    setInstansi(data.data);
  }

  const getDivisiApi = async () => {
    const data = await GetDivisi();
    setDivisis(data.data);
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    if (e.target.type === 'file') {
      const fileList = (e.target as HTMLInputElement).files;
      
      if (fileList && fileList.length > 0) {
        // Convert FileList to array
        const selectedFilesArray = Array.from(fileList).map(file => ({
          file,
        }));
  
        // Update state with selectedFilesArray
        setValue(prevValue => ({
          ...prevValue,
          f_bukti: [...prevValue.f_bukti, ...selectedFilesArray],
        }));
      } else {
        // Clear the f_bukti array if no file is selected
        setValue(prevValue => ({
          ...prevValue,
          f_bukti: [],
        }));
      }
    } else if (e.target.name.startsWith('fb_keterangan')) {
      // Handling changes for fb_keterangan (textarea)
      const index = parseInt(e.target.name.split('_')[2]); // Extract index from name
      const newValue = e.target.value;
  
      setValue(prevValue => {
        const newFbKeterangan = [...prevValue.fb_keterangan];
        newFbKeterangan[index] = newValue;
  
        return {
          ...prevValue,
          fb_keterangan: newFbKeterangan,
        };
      });
    } else {
      // Handling other input types (text, select)
      const newObject = { ...value, [e.target.name]: e.target.value };
      setValue(newObject);
    }
  };

  const [selectedInstansi2, setSelectedInstansi2] = useState<string>("");
  const handleChangeOther2 = (e: ChangeEvent<HTMLSelectElement>) => {
    const isi = e.target.value;

    if (isi === "Other") {
      // Handle Other option
      setSelectedInstansi2("");
      const newObject = { ...value, [e.target.name]: "" };
      setValue(newObject);
    } else {
      setSelectedInstansi2(isi);
      const newObject = { ...value, [e.target.name]: isi };
      setValue(newObject);
    }
  };

  const [jabatan, setjabatan] = useState<string>("");
  const [divisiHidden, setDivisiHidden] = useState<boolean>(false);
  const handleChangeJabatan = (e: ChangeEvent<HTMLSelectElement>) => {
    const isi = e.target.value;
    

    if (isi === "5" || isi === "6" || isi === "10") {
      // Handle Other option
      setjabatan(isi);
      const newObject = { ...value, [e.target.name]: isi };
      setValue(newObject);
      setDivisiHidden(true);
    } else {
      setjabatan(isi);
      const newObject = { ...value, [e.target.name]: isi };
      setValue(newObject);
      setDivisiHidden(false);
    }
  };

  const [jenisPengaduan, setJenisPengaduan] = useState<string>("");
  const handleChangeJenisPengaduan = (e: ChangeEvent<HTMLSelectElement>) => {
    const isi = e.target.value;

    if (isi === "Other") {
      // Handle Other option
      setJenisPengaduan("");
      const newObject = { ...value, [e.target.name]: "" };
      setValue(newObject);
    } else {
      setJenisPengaduan(isi);
      const newObject = { ...value, [e.target.name]: isi };
      setValue(newObject);
    }
  };


  const [captchaToken, setCaptchaToken] = useState<string | null>(null);

  const handleCaptchaChange = (token: string | null) => {
    setValue(prevValue => ({
      ...prevValue,
      g_recaptcha_response: token || ''
    }));
  };


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (value.g_recaptcha_response === '') {
      Swal.fire({
          icon: 'warning',
          title: 'Oops...',
          text: 'please check reCAPTCHA',
        });
      return;
    }
    try {
      Swal.fire({
        icon: 'warning',
        title: 'Please Wait!',
        text: 'Data is being processed....',
        showConfirmButton: false
      });
      // Validasi data sebelum mengirim ke API
      
      if (
        !value.f_yang_di_laporkan ||
        !value.f_instansi_pelapor_1 ||
        !value.j_id ||
        !value.f_jenis_pengaduan ||
        !value.f_waktu_kejadian ||
        !value.f_tempat_kejadian ||
        !value.f_kronologi ||
        value.f_bukti.length === 0
      ) {
        Swal.fire({
          icon: 'warning',
          title: 'Oops...',
          text: 'Please fill in all required fields and upload at least one file.',
        });
        return;
      }
  
      // Mengirim data ke API
      
      const formData = new FormData();
      formData.append("f_nama", value.f_nama.trim() === "" ? "Anonim " : value.f_nama);
      formData.append("f_email", value.f_email.trim() === "" ? "Anonim@gmail.com" : value.f_email);
      formData.append("f_no_telepon", value.f_no_telepon.trim() === "" ? "" : value.f_no_telepon);
      formData.append("f_instansi_pelapor_1", value.f_instansi_pelapor_1);
      formData.append("f_yang_di_laporkan", value.f_yang_di_laporkan); 
      formData.append("f_instansi_pelapor_2", value.f_instansi_pelapor_2);
      formData.append("j_id", value.j_id);
      formData.append("d_id", value.d_id === "" ? "" : value.d_id);
      formData.append("f_jenis_pengaduan", value.f_jenis_pengaduan);
      formData.append("f_waktu_kejadian", value.f_waktu_kejadian);
      formData.append("f_tempat_kejadian", value.f_tempat_kejadian);
      formData.append("f_kronologi", value.f_kronologi);
      formData.append("f_deskripsi_tgl_kejadian", value.f_deskripsi_tgl_kejadian.trim() === "" ? " - " : value.f_deskripsi_tgl_kejadian);
      formData.append("g_recaptcha_response", value.g_recaptcha_response);
  
      value.f_bukti.forEach((file, index) => {
        formData.append(`fb_file_bukti[${index}]`, file.file, file.file.name);

        // Menambahkan keterangan ke formData
        if (value.fb_keterangan[index]) {
          formData.append(`fb_keterangan[${index}]`, value.fb_keterangan[index]);
        }
      });
      
      
  
      const response = await PostFormPengaduan('formpengaduan', formData);
      
      const errorMessage = sign === '_ind' ? 'Tidak boleh kontent spam!' : 'No spam content allowed!';
      Swal.close();
      if (response.data === '') {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: errorMessage,
        }).then(() => {
          // Reload halaman setelah menekan "OK"
          window.location.reload();
        });
      } else {
        if (response.data.status === "Failed") {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Error : ' + response.data.Message,
          });
        } else {
          localStorage.setItem('kodeToken', JSON.stringify(response.data));
          router.push(`/${lang}/tampil-kode`);
        //   // Swal.fire({
        //     //   icon: 'success',
        //     //   title: 'Success!',
        //     //   text: 'Data successfully submitted.',
        //     // }).then(() => {
        //     //   localStorage.setItem('kodeToken', JSON.stringify(response.data));
        //   //   router.push(`/${lang}/tampil-kode`);
        //   // });
        }
      }
    } catch (error: any) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Error: ' + error.message,
      });
    }
  };

  //? bagian Add Component bukti
  const [components, setComponents] = useState<number[]>([0]);
  
  const addComponent = () => {
    setComponents([...components, components.length]);
     // Using the length as a unique key for simplicity
  };

  const removeComponent = (index: number) => {
    setComponents(prevComponents => prevComponents.filter((_, i) => i !== index));

    setValue(prevValue => ({
      ...prevValue,
      f_bukti: prevValue.f_bukti.filter((_, i) => i !== index),
      fb_keterangan: prevValue.fb_keterangan.filter((_, i) => i !== index),
    }));
  };

  return (
    <Container>
      <div className="grid grid-cols-1 lg:grid-cols-9 gap-5 sm:gap-20">
        <div className="col-span-1 lg:col-span-12">
          <Title label={hero["title" + sign]} />
        </div>
        <div className="col-span-1 lg:col-span-12 grid grid-cols-1 gap-3 lg:-mt-16 xl:-mt-16 md:-mt-16">
          <p>{sign === "_ind" ? "*) Bertanda wajib diisi" : "*) Marked as required"}</p>
          <form onSubmit={handleSubmit}>
            <div className="md:flex md:items-center md:mb-4">
              <label htmlFor="f_instansi_pelapor_1" className="text-sm font-semibold md:flex-shrink-0 md:w-60 md:mr-2 flex items-center">
                {sign === "_ind" ? "Instansi Pelapor" : "Reporting Agency"} *)
                <span className="ml-auto">:</span>
              </label>
              <Select
                id="f_instansi_pelapor_1"
                name="f_instansi_pelapor_1"
                placeholder={lang === "en" ? "Select Reporting Agency" : "Pilih Instansi Pelapor"}
                mt={1}
                size="sm"
                className="flex-grow"
                onChange={handleChange}
              >
                <option value="Internal">Internal</option>
                <option value="Eksternal">Eksternal</option>
                <option value="Anonim">{lang === "en" ? "Anonymous" : "Anonim"}</option>
              </Select>
            </div>

            <div className="md:flex md:items-center md:mb-4 justify-between mt-3 md:mt-0">
              <label htmlFor="f_nama" className="text-sm font-semibold md:flex-shrink-0 md:w-60 md:mr-2 flex items-center">
                {sign === "_ind" ? "Nama lengkap" : "Full Name"}
                <span className="ml-auto">:</span>
              </label>
              <Input
                id="f_nama"
                name="f_nama"
                placeholder={lang === "en" ? "Enter Full Name" : "Masukkan Nama Lengkap"}
                mt={1}
                size="sm"
                value={value.f_nama}
                onChange={handleChange}
                className="flex-grow"
              />
            </div>

            <div className="md:flex md:items-center md:mb-4 justify-between mt-3 md:mt-0">
              <label htmlFor="f_no_telepon" className="text-sm font-semibold md:flex-shrink-0 md:w-60 md:mr-2 flex items-center">
                {sign === "_ind" ? "No. Telepon/HP" : "No. Telephone/cellphone"}
                <span className="ml-auto">:</span>
              </label>
              <Input
                id="f_no_telepon"
                name="f_no_telepon"
                placeholder={lang === "en" ? "Enter No. Telephone/cellphone" : "Masukkan No. Telepon/HP"}
                mt={1}
                size="sm"
                value={value.f_no_telepon}
                onChange={handleChange}
                className="flex-grow"
                type="number"
              />
            </div>

            <div className="md:flex md:items-center md:mb-4 justify-between mt-3 md:mt-0">
              <label htmlFor="f_email" className="text-sm font-semibold md:flex-shrink-0 md:w-60 md:mr-2 flex items-center">
                {sign === "_ind" ? "Email" : "E-mail"}
                <span className="ml-auto">:</span>
              </label>
              <Input
                id="f_email"
                name="f_email"
                placeholder={lang === "en" ? "Enter Email" : "Masukkan Email"}
                mt={1}
                size="sm"
                value={value.f_email}
                onChange={handleChange}
                className="flex-grow"
              />
            </div>

            <div className="md:flex md:items-center md:mb-4 justify-between mt-3 md:mt-0">
              <label htmlFor="f_yang_di_laporkan" className="text-sm font-semibold md:flex-shrink-0 md:w-60 md:mr-2 flex items-center">
                {sign === "_ind" ? "Nama Yang Dilaporkan" : "Name to Report"} *)
                <span className="ml-auto">:</span>
              </label>
              <Input
                id="f_yang_di_laporkan"
                name="f_yang_di_laporkan"
                placeholder={lang === "en" ? "Enter the Name to Report" : "Masukkan Nama Yang Dilaporkan"}
                mt={1}
                size="sm"
                value={value.f_yang_di_laporkan}
                onChange={handleChange}
                className="flex-grow"
              />
            </div>

            <div className="md:flex md:items-center md:mb-4 justify-between mt-3 md:mt-0">
              <label htmlFor="f_instansi_pelapor_2" className="text-sm font-semibold md:flex-shrink-0 md:w-60 md:mr-2 flex items-center">
                {sign === "_ind" ? "Instansi Terlapor" : "Company to Report"} *)
                <span className="ml-auto">:</span>
              </label>
              <Select
                id="f_instansi_pelapor_2"
                name="f_instansi_pelapor_2"
                placeholder={lang === "en" ? "Select Company to Report" : "Pilih Instansi Terlapor"}
                mt={1}
                size="sm"
                className="flex-grow"
                onChange={handleChange}
              >
                {
                  instansi.map((value: any, index: any) => {
                    return (
                      <option value={value.i_id} key={index}>{value.i_nama}</option>
                    );
                  })
                }
              </Select>
            </div>

            {/* <div className="md:flex md:items-center md:mb-4 justify-between mt-3 md:mt-0">
              <label htmlFor="f_instansi_pelapor_2" className="text-sm font-semibold md:flex-shrink-0 md:w-60 md:mr-2 flex items-center">
                {sign === "_ind" ? "Instansi Terlapor" : "Reported Agency"} *)
                <span className="ml-auto">:</span>
              </label>
              <Select
                id="f_instansi_pelapor_2"
                name="f_instansi_pelapor_2"
                placeholder={lang === "en" ? "Select Reported Agency" : "Pilih Instansi Terlapor"}
                mt={1}
                size="sm"
                value={selectedInstansi2}
                onChange={handleChangeOther2}
                className="flex-grow"
              >
                <option value="PT Ancora Indonesia Resources">PT Ancora Indonesia Resources</option>
                <option value="PT Multi Nitrotama Kimia">PT Multi Nitrotama Kimia</option>
                <option value="PT Bormindo Nusantara">PT Bormindo Nusantara</option>
                <option value="PT Indotan Lombok Barat Bangkit">PT Indotan Lombok Barat Bangkit</option>
                <option value="PT Ancora Shipping">PT Ancora Shipping</option>
                <option value="PT Kemitraan MNK BME">PT Kemitraan MNK BME</option>
                <option value="Lainnya">Other</option>
              </Select>
              {selectedInstansi2 === "Lainnya" && (
                <>
                <span className="mx-2">:</span>
                  <Input
                    placeholder={lang === "en" ? "Enter other option" : "Masukkan opsi lain"}
                    mt={1}
                    size="sm"
                    name="f_instansi_pelapor_2"
                    onChange={handleChange}
                  />
                </>
              )}
            </div> */}

            <div className="md:flex md:items-center md:mb-4 justify-between mt-3 md:mt-0">
              <label htmlFor="j_id" className="text-sm font-semibold md:flex-shrink-0 md:w-60 md:mr-2 flex items-center">
                {sign === "_ind" ? "Jabatan" : "Job Title"} *)
                <span className="ml-auto">:</span>
              </label>
              <Select
                id="j_id"
                name="j_id"
                placeholder={lang === "en" ? "Select Job Title" : "Pilih Jabatan"}
                mt={1}
                size="sm"
                value={jabatan}
                onChange={handleChangeJabatan}
                className="flex-grow"
              >
                {
                  jabatans.map((value: any, index: any) => {
                    return (
                      <option value={value.j_id} key={index}>{sign === "_eng" ? value.j_nama_eng : value.j_nama_ind}</option>
                    );
                  })
                }
              </Select>
            </div>

            {
              !divisiHidden && (
                <div className="md:flex md:items-center md:mb-4 justify-between mt-3 md:mt-0">
                  <label htmlFor="d_id" className="text-sm font-semibold md:flex-shrink-0 md:w-60 md:mr-2 flex items-center">
                    {sign === "_ind" ? "Divisi" : "Division"} *)
                    <span className="ml-auto">:</span>
                  </label>
                  <Select
                    id="d_id"
                    name="d_id"
                    placeholder={lang === "en" ? "Select Division" : "Pilih Divisi"}
                    mt={1}
                    size="sm"
                    className="flex-grow"
                    onChange={handleChange}
                  >
                    {
                      divisis.map((value: any, index: any) => {
                        return (
                          <option value={value.d_id} key={index}>{sign === "_eng" ? value.d_nama_eng : value.d_nama_ind}</option>
                        );
                      })
                    }
                  </Select>
                </div>
              )
            }

            <div className="md:flex md:items-center md:mb-4 justify-between mt-3 md:mt-0">
              <label htmlFor="f_jenis_pengaduan" className="text-sm font-semibold md:flex-shrink-0 md:w-60 md:mr-2 flex items-center">
              {sign === "_ind" ? "Jenis Pengaduan" : "Type of Complaint"} *)
                <span className="ml-auto">:</span>
              </label>
              <Select
                id="f_jenis_pengaduan"
                name="f_jenis_pengaduan"
                placeholder={lang === "en" ? "Select Complaint Type" : "Pilih Jenis Pengaduan"}
                mt={1}
                size="sm"
                value={jenisPengaduan}
                onChange={handleChangeJenisPengaduan}
                className="flex-grow"
              >
                <option value="Fraud~Kecurangan">{lang === "en" ? "Fraud" : "Kecurangan"}</option>
                <option value="Harassment~Kekerasan">{lang === "en" ? "Harassment" : "Kekerasan"}</option>
                <option value="Violations of the Company's Code of Ethics and Culture~Pelanggaran kepada Kode Etik dan Budaya Perusahaan">{lang === "en" ? "Violations of the Company's Code of Ethics and Culture" : "Pelanggaran kepada Kode Etik dan Budaya Perusahaan"}</option>
                <option value="Violations of Laws and Regulations~Pelanggaran Hukum dan Undang-undang">{lang === "en" ? "Violations of Laws and Regulations" : "Pelanggaran Hukum dan Undang-undang"}</option>
                <option value="Lainnya~Others">{lang === "en" ? "Others" : "Lainnya"}</option>
              </Select>
              {jenisPengaduan === "Lainnya" && (
                <>
                <span className="mx-2">:</span>
                  <Input
                    placeholder={lang === "en" ? "Enter other option" : "Masukkan opsi lain"}
                    mt={1}
                    size="sm"
                    name="f_jenis_pengaduan"
                    onChange={handleChange}
                  />
                </>
              )}
            </div>

            <div className="md:flex md:items-center md:mb-4 justify-between mt-3 md:mt-0">
              <label
                htmlFor="f_waktu_kejadian"
                className="text-sm font-semibold md:flex-shrink-0 md:w-60 md:mr-2 flex items-center"
              >
                {sign === "_ind" ? "Waktu Kejadian" : "Time of Event"} *)
                <span className="ml-auto">:</span>
              </label>
              <div className="flex flex-col md:flex-row w-full">
                <input
                  type="date"
                  id="f_waktu_kejadian"
                  name="f_waktu_kejadian"
                  placeholder={
                    lang === 'en'
                      ? 'Fill in the date in detail, for example: 2022-12-20'
                      : 'Tanggal diisi secara detail, contoh: 2022-12-20'
                  }
                  value={value.f_waktu_kejadian}
                  onChange={handleChange}
                  className="form-control border border-gray-200 rounded-md p-1 mr-2 flex-grow w-full md:w-56" // Tambahkan gaya border di sini
                />
                <Textarea
                  id="f_deskripsi_tgl_kejadian"
                  placeholder={lang === "en" ? "Enter an explanation of the time of the incident if any..." : "Masukkan penjelasan waktu kejadian jika ada..."}
                  mt={1}
                  name="f_deskripsi_tgl_kejadian"
                  size="sm"
                  value={value.f_deskripsi_tgl_kejadian}
                  onChange={handleChange}
                  className="form-control border border-gray-200 rounded-md p-1 flex-grow"
                />
              </div>
            </div>

            <div className="md:flex md:items-center md:mb-4 justify-between mt-3 md:mt-0">
              <label htmlFor="f_tempat_kejadian" className="text-sm font-semibold md:flex-shrink-0 md:w-60 md:mr-2 flex items-center">
                {sign === "_ind" ? "Tempat Kejadian" : "Place of Event"} *)
                <span className="ml-auto">:</span>
              </label>
              <Input
                id="f_tempat_kejadian"
                name="f_tempat_kejadian"
                placeholder={lang === "en" ? "Enter the Place of Event" : "Masukkan Tempat Kejadian"}
                mt={1}
                size="sm"
                value={value.f_tempat_kejadian}
                onChange={handleChange}
                className="flex-grow"
              />
            </div>
            
            <div className="md:flex md:items-center md:mb-4 justify-between mt-3 md:mt-0">
              <label htmlFor="f_kronologi" className="text-sm font-semibold md:flex-shrink-0 md:w-60 md:mr-2 flex items-center">
                {sign === "_ind" ? "Kronologi" : "Chronology"} *)
                <span className="ml-auto">:</span>
              </label>
              <Textarea
                id="f_kronologi"
                placeholder={lang === "en" ? "Enter Chronology" : "Masukkan Kronologi"}
                mt={1}
                name="f_kronologi"
                size="sm"
                value={value.f_kronologi}
                onChange={handleChange}
              />
            </div>
            {/* <div className="md:flex md:items-center md:mb-4 justify-between my-3 md:mt-0">
              <label htmlFor="f_bukti" className="text-sm font-semibold md:flex-shrink-0 md:w-60 md:mr-2 flex items-center">
                {sign === "_ind" ? "Unggah Bukti" : "Upload Proof"} *)
                <span className="ml-auto">:</span>
              </label>
              <div className="w-full">
                <input
                  onChange={handleChange}
                  type="file"
                  name="f_bukti"
                  id="f_bukti"
                  className="block w-full border border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none
                    file:bg-gray-50 file:border-0
                    file:me-4
                    file:py-3 file:px-4"
                  multiple
                />
                <Textarea
                  id="f_kronologi"
                  placeholder={lang === "en" ? "Enter Bukti" : "Masukkan Bukti"}
                  mt={1}
                  name="f_kronologi"
                  size="sm"
                  value={value.fb_keterangan}
                  onChange={handleChange}
                />
              </div>
            </div> */}

            <div id="component-tambah">
              {components.map((_, index) => (
                <div key={index} className="md:flex md:items-center md:mb-4 justify-between my-3 md:mt-0">
                  {index === 0 ? (
                    <label htmlFor="f_bukti" className="text-sm font-semibold md:flex-shrink-0 md:w-60 md:mr-2 flex items-center">
                      {sign === "_ind" ? "Unggah Bukti" : "Upload Proof"} *)
                      <span className="ml-auto">:</span>
                    </label>
                  ) : (
                    <label htmlFor={`f_bukti_${index}`} className="text-sm font-semibold md:flex-shrink-0 md:w-60 md:mr-2 flex items-center">
                      <a className="bg-red-600 p-4 text-white rounded-md hover:cursor-pointer" onClick={() => removeComponent(index)}>Delete</a>
                    </label>
                  )}
                  
                  <div className="w-full">
                    <input
                      onChange={handleChange}
                      type="file"
                      name={`f_bukti`}
                      id={`f_bukti`}
                      className="block w-full border border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none
                        file:bg-gray-50 file:border-0
                        file:me-4
                        file:py-3 file:px-4"
                    />
                    <Textarea
                      id={`fb_keterangan_${index}`}
                      placeholder={lang === "en" ? "Enter a Proof explanation (optional)..." : "Masukkan penjelasan Bukti (opsional)..."}
                      mt={1}
                      name={`fb_keterangan_${index}`}
                      size="sm"
                      value={value.fb_keterangan[index] || ''} // Ensure value exists in the array
                      onChange={handleChange}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="md:flex md:items-center md:mb-4 justify-between mt-3 md:mt-0 ">
              <div className="text-sm font-semibold md:flex-shrink-0 md:w-60 md:mr-2 flex items-center">
                {/* {sign === "_ind" ? "Kronologi" : "Chronology"} *)
                <span className="ml-auto">:</span> */}
              </div>
              <div className="flex items-start flex-col justify-start w-full">
                <a className="bg-warning2 p-1 md:p-3 rounded-md text-white hover:cursor-pointer md:w-[55px]" onClick={addComponent}>
                  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 50 50" className="">
                      <path fill="white" d="M 25 2 C 12.309295 2 2 12.309295 2 25 C 2 37.690705 12.309295 48 25 48 C 37.690705 48 48 37.690705 48 25 C 48 12.309295 37.690705 2 25 2 z M 25 4 C 36.609824 4 46 13.390176 46 25 C 46 36.609824 36.609824 46 25 46 C 13.390176 46 4 36.609824 4 25 C 4 13.390176 13.390176 4 25 4 z M 24 13 L 24 24 L 13 24 L 13 26 L 24 26 L 24 37 L 26 37 L 26 26 L 37 26 L 37 24 L 26 24 L 26 13 L 24 13 z"></path>
                  </svg>
                </a>
                <p className="text-end text-[10px] md:text-[12.5px] mt-1 text-red-600">{lang === "en" ? '*Press "+" if you want to add files and descriptions' : '*Tekan "+" jika ingin menambahkan file dan penjelasan bukti'}</p>
              </div>
            </div>

            {/* <div className="flex justify-end flex-col items-end my-3">
              <a className="bg-warning2 p-1 md:p-3 rounded-md text-white hover:cursor-pointer md:w-[55px]" onClick={addComponent}>
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 50 50" className="">
                    <path fill="white" d="M 25 2 C 12.309295 2 2 12.309295 2 25 C 2 37.690705 12.309295 48 25 48 C 37.690705 48 48 37.690705 48 25 C 48 12.309295 37.690705 2 25 2 z M 25 4 C 36.609824 4 46 13.390176 46 25 C 46 36.609824 36.609824 46 25 46 C 13.390176 46 4 36.609824 4 25 C 4 13.390176 13.390176 4 25 4 z M 24 13 L 24 24 L 13 24 L 13 26 L 24 26 L 24 37 L 26 37 L 26 26 L 37 26 L 37 24 L 26 24 L 26 13 L 24 13 z"></path>
                </svg>
              </a>
              <p className="text-end text-[10px] md:text-[12.5px] mt-1 text-red-600">{lang === "en" ? '*Press "+" if you want to add files and descriptions' : '*Tekan "+" jika ingin menambah file dan keterangan'}</p>
            </div> */}

            <div className="flex justify-end -mt-0 md:-mt-4 lg:-mt-7">
                <ReCAPTCHA sitekey="6Lfe4c0pAAAAAPjeO0Q9EdDShJegpbQc27x6f5ym" onChange={handleCaptchaChange}/>
            </div>
            <div className="relative mt-3 ">
              <div className="absolute right-0">
                <Button type="submit" label="Submit" classname="right-0"/>
              </div>
              {/* Konten Anda di sini */}
            </div>
          </form>
        </div>
        
      </div>
    </Container>
  );
}

export default index;
