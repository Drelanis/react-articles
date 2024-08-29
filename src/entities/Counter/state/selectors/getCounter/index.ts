import { StateSchema } from '$app/store';

export const getCounter = (state: StateSchema) => state.counter;
