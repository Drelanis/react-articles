import { useSelector } from 'react-redux';

import { StateSchema } from '$shared/store';

type Selector<T> = (state: StateSchema) => T;
type Result<T> = [() => T, Selector<T>];

export function buildAppSelector<T>(selector: Selector<T>): Result<T> {
  const useSelectorHook = () => {
    return useSelector(selector);
  };

  return [useSelectorHook, selector];
}
