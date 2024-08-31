import { StateSchema } from '$shared';

export const getLoginUserName = (state: StateSchema) =>
  state.login?.userName || '';
