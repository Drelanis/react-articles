import { render } from 'react-dom';

import { AppProviders } from './lib';
import { App } from './ui';

import './styles/index.main.scss';

const rootElement = document.getElementById('root');

render(
  <AppProviders>
    <App />
  </AppProviders>,
  rootElement,
);
