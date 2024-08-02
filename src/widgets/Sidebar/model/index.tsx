import { useState } from 'react';

export const useModel = () => {
  const [collapsed, setCollapsed] = useState<boolean>(true);

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  return { onToggle, collapsed };
};
