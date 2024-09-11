import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { useModel } from '../model';

import classNames from './index.module.scss';

import { Article } from '$entities/Article/model';
import {
  buildClassNames,
  ErrorHints,
  ListView,
  Text,
  TextAlign,
  TextVariants,
} from '$shared';

type Props = {
  articles: Article[];
  className?: string;
  errorMessage?: ErrorHints;
  isLoading?: boolean;
  view?: ListView;
};

export const ArticlesList: FC<Props> = memo((props) => {
  const {
    className,
    articles,
    view = ListView.TILE,
    isLoading,
    errorMessage,
  } = props;

  const { t } = useTranslation();

  const { containerClassNames } = useStyles({ view, className });

  const { articlesSkeleton, Articles, isArticles } = useModel({
    view,
    articles,
  });

  if (!isArticles) {
    return (
      <Text
        align={TextAlign.CENTER}
        variant={TextVariants.PRIMARY}
        title={t('articlesNotFound')}
      />
    );
  }

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
  const { className = '', view = ListView.TILE } = params;

  const containerClassNames = buildClassNames({
    classNames: '',
    additional: [className, classNames[view]],
  });

  return { containerClassNames };
};
