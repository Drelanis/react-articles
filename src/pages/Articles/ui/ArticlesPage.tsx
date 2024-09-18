import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { useModel } from '../model';

import { ArticleInfiniteList } from '$features';
import { buildClassNames, Text, TextAlign } from '$shared';
import { Page } from '$widgets';

type Props = {
  className?: string;
};

const ArticlesPage = memo((props: Props) => {
  const { className } = props;
  const { t } = useTranslation('articles');

  const { containerClassNames } = useStyles({ className });

  const { onLoadNextPage } = useModel();

  return (
    <Page
      dataTestId="test-articles-page"
      className={containerClassNames}
      onScrollEnd={onLoadNextPage}
    >
      <Text align={TextAlign.CENTER} title={t('articlesPageTitle')} />
      <ArticleInfiniteList />
    </Page>
  );
});

const useStyles = (params: Props) => {
  const { className = '' } = params;

  const containerClassNames = buildClassNames({
    classNames: '',
    additional: [className],
  });

  return { containerClassNames };
};

export default ArticlesPage;
