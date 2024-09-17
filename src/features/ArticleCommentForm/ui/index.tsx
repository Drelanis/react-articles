import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { useModel } from '../model';

import classNames from './index.module.scss';

import { CommentForm, Comments } from '$entities';
import {
  buildClassNames,
  Text,
  TextAlign,
  TextVariants,
  VStack,
} from '$shared';

type Props = {
  className?: string;
};

export const ArticleComments: FC<Props> = memo((props) => {
  const { className } = props;

  const { t } = useTranslation();

  const { containerClassNames } = useStyles({ className });

  const {
    isAddCommentsLoading,
    isAddCommentError,
    comments,
    isGetCommentsError,
    isGetCommentsFetching,
    onSendComment,
  } = useModel();

  if (isAddCommentError || isGetCommentsError) {
    return (
      <Text
        align={TextAlign.CENTER}
        variant={TextVariants.ERROR}
        title={t('COMMON_ERROR')}
      />
    );
  }

  return (
    <VStack gap="16" className={containerClassNames}>
      <Text className={classNames.commentTitle} title={t('comments')} />
      <CommentForm onSendComment={onSendComment} />
      <Comments
        comments={comments}
        isLoading={isAddCommentsLoading || isGetCommentsFetching}
      />
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
