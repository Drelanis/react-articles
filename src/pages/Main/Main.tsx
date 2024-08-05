import { Trans, useTranslation } from 'react-i18next';
import { TranslationChunks } from 'shared';

const MainPage = () => {
  const { t } = useTranslation(TranslationChunks.MAIN);

  return <div>{t('mainPage')}</div>;
};

export default MainPage;
