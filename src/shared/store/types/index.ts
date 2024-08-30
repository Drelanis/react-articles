// TODO Fix this problem!!!
import { CounterSchema, UserSchema } from '$entities';
import { LoginSchema } from '$features';

export type StateSchema = {
  counter: CounterSchema;
  login: LoginSchema;
  user: UserSchema;
};
