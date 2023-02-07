import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import english from './lang/en.json';
import french from './lang/fr.json';

 

i18n.use(initReactI18next).init({ 
    fallbackLng: "en",
    lng: "en",
    interpolation: {
      escapeValue: true, // not needed for react as it escapes by default
    },
    resources: {
      en: english,
      fr: french,
    },
    react: {
      useSuspense: true,
    },
  });
  
  export default i18n;