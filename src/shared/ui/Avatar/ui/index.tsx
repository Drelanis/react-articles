import { CSSProperties, useMemo } from 'react';

import classNames from './index.module.scss';

import { buildClassNames } from '$shared/utils';

interface Props {
  alt?: string;
  className?: string;
  size?: number;
  src?: string;
}

export const Avatar = (props: Props) => {
  const { className, src, size = 100, alt } = props;

  const styles = useMemo<CSSProperties>(() => {
    return {
      width: size,
      height: size,
    };
  }, [size]);

  const { imageClassNames } = useStyles({ className });

  return <img src={src} alt={alt} style={styles} className={imageClassNames} />;
};

type UseStylesParams = Pick<Props, 'className'>;

const useStyles = (params: UseStylesParams) => {
  const { className = '' } = params;

  const imageClassNames = buildClassNames({
    classNames: classNames.avatar,
    additional: [className],
  });

  return { imageClassNames };
};
