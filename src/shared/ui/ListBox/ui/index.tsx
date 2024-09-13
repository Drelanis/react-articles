import { Listbox as HListBox } from '@headlessui/react';
import { FC, Fragment, memo, ReactNode } from 'react';

import classNames from './index.module.scss';

import { Button } from '$shared/ui/Button';
import { HStack } from '$shared/ui/Stack';
import { buildClassNames } from '$shared/utils';

export interface ListBoxItem {
  content: ReactNode;
  value: string;
  disabled?: boolean;
}

type DropdownDirection = 'top' | 'bottom';

type Props = {
  onChange: (value: string) => void;
  className?: string;
  defaultValue?: string;
  direction?: DropdownDirection;
  items?: ListBoxItem[];
  label?: string;
  readonly?: boolean;
  value?: string;
};

const mapDirectionClass: Record<DropdownDirection, string> = {
  bottom: '',
  top: classNames.optionsTop,
};

export const ListBox: FC<Props> = memo((props: Props) => {
  const {
    className,
    items,
    value,
    defaultValue,
    onChange,
    readonly,
    direction,
    label,
  } = props;

  const { hListBoxClassNames, optionsClassNames } = useStyles({
    className,
    direction,
  });

  return (
    <HStack gap="4">
      {label && <span>{`${label}>`}</span>}
      <HListBox
        disabled={readonly}
        as="div"
        className={hListBoxClassNames}
        value={value}
        onChange={onChange}
      >
        <HListBox.Button className={classNames.trigger}>
          <Button disabled={readonly}>{value ?? defaultValue}</Button>
        </HListBox.Button>
        <HListBox.Options className={optionsClassNames}>
          {items?.map((item) => (
            <HListBox.Option
              key={item.value}
              value={item.value}
              disabled={item.disabled}
              as={Fragment}
            >
              {({ active, selected }) => (
                <li
                  className={buildClassNames({
                    classNames: classNames.item,
                    mods: {
                      [classNames.active]: active,
                      [classNames.disabled]: item.disabled,
                    },
                  })}
                >
                  {selected && '!!!'}
                  {item.content}
                </li>
              )}
            </HListBox.Option>
          ))}
        </HListBox.Options>
      </HListBox>
    </HStack>
  );
});

type StyleProps = Pick<Props, 'className' | 'direction'>;

const useStyles = (params: StyleProps) => {
  const { className = '', direction = 'bottom' } = params;

  const hListBoxClassNames = buildClassNames({
    classNames: classNames.listBox,
    additional: [className],
  });

  const optionsClasses = [mapDirectionClass[direction]];

  const optionsClassNames = buildClassNames({
    classNames: classNames.options,
    additional: optionsClasses,
  });

  return { hListBoxClassNames, optionsClassNames };
};
