import { ValidateErrorHintKeys } from './validation';

export type ErrorHints =
  | ''
  | 'LOGIN_ERROR'
  | 'PASSWORD_ERROR'
  | 'USER_NAME_ERROR'
  | 'COMMON_ERROR'
  | ValidateErrorHintKeys;
