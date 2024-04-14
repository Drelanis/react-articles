import classNames from './index.module.scss';

export const App = () => {
  return (
    <div className="app">
      <p className={classNames.test}>Root App</p>
      <p>Hello world</p>
    </div>
  );
};
