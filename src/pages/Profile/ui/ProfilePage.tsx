import { FC, memo, useEffect } from 'react';

import { fetchProfileData, ProfileCard, profileReducer } from '$entities';
import { DynamicModuleLoader, ReducersList, useAppDispatch } from '$shared';

const reducers: ReducersList = {
  profile: profileReducer,
};

const ProfilePage: FC = memo(() => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (PROJECT === 'storybook') {
      return;
    }

    void dispatch(fetchProfileData());
  }, [dispatch]);

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <ProfileCard />
    </DynamicModuleLoader>
  );
});

export default ProfilePage;
