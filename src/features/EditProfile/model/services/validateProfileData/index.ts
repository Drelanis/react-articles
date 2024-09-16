import { ProfileType } from '$entities';
import { ValidateErrorHints } from '$shared';

export const validateProfileData = (profile?: ProfileType) => {
  if (!profile) {
    return [ValidateErrorHints.NO_DATA];
  }

  const { firstName, lastName, age, country } = profile;
  const errors: ValidateErrorHints[] = [];

  if (!firstName || !lastName) {
    errors.push(ValidateErrorHints.INCORRECT_USER_DATA);
  }

  if (!age || !Number.isInteger(age)) {
    errors.push(ValidateErrorHints.INCORRECT_AGE);
  }

  if (!country) {
    errors.push(ValidateErrorHints.INCORRECT_COUNTRY);
  }

  return errors;
};
