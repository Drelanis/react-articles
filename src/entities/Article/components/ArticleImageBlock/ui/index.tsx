import { memo } from 'react';

import classNames from './index.module.scss';

import { ArticleImageBlockType } from '$entities/Article/model';
import { buildClassNames, Text, TextAlign } from '$shared';

type Props = {
  block: ArticleImageBlockType;
  className?: string;
};

export const ArticleImageBlock = memo((props: Props) => {
  const { className, block } = props;

  const { containerClassNames } = useStyles({ className });

  return (
    <div className={containerClassNames}>
      <img src={block.src} alt={block.title} className={classNames.image} />
      {block.title && <Text text={block.title} align={TextAlign.CENTER} />}
    </div>
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
