import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import aboutEn from '../../../../locales/en/about.json';
import articlesEn from '../../../../locales/en/articles.json';
import mainEn from '../../../../locales/en/main.json';
import profileEn from '../../../../locales/en/profile.json';
import translationEn from '../../../../locales/en/translation.json';
import aboutUa from '../../../../locales/ua/about.json';
import articlesUa from '../../../../locales/ua/articles.json';
import mainUa from '../../../../locales/ua/main.json';
import profileUa from '../../../../locales/ua/profile.json';
import translationUa from '../../../../locales/ua/translation.json';

export type TranslationPagesKeys =
  | keyof typeof aboutEn
  | keyof typeof mainEn
  | keyof typeof profileEn
  | keyof typeof articlesEn;

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
        articles: articlesEn,
      },
      ua: {
        translation: translationUa,
        about: aboutUa,
        main: mainUa,
        profile: profileUa,
        articles: articlesUa,
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
