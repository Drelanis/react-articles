import { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit';
import { Story } from '@storybook/react';

import { StoreProvider } from '$shared/providers';
import { StateSchema } from '$shared/store';

export const StoreDecorator =
  (
    state: DeepPartial<StateSchema>,
    asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>,
  ) =>
  (StoryComponent: Story) => (
    <StoreProvider initialState={state} asyncReducers={asyncReducers}>
      <StoryComponent />
    </StoreProvider>
  );
