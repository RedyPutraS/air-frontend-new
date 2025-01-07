import { Input, Select, Textarea } from "@chakra-ui/react";
import { PostFormPengaduan, PostLacakPengaduan } from "api";
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

interface ComponentInput {
  full_name: string;
  email: string;
  phone: string;
  description: string;
  f_instansi_pelapor: string;
  file: SelectedFile[];
}

function index(props: Props) {
  const { lang, data } = props;
  const hero = data?.hero;
  const router = useRouter();
  const sign = lang === "en" ? "_eng" : "_ind";

  useEffect(() => {
    localStorage.removeItem('dataDetail');
    localStorage.removeItem('kodeToken');
  }, []);
  
  const [value, setValue] = useState<ComponentInput>({
    full_name: '',
    email: '',
    phone: '',
    f_instansi_pelapor: '',
    description: '',
    file: [],
  });
  
  
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
  const [no_laporan, setNo_Laporan] = useState("");
  
  const handleChangeLaporan = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNo_Laporan(e.target.value);
  }

  const handleSubmitLaporan = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("f_noreg_search", no_laporan);
    const response = await PostLacakPengaduan(formData);
    if (response.data.status === "Failed") {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Error : ' + response.data.Message,
      });
    } else {
      localStorage.setItem('kode', no_laporan);
      router.push(`/${lang}/lacak-pengaduan`);
      
    }
  }

  const isFileAdded = (formData: FormData) => {
    return formData.getAll('file[]').length > 0;
  };

  const [selectedInstansi, setSelectedInstansi] = useState<string>("");

  const handleChangeOther = (e: ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;

    if (value === "Other") {
      // Handle Other option
      setSelectedInstansi("");
    } else {
      setSelectedInstansi(value);
    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
  
    if (!value.full_name || !value.email || !value.description) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please fill in all input fields.',
      });
      return;
    }
    
    try {
      // Mengirim data ke API
      const formData = new FormData();
      formData.append("full_name", value.full_name);
      formData.append("email", value.email);
      formData.append("no_hp", value.phone);
      formData.append("description", value.description);
      
      value.file.forEach((file, index) => {
        formData.append(`file[${index}]`, file.file, file.file.name);
      });
      
      const response = await PostFormPengaduan('sistem-pengaduan-pelanggan',formData);
  
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
        });
  
        // Reset the form or perform other actions after successful submission
        setValue({
          full_name: '',
          email: '',
          phone: '',
          description: '',
          f_instansi_pelapor: '',
          file: [],
        });
      }
    } catch (error: any) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Error: ' + error.message,
      });
    }
  }

  return (
    <Container>
    <div className="grid grid-cols-1 lg:grid-cols-9 gap-5 sm:gap-20">
        <div className="col-span-1 lg:col-span-12">
            <Title label={hero["title" + sign]} />
            <Content
                row={{
                    body: (
                        <>
                            {/* Dokument Pengaduan Pelanggan */}
                            <article className="prose" style={{ textAlign: "justify", maxWidth: '100%' }}>
                                <div
                                    dangerouslySetInnerHTML={{
                                        __html: hero["description" + sign],
                                    }}
                                />
                            </article>
                        </>
                    ),
                }}
            />
            {/* <div className="mt-3 font-bold cursor-pointer text-primary">
                <Link href="/">Lebih Detail</Link>
            </div> */}
        </div>
        {/* <div className="col-span-1 lg:col-span-2 grid grid-cols-1 gap-3 md:text-right">
            <button className="absolute top-0 right-0 bg-blue-500 p-1 px-6 text-white rounded-md md:static mt-2 sm:static">Buat Laporan</button>
        </div> */}
        <div className="lg:col-span-2 grid grid-cols-1 gap-3 -mt-5 md:-mt-10">
            <a href={`/${lang}/buat-laporan`}>
                <Button type="button" label={sign === "_ind" ? "Buat Laporan" : "Make a report"}/>
            </a>
        </div>
        <form onSubmit={handleSubmitLaporan} className="col-span-1 lg:col-span-12 grid grid-cols-1 gap-3">
          {/* <div className="col-span-1 lg:col-span-12 grid grid-cols-1 gap-3"> */}
            <Title label={sign === "_ind" ? "Tindak Lanjut" : "Follow-up"} style={{ marginBottom: 10 }} />
            <div className="lg:col-span-6 grid grid-cols-1 gap-3 mt-2">
              <p>{sign === "_ind" ? "Apabila Bapak/Ibu ingin mengetahui status, perkembangan, tindak lanjut atas laporan yang telah dibuat, serta berkomunikasi secara anonim dengan investigator dapat menginput nomor laporan pengaduan pada menu di bawah ini" : "If you want to know the status, progress, follow-up on reports that have been made, and communicate anonymously with investigators, you can enter the complaint report number in the menu below."}:</p>
            </div>
            <div className="md:flex md:items-center md:mb-4 justify-between">
              <label htmlFor="no_laporan" className="text-sm font-semibold md:flex-shrink-0 md:w-60 md:mr-2 flex items-center">
                {sign === "_ind" ? "No. Laporan" : "No. Report"}
                <span className="md:ml-auto">:</span>
              </label>
              <Input
                id="no_laporan"
                name="no_laporan"
                placeholder={lang === "en" ? "Enter No. Laporan" : "Masukkan No. Laporan"}
                mt={1}
                size="sm"
                value={no_laporan}
                onChange={handleChangeLaporan}
                className="flex-grow mr-10"
              />
              <button type="submit" className="bg-blue-500 p-1 px-6 text-white md:mt-0 mt-2">{sign === "_ind" ? "Lacak" : "track"}</button>
            </div>
          {/* </div> */}
        </form>
    </div>
</Container>
  );
}

export default index;
