import { FC, memo } from 'react';

import classNames from './index.module.scss';

import { CommentType } from '$entities/Comments/model';
import { Avatar, buildClassNames, Text } from '$shared';

type Props = {
  comment: CommentType;
  className?: string;
};

export const CommentCard: FC<Props> = memo((props) => {
  const { className, comment } = props;

  const { containerClassNames } = useStyles({ className });

  return (
    <div className={containerClassNames}>
      <div className={classNames.header}>
        {comment.user.avatar && <Avatar size={30} src={comment.user.avatar} />}
        <Text className={classNames.username} title={comment.user.userName} />
      </div>
      <Text className={classNames.text} text={comment.text} />
    </div>
  );
});

type UseStylesParams = Pick<Props, 'className'>;

const useStyles = (params: UseStylesParams) => {
  const { className = '' } = params;

  const containerClassNames = buildClassNames({
    classNames: classNames.commentCard,
    additional: [className],
  });

  return { containerClassNames };
};
