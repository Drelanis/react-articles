/* eslint-disable @typescript-eslint/no-unsafe-argument -- exception */
/* eslint-disable @typescript-eslint/no-explicit-any -- exception */
import { useCallback, useRef } from 'react';

export const useDebounce = (
  callback: (...args: any[]) => void,
  delay: number,
) => {
  const timer = useRef<NodeJS.Timeout | undefined>();

  return useCallback(
    (...args: any[]) => {
      if (timer.current) {
        clearTimeout(timer.current);
      }
      timer.current = setTimeout(() => {
        callback(...args);
      }, delay);
    },
    [callback, delay],
  );
};
