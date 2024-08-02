import { render } from 'react-dom';
import { App } from './ui';
import './styles/index.main.scss';
import { AppProviders } from './lib';

const rootElement = document.getElementById('root');

render(
  <AppProviders>
    <App />
  </AppProviders>,
  rootElement,
);
