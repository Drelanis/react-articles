import { useMemo } from 'react';

import { ArticleListItem } from '../../ArticleListItem';
import { ArticlesListSkeleton } from '../../ArticlesListSkeleton';
import classNames from '../ui/index.module.scss';

import { Article } from '$entities/Article/model';
import { ListView } from '$shared';

type Params = {
  articles: Article[];
  view: ListView;
};

export const useModel = (params: Params) => {
  const { view, articles } = params;

  const articlesSkeleton = useMemo(() => {
    const articlesNumberInTileView = 3;
    const bigArticleNumberInListView = 9;

    return new Array(
      view === ListView.TILE
        ? bigArticleNumberInListView
        : articlesNumberInTileView,
    )
      .fill(0)
      .map((_, index) => (
        <ArticlesListSkeleton
          className={classNames.card}
          key={index}
          view={view}
        />
      ));
  }, [view]);

  const isArticles = Boolean(articles.length);

  const Articles = useMemo(() => {
    return articles.map((article: Article) => (
      <ArticleListItem
        article={article}
        view={view}
        className={classNames.card}
        key={article.id}
      />
    ));
  }, [articles, view]);

  return { articlesSkeleton, Articles, isArticles };
};
