import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { getProfileReadonly, profileActions } from '../../model';
import { EditingController } from '../EditingController';

import {
  buildClassNames,
  Button,
  ButtonVariant,
  HStack,
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
      data-testid="editProfile.editButton"
      variant={ButtonVariant.OUTLINE}
      onClick={onEdit}
    >
      {t('edit')}
    </Button>
  ) : (
    <EditingController />
  );

  return (
    <HStack max justify="between" className={containerClassNames}>
      <Text title={t('profile')} />
      {canEdit && EditController}
    </HStack>
  );
};

type UseStylesParams = Pick<Props, 'className'>;

const useStyles = (params: UseStylesParams) => {
  const { className = '' } = params;

  const containerClassNames = buildClassNames({
    classNames: '',
    additional: [className],
  });

  return { containerClassNames };
};
