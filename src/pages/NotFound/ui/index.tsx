import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { buildClassNames } from 'shared';

import classNames from './index.module.scss';

interface Props {
  className?: string;
}

export const NotFoundPage: FC<Props> = (props: Props) => {
  const { className } = props;

  const { t } = useTranslation();

  const { containerClassNames } = useStyles({ className });

  return <div className={containerClassNames}>{t('notFoundPage')}</div>;
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
