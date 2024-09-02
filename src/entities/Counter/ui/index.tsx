/* eslint-disable i18next/no-literal-string -- TODO */
import { memo } from 'react';
import { useSelector } from 'react-redux';

import { counterActions, getCounterValue } from '../model';

import { Button, useAppDispatch } from '$shared';

export const Counter = memo(() => {
  const dispatch = useAppDispatch();
  const value = useSelector(getCounterValue);

  const increment = () => dispatch(counterActions.increment());
  const decrement = () => dispatch(counterActions.decrement());

  return (
    <div>
      <h1 data-testid="value-title">{value}</h1>
      <Button data-testid="increment-button" onClick={increment}>
        increment
      </Button>
      <Button data-testid="decrement-button" onClick={decrement}>
        decrement
      </Button>
    </div>
  );
});
