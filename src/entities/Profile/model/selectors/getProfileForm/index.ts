import { StateSchema } from '$shared';

export const getProfileForm = (state: StateSchema) => state.profile?.form;
