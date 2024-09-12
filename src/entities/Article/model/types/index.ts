import { ArticleBlockVariant, ArticleVariant } from '../constants';

import { User } from '$entities/User';

export enum ArticleSortField {
  VIEWS = 'views',
  TITLE = 'title',
  CREATED = 'createdAt',
}

export type ArticleBlockBase = {
  id: string;
  type: ArticleBlockVariant;
};

export interface ArticleCodeBlockType extends ArticleBlockBase {
  code: string;
  type: ArticleBlockVariant.CODE;
}

export interface ArticleImageBlockType extends ArticleBlockBase {
  src: string;
  title: string;
  type: ArticleBlockVariant.IMAGE;
}

export interface ArticleTextBlockType extends ArticleBlockBase {
  paragraphs: string[];
  type: ArticleBlockVariant.TEXT;
  title?: string;
}

export type ArticleBlock =
  | ArticleCodeBlockType
  | ArticleImageBlockType
  | ArticleTextBlockType;

export type Article = {
  blocks: ArticleBlock[];
  createdAt: string;
  id: string;
  img: string;

  subtitle: string;
  title: string;
  type: ArticleVariant[];
  user: User;
  views: number;
};

export type ArticleDetailsSchema = {
  isLoading: boolean;
  data?: Article;
  error?: string;
};
