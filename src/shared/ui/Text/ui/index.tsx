import { FC } from 'react';

import { TextVariants } from '../constants';

import classNames from './index.module.scss';

import { buildClassNames } from '$shared/utils';

type Props = {
  className?: string;
  text?: string;
  title?: string;
  variant?: TextVariants;
};

export const Text: FC<Props> = (props) => {
  const { className, text, title, variant } = props;

  const { containerClassNames } = useStyles({ className, variant });

  return (
    <div className={containerClassNames}>
      {title && <p className={classNames.title}>{title}</p>}
      {text && <p className={classNames.text}>{text}</p>}
    </div>
  );
};

type UseStylesParams = Pick<Props, 'variant' | 'className'>;

const useStyles = (params: UseStylesParams) => {
  const { variant = TextVariants.PRIMARY, className = '' } = params;

  const containerClassNames = buildClassNames({
    mods: {
      [classNames[variant]]: true,
    },
    classNames: classNames.text,
    additional: [className],
  });

  return { containerClassNames };
};
