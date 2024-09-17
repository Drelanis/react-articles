import { FC, memo, ReactNode } from 'react';

import { FlexAlign, FlexDirection, FlexGap, FlexJustify } from '../../types';

import classNames from './index.module.scss';

import { buildClassNames, ClassNamesModsType } from '$shared/utils';

const justifyClasses: Record<FlexJustify, string> = {
  start: classNames.justifyStart,
  center: classNames.justifyCenter,
  end: classNames.justifyEnd,
  between: classNames.justifyBetween,
};

const alignClasses: Record<FlexAlign, string> = {
  start: classNames.alignStart,
  center: classNames.alignCenter,
  end: classNames.alignEnd,
};

const directionClasses: Record<FlexDirection, string> = {
  row: classNames.directionRow,
  column: classNames.directionColumn,
};

const gapClasses: Record<FlexGap, string> = {
  4: classNames.gap4,
  8: classNames.gap8,
  16: classNames.gap16,
  32: classNames.gap32,
};

export type FlexProps = {
  children: ReactNode;
  direction: FlexDirection;
  align?: FlexAlign;
  className?: string;
  gap?: FlexGap;
  justify?: FlexJustify;
  max?: boolean;
};

export const Flex: FC<FlexProps> = memo((props) => {
  const { children, ...restProps } = props;

  const { containerClassNames } = useStyles(restProps);

  return <div className={containerClassNames}>{children}</div>;
});

type StyleProps = Omit<FlexProps, 'children'>;

const useStyles = (params: StyleProps) => {
  const {
    className = '',
    justify = 'start',
    align = 'center',
    direction = 'row',
    gap = '4',
    max,
  } = params;

  const classes = [
    className,
    justifyClasses[justify],
    alignClasses[align],
    directionClasses[direction],
    gap && gapClasses[gap],
  ];

  const mods: ClassNamesModsType = {
    [classNames.max]: max,
  };

  const containerClassNames = buildClassNames({
    classNames: classNames.flex,
    additional: classes,
    mods,
  });

  return { containerClassNames };
};
