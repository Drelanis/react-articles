import { FC, memo, useCallback } from 'react';

import { ArticleListItem } from '../../ArticleListItem';
import { ArticlesListSkeleton } from '../../ArticlesListSkeleton';

import classNames from './index.module.scss';

import { ArticleView } from '$entities/Article/constants';
import { Article } from '$entities/Article/model';
import { buildClassNames } from '$shared';

type Props = {
  articles: Article[];
  className?: string;
  isLoading?: boolean;
  view?: ArticleView;
};

const getSkeletons = (view: ArticleView) => {
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
};

export const ArticlesList: FC<Props> = memo((props) => {
  const { className, articles, view = ArticleView.SMALL, isLoading } = props;

  const { containerClassNames } = useStyles({ view, className });

  const Articles = useCallback(
    (article: Article) => (
      <ArticleListItem
        article={article}
        view={view}
        className={classNames.card}
        key={article.id}
      />
    ),
    [view],
  );

  if (isLoading) {
    return <div className={containerClassNames}>{getSkeletons(view)}</div>;
  }

  return (
    <div className={containerClassNames}>
      {articles.length > 0 ? articles.map(Articles) : null}
    </div>
  );
});

type UseStylesParams = Pick<Props, 'className' | 'view'>;

const useStyles = (params: UseStylesParams) => {
  const { className = '', view = ArticleView.SMALL } = params;

  const containerClassNames = buildClassNames({
    classNames: '',
    additional: [className, classNames[view]],
  });

  return { containerClassNames };
};
