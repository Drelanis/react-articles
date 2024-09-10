import ListIcon from '$shared/assets/icons/list-24-24.svg';
import TiledIcon from '$shared/assets/icons/tiled-24-24.svg';
import { ListView } from '$shared/constants';

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
