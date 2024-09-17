import { ProfileSchema } from '$entities';

export const profileInitialState: ProfileSchema = {
  readonly: true,
  isLoading: false,
  error: undefined,
  data: undefined,
  form: undefined,
};
