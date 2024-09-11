import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import {
  ArticleType,
  ListOrderField,
  ListSortField,
  SelectOption,
  TabItem,
} from '$shared';

export const useModel = () => {
  const { t } = useTranslation();

  const typeTabs = useMemo<TabItem[]>(
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

  const orderOptions = useMemo<SelectOption[]>(
    () => [
      {
        value: ListOrderField.ASK,
        content: t('descending'),
      },
      {
        value: ListOrderField.DESK,
        content: t('ascending'),
      },
    ],
    [t],
  );

  const sortFieldOptions = useMemo<SelectOption[]>(
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
