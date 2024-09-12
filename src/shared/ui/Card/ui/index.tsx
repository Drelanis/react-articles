import { FC, HTMLAttributes, memo, ReactNode } from 'react';

import { CardVariant } from '../constants';

import classNames from './index.module.scss';

import { buildClassNames } from '$shared/utils';

interface Props extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
  variant?: CardVariant;
}

export const Card: FC<Props> = memo((props) => {
  const { className, children, variant, ...otherProps } = props;

  const { containerClassNames } = useStyles({ className, variant });

  return (
    <div className={containerClassNames} {...otherProps}>
      {children}
    </div>
  );
});

type UseStylesParams = Pick<Props, 'className' | 'variant'>;

const useStyles = (params: UseStylesParams) => {
  const { className = '', variant = CardVariant.NORMAL } = params;

  const containerClassNames = buildClassNames({
    classNames: classNames.card,
    additional: [className, classNames[variant]],
  });

  return { containerClassNames };
};
