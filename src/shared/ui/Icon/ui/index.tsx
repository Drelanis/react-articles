import React, { memo } from 'react';

import classNames from './index.module.scss';

import { buildClassNames } from '$shared/utils';

type Props = {
  Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
  className?: string;
};

export const Icon = memo((props: Props) => {
  const { className, Svg } = props;

  const { svgClassNames } = useStyles({ className });

  return <Svg className={svgClassNames} />;
});

type StyleProps = Pick<Props, 'className'>;

const useStyles = (params: StyleProps) => {
  const { className = '' } = params;

  const svgClassNames = buildClassNames({
    classNames: classNames.icon,
    additional: [className],
  });

  return { svgClassNames };
};
