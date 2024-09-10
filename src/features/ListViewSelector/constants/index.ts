import { ListView } from '$shared';
import ListIcon from '$shared/assets/icons/list-24-24.svg';
import TiledIcon from '$shared/assets/icons/tiled-24-24.svg';

export const viewTypes = [
  {
    view: ListView.TILE,
    icon: TiledIcon,
  },
  {
    view: ListView.LIST,
    icon: ListIcon,
  },
];
