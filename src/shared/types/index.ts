import { RouteProps } from 'react-router-dom';

export type AppRoutesProps = RouteProps & {
  authOnly?: boolean;
};

export type DropdownDirection =
  | 'top left'
  | 'top right'
  | 'bottom left'
  | 'bottom right';
