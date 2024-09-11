import { ChangeEvent, useMemo } from 'react';

import { SelectOption } from '../types';
import classNames from '../ui/index.module.scss';

type Params<Type extends string> = {
  onChange?: (value: Type) => void;
  options?: SelectOption<Type>[];
};

export const useModel = <Type extends string>(params: Params<Type>) => {
  const { onChange, options } = params;

  const onChangeHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    if (onChange) {
      onChange(event.target.value as Type);
    }
  };

  const OptionsList = useMemo(
    () =>
      options?.map((option) => (
        <option
          className={classNames.option}
          value={option.value}
          key={option.value}
        >
          {option.content}
        </option>
      )),
    [options],
  );

  return { onChangeHandler, OptionsList };
};
