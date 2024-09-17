import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { useLogic } from '../model';

import classNames from './index.module.scss';

import { Auth } from '$features';
import { Avatar, buildClassNames, Dropdown, Text, TextVariants } from '$shared';

type Props = {
  className?: string[];
};

export const NavBar = memo((props: Props) => {
  const { className } = props;

  const { containerClassNames } = useStyles({ className });

  const { userAuthData, dropDownItems } = useLogic();

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
      <Dropdown
        direction="bottom left"
        className={classNames.dropdown}
        items={dropDownItems}
        trigger={<Avatar size={30} src={userAuthData.avatar} />}
      />
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
