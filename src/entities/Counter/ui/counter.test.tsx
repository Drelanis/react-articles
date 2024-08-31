import { userEvent } from '@storybook/testing-library';
import { screen } from '@testing-library/react';

import { Counter } from '.';
import { componentRender } from '$shared';

describe('Counter UI', () => {
  const initialState = { counter: { value: 10 } };
  const initValue = String(initialState.counter.value);

  test('render counter component', async () => {
    await componentRender({ component: <Counter />, initialState });
    expect(screen.getByTestId('value-title')).toHaveTextContent(initValue);
  });

  test('increment', async () => {
    await componentRender({ component: <Counter />, initialState });

    userEvent.click(screen.getByTestId('increment-button'));
    expect(screen.getByTestId('value-title')).toHaveTextContent('11');
  });

  test('decrement', async () => {
    await componentRender({ component: <Counter />, initialState });

    userEvent.click(screen.getByTestId('decrement-button'));
    expect(screen.getByTestId('value-title')).toHaveTextContent('9');
  });
});
