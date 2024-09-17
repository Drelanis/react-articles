import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { useModel } from '../model';

import classNames from './index.module.scss';

import { ArticlesList } from '$entities';
import {
  buildClassNames,
  CommonErrorHints,
  Text,
  TextAlign,
  TextVariants,
  VStack,
} from '$shared';

type Props = {
  className?: string;
};

export const ArticleRecommendations: FC<Props> = memo((props) => {
  const { className } = props;

  const { t } = useTranslation();

  const { containerClassNames } = useStyles({ className });

  const { data, isLoading, error } = useModel();

  if (error) {
    return (
      <Text
        variant={TextVariants.ERROR}
        align={TextAlign.CENTER}
        className={classNames.recommendationsTitle}
        title={t(CommonErrorHints.COMMON_ERROR)}
      />
    );
  }

  return (
    <VStack className={containerClassNames}>
      <Text
        align={TextAlign.CENTER}
        className={classNames.recommendationsTitle}
        title={t('recommendations')}
      />
      <ArticlesList articles={data} isLoading={isLoading} tileHorizontal />
    </VStack>
  );
});

type UseStylesParams = Pick<Props, 'className'>;

const useStyles = (params: UseStylesParams) => {
  const { className = '' } = params;

  const containerClassNames = buildClassNames({
    classNames: '',
    additional: [className],
  });

  return { containerClassNames };
};
