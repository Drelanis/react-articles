import { DeepPartial } from '@reduxjs/toolkit';
import { Story } from '@storybook/react';

import { StoreProvider } from '$shared/providers';
import { StateSchema } from '$shared/store';

export const StoreDecorator =
  (state: DeepPartial<StateSchema>) => (StoryComponent: Story) => (
    <StoreProvider initialState={state}>
      <StoryComponent />
    </StoreProvider>
  );
