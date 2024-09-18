import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { TranslationChunks } from '$shared';
import { Page } from '$widgets';

const MainPage: FC = memo(() => {
  const { t } = useTranslation(TranslationChunks.MAIN);

  return <Page dataTestId="test-main-page">{t('mainPage')}</Page>;
});

export default MainPage;
