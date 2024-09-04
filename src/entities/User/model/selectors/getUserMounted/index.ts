import { StateSchema } from '$shared';

export const getUserMounted = (state: StateSchema) => state.user.isMounted;
