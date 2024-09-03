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
      options?.map((opt) => (
        <option className={classNames.option} value={opt.value} key={opt.value}>
          {opt.content}
        </option>
      )),
    [options],
  );

  const { containerClassName } = useStyles({ className });

  return (
    <div className={containerClassName}>
      {label && <span className={classNames.label}>{`${label}>`}</span>}
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

type UseStylesParams = Pick<Props, 'className'>;

const useStyles = (params: UseStylesParams) => {
  const { className = '' } = params;

  const containerClassName = buildClassNames({
    classNames: classNames.wrapper,
    additional: [className],
  });

  return { containerClassName };
};
