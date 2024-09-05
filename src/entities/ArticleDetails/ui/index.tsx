import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import CalendarIcon from 'shared/assets/icons/calendar-20-20.svg';
import EyeIcon from 'shared/assets/icons/eye-20-20.svg';

import { ArticleWrapper } from '../components';
import { useModel } from '../model';

import classNames from './index.module.scss';

import {
  Avatar,
  buildClassNames,
  Icon,
  Skeleton,
  Text,
  TextAlign,
  TextVariants,
} from '$shared';

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
      <div className={containerClassNames}>
        <Skeleton
          className={classNames.avatar}
          width={200}
          height={200}
          border="50%"
        />
        <Skeleton className={classNames.title} width={300} height={32} />
        <Skeleton className={classNames.skeleton} width={600} height={24} />
        <Skeleton className={classNames.skeleton} width="100%" height={200} />
        <Skeleton className={classNames.skeleton} width="100%" height={200} />
      </div>
    );
  }

  if (error) {
    Content = (
      <div className={containerClassNames}>
        <Text
          variant={TextVariants.ERROR}
          align={TextAlign.CENTER}
          text={t(error)}
        />
      </div>
    );
  }

  if (!isLoading && !error) {
    Content = (
      <div className={containerClassNames}>
        <div className={classNames.avatarWrapper}>
          <Avatar size={200} src={article?.img} className={classNames.avatar} />
        </div>
        <Text
          className={classNames.title}
          title={article?.title}
          text={article?.subtitle}
        />
        <div className={classNames.articleInfo}>
          <Icon className={classNames.icon} Svg={EyeIcon} />
          <Text text={String(article?.views)} />
        </div>
        <div className={classNames.articleInfo}>
          <Icon className={classNames.icon} Svg={CalendarIcon} />
          <Text text={article?.createdAt} />
        </div>
        {ArticleContent}
      </div>
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
