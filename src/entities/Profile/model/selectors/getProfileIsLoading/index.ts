import { StateSchema } from '$shared';

export const getProfileIsLoading = (state: StateSchema) => {
  return state.profile?.isLoading;
};
