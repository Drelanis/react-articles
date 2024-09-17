import { ValidateErrorHintKeys } from './validation';

export enum CommonErrorHints {
  LOGIN_ERROR = 'LOGIN_ERROR',
  PASSWORD_ERROR = 'PASSWORD_ERROR',
  USER_NAME_ERROR = 'USER_NAME_ERROR',
  COMMON_ERROR = 'COMMON_ERROR',
}

export type CommonErrorHintsKeys = keyof typeof CommonErrorHints;

export type ErrorHints = '' | CommonErrorHintsKeys | ValidateErrorHintKeys;
