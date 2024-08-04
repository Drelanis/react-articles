import HTMLWebpackPlugin from 'html-webpack-plugin';
import { DefinePlugin, ProgressPlugin, WebpackPluginInstance } from 'webpack';
import { BuildOptions } from '../../types';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export const buildPlugins = ({
  paths,
  isDev,
}: BuildOptions): WebpackPluginInstance[] => {
  const plugins: WebpackPluginInstance[] = [
    new HTMLWebpackPlugin({
      template: paths.html,
    }),
    !isDev && new ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash].css',
      chunkFilename: 'css/[id].[contenthash].css',
    }),
    new DefinePlugin({
      __IS_DEV__: JSON.stringify(isDev),
    }),
  ].filter(Boolean);

  return plugins;
};
