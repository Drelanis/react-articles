import classNames from './index.module.scss';

import { LanguageSwitcher, ThemeSwitcher } from '$entities';

export const Switchers = () => {
  return (
    <div className={classNames.container}>
      <ThemeSwitcher />
      <LanguageSwitcher className={classNames.language} />
    </div>
  );
};
