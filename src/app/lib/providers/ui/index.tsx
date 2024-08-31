import { FC } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { ErrorBoundary, StoreProvider, ThemeProvider } from '$shared';
import { ErrorCatcher } from '$widgets';

export const AppProviders: FC = (props) => {
  const { children } = props;

  return (
    <StoreProvider>
      <BrowserRouter>
        <ThemeProvider>
          <ErrorBoundary componentToShow={<ErrorCatcher />}>
            {children}
          </ErrorBoundary>
        </ThemeProvider>
      </BrowserRouter>
    </StoreProvider>
  );
};
