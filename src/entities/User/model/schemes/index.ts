export type User = {
  id: string;
  userName: string;
  avatar?: string;
};

export type UserSchema = {
  isMounted: boolean;
  authData?: User;
};

export const userInitialState: UserSchema = {
  isMounted: false,
};
