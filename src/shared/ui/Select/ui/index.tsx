import { memo, useMemo } from 'react';

import { useModel } from '../model';

import classNames from './index.module.scss';

import { buildClassNames } from '$shared/utils';

export type SelectOption = {
  content: string;
  value: string;
};

type Props = {
  className?: string;
  label?: string;
  onChange?: (value: string) => void;
  options?: SelectOption[];
  readonly?: boolean;
  value?: string;
};

export const Select = memo((props: Props) => {
  const { className, label, options, onChange, value, readonly } = props;

  const { onChangeHandler } = useModel({ onChange });

  const optionsList = useMemo(
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

  const { containerClassName, labelClassNames } = useStyles({
    className,
    readonly,
  });

  return (
    <div className={containerClassName}>
      {label && <span className={labelClassNames}>{`${label}>`}</span>}
      <select
        disabled={readonly}
        className={classNames.select}
        value={value}
        onChange={onChangeHandler}
      >
        {optionsList}
      </select>
    </div>
  );
});

type UseStylesParams = Pick<Props, 'className' | 'readonly'>;

const useStyles = (params: UseStylesParams) => {
  const { className = '', readonly } = params;

  const containerClassName = buildClassNames({
    classNames: classNames.wrapper,
    additional: [className],
    mods: {
      [classNames.readOnly]: readonly,
    },
  });

  const labelClassNames = buildClassNames({
    classNames: classNames.label,
  });

  return { containerClassName, labelClassNames };
};
