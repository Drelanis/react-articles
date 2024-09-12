import { FC, ReactNode } from 'react';
import { Link as RRDLink, LinkProps } from 'react-router-dom';

import { AppLinkTheme } from '../constants';

import classNames from './index.module.scss';

import { buildClassNames } from '$shared/utils';

type Props = {
  children?: ReactNode;
  className?: string[];
  theme?: AppLinkTheme;
} & Pick<LinkProps, 'to' | 'target'>;

export const Link: FC<Props> = (props) => {
  const {
    to,
    className = [],
    children,
    theme = AppLinkTheme.PRIMARY,
    ...otherProps
  } = props;

  const linkClassNames = buildClassNames({
    classNames: classNames.link,
    additional: [classNames[theme], ...className],
  });

  return (
    <RRDLink to={to} className={linkClassNames} {...otherProps}>
      {children}
    </RRDLink>
  );
};
