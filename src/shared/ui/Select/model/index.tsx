import { ChangeEvent } from 'react';

type Params = {
  onChange?: (value: string) => void;
};

export const useModel = (params: Params) => {
  const { onChange } = params;

  const onChangeHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    if (onChange) {
      onChange(event.target.value);
    }
  };

  return { onChangeHandler };
};
