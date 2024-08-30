import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { LoginForm } from '../components';
import { useModel } from '../model';

import { Button, ButtonVariant, Modal } from '$shared';

type Props = {
  classNames?: string;
};

export const Auth: FC<Props> = (props) => {
  const { classNames } = props;

  const { t } = useTranslation();

  const { onToggleModal, isModalOpen } = useModel();

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
