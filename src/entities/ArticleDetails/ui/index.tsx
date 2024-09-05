import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { getArticleDetailsError, getArticleDetailsIsLoading } from '../model';

import { Text, TextAlign, TextVariants } from '$shared';

export const ArticleDetails = memo(() => {
  const { t } = useTranslation();

  const isLoading = useSelector(getArticleDetailsIsLoading);
  const error = useSelector(getArticleDetailsError);

  if (isLoading) {
    return <div>123...</div>;
  }

  if (error) {
    return (
      <Text
        variant={TextVariants.ERROR}
        align={TextAlign.CENTER}
        text={t(error)}
      />
    );
  }

  return <p>123</p>;
});
