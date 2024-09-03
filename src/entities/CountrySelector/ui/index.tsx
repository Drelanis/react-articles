import { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { buildClassNames, Country, Select } from '$shared';

type Props = {
  className?: string;
  onChange?: (value: Country) => void;
  readonly?: boolean;
  value?: Country;
};

const options = [
  { value: Country.UKRAINE, content: Country.UKRAINE },
  { value: Country.POLAND, content: Country.POLAND },
];

export const CountrySelect: FC<Props> = memo((props: Props) => {
  const { className, value, onChange, readonly } = props;

  const { t } = useTranslation('profile');

  const onChangeHandler = useCallback(
    (currentValue: string) => {
      onChange?.(currentValue as Country);
    },
    [onChange],
  );

  const { selectClassNames } = useStyles({ className });

  return (
    <Select
      className={selectClassNames}
      label={t('profile')}
      options={options}
      value={value}
      onChange={onChangeHandler}
      readonly={readonly}
    />
  );
});

type UseStylesParams = Pick<Props, 'className'>;

const useStyles = (params: UseStylesParams) => {
  const { className = '' } = params;

  const selectClassNames = buildClassNames({
    classNames: className,
  });

  return { selectClassNames };
};
