import { BuildMode } from '../constants';

export type BuildPaths = {
  build: string;
  entry: string;
  html: string;
  src: string;
};

export type BuildEnv = {
  mode: BuildMode;
  port: number;
};

export type BuildOptions = {
  isDev: boolean;
  mode: BuildMode;
  paths: BuildPaths;
  port: number;
};
