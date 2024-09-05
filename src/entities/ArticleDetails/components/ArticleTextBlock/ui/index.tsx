import { memo } from 'react';

import classNames from './index.module.scss';

import { ArticleTextBlockType } from '$entities/ArticleDetails/model';
import { buildClassNames, Text } from '$shared';

type Props = {
  block: ArticleTextBlockType;
  className?: string;
};

export const ArticleTextBlock = memo((props: Props) => {
  const { className, block } = props;
  const { containerClassNames } = useStyles({ className });

  return (
    <div className={containerClassNames}>
      {block.title && <Text title={block.title} className={classNames.title} />}
      {block.paragraphs.map((paragraph) => (
        <Text
          key={paragraph}
          text={paragraph}
          className={classNames.paragraph}
        />
      ))}
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
