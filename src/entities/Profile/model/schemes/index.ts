import { ProfileSchema } from '../types';

export const profileInitialState: ProfileSchema = {
  readonly: true,
  isLoading: false,
  error: undefined,
  data: undefined,
  form: undefined,
};
