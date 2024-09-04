import path from 'path';
import { Configuration, DefinePlugin } from 'webpack';

import { BuildPaths } from '../webpack';

import { buildCssLoader } from './webpack';

export default ({ config }: { config: Configuration }) => {
  const paths: BuildPaths = {
    build: '',
    html: '',
    entry: '',
    src: path.resolve(__dirname, '..', '..', 'src'),
  };

  if (!config || !config.resolve || !config.module?.rules) {
    return config;
  }

  const updatedConfig = { ...config };

  updatedConfig.resolve!.modules?.push(paths.src);
  updatedConfig.resolve!.extensions?.push('.ts', '.tsx');
  updatedConfig.resolve!.alias = {
    ...config.resolve.alias,
    $app: path.resolve(__dirname, '/src/app/'),
    $shared: path.resolve(__dirname, '/src/shared/'),
    $entities: path.resolve(__dirname, '/src/entities/'),
    $features: path.resolve(__dirname, '/src/features/'),
    $pages: path.resolve(__dirname, '/src/pages/'),
    $widgets: path.resolve(__dirname, '/src/widgets/'),
  };

  // eslint-disable-next-line no-param-reassign -- exception
  updatedConfig.module!.rules = updatedConfig?.module?.rules?.map((rule) => {
    if (typeof rule === 'object' && rule !== null && 'test' in rule) {
      if (/svg/.test(rule.test as string)) {
        return { ...rule, exclude: /\.svg$/i };
      }
    }

    return rule;
  });

  updatedConfig.module!.rules!.push({
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  });
  updatedConfig.module!.rules!.push(buildCssLoader(true));

  // eslint-disable-next-line no-param-reassign -- exception
  updatedConfig.plugins = [
    ...(updatedConfig.plugins || []),
    new DefinePlugin({
      API: JSON.stringify(''),
      IS_DEV: JSON.stringify(true),
      PROJECT: JSON.stringify('storybook'),
    }),
  ];

  return updatedConfig;
};
