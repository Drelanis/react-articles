import { useTranslation } from 'react-i18next';

import { useModel } from '../hooks';

import classNames from './index.module.scss';

import { buildClassNames, Button, ButtonVariant, Input, Text } from '$shared';

interface Props {
  className?: string;
}

export const ProfileCard = (props: Props) => {
  const { className } = props;

  const { t } = useTranslation('profile');

  const { containerClassNames } = useStyles({ className });

  const { data } = useModel();

  return (
    <div className={containerClassNames}>
      <div className={classNames.header}>
        <Text title={t('profile')} />
        <Button className={classNames.editBtn} variant={ButtonVariant.OUTLINE}>
          {t('edit')}
        </Button>
      </div>
      <div className={classNames.data}>
        <Input
          value={data?.firstName}
          placeholder={t('firstName')}
          className={classNames.input}
        />
        <Input
          value={data?.lastName}
          placeholder={t('lastName')}
          className={classNames.input}
        />
      </div>
    </div>
  );
};

const useStyles = (params: Props) => {
  const { className = '' } = params;

  const containerClassNames = buildClassNames({
    classNames: classNames.profileCard,
    additional: [className],
  });

  return { containerClassNames };
};
