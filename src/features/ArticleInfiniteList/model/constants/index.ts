import {
  ARTICLES_LIST_ITEMS_LIMIT,
  ARTICLES_TILE_ITEMS_LIMIT,
  ListView,
} from '$shared';

export const ArticlesPageLimits = {
  [ListView.LIST]: ARTICLES_LIST_ITEMS_LIMIT,
  [ListView.TILE]: ARTICLES_TILE_ITEMS_LIMIT,
};
