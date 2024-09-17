import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { CommentType, useModel } from '../model';

import { buildClassNames, HStack, Skeleton, Text, VStack } from '$shared';

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
      <VStack gap="16" max>
        <HStack gap="16">
          <Skeleton width={30} height={30} border="50%" />
          <Skeleton height={16} width={100} />
        </HStack>
        <Skeleton width="100%" height={50} />
      </VStack>
    );
  }

  return (
    <VStack max className={containerClassNames} gap="16">
      {isComments && CommentsList}
      {!isComments && <Text text={t('noComments')} />}
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
