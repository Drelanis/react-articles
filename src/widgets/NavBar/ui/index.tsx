import { AppLinkTheme, Link, useClassNames } from 'shared';
import classNames from './index.module.scss';

type Props = {
  className?: string[];
};

export const NavBar = (props: Props) => {
  const { className } = props;

  const containerClassNames = useClassNames({
    classNames: classNames.navbar,
    additional: className,
  });

  return (
    <div className={containerClassNames}>
      <div className={classNames.links}>
        <Link
          theme={AppLinkTheme.SECONDARY}
          className={[classNames.mainLink]}
          to={'/about'}
        >
          About
        </Link>
        <Link theme={AppLinkTheme.SECONDARY} to={'/'}>
          Main
        </Link>
      </div>
    </div>
  );
};
