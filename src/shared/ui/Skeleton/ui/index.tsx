import { CSSProperties, FC, memo } from 'react';

import classNames from './index.module.scss';

import { buildClassNames } from '$shared/utils';

type Props = {
  border?: string;
  className?: string;
  height?: string | number;
  width?: string | number;
};

export const Skeleton: FC<Props> = memo((props) => {
  const { containerStyles, containerClassNames } = useStyles(props);

  return <div className={containerClassNames} style={containerStyles} />;
});

type UseStylesParams = Props;

const useStyles = (params: UseStylesParams) => {
  const { className = '', width, height, border } = params;

  const containerStyles: CSSProperties = {
    width,
    height,
    borderRadius: border,
  };

  const containerClassNames = buildClassNames({
    classNames: classNames.skeleton,
    additional: [className],
  });

  return { containerStyles, containerClassNames };
};
