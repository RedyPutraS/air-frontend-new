import { Input, Textarea } from "@chakra-ui/react";
import { PostFormPengaduan } from "api";
import { Button, Container, Content, Title } from "components";
import Link from "next/link";
import React, {useState, ChangeEvent} from "react";
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
  file: SelectedFile[];
}

function index(props: Props) {
  const { lang, data } = props;
  const hero = data?.hero;
  
  const sign = lang === "en" ? "_eng" : "_ind";

  const [value, setValue] = useState<ComponentInput>({
    full_name: '',
    email: '',
    phone: '',
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

  const isFileAdded = (formData: FormData) => {
    return formData.getAll('file[]').length > 0;
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
                <article className="prose" style={{ textAlign: "justify", maxWidth: '100%'}}>
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

        
        <div className="col-span-1 lg:col-span-6 grid grid-cols-1">
            <img src="/images/window/pluit.jpg" alt="pengaduan" />
        </div>
        {/* <div className="col-span-1 lg:col-span-2 grid grid-cols-1 gap-3"/> */}
        <div className="col-span-1 lg:col-span-6 grid grid-cols-1 gap-3">
          <form onSubmit={handleSubmit}>
            <div>
              <Title label={hero["title" + sign]} style={{ marginBottom: 10 }}/>
              <label htmlFor="fullname" className="text-sm font-semibold">
                Full Name
              </label>
              <Input
                id="fullname"
                name="full_name"
                placeholder={lang === "en" ? "Enter Full Name" : "Masukkan Full Name"}
                mt={1}
                size="sm"
                value={value.full_name}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="email" className="text-sm font-semibold">
                Email
              </label>
              <Input id="email" name="email" placeholder={lang === "en" ? "Enter Email" : "Masukkan Email"} mt={1} size="sm" value={value.email} onChange={handleChange}/>
            </div>

            <div>
              <label htmlFor="phone" className="text-sm font-semibold">
                No HP
              </label>
              <Input id="phone" name="phone" placeholder={lang === "en" ? "Enter Phone Number" : "Masukkan No HP"} mt={1} size="sm" value={value.phone} onChange={handleChange}/>
            </div>

            <div>
              <label htmlFor="phone" className="text-sm font-semibold">
                File
              </label>
              <label htmlFor="file-input-medium" className="sr-only">Choose file</label>
              <input onChange={handleChange} type="file" name="file" id="file" className="block w-full border border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none
                file:bg-gray-50 file:border-0
                file:bg-gray-100 file:me-4
                file:py-3 file:px-4
                " multiple/>
            </div>


            <div>
              <label htmlFor="description" className="text-sm font-semibold">
                Deskripsi
              </label>
              <Textarea
                id="description"
                placeholder={lang === "en" ? "Enter Description" : "Masukkan Deskripsi"}
                mt={1}
                name="description"
                size="sm"
                value={value.description}
                onChange={handleChange}
              />
            </div>

            <div />
            <div className="lg:col-span-6 grid grid-cols-1 gap-3 mt-2">
              <Button type="submit" label="Submit"/>
            </div>
          </form>
        </div>
        
      </div>
    </Container>
  );
}

export default index;
