import { BuildOptions } from 'config/types';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { RuleSetRule } from 'webpack';

export const buildLoaders = ({ isDev }: BuildOptions): RuleSetRule[] => {
  const typescriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };

  const scssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      'css-loader',
      'sass-loader',
    ],
  };

  return [typescriptLoader, scssLoader];
};
