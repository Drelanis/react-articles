import { useTranslation } from 'react-i18next';
import { TranslationChunks } from 'shared';

const AboutPage = () => {
  const { t } = useTranslation(TranslationChunks.ABOUT);

  return <div>{t('About us')}</div>;
};

export default AboutPage;
