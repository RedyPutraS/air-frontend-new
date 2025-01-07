import { create } from "zustand";

interface LanguageType {
  lang: string;
  setLang: (lang: string) => void;
}

const useLanguage = create<LanguageType>()((set) => ({
  lang: "id",
  setLang: (lang) => set(() => ({ lang })),
}));

export default useLanguage;
