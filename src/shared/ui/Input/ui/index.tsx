import { FC, InputHTMLAttributes, memo } from 'react';

import { useModel } from '../model';

import classNames from './index.module.scss';

import { buildClassNames } from '$shared/utils';

type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'value' | 'onChange'
>;

interface Props extends HTMLInputProps {
  autofocus?: boolean;
  className?: string;
  onChange?: (value: string) => void;
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

  const { containerClassNames, updatedCaretPosition } = useStyles({
    className,
    caretPosition,
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
        {isFocused && (
          <span className={classNames.caret} style={updatedCaretPosition} />
        )}
      </div>
    </div>
  );
});

type UseStylesParams = {
  caretPosition: number;
} & Pick<Props, 'className'>;

const useStyles = (params: UseStylesParams) => {
  const { caretPosition, className = '' } = params;

  const containerClassNames = buildClassNames({
    classNames: classNames.inputWrapper,
    additional: [className],
  });

  const updatedCaretPosition = {
    left: `${caretPosition}px`,
  };

  return { containerClassNames, updatedCaretPosition };
};
