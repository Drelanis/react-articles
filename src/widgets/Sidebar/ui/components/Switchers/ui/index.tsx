import { ThemeSwitcher, LanguageSwitcher } from 'entities';
import classNames from './index.module.scss';

export const Switchers = () => {
  return (
    <div className={classNames.container}>
      <ThemeSwitcher />
      <LanguageSwitcher className={classNames.language} />
    </div>
  );
};
