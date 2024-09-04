import { LoginSchema } from '../types';

export const loginInitialState: LoginSchema = {
  isLoading: false,
  password: '123',
  userName: 'admin',
  error: '',
};
