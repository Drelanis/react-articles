import { FC } from 'react';
import { Link as RRDLink, LinkProps } from 'react-router-dom';
import { useClassNames } from 'shared/hooks';

import { AppLinkTheme } from '../constants';

import classNames from './index.module.scss';

type Props = {
  children?: string;
  className?: string[];
  theme?: AppLinkTheme;
} & Pick<LinkProps, 'to'>;

export const Link: FC<Props> = (props) => {
  const {
    to,
    className = [],
    children,
    theme = AppLinkTheme.PRIMARY,
    ...otherProps
  } = props;

  const linkClassNames = useClassNames({
    classNames: classNames.link,
    additional: [classNames[theme], ...className],
  });

  return (
    <RRDLink to={to} className={linkClassNames} {...otherProps}>
      {children}
    </RRDLink>
  );
};
