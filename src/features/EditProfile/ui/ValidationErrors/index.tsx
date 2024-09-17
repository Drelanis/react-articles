import { FC, memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { getProfileValidateErrors } from '../../model';

import { Text, TextAlign, TextVariants, VStack } from '$shared';

export const ValidationErrors: FC = memo(() => {
  const validationErrors = useSelector(getProfileValidateErrors);

  const { t } = useTranslation();

  const ErrorsComponents = useMemo(
    () =>
      validationErrors?.map((validateError) => {
        return (
          <Text
            data-testid="profileCard.validationError"
            key={validateError}
            variant={TextVariants.ERROR}
            text={t(validateError)}
            align={TextAlign.CENTER}
          />
        );
      }),
    [t, validationErrors],
  );

  if (!validationErrors) {
    return null;
  }

  return <VStack>{ErrorsComponents}</VStack>;
});
