import { render } from 'react-dom';
import classNames from './style.module.scss';

render(
  <div className={classNames.hello}>HelloWorld123123</div>,
  document.getElementById('root'),
);
