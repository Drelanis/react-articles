import { useTranslation } from 'react-i18next';

import { GenericMemoWrapper } from '$lib';
import { Card, Input } from '$shared/ui';

type Props<Type extends string> = {
  className: string;
  onChangeSearch: (value: Type) => void;
  value: Type;
};

export const Search = GenericMemoWrapper(
  <Type extends string>(props: Props<Type>) => {
    const { className, value, onChangeSearch } = props;

    const { t } = useTranslation();

    return (
      <Card className={className}>
        <Input
          onChange={onChangeSearch}
          value={value}
          placeholder={t('search')}
        />
      </Card>
    );
  },
);
