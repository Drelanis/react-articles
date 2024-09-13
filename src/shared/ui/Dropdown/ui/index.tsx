import { Menu } from '@headlessui/react';
import { Fragment, ReactNode } from 'react';

import classNames from './index.module.scss';

import { DropdownDirection } from '$shared/types';
import { Link } from '$shared/ui/Link';
import { buildClassNames } from '$shared/utils';

export interface DropdownItem {
  content?: ReactNode;
  disabled?: boolean;
  href?: string;
  onClick?: () => void;
}

type Props = {
  items: DropdownItem[];
  trigger: ReactNode;
  className?: string;
  direction?: DropdownDirection;
};

const mapDirectionClass: Record<DropdownDirection, string> = {
  'bottom left': classNames.optionsBottomLeft,
  'bottom right': classNames.optionsBottomRight,
  'top right': classNames.optionsTopRight,
  'top left': classNames.optionsTopLeft,
};

export const Dropdown = (props: Props) => {
  const { className, trigger, items, direction } = props;

  const { containerClassNames, menuClassNames, buttonClassNames } = useStyles({
    className,
    direction,
  });

  return (
    <Menu as="div" className={containerClassNames}>
      <Menu.Button className={classNames.btn}>{trigger}</Menu.Button>
      <Menu.Items className={menuClassNames}>
        {items.map((item, index) => {
          const content = ({ active }: { active: boolean }) => (
            <button
              type="button"
              disabled={item.disabled}
              onClick={item.onClick}
              className={buttonClassNames(active)}
            >
              {item.content}
            </button>
          );

          if (item.href) {
            return (
              <Menu.Item
                key={index}
                as={Link}
                to={item.href}
                disabled={item.disabled}
              >
                {content}
              </Menu.Item>
            );
          }

          return (
            <Menu.Item key={index} as={Fragment} disabled={item.disabled}>
              {content}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
};

type UseStylesParams = Pick<Props, 'className' | 'direction'>;

const useStyles = (params: UseStylesParams) => {
  const { className = '', direction = 'bottom right' } = params;

  const containerClassNames = buildClassNames({
    classNames: classNames.dropdown,
    additional: [className],
  });

  const menuClasses = [mapDirectionClass[direction]];

  const menuClassNames = buildClassNames({
    classNames: classNames.menu,
    additional: menuClasses,
  });

  const buttonClassNames = (active: boolean) =>
    buildClassNames({
      classNames: classNames.item,
      mods: {
        [classNames.active]: active,
      },
    });

  return { containerClassNames, menuClassNames, buttonClassNames };
};
