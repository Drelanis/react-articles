import { CSSProperties, memo, useMemo } from 'react';

import UserIcon from '../../../assets/icons/user-filled.svg';

import classNames from './index.module.scss';

import { AppImage, Icon, Skeleton } from '$shared/ui';
import { buildClassNames } from '$shared/utils';

interface Props {
  alt?: string;
  className?: string;
  fallbackInverted?: boolean;
  size?: number;
  src?: string;
}

export const Avatar = memo((props: Props) => {
  const { className, src, size = 100, alt, fallbackInverted = false } = props;

  const styles = useMemo<CSSProperties>(() => {
    return {
      width: size,
      height: size,
    };
  }, [size]);

  const { imageClassNames } = useStyles({ className });

  const fallback = <Skeleton width={size} height={size} border="50%" />;

  const errorFallback = (
    <Icon
      inverted={fallbackInverted}
      width={size}
      height={size}
      Svg={UserIcon}
    />
  );

  return (
    <AppImage
      fallback={fallback}
      errorFallback={errorFallback}
      src={src}
      alt={alt}
      style={styles}
      className={imageClassNames}
    />
  );
});

type UseStylesParams = Pick<Props, 'className'>;

const useStyles = (params: UseStylesParams) => {
  const { className = '' } = params;

  const imageClassNames = buildClassNames({
    classNames: classNames.avatar,
    additional: [className],
  });

  return { imageClassNames };
};
