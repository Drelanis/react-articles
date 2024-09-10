import { memo, MutableRefObject, ReactNode, useRef } from 'react';

import classNames from './index.module.scss';

import { useInfiniteScroll } from '$shared/hooks';
import { buildClassNames } from '$shared/utils';

type Props = {
  children: ReactNode;
  className?: string;
  onScrollEnd?: () => void;
};

export const Page = memo((props: Props) => {
  const { className, children, onScrollEnd } = props;
  const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
  const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;

  useInfiniteScroll({
    triggerRef,
    wrapperRef,
    callback: onScrollEnd,
  });

  const { containerClassNames } = useStyles({ className });

  return (
    <section ref={wrapperRef} className={containerClassNames}>
      {children}
      <div ref={triggerRef} />
    </section>
  );
});

type StyleProps = Pick<Props, 'className'>;

const useStyles = (params: StyleProps) => {
  const { className = '' } = params;

  const containerClassNames = buildClassNames({
    classNames: classNames.page,
    additional: [className],
  });

  return { containerClassNames };
};
