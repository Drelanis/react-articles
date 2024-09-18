import { ImgHTMLAttributes, useLayoutEffect, useState } from 'react';

interface Params extends ImgHTMLAttributes<HTMLImageElement> {}

export const useLogic = (params: Params) => {
  const { src } = params;

  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useLayoutEffect(() => {
    const img = new Image();

    img.src = src ?? '';
    img.onload = () => {
      setIsLoading(false);
    };
    img.onerror = () => {
      setIsLoading(false);
      setHasError(true);
    };
  }, [src]);

  return { isLoading, hasError };
};
