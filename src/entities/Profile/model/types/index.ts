import { Country } from '$entities/CountrySelector';
import { Currency } from '$entities/CurrencySelector';
import { ValidateErrorHintKeys } from '$shared';

export type ProfileType = {
  age?: number;
  avatar?: string;
  city?: string;
  country?: Country;
  currency?: Currency;
  firstName?: string;
  id?: string;
  lastName?: string;
  userName?: string;
};

export type ProfileSchema = {
  isLoading: boolean;
  readonly: boolean;
  data?: ProfileType;
  error?: string;
  form?: ProfileType;
  validationError?: ValidateErrorHintKeys[];
};
