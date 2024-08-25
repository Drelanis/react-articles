import { useState } from 'react';

export const useModel = () => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(true);

  const onToggle = () => {
    setIsCollapsed((prev) => !prev);
  };

  return { onToggle, isCollapsed };
};
