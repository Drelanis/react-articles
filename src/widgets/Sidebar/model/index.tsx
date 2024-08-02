import { useState } from 'react';

export const useModel = () => {
  const [collapsed, setCollapsed] = useState<boolean>(false);

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  return { onToggle, collapsed };
};
