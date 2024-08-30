import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { LoginForm } from '../components';

import { Button, ButtonVariant, Modal, useModal } from '$shared';

type Props = {
  classNames?: string;
};

export const AuthByUserName: FC<Props> = (props) => {
  const { classNames } = props;

  const { onToggleModal, isModalOpen } = useModal();

  const { t } = useTranslation();

  return (
    <div className={classNames}>
      <Button variant={ButtonVariant.CLEAR_INVERTED} onClick={onToggleModal}>
        {t('login')}
      </Button>
      <Modal isOpen={isModalOpen} onClose={onToggleModal} lazy>
        <LoginForm />
      </Modal>
    </div>
  );
};
