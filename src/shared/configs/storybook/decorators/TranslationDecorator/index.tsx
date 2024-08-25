import { Story } from '@storybook/react';
import { Suspense } from 'react';
import { I18nextProvider } from 'react-i18next';

import i18n from '$shared/configs/i18n';

export const TranslationDecorator = (story: () => Story) => {
  return (
    <Suspense fallback="">
      <I18nextProvider i18n={i18n}>{story()}</I18nextProvider>
    </Suspense>
  );
};
