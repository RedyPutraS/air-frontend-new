import { Textarea } from "@chakra-ui/react";
import { Container, Tabs, Title } from "components";
import React, { ChangeEvent, useEffect, useState } from "react";
import moment from 'moment';
// import 'moment/locale/id';
import Swal from "sweetalert2";
import { GetTanyaInvestigator, TanyaInvestigator, TraceReport } from "api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

interface Props {
  data?: any;
  lang?: any;
}

interface ComponentInput {
  question: string;
}

interface ComponentDiskusi {
  diskusi: any[];
}

interface ResponseData {
  created_at: string;
  created_by: string;
  d_id: number;
  divisi: {
      created_at: string;
      d_id: number;
      d_nama_ind: string;
      d_nama_eng: string;
      is_active: number;
      updated_at: string;
  };
  f_email: string;
  f_id: number;
  f_instansi_pelapor_1: string;
  f_instansi_pelapor_2: string;
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
  f_yang_di_laporkan: string;
  formulirpengaduan_bukti: {
      fb_id: number;
      f_id: number;
      fb_file_bukti: string;
      fb_keterangan: string | null;
      created_by: string;
      is_active: number;
      created_at: string;
      updated_at: string;
      fb_status: string;
      attachment: string;
      formulirpengaduan: {
          f_id: number;
          f_noreg: string;
          f_token: string;
          f_tanggal_masuk: string;
          f_nama: string;
          f_no_telepon: string;
          f_email: string;
          f_waktu_kejadian: string;
          f_tempat_kejadian: string;
          f_kronologi: string;
          created_by: string;
          updated_by: string;
          is_active: number;
          created_at: string;
          updated_at: string;
          f_sumber: string;
          s_id: number;
          f_instansi_pelapor_1: string;
          f_instansi_pelapor_2: string;
          f_jabatan: string;
          f_divisi: string;
          f_jenis_pengaduan: string;
          f_yang_di_laporkan: string;
      };
  }[];
  is_active: number;
  j_id: number;
  jabatan: {
      created_at: string;
      is_active: number;
      j_id: number;
      j_nama_ind: string;
      j_nama_eng: string;
      updated_at: string;
  };
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
  updated_at: string;
  updated_by: string;
}

const defaultFormData: ResponseData = {
  created_at: "",
  created_by: "",
  d_id: 0,
  divisi: {
      created_at: "",
      d_id: 0,
      d_nama_ind: "",
      d_nama_eng: "",
      is_active: 0,
      updated_at: "",
  },
  f_email: "",
  f_id: 0,
  f_instansi_pelapor_1: "",
  f_instansi_pelapor_2: "",
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
  f_yang_di_laporkan: "",
  formulirpengaduan_bukti: [],
  is_active: 0,
  j_id: 0,
  jabatan: {
      created_at: "",
      is_active: 0,
      j_id: 0,
      j_nama_ind: "",
      j_nama_eng: "",
      updated_at: "",
  },
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
  updated_at: "",
  updated_by: "",
};

function Index(props: Props) {
  const [selectedTab, setSelectedTab] = useState<string>(''); // State untuk menyimpan tab yang dipilih
  const { lang, data } = props;
  const sign = lang === "en" ? "_eng" : "_ind";
  const dataDetail = localStorage.getItem('dataDetail');
  const kt = dataDetail ? JSON.parse(dataDetail) : null;
  // const detail = dataDetail ? JSON.parse(dataDetail) : null;
  const [detail, setDetail] = useState<ResponseData>(defaultFormData);
  const [diskusi, setDiskusi] = useState<ComponentDiskusi>({diskusi: []});
  const [value, setValue] = useState<ComponentInput>({
    question: ''
  });

  useEffect(() => {
    const tab = localStorage.getItem('tab');
    handleTabChange(tab !== null ? tab : 'detail');
  }, []);

  useEffect(() => {
    getDetailPengaduan();
  }, [selectedTab === 'detail']);

  useEffect(() => {
    getDiskusi();
  }, [selectedTab]);

  const getDetailPengaduan = async () => {
    const formData = new FormData();
      
      formData.append('f_id', kt.f_id);
      formData.append('f_token_search', kt.f_token);
      const response = await TraceReport(formData);
      if (response.data.status === "Failed") {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Error : ' + response.data.Message,
        });
      } else {
        setDetail(response.data);
      }
  }

  const getDiskusi = async () => {
    const response = await GetTanyaInvestigator(detail.f_id);
    setDiskusi({diskusi:response.data});
  }

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
      // Handling other input types (text, textarea, select)
      const newObject = { ...value, [e.target.name]: e.target.value };
      setValue(newObject);
  };
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    

    try {
      // Validasi data sebelum mengirim ke API
      if (
        !value.question) {
        Swal.fire({
          icon: 'warning',
          title: 'Oops...',
          text: 'Please fill in all required fields and upload at least one file.',
        });
        return;
      }
  
      // Mengirim data ke API
      const formData = new FormData();
      formData.append("question", value.question);
  
      const response = await TanyaInvestigator(formData, detail.f_id);
  
      if (response.data.status === "Failed") {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Error : ' + response.data.Message,
        });
      } else {
        getDiskusi();
        setValue({question: ""});
      }
    } catch (error: any) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Error: ' + error.message,
      });
    }
  };
  
  const handleTabChange = (tabId: string) => {
    setSelectedTab(tabId); // Memperbarui state dengan tab yang dipilih
  };

  return (
    <Container>
      <div className="mt-7 ">
        <a href={`/${lang}/sistem-pengaduan-pelanggaran`} className="bg-warning5 p-1 px-6 text-white md:mt-10 mt-10 py-3 justify-end">{sign === "_ind" ? "Kembali ke Home" : "Back To Home"}</a>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-9 gap-5 sm:gap-20 mt-5">
          <div className="col-span-1 lg:col-span-12 grid grid-cols-1 gap-3">
              <Title label={sign === "_ind" ? "Detail Pengaduan" : "Complaint Details"} style={{ marginBottom: 10 }} />
              <Tabs
                onTabChange={handleTabChange} // Berikan fungsi untuk menangani perubahan tab
                tabs={[
                  { id: 'detail', label: `${sign === "_ind" ? "Detail" : "Details"}` },
                  { id: 'progress', label: `${sign === "_ind" ? "Progress" : "Progress"}` },
                  { id: 'tanya-tim', label: `${sign === "_ind" ? "Tanya Tim" : "Tim asked"}` },
                ]}
              />
              {/* Tampilkan konten sesuai dengan tab yang dipilih */}
              {selectedTab === 'detail' && 
              <div>
                <h2 className="text-xl font-semibold text-warning5">{sign === "_ind" ? "Rincian Pengaduan No." : "Details of Complaint No."} {detail.f_noreg}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div id="rincian">
                    <div className="flex flex-wrap md:grid md:grid-cols-3 mt-4">
                      <div className="w-[250px] font-semibold">{sign === "_ind" ? "Nama" : "Name"}</div>
                      <div className="text-end">:</div>
                      <div className=" lg:text-start md:ml-2 w-[260px] mt-2 md:mt-0">{detail.f_nama}</div>
                    </div>
                    <div className="flex flex-wrap md:grid md:grid-cols-3 mt-4">
                      <div className="w-[250px] font-semibold">{sign === "_ind" ? "Instansi Pelapor" : "Reporting Agency"}</div>
                      <div className="text-end">:</div>
                      <div className=" lg:text-start md:ml-2 w-[260px] mt-2 md:mt-0">{detail.f_instansi_pelapor_1}</div>
                    </div>
                    <div className="flex flex-wrap md:grid md:grid-cols-3 mt-4">
                      <div className="w-[250px] font-semibold">{sign === "_ind" ? "No. Telepon/HP" : "No. Telephone/cellphone"}</div>
                      <div className="text-end">:</div>
                      <div className=" lg:text-start md:ml-2 w-[260px] mt-2 md:mt-0">{detail.f_no_telepon}</div>
                    </div>
                    <div className="flex flex-wrap md:grid md:grid-cols-3 mt-4">
                      <div className="w-[250px] font-semibold">{sign === "_ind" ? "Email" : "E-mail"}</div>
                      <div className="text-end">:</div>
                      <div className=" lg:text-start md:ml-2 w-[260px] mt-2 md:mt-0">{detail.f_email}</div>
                    </div>
                    <div className="flex flex-wrap md:grid md:grid-cols-3 mt-4">
                      <div className="w-[250px] font-semibold">{sign === "_ind" ? "Nama Yang Dilaporkan" : "Reported Name"}</div>
                      <div className="text-end">:</div>
                      <div className=" lg:text-start md:ml-2 w-[260px] mt-2 md:mt-0">{detail.f_yang_di_laporkan}</div>
                    </div>
                    <div className="flex flex-wrap md:grid md:grid-cols-3 mt-4">
                      <div className="w-[250px] font-semibold">{sign === "_ind" ? "Instansi Terlapor" : "Reported Agency"}</div>
                      <div className="text-end">:</div>
                      <div className=" lg:text-start md:ml-2 w-[260px] mt-2 md:mt-0">{detail.f_instansi_pelapor_2}</div>
                    </div>
                    <div className="flex flex-wrap md:grid md:grid-cols-3 mt-4">
                      <div className="w-[250px] font-semibold">{sign === "_ind" ? "Jabatan" : "Position"}</div>
                      <div className="text-end">:</div>
                      <div className=" lg:text-start md:ml-2 w-[260px] mt-2 md:mt-0">{sign === "_ind" ? detail.jabatan.j_nama_ind : detail.jabatan.j_nama_eng}</div>
                    </div>
                    <div className="flex flex-wrap md:grid md:grid-cols-3 mt-4">
                      <div className="w-[250px] font-semibold">{sign === "_ind" ? "Divisi" : "Division"}</div>
                      <div className="text-end">:</div>
                      <div className=" lg:text-start md:ml-2 w-[260px] mt-2 md:mt-0">{sign === "_ind" ? detail.divisi.d_nama_ind : detail.divisi.d_nama_eng}</div>
                    </div>
                    <div className="flex flex-wrap md:grid md:grid-cols-3 mt-4">
                      <div className="w-[250px] font-semibold">{sign === "_ind" ? "Jenis Pengaduan" : "Type of Complaint"}</div>
                      <div className="text-end">:</div>
                      <div className=" lg:text-start md:ml-2 w-[260px] mt-2 md:mt-0">{detail.f_jenis_pengaduan}</div>
                    </div>
                    <div className="flex flex-wrap md:grid md:grid-cols-3 mt-4">
                      <div className="w-[250px] font-semibold">{sign === "_ind" ? "Waktu Kejadian" : "Time of Event"}</div>
                      <div className="text-end">:</div>
                      <div className=" lg:text-start md:ml-2 w-[260px] mt-2 md:mt-0">{detail.f_waktu_kejadian}</div>
                    </div>
                    <div className="flex flex-wrap md:grid md:grid-cols-3 mt-4">
                      <div className="w-[250px] font-semibold">{sign === "_ind" ? "Tempat Kejadian" : "Scene"}</div>
                      <div className="text-end">:</div>
                      <div className=" lg:text-start md:ml-2 w-[260px] mt-2 md:mt-0">{detail.f_tempat_kejadian}</div>
                    </div>
                    <div className="flex flex-wrap md:grid md:grid-cols-3 mt-4">
                      <div className="w-[250px] font-semibold">{sign === "_ind" ? "Kronologi" : "Chronology"}</div>
                      <div className="text-end">:</div>
                      <div className=" lg:text-start md:ml-2 w-[260px] mt-2 md:mt-0">{detail.f_kronologi}</div>
                    </div>
                    {detail.formulirpengaduan_bukti.map((bukti:any, index:any) => {
                      if (index === 0) {
                        return (
                          <div className="flex flex-wrap md:grid md:grid-cols-3 mt-4" key={index}>
                            <div className="w-[250px] font-semibold">{sign === "_ind" ? "Bukti Awal" : "Preliminary Evidence"}</div>
                            <div className="text-end">:</div>
                            <div className=" lg:text-start md:ml-2 w-[260px] mt-2 md:mt-0 flex flex-col">
                              <div className="flex flex-wrap">
                                <p>1.</p>
                                <div className="ml-2 bg-warning5 px-2 py-1 rounded-xl text-sm text-white flex flex-wrap">
                                  <FontAwesomeIcon icon={faEye} className="w-5 mr-2" />
                                  <a href={bukti.attachment} target="_blank">{sign === "_ind" ? "Lihat Bukti" : "View Proof"}</a>
                                </div>
                              </div>
                              <div className="flex flex-row  w-[400px] md:w-[600px] lg:w-[800px] mt-4">
                                <p>Keterangan: <p className="ml-2 md:text-justify text-lg">{bukti.fb_keterangan === null ? "-" : bukti.fb_keterangan}</p></p>
                              </div>
                              <p className="w-[300px] mt-2">{sign === "_ind" ? "Terakhir diunggah:" : "Last uploaded:"} {moment(bukti.created_at).locale('id').format('DD MMMM YYYY HH:mm')}</p>
                            </div>
                          </div>
                        );
                      } else {
                        return (
                          <>
                            <hr className="md:w-[900px] lg:w-[1200px]"/>
                            <div className="flex flex-wrap md:grid md:grid-cols-3 mt-4">
                              <div className="w-[250px] font-semibold">{sign === "_ind" ? "Bukti Tambahan" : "Additional Evidence"}</div>
                              <div className="text-end">:</div>
                              <div className=" lg:text-start md:ml-2 w-[260px] mt-2 md:mt-0 flex flex-col">
                              <div className="flex flex-wrap">
                                <p>1.</p>
                                <div className="ml-2 bg-warning5 px-2 py-1 rounded-xl text-sm text-white flex flex-wrap">
                                  <FontAwesomeIcon icon={faEye} className="w-5 mr-2" />
                                  <a href={bukti.attachment} target="_blank">{sign === "_ind" ? "Lihat Bukti" : "View Proof"}</a>
                                </div>
                              </div>
                              </div>
                            </div>
                            <div className="flex flex-wrap md:grid md:grid-cols-3 mt-2">
                              <div className="w-[250px] font-semibold">{sign === "_ind" ? "Keterangan Tambahan" : "Additional information"}</div>
                              <div className="text-end">:</div>
                              <div className=" lg:text-start md:ml-2 w-[260px] mt-2 md:mt-0 flex flex-col">
                                <div className="flex flex-row  w-[400px] md:w-[600px] lg:w-[800px]">
                                  <p className="md:text-justify text-lg">{bukti.fb_keterangan === null ? "-" : bukti.fb_keterangan}</p>
                                </div>
                                  <p className="w-[300px] mt-2">{sign === "_ind" ? "Terakhir diunggah:" : "Last uploaded:"} {moment(bukti.created_at).locale('id').format('DD MMMM YYYY HH:mm')}</p>
                              </div>
                            </div>
                          </>
                        );
                      }
                    })}
                  </div>
                  <div className="flex justify-center w-full md:justify-end mt-5 md:mt-0">
                    <button className={`${detail.status.s_nama === "Kurang Bukti" || detail.status.s_nama === "Tidak Terbukti" || detail.status.s_nama === "Diproses" ? "bg-yellow-500" : "bg-warning2"} w-60 h-16 font-semibold text-white text-lg`}>
                    {detail.status.s_nama == "Diterima" && (sign === "_ind" ? "Diterima" : "Accepted")}
                    {detail.status.s_nama == "Terbukti" && (sign === "_ind" ? "Terbukti" : "Proven")}
                    {detail.status.s_nama === "Diproses" && (sign === "_ind" ? "Diproses" : "Processed")}
                    {detail.status.s_nama === "Kurang Bukti" && (sign === "_ind" ? "Kurang Bukti" : "Lack of Evidence")}
                    {detail.status.s_nama === "Tidak Terbukti" && (sign === "_ind" ? "Tidak Terbukti" : "Not proven")}
                    </button>
                  </div>
                </div>
              </div>
              }
              {selectedTab === 'progress' && 
              <div>
                <h2 className="text-xl font-semibold text-warning5">{sign === "_ind" ? "Perkembangan Pengaduan" : "Complaint Progress"}</h2>
                {
                  detail.formulirpengaduan_bukti.map((value: any, index: any) => {
                    return (
                      <div className="flex flex-col mt-5" key={index}>
                        <span className="bg-warning5 rounded-lg w-[130px] text-center text-white">{moment(value.created_at).locale('id').format('DD MMMM YYYY')}</span>
                        <p className="text-sm">{sign === "_ind" ? "Laporan telah diterima" : "Report has been received"}</p>
                      </div>
                    );
                  })
                }
              </div>
              }
              {selectedTab === 'tanya-tim' && 
              <div>
                <form onSubmit={handleSubmit}>
                  <h2 className="text-xl font-semibold text-warning5">{sign === "_ind" ? "Tanya Tim Investigator" : "Asked the Investigation Team"}</h2>
                  <Textarea className="mt-5" name="question" onChange={handleChange} value={value.question}></Textarea>
                  <div className="flex justify-end"> 
                    <button className="bg-warning5 text-white px-10 py-3 mt-5" type="submit">{sign === "_ind" ? "Kirim" : "Send"}</button>
                  </div>
                </form>

                {
                  diskusi.diskusi.length > 0 ? 
                  diskusi.diskusi.map((value: any, index:number) => {
                    return (
                      <div className="w-full border-2 drop-shadow-lg rounded-xl bg-white flex flex-wrap mt-5" key={index}>
                        <div className="w-full">
                          <p className="text-right top-0 mr-4 mt-2 -mb-10">{sign === "_ind" ? moment(value.created_at).locale('id').format('DD MMMM YYYY') : moment(value.created_at).format('DD MMMM YYYY')}</p>
                        </div>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4k-EK9bwaXD1R_HGLkKam2lQJBpUZ6BB-5iWwW0nUXQ&s" alt="user" className="w-[50px] h-[50px] m-8"/>
                        <div className="flex flex-col justify-evenly">
                          <p className="text-lg font-semibold">{value.created_by}</p>
                          <div dangerouslySetInnerHTML={{ __html: value.rd_pesan }} />
                        </div>
                      </div>
                    );
                  }) : 
                  ""
                }
              </div>
              }
          </div>
      </div>
    </Container>
  );
}

export default Index;