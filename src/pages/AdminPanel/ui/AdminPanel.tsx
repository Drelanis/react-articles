import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { Page } from '$widgets';

const AdminPanel: FC = memo(() => {
  const { t } = useTranslation();

  return <Page>{t('adminPanel')}</Page>;
});

export default AdminPanel;
