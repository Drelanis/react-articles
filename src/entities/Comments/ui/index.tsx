import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { CommentType, useModel } from '../model';

import classNames from './index.module.scss';

import { buildClassNames, Skeleton, Text } from '$shared';

type Props = {
  className?: string;
  comments?: CommentType[];
  isLoading?: boolean;
};

export const Comments: FC<Props> = memo((props) => {
  const { className, isLoading, comments = [] } = props;
  const { t } = useTranslation();

  const { containerClassNames } = useStyles({ className });

  const { isComments, CommentsList } = useModel({ comments });

  if (isLoading) {
    return (
      <div className={containerClassNames}>
        <div className={classNames.header}>
          <Skeleton width={30} height={30} border="50%" />
          <Skeleton height={16} width={100} className={classNames.userName} />
        </div>
        <Skeleton className={classNames.text} width="100%" height={50} />
      </div>
    );
  }

  return (
    <div className={containerClassNames}>
      {isComments && CommentsList}
      {!isComments && <Text text={t('noComments')} />}
    </div>
  );
});

type UseStylesParams = Pick<Props, 'className'>;

const useStyles = (params: UseStylesParams) => {
  const { className = '' } = params;

  const containerClassNames = buildClassNames({
    classNames: classNames.comment,
    additional: [className],
  });

  return { containerClassNames };
};
