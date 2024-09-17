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
        data-testid="editProfile.cancelButton"
        className={classNames.editBtn}
        variant={ButtonVariant.OUTLINE_RED}
        onClick={onCancelEdit}
      >
        {t('cancel')}
      </Button>
      <Button
        data-testid="editProfile.saveButton"
        variant={ButtonVariant.OUTLINE}
        onClick={onSave}
      >
        {t('save')}
      </Button>
    </>
  );
};
