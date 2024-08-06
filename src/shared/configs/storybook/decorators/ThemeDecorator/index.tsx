import { Story } from '@storybook/react';
import { ThemeVariants } from 'shared/providers';

export const ThemeDecorator =
  (theme: ThemeVariants) => (StoryComponent: Story) => (
    <div className={`app ${theme}`}>
      <StoryComponent />
    </div>
  );
