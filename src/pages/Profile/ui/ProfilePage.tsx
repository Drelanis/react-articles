import { FC, memo } from 'react';

import { EditProfile } from '$features';
import { Page } from '$widgets';

const ProfilePage: FC = memo(() => {
  return (
    <Page>
      <EditProfile />
    </Page>
  );
});

export default ProfilePage;
