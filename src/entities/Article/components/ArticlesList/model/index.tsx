import { useMemo } from 'react';

import { ArticleListItem } from '../../ArticleListItem';
import { ArticlesListSkeleton } from '../../ArticlesListSkeleton';
import classNames from '../ui/index.module.scss';

import { Article } from '$entities/Article/model';
import {
  ARTICLES_LIST_ITEMS_LIMIT,
  ARTICLES_TILE_ITEMS_LIMIT,
  ListView,
} from '$shared';

type Params = {
  articles: Article[];
  view: ListView;
};

export const useModel = (params: Params) => {
  const { view, articles } = params;

  const articlesSkeleton = useMemo(() => {
    return new Array(
      view === ListView.TILE
        ? ARTICLES_TILE_ITEMS_LIMIT
        : ARTICLES_LIST_ITEMS_LIMIT,
    )
      .fill(0)
      .map((_, index) => <ArticlesListSkeleton key={index} view={view} />);
  }, [view]);

  const isArticles = Boolean(articles.length);

  const Articles = useMemo(() => {
    return articles.map((article: Article) => (
      <ArticleListItem
        article={article}
        view={view}
        key={article.id}
        className={classNames.card}
      />
    ));
  }, [articles, view]);

  return { articlesSkeleton, Articles, isArticles };
};
