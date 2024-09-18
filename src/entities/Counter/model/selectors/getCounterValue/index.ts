import { buildAppSelector } from '$shared';

export const [useCounterValue, getCounterValue] = buildAppSelector(
  (state) => state.counter?.value,
);
