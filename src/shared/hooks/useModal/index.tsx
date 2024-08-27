import { useCallback, useState } from 'react';

export const useModal = () => {
  const [isModalOpen, setIsModalClose] = useState<boolean>(false);

  const onToggleModal = useCallback(() => {
    setIsModalClose((prev) => !prev);
  }, []);

  return { isModalOpen, onToggleModal };
};
