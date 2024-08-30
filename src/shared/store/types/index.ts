// TODO Fix this problem!!!
import { CounterSchema, UserSchema } from '$entities';

export type StateSchema = {
  counter: CounterSchema;
  user: UserSchema;
};
