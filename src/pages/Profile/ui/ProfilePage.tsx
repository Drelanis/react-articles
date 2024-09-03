import { FC, memo } from 'react';

import { ProfileCard, profileReducer } from '$entities';
import { DynamicModuleLoader, ReducersList } from '$shared';

const reducers: ReducersList = {
  profile: profileReducer,
};

const ProfilePage: FC = memo(() => {
  return (
    <DynamicModuleLoader reducers={reducers}>
      <ProfileCard />
    </DynamicModuleLoader>
  );
});

export default ProfilePage;
