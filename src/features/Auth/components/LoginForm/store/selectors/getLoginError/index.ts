import { ErrorHints, StateSchema } from '$shared';

export const getLoginError = (state: StateSchema): ErrorHints =>
  state.login?.error || '';
