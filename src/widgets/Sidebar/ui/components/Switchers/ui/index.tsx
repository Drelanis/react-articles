import { FC } from 'react';

import classNames from './index.module.scss';

import { LanguageSwitcher, ThemeSwitcher } from '$entities';
import { buildClassNames } from '$shared';

type Props = {
  column: boolean;
};

export const Switchers: FC<Props> = (props) => {
  const { column } = props;

  const { containerClassNames, languageButtonClassNames } = useStyles({
    column,
  });

  return (
    <div className={containerClassNames}>
      <ThemeSwitcher />
      <LanguageSwitcher className={languageButtonClassNames} isShort={column} />
    </div>
  );
};

const useStyles = (params: Props) => {
  const { column } = params;

  const mods = {
    [classNames.containerColumn]: column,
  };

  const containerClassNames = buildClassNames({
    mods,
    classNames: classNames.container,
  });

  const languageButtonClassNames = buildClassNames({
    classNames: column ? '' : classNames.language,
  });

  return { containerClassNames, languageButtonClassNames };
};
