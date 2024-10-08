import { FC } from 'react';

import classNames from './index.module.scss';

import { buildClassNames, Loader } from '$shared';

interface Props {
  className?: string;
}

export const PageLoader: FC<Props> = (props: Props) => {
  const { className } = props;

  const { containerClassNames } = useStyles({ className });

  return (
    <div className={containerClassNames}>
      <Loader />
    </div>
  );
};

type StylesParams = Pick<Props, 'className'>;

const useStyles = (params: StylesParams) => {
  const { className = '' } = params;

  const containerClassNames = buildClassNames({
    classNames: classNames.container,
    additional: [className],
  });

  return { containerClassNames };
};
