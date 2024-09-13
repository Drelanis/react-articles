import { FC, memo } from 'react';

import classNames from './index.module.scss';

import { CommentType } from '$entities/Comments/model';
import {
  AppRoutes,
  Avatar,
  buildClassNames,
  HStack,
  Link,
  Text,
  VStack,
} from '$shared';

type Props = {
  comment: CommentType;
  className?: string;
};

export const CommentCard: FC<Props> = memo((props) => {
  const { className, comment } = props;

  const { containerClassNames } = useStyles({ className });

  return (
    <VStack max className={containerClassNames} gap="16">
      <HStack>
        {comment.user.avatar && <Avatar size={30} src={comment.user.avatar} />}
        <Link to={`${AppRoutes.PROFILE}/${comment.user.id}`}>
          <Text title={comment.user.userName} />
        </Link>
      </HStack>
      <Text text={comment.text} />
    </VStack>
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
