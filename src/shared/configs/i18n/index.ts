import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

// TODO update aliases
import aboutEn from '../../../../public/locales/en/about.json';
import mainEn from '../../../../public/locales/en/main.json';
// TODO update aliases
import translationEn from '../../../../public/locales/en/translation.json';
import aboutUa from '../../../../public/locales/ua/about.json';
import mainUa from '../../../../public/locales/ua/main.json';
// TODO update aliases
import translationUa from '../../../../public/locales/ua/translation.json';

void i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: IS_DEV,
    fallbackLng: 'en',
    defaultNS: 'translation',

    resources: {
      en: {
        translation: translationEn,
        about: aboutEn,
        main: mainEn,
      },
      ua: {
        translation: translationUa,
        about: aboutUa,
        main: mainUa,
      },
    },

    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },

    interpolation: {
      escapeValue: false,
    },

    load: 'languageOnly',
  });

export default i18next;
