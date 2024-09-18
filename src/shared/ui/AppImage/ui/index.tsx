import { ImgHTMLAttributes, memo, ReactElement } from 'react';

import { useLogic } from '../model';

interface AppImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  className?: string;
  errorFallback?: ReactElement;
  fallback?: ReactElement;
}

export const AppImage = memo((props: AppImageProps) => {
  const {
    className,
    src,
    alt = 'image',
    errorFallback,
    fallback,
    ...otherProps
  } = props;

  const { isLoading, hasError } = useLogic({ src });

  if (isLoading && fallback) {
    return fallback;
  }

  if (hasError && errorFallback) {
    return errorFallback;
  }

  return <img className={className} src={src} alt={alt} {...otherProps} />;
});
