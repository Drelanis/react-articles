import { render } from '@testing-library/react';
import i18n from 'i18next';
import { ReactNode } from 'react';
import { I18nextProvider, initReactI18next } from 'react-i18next';

export const renderWithTranslation = async (component: ReactNode) => {
  await i18n.use(initReactI18next).init({
    lng: 'en',
    fallbackLng: 'en',
    debug: false,

    interpolation: {
      escapeValue: false,
    },
    resources: { en: { translations: {} } },
  });

  return render(<I18nextProvider i18n={i18n}>{component}</I18nextProvider>);
};
