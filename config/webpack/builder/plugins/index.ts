import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import CopyPlugin from 'copy-webpack-plugin';
import HTMLWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { DefinePlugin, ProgressPlugin, WebpackPluginInstance } from 'webpack';

import { BuildOptions } from '../../types';

export const buildPlugins = ({
  paths,
  isDev,
  apiUrl,
  project,
}: BuildOptions): WebpackPluginInstance[] => {
  const plugins = [
    new HTMLWebpackPlugin({
      template: paths.html,
    }),
    !isDev && new ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[id].[contenthash:8].css',
    }),
    new DefinePlugin({
      API: JSON.stringify(apiUrl),
      IS_DEV: JSON.stringify(isDev),
      PROJECT: JSON.stringify(project),
    }),
    !isDev &&
      new CopyPlugin({
        patterns: [{ from: paths.locales, to: paths.buildLocales }],
      }),
    isDev && new ReactRefreshWebpackPlugin(),
    // * For analyzing bundles
    // new BundleAnalyzerPlugin({
    //   openAnalyzer: true,
    // }),
    new CleanWebpackPlugin(),
  ].filter(Boolean) as WebpackPluginInstance[];

  return plugins;
};
