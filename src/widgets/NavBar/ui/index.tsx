import { useTranslation } from 'react-i18next';
import { AppLinkTheme, Link, useClassNames } from 'shared';

import classNames from './index.module.scss';

type Props = {
  className?: string[];
};

export const NavBar = (props: Props) => {
  const { className } = props;

  const { t } = useTranslation();

  const { containerClassNames } = useStyles({ className });

  return (
    <div className={containerClassNames}>
      <div className={classNames.links}>
        <Link
          theme={AppLinkTheme.SECONDARY}
          className={[classNames.mainLink]}
          to="/about"
        >
          {t('about')}
        </Link>
        <Link theme={AppLinkTheme.SECONDARY} to="/">
          {t('main')}
        </Link>
      </div>
    </div>
  );
};

type StyleParams = Pick<Props, 'className'>;

const useStyles = (params: StyleParams) => {
  const { className } = params;

  const containerClassNames = useClassNames({
    classNames: classNames.navbar,
    additional: className,
  });

  return { containerClassNames };
};
