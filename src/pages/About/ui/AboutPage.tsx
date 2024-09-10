import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { Page, TranslationChunks } from '$shared';

const AboutPage: FC = memo(() => {
  const { t } = useTranslation(TranslationChunks.ABOUT);

  return <Page>{t('aboutUs')}</Page>;
});

export default AboutPage;
