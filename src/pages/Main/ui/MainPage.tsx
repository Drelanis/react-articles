import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { Page, TranslationChunks } from '$shared';

const MainPage: FC = memo(() => {
  const { t } = useTranslation(TranslationChunks.MAIN);

  return <Page>{t('mainPage')}</Page>;
});

export default MainPage;
