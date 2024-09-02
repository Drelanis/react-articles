import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { TranslationChunks } from '$shared';

const ProfilePage: FC = () => {
  const { t } = useTranslation(TranslationChunks.PROFILE);

  return <div>{t('profile')}</div>;
};

export default ProfilePage;
