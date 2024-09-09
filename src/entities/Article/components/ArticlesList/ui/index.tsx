import { FC, memo } from 'react';

import { useModel } from '../model';

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

export const ArticlesList: FC<Props> = memo((props) => {
  const { className, articles, view = ArticleView.SMALL, isLoading } = props;

  const { containerClassNames } = useStyles({ view, className });

  const { articlesSkeleton, Articles, isArticles } = useModel({
    view,
    articles,
  });

  if (isLoading) {
    return <div className={containerClassNames}>{articlesSkeleton}</div>;
  }

  return <div className={containerClassNames}>{isArticles && Articles}</div>;
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
