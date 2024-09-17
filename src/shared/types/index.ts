import { RouteProps } from 'react-router-dom';

import { UserRole } from '$entities';

export type AppRoutesProps = RouteProps & {
  authOnly?: boolean;
  roles?: UserRole[];
};

export type DropdownDirection =
  | 'top left'
  | 'top right'
  | 'bottom left'
  | 'bottom right';
