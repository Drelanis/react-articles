// TODO: Fix jest imports
import { GenericMemoWrapper } from '../../../lib';
import { useModel } from '../model';
import { SelectOption } from '../types';

import classNames from './index.module.scss';

import { buildClassNames } from '$shared/utils';

type Props<Type extends string> = {
  className?: string;
  label?: string;
  onChange?: (value: Type) => void;
  options?: SelectOption<Type>[];
  readonly?: boolean;
  value?: Type;
};

export const Select = GenericMemoWrapper(
  <Type extends string>(props: Props<Type>) => {
    const { className, label, options, onChange, value, readonly } = props;

    const { onChangeHandler, OptionsList } = useModel({ onChange, options });

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
          {OptionsList}
        </select>
      </div>
    );
  },
);

type UseStylesParams = Pick<Props<string>, 'className' | 'readonly'>;

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
