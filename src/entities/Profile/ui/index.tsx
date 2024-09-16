import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { ProfileType } from '../model';

import classNames from './index.module.scss';

import { Country, CountrySelect } from '$entities/CountrySelector';
import { Currency, CurrencySelect } from '$entities/CurrencySelector';
import {
  Avatar,
  buildClassNames,
  HStack,
  Input,
  Loader,
  Text,
  TextAlign,
  TextVariants,
  VStack,
} from '$shared';

type Props = {
  className?: string;
  data?: ProfileType;
  error?: string;
  isLoading?: boolean;
  isReadOnly?: boolean;
  onChangeAge?: (value?: string) => void;
  onChangeAvatar?: (value?: string) => void;
  onChangeCity?: (value?: string) => void;
  onChangeCountry?: (country: Country) => void;
  onChangeCurrency?: (currency: Currency) => void;
  onChangeFirstName?: (value?: string) => void;
  onChangeLastName?: (value?: string) => void;
  onChangeUserName?: (value?: string) => void;
};

export const Profile: FC<Props> = memo((props) => {
  const { t } = useTranslation('profile');

  const {
    data,
    isLoading,
    error,
    isReadOnly,
    className,
    onChangeFirstName,
    onChangeLastName,
    onChangeCity,
    onChangeAge,
    onChangeUserName,
    onChangeAvatar,
    onChangeCurrency,
    onChangeCountry,
  } = props;

  const { containerClassNames, loaderContainer, errorContainer } = useStyles({
    className,
    isLoading,
    isReadOnly,
  });

  if (isLoading) {
    return (
      <HStack max align="center" justify="center" className={loaderContainer}>
        <Loader />
      </HStack>
    );
  }

  if (error) {
    return (
      <HStack max align="center" justify="center" className={errorContainer}>
        <Text
          variant={TextVariants.ERROR}
          title={t('profileLoadingError')}
          text={t('profileReload')}
          align={TextAlign.CENTER}
        />
      </HStack>
    );
  }

  return (
    <VStack max className={containerClassNames}>
      {data?.avatar && (
        <HStack max justify="center">
          <Avatar src={data?.avatar} />
        </HStack>
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
    </VStack>
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

  const containerClassNames = buildClassNames({
    classNames: classNames.profileCard,
    additional: [className],
    mods: {
      [classNames.editing]: !isReadOnly,
    },
  });

  const errorContainer = buildClassNames({
    classNames: classNames.profileCard,
    additional: [className, classNames.error],
  });

  return { containerClassNames, loaderContainer, errorContainer };
};
