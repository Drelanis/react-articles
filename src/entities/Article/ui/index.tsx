import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { ArticleWrapper } from '../components';
import { useModel } from '../model';

import classNames from './index.module.scss';

import {
  Avatar,
  buildClassNames,
  HStack,
  Icon,
  Skeleton,
  Text,
  TextAlign,
  TextVariants,
  VStack,
} from '$shared';
import CalendarIcon from '$shared/assets/icons/calendar-20-20.svg';
import EyeIcon from '$shared/assets/icons/eye-20-20.svg';

type Props = {
  className?: string;
};

export const ArticleDetails: FC<Props> = memo((props) => {
  const { className } = props;

  const { t } = useTranslation();

  const { containerClassNames } = useStyles({ className });

  const { isLoading, error, article, ArticleContent } = useModel();

  let Content;

  if (isLoading) {
    Content = (
      <VStack max gap="16">
        <HStack max justify="center">
          <Skeleton width={200} height={200} border="50%" />
        </HStack>
        <Skeleton width={300} height={32} />
        <Skeleton width={600} height={24} />
        <Skeleton width="100%" height={200} />
        <Skeleton width="100%" height={200} />
      </VStack>
    );
  }

  if (error) {
    Content = (
      <HStack max justify="center">
        <Text
          variant={TextVariants.ERROR}
          align={TextAlign.CENTER}
          text={t(error)}
        />
      </HStack>
    );
  }

  if (!isLoading && !error) {
    Content = (
      <VStack gap="8" className={containerClassNames}>
        <HStack justify="center" max>
          <Avatar size={200} src={article?.img} />
        </HStack>
        <Text title={article?.title} text={article?.subtitle} />
        <HStack>
          <Icon className={classNames.icon} Svg={EyeIcon} />
          <Text text={String(article?.views)} />
        </HStack>
        <HStack>
          <Icon className={classNames.icon} Svg={CalendarIcon} />
          <Text text={article?.createdAt} />
        </HStack>
        {ArticleContent}
      </VStack>
    );
  }

  return <ArticleWrapper>{Content}</ArticleWrapper>;
});

const useStyles = (params: Props) => {
  const { className = '' } = params;

  const containerClassNames = buildClassNames({
    classNames: '',
    additional: [className],
  });

  return { containerClassNames };
};
