/* eslint-disable i18next/no-literal-string -- exception */
import { memo } from 'react';

import { useCounterActions, useCounterValue } from '../model';

import { Button } from '$shared';

export const Counter = memo(() => {
  const value = useCounterValue();

  const { increment, decrement } = useCounterActions();

  const handleIncrement = () => increment();
  const handleDecrement = () => decrement();

  return (
    <div>
      <h1 data-testid="value-title">{value}</h1>
      <Button data-testid="increment-button" onClick={handleIncrement}>
        increment
      </Button>
      <Button data-testid="decrement-button" onClick={handleDecrement}>
        decrement
      </Button>
    </div>
  );
});
