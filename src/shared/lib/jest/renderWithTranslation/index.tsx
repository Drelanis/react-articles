import { render } from '@testing-library/react';
import i18n from 'i18next';
import { ReactNode } from 'react';
import { I18nextProvider, initReactI18next } from 'react-i18next';

import { ThemeProvider } from '$shared/providers';

export const renderWithTranslation = async (component: ReactNode) => {
  const i18nForTest = i18n.createInstance();

  await i18nForTest.use(initReactI18next).init({
    lng: 'en',
    fallbackLng: 'en',
    debug: false,
    interpolation: {
      escapeValue: false,
    },
    resources: { en: { translations: {} } },
  });

  return render(
    <I18nextProvider i18n={i18nForTest}>
      <ThemeProvider>{component}</ThemeProvider>
    </I18nextProvider>,
  );
};
