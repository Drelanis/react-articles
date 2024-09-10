import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { TranslationChunks } from '$shared';
import { Page } from '$widgets';

const AboutPage: FC = memo(() => {
  const { t } = useTranslation(TranslationChunks.ABOUT);

  return <Page>{t('aboutUs')}</Page>;
});

export default AboutPage;
