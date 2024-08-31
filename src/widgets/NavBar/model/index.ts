import { useSelector } from 'react-redux';

import { getUserAuthData } from '$entities';

export const useModel = () => {
  const userAuthData = useSelector(getUserAuthData);

  return { userAuthData };
};
