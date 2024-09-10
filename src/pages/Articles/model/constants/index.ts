import { ArticleView } from '$entities';
import { ARTICLES_LIST_ITEMS_LIMIT, ARTICLES_TILE_ITEMS_LIMIT } from '$shared';

export const ArticlesPageLimits = {
  [ArticleView.LIST]: ARTICLES_LIST_ITEMS_LIMIT,
  [ArticleView.TILE]: ARTICLES_TILE_ITEMS_LIMIT,
};

export enum ArticleSortField {
  VIEWS = 'views',
  TITLE = 'title',
  CREATED = 'createdAt',
}
