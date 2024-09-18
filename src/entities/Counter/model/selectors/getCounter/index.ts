import { buildAppSelector, StateSchema } from '$shared';

export const [useCounterValue, getCounterValue] = buildAppSelector(
  (state: StateSchema) => state.counter,
);
