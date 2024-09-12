import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { useModel } from '../model';

import classNames from './index.module.scss';

import { Auth, Logout } from '$features';
import { buildClassNames, Text, TextVariants } from '$shared';

type Props = {
  className?: string[];
};

export const NavBar = memo((props: Props) => {
  const { className } = props;

  const { containerClassNames } = useStyles({ className });

  const { userAuthData } = useModel();

  const { t } = useTranslation();

  if (!userAuthData) {
    return (
      <div className={containerClassNames}>
        <Text title={t('appName')} variant={TextVariants.INVERTED} />
        <Auth classNames={classNames.links} />
      </div>
    );
  }

  return (
    <div className={containerClassNames}>
      <Text title={t('appName')} variant={TextVariants.INVERTED} />
      <Logout className={classNames.links} />
    </div>
  );
});

type StyleParams = Pick<Props, 'className'>;

const useStyles = (params: StyleParams) => {
  const { className } = params;

  const containerClassNames = buildClassNames({
    classNames: classNames.navbar,
    additional: className,
  });

  return { containerClassNames };
};
