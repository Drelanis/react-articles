import classNames from './index.module.scss';

import { buildClassNames } from '$shared';

type Props = {
  className?: string[];
};

export const NavBar = (props: Props) => {
  const { className } = props;

  const { containerClassNames } = useStyles({ className });

  return (
    <div className={containerClassNames}>
      <div className={classNames.links}>/</div>
    </div>
  );
};

type StyleParams = Pick<Props, 'className'>;

const useStyles = (params: StyleParams) => {
  const { className } = params;

  const containerClassNames = buildClassNames({
    classNames: classNames.navbar,
    additional: className,
  });

  return { containerClassNames };
};
