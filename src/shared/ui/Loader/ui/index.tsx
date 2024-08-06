import { FC } from 'react';
import { buildClassNames } from 'shared/utils';

import classNames from './index.module.scss';

interface Props {
  className?: string;
}

export const Loader: FC<Props> = (props) => {
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

type StyleProps = Pick<Props, 'className'>;

const useStyles = (params: StyleProps) => {
  const { className = '' } = params;

  const containerClassNames = buildClassNames({
    classNames: classNames.ldsEllipsis,
    additional: [className],
  });

  return { containerClassNames };
};
