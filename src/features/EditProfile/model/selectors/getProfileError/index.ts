import { StateSchema } from '$shared';

export const getProfileError = (state: StateSchema) => state.profile?.error;
