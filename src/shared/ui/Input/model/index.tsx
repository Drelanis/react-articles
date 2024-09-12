import { useEffect, useRef, useState } from 'react';

import { getInputFont, getTextWidth } from '../utils';

type Params<Type extends string> = {
  autofocus?: boolean;
  onChange?: (value: Type) => void;
};

export const useModel = <Type extends string>(params: Params<Type>) => {
  const { autofocus, onChange } = params;

  const ref = useRef<HTMLInputElement | null>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [caretPosition, setCaretPosition] = useState(0);

  useEffect(() => {
    if (autofocus) {
      setIsFocused(true);
      ref.current?.focus();
    }
  }, [autofocus]);

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputElement = ref.current;

    const font = getInputFont(inputElement!);
    const width = getTextWidth(event.target.value, font);

    onChange?.(event.target.value as Type);
    setCaretPosition(width);
  };

  const onBlur = () => {
    setIsFocused(false);
  };

  const onFocus = () => {
    setIsFocused(true);
  };

  const onSelect = (event: React.SyntheticEvent<HTMLDivElement, Event>) => {
    if (event.target instanceof HTMLInputElement) {
      const inputElement = event.target;
      const { selectionStart } = inputElement;

      const textBeforeCaret = inputElement.value.substring(
        0,
        selectionStart || 0,
      );

      const font = getInputFont(inputElement);
      const width = getTextWidth(textBeforeCaret, font);

      setCaretPosition(width);
    }
  };

  return {
    ref,
    isFocused,
    caretPosition,
    onChangeHandler,
    onBlur,
    onFocus,
    onSelect,
  };
};
