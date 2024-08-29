import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { Counter } from '$entities';
import { TranslationChunks } from '$shared';

const MainPage: FC = () => {
  const { t } = useTranslation(TranslationChunks.MAIN);

  return (
    <div>
      {t('mainPage')}
      <Counter />
    </div>
  );
};

export default MainPage;
