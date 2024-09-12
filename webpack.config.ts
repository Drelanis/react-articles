import path from 'path';
import { Configuration } from 'webpack';

import { BuildEnv, BuildPaths, buildWebpackConfig } from './config';

const COMMON_PORT = 3000;

export default (env: BuildEnv) => {
  const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    build: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    src: path.resolve(__dirname, 'src'),
    locales: path.resolve(__dirname, 'public', 'locales'),
    buildLocales: path.resolve(__dirname, 'build', 'locales'),
  };

  const mode = env.mode || 'development';
  const isDev = mode === 'development';
  const PORT = env.port || COMMON_PORT;
  const apiUrl = env.apiUrl || 'http://localhost:8000';

  const config: Configuration = buildWebpackConfig({
    mode,
    paths,
    isDev,
    apiUrl,
    port: PORT,
    project: 'frontend',
  });

  return config;
};
