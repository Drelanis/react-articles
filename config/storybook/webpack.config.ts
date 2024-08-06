import path from 'path';
import { Configuration } from 'webpack';

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

  config.resolve.modules?.push(paths.src);
  config.resolve.extensions?.push('.ts', '.tsx');

  // eslint-disable-next-line no-param-reassign -- exception
  config.module.rules = config?.module?.rules?.map((rule) => {
    if (typeof rule === 'object' && rule !== null && 'test' in rule) {
      if (/svg/.test(rule.test as string)) {
        return { ...rule, exclude: /\.svg$/i };
      }
    }

    return rule;
  });

  config.module.rules.push({
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  });
  config.module.rules.push(buildCssLoader(true));

  return config;
};
