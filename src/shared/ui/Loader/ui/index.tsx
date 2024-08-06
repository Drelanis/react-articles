import { FC } from 'react';
import { buildClassNames } from 'shared/hooks';

import classNames from './index.module.scss';

interface LoaderProps {
  className?: string;
}

export const Loader: FC<LoaderProps> = (props) => {
  const { className } = props;

  const { containerClassNames } = useStyles({ className });

  return (
    <div className={containerClassNames}>
      <div />
      <div />
      <div />
      <div />
    </div>
  );
};

type StyleProps = Pick<LoaderProps, 'className'>;

const useStyles = (params: StyleProps) => {
  const { className = '' } = params;

  const containerClassNames = buildClassNames({
    classNames: classNames.ldsEllipsis,
    additional: [className],
  });

  return { containerClassNames };
};
