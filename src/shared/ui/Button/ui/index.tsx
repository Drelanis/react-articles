import { ButtonHTMLAttributes, FC } from 'react';

import { ButtonSize, ButtonVariant } from '../constants';

import classNames from './index.module.scss';

import { buildClassNames } from '$shared/utils';

type Props = {
  className?: string;
  size?: ButtonSize;
  square?: boolean;
  variant?: ButtonVariant;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: FC<Props> = (props) => {
  const {
    className,
    children,
    variant = ButtonVariant.CLEAR,
    size = ButtonSize.M,
    square,
    ...otherProps
  } = props;

  const { containerClassName } = useStyle({ className, variant, size, square });

  return (
    <button type="button" className={containerClassName} {...otherProps}>
      {children}
    </button>
  );
};

type StyleParams = Pick<Props, 'variant' | 'className' | 'size' | 'square'>;

const useStyle = (params: StyleParams) => {
  const {
    className = '',
    variant = ButtonVariant.CLEAR,
    size = ButtonSize.M,
    square,
  } = params;

  const mods = {
    [classNames[variant]]: true,
    [classNames.square]: square,
    [classNames[size]]: true,
  };

  const containerClassName = buildClassNames({
    classNames: classNames.button,
    additional: [className, classNames[variant]],
    mods,
  });

  return { containerClassName };
};
