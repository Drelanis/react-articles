import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { TranslationChunks } from '$shared';

const AboutPage: FC = () => {
  const { t } = useTranslation(TranslationChunks.ABOUT);

  return <div>{t('aboutUs')}</div>;
};

export default AboutPage;
