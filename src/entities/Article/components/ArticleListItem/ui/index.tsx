import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { ArticleTextBlock } from '../../ArticleTextBlock';
import { useModel } from '../model';

import classNames from './index.module.scss';

import { Article } from '$entities/Article/model';
import {
  Avatar,
  buildClassNames,
  Button,
  ButtonVariant,
  Card,
  Icon,
  ListView,
  Text,
} from '$shared';
import EyeIcon from '$shared/assets/icons/eye-20-20.svg';

type Props = {
  article: Article;
  view: ListView;
  className?: string;
};

export const ArticleListItem: FC<Props> = memo((props) => {
  const { className, article, view } = props;
  const { t } = useTranslation('articles');

  const { containerClassNames } = useStyles({ className, view });

  const { textBlock, onOpenArticle } = useModel({ article });

  const types = (
    <Text text={article.type.join(', ')} className={classNames.types} />
  );

  const views = (
    <>
      <Text text={String(article.views)} className={classNames.views} />
      <Icon Svg={EyeIcon} />
    </>
  );

  if (view === ListView.LIST) {
    return (
      <div className={containerClassNames}>
        <Card>
          <div className={classNames.header}>
            <Avatar size={30} src={article.user.avatar} />
            <Text
              text={article.user.userName}
              className={classNames.username}
            />
            <Text text={article.createdAt} className={classNames.date} />
          </div>
          <Text title={article.title} className={classNames.title} />
          {types}
          <img
            src={article.img}
            className={classNames.img}
            alt={article.title}
          />
          {textBlock && (
            <ArticleTextBlock
              block={textBlock}
              className={classNames.textBlock}
            />
          )}
          <div className={classNames.footer}>
            <Button onClick={onOpenArticle} variant={ButtonVariant.OUTLINE}>
              {t('readMore')}
            </Button>
            {views}
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className={containerClassNames}>
      <Card onClick={onOpenArticle}>
        <div className={classNames.imageWrapper}>
          <img
            alt={article.title}
            src={article.img}
            className={classNames.img}
          />
          <Text text={article.createdAt} className={classNames.date} />
        </div>
        <div className={classNames.infoWrapper}>
          {types}
          {views}
        </div>
        <Text text={article.title} className={classNames.title} />
      </Card>
    </div>
  );
});

type UseStylesParams = Pick<Props, 'className' | 'view'>;

const useStyles = (params: UseStylesParams) => {
  const { className = '', view } = params;

  const containerClassNames = buildClassNames({
    classNames: '',
    additional: [className, classNames[view]],
  });

  return { containerClassNames };
};
