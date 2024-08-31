import { ErrorHints } from '$shared';

export type LoginSchema = {
  isLoading: boolean;
  password: string;
  userName: string;
  error?: ErrorHints;
};
