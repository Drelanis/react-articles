import { Configuration } from 'webpack';
import { BuildOptions } from '../types';
import { buildDevServer } from './devServer';
import { buildLoaders } from './loaders';
import { buildPlugins } from './plugins';
import { buildResolvers } from './resolvers';

export function buildWebpackConfig(options: BuildOptions): Configuration {
  const { paths, mode, isDev } = options;

  return {
    mode: mode,
    entry: paths.entry,
    output: {
      filename: '[name].[contenthash].js',
      path: paths.build,
      clean: true,
    },
    plugins: buildPlugins(options),
    module: {
      rules: buildLoaders(options),
    },
    resolve: buildResolvers(),
    devtool: isDev ? 'inline-source-map' : undefined,
    devServer: isDev ? buildDevServer(options) : undefined,
  };
}
