import { memo } from 'react';

import { ArticleCodeBlockType } from '$entities/Article/model';
import { buildClassNames, Code, HStack } from '$shared';

type Props = {
  block: ArticleCodeBlockType;
  className?: string;
};

export const ArticleCodeBlock = memo((props: Props) => {
  const { className, block } = props;

  const { containerClassNames } = useStyles({ className });

  return (
    <HStack max className={containerClassNames}>
      <Code text={block.code} />
    </HStack>
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
