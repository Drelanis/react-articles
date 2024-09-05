import { memo } from 'react';

import classNames from './index.module.scss';

import { ArticleCodeBlock } from '$entities/ArticleDetails/model';
import { buildClassNames, Code } from '$shared';

type Props = {
  block: ArticleCodeBlock;
  className?: string;
};

export const ArticleCodeBlockComponent = memo((props: Props) => {
  const { className, block } = props;

  const { containerClassNames } = useStyles({ className });

  return (
    <div className={containerClassNames}>
      <Code text={block.code} />
    </div>
  );
});

type UseStylesParams = Pick<Props, 'className'>;

const useStyles = (params: UseStylesParams) => {
  const { className = '' } = params;

  const containerClassNames = buildClassNames({
    classNames: classNames.articleCodeBlockComponent,
    additional: [className],
  });

  return { containerClassNames };
};
