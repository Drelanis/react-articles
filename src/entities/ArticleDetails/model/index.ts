import { useSelector } from 'react-redux';

import {
  getArticleDetailsData,
  getArticleDetailsError,
  getArticleDetailsIsLoading,
} from './selectors';

export const useModel = () => {
  const isLoading = useSelector(getArticleDetailsIsLoading);
  const error = useSelector(getArticleDetailsError);
  const article = useSelector(getArticleDetailsData);

  return { isLoading, error, article };
};

export {
  ArticleDetailsSchema,
  ArticleCodeBlock,
  ArticleImageBlock,
  ArticleTextBlock,
} from './types';
export { articleDetailsReducer } from './slices';
export { fetchArticleById } from './services';
export * from './selectors';
