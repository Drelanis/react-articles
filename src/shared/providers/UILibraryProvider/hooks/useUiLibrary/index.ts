import { useContext } from 'react';

import { UiContext, UiContextPayload } from '../../lib';

export const useUiLibrary = () => {
  return useContext(UiContext) as Required<UiContextPayload>;
};
