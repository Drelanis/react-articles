import { ReactNode, useEffect, useMemo, useRef, useState } from 'react';

import { getAsyncAnimationModules, HeadlessUiType, UiContext } from '../lib';

export const UILibraryProvider = ({ children }: { children: ReactNode }) => {
  const HeadlessUi = useRef<HeadlessUiType>();

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    void getAsyncAnimationModules().then((Headless) => {
      HeadlessUi.current = Headless;

      setIsLoaded(true);
    });
  }, []);

  const value = useMemo(
    () => ({
      Headless: HeadlessUi.current,
      isLoaded,
    }),
    [isLoaded],
  );

  return <UiContext.Provider value={value}>{children}</UiContext.Provider>;
};
