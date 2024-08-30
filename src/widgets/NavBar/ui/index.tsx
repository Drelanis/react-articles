import { useModel } from '../model';

import classNames from './index.module.scss';

import { Auth, Logout } from '$features';
import { buildClassNames } from '$shared';

type Props = {
  className?: string[];
};

export const NavBar = (props: Props) => {
  const { className } = props;

  const { containerClassNames } = useStyles({ className });

  const { userAuthData } = useModel();

  if (userAuthData) {
    return (
      <div className={containerClassNames}>
        <Logout className={classNames.links} />
      </div>
    );
  }

  return (
    <div className={containerClassNames}>
      <Auth classNames={classNames.links} />
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
