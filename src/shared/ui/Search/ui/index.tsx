import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { Card, Input } from '$shared';

type Props = {
  className: string;
  onChangeSearch: (value: string) => void;
  value: string;
};

export const Search: FC<Props> = (props) => {
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
};
