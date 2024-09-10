import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { useModel } from '../model';

import classNames from './index.module.scss';

import { ArticleView } from '$entities/Article/constants';
import { Article } from '$entities/Article/model';
import {
  buildClassNames,
  ErrorHints,
  Text,
  TextAlign,
  TextVariants,
} from '$shared';

type Props = {
  articles: Article[];
  className?: string;
  errorMessage?: ErrorHints;
  isLoading?: boolean;
  view?: ArticleView;
};

export const ArticlesList: FC<Props> = memo((props) => {
  const {
    className,
    articles,
    view = ArticleView.TILE,
    isLoading,
    errorMessage,
  } = props;

  const { t } = useTranslation();

  const { containerClassNames } = useStyles({ view, className });

  const { articlesSkeleton, Articles, isArticles } = useModel({
    view,
    articles,
  });

  return (
    <div className={containerClassNames}>
      {isArticles && Articles}
      {isLoading && articlesSkeleton}
      {errorMessage && (
        <Text
          align={TextAlign.CENTER}
          variant={TextVariants.ERROR}
          title={t(errorMessage)}
        />
      )}
    </div>
  );
});

type UseStylesParams = Pick<Props, 'className' | 'view'>;

const useStyles = (params: UseStylesParams) => {
  const { className = '', view = ArticleView.TILE } = params;

  const containerClassNames = buildClassNames({
    classNames: '',
    additional: [className, classNames[view]],
  });

  return { containerClassNames };
};
