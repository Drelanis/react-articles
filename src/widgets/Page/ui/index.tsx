import { memo, MutableRefObject, ReactNode, UIEvent, useRef } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import classNames from './index.module.scss';

import { scrollRestorationActions } from '$features';
import { getScrollRestorationByPath } from '$features/ScrollRestoration/model/selectors';
import { SCROLL_SAVE_DELAY, StateSchema } from '$shared';
import {
  useAppDispatch,
  useInfiniteScroll,
  useInitialEffect,
  useThrottle,
} from '$shared/hooks';
import { buildClassNames } from '$shared/utils';

type Props = {
  children: ReactNode;
  className?: string;
  onScrollEnd?: () => void;
};

export const Page = memo((props: Props) => {
  const { className, children, onScrollEnd } = props;

  const { containerClassNames } = useStyles({ className });

  const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
  const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;

  const dispatch = useAppDispatch();
  const { pathname } = useLocation();

  const scrollPosition = useSelector((state: StateSchema) =>
    getScrollRestorationByPath(state, pathname),
  );

  useInfiniteScroll({
    triggerRef,
    wrapperRef,
    callback: onScrollEnd,
  });

  const onScroll = useThrottle((event: UIEvent<HTMLDivElement>) => {
    const scrollNumber = event.currentTarget.scrollTop ?? 0;

    dispatch(
      scrollRestorationActions.setScrollPosition({
        path: pathname,
        position: scrollNumber,
      }),
    );
  }, SCROLL_SAVE_DELAY);

  useInitialEffect(() => {
    wrapperRef.current.scrollTop = scrollPosition;
  });

  return (
    <section
      ref={wrapperRef}
      className={containerClassNames}
      onScroll={onScroll}
    >
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
