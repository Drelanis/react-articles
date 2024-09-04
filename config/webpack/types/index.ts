import { BuildMode } from '../constants';

export type BuildPaths = {
  build: string;
  entry: string;
  html: string;
  src: string;
};

export type BuildEnv = {
  apiUrl: string;
  mode: BuildMode;
  port: number;
};

export type BuildOptions = {
  apiUrl: string;
  isDev: boolean;
  mode: BuildMode;
  paths: BuildPaths;
  port: number;
  project: 'storybook' | 'frontend' | 'jest';
};
