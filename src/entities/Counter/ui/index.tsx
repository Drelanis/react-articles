/* eslint-disable i18next/no-literal-string -- TODO */
import { useDispatch, useSelector } from 'react-redux';

import { counterActions, getCounterValue } from '../state';

import { Button } from '$shared';

export const Counter = () => {
  const dispatch = useDispatch();
  const value = useSelector(getCounterValue);

  const increment = () => dispatch(counterActions.increment());
  const decrement = () => dispatch(counterActions.decrement());

  return (
    <div>
      <h1 data-testid="value-title">{value}</h1>
      <Button data-testid="increment-btn" onClick={increment}>
        increment
      </Button>
      <Button data-testid="decrement-btn" onClick={decrement}>
        decrement
      </Button>
    </div>
  );
};
