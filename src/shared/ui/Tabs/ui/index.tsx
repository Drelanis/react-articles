import { useModel } from '../model';
import { TabItem } from '../types';

import classNames from './index.module.scss';

import { GenericMemoWrapper } from '$lib';
import { buildClassNames } from '$shared/utils';

type Props<Type extends string> = {
  onTabClick: (tab: TabItem<Type>) => void;
  tabs: TabItem<Type>[];
  value: Type;
  className?: string;
};

export const Tabs = GenericMemoWrapper(
  <Type extends string>(props: Props<Type>) => {
    const { className, tabs, onTabClick, value } = props;

    const { TabComponents } = useModel({ tabs, value, onTabClick });

    const { containerClassNames } = useStyles({ className });

    return <div className={containerClassNames}>{TabComponents}</div>;
  },
);

type UseStylesParams = Pick<Props<string>, 'className'>;

const useStyles = (params: UseStylesParams) => {
  const { className = '' } = params;

  const containerClassNames = buildClassNames({
    classNames: classNames.tabs,
    additional: [className],
  });

  return { containerClassNames };
};
