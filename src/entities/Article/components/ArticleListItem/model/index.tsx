import { useCallback, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  Article,
  ArticleBlockVariant,
  ArticleTextBlockType,
} from '$entities/Article/model';
import { AppRoutes } from '$shared';

type Params = {
  article: Article;
};

export const useModel = (params: Params) => {
  const { article } = params;

  const navigate = useNavigate();

  const onOpenArticle = useCallback(() => {
    navigate(AppRoutes.ARTICLES + article.id);
  }, [article.id, navigate]);

  const textBlock = useMemo(
    () =>
      article.blocks.find(
        (block) => block.type === ArticleBlockVariant.TEXT,
      ) as ArticleTextBlockType,
    [article.blocks],
  );

  return { textBlock, onOpenArticle };
};
