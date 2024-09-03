import { Country } from '$entities/CountrySelector';
import { Currency } from '$entities/CurrencySelector';

export type Profile = {
  age?: number;
  avatar?: string;
  city?: string;
  country?: Country;
  currency?: Currency;
  firstName?: string;
  lastName?: string;
  userName?: string;
};

export type ProfileSchema = {
  isLoading: boolean;
  readonly: boolean;
  data?: Profile;
  error?: string;
  form?: Profile;
};
