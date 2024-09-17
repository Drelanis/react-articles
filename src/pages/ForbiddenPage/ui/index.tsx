import { useTranslation } from 'react-i18next';

import { Page } from '$widgets';

export const ForbiddenPage = () => {
  const { t } = useTranslation();

  return <Page>{t('forbiddenPage')}</Page>;
};
