import { useMemo } from 'react';

import { ArticleListItem } from '../../ArticleListItem';
import { ArticlesListSkeleton } from '../../ArticlesListSkeleton';
import classNames from '../ui/index.module.scss';

import { ArticleView } from '$entities/Article/constants';
import { Article } from '$entities/Article/model';

type Params = {
  articles: Article[];
  view: ArticleView;
};

export const useModel = (params: Params) => {
  const { view, articles } = params;

  const articlesSkeleton = useMemo(() => {
    const articlesNumberInSmallView = 3;
    const bigArticleNumberInBigView = 9;

    return new Array(
      view === ArticleView.SMALL
        ? bigArticleNumberInBigView
        : articlesNumberInSmallView,
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
