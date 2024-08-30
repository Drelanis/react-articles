import { useDispatch } from 'react-redux';

import { loginActions } from '../components';

import { useModal } from '$shared';

export const useModel = () => {
  const dispatch = useDispatch();

  const onCloseAction = () => {
    dispatch(loginActions.resetForm());
  };

  const { onToggleModal, isModalOpen } = useModal({ onCloseAction });

  return { onToggleModal, isModalOpen };
};
