import { FC, HTMLAttributes, memo, ReactNode } from 'react';

import classNames from './index.module.scss';

import { buildClassNames } from '$shared/utils';

interface Props extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
}

export const Card: FC<Props> = memo((props) => {
  const { className, children, ...otherProps } = props;

  const { containerClassNames } = useStyles({ className });

  return (
    <div className={containerClassNames} {...otherProps}>
      {children}
    </div>
  );
});

type UseStylesParams = Pick<Props, 'className'>;

const useStyles = (params: UseStylesParams) => {
  const { className = '' } = params;

  const containerClassNames = buildClassNames({
    classNames: classNames.card,
    additional: [className],
  });

  return { containerClassNames };
};
