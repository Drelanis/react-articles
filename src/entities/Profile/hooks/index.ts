import { useSelector } from 'react-redux';

import { getProfileData, getProfileError, getProfileIsLoading } from '../model';

export const useModel = () => {
  const data = useSelector(getProfileData);
  const isLoading = useSelector(getProfileIsLoading);
  const error = useSelector(getProfileError);

  return { data, isLoading, error };
};
