export type User = {
  id: string;
  userName: string;
};

export type UserSchema = {
  authData?: User;
};

export const userInitialState: UserSchema = {};
