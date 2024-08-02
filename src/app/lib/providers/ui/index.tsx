import { FC } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'shared';

export const AppProviders: FC = (props) => {
  const { children } = props;

  return (
    <BrowserRouter>
      <ThemeProvider>{children}</ThemeProvider>
    </BrowserRouter>
  );
};
