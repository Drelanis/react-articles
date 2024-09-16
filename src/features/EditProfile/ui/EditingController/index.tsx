import { useTranslation } from 'react-i18next';

import { useEditingController } from '../../model';

import classNames from './index.module.scss';

import { Button, ButtonVariant } from '$shared';

export const EditingController = () => {
  const { onCancelEdit, onSave } = useEditingController();

  const { t } = useTranslation('profile');

  return (
    <>
      <Button
        className={classNames.editBtn}
        variant={ButtonVariant.OUTLINE_RED}
        onClick={onCancelEdit}
      >
        {t('cancel')}
      </Button>
      <Button variant={ButtonVariant.OUTLINE} onClick={onSave}>
        {t('save')}
      </Button>
    </>
  );
};
