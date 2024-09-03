import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { buildClassNames, Currency, Select } from '$shared';

type Props = {
  className?: string;
  onChange?: (value: Currency) => void;
  readonly?: boolean;
  value?: Currency;
};

const options = [
  { value: Currency.UAH, content: Currency.UAH },
  { value: Currency.EUR, content: Currency.EUR },
  { value: Currency.USD, content: Currency.USD },
];

export const CurrencySelect = memo(
  ({ className, value, onChange, readonly }: Props) => {
    const { t } = useTranslation('profile');

    const onChangeHandler = useCallback(
      (currentValue: string) => {
        onChange?.(currentValue as Currency);
      },
      [onChange],
    );

    const { selectClassNames } = useStyles({ className });

    return (
      <Select
        className={selectClassNames}
        label={t('currency')}
        options={options}
        value={value}
        onChange={onChangeHandler}
        readonly={readonly}
      />
    );
  },
);

type UseStylesParams = Pick<Props, 'className'>;

const useStyles = (params: UseStylesParams) => {
  const { className = '' } = params;

  const selectClassNames = buildClassNames({
    classNames: className,
  });

  return { selectClassNames };
};
