import { useCallback, useState } from 'react';

type Params = {
  onCloseAction?: () => void;
};

export const useModal = (params: Params) => {
  const { onCloseAction } = params;

  const [isModalOpen, setIsModalClose] = useState<boolean>(false);

  const onToggleModal = useCallback(() => {
    if (onCloseAction) {
      onCloseAction();
    }

    setIsModalClose((prev) => !prev);
  }, [onCloseAction]);

  return { isModalOpen, onToggleModal };
};
