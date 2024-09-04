import { StateSchema } from '$shared';

export const getProfileData = (state: StateSchema) => state.profile?.data;
