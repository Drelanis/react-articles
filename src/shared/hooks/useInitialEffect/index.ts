import { useEffect } from 'react';

export function useInitialEffect(callback: () => void) {
  useEffect(() => {
    if (PROJECT !== 'storybook') {
      callback();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps -- only one time
  }, []);
}
