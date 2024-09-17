import { UserRole } from '../constants';

export type User = {
  id: string;
  userName: string;
  avatar?: string;
  roles?: UserRole[];
};

export type UserSchema = {
  isMounted: boolean;
  authData?: User;
};

export const userInitialState: UserSchema = {
  isMounted: false,
};
