import { StateSchema } from '$shared';

export const getProfileIsLoading = (state: StateSchema) =>
  state.profile?.isLoading;
