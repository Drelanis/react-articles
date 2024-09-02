import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

// TODO update aliases
import aboutEn from '../../../../public/locales/en/about.json';
import mainEn from '../../../../public/locales/en/main.json';
import profileEn from '../../../../public/locales/en/profile.json';
import translationEn from '../../../../public/locales/en/translation.json';
// TODO update aliases
import aboutUa from '../../../../public/locales/ua/about.json';
import mainUa from '../../../../public/locales/ua/main.json';
import profileUa from '../../../../public/locales/ua/profile.json';
import translationUa from '../../../../public/locales/ua/translation.json';

export type TranslationPagesKeys =
  | keyof typeof aboutEn
  | keyof typeof mainEn
  | keyof typeof profileEn;

void i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: typeof IS_DEV !== 'undefined' ? IS_DEV : false,
    fallbackLng: 'en',
    defaultNS: 'translation',

    resources: {
      en: {
        translation: translationEn,
        about: aboutEn,
        main: mainEn,
        profile: profileEn,
      },
      ua: {
        translation: translationUa,
        about: aboutUa,
        main: mainUa,
        profile: profileUa,
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
