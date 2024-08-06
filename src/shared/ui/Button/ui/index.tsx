import { ButtonHTMLAttributes, FC } from 'react';
import { buildClassNames } from 'shared/utils';

import { ButtonVariant } from '../constants';

import classNames from './index.module.scss';

type Props = {
  className?: string;
  variant?: ButtonVariant;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: FC<Props> = (props) => {
  const {
    className,
    children,
    variant = ButtonVariant.CLEAR,
    ...otherProps
  } = props;

  const { containerClassName } = useStyle({ className, variant });

  return (
    <button type="button" className={containerClassName} {...otherProps}>
      {children}
    </button>
  );
};

type StyleParams = Pick<Props, 'variant' | 'className'>;

const useStyle = (params: StyleParams) => {
  const { variant = ButtonVariant.CLEAR, className = '' } = params;

  const containerClassName = buildClassNames({
    classNames: classNames.button,
    additional: [className, classNames[variant]],
  });

  return { containerClassName };
};
