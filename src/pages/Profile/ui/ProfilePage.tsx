import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { profileReducer } from '$entities';
import { DynamicModuleLoader, ReducersList, TranslationChunks } from '$shared';

const reducers: ReducersList = {
  profile: profileReducer,
};

const ProfilePage: FC = memo(() => {
  const { t } = useTranslation(TranslationChunks.PROFILE);

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div>{t('profile')}</div>
    </DynamicModuleLoader>
  );
});

export default ProfilePage;
