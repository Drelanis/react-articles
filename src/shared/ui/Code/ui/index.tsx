import { memo } from 'react';

import { useModel } from '../model';

import classNames from './index.module.scss';

import CopyIcon from '$shared/assets/icons/copy-20-20.svg';
import { Button, ButtonVariant } from '$shared/ui';
import { buildClassNames } from '$shared/utils';

type Props = {
  text: string;
  className?: string;
};

export const Code = memo((props: Props) => {
  const { text, className } = props;

  const { containerClassNames } = useStyles({ className });

  const { onCopy } = useModel({ text });

  return (
    <pre className={containerClassNames}>
      <Button
        onClick={onCopy}
        className={classNames.copyBtn}
        variant={ButtonVariant.CLEAR}
      >
        <CopyIcon className={classNames.copyIcon} />
      </Button>
      <code>{text}</code>
    </pre>
  );
});

type UseStylesParams = Pick<Props, 'className'>;

const useStyles = (params: UseStylesParams) => {
  const { className = '' } = params;

  const containerClassNames = buildClassNames({
    classNames: classNames.code,
    additional: [className],
  });

  return { containerClassNames };
};
