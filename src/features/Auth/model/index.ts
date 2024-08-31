import { useModal } from '$shared';

export const useModel = () => {
  const { onToggleModal, isModalOpen } = useModal({});

  return { onToggleModal, isModalOpen };
};
