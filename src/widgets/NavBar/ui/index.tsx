import { useTranslation } from 'react-i18next';

import classNames from './index.module.scss';

import {
  buildClassNames,
  Button,
  ButtonVariant,
  Modal,
  useModal,
} from '$shared';

type Props = {
  className?: string[];
};

export const NavBar = (props: Props) => {
  const { className } = props;

  const { onToggleModal, isModalOpen } = useModal();

  const { t } = useTranslation();

  const { containerClassNames } = useStyles({ className });

  return (
    <div className={containerClassNames}>
      <Button
        variant={ButtonVariant.CLEAR_INVERTED}
        className={classNames.links}
        onClick={onToggleModal}
      >
        {t('login')}
      </Button>
      <Modal isOpen={isModalOpen} onClose={onToggleModal}>
        {t('login')}
      </Modal>
    </div>
  );
};

type StyleParams = Pick<Props, 'className'>;

const useStyles = (params: StyleParams) => {
  const { className } = params;

  const containerClassNames = buildClassNames({
    classNames: classNames.navbar,
    additional: className,
  });

  return { containerClassNames };
};
