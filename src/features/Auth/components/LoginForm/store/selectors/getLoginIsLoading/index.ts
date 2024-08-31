import { StateSchema } from '$shared';

export const getLoginIsLoading = (state: StateSchema) =>
  state.login?.isLoading || false;
