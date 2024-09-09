import { ArticleView } from '$entities';
import ListIcon from '$shared/assets/icons/list-24-24.svg';
import TiledIcon from '$shared/assets/icons/tiled-24-24.svg';

export const viewTypes = [
  {
    view: ArticleView.TILE,
    icon: TiledIcon,
  },
  {
    view: ArticleView.LIST,
    icon: ListIcon,
  },
];
