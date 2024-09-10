import { FC, memo } from 'react';

import classNames from './index.module.scss';

import { buildClassNames, Card, ListView, Skeleton } from '$shared';

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
        <div className={classNames.header}>
          <Skeleton border="50%" height={30} width={30} />
          <Skeleton width={150} height={16} className={classNames.username} />
          <Skeleton width={150} height={16} className={classNames.date} />
        </div>
        <Skeleton width={250} height={24} className={classNames.title} />
        <Skeleton height={200} className={classNames.img} />
        <div className={classNames.footer}>
          <Skeleton height={36} width={200} />
        </div>
      </Card>
    );
  }

  return (
    <Card className={containerClassNames}>
      <div className={classNames.imageWrapper}>
        <Skeleton width="100%" height={200} className={classNames.img} />
      </div>
      <div className={classNames.infoWrapper}>
        <Skeleton width={130} height={16} />
      </div>
      <Skeleton width={150} height={16} className={classNames.title} />
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
