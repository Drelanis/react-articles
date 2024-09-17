import { memo } from 'react';

import { ArticleImageBlockType } from '$entities/Article/model';
import { buildClassNames, Text, TextAlign, VStack } from '$shared';

type Props = {
  block: ArticleImageBlockType;
  className?: string;
};

export const ArticleImageBlock = memo((props: Props) => {
  const { className, block } = props;

  const { containerClassNames } = useStyles({ className });

  return (
    <VStack max align="center" className={containerClassNames}>
      <img src={block.src} alt={block.title} />
      {block.title && <Text text={block.title} align={TextAlign.CENTER} />}
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
