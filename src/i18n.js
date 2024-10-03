import i18n from "i18next";
import {initReactI18next} from "react-i18next";

import en from './locales/eng/translationEng.json'
import uzb from './locales/uzb/translationUzb.json'

const resources = {
    en: {
        translation: en
    },
    uzb: {
        translation: uzb
    }
};


i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: "en",
        fallbackLng: "uzb",
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;