import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { fetchArticleById } from '$entities';
import { useAppDispatch } from '$shared';

export const useModel = () => {
  const { id } = useParams<{ id: string }>();

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (PROJECT === 'storybook') {
      return;
    }

    void dispatch(fetchArticleById(id));
  }, [dispatch, id]);
};
