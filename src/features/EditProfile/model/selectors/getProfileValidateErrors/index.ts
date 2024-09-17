import { StateSchema } from '$shared';

export const getProfileValidateErrors = (state: StateSchema) =>
  state.profile?.validationError;
