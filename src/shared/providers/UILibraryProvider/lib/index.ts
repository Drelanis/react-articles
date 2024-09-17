import { createContext } from 'react';

export type HeadlessUiType = typeof import('@headlessui/react');

export type UiContextPayload = {
  HeadlessUi?: HeadlessUiType;
  isLoaded?: boolean;
};

export const UiContext = createContext<UiContextPayload>({});

export const getAsyncAnimationModules = async () => {
  return import('@headlessui/react');
};
