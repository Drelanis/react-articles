import { FC, ReactNode } from 'react';

import { useModel } from '../model';

import classNames from './index.module.scss';

import { Portal } from '$shared/ui/Portal';
import { buildClassNames } from '$shared/utils';

type Props = {
  children?: ReactNode;
  className?: string;
  isOpen?: boolean;
  lazy?: boolean;
  onClose?: () => void;
};

export const Modal: FC<Props> = (props) => {
  const { className, children, isOpen, lazy, onClose } = props;

  const { isClosing, isMounted, onContentClick, closeHandler } = useModel({
    isOpen,
    onClose,
    lazy,
  });

  const { containerClassNames } = useStyles({ isClosing, isOpen, className });

  if ((lazy && !isMounted) || !isOpen) {
    return null;
  }

  return (
    <Portal>
      <div className={containerClassNames}>
        <div className={classNames.overlay} onClick={closeHandler}>
          <div className={classNames.content} onClick={onContentClick}>
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
};

type StyleParams = {
  isClosing: boolean;
} & Pick<Props, 'isOpen' | 'className'>;

const useStyles = (params: StyleParams) => {
  const { isClosing, isOpen, className = '' } = params;

  const mods = {
    [classNames.opened]: isOpen,
    [classNames.isClosing]: isClosing,
  };

  const containerClassNames = buildClassNames({
    classNames: classNames.modal,
    mods,
    additional: [className],
  });

  return { containerClassNames };
};
