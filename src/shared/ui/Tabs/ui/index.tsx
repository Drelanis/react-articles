import { FC, memo } from 'react';

import { useModel } from '../model';
import { TabItem } from '../types';

import classNames from './index.module.scss';

import { buildClassNames } from '$shared/utils';

type Props = {
  onTabClick: (tab: TabItem) => void;
  tabs: TabItem[];
  value: string;
  className?: string;
};

export const Tabs: FC<Props> = memo((props) => {
  const { className, tabs, onTabClick, value } = props;

  const { TabComponents } = useModel({ tabs, value, onTabClick });

  const { containerClassNames } = useStyles({ className });

  return <div className={containerClassNames}>{TabComponents}</div>;
});

type UseStylesParams = Pick<Props, 'className'>;

const useStyles = (params: UseStylesParams) => {
  const { className = '' } = params;

  const containerClassNames = buildClassNames({
    classNames: classNames.tabs,
    additional: [className],
  });

  return { containerClassNames };
};
