import { StateSchema } from '$shared';

export const getLoginPassword = (state: StateSchema) =>
  state.login?.password || '';
