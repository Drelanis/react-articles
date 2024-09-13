import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { ArticleTextBlock } from '../../ArticleTextBlock';
import { useModel } from '../model';

import classNames from './index.module.scss';

import { Article } from '$entities/Article/model';
import {
  AppRoutes,
  Avatar,
  buildClassNames,
  Button,
  ButtonVariant,
  Card,
  HStack,
  Icon,
  Link,
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

  const ArticleTypes = (
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
      <Card className={containerClassNames}>
        <HStack>
          <Avatar size={30} src={article.user.avatar} />
          <Text text={article.user.userName} className={classNames.username} />
          <Text text={article.createdAt} className={classNames.date} />
        </HStack>
        <Text title={article.title} className={classNames.title} />
        {ArticleTypes}
        <img src={article.img} className={classNames.img} alt={article.title} />
        {textBlock && (
          <ArticleTextBlock
            block={textBlock}
            className={classNames.textBlock}
          />
        )}
        <HStack className={classNames.footer}>
          <Link to={`${AppRoutes.ARTICLES}/${article.id}`}>
            <Button onClick={onOpenArticle} variant={ButtonVariant.OUTLINE}>
              {t('readMore')}
            </Button>
          </Link>
          {views}
        </HStack>
      </Card>
    );
  }

  return (
    <Link
      target="_blank"
      to={`${AppRoutes.ARTICLES}/${article.id}`}
      className={[containerClassNames]}
    >
      <Card>
        <HStack className={classNames.imageWrapper}>
          <img
            alt={article.title}
            src={article.img}
            className={classNames.img}
          />
          <Text text={article.createdAt} className={classNames.date} />
        </HStack>
        <HStack className={classNames.infoWrapper}>
          {ArticleTypes}
          {views}
        </HStack>
        <Text text={article.title} className={classNames.title} />
      </Card>
    </Link>
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
