import React, { memo } from 'react';

import classNames from './index.module.scss';

import { buildClassNames } from '$shared/utils';

interface Props extends React.SVGProps<SVGSVGElement> {
  Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
  className?: string;
  inverted?: boolean;
}

export const Icon = memo((props: Props) => {
  const { className, Svg, inverted, ...otherProps } = props;

  const { svgClassNames } = useStyles({ className, inverted });

  return <Svg className={svgClassNames} {...otherProps} />;
});

type StyleProps = Pick<Props, 'className' | 'inverted'>;

const useStyles = (params: StyleProps) => {
  const { className = '', inverted } = params;

  const svgClassNames = buildClassNames({
    classNames: inverted ? classNames.inverted : classNames.icon,
    additional: [className],
  });

  return { svgClassNames };
};
