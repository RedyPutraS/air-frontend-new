import axios from "axios";

const baseUrl = "https://backend.ancorair.com/api/";
// const baseUrl = "http://131.153.205.182:8082/api/";

export const getApi = (url: string) => {
  return axios.get(`${baseUrl}${url}`);
};

export const PostFormPengaduan = async (url: string, data: FormData) => {
  return await axios.post('https://wbs.ancorair.com/api/formpengaduan', data, { headers: { 'Content-Type': 'multipart/form-data' } });
};

export const PostLacakPengaduan = async (data: FormData) => {
  return await axios.post('https://wbs.ancorair.com/api/lacakpengaduan', data, { headers: { 'Content-Type': 'multipart/form-data' } });
};

export const UnggahBuktiPengaduan = async (data: FormData, id: number) => {
  return await axios.post(`https://wbs.ancorair.com/api/unggahbuktipengaduan/${id}`, data, { headers: { 'Content-Type': 'multipart/form-data' } });
};

export const TraceReport = async (data: FormData) => {
  return await axios.post(`https://wbs.ancorair.com/api/detailpengaduan`, data, { headers: { 'Content-Type': 'multipart/form-data' } });
};

export const TanyaInvestigator = async (data: FormData, id: number) => {
  return await axios.post(`https://wbs.ancorair.com/api/tanyainvestigator/sent/${id}`, data, { headers: { 'Content-Type': 'multipart/form-data' } });
};

export const GetTanyaInvestigator = async (id: number) => {
  return await axios.get(`https://wbs.ancorair.com/api/tanyainvestigator/${id}`);
};

export const GetDivisi = async () => {
  return await axios.get(`https://wbs.ancorair.com/api/getDevisi`);
};

export const GetJabatan = async () => {
  return await axios.get(`https://wbs.ancorair.com/api/getJabatan`);
};

export const getInstansi = async () => {
  return await axios.get(`https://wbs.ancorair.com/api/getInstansi`);
};