import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { useModel } from '../model';

import classNames from './index.module.scss';

import { buildClassNames, Button, ButtonVariant } from '$shared';

type Props = {
  className?: string;
};

export const ErrorCatcher: FC<Props> = (props) => {
  const { className } = props;

  const { containerClassNames } = useStyles({ className });

  const { t } = useTranslation();

  const { reloadPage } = useModel();

  return (
    <div className={containerClassNames}>
      <p>{t('errorCommon')}</p>
      <Button variant={ButtonVariant.OUTLINE} onClick={reloadPage}>
        {t('reloadPage')}
      </Button>
    </div>
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
