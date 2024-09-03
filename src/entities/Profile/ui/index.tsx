import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { ProfileHeader } from '../components';
import { useModel } from '../hooks';

import classNames from './index.module.scss';

import {
  buildClassNames,
  Input,
  Loader,
  Text,
  TextAlign,
  TextVariants,
} from '$shared';

interface Props {
  className?: string;
}

export const ProfileCard = memo((props: Props) => {
  const { className } = props;

  const { t } = useTranslation('profile');

  const {
    data,
    isLoading,
    isProfileInitialized,
    error,
    isReadOnly,
    onChangeFirstName,
    onChangeLastName,
    onChangeCity,
    onChangeAge,
    onChangeUserName,
  } = useModel();

  const { containerClassNames, loaderContainer, errorContainer } = useStyles({
    className,
    isLoading: isLoading || !isProfileInitialized,
  });

  if (isLoading || !isProfileInitialized) {
    return (
      <div className={loaderContainer}>
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <div className={errorContainer}>
        <Text
          variant={TextVariants.ERROR}
          title={t('profileLoadingError')}
          text={t('profileReload')}
          align={TextAlign.CENTER}
        />
      </div>
    );
  }

  return (
    <>
      <ProfileHeader />
      <div className={containerClassNames}>
        <div>
          <Input
            readOnly={isReadOnly}
            value={data?.firstName || ''}
            placeholder={t('firstName')}
            className={classNames.input}
            onChange={onChangeFirstName}
          />
          <Input
            readOnly={isReadOnly}
            value={data?.lastName}
            placeholder={t('lastName')}
            className={classNames.input}
            onChange={onChangeLastName}
          />
          <Input
            value={String(data?.age)}
            placeholder={t('age')}
            className={classNames.input}
            onChange={onChangeAge}
            readOnly={isReadOnly}
          />
          <Input
            value={data?.city}
            placeholder={t('city')}
            className={classNames.input}
            onChange={onChangeCity}
            readOnly={isReadOnly}
          />
          <Input
            value={data?.userName}
            placeholder={t('userName')}
            className={classNames.input}
            onChange={onChangeUserName}
            readOnly={isReadOnly}
          />
        </div>
      </div>
    </>
  );
});

type UseStylesParams = Props & {
  isLoading?: boolean;
};

const useStyles = (params: UseStylesParams) => {
  const { className = '', isLoading } = params;

  const loaderContainer = buildClassNames({
    classNames: classNames.profileCard,
    mods: {
      [classNames.loading]: isLoading,
    },
    additional: [className],
  });

  const errorContainer = buildClassNames({
    classNames: classNames.profileCard,
    additional: [className, classNames.error],
  });

  const containerClassNames = buildClassNames({
    classNames: classNames.profileCard,
    additional: [className],
  });

  return { containerClassNames, loaderContainer, errorContainer };
};
