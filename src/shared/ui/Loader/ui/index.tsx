import { FC } from 'react';

import classNames from './index.module.scss';

import { buildClassNames } from '$shared/utils';

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
