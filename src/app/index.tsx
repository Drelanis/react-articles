import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'shared';
import { App } from './entrance';
import './styles/index.main.scss';

const rootElement = document.getElementById('root');

render(
  <BrowserRouter>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>,
  rootElement,
);
