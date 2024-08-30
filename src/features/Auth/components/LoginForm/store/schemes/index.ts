import { LoginSchema } from '../types';

export const loginInitialState: LoginSchema = {
  isLoading: false,
  password: '',
  userName: '',
  error: '',
};
