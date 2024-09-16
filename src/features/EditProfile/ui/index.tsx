import { memo } from 'react';

import { useLogic } from '../model';

import { ProfileHeader } from './ProfileHeader';
import { ValidationErrors } from './ValidationErrors';

import { Profile } from '$entities';
import { buildClassNames, VStack } from '$shared';

type Props = {
  className?: string;
};

export const EditProfile = memo((props: Props) => {
  const { className } = props;

  const {
    data,
    isLoading,
    error,
    isReadOnly,
    canEdit,
    onChangeFirstName,
    onChangeLastName,
    onChangeCity,
    onChangeAge,
    onChangeUserName,
    onChangeAvatar,
    onChangeCurrency,
    onChangeCountry,
  } = useLogic();

  const { containerClassNames } = useStyles({
    className,
  });

  return (
    <VStack max gap="8" className={containerClassNames}>
      <ProfileHeader canEdit={canEdit} />
      <ValidationErrors />
      <Profile
        data={data}
        isLoading={isLoading}
        error={error}
        isReadOnly={isReadOnly}
        onChangeFirstName={onChangeFirstName}
        onChangeLastName={onChangeLastName}
        onChangeCity={onChangeCity}
        onChangeAge={onChangeAge}
        onChangeUserName={onChangeUserName}
        onChangeAvatar={onChangeAvatar}
        onChangeCurrency={onChangeCurrency}
        onChangeCountry={onChangeCountry}
      />
    </VStack>
  );
});

type UseStylesParams = Pick<Props, 'className'>;

const useStyles = (params: UseStylesParams) => {
  const { className = '' } = params;

  const containerClassNames = buildClassNames({
    classNames: '',
    additional: [className],
  });

  return { containerClassNames };
};
