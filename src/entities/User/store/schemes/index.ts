export type User = {
  id: string;
  username: string;
};

export type UserSchema = {
  authData?: User;
};

export const userInitialState: UserSchema = {};
