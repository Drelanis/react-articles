import { useCallback, useMemo } from 'react';

import { viewTypes } from '../constants';

import { ArticleView } from '$entities';
import { Button, ButtonVariant, Icon } from '$shared';

type Params = {
  getIconClassNames: (iconViewValue: ArticleView) => string;
  onViewClick?: (view: ArticleView) => void;
};

export const useModel = (params: Params) => {
  const { onViewClick, getIconClassNames } = params;

  const onClick = useCallback(
    (newView: ArticleView) => () => {
      onViewClick?.(newView);
    },
    [onViewClick],
  );

  const ViewSelectors = useMemo(() => {
    return viewTypes.map((viewType, index) => (
      <Button
        key={index}
        variant={ButtonVariant.CLEAR}
        onClick={onClick(viewType.view)}
      >
        <Icon
          Svg={viewType.icon}
          className={getIconClassNames(viewType.view)}
        />
      </Button>
    ));
  }, [getIconClassNames, onClick]);

  return { ViewSelectors };
};
