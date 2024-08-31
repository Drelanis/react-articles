import { DeepPartial } from '@reduxjs/toolkit';
import { render } from '@testing-library/react';
import i18n from 'i18next';
import { ReactNode } from 'react';
import { I18nextProvider, initReactI18next } from 'react-i18next';
import { MemoryRouter } from 'react-router-dom';

// TODO Providers FIX this problem in FSD!!!
import { StoreProvider, ThemeProvider } from '$shared/providers';
import { StateSchema } from '$shared/store';

type ComponentRenderOptions = {
  route: string;
};

type Params = {
  component: ReactNode;
  initialState?: DeepPartial<StateSchema>;
  options?: ComponentRenderOptions;
};

export const componentRender = async (params: Params) => {
  const { options = { route: '/' }, component, initialState } = params;

  const { route } = options;

  const i18nForTests = i18n.createInstance();

  await i18nForTests.use(initReactI18next).init({
    lng: 'en',
    fallbackLng: 'en',
    debug: false,
    interpolation: {
      escapeValue: false,
    },
    resources: { en: { translations: {} } },
  });

  return render(
    <StoreProvider initialState={initialState}>
      <I18nextProvider i18n={i18nForTests}>
        <MemoryRouter initialEntries={[route]}>
          <ThemeProvider>{component}</ThemeProvider>
        </MemoryRouter>
      </I18nextProvider>
    </StoreProvider>,
  );
};
