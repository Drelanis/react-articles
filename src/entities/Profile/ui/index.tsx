import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { ProfileHeader } from '../components';
import { useModel } from '../hooks';

import classNames from './index.module.scss';

import { CountrySelect, CurrencySelect } from '$entities';
import {
  Avatar,
  buildClassNames,
  Input,
  Loader,
  Text,
  TextAlign,
  TextVariants,
} from '$shared';

type Props = {
  className?: string;
};

export const ProfileCard = memo((props: Props) => {
  const { className } = props;

  const { t } = useTranslation('profile');

  const {
    data,
    isLoading,
    error,
    isReadOnly,
    onChangeFirstName,
    onChangeLastName,
    onChangeCity,
    onChangeAge,
    onChangeUserName,
    onChangeAvatar,
    onChangeCurrency,
    onChangeCountry,
  } = useModel();

  const { containerClassNames, loaderContainer, errorContainer } = useStyles({
    isReadOnly,
    className,
    isLoading,
  });

  if (isLoading) {
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
        {data?.avatar && (
          <div className={classNames.avatarWrapper}>
            <Avatar src={data?.avatar} />
          </div>
        )}
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
        <Input
          value={data?.avatar}
          placeholder={t('avatar')}
          className={classNames.input}
          onChange={onChangeAvatar}
          readOnly={isReadOnly}
        />
        <CurrencySelect
          className={classNames.input}
          value={data?.currency}
          onChange={onChangeCurrency}
          readonly={isReadOnly}
        />
        <CountrySelect
          className={classNames.input}
          value={data?.country}
          onChange={onChangeCountry}
          readonly={isReadOnly}
        />
      </div>
    </>
  );
});

type UseStylesParams = Props & {
  isLoading?: boolean;
  isReadOnly?: boolean;
};

const useStyles = (params: UseStylesParams) => {
  const { className = '', isLoading, isReadOnly } = params;

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
    mods: {
      [classNames.editing]: !isReadOnly,
    },
  });

  return { containerClassNames, loaderContainer, errorContainer };
};
