import { useMemo } from 'react';
import { useSelector } from 'react-redux';

import { ArticleBlockHints } from '../constants';
import classNames from '../ui/index.module.scss';

import { ArticleBlockVariant } from './constants';
import {
  getArticleDetailsData,
  getArticleDetailsError,
  getArticleDetailsIsLoading,
} from './selectors';

export const useModel = () => {
  const isLoading = useSelector(getArticleDetailsIsLoading);
  const error = useSelector(getArticleDetailsError);
  const article = useSelector(getArticleDetailsData);

  const ArticleContent = useMemo(() => {
    if (error || isLoading) {
      return;
    }

    const content = article?.blocks.map((block) => {
      let BlockComponent;

      switch (block.type) {
        case ArticleBlockVariant.CODE:
          BlockComponent = ArticleBlockHints[ArticleBlockVariant.CODE];

          return (
            <BlockComponent
              key={block.id}
              block={block}
              className={classNames.block}
            />
          );

        case ArticleBlockVariant.IMAGE:
          BlockComponent = ArticleBlockHints[ArticleBlockVariant.IMAGE];

          return (
            <BlockComponent
              key={block.id}
              block={block}
              className={classNames.block}
            />
          );

        case ArticleBlockVariant.TEXT:
          BlockComponent = ArticleBlockHints[ArticleBlockVariant.TEXT];

          return (
            <BlockComponent
              key={block.id}
              block={block}
              className={classNames.block}
            />
          );

        default:
          return null;
      }
    });

    return content;
  }, [article?.blocks, error, isLoading]);

  return { isLoading, error, article, ArticleContent };
};

export {
  ArticleDetailsSchema,
  ArticleCodeBlockType,
  ArticleImageBlockType,
  ArticleTextBlockType,
  Article,
} from './types';
export { ArticleBlockVariant, ArticleVariant } from './constants';
export { articleDetailsReducer } from './slices';
export { fetchArticleById } from './services';
export * from './selectors';
