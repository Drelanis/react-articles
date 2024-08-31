import { StateSchema } from '$shared';

export const getUserAuthData = (state: StateSchema) => state.user.authData;
