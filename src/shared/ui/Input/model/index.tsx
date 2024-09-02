import { useEffect, useRef, useState } from 'react';

type Params = {
  autofocus?: boolean;
  onChange?: (value: string) => void;
};

export const useModel = (params: Params) => {
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

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
    setCaretPosition(e.target.value.length);
  };

  const onBlur = () => {
    setIsFocused(false);
  };

  const onFocus = () => {
    setIsFocused(true);
  };

  const onSelect = (event: React.SyntheticEvent<HTMLInputElement>) => {
    setCaretPosition(event.currentTarget.selectionStart || 0);
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
