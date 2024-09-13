import { FC, memo } from 'react';

import classNames from './index.module.scss';

import {
  buildClassNames,
  Card,
  HStack,
  ListView,
  Skeleton,
  VStack,
} from '$shared';

type Props = {
  view: ListView;
  className?: string;
};

export const ArticlesListSkeleton: FC<Props> = memo((props: Props) => {
  const { className, view } = props;

  const { containerClassNames } = useStyles({ className, view });

  if (view === ListView.LIST) {
    return (
      <Card className={containerClassNames}>
        <HStack gap="8">
          <Skeleton border="50%" height={30} width={30} />
          <Skeleton width={150} height={16} className={classNames.username} />
          <Skeleton width={150} height={16} className={classNames.date} />
        </HStack>
        <Skeleton width={250} height={24} className={classNames.title} />
        <Skeleton height={200} className={classNames.img} />
        <HStack className={classNames.footer}>
          <Skeleton height={36} width={200} />
        </HStack>
      </Card>
    );
  }

  return (
    <Card className={containerClassNames}>
      <VStack gap="8">
        <Skeleton width="100%" height={200} className={classNames.img} />
        <Skeleton width={130} height={16} />
        <Skeleton width={150} height={16} className={classNames.title} />
      </VStack>
    </Card>
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
