import { FC, memo, useEffect } from 'react';

import { fetchProfileData, ProfileCard, profileReducer } from '$entities';
import { DynamicModuleLoader, ReducersList, useAppDispatch } from '$shared';

const reducers: ReducersList = {
  profile: profileReducer,
};

const ProfilePage: FC = memo(() => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    void dispatch(fetchProfileData());
  }, [dispatch]);

  return (
    <DynamicModuleLoader reducers={reducers}>
      <ProfileCard />
    </DynamicModuleLoader>
  );
});

export default ProfilePage;
