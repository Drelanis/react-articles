import { FC, memo } from 'react';
import { useParams } from 'react-router-dom';

import { fetchProfileData, ProfileCard, profileReducer } from '$entities';
import {
  DynamicModuleLoader,
  ReducersList,
  useAppDispatch,
  useInitialEffect,
} from '$shared';

const reducers: ReducersList = {
  profile: profileReducer,
};

const ProfilePage: FC = memo(() => {
  const dispatch = useAppDispatch();

  const { id } = useParams<{ id: string }>();

  useInitialEffect(() => {
    if (id) {
      void dispatch(fetchProfileData(id));
    }
  });

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <ProfileCard />
    </DynamicModuleLoader>
  );
});

export default ProfilePage;
