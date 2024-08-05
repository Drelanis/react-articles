import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';

import { BuildOptions } from '../../types';

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
