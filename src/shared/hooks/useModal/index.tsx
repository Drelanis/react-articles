import { useCallback, useState } from 'react';

type Params = {
  onCloseAction?: () => void;
};

export const useModal = (params: Params) => {
  const { onCloseAction } = params;

  const [isModalOpen, setIsModalClose] = useState<boolean>(false);

  const onToggleModal = useCallback(() => {
    setIsModalClose((prev) => !prev);

    if (onCloseAction) {
      onCloseAction();
    }
  }, [onCloseAction]);

  return { isModalOpen, onToggleModal };
};
