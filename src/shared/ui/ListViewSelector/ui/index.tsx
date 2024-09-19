import { useCallback, useMemo } from 'react';

import { useModel } from '../model';

import classNames from './index.module.scss';

import { GenericMemoWrapper } from '$lib';
import { ListView } from '$shared/constants';
import { buildClassNames } from '$shared/utils';

type Props<Type extends string> = {
  className?: string;
  onViewClick?: (view: Type) => void;
  view?: Type;
};

export const ListViewSelector = GenericMemoWrapper(
  <Type extends string>(props: Props<Type>) => {
    const { className, view = ListView.TILE, onViewClick } = props;

    const { containerClassNames, getIconClassNames } = useStyles({
      view,
      className,
    });

    const { ViewSelectors } = useModel({ onViewClick, getIconClassNames });

    return <div className={containerClassNames}>{ViewSelectors}</div>;
  },
);

type UseStylesParams<Type extends string> = Pick<
  Props<Type>,
  'className' | 'view'
>;

const useStyles = <Type extends string>(params: UseStylesParams<Type>) => {
  const { className = '', view } = params;

  const containerClassNames = useMemo(
    () =>
      buildClassNames({
        classNames: '',
        additional: [className],
      }),
    [className],
  );

  const getIconClassNames = useCallback(
    (iconViewValue: Type) => {
      const iconClassNames = buildClassNames({
        classNames: '',
        mods: {
          [classNames.notSelected]: iconViewValue !== view,
        },
      });

      return iconClassNames;
    },
    [view],
  );

  return { containerClassNames, getIconClassNames };
};
