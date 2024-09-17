import { StateSchema } from '$shared';

export const getProfileReadonly = (state: StateSchema) =>
  state.profile?.readonly;
