import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import {
  ArticleType,
  ListOrderField,
  ListSortField,
  SelectOption,
  TabItem,
} from '$shared';

export const useBuildArticlesFilters = () => {
  const { t } = useTranslation();

  const typeTabs = useMemo<TabItem<ArticleType>[]>(
    () => [
      {
        value: ArticleType.ALL,
        content: t('all'),
      },
      {
        value: ArticleType.IT,
        content: t('it'),
      },
      {
        value: ArticleType.ECONOMICS,
        content: t('economics'),
      },
      {
        value: ArticleType.SCIENCE,
        content: t('science'),
      },
    ],
    [t],
  );

  const orderOptions = useMemo<SelectOption<ListOrderField>[]>(
    () => [
      {
        value: ListOrderField.ASC,
        content: t('ascending'),
      },
      {
        value: ListOrderField.DESC,
        content: t('descending'),
      },
    ],
    [t],
  );

  const sortFieldOptions = useMemo<SelectOption<ListSortField>[]>(
    () => [
      {
        value: ListSortField.CREATED,
        content: t('creationDate'),
      },
      {
        value: ListSortField.TITLE,
        content: t('title'),
      },
      {
        value: ListSortField.VIEWS,
        content: t('views'),
      },
    ],
    [t],
  );

  return { sortFieldOptions, orderOptions, typeTabs };
};
