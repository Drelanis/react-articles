import { useCallback } from 'react';

import { fetchNextArticlesPage } from '$features';
import { useAppDispatch } from '$shared';

export const useModel = () => {
  const dispatch = useAppDispatch();

  const onLoadNextPage = useCallback(async () => {
    await dispatch(fetchNextArticlesPage());
  }, [dispatch]);

  return {
    onLoadNextPage,
  };
};
