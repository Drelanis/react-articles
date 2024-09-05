import { User } from '$entities/User';

export type CommentType = {
  id: string;
  text: string;
  user: User;
};
