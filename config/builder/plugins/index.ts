import HTMLWebpackPlugin from 'html-webpack-plugin';
import { ProgressPlugin, WebpackPluginInstance } from 'webpack';
import { BuildOptions } from '../../types';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export const buildPlugins = ({
  paths,
}: BuildOptions): WebpackPluginInstance[] => {
  const plugins: WebpackPluginInstance[] = [
    new HTMLWebpackPlugin({
      template: paths.html,
    }),
    new ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash].css',
      chunkFilename: 'css/[id].[contenthash].css',
    }),
  ];

  return plugins;
};
