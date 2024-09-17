import { FC, memo } from 'react';

import { TextAlign, TextVariants } from '../constants';

import classNames from './index.module.scss';

import { buildClassNames } from '$shared/utils';

type Props = {
  align?: TextAlign;
  className?: string;
  text?: string;
  title?: string;
  variant?: TextVariants;
};

export const Text: FC<Props> = memo((props) => {
  const { className, text, title, variant, align, ...otherProps } = props;

  const { containerClassNames } = useStyles({ className, variant, align });

  return (
    <div className={containerClassNames}>
      {title && (
        <p {...otherProps} className={classNames.title}>
          {title}
        </p>
      )}
      {text && <p className={classNames.text}>{text}</p>}
    </div>
  );
});

type UseStylesParams = Pick<Props, 'variant' | 'className' | 'align'>;

const useStyles = (params: UseStylesParams) => {
  const {
    variant = TextVariants.PRIMARY,
    className = '',
    align = TextAlign.LEFT,
  } = params;

  const containerClassNames = buildClassNames({
    mods: {
      [classNames[variant]]: true,
      [classNames[align]]: true,
    },
    classNames: classNames.text,
    additional: [className],
  });

  return { containerClassNames };
};
