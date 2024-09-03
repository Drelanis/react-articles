import { FC, InputHTMLAttributes, memo } from 'react';

import { useModel } from '../model';

import classNames from './index.module.scss';

import { buildClassNames } from '$shared/utils';

type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'value' | 'onChange' | 'readOnly'
>;

interface Props extends HTMLInputProps {
  autofocus?: boolean;
  className?: string;
  onChange?: (value: string) => void;
  readOnly?: boolean;
  value?: string;
}

export const Input: FC<Props> = memo((props) => {
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
});

type UseStylesParams = {
  caretPosition: number;
} & Pick<Props, 'className' | 'readOnly'>;

const useStyles = (params: UseStylesParams) => {
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
