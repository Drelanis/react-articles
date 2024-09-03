import { useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';

import {
  fetchProfileData,
  getProfileError,
  getProfileForm,
  getProfileIsLoading,
  getProfileReadonly,
  profileActions,
} from '../model';

import { useAppDispatch } from '$shared';

export const useModel = () => {
  const dispatch = useAppDispatch();

  const data = useSelector(getProfileForm);
  const isLoading = useSelector(getProfileIsLoading);
  const error = useSelector(getProfileError);

  const isProfileInitialized = !!data;

  useEffect(() => {
    if (!isProfileInitialized && !isLoading) {
      void dispatch(fetchProfileData());
    }
  }, [dispatch, isLoading, isProfileInitialized]);

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

  // const onChangeCurrency = useCallback(
  //   (currency: Currency) => {
  //     dispatch(profileActions.updateProfile({ currency }));
  //   },
  //   [dispatch],
  // );

  // const onChangeCountry = useCallback(
  //   (country: Country) => {
  //     dispatch(profileActions.updateProfile({ country }));
  //   },
  //   [dispatch],
  // );

  return {
    data,
    isLoading,
    error,
    isProfileInitialized,
    isReadOnly,
    onChangeFirstName,
    onChangeLastName,
    onChangeCity,
    onChangeAge,
    onChangeUserName,
    onChangeAvatar,
  };
};
