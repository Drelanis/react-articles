import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { EditingController } from '../../EditingController';

import classNames from './index.module.scss';

import { getProfileReadonly, profileActions } from '$entities/Profile/model';
import {
  buildClassNames,
  Button,
  ButtonVariant,
  Text,
  useAppDispatch,
} from '$shared';

interface Props {
  canEdit?: boolean;
  className?: string;
}

export const ProfileHeader = (props: Props) => {
  const { className, canEdit } = props;

  const { t } = useTranslation('profile');

  const readOnly = useSelector(getProfileReadonly);
  const dispatch = useAppDispatch();

  const { containerClassNames } = useStyles({ className });

  const onEdit = useCallback(() => {
    dispatch(profileActions.setReadonly(false));
  }, [dispatch]);

  const EditController = readOnly ? (
    <Button
      className={classNames.editBtn}
      variant={ButtonVariant.OUTLINE}
      onClick={onEdit}
    >
      {t('edit')}
    </Button>
  ) : (
    <EditingController />
  );

  return (
    <div className={containerClassNames}>
      <Text title={t('profile')} />
      {canEdit && EditController}
    </div>
  );
};

type UseStylesParams = Pick<Props, 'className'>;

const useStyles = (params: UseStylesParams) => {
  const { className = '' } = params;

  const containerClassNames = buildClassNames({
    classNames: classNames.profileHeader,
    additional: [className],
  });

  return { containerClassNames };
};
