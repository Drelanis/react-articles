import { useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import {
  getProfileData,
  getProfileError,
  getProfileForm,
  getProfileIsLoading,
  getProfileReadonly,
  getProfileValidateErrors,
  profileActions,
} from '../model';

import { Country } from '$entities/CountrySelector';
import { Currency } from '$entities/CurrencySelector';
import { getUserAuthData } from '$entities/User';
import { Text, TextAlign, TextVariants, useAppDispatch } from '$shared';

export const useModel = () => {
  const dispatch = useAppDispatch();

  const { t } = useTranslation();

  const data = useSelector(getProfileForm);
  const isLoading = useSelector(getProfileIsLoading);
  const error = useSelector(getProfileError);
  const validationErrors = useSelector(getProfileValidateErrors);
  const authData = useSelector(getUserAuthData);
  const profileData = useSelector(getProfileData);

  const isReadOnly = useSelector(getProfileReadonly);

  const onChangeFirstName = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ firstName: value || '' }));
    },
    [dispatch],
  );

  const onChangeLastName = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ lastName: value || '' }));
    },
    [dispatch],
  );

  const onChangeCity = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ city: value || '' }));
    },
    [dispatch],
  );

  const onChangeAge = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ age: Number(value) || 0 }));
    },
    [dispatch],
  );

  const onChangeUserName = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ userName: value || '' }));
    },
    [dispatch],
  );

  const onChangeAvatar = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ avatar: value || '' }));
    },
    [dispatch],
  );

  const onChangeCurrency = useCallback(
    (currency: Currency) => {
      dispatch(profileActions.updateProfile({ currency }));
    },
    [dispatch],
  );

  const onChangeCountry = useCallback(
    (country: Country) => {
      dispatch(profileActions.updateProfile({ country }));
    },
    [dispatch],
  );

  const ValidationErrorComponent = useMemo(() => {
    if (!validationErrors) {
      return null;
    }

    const errors = validationErrors.map((validateError) => {
      return (
        <Text
          key={validateError}
          variant={TextVariants.ERROR}
          text={t(validateError)}
          align={TextAlign.CENTER}
        />
      );
    });

    return errors;
  }, [t, validationErrors]);

  const canEdit = authData?.id === profileData?.id;

  return {
    data,
    isLoading,
    error,
    isReadOnly,
    ValidationErrorComponent,
    canEdit,
    onChangeFirstName,
    onChangeLastName,
    onChangeCity,
    onChangeAge,
    onChangeUserName,
    onChangeAvatar,
    onChangeCurrency,
    onChangeCountry,
  };
};
