import { FC, memo } from 'react';

import { EditProfile } from '$features';
import { Page } from '$widgets';

const ProfilePage: FC = memo(() => {
  return (
    <Page dataTestId="test-profile-page">
      <EditProfile />
    </Page>
  );
});

export default ProfilePage;
