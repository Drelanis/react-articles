import { ReactNode } from 'react';

export type TabItem<Type extends string> = {
  content: ReactNode;
  value: Type;
};
