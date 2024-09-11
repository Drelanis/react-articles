import { useCallback, useMemo } from 'react';

import { viewTypes } from '../constants';

import { Button, ButtonVariant, Icon } from '$shared';

type Params<Type extends string> = {
  getIconClassNames: (iconViewValue: Type) => string;
  onViewClick?: (view: Type) => void;
};

export const useModel = <Type extends string>(params: Params<Type>) => {
  const { onViewClick, getIconClassNames } = params;

  const onClick = useCallback(
    (newView: Type) => () => {
      onViewClick?.(newView);
    },
    [onViewClick],
  );

  const ViewSelectors = useMemo(() => {
    return viewTypes.map((viewType, index) => (
      <Button
        key={index}
        variant={ButtonVariant.CLEAR}
        onClick={onClick(viewType.view as Type)}
      >
        <Icon
          Svg={viewType.icon}
          className={getIconClassNames(viewType.view as Type)}
        />
      </Button>
    ));
  }, [getIconClassNames, onClick]);

  return { ViewSelectors };
};
