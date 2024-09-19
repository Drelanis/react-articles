import { InputHTMLAttributes } from 'react';

import { useModel } from '../model';

import classNames from './index.module.scss';

import { GenericMemoWrapper } from '$lib';
import { buildClassNames } from '$shared/utils';

type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'value' | 'onChange' | 'readOnly'
>;

interface Props<Type extends string> extends HTMLInputProps {
  autofocus?: boolean;
  className?: string;
  onChange?: (value: Type) => void;
  readOnly?: boolean;
  value?: Type;
}

export const Input = GenericMemoWrapper(
  <Type extends string>(props: Props<Type>) => {
    const {
      className,
      value,
      onChange,
      type = 'text',
      placeholder,
      autofocus,
      readOnly,
      ...otherProps
    } = props;

    const {
      ref,
      isFocused,
      caretPosition,
      onChangeHandler,
      onBlur,
      onFocus,
      onSelect,
    } = useModel({ autofocus, onChange });

    const isCaretVisible = isFocused && !readOnly;

    const { containerClassNames, updatedCaretPosition } = useStyles({
      className,
      caretPosition,
      readOnly,
    });

    return (
      <div className={containerClassNames}>
        {placeholder && (
          <div className={classNames.placeholder}>{`${placeholder}>`}</div>
        )}
        <div className={classNames.caretWrapper}>
          <input
            ref={ref}
            type={type}
            value={value}
            onChange={onChangeHandler}
            className={classNames.input}
            onFocus={onFocus}
            onBlur={onBlur}
            onSelect={onSelect}
            {...otherProps}
          />
          {isCaretVisible && isFocused && (
            <span className={classNames.caret} style={updatedCaretPosition} />
          )}
        </div>
      </div>
    );
  },
);

type UseStylesParams<Type extends string> = {
  caretPosition: number;
} & Pick<Props<Type>, 'className' | 'readOnly'>;

const useStyles = <Type extends string>(params: UseStylesParams<Type>) => {
  const { caretPosition, className = '', readOnly } = params;

  const containerClassNames = buildClassNames({
    classNames: classNames.inputWrapper,
    additional: [className],
    mods: {
      [classNames.readOnly]: readOnly,
    },
  });

  const updatedCaretPosition = {
    left: `${caretPosition}px`,
  };

  return { containerClassNames, updatedCaretPosition };
};
