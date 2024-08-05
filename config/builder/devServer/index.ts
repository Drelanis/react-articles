import { BuildOptions } from '../../types';
import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';

export const buildDevServer = (
  options: BuildOptions,
): DevServerConfiguration => {
  return {
    hot: true,
    port: options.port,
    open: true,
    historyApiFallback: true,
  };
};
