import { Story } from '@storybook/react';

import { ThemeProvider, ThemeVariants } from '$shared/providers';

export const ThemeDecorator =
  (theme: ThemeVariants) => (StoryComponent: Story) => {
    return (
      <ThemeProvider initialTheme={theme}>
        <div className={`app ${theme}`}>
          <StoryComponent />
        </div>
      </ThemeProvider>
    );
  };
