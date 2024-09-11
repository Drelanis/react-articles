import { memo } from 'react';

export const GenericMemoWrapper: <Type>(component: Type) => Type = memo;
