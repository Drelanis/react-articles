import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { TranslationChunks } from '$shared';

const AboutPage: FC = memo(() => {
  const { t } = useTranslation(TranslationChunks.ABOUT);

  return <div>{t('aboutUs')}</div>;
});

export default AboutPage;
