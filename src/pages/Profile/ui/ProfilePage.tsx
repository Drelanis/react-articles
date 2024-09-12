import { FC, memo } from 'react';
import { useParams } from 'react-router-dom';

import { fetchProfileData, ProfileCard, profileReducer } from '$entities';
import {
  DynamicModuleLoader,
  ReducersList,
  useAppDispatch,
  useInitialEffect,
} from '$shared';
import { Page } from '$widgets';

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
    <Page>
      <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
        <ProfileCard />
      </DynamicModuleLoader>
    </Page>
  );
});

export default ProfilePage;
