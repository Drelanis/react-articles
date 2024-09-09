import { FC, memo, useCallback, useMemo } from 'react';

import { useModel } from '../model';

import classNames from './index.module.scss';

import { ArticleView } from '$entities';
import { buildClassNames } from '$shared';

type Props = {
  className?: string;
  onViewClick?: (view: ArticleView) => void;
  view?: ArticleView;
};

export const ArticleViewSelector: FC<Props> = memo((props) => {
  const { className, view = ArticleView.TILE, onViewClick } = props;

  const { containerClassNames, getIconClassNames } = useStyles({
    view,
    className,
  });

  const { ViewSelectors } = useModel({ onViewClick, getIconClassNames });

  return <div className={containerClassNames}>{ViewSelectors}</div>;
});

type UseStylesParams = Pick<Props, 'className' | 'view'>;

const useStyles = (params: UseStylesParams) => {
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
    (iconViewValue: ArticleView) => {
      const iconClassNames = buildClassNames({
        classNames: '',
        mods: {
          [classNames.notSelected]: iconViewValue === view,
        },
      });

      return iconClassNames;
    },
    [view],
  );

  return { containerClassNames, getIconClassNames };
};
