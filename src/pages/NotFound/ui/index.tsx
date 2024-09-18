import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import classNames from './index.module.scss';

import { buildClassNames } from '$shared';
import { Page } from '$widgets';

interface Props {
  className?: string;
}

export const NotFoundPage: FC<Props> = (props) => {
  const { className } = props;

  const { t } = useTranslation();

  const { containerClassNames } = useStyles({ className });

  return (
    <Page dataTestId="test-not-found" className={containerClassNames}>
      {t('notFoundPage')}
    </Page>
  );
};

type StylesParams = Pick<Props, 'className'>;

const useStyles = (params: StylesParams) => {
  const { className = '' } = params;

  const containerClassNames = buildClassNames({
    classNames: classNames.container,
    additional: [className],
  });

  return { containerClassNames };
};
