import {
  ArticleCodeBlock,
  ArticleImageBlock,
  ArticleTextBlock,
} from '../components';
import { ArticleBlockVariant } from '../model/constants';

export const ArticleBlockHints = {
  [ArticleBlockVariant.CODE]: ArticleCodeBlock,
  [ArticleBlockVariant.IMAGE]: ArticleImageBlock,
  [ArticleBlockVariant.TEXT]: ArticleTextBlock,
};

export enum ArticleType {
  ALL = 'ALL',
  IT = 'IT',
  SCIENCE = 'SCIENCE',
  ECONOMICS = 'ECONOMICS',
}
