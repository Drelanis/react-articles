import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { buildClassNames } from '$shared';

type Props = {
  className?: string;
};

const ArticleDetailsPage = memo((props: Props) => {
  const { className } = props;
  const { t } = useTranslation('articles');

  const { containerClassNames } = useStyles({ className });

  return (
    <div className={containerClassNames}>{t('articlePageDetailsTitle')}</div>
  );
});

const useStyles = (params: Props) => {
  const { className = '' } = params;

  const containerClassNames = buildClassNames({
    classNames: '',
    additional: [className],
  });

  return { containerClassNames };
};

export default ArticleDetailsPage;
