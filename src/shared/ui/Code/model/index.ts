import { useCallback } from 'react';

type Params = {
  text: string;
};

export const useModel = (params: Params) => {
  const { text } = params;

  const onCopy = useCallback(async () => {
    await navigator.clipboard.writeText(text);
  }, [text]);

  return { onCopy };
};
